/* 元のURL: https://forbes.com */
LUX=function(){function n(){return Date.now?Date.now():+new Date}var r,e=n(),t=window.performance||{},a=t.timing||{navigationStart:(null===(r=window.LUX)||void 0===r?void 0:r.ns)||e};function o(){return t.now?t.now():n()-a.navigationStart}LUX={ac:[],addData:function(n,r){return LUX.cmd(["addData",n,r])},cmd:function(n){return LUX.ac.push(n)},init:function(){return LUX.cmd(["init"])},mark:function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];if(t.mark)return t.mark.apply(t,n);var e=n[0],a=n[1]||{};void 0===a.startTime&&(a.startTime=o());LUX.cmd(["mark",e,a])},markLoadTime:function(){return LUX.cmd(["markLoadTime",o()])},measure:function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];if(t.measure)return t.measure.apply(t,n);var e,a=n[0],i=n[1],u=n[2];e="object"==typeof i?n[1]:{start:i,end:u};e.duration||e.end||(e.end=o());LUX.cmd(["measure",a,e])},send:function(){return LUX.cmd(["send"])},ns:e};var i=LUX;if(window.LUX_ae=[],window.addEventListener("error",(function(n){window.LUX_ae.push(n)})),window.LUX_al=[],"function"==typeof PerformanceObserver&&"function"==typeof PerformanceLongTaskTiming){var u=new PerformanceObserver((function(n){for(var r=n.getEntries(),e=0;e<r.length;e++)window.LUX_al.push(r[e])}));try{u.observe({type:"longtask"})}catch(n){}}return i}();
LUX = window.LUX || {};
LUX.samplerate = 2;
LUX.label = 'home-desktop-y';
if(true)
	LUX.addData('ss-gitBranch', 'main');
if(false)
	LUX.addData('ss-bucket', '');
	if('' === 'A')
		LUX.addData('ss-is-canary', '');
if(false)
	LUX.addData('ss-pageType', '');
if(false)
	LUX.addData('ss-articleTemplateType', 'false');
	if('false' === 'premium')
		if(false)
			LUX.addData('ss-articleTemplateSubType', 'false')
		else
			LUX.addData('ss-articleTemplateSubType', 'none')
LUX.addData('ss-is-next-js', false);

