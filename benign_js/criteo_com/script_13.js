/* 元のURL: https://criteo.com */
// 外部JS: https://tree-nation.com/js/track.js
function treenation_track(user_id) {
  function backUrl(env){
    if (env === 'devlocal') {
      return 'http://local.dev.tree-nation.com';
    } else if (env === 'test') {
      return 'https://youcannevertestenough.tree-nation.com';
    } else {
      return 'https://tree-nation.com';
    }
  };

  const url = backUrl(window.env) + '/nzw-trees-planted';
  const xhr = createCORSRequest('POST', url);
  
  if (!xhr) {
    return;
  }

  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.setRequestHeader('x-api-version', '1');
  
  const data = JSON.stringify({ userId: user_id, version: 'v0' });
  xhr.send(data);
}

function createCORSRequest(method, url) {
  let xhr = new XMLHttpRequest();
  
  if ("withCredentials" in xhr) {
    xhr.open(method, url, true);
    xhr.withCredentials = false;
    return xhr;
  } else if (typeof XDomainRequest != "undefined") {
    xhr = new XDomainRequest();
    xhr.open(method, url);
    return xhr;
  } else {
    return null;
  }
}


