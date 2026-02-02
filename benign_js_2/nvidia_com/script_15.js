/* 元のURL: https://nvidia.com */

    (() => {
      const countrySelector = document.querySelector('#country-selector');
      const GEO_LOCATOR_COOKIE_NAME = 'geo_locator';
      const DISMISSAL_DAYS = 7;
      
      // Get cookie value by name
      const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        return parts.length === 2 ? parts.pop().split(";").shift() : null;
      };
      
      // Set cookie with expiration and domain
      const setCookie = (name, value, days) => {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value};${expires};domain=.nvidia.com;path=/`;
      };
      
      // Get geo locator cookie data
      const getGeoLocatorCookie = () => {
        const cookieValue = getCookie(GEO_LOCATOR_COOKIE_NAME);
        if (!cookieValue) return null;
        try {
          return JSON.parse(cookieValue);
        } catch (e) {
          return null;
        }
      };
      
      // Set geo locator cookie data
      const setGeoLocatorCookie = (data) => {
        setCookie(GEO_LOCATOR_COOKIE_NAME, JSON.stringify(data), DISMISSAL_DAYS);
      };
      
      // Check if Geo Locator was dismissed
      const isDismissed = () => {
        const cookieData = getGeoLocatorCookie();
        return cookieData && cookieData.dismissed === true;
      };
      
      // Set dismissal status
      const setDismissed = () => {
        const existingData = getGeoLocatorCookie() || {};
        const updatedData = {
          ...existingData,
          dismissed: true,
          dismissedAt: new Date().toISOString()
        };
        setGeoLocatorCookie(updatedData);
      };
    
      // Update select option values based on <link rel="alternate"> in head.
      const updateOptionValuesFromHead = () => {
        const alternateLinks = document.querySelectorAll('head link[rel="alternate"][hreflang][href]');
        if (!alternateLinks.length) return;
        if (!countrySelector) return;
        Array.from(countrySelector.options).forEach(option => {
          const optCountry = option.getAttribute('data-country');
          if (!optCountry) return;
          alternateLinks.forEach(link => {
            const hreflang = link.getAttribute('hreflang');
            if (hreflang && hreflang.includes('-') && hreflang.toLowerCase().endsWith(`-${optCountry.toLowerCase()}`)) {
              option.value = link.getAttribute('href');
            }
          });
        });
      };
    
      // Fetch translations from the GraphQL endpoint.
      const fetchTranslations = () => 
        fetch('/graphql/execute.json/geo-locator/translations')
          .then(response => response.json())
          .then(data => data.data.geoLocatorList.items)
          .catch(err => {
            console.error('Error fetching translations:', err);
            return [];
          });
      
      // Check current path against master.disableGeoLocRegExps
      const matchesDisableByRegex = (translations) => {
        const master = translations.find(item => item._variation === 'master');
        if (!master || !Array.isArray(master.disableGeoLocRegExps)) return false;

        const path = window.location.pathname;
        return master.disableGeoLocRegExps.some(pattern => {
          try {
            const rx = new RegExp(pattern);
            return rx.test(path);
          } catch (err) {
            console.error('Invalid regex in disableGeoLocRegExps:', pattern, err);
            return false;
          }
        });
      };

      const getUserGeoLocatorFlag = (translations, userRegion) => {
        const t = translations.find(item => {
          if (item._variation.includes('-')) {
            const regionPart = item._variation.split('-')[1].toUpperCase();
            return regionPart === userRegion.toUpperCase();
          }
          return false;
        });
        return t?.disableGeoLocatorUserRegion;
      };

      const getGeoLocatorFlag = (translations, pageRegion) => {
        const translation = translations.find(item => {
          if (item._variation.includes('-')) {
            const variantRegion = item._variation.split('-')[1].toUpperCase();
            return variantRegion === pageRegion.toUpperCase();
          }
          return false;
        });
        return translation?.disableGeoLocatorPageRegion;
      };
    
      // Select the correct translation by comparing last two characters of _variation with userRegion.
      const getTranslation = (translations, userRegion) => {
        let translation = translations.find(item => {
          if (item._variation.includes('-')) {
            const variantRegion = item._variation.split('-')[1].toUpperCase();
            return variantRegion === userRegion.toUpperCase();
          }
          return false;
        });
        return translation || translations.find(item => item._variation.toLowerCase() === 'master');
      };
    
      // Update the Geo Locator with the fetched translation and update UI.
      const updateGeoLocator = (translation, userRegion, lookupKey) => {
        if (!translation || translation?.disableGeoLocatorPageRegionFlag) return;
        
        // Check if Geo Locator was dismissed
        if (isDismissed()) {
          console.log('Geo Locator was dismissed by user. Will not show for 7 days.');
          return;
        }
        
        const geoLocator = document.querySelector('.geo-locator');
        if (!geoLocator) return;
        
        // Update the message text
        const geoLocatorText = geoLocator.querySelector('.geo-locator-text > p');
        if (geoLocatorText && translation.geoLocatorMessage) {
          geoLocatorText.textContent = translation.geoLocatorMessage.plaintext;
        }
        
        // Update the Continue button text
        const continueButton = geoLocator.querySelector('.geo-locator-cta .btn-content');
        if (continueButton) {
          continueButton.textContent = translation.continue;
        }
        
        // Update the country dropdown selection to match the user's region
        if (countrySelector) {
          // Use lookupKey if provided (for special cases like BE), otherwise use userRegion
          const countryKey = lookupKey || userRegion.toLowerCase();
          const optionToSelect = countrySelector.querySelector(`option[data-country="${countryKey}"]`);
          if (optionToSelect) {
            optionToSelect.selected = true;
            // Also update the Continue button's URL based on the selected option
            if (continueButton) {
              continueButton.href = optionToSelect.value;
            }
          }
        }
        
        // Remove the hide class to display the Geo Locator
        geoLocator.classList.remove('hide');
      };
    
      // Retrieve user's region from the cookie and page region from the xml:lang attribute.
      const userRegion = getCookie("c_code");
      const pageLocale = document.documentElement.getAttribute("xml:lang");
      let pageRegion = null;
      if (pageLocale) {
        const parts = pageLocale.split("-");
        if (parts.length > 1) pageRegion = parts[1].toUpperCase();
      }
    
      // Only proceed if both userRegion and pageRegion exist and they differ.
      if (userRegion && pageRegion && userRegion.toUpperCase() !== pageRegion) {
        // Special case: Skip Geo Locator for Canadian visitors on en-us pages to prevent infinite loop
        if (userRegion.toUpperCase() === 'CA' && pageLocale && pageLocale.toLowerCase() === 'en-us') {
          console.log('Skipping Geo Locator for Canadian visitors on en-us locale to prevent infinite loop.');
          return;
        }
        
        // Special case: Skip Geo Locator for Latin American visitors on es-la pages to prevent infinite loop
        const latinAmericanCountries = ['MX', 'CO', 'AR', 'PE', 'CL'];
        if (latinAmericanCountries.includes(userRegion.toUpperCase()) && pageLocale && pageLocale.toLowerCase() === 'es-la') {
          console.log(`Skipping Geo Locator for ${userRegion} visitors on es-la locale to prevent infinite loop.`);
          return;
        }
        
        // map BE to be-fr, otherwise use raw
        let lookupKey = userRegion.toLowerCase();
        if (lookupKey === 'be') lookupKey = 'be-fr';

        // if there's no matching dropdown entry, bail out
        const userOption = countrySelector.querySelector(`option[data-country="${lookupKey}"]`);
        // If we don't have a matching dropdown option, skip showing the Geo Locator
        if (!userOption) return;

        updateOptionValuesFromHead();
        fetchTranslations().then(translations => {
          if (matchesDisableByRegex(translations)) {
            console.log('Page path matches disableGeoLocRegExps, skipping Geo Locator.');
            return;
          }
          const pageFlag = getGeoLocatorFlag(translations, pageRegion);
          const userFlag = getUserGeoLocatorFlag(translations, userRegion);

          // only show if neither the page‐region nor the user‐region flag is set
          if (!pageFlag && !userFlag) {
            const translation = getTranslation(translations, userRegion);
            updateGeoLocator(translation, userRegion, lookupKey);
          }
        });
    
        // Update Continue button URL on dropdown change.
        if (countrySelector) {
          countrySelector.addEventListener('change', (e) => {
            const selectedUrl = e.target.value;
            const continueButton = document.querySelector('.geo-locator-cta .btn-content');
            if (continueButton) continueButton.href = selectedUrl;
          });
        }
    
        // Close button hides the Geo Locator.
        const closeButton = document.querySelector('.geo-locator .close-button');
        if (closeButton) {
          closeButton.addEventListener('click', () => {
            const geoLocator = document.querySelector('.geo-locator');
            if (geoLocator) {
              geoLocator.classList.add('hide');
              // Set dismissal cookie when user closes the Geo Locator
              setDismissed();
              console.log('Geo Locator dismissed. Will not show for 7 days.');
            }
          });
        }
      } else {
        // If there's no mismatch, do nothing or log as needed.
        console.log("User region and page region match, or data is missing. Geo Locator will not be shown.");
      }
    })();


