/* 元のURL: https://netflix.net */
 // Customization: Debug block
      document.addEventListener('DOMContentLoaded', function() {
          const cookieCounterName = 'cookieCounter';
          const localStorageCounterName = 'localStorageCounter';

          // Function to get a cookie value
          function getCookie(name) {
            const value = "; " + document.cookie;
            const parts = value.split("; " + name + "=");
            if (parts.length === 2) return parts.pop().split(';').shift();
            return null;
          }

          // Function to set a cookie value
          function setCookie(name, value, days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/";
        }

          // Increment and store the counter in cookies
          let cookieCounter = parseInt(getCookie(cookieCounterName)) || 0;
          cookieCounter++;
          setCookie(cookieCounterName, cookieCounter, 365);

          // Increment and store the counter in local storage
          let localStorageCounter = parseInt(localStorage.getItem(localStorageCounterName)) || 0;
          localStorageCounter++;
          localStorage.setItem(localStorageCounterName, localStorageCounter);

          // Set up Shift key detection
          let shiftPressCount = 0;
          let lastShiftPressTime = 0;
          const shiftPressLimit = 5;
          const timeLimit = 2000; // 2 seconds

          // Ensure the overlay is hidden on page load
          const overlay = document.getElementById('debugOverlay');
          overlay.style.display = 'none';

          document.addEventListener('keydown', function(event) {
              if (event.key === 'Shift') {
                  const currentTime = new Date().getTime();

                  if (currentTime - lastShiftPressTime <= timeLimit) {
                      shiftPressCount++;
                  } else {
                      shiftPressCount = 1; // Reset count if not within time limit
                  }

                  if (shiftPressCount === shiftPressLimit) {
                      var storedIdentifierLocalStorage = localStorage.getItem('username');
                      var storedIdentifierFromCookie = getCookie('username');
                      var input = document.querySelector('input[id="username"]');
                      var submitButton = document.querySelector('button[type="submit"][name="action"]');
                      showOverlay(
                          "CIC Debug Mode: " +
                          "<br>prompt.name:" + (prompt?.name || "") +
                          "<br>Visits(cookie): " + cookieCounter +
                          "<br>Visits(localstorage): " + localStorageCounter +
                          "<br>Identifier (localStorage): " + storedIdentifierLocalStorage +
                          "<br>Identifier (cookie): " + storedIdentifierFromCookie +
                          "<br>InputElementFound:" + (!!input) +
                          "<br>SubmitButtonElementFound: " + (!!submitButton)
                      );
                      shiftPressCount = 0; // Reset after showing overlay
                  }

                  lastShiftPressTime = currentTime;
              }
          });

          function showOverlay(message) {
              const debugOverlay = document.getElementById('debugOverlay');
              debugOverlay.innerHTML = message;
              debugOverlay.style.display = 'flex';
              setTimeout(() => {
                  debugOverlay.style.display = 'none';
              }, 2000); // Hide after 2 seconds
          }
      });
    

