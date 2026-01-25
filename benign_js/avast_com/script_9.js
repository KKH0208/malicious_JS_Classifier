/* 元のURL: https://avast.com */
fetch("https://www.avast.com/client-info.js?fetch=true").then(t => t.text()).then(t => { let e = JSON.parse(t); window.sdl = window.sdl || [], window.sdl.push(e) }).catch(t => { });

