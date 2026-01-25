/* 元のURL: https://ubuntu.com */

  const userIDCookie = document.cookie.match(new RegExp("(^| )" + "user_id" + "=([^;]+)"));
  if (userIDCookie !== null) {
    let idValue = userIDCookie[2];
    if (idValue) {
      dataLayer.push({
        user_id: idValue,
      });
    }
  }


