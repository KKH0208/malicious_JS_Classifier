/* 元のURL: https://dell.com */
function initLoadScripts(){"use strict";function removeDuplicates(urlArray){var unique={};var newArr=[];var max=urlArray.length;for(var i=0;i<max;++i){var script=urlArray[i];var sensitizedKey=script.url.replace(/(\.js).*/g,"").replace(/^(https:\/\/www\.|https:\/\/|\/\/|\/)/g,"");if(!unique[sensitizedKey]){unique[sensitizedKey]=true;newArr.push(script);}}
return newArr;}
var scriptsArray=typeof dellScriptLoader!=="undefined"&&dellScriptLoader.hasOwnProperty("scriptsArrayCopy")&&Array.isArray(dellScriptLoader.scriptsArrayCopy())?orderArray(removeDuplicates(dellScriptLoader.scriptsArrayCopy())):[];var flattendScriptsArray=scriptsArray.map(function(value){if("string"===typeof value){return value}
if("object"===typeof value&&value.url){return value.url}});function arrayMatches(array1,array2){var matches=[];for(var i=0;i<array1.length;i++){for(var j=0;j<array2.length;j++){if(array1[i]===array2[j]){matches.push(array1[i]);}}}
return matches;}
function removeLoadedScripts(matchedScripts){if(!matchedScripts.length){return;}
for(var i=0;i<matchedScripts.length;i++){for(var j=0;j<scriptsArray.length;j++){if("string"===typeof scriptsArray[j]&&matchedScripts[i]===scriptsArray[j]){scriptsArray.splice(j,1);continue;}
if("object"===typeof scriptsArray[j]&&matchedScripts[i]===scriptsArray[j].url){scriptsArray.splice(j,1);continue;}}}}
if(window.allScriptsLoaded){var matchedScripts=arrayMatches(flattendScriptsArray,window.allScriptsLoaded);removeLoadedScripts(matchedScripts)
for(var j=0;j<scriptsArray.length;j++){if("string"===typeof scriptsArray[j]){window.allScriptsLoaded.push(scriptsArray[j])
continue;}
if("object"===typeof scriptsArray[j]&&scriptsArray[j].url){window.allScriptsLoaded.push(scriptsArray[j].url)
continue;}}}
if(!window.allScriptsLoaded){window.allScriptsLoaded=flattendScriptsArray;}
if(scriptsArray.length===0){return;}
function orderArray(array){var withOrder=array.filter(function(value,index,arr){return value.hasOwnProperty("order");});var noOrder=array.filter(function(value,index,arr){return!value.hasOwnProperty("order");});withOrder=withOrder.sort(function(a,b){return a.order>b.order?1:-1;});return[].concat(withOrder,noOrder);}
(function loadScripts(){var scriptObject;var scriptTag;var pendingScripts=[];var firstScript=document.scripts[0];var documentHead=document.head;var fragment=document.createDocumentFragment();function stateChange(){var pendingScript;while(pendingScripts[0]&&pendingScripts[0].readyState==='loaded'){pendingScript=pendingScripts.shift();pendingScript.onreadystatechange=null;firstScript.parentNode.insertBefore(pendingScript,firstScript);}}
while(scriptObject=scriptsArray.shift()){if('async'in firstScript){scriptTag=document.createElement('script');if(scriptObject.crossorigin){scriptTag.setAttribute("crossorigin","anonymous");}
scriptTag.async=false;scriptTag.src=scriptObject.url;fragment.appendChild(scriptTag);}
else if(firstScript.readyState){scriptTag=document.createElement('script');if(scriptObject.crossorigin){scriptTag.setAttribute("crossorigin","anonymous");}
pendingScripts.push(scriptTag);scriptTag.onreadystatechange=stateChange;scriptTag.src=scriptObject.url;}
else{document.write('<script src="'+scriptObject.url+'" defer></'+'script>');}}
if('async'in firstScript){documentHead.appendChild(fragment);}})();}
initLoadScripts();var dellScriptLoader=(function(){"use strict";var scriptsArray=[];var urlRegex=/^(https:\/\/www\.|https:\/\/|\/\/|\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;function scriptsArrayCopy(){return JSON.parse(JSON.stringify(scriptsArray));}
function isValidUrl(url){return typeof url==="string"&&urlRegex.test(url);}
function isValidArray(scripts){return Array.isArray(scripts);}
function validateScripts(scripts){if(!(isValidUrl(scripts)||isValidArray(scripts))){return;}
if(isValidUrl(scripts)){scriptsArray.push(scripts);return;}
if(isValidArray(scripts)){for(var i=0;i<scripts.length;++i){var _script=scripts[i];if(typeof _script==="string"&&isValidUrl(_script)){scriptsArray.push({url:_script});continue;}
if(_script.hasOwnProperty("url")&&_script.hasOwnProperty("order")&&!isNaN(Number(_script.order))){_script.order=Number(_script.order);scriptsArray.push(_script);continue;}
if(_script.hasOwnProperty("url")&&isValidUrl(_script.url)){scriptsArray.push(_script);continue;}}}}
function load(scripts){scriptsArray=[];validateScripts(scripts);initLoadScripts();}
return Object.freeze({load:load,scriptsArrayCopy:scriptsArrayCopy});})();

