/* 元のURL: https://netflix.net */

      // Login Id
      
        // Loop till page loads
        var DEBUG = false;
        var intervalId = setInterval(function() {
          var input = document.querySelector('input[id="username"]');
          var label = document.querySelector('div[data-dynamic-label-for="username"]');
          var submitButton = document.querySelector('button[type="submit"][name="action"]');
          if (!input || !submitButton) {
            console.log("Missing elements.")
            return;
          }
          clearInterval(intervalId);
          // Attach listeners
          if (label) {
            input.addEventListener('input', function() {
              // grab the label and div elements
              var label = document.querySelector('div[data-dynamic-label-for="username"]');
              // check the value of the input
              if (input?.value?.trim() !== '') {
                // hide the label and div if input has some value
                label.style.display = "none";
              } else {
                // show the label and div if input is empty
                label.style.display = "";
              }
            });
          }

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

          // Step 1: inject event listener logic to save identifier on submit
          if (DEBUG) { console.log('Found  input && submitButton', input, submitButton); }
          submitButton.addEventListener('click', function(event) {
            var username = input.value;
            localStorage.setItem('username', username);
            setCookie('username', username, 365);
            // Optional: Display a message or perform other actions
            if (DEBUG) { console.log('Username saved: ' + username); }
          });
          // Step 2: Then load identifier from storage if there is one
          var usernameFromLocalStorage = localStorage.getItem('username');
          var usernameFromCookie = getCookie('username');
          if (DEBUG) {
            console.log('Loaded usernameFromLocalStorage: ' + usernameFromLocalStorage);
            console.log('Loaded usernameFromCookie: ' + usernameFromCookie);
          }
          if (!usernameFromLocalStorage && !usernameFromCookie) {
            if (DEBUG) { console.log('No username available, return early.'); }
            return;
          }
          if (DEBUG) { console.log('Writing loaded username value to input box:' + usernameFromLocalStorage); }
          input.value =  usernameFromCookie || usernameFromLocalStorage;
        }, 100);
      
      // End Login Id
    

