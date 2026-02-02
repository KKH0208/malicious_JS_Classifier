/* 元のURL: https://netflix.net */

      // Login Id
      
      // Alter Username Input
      // Add Username label custom class
      var usernameInput = document.getElementById('username');
      document.querySelector('._form-login-id').id =  'form-id';
      document.querySelector('._button-login-id').id =  'continue-action';

      var submitButton = document.querySelector('._button-login-id');
      var usernameInputByName = document.getElementsByName('username');

      var usernameLabel = usernameInput.parentNode.getElementsByTagName('label');
      usernameLabel[0].innerHTML = usernameLabel[0].innerHTML.trim().replace('*', '');
      usernameLabel[0].setAttribute('class', 'custom-label');
      // End add Username label custom class
      // Remove Username label div
      var usernameLabelDiv = usernameInput.parentNode.getElementsByTagName('div');
      usernameLabelDiv[0].remove();
      // End remove Username label div
      // End Alter Username Input

      // Block Double Click for Test Automation
      //disableButtonOnFirstClick(usernameInputByName[0].value, submitButton);
      
      // End Login Id

      // Login Password
      
      // End Login Password

      function disableButtonOnFirstClick(username, button) {
            document.addEventListener("DOMContentLoaded", function () {
                // Check if the username matches the test automation pattern
                const regexTestUser = /(netflix|contractor|partner)\.testautomation$/;
                if (username && regexTestUser.test(username)) {
                    // Disable the continue button after one click
                    button.addEventListener('click', function (event) {
                        // Disable button to prevent multiple clicks
                        button.disabled = true;
                    });
                }
            });
        }
    

