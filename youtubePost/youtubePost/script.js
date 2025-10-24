document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("sidebar");

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", function () {
      sidebar.classList.toggle("sidebar-collapsed");
    });
  }
});

// Filter bar: active button logic
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Thumbnail preview video on hover (desktop only)
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  document.querySelectorAll(".thumbnail-wrapper").forEach((wrapper) => {
    const previewVideo = wrapper.querySelector(".preview-video");
    if (previewVideo) {
      wrapper.addEventListener("mouseenter", () => {
        previewVideo.currentTime = 0;
        previewVideo.play();
      });
      wrapper.addEventListener("mouseleave", () => {
        previewVideo.pause();
        previewVideo.currentTime = 0;
      });
    }
  });
}

// Modal open/close logic
let Btn = document.getElementById("openModal");
let modal = document.getElementById("modal1");

function removeModal() {
  if (modal.style.display === "flex") {
    modal.style.display = "none";
  } else if (modal.style.display === "none") {
    modal.style.display = "flex";
  }
}

// POST functionality
let titleInput = document.getElementById("title");
let channelNameInput = document.getElementById("channelName");
let videoInput = document.getElementById("videoFile");
let videoBox = document.getElementById("videoBox");
let thumbnailInput = document.getElementById("thumbnailVideo")

function post() {
  let title = titleInput.value.trim();
  let channel = channelNameInput.value.trim();
  let thumbFile = thumbnailInput.files[0];

  if (!title || !channel || !thumbFile) {
    alert("Please fill all fields and select a thumbnail!");
    return;
  }

  // Convert uploaded thumbnail to a temporary URL
  let thumbURL = URL.createObjectURL(thumbFile);

  // Add new video card dynamically
  videoBox.innerHTML += `
    <div class="video-card">
      <div class="thumbnail-wrapper">
        <img class="thumbnail" src="${thumbURL}" alt="Thumbnail" />
      </div>
      <div class="video-info">
        <img src="default_channel.jpg" alt="Channel" class="channel-icon" />
        <div class="meta">
          <h3 class="title">${title}</h3>
          <p class="channel-name">${channel}</p>
          <p class="stats">0 views • just now</p>
        </div>
      </div>
    </div>
  `;

  // Reset inputs and close modal
  titleInput.value = "";
  channelNameInput.value = "";
  thumbnailInput.value = "";
  modal.style.display = "none";
}
