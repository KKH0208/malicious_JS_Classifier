/* 元のURL: https://sharethrough.com */

      // init Weglot
      Weglot.initialize({
        api_key: 'wg_62d9b9b0750831f48721322c8384946b6'
      });

      // on Weglot init
      Weglot.on('initialized', () => {
        // get the current active language
        const currentLang = Weglot.getCurrentLang();
        // call updateDropdownLinks function
        updateSW5DropdownLinks(currentLang);
      });

      // for each of the .wg-element-wrapper language links
      document.querySelectorAll('.wg-element-wrapper.sw5 [lang]').forEach((link) => {
        // add a click event listener
        link.addEventListener('click', function(e) {
          // prevent default
          e.preventDefault();
          // switch to the current active language      
          Weglot.switchTo(this.getAttribute('lang'));
          // call updateDropdownLinks function
          updateSW5DropdownLinks(this.getAttribute('lang'));
        });
      });

      // updateDropdownLinks function
      function updateSW5DropdownLinks(currentLang) {
        // get the wrapper element
        const $wrapper = document.querySelector('.wg-element-wrapper.sw5');
        // if the .w-dropdown-toggle is not the current active language
        if ($wrapper.querySelector('.w-dropdown-toggle').getAttribute('lang') !== currentLang) {
          // get the current active language link
          const $activeLangLink = $wrapper.querySelector('[lang=' + currentLang + ']');
          // swap the dropdown toggle's text with the current active language link text
          const $toggle = $activeLangLink.closest('.wg-element-wrapper').querySelector('.w-dropdown-toggle');
          const toggleTxt = $toggle.textContent;
          const activeLangLinkTxt = $activeLangLink.textContent;
          $toggle.querySelector('div').textContent = activeLangLinkTxt;
          $activeLangLink.textContent = toggleTxt;
          // swap the dropdown toggle's lang attr with the current active language link lang attr  
          const lang = $activeLangLink.getAttribute('lang');
          const toggleLang = $toggle.getAttribute('lang');
          $toggle.setAttribute('lang', lang);
          $activeLangLink.setAttribute('lang', toggleLang);
        }
      }
    

