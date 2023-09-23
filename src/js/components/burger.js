export function burgerMenu() {
  const burger = document.querySelector(".burger__line");
  const menu = document.querySelector(".nav");
  const body = document.querySelector(".page__body");
  const overlayBg = document.querySelector(".overlaybg");

  function toggleMenu(menu, burger, overlayBg, body) {
    menu.classList.toggle("_active");
    burger.classList.toggle("burger__line--active");
    overlayBg.classList.toggle("_active");
    body.classList.toggle("locked");
  }

  function closeMenu(menu, burger, overlayBg, body) {
    menu.classList.remove("_active");
    burger.classList.remove("burger__line--active");
    overlayBg.classList.remove("_active");
    body.classList.remove("locked");
  }

  burger.addEventListener("click", () => {
    toggleMenu(menu, burger, overlayBg, body);
  });

  overlayBg.addEventListener("click", () => {
    closeMenu(menu, burger, overlayBg, body);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767.98) {
      closeMenu(menu, burger, overlayBg, body);
    }
  });
}
