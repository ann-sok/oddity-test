document.addEventListener("DOMContentLoaded", () => {
  const luckyBtn = document.getElementById("luckyBtn");
  const logoImg = document.querySelector(".logo__img");
  if (logoImg.dataset.altSrc) {
    luckyBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const imageProperties = {
        current: {
          src: logoImg.src,
          srcset: logoImg.srcset,
          alt: logoImg.alt,
        },
        alt: {
          src: logoImg.dataset.altSrc,
          srcset: logoImg.dataset.altSrcset,
          alt: logoImg.dataset.altAlt,
        },
      };

      ({
        src: logoImg.src,
        srcset: logoImg.srcset,
        alt: logoImg.alt,
      } = imageProperties.alt);
      ({
        src: logoImg.dataset.altSrc,
        srcset: logoImg.dataset.altSrcset,
        alt: logoImg.dataset.altAlt,
      } = imageProperties.current);
    });
  }
});
