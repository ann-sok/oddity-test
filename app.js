document.addEventListener("DOMContentLoaded", () => {
  const luckyBtn = document.getElementById("luckyBtn");
  const logoImg = document.querySelector(".logo__img");
  if (logoImg.dataset.altSrc) {
    luckyBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const currentSrc = [logoImg.src, logoImg.srcset, logoImg.alt];
      const altSrc = [
        logoImg.dataset.altSrc,
        logoImg.dataset.altSrcset,
        logoImg.dataset.altAlt,
      ];
      logoImg.src = altSrc[0];
      logoImg.srcset = altSrc[1];
      logoImg.alt = altSrc[2];
      logoImg.dataset.altSrc = currentSrc[0];
      logoImg.dataset.altSrcset = currentSrc[1];
      logoImg.dataset.altAlt = currentSrc[2];
    });
  }
});
