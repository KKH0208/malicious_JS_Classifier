/* 元のURL: https://ok.ru */
function scriptsReload() { var xhttp = new XMLHttpRequest(); xhttp.open("POST", "/gwtlog", true); xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); var statId = OK.getStatId(); if (statId) { xhttp.setRequestHeader(OK.STAT_ID_HEADER, statId); } xhttp.send('a=' + JSON.stringify({ oldscripts: { reload:1 } })); xhttp.onload = function() { window.location.reload(); }; }

