/* 元のURL: https://apache.org */
// 外部JS: https://www.apachecon.com/event-images/snippet.js
// Put events in order here. First one on the list is the default.
// You may also need to update https://github.com/apache/www-site/blob/main/content/events/.htaccess

let ac_events = {
    // "communityovercode2025":   "Community Over Code North America 2025"
    "current-event": "Apache Events Calendar"
};

let ac_urls = {
    // "na2024": "https://communityovercode.org/"
    // "communityovercode2025": "https://communityovercode.org/"
    "current-event": "https://events.apache.org/"
};

let ac_event_formats = {
    "wide":     {width: 240, height: 60},
    "square":   {width: 125, heigth: 125}
};

let default_url = "https://www.communityovercode.org/";
let event_names = Object.keys(ac_events);

function render_snippet() {
    console.log("Loaded ApacheCon Events Planner");
    let blocks = document.getElementsByClassName('acevent');
    for (var i = 0; i < blocks.length; i++) {
        let block = blocks[i];
        let format = block.dataset.format || "wide";
        let event_name = block.dataset.event || "random";
        if (event_name == "random") event_name = event_names[Math.floor(Math.random()*event_names.length)];  // On the fly...
        let mode = block.dataset.mode || "light";
        let width = block.dataset.width || ac_event_formats[format].width;
        let tooltip = ac_events[event_name] || ac_events[Object.keys(ac_events)[0]];
        console.log(`rendering a ${format} format event banner for ${event_name} event...`);
        let myurl = default_url;
        if (ac_urls[event_name]) {
            myurl = ac_urls[event_name];
            console.log(`Setting banner URL to ${myurl}`);
        }
        block.setAttribute("href",myurl);
        let img = document.createElement('img');
        img.setAttribute("title", tooltip);
        img.setAttribute("alt", tooltip);
        img.setAttribute("src", `https://www.apachecon.com/event-images/${event_name}-${format}-${mode}.png`);
        // Transfer data-style text to img's style
        if (block.dataset.style) {
            img.style.cssText = block.dataset.style;
        }
        if (block.dataset.class) {
            img.className = block.dataset.class;
        }
        img.style.maxWidth = width + "px";
        block.appendChild(img);
    }
}

window.addEventListener('load', render_snippet);


