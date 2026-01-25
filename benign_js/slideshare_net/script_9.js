/* 元のURL: https://slideshare.net */

  // This script assumes the Osano script is synchronously loaded
  window.eventsToSend = window.eventsToSend || []
  if (window.Osano) {
    window.eventsToSend.push({
      name: "osano_loaded",
      timestamp: new Date().toISOString(),
      value: JSON.stringify({ time: performance?.now() })
    })
  }


