/* 元のURL: https://globo.com */

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.getRegistration().then((registration) => {
        if (!registration) {
          navigator.serviceWorker
            .register("/sw.js")
            .then((registration) => {
              console.info("SW registered: ", registration)
            })
            .catch((registrationError) => {
              console.error("SW registration failed: ", registrationError)
            })
        }
      })
    })
  }


