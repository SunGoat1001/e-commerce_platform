"use client";

import { useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ConversationList from "./ConversationList";
import MessageThread from "./MessageThread";
import MessageInput from "./MessageInput";
import useChat from "@/hooks/useChat";
import { MessageSquare } from "lucide-react";

export default function ChatLayout() {
  const searchParams = useSearchParams();
  const requestedParticipant = searchParams.get("with");

  const {
    conversations,
    messages,
    activeParticipantId,
    loadingConversations,
    loadingMessages,
    currentUserId,
    fetchHistory,
    sendMessage,
  } = useChat(requestedParticipant);

  useEffect(() => {
    if (requestedParticipant) {
      fetchHistory(requestedParticipant);
    }
  }, [fetchHistory, requestedParticipant]);

  const activeParticipant = useMemo(
    () =>
      conversations.find((c) => c.otherUser?.id === activeParticipantId)
        ?.otherUser || null,
    [conversations, activeParticipantId],
  );

  const handleSelectConversation = (userId) => {
    fetchHistory(userId);
  };

  const handleSend = (text) => {
    if (!activeParticipantId) return;
    sendMessage(activeParticipantId, text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:gap-6 md:px-6">
        <div className="w-full md:w-1/3">
          <ConversationList
            conversations={conversations}
            activeId={activeParticipantId}
            onSelect={handleSelectConversation}
            loading={loadingConversations}
          />
        </div>

        <div className="flex w-full flex-1 flex-col gap-3">
          {activeParticipant ? (
            <>
              <MessageThread
                messages={messages}
                currentUserId={currentUserId}
                otherUser={activeParticipant}
              />
              <MessageInput
                onSend={handleSend}
                disabled={!activeParticipantId}
              />
            </>
          ) : (
            <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed border-orange-200 bg-white/70 p-8 text-center shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <MessageSquare className="h-6 w-6" />
              </div>
              <p className="mt-4 text-lg font-semibold text-gray-900">
                Start chatting
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Choose a conversation or contact a seller from your orders to
                begin.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
