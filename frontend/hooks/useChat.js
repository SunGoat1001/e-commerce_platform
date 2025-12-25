"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { io } from "socket.io-client";
import { API_URL, SOCKET_URL } from "@/lib/constants";

const buildConversationId = (a, b) => {
    if (!a || !b) return null;
    const ids = [a.toString(), b.toString()].sort();
    return `${ids[0]}-${ids[1]}`;
};

export default function useChat(initialParticipantId) {
    const socketRef = useRef(null);
    const [currentUserId, setCurrentUserId] = useState(null);
    const [conversations, setConversations] = useState([]);
    const [messages, setMessages] = useState([]);
    const [activeParticipantId, setActiveParticipantId] = useState(
        initialParticipantId || null
    );
    const [loadingConversations, setLoadingConversations] = useState(false);
    const [loadingMessages, setLoadingMessages] = useState(false);
    const [socketConnected, setSocketConnected] = useState(false);

    const activeConversationId = useMemo(() => {
        if (!currentUserId || !activeParticipantId) return null;
        return buildConversationId(currentUserId, activeParticipantId);
    }, [currentUserId, activeParticipantId]);

    const connectSocket = useCallback(() => {
        if (socketRef.current) return socketRef.current;

        const socket = io(SOCKET_URL, {
            withCredentials: true,
            transports: ["websocket", "polling"],
            autoConnect: false,
        });

        socket.on("connect", () => setSocketConnected(true));
        socket.on("disconnect", () => setSocketConnected(false));

        socketRef.current = socket;
        socket.connect();
        return socket;
    }, []);

    const fetchCurrentUser = useCallback(async () => {
        try {
            const res = await fetch(`${API_URL}/user/info`, {
                credentials: "include",
            });
            if (!res.ok) return;
            const payload = await res.json();
            const userId = payload?.data?.user?._id;
            if (userId) setCurrentUserId(userId.toString());
        } catch (error) {
            console.error("Failed to load current user for chat", error);
        }
    }, []);

    const fetchConversations = useCallback(async () => {
        setLoadingConversations(true);
        try {
            const res = await fetch(`${API_URL}/chat/conversations`, {
                credentials: "include",
            });
            const payload = await res.json();
            if (res.ok) {
                setConversations(payload?.data?.conversations || []);
            }
        } catch (error) {
            console.error("Failed to fetch conversations", error);
        } finally {
            setLoadingConversations(false);
        }
    }, []);

    const fetchHistory = useCallback(
        async (otherUserId) => {
            if (!otherUserId) return;
            setLoadingMessages(true);
            try {
                const res = await fetch(`${API_URL}/chat/history/${otherUserId}`, {
                    credentials: "include",
                });
                const payload = await res.json();
                if (res.ok) {
                    setActiveParticipantId(otherUserId);
                    setMessages(payload?.data?.messages || []);

                    setConversations((prev) => {
                        return prev.map((c) =>
                            c.otherUser?.id === otherUserId
                                ? { ...c, unreadCount: 0, lastMessage: payload?.data?.messages?.slice(-1)[0] || c.lastMessage }
                                : c
                        );
                    });
                }
            } catch (error) {
                console.error("Failed to fetch chat history", error);
            } finally {
                setLoadingMessages(false);
            }
        },
        []
    );

    const upsertConversationFromMessage = useCallback(
        (message) => {
            if (!message) return;
            const { sender, receiver, content, timestamp, isRead, conversationId } = message;
            const otherUserId = sender?.toString() === currentUserId ? receiver?.toString() : sender?.toString();

            if (!otherUserId) return;

            setConversations((prev) => {
                const existing = prev.find((c) => c.otherUser?.id === otherUserId);
                if (existing) {
                    return prev.map((c) =>
                        c.otherUser?.id === otherUserId
                            ? {
                                ...c,
                                lastMessage: {
                                    id: message.id || message._id,
                                    sender,
                                    receiver,
                                    content,
                                    timestamp,
                                    isRead,
                                },
                                unreadCount:
                                    activeParticipantId === otherUserId && activeConversationId === conversationId
                                        ? 0
                                        : c.unreadCount + (sender?.toString() !== currentUserId ? 1 : 0),
                            }
                            : c
                    );
                }

                return [
                    {
                        conversationId,
                        otherUser: { id: otherUserId, name: "Conversation", avatar: null },
                        lastMessage: {
                            id: message.id || message._id,
                            sender,
                            receiver,
                            content,
                            timestamp,
                            isRead,
                        },
                        unreadCount: sender?.toString() === currentUserId ? 0 : 1,
                    },
                    ...prev,
                ];
            });
        },
        [activeConversationId, activeParticipantId, currentUserId]
    );

    const handleIncomingMessage = useCallback(
        (message) => {
            if (!message) return;
            const { sender, receiver, conversationId } = message;
            const participantId = sender?.toString() === currentUserId ? receiver?.toString() : sender?.toString();

            if (participantId && activeParticipantId === participantId) {
                setMessages((prev) => [...prev, message]);
            }

            upsertConversationFromMessage(message);

            if (!conversations.some((c) => c.otherUser?.id === participantId)) {
                fetchConversations();
            }
        },
        [activeParticipantId, conversations, currentUserId, fetchConversations, upsertConversationFromMessage]
    );

    const sendMessage = useCallback(
        (receiverId, content) => {
            if (!receiverId || !content?.trim() || !currentUserId) return;
            const socket = connectSocket();
            const trimmed = content.trim();

            const optimistic = {
                id: `temp-${Date.now()}`,
                conversationId: buildConversationId(currentUserId, receiverId),
                sender: currentUserId,
                receiver: receiverId,
                content: trimmed,
                timestamp: new Date().toISOString(),
                isRead: true,
            };

            setMessages((prev) => [...prev, optimistic]);
            upsertConversationFromMessage(optimistic);

            socket.emit("sendMessage", { receiverId, content: trimmed }, (resp) => {
                if (resp?.ok && resp.message) {
                    const saved = resp.message;
                    setMessages((prev) =>
                        prev.map((msg) => (msg.id === optimistic.id ? saved : msg))
                    );
                    upsertConversationFromMessage(saved);
                    fetchConversations();
                }
            });
        },
        [connectSocket, currentUserId, fetchConversations, upsertConversationFromMessage]
    );

    useEffect(() => {
        connectSocket();
        fetchCurrentUser();
        fetchConversations();

        return () => {
            if (socketRef.current) {
                socketRef.current.off("newMessage");
                socketRef.current.disconnect();
            }
        };
    }, [connectSocket, fetchConversations, fetchCurrentUser]);

    useEffect(() => {
        const socket = socketRef.current;
        if (!socket) return undefined;
        socket.on("newMessage", handleIncomingMessage);
        return () => socket.off("newMessage", handleIncomingMessage);
    }, [handleIncomingMessage]);

    useEffect(() => {
        if (initialParticipantId) {
            fetchHistory(initialParticipantId);
        }
    }, [fetchHistory, initialParticipantId]);

    return {
        conversations,
        messages,
        activeParticipantId,
        activeConversationId,
        loadingConversations,
        loadingMessages,
        socketConnected,
        currentUserId,
        setActiveParticipantId,
        fetchConversations,
        fetchHistory,
        sendMessage,
    };
}
