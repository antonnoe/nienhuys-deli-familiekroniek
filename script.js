document.addEventListener("DOMContentLoaded", () => {
  const cover = document.querySelector(".cover-image");
  const fallback = document.querySelector(".cover-fallback");

  if (!cover || !fallback) {
    return;
  }

  cover.addEventListener("error", () => {
    cover.hidden = true;
    fallback.hidden = false;
  });
});
