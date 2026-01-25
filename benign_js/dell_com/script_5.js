/* 元のURL: https://dell.com */
var dellScriptLoader=(function(){"use strict";var scriptsArray=[];var urlRegex=/^(https:\/\/www\.|https:\/\/|\/\/|\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;function scriptsArrayCopy(){return JSON.parse(JSON.stringify(scriptsArray));}
function isValidUrl(url){return typeof url==="string"&&urlRegex.test(url);}
function isValidArray(scripts){return Array.isArray(scripts);}
function load(scripts){if(!(isValidUrl(scripts)||isValidArray(scripts))){return;}
if(isValidUrl(scripts)){scriptsArray.push(scripts);return;}
if(isValidArray(scripts)){for(var i=0;i<scripts.length;++i){var _script=scripts[i];if(typeof _script==="string"&&isValidUrl(_script)){scriptsArray.push({url:_script});continue;}
if(_script.hasOwnProperty("url")&&_script.hasOwnProperty("order")&&!isNaN(Number(_script.order))){_script.order=Number(_script.order);scriptsArray.push(_script);continue;}
if(_script.hasOwnProperty("url")&&isValidUrl(_script.url)){scriptsArray.push(_script);continue;}}}}
return Object.freeze({load:load,scriptsArrayCopy:scriptsArrayCopy});})();

