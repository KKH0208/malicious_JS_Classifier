/* 元のURL: https://amazon.de */
(function setMeshBreakPoint(w, d) {
var g = d.getElementById('gw-card-layout'),
SM = 919,
WS = 1239,
wdh = w.innerWidth || d.documentElement.clientWidth || d.body.clientWidth;
var bp;
if (false) {
bp = wdh > WS ? "ws" : wdh > SM ? "sm" : "xs";
} else {
bp = wdh <= WS ? "sm" : "ws";
}
g && g.setAttribute('data-grid-breakpoint', bp);
}(window, document));

