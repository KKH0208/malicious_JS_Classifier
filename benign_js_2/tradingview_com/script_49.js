/* 元のURL: https://tradingview.com */
(()=>{"use strict";window.initData=window.initData||{},window.initData.block_widgetbar=function(i,t,n,a){function w(n){const w={resizerBridge:new t(window).allocate({areaName:"right"}),affectsLayout:()=>!0,adaptive:!0,settingsPrefix:"widgetbar",instantLoad:n,configuration:a};window.widgetbar=new i(w)}window.is_authenticated?w():window.loginStateChange.subscribe(this,(i=>{!i&&!window.widgetbar&&window.user&&window.is_authenticated&&w(!0)}))}})();

