/* 元のURL: https://zoom.us */

    var skip_to_chat = document.querySelector(".skip_to_chat");
    if (skip_to_chat) {
      skip_to_chat.addEventListener("click", function (event) {
        event.preventDefault();
        var elementToFocus = document.querySelector(".livesdk__invitation");
        if (elementToFocus) {
          elementToFocus.focus();
          elementToFocus.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
              elementToFocus.click();
            }
          });
        }
      });
    }
  

