/* 元のURL: https://launchdarkly.com */

    const request = new XMLHttpRequest();
    request.open("GET", "https://launchdarkly-com.netlify.app/geoloc-result", false); // `false` makes the request synchronous
    request.send(null);
   
    if (request.status === 200) {
      const disallowCode = ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LI', 'LT', 'LU', 'MT', 'NL', 'NO', 'PL', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB']
      const resJson = JSON.parse(request.response)
      const currentCode = resJson?.code?.toUpperCase(); 
      
      if (disallowCode.includes(currentCode)) {
        window.mutiny.client.defaultOptOut();
      }
    } else {
      window.mutiny.client.defaultOptOut();
    }
  

