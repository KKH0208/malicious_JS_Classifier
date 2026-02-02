/* 元のURL: https://ok.ru */
if(navigator.sendBeacon){ var data = "a=" +JSON.stringify({ startupData: { headBeacon:1 } }) + "&statId=883414d4-8dbd-4171-8f74-b99fec4dc22b"; var headers = { type: 'application/x-www-form-urlencoded' }; var blob = new Blob([data], headers); navigator.sendBeacon('/gwtlog', blob); }

