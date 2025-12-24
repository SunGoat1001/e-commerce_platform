const uploadImageMultipleWrappers = document.querySelectorAll("[upload-image-multiple]");

if (uploadImageMultipleWrappers.length) {
  uploadImageMultipleWrappers.forEach((wrapper) => {
    const uploadImageInput = wrapper.querySelector("[upload-image-input]");
    const imagePreviewContainer = wrapper.querySelector(".image-preview-container");

    if (!uploadImageInput || !imagePreviewContainer) return;

    let selectedFiles = [];

    const syncInputFiles = () => {
      const dataTransfer = new DataTransfer();
      selectedFiles.forEach((file) => dataTransfer.items.add(file));
      uploadImageInput.files = dataTransfer.files;
    };

    const renderPreviews = () => {
      imagePreviewContainer.innerHTML = "";

      selectedFiles.forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const previewItem = document.createElement("div");
          previewItem.className = "image-preview-item position-relative me-2 mb-2";

          const img = document.createElement("img");
          img.src = event.target.result;
          img.className = "form-img-preview";

          const closeButton = document.createElement("button");
          closeButton.className = "close-button";
          closeButton.innerText = "X";
          closeButton.type = "button";
          closeButton.addEventListener("click", () => {
            selectedFiles.splice(index, 1);
            syncInputFiles();
            renderPreviews();
          });

          previewItem.appendChild(img);
          previewItem.appendChild(closeButton);
          imagePreviewContainer.appendChild(previewItem);
        };
        reader.readAsDataURL(file);
      });
    };

    uploadImageInput.addEventListener("change", (e) => {
      selectedFiles = Array.from(e.target.files);
      renderPreviews();
    });
  });
}
