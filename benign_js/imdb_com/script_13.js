/* 元のURL: https://imdb.com */

doWithAds = function(inside, failureMessage){
if ('consoleLog' in window &&
'generic' in window &&
'ad_utils' in window &&
'custom' in window &&
'monitoring' in generic &&
'document_is_ready' in generic) {
try{
inside.call(this);
}catch(e) {
if ( window.ueLogError ) {
if(typeof failureMessage !== 'undefined'){
e.message = failureMessage;
}
e.attribution = "Advertising";
e.logLevel = "ERROR";
ueLogError(e);
}
if( (document.location.hash.match('debug=1')) &&
(typeof failureMessage !== 'undefined') ){
console.error(failureMessage);
}
}
} else {
if( (document.location.hash.match('debug=1')) &&
(typeof failureMessage !== 'undefined') ){
console.error(failureMessage);
}
}
};


