document.addEventListener("DOMContentLoaded", () => {
  const fallbackPairs = [
    [document.querySelector(".cover-image"), document.querySelector(".cover-fallback")],
    [document.querySelector(".map-image"), document.querySelector(".map-fallback")],
  ];

  fallbackPairs.forEach(([image, fallback]) => {
    if (!image || !fallback) {
      return;
    }

    const showFallback = () => {
      image.hidden = true;
      fallback.hidden = false;
    };

    image.addEventListener("error", showFallback);

    if (image.complete && image.naturalWidth === 0) {
      showFallback();
    }
  });
});
