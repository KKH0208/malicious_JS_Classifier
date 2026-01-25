/* 元のURL: https://sharethrough.com */

      document.addEventListener('DOMContentLoaded', () => {
        if (document.getElementById('global-banner')) return; // prevent duplicates

        // build banner
        const banner = document.createElement('div');
        banner.id = 'global-banner';
        banner.innerHTML = `
    <div class="inner">
      <span>United as One: Sharethrough is now Equativ</span>
      <a class="btn" href="https://equativ.com/press/equativ-and-sharethrough-will-now-operate-under-equativ-brand-solidifying-global-position-as-leading-end-to-end-media-platform" target="_blank" rel="noopener">Learn More â</a>
    </div>`;

        // inject at very top
        document.body.insertBefore(banner, document.body.firstChild);

        // push page content
        const pad = () => {
          document.body.style.paddingTop = banner.offsetHeight + 'px';
        };
        pad();
        window.addEventListener('resize', pad);

        // if a fixed nav exists, keep it below the banner
        const nav = document.querySelector('.w-nav, .navbar, nav');
        if (nav && getComputedStyle(nav).position === 'fixed') {
          const setNav = () => {
            nav.style.top = banner.offsetHeight + 'px';
          };
          setNav();
          window.addEventListener('resize', setNav);
        }
      });
    

