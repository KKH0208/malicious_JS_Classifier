/* 元のURL: https://slideshare.net */

  window.eventsToSend = window.eventsToSend || []
  window.eventsToSend.push({
    name: "page_rendering",
    timestamp: new Date().toISOString(),
    value: JSON.stringify({ time: performance?.now() })
  })


