document.addEventListener("DOMContentLoaded", () => {
  const servicesBtn = document.querySelector(".services__btn-toggler");
  const menu = document.querySelector(".services-menu");
  const luckyBtn = document.getElementById("luckyBtn");
  const logoImg = document.querySelector(".logo__img");

  servicesBtn.addEventListener("click", (event) => {
    event.preventDefault();
    menu.classList.toggle("display-none");

    if (menu.scrollHeight > menu.clientHeight) {
      console.log(menu.scrollHeight);
      console.log(menu.clientHeight);
      menu.style.paddingRight = "0";
    }
  });

  if (luckyBtn) {
    if (!logoImg) return;

    luckyBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const logoImgProperties = {
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
      } = logoImgProperties.alt);
      ({
        src: logoImg.dataset.altSrc,
        srcset: logoImg.dataset.altSrcset,
        alt: logoImg.dataset.altAlt,
      } = logoImgProperties.current);
    });
  }
});
