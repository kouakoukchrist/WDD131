document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  const gallery = document.querySelector(".gallery");
  const modal = document.querySelector("dialog");
  const modalImage = modal?.querySelector("img");
  const closeButton = modal?.querySelector(".close-viewer");

  if (!menuBtn || !navLinks || !gallery || !modal || !modalImage || !closeButton) return;

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  gallery.addEventListener("click", (e) => {
    if (e.target.tagName !== "IMG") return;

    const src = e.target.getAttribute("src");
    const alt = e.target.getAttribute("alt");

    const full = src;

    modalImage.src = full;
    modalImage.alt = alt;
    modal.showModal();
  });

  closeButton.addEventListener("click", () => modal.close());

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
  });
});
