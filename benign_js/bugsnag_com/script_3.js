/* 元のURL: https://bugsnag.com */

const topBar = document.getElementById("top-bar");
const header = document.getElementById("header");
const htmlElement = document.documentElement;
document.addEventListener("DOMContentLoaded", () => {
    let lastScrollY = window.scrollY;
    if (!topBar) return;

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;
        let stickyOffset = 0;
        if (topBar && !htmlElement.classList.contains('nav-toggle')) {
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                Object.assign(topBar.style, {
                    visibility: 'hidden',
                    maxHeight: '0px',
                    opacity: '0',
                    zIndex: '-1',
                    borderColor: 'transparent',
                    borderWidth: '0px'
                });
                header.classList.add('scrolled');
            } else if (currentScrollY < lastScrollY) {
                Object.assign(topBar.style, {
                    visibility: 'visible',
                    maxHeight: '100px',
                    opacity: '100',
                    zIndex: '0',
                    borderColor: '',
                    borderWidth: ''
                });
                header.classList.remove('scrolled');
            }
            lastScrollY = currentScrollY;
            if(header) {
                stickyOffset = header.offsetHeight;
                htmlElement.style.setProperty('--sticky-offset', `${stickyOffset}px`);
            }
        }
    });
});

const dropdownNavbar = document.querySelectorAll(".js-dropdown-button");
document.addEventListener("click", (e) => {
    if (!e.target.closest(".js-dropdown-button")) {
        dropdownNavbar.forEach((item) => {
            item.classList.remove("active");
            item.parentElement.querySelector(".js-dropdown-menu")?.classList.remove("active");
        });
    }
});
[...dropdownNavbar].forEach((item) =>
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    [...dropdownNavbar].forEach((dropdown) => {
      if (dropdown !== item) {
        dropdown.classList.remove("active");
        dropdown.parentElement
          .querySelector(".js-dropdown-menu")
          ?.classList.remove("active");
      }
    });
    item.classList.toggle("active");
    item.parentElement
      .querySelector(".js-dropdown-menu")
      ?.classList.toggle("active");
  })
);
document.addEventListener("click", () => {
  [...dropdownNavbar].forEach((item) => {
    item.classList.remove("active");
    item.parentElement
      .querySelector(".js-dropdown-menu")
      ?.classList.remove("active");
  });
});
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById('menu-toggle');
    const body = document.body;
    const htmlElement = document.documentElement;
    const loginModal = document.querySelector(".js-tw-login-modal");

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        htmlElement.classList.toggle('nav-toggle');
        body.classList.toggle('overflow-hidden');
        body.classList.toggle("max-w-screen");
        if(loginModal && !loginModal.classList.contains('active') && !htmlElement.classList.contains('nav-toggle') ) {
          body.classList.remove('overflow-hidden');
        }
    });

    window.addEventListener('resize', () => {
      if (htmlElement.classList.contains('nav-toggle') && window.innerWidth > 991) {
          menuToggle.click()
      }
  });
});






