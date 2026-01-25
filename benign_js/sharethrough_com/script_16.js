/* 元のURL: https://sharethrough.com */

      const ipFormInput = document.getElementById('ipFormInput');

      fetch('https://api.ipify.org?format=json')
        .then((response) => {
          return response.json()
        })
        .then((json) => {
          const ip = json.ip;
          ipFormInput.value = ip;
        })
        .catch((err) => {
          console.error(`Error getting IP Address: ${err}`)
        })
    

