/* 元のURL: https://g.page */
var n,aaa=[];function la(a){return function(){return aaa[a].apply(this,arguments)}}
function ma(a,b){return aaa[a]=b}
var baa=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},na=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;
a[b]=c.value;return a};
function caa(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var pa=caa(this),qa="Int8 Uint8 Uint8Clamped Int16 Uint16 Int32 Uint32 Float32 Float64".split(" ");pa.BigInt64Array&&(qa.push("BigInt64"),qa.push("BigUint64"));function daa(a,b){if(b)for(var c=0;c<qa.length;c++)eaa(qa[c]+"Array.prototype."+a,b)}
function sa(a,b){b&&eaa(a,b)}
function eaa(a,b){var c=pa;a=a.split(".");for(var e=0;e<a.length-1;e++){var f=a[e];if(!(f in c))return;c=c[f]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&b!=null&&na(c,a,{configurable:!0,writable:!0,value:b})}
var ta=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,e,f){c=b(c,e);f&&Reflect.setPrototypeOf(c,f.prototype);return c}}return function(c,e,f){f===void 0&&(f=c);
f=baa(f.prototype||Object.prototype);return Function.prototype.apply.call(c,f,e)||f}}(),ua;
if(typeof Object.setPrototypeOf=="function")ua=Object.setPrototypeOf;else{var va;a:{var faa={a:!0},gaa={};try{gaa.__proto__=faa;va=gaa.a;break a}catch(a){}va=!1}ua=va?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var wa=ua;
function u(a,b){a.prototype=baa(b.prototype);a.prototype.constructor=a;if(wa)wa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,c);e&&Object.defineProperty(a,c,e)}else a[c]=b[c];a.wh=b.prototype}
function haa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function w(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:haa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function xa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
function ya(a){return a instanceof Array?a:xa(w(a))}
function za(a){return Ca(a,a)}
function Ca(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function Da(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var iaa=typeof Object.assign=="function"?Object.assign:function(a,b){if(a==null)throw new TypeError("No nullish arg");a=Object(a);for(var c=1;c<arguments.length;c++){var e=arguments[c];if(e)for(var f in e)Da(e,f)&&(a[f]=e[f])}return a};
sa("Object.assign",function(a){return a||iaa});
function Ea(){this.ya=!1;this.va=null;this.ma=void 0;this.o=1;this.ua=this.qa=0;this.Fa=this.oa=null}
function Fa(a){if(a.ya)throw new TypeError("Generator is already running");a.ya=!0}
Ea.prototype.Ca=function(a){this.ma=a};
function Ga(a,b){a.oa={exception:b,isException:!0};a.o=a.qa||a.ua}
Ea.prototype.return=function(a){this.oa={return:a};this.o=this.ua};
Ea.prototype.yield=function(a,b){this.o=b;return{value:a}};
Ea.prototype.Qa=function(a){this.o=a};
function Ia(a){a.o=0}
function Ja(a,b,c){a.qa=b;c!=void 0&&(a.ua=c)}
function Ka(a,b){a.o=b;a.qa=0}
function La(a){a.qa=0;var b=a.oa.exception;a.oa=null;return b}
function Ma(a){a.Fa=[a.oa];a.qa=0;a.ua=0}
function Oa(a,b){var c=a.Fa.splice(0)[0];(c=a.oa=a.oa||c)?c.isException?a.o=a.qa||a.ua:c.Qa!=void 0&&a.ua<c.Qa?(a.o=c.Qa,a.oa=null):a.o=a.ua:a.o=b}
function jaa(a){this.o=new Ea;this.ma=a}
function kaa(a,b){Fa(a.o);var c=a.o.va;if(c)return Pa(a,"return"in c?c["return"]:function(e){return{value:e,done:!0}},b,a.o.return);
a.o.return(b);return Qa(a)}
function Pa(a,b,c,e){try{var f=b.call(a.o.va,c);if(!(f instanceof Object))throw new TypeError("Iterator result "+f+" is not an object");if(!f.done)return a.o.ya=!1,f;var h=f.value}catch(k){return a.o.va=null,Ga(a.o,k),Qa(a)}a.o.va=null;e.call(a.o,h);return Qa(a)}
function Qa(a){for(;a.o.o;)try{var b=a.ma(a.o);if(b)return a.o.ya=!1,{value:b.value,done:!1}}catch(c){a.o.ma=void 0,Ga(a.o,c)}a.o.ya=!1;if(a.o.oa){b=a.o.oa;a.o.oa=null;if(b.isException)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function laa(a){this.next=function(b){Fa(a.o);a.o.va?b=Pa(a,a.o.va.next,b,a.o.Ca):(a.o.Ca(b),b=Qa(a));return b};
this.throw=function(b){Fa(a.o);a.o.va?b=Pa(a,a.o.va["throw"],b,a.o.Ca):(Ga(a.o,b),b=Qa(a));return b};
this.return=function(b){return kaa(a,b)};
this[Symbol.iterator]=function(){return this}}
function maa(a){function b(e){return a.next(e)}
function c(e){return a.throw(e)}
return new Promise(function(e,f){function h(k){k.done?e(k.value):Promise.resolve(k.value).then(b,c).then(h,f)}
h(a.next())})}
function Ra(a){return maa(new laa(new jaa(a)))}
function Sa(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
sa("globalThis",function(a){return a||pa});
sa("Reflect",function(a){return a?a:{}});
sa("Reflect.construct",function(){return ta});
sa("Reflect.setPrototypeOf",function(a){return a?a:wa?function(b,c){try{return wa(b,c),!0}catch(e){return!1}}:null});
sa("Symbol",function(a){function b(h){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(e+(h||"")+"_"+f++,h)}
function c(h,k){this.o=h;na(this,"description",{configurable:!0,writable:!0,value:k})}
if(a)return a;c.prototype.toString=function(){return this.o};
var e="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",f=0;return b});
sa("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");na(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return naa(haa(this))}});
return a});
function naa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
sa("Promise",function(a){function b(k){this.o=0;this.oa=void 0;this.ma=[];this.ya=!1;var l=this.ua();try{k(l.resolve,l.reject)}catch(p){l.reject(p)}}
function c(){this.o=null}
function e(k){return k instanceof b?k:new b(function(l){l(k)})}
if(a)return a;c.prototype.ma=function(k){if(this.o==null){this.o=[];var l=this;this.oa(function(){l.qa()})}this.o.push(k)};
var f=pa.setTimeout;c.prototype.oa=function(k){f(k,0)};
c.prototype.qa=function(){for(;this.o&&this.o.length;){var k=this.o;this.o=[];for(var l=0;l<k.length;++l){var p=k[l];k[l]=null;try{p()}catch(r){this.ua(r)}}}this.o=null};
c.prototype.ua=function(k){this.oa(function(){throw k;})};
b.prototype.ua=function(){function k(r){return function(t){p||(p=!0,r.call(l,t))}}
var l=this,p=!1;return{resolve:k(this.La),reject:k(this.qa)}};
b.prototype.La=function(k){if(k===this)this.qa(new TypeError("A Promise cannot resolve to itself"));else if(k instanceof b)this.Pa(k);else{a:switch(typeof k){case "object":var l=k!=null;break a;case "function":l=!0;break a;default:l=!1}l?this.Ia(k):this.va(k)}};
b.prototype.Ia=function(k){var l=void 0;try{l=k.then}catch(p){this.qa(p);return}typeof l=="function"?this.Ra(l,k):this.va(k)};
b.prototype.qa=function(k){this.Ca(2,k)};
b.prototype.va=function(k){this.Ca(1,k)};
b.prototype.Ca=function(k,l){if(this.o!=0)throw Error("Cannot settle("+k+", "+l+"): Promise already settled in state"+this.o);this.o=k;this.oa=l;this.o===2&&this.Ma();this.Fa()};
b.prototype.Ma=function(){var k=this;f(function(){if(k.Ha()){var l=pa.console;typeof l!=="undefined"&&l.error(k.oa)}},1)};
b.prototype.Ha=function(){if(this.ya)return!1;var k=pa.CustomEvent,l=pa.Event,p=pa.dispatchEvent;if(typeof p==="undefined")return!0;typeof k==="function"?k=new k("unhandledrejection",{cancelable:!0}):typeof l==="function"?k=new l("unhandledrejection",{cancelable:!0}):(k=pa.document.createEvent("CustomEvent"),k.initCustomEvent("unhandledrejection",!1,!0,k));k.promise=this;k.reason=this.oa;return p(k)};
b.prototype.Fa=function(){if(this.ma!=null){for(var k=0;k<this.ma.length;++k)h.ma(this.ma[k]);this.ma=null}};
var h=new c;b.prototype.Pa=function(k){var l=this.ua();k.gx(l.resolve,l.reject)};
b.prototype.Ra=function(k,l){var p=this.ua();try{k.call(l,p.resolve,p.reject)}catch(r){p.reject(r)}};
b.prototype.then=function(k,l){function p(y,E){return typeof y=="function"?function(oa){try{r(y(oa))}catch(ra){t(ra)}}:E}
var r,t,v=new b(function(y,E){r=y;t=E});
this.gx(p(k,r),p(l,t));return v};
b.prototype.catch=function(k){return this.then(void 0,k)};
b.prototype.gx=function(k,l){function p(){switch(r.o){case 1:k(r.oa);break;case 2:l(r.oa);break;default:throw Error("Unexpected state: "+r.o);}}
var r=this;this.ma==null?h.ma(p):this.ma.push(p);this.ya=!0};
b.resolve=e;b.reject=function(k){return new b(function(l,p){p(k)})};
b.race=function(k){return new b(function(l,p){for(var r=w(k),t=r.next();!t.done;t=r.next())e(t.value).gx(l,p)})};
b.all=function(k){var l=w(k),p=l.next();return p.done?e([]):new b(function(r,t){function v(oa){return function(ra){y[oa]=ra;E--;E==0&&r(y)}}
var y=[],E=0;do y.push(void 0),E++,e(p.value).gx(v(y.length-1),t),p=l.next();while(!p.done)})};
return b});
sa("Object.setPrototypeOf",function(a){return a||wa});
sa("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
function oaa(a,b,c){a instanceof String&&(a=String(a));for(var e=a.length,f=0;f<e;f++){var h=a[f];if(b.call(c,h,f,a))return{i:f,v:h}}return{i:-1,v:void 0}}
sa("Array.prototype.find",function(a){return a?a:function(b,c){return oaa(this,b,c).v}});
sa("WeakMap",function(a){function b(p){this.o=(l+=Math.random()+1).toString();if(p){p=w(p);for(var r;!(r=p.next()).done;)r=r.value,this.set(r[0],r[1])}}
function c(){}
function e(p){var r=typeof p;return r==="object"&&p!==null||r==="function"}
function f(p){if(!Da(p,k)){var r=new c;na(p,k,{value:r})}}
function h(p){var r=Object[p];r&&(Object[p]=function(t){if(t instanceof c)return t;Object.isExtensible(t)&&f(t);return r(t)})}
if(function(){if(!a||!Object.seal)return!1;try{var p=Object.seal({}),r=Object.seal({}),t=new a([[p,2],[r,3]]);if(t.get(p)!=2||t.get(r)!=3)return!1;t.delete(p);t.set(r,4);return!t.has(p)&&t.get(r)==4}catch(v){return!1}}())return a;
var k="$jscomp_hidden_"+Math.random();h("freeze");h("preventExtensions");h("seal");var l=0;b.prototype.set=function(p,r){if(!e(p))throw Error("Invalid WeakMap key");f(p);if(!Da(p,k))throw Error("WeakMap key fail: "+p);p[k][this.o]=r;return this};
b.prototype.get=function(p){return e(p)&&Da(p,k)?p[k][this.o]:void 0};
b.prototype.has=function(p){return e(p)&&Da(p,k)&&Da(p[k],this.o)};
b.prototype.delete=function(p){return e(p)&&Da(p,k)&&Da(p[k],this.o)?delete p[k][this.o]:!1};
return b});
sa("Map",function(a){function b(){var l={};return l.previous=l.next=l.head=l}
function c(l,p){var r=l[1];return naa(function(){if(r){for(;r.head!=l[1];)r=r.previous;for(;r.next!=r.head;)return r=r.next,{done:!1,value:p(r)};r=null}return{done:!0,value:void 0}})}
function e(l,p){var r=p&&typeof p;r=="object"||r=="function"?h.has(p)?r=h.get(p):(r=""+ ++k,h.set(p,r)):r="p_"+p;var t=l[0][r];if(t&&Da(l[0],r))for(l=0;l<t.length;l++){var v=t[l];if(p!==p&&v.key!==v.key||p===v.key)return{id:r,list:t,index:l,entry:v}}return{id:r,list:t,index:-1,entry:void 0}}
function f(l){this[0]={};this[1]=b();this.size=0;if(l){l=w(l);for(var p;!(p=l.next()).done;)p=p.value,this.set(p[0],p[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var l=Object.seal({x:4}),p=new a(w([[l,"s"]]));if(p.get(l)!="s"||p.size!=1||p.get({x:4})||p.set({x:4},"t")!=p||p.size!=2)return!1;var r=p.entries(),t=r.next();if(t.done||t.value[0]!=l||t.value[1]!="s")return!1;t=r.next();return t.done||t.value[0].x!=4||t.value[1]!="t"||!r.next().done?!1:!0}catch(v){return!1}}())return a;
var h=new WeakMap;f.prototype.set=function(l,p){l=l===0?0:l;var r=e(this,l);r.list||(r.list=this[0][r.id]=[]);r.entry?r.entry.value=p:(r.entry={next:this[1],previous:this[1].previous,head:this[1],key:l,value:p},r.list.push(r.entry),this[1].previous.next=r.entry,this[1].previous=r.entry,this.size++);return this};
f.prototype.delete=function(l){l=e(this,l);return l.entry&&l.list?(l.list.splice(l.index,1),l.list.length||delete this[0][l.id],l.entry.previous.next=l.entry.next,l.entry.next.previous=l.entry.previous,l.entry.head=null,this.size--,!0):!1};
f.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
f.prototype.has=function(l){return!!e(this,l).entry};
f.prototype.get=function(l){return(l=e(this,l).entry)&&l.value};
f.prototype.entries=function(){return c(this,function(l){return[l.key,l.value]})};
f.prototype.keys=function(){return c(this,function(l){return l.key})};
f.prototype.values=function(){return c(this,function(l){return l.value})};
f.prototype.forEach=function(l,p){for(var r=this.entries(),t;!(t=r.next()).done;)t=t.value,l.call(p,t[1],t[0],this)};
f.prototype[Symbol.iterator]=f.prototype.entries;var k=0;return f});
sa("Set",function(a){function b(c){this.o=new Map;if(c){c=w(c);for(var e;!(e=c.next()).done;)this.add(e.value)}this.size=this.o.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),e=new a(w([c]));if(!e.has(c)||e.size!=1||e.add(c)!=e||e.size!=1||e.add({x:4})!=e||e.size!=2)return!1;var f=e.entries(),h=f.next();if(h.done||h.value[0]!=c||h.value[1]!=c)return!1;h=f.next();return h.done||h.value[0]==c||h.value[0].x!=4||h.value[1]!=h.value[0]?!1:f.next().done}catch(k){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.o.set(c,c);this.size=this.o.size;return this};
b.prototype.delete=function(c){c=this.o.delete(c);this.size=this.o.size;return c};
b.prototype.clear=function(){this.o.clear();this.size=0};
b.prototype.has=function(c){return this.o.has(c)};
b.prototype.entries=function(){return this.o.entries()};
b.prototype.values=function(){return this.o.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,e){var f=this;this.o.forEach(function(h){return c.call(e,h,h,f)})};
return b});
sa("Object.values",function(a){return a?a:function(b){var c=[],e;for(e in b)Da(b,e)&&c.push(b[e]);return c}});
sa("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
sa("Array.prototype.includes",function(a){return a?a:function(b,c){var e=this;e instanceof String&&(e=String(e));var f=e.length;c=c||0;for(c<0&&(c=Math.max(c+f,0));c<f;c++){var h=e[c];if(h===b||Object.is(h,b))return!0}return!1}});
function Ta(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
sa("String.prototype.includes",function(a){return a?a:function(b,c){return Ta(this,b,"includes").indexOf(b,c||0)!==-1}});
sa("Array.from",function(a){return a?a:function(b,c,e){c=c!=null?c:function(l){return l};
var f=[],h=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof h=="function"){b=h.call(b);for(var k=0;!(h=b.next()).done;)f.push(c.call(e,h.value,k++))}else for(h=b.length,k=0;k<h;k++)f.push(c.call(e,b[k],k));return f}});
sa("Object.entries",function(a){return a?a:function(b){var c=[],e;for(e in b)Da(b,e)&&c.push([e,b[e]]);return c}});
sa("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
sa("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
sa("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
sa("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
sa("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
sa("String.prototype.startsWith",function(a){return a?a:function(b,c){var e=Ta(this,b,"startsWith");b+="";var f=e.length,h=b.length;c=Math.max(0,Math.min(c|0,e.length));for(var k=0;k<h&&c<f;)if(e[c++]!=b[k++])return!1;return k>=h}});
sa("String.prototype.endsWith",function(a){return a?a:function(b,c){var e=Ta(this,b,"endsWith");b+="";c===void 0&&(c=e.length);c=Math.max(0,Math.min(c|0,e.length));for(var f=b.length;f>0&&c>0;)if(e[--c]!=b[--f])return!1;return f<=0}});
function Ua(a,b){a instanceof String&&(a+="");var c=0,e=!1,f={next:function(){if(!e&&c<a.length){var h=c++;return{value:b(h,a[h]),done:!1}}e=!0;return{done:!0,value:void 0}}};
f[Symbol.iterator]=function(){return f};
return f}
sa("Array.prototype.entries",function(a){return a?a:function(){return Ua(this,function(b,c){return[b,c]})}});
sa("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
sa("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
sa("Array.prototype.keys",function(a){return a?a:function(){return Ua(this,function(b){return b})}});
sa("Array.prototype.values",function(a){return a?a:function(){return Ua(this,function(b,c){return c})}});
sa("Array.prototype.fill",function(a){return a?a:function(b,c,e){var f=this.length||0;c<0&&(c=Math.max(0,f+c));if(e==null||e>f)e=f;e=Number(e);e<0&&(e=Math.max(0,f+e));for(c=Number(c||0);c<e;c++)this[c]=b;return this}});
daa("fill",function(a){return a?a:Array.prototype.fill});
sa("Object.fromEntries",function(a){return a?a:function(b){var c={};if(!(Symbol.iterator in b))throw new TypeError(""+b+" is not iterable");b=b[Symbol.iterator].call(b);for(var e=b.next();!e.done;e=b.next()){e=e.value;if(Object(e)!==e)throw new TypeError("iterable for fromEntries should yield objects");c[e[0]]=e[1]}return c}});
sa("String.prototype.replaceAll",function(a){return a?a:function(b,c){if(b instanceof RegExp&&!b.global)throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");return b instanceof RegExp?this.replace(b,c):this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"),"g"),c)}});
sa("Object.getOwnPropertySymbols",function(a){return a?a:function(){return[]}});
sa("String.prototype.codePointAt",function(a){return a?a:function(b){var c=Ta(this,null,"codePointAt"),e=c.length;b=Number(b)||0;if(b>=0&&b<e){b|=0;var f=c.charCodeAt(b);if(f<55296||f>56319||b+1===e)return f;b=c.charCodeAt(b+1);return b<56320||b>57343?f:(f-55296)*1024+b+9216}}});
sa("String.fromCodePoint",function(a){return a?a:function(b){for(var c="",e=0;e<arguments.length;e++){var f=Number(arguments[e]);if(f<0||f>1114111||f!==Math.floor(f))throw new RangeError("invalid_code_point "+f);f<=65535?c+=String.fromCharCode(f):(f-=65536,c+=String.fromCharCode(f>>>10&1023|55296),c+=String.fromCharCode(f&1023|56320))}return c}});
sa("String.prototype.repeat",function(a){return a?a:function(b){var c=Ta(this,null,"repeat");if(b<0||b>1342177279)throw new RangeError("Invalid count value");b|=0;for(var e="";b;)if(b&1&&(e+=c),b>>>=1)c+=c;return e}});
sa("Array.prototype.findIndex",function(a){return a?a:function(b,c){return oaa(this,b,c).i}});
function Wa(a){a=Math.trunc(a)||0;a<0&&(a+=this.length);if(!(a<0||a>=this.length))return this[a]}
sa("Array.prototype.at",function(a){return a?a:Wa});
daa("at",function(a){return a?a:Wa});
sa("String.prototype.at",function(a){return a?a:Wa});
sa("String.prototype.padStart",function(a){return a?a:function(b,c){var e=Ta(this,null,"padStart");b-=e.length;c=c!==void 0?String(c):" ";return(b>0&&c?c.repeat(Math.ceil(b/c.length)).substring(0,b):"")+e}});
sa("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
sa("Array.prototype.flatMap",function(a){return a?a:function(b,c){var e=[];Array.prototype.forEach.call(this,function(f,h){f=b.call(c,f,h,this);Array.isArray(f)?e.push.apply(e,f):e.push(f)});
return e}});
sa("Array.prototype.flat",function(a){return a?a:function(b){b=b===void 0?1:b;var c=[];Array.prototype.forEach.call(this,function(e){Array.isArray(e)&&b>0?(e=Array.prototype.flat.call(e,b-1),c.push.apply(c,e)):c.push(e)});
return c}});
sa("Promise.allSettled",function(a){function b(e){return{status:"fulfilled",value:e}}
function c(e){return{status:"rejected",reason:e}}
return a?a:function(e){var f=this;e=Array.from(e,function(h){return f.resolve(h).then(b,c)});
return f.all(e)}});
sa("Number.parseInt",function(a){return a||parseInt});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Xa=Xa||{},Ya=this||self;function Za(a,b){var c=$a("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function $a(a,b){a=a.split(".");b=b||Ya;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function ab(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function paa(a){var b=ab(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function bb(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function qaa(a){return Object.prototype.hasOwnProperty.call(a,db)&&a[db]||(a[db]=++raa)}
var db="closure_uid_"+(Math.random()*1E9>>>0),raa=0;function saa(a,b,c){return a.call.apply(a.bind,arguments)}
function taa(a,b,c){if(!a)throw Error();if(arguments.length>2){var e=Array.prototype.slice.call(arguments,2);return function(){var f=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(f,e);return a.apply(b,f)}}return function(){return a.apply(b,arguments)}}
function eb(a,b,c){eb=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?saa:taa;return eb.apply(null,arguments)}
function fb(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var e=c.slice();e.push.apply(e,arguments);return a.apply(this,e)}}
function gb(){return Date.now()}
function hb(a,b){a=a.split(".");for(var c=Ya,e;a.length&&(e=a.shift());)a.length||b===void 0?c[e]&&c[e]!==Object.prototype[e]?c=c[e]:c=c[e]={}:c[e]=b}
function ib(a){return a}
function jb(a,b){function c(){}
c.prototype=b.prototype;a.wh=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(e,f,h){for(var k=Array(arguments.length-2),l=2;l<arguments.length;l++)k[l-2]=arguments[l];return b.prototype[f].apply(e,k)}}
;function kb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,kb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
jb(kb,Error);kb.prototype.name="CustomError";var uaa;function lb(){throw Error("Invalid UTF8");}
function vaa(a,b){b=String.fromCharCode.apply(null,b);return a==null?b:a+b}
var mb=void 0,nb,waa=typeof TextDecoder!=="undefined",xaa,yaa=typeof String.prototype.isWellFormed==="function",zaa=typeof TextEncoder!=="undefined";
function Aaa(a){var b=!1;b=b===void 0?!1:b;if(zaa){if(b&&(yaa?!a.isWellFormed():/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a)))throw Error("Found an unpaired surrogate");a=(xaa||(xaa=new TextEncoder)).encode(a)}else{for(var c=0,e=new Uint8Array(3*a.length),f=0;f<a.length;f++){var h=a.charCodeAt(f);if(h<128)e[c++]=h;else{if(h<2048)e[c++]=h>>6|192;else{if(h>=55296&&h<=57343){if(h<=56319&&f<a.length){var k=a.charCodeAt(++f);if(k>=56320&&k<=57343){h=(h-55296)*1024+
k-56320+65536;e[c++]=h>>18|240;e[c++]=h>>12&63|128;e[c++]=h>>6&63|128;e[c++]=h&63|128;continue}else f--}if(b)throw Error("Found an unpaired surrogate");h=65533}e[c++]=h>>12|224;e[c++]=h>>6&63|128}e[c++]=h&63|128}}a=c===e.length?e:e.subarray(0,c)}return a}
;function ob(a){Ya.setTimeout(function(){throw a;},0)}
;function pb(a,b){return a.lastIndexOf(b,0)==0}
function qb(a){return/^[\s\xa0]*$/.test(a)}
var tb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function ub(a,b){return a.indexOf(b)!=-1}
function Baa(a,b){var c=0;a=tb(String(a)).split(".");b=tb(String(b)).split(".");for(var e=Math.max(a.length,b.length),f=0;c==0&&f<e;f++){var h=a[f]||"",k=b[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(h[0].length==0&&k[0].length==0)break;c=wb(h[1].length==0?0:parseInt(h[1],10),k[1].length==0?0:parseInt(k[1],10))||wb(h[2].length==0,k[2].length==0)||wb(h[2],k[2]);h=h[3];k=k[3]}while(c==0)}return c}
function wb(a,b){return a<b?-1:a>b?1:0}
;var Caa=Za(1,!0),xb=Za(610401301,!1);Za(899588437,!1);Za(772657768,!1);Za(513659523,!1);Za(568333945,!0);Za(1331761403,!1);Za(651175828,!1);Za(722764542,!1);Za(748402145,!1);Za(748402146,!1);var Daa=Za(748402147,!0);Za(333098724,!1);Za(2147483644,!1);Za(2147483645,!1);Za(2147483646,Caa);Za(2147483647,!0);function yb(){var a=Ya.navigator;return a&&(a=a.userAgent)?a:""}
var zb,Eaa=Ya.navigator;zb=Eaa?Eaa.userAgentData||null:null;function Ab(a){if(!xb||!zb)return!1;for(var b=0;b<zb.brands.length;b++){var c=zb.brands[b].brand;if(c&&ub(c,a))return!0}return!1}
function Bb(a){return ub(yb(),a)}
;function Db(){return xb?!!zb&&zb.brands.length>0:!1}
function Eb(){return Db()?!1:Bb("Opera")}
function Fb(){return Db()?!1:Bb("Trident")||Bb("MSIE")}
function Faa(){return Db()?Ab("Microsoft Edge"):Bb("Edg/")}
function Gb(){return Bb("Firefox")||Bb("FxiOS")}
function Hb(){return Bb("Safari")&&!(Ib()||(Db()?0:Bb("Coast"))||Eb()||(Db()?0:Bb("Edge"))||Faa()||(Db()?Ab("Opera"):Bb("OPR"))||Gb()||Bb("Silk")||Bb("Android"))}
function Ib(){return Db()?Ab("Chromium"):(Bb("Chrome")||Bb("CriOS"))&&!(Db()?0:Bb("Edge"))||Bb("Silk")}
;function Jb(){return xb?!!zb&&!!zb.platform:!1}
function Kb(){return Jb()?zb.platform==="Android":Bb("Android")}
function Lb(){return Bb("iPhone")&&!Bb("iPod")&&!Bb("iPad")}
function Nb(){return Lb()||Bb("iPad")||Bb("iPod")}
function Ob(){return Jb()?zb.platform==="macOS":Bb("Macintosh")}
function Gaa(){return Jb()?zb.platform==="Linux":Bb("Linux")}
function Pb(){return Jb()?zb.platform==="Windows":Bb("Windows")}
function Haa(){return Jb()?zb.platform==="Chrome OS":Bb("CrOS")}
;var Iaa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Qb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var e=a.length,f=typeof a==="string"?a.split(""):a,h=0;h<e;h++)h in f&&b.call(c,f[h],h,a)},Rb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var e=a.length,f=[],h=0,k=typeof a==="string"?a.split(""):a,l=0;l<e;l++)if(l in k){var p=k[l];
b.call(c,p,l,a)&&(f[h++]=p)}return f},Jaa=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var e=a.length,f=Array(e),h=typeof a==="string"?a.split(""):a,k=0;k<e;k++)k in h&&(f[k]=b.call(c,h[k],k,a));
return f},Kaa=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)if(f in e&&b.call(void 0,e[f],f,a))return!0;
return!1};
function Sb(a,b){return Iaa(a,b)>=0}
function Tb(a,b){b=Iaa(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Ub(a){var b=a.length;if(b>0){for(var c=Array(b),e=0;e<b;e++)c[e]=a[e];return c}return[]}
;function Vb(){return ub(yb().toLowerCase(),"webkit")&&!Bb("Edge")}
function Laa(){return Bb("Gecko")&&!Vb()&&!(Bb("Trident")||Bb("MSIE"))&&!Bb("Edge")}
;function Wb(a){Wb[" "](a);return a}
Wb[" "]=function(){};var Maa=Eb(),Xb=Fb(),Naa=Bb("Edge"),Yb=Laa(),Zb=Vb(),Oaa=Zb&&Bb("Mobile"),ac=Ob(),Paa=Pb();Gaa()||Haa();var Qaa=Kb(),Raa=Lb(),Saa=Bb("iPad"),Taa=Bb("iPod");Nb();ub(yb().toLowerCase(),"kaios");var bc;a:{var cc="",dc=function(){var a=yb();if(Yb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Naa)return/Edge\/([\d\.]+)/.exec(a);if(Xb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Zb)return/WebKit\/(\S+)/.exec(a);if(Maa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
dc&&(cc=dc?dc[1]:"");if(Xb){var ec,Uaa=Ya.document;ec=Uaa?Uaa.documentMode:void 0;if(ec!=null&&ec>parseFloat(cc)){bc=String(ec);break a}}bc=cc}var Vaa=bc;var Waa=Gb(),Xaa=Lb()||Bb("iPod"),Yaa=Bb("iPad"),Zaa=Bb("Android")&&!(Ib()||Gb()||Eb()||Bb("Silk")),hc=Ib(),$aa=Hb()&&!Nb();var aba={},ic=null,bba=Yb||Zb,cba=bba||typeof Ya.btoa=="function",dba=bba||!$aa&&typeof Ya.atob=="function";function jc(a,b){b===void 0&&(b=0);eba();b=aba[b];for(var c=Array(Math.floor(a.length/3)),e=b[64]||"",f=0,h=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1],p=a[f+2],r=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|p>>6];p=b[p&63];c[h++]=""+r+k+l+p}r=0;p=e;switch(a.length-f){case 2:r=a[f+1],p=b[(r&15)<<2]||e;case 1:a=a[f],c[h]=""+b[a>>2]+b[(a&3)<<4|r>>4]+p+e}return c.join("")}
function kc(a,b){if(cba&&!b)a=Ya.btoa(a);else{for(var c=[],e=0,f=0;f<a.length;f++){var h=a.charCodeAt(f);h>255&&(c[e++]=h&255,h>>=8);c[e++]=h}a=jc(c,b)}return a}
function lc(a,b){if(cba&&!b)a=Ya.btoa(unescape(encodeURIComponent(a)));else{for(var c=[],e=0,f=0;f<a.length;f++){var h=a.charCodeAt(f);h<128?c[e++]=h:(h<2048?c[e++]=h>>6|192:((h&64512)==55296&&f+1<a.length&&(a.charCodeAt(f+1)&64512)==56320?(h=65536+((h&1023)<<10)+(a.charCodeAt(++f)&1023),c[e++]=h>>18|240,c[e++]=h>>12&63|128):c[e++]=h>>12|224,c[e++]=h>>6&63|128),c[e++]=h&63|128)}a=jc(c,b)}return a}
function mc(a,b){if(dba&&!b)return Ya.atob(a);var c="";fba(a,function(e){c+=String.fromCharCode(e)});
return c}
function gba(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):ub("=.",a[b-1])&&(c=ub("=.",a[b-2])?c-2:c-1);var e=new Uint8Array(c),f=0;fba(a,function(h){e[f++]=h});
return f!==c?e.subarray(0,f):e}
function fba(a,b){function c(p){for(;e<a.length;){var r=a.charAt(e++),t=ic[r];if(t!=null)return t;if(!qb(r))throw Error("Unknown base64 encoding at char: "+r);}return p}
eba();for(var e=0;;){var f=c(-1),h=c(0),k=c(64),l=c(64);if(l===64&&f===-1)break;b(f<<2|h>>4);k!=64&&(b(h<<4&240|k>>2),l!=64&&b(k<<6&192|l))}}
function eba(){if(!ic){ic={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var e=a.concat(b[c].split(""));aba[c]=e;for(var f=0;f<e.length;f++){var h=e[f];ic[h]===void 0&&(ic[h]=f)}}}}
;var hba=typeof Uint8Array!=="undefined",iba=!Xb&&typeof btoa==="function",jba=/[-_.]/g,kba={"-":"+",_:"/",".":"="};function lba(a){return kba[a]||""}
function oc(a){if(!iba)return gba(a);a=jba.test(a)?a.replace(jba,lba):a;a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b}
function pc(a){return hba&&a!=null&&a instanceof Uint8Array}
function mba(a,b){var c=a.length;if(c!==b.length)return!1;for(var e=0;e<c;e++)if(a[e]!==b[e])return!1;return!0}
var qc={},nba=typeof structuredClone!="undefined";function rc(a,b){oba(b);this.o=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
function tc(){return pba||(pba=new rc(null,qc))}
function uc(a){var b=a.o;if(b==null)a="";else if(typeof b==="string")a=b;else{if(iba){for(var c="",e=0,f=b.length-10240;e<f;)c+=String.fromCharCode.apply(null,b.subarray(e,e+=10240));c+=String.fromCharCode.apply(null,e?b.subarray(e):b);b=btoa(c)}else b=jc(b);a=a.o=b}return a}
rc.prototype.isEmpty=function(){return this.o==null};
rc.prototype.sizeBytes=function(){var a=vc(this);return a?a.length:0};
function qba(a,b){if(!a.o||!b.o||a.o===b.o)return a.o===b.o;if(typeof a.o==="string"&&typeof b.o==="string"){var c=a.o,e=b.o;b.o.length>a.o.length&&(e=a.o,c=b.o);if(c.lastIndexOf(e,0)!==0)return!1;for(b=e.length;b<c.length;b++)if(c[b]!=="=")return!1;return!0}c=vc(a);b=vc(b);return mba(c,b)}
function vc(a){oba(qc);var b=a.o;b==null||pc(b)||(typeof b==="string"?b=oc(b):(ab(b),b=null));return b==null?b:a.o=b}
function rba(a,b){if(typeof b==="string")b=b?new rc(b,qc):tc();else if(b instanceof Uint8Array)b=new rc(b,qc);else if(!(b instanceof rc))return!1;return qba(a,b)}
var pba;function oba(a){if(a!==qc)throw Error("illegal external caller");}
;function sba(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;var tba=void 0;function uba(){var a=Error();sba(a,"incident");ob(a)}
function wc(a){a=Error(a);sba(a,"warning");return a}
function xc(a,b){if(a!=null){var c;var e=(c=tba)!=null?c:tba={};c=e[a]||0;c>=b||(e[a]=c+1,uba())}}
;var yc=typeof Symbol==="function"&&typeof Symbol()==="symbol";function zc(a,b,c){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?(c===void 0?0:c)&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol():b}
var vba=zc("jas",void 0,!0),Ac=zc(void 0,"0di"),Bc=zc(void 0,"1oa"),wba=zc(void 0,"0dg"),Cc=zc(void 0,Symbol()),xba=zc(void 0,"0ub"),yba=zc(void 0,"0ubs"),zba=zc(void 0,"0ubsb"),Aba=zc(void 0,"0actk"),Bba=zc("m_m","Qpa",!0),Cba=zc(void 0,"vps"),Dba=zc();var Eba={hT:{value:0,configurable:!0,writable:!0,enumerable:!1}},Fba=Object.defineProperties,Dc=yc?vba:"hT",Ec,Gba=[];Gc(Gba,7);Ec=Object.freeze(Gba);function Hc(a,b){yc||Dc in a||Fba(a,Eba);a[Dc]|=b}
function Gc(a,b){yc||Dc in a||Fba(a,Eba);a[Dc]=b}
function Hba(a){if(4&a)return 512&a?512:1024&a?1024:0}
function Ic(a){Hc(a,34);return a}
function Jc(a){Hc(a,8192);return a}
function Kc(a){Hc(a,32);return a}
;function Lc(){return typeof BigInt==="function"}
;var Iba={};function Mc(a){return a[Bba]===Iba}
function Nc(a,b){return b===void 0?a.ma!==Oc&&!!(2&(a.Aa[Dc]|0)):!!(2&b)&&a.ma!==Oc}
var Oc={};function Pc(a,b,c){if(a==null){if(!c)throw Error();}else if(typeof a==="string")a=a?new rc(a,qc):tc();else if(a.constructor!==rc)if(pc(a))a=a.length?new rc(new Uint8Array(a),qc):tc();else{if(!b)throw Error();a=void 0}return a}
function Qc(a,b){if(typeof b!=="number"||b<0||b>=a.length)throw Error();}
function Jba(a,b){if(typeof b!=="number"||b<0||b>a.length)throw Error();}
function Rc(a,b,c){this.o=a;this.ma=b;this.thisArg=c}
Rc.prototype.next=function(){var a=this.o.next();a.done||(a.value=this.ma.call(this.thisArg,a.value));return a};
Rc.prototype[Symbol.iterator]=function(){return this};
var Sc=Object.freeze({}),Kba=Object.freeze({});function Lba(a,b,c){var e=b&128?0:-1,f=a.length,h;if(h=!!f)h=a[f-1],h=h!=null&&typeof h==="object"&&h.constructor===Object;var k=f+(h?-1:0);for(b=b&128?1:0;b<k;b++)c(b-e,a[b]);if(h){a=a[f-1];for(var l in a)!isNaN(l)&&c(+l,a[l])}}
var Mba={};function Tc(a){return a&128?Mba:void 0}
;function Uc(a){a.Jpa=!0;return a}
;var Nba=Uc(function(a){return typeof a==="number"}),Oba=Uc(function(a){return typeof a==="string"}),Pba=Uc(function(a){return typeof a==="boolean"}),Qba=Uc(function(a){return typeof a==="function"});var Vc=typeof Ya.BigInt==="function"&&typeof Ya.BigInt(0)==="bigint";function Wc(a){var b=a;if(Oba(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(Nba(b)&&!Number.isSafeInteger(b))throw Error(String(b));return Vc?BigInt(a):a=Pba(a)?a?"1":"0":Oba(a)?a.trim()||"0":String(a)}
var Xc=Uc(function(a){return Vc?a>=Rba&&a<=Sba:a[0]==="-"?Tba(a,Uba):Tba(a,Vba)}),Uba=Number.MIN_SAFE_INTEGER.toString(),Rba=Vc?BigInt(Number.MIN_SAFE_INTEGER):void 0,Vba=Number.MAX_SAFE_INTEGER.toString(),Sba=Vc?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function Tba(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var e=a[c],f=b[c];if(e>f)return!1;if(e<f)return!0}}
;var Wba=typeof Uint8Array.prototype.slice==="function",Yc=0,Zc=0,$c;function ad(a){var b=a>>>0;Yc=b;Zc=(a-b)/4294967296>>>0}
function bd(a){if(a<0){ad(0-a);var b=w(cd(Yc,Zc));a=b.next().value;b=b.next().value;Yc=a>>>0;Zc=b>>>0}else ad(a)}
function Xba(a){var b=$c||($c=new DataView(new ArrayBuffer(8)));b.setFloat32(0,+a,!0);Zc=0;Yc=b.getUint32(0,!0)}
function dd(a,b){var c=b*4294967296+(a>>>0);return Number.isSafeInteger(c)?c:fd(a,b)}
function hd(a,b){var c=b&2147483648;c&&(a=~a+1>>>0,b=~b>>>0,a==0&&(b=b+1>>>0));a=dd(a,b);return typeof a==="number"?c?-a:a:c?"-"+a:a}
function Yba(a){var b=Yc,c=Zc,e=c>>31;c=(c<<1|b>>>31)^e;a(b<<1^e,c)}
function Zba(a,b){var c=-(a&1);a=(a>>>1|b<<31)^c;return hd(a,b>>>1^c)}
function fd(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else Lc()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+$ba(c)+$ba(a));return c}
function $ba(a){a=String(a);return"0000000".slice(a.length)+a}
function id(a,b){b&2147483648?Lc()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(cd(a,b)),a=b.next().value,b=b.next().value,a="-"+fd(a,b)):a=fd(a,b);return a}
function jd(a){if(a.length<16)bd(Number(a));else if(Lc())a=BigInt(a),Yc=Number(a&BigInt(4294967295))>>>0,Zc=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");Zc=Yc=0;for(var c=a.length,e=0+b,f=(c-b)%6+b;f<=c;e=f,f+=6)e=Number(a.slice(e,f)),Zc*=1E6,Yc=Yc*1E6+e,Yc>=4294967296&&(Zc+=Math.trunc(Yc/4294967296),Zc>>>=0,Yc>>>=0);b&&(b=w(cd(Yc,Zc)),a=b.next().value,b=b.next().value,Yc=a,Zc=b)}}
function cd(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function kd(a){return Array.prototype.slice.call(a)}
;function ld(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;var md=typeof BigInt==="function"?BigInt.asIntN:void 0,nd=typeof BigInt==="function"?BigInt.asUintN:void 0,od=Number.isSafeInteger,pd=Number.isFinite,qd=Math.trunc;function rd(a){if(a==null||typeof a==="number")return a;if(a==="NaN"||a==="Infinity"||a==="-Infinity")return Number(a)}
function sd(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+ab(a)+": "+a);return a}
function td(a){if(a==null||typeof a==="boolean")return a;if(typeof a==="number")return!!a}
var aca=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function ud(a){switch(typeof a){case "bigint":return!0;case "number":return pd(a);case "string":return aca.test(a);default:return!1}}
function vd(a){if(!pd(a))throw wc("enum");return a|0}
function wd(a){return a==null?a:vd(a)}
function xd(a){return a==null?a:pd(a)?a|0:void 0}
function yd(a){if(typeof a!=="number")throw wc("int32");if(!pd(a))throw wc("int32");return a|0}
function zd(a){return a==null?a:yd(a)}
function Ad(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return pd(a)?a|0:void 0}
function Bd(a){if(typeof a!=="number")throw wc("uint32");if(!pd(a))throw wc("uint32");return a>>>0}
function Cd(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return pd(a)?a>>>0:void 0}
function Dd(a,b){b=b===void 0?0:b;if(!ud(a))throw wc("int64");var c=typeof a;switch(b){case 512:switch(c){case "string":return Ed(a);case "bigint":return String(md(64,a));default:return Fd(a)}case 1024:switch(c){case "string":return bca(a);case "bigint":return Wc(md(64,a));default:return cca(a)}case 0:switch(c){case "string":return Ed(a);case "bigint":return Wc(md(64,a));default:return Gd(a)}default:return ld(b,"Unknown format requested type for int64")}}
function Hd(a){return a==null?a:Dd(a,0)}
function dca(a){var b=a.length;if(a[0]==="-"?b<20||b===20&&a<="-9223372036854775808":b<19||b===19&&a<="9223372036854775807")return a;jd(a);return id(Yc,Zc)}
function eca(a){if(a[0]==="-")var b=!1;else b=a.length,b=b<20?!0:b===20&&a<="18446744073709551615";if(b)return a;jd(a);return fd(Yc,Zc)}
function Gd(a){a=qd(a);od(a)||(bd(a),a=hd(Yc,Zc));return a}
function Id(a){a=qd(a);a>=0&&od(a)||(bd(a),a=dd(Yc,Zc));return a}
function Fd(a){a=qd(a);od(a)?a=String(a):(bd(a),a=id(Yc,Zc));return a}
function Jd(a){a=qd(a);a>=0&&od(a)?a=String(a):(bd(a),a=fd(Yc,Zc));return a}
function Ed(a){var b=qd(Number(a));if(od(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return dca(a)}
function bca(a){var b=qd(Number(a));if(od(b))return Wc(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Lc()?Wc(md(64,BigInt(a))):Wc(dca(a))}
function cca(a){return od(a)?Wc(Gd(a)):Wc(Fd(a))}
function fca(a){return od(a)?Wc(Id(a)):Wc(Jd(a))}
function Kd(a){var b=qd(Number(a));if(od(b)&&b>=0)return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return eca(a)}
function gca(a){var b=qd(Number(a));if(od(b)&&b>=0)return Wc(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Lc()?Wc(nd(64,BigInt(a))):Wc(eca(a))}
function Ld(a){if(a==null)return a;if(typeof a==="bigint")return Xc(a)?a=Number(a):(a=md(64,a),a=Xc(a)?Number(a):String(a)),a;if(ud(a))return typeof a==="number"?Gd(a):Ed(a)}
function Md(a,b){b=b===void 0?!1:b;var c=typeof a;if(a==null)return a;if(c==="bigint")return String(md(64,a));if(ud(a))return c==="string"?Ed(a):b?Fd(a):Gd(a)}
function Nd(a){var b=typeof a;if(a==null)return a;if(b==="bigint")return Wc(md(64,a));if(ud(a))return b==="string"?bca(a):cca(a)}
function hca(a){var b=0;b=b===void 0?0:b;if(!ud(a))throw wc("uint64");var c=typeof a;switch(b){case 512:switch(c){case "string":return Kd(a);case "bigint":return String(nd(64,a));default:return Jd(a)}case 1024:switch(c){case "string":return gca(a);case "bigint":return Wc(nd(64,a));default:return fca(a)}case 0:switch(c){case "string":return Kd(a);case "bigint":return Wc(nd(64,a));default:return Id(a)}default:return ld(b,"Unknown format requested type for int64")}}
function Od(a){return a==null?a:hca(a)}
function Pd(a){var b=typeof a;if(a==null)return a;if(b==="bigint")return Wc(nd(64,a));if(ud(a))return b==="string"?gca(a):fca(a)}
function Qd(a){if(a==null)return a;var b=typeof a;if(b==="bigint")return String(md(64,a));if(ud(a)){if(b==="string")return Ed(a);if(b==="number")return Gd(a)}}
function Rd(a){if(a==null)return a;var b=typeof a;if(b==="bigint")return String(nd(64,a));if(ud(a)){if(b==="string")return Kd(a);if(b==="number")return Id(a)}}
function ica(a){if(a==null||typeof a=="string"||a instanceof rc)return a}
function Sd(a){if(typeof a!=="string")throw Error();return a}
function Td(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Ud(a){return a==null||typeof a==="string"?a:void 0}
function Vd(a,b,c,e){if(a!=null&&Mc(a))return a;if(!Array.isArray(a))return c?e&2?b[Ac]||(b[Ac]=jca(b)):new b:void 0;c=a[Dc]|0;e=c|e&32|e&2;e!==c&&Gc(a,e);return new b(a)}
function jca(a){a=new a;Ic(a.Aa);return a}
;var kca={};function Wd(a){return a}
;function lca(a,b){if(typeof b==="string")try{b=oc(b)}catch(c){return!1}return pc(b)&&mba(a,b)}
function mca(a){switch(a){case "bigint":case "string":case "number":return!0;default:return!1}}
function nca(a,b){if(Mc(a))a=a.Aa;else if(!Array.isArray(a))return!1;if(Mc(b))b=b.Aa;else if(!Array.isArray(b))return!1;return Xd(a,b,void 0,2)}
function Yd(a,b,c){return Xd(a,b,c,0)}
function Xd(a,b,c,e){if(a===b||a==null&&b==null)return!0;if(a instanceof Map)return oca(a,b,c);if(b instanceof Map)return oca(b,a,c);if(a==null||b==null)return!1;if(a instanceof rc)return rba(a,b);if(b instanceof rc)return rba(b,a);if(pc(a))return lca(a,b);if(pc(b))return lca(b,a);var f=typeof a,h=typeof b;if(f!=="object"||h!=="object")return Number.isNaN(a)||Number.isNaN(b)?String(a)===String(b):mca(f)&&mca(h)?""+a===""+b:f==="boolean"&&h==="number"||f==="number"&&h==="boolean"?!a===!b:!1;if(Mc(a)||
Mc(b))return nca(a,b);if(a.constructor!=b.constructor)return!1;if(a.constructor===Array){h=a[Dc]|0;var k=b[Dc]|0,l=a.length,p=b.length,r=Math.max(l,p);f=(h|k|64)&128?0:-1;if(e===1||(h|k)&1)e=1;else if((h|k)&8192)return pca(a,b);h=l&&a[l-1];k=p&&b[p-1];h!=null&&typeof h==="object"&&h.constructor===Object||(h=null);k!=null&&typeof k==="object"&&k.constructor===Object||(k=null);l=l-f-+!!h;p=p-f-+!!k;for(var t=0;t<r;t++)if(!Zd(t-f,a,h,l,b,k,p,f,c,e))return!1;if(h)for(var v in h){e=a;r=h;t=l;var y=b,E=
k,oa=p,ra=f,Aa=c,Ba=+v;if(!(!Number.isFinite(Ba)||Ba<t||Ba<oa||Zd(Ba,e,r,t,y,E,oa,ra,Aa,2)))return!1}if(k)for(var Ha in k)if((v=h&&Ha in h)||(v=a,e=h,r=l,t=b,y=k,E=p,oa=f,ra=c,Aa=+Ha,v=!Number.isFinite(Aa)||Aa<r||Aa<E?!0:Zd(Aa,v,e,r,t,y,E,oa,ra,2)),!v)return!1;return!0}if(a.constructor===Object)return Yd([a],[b]);throw Error();}
function Zd(a,b,c,e,f,h,k,l,p,r){b=qca(a,b,c,e,l);f=qca(a,f,h,k,l);r=r===1;if(f==null&&(!Array.isArray(b)||b.length?0:(b[Dc]|0)&1)||b==null&&(!Array.isArray(f)||f.length?0:(f[Dc]|0)&1))return!0;a=r?p:p==null?void 0:p.o(a);return Xd(b,f,a,0)}
function qca(a,b,c,e,f){var h;return(h=a<e?b[a+f]:void 0)!=null?h:c==null?void 0:c[a]}
;var rca={},sca=function(){try{var a=function(){return ta(Map,[],this.constructor)};
u(a,Map);Wb(new a);return!1}catch(b){return!0}}();
function $d(){this.o=new Map}
n=$d.prototype;n.get=function(a){return this.o.get(a)};
n.set=function(a,b){this.o.set(a,b);this.size=this.o.size;return this};
n.delete=function(a){a=this.o.delete(a);this.size=this.o.size;return a};
n.clear=function(){this.o.clear();this.size=this.o.size};
n.has=function(a){return this.o.has(a)};
n.entries=function(){return this.o.entries()};
n.keys=function(){return this.o.keys()};
n.values=function(){return this.o.values()};
n.forEach=function(a,b){return this.o.forEach(a,b)};
$d.prototype[Symbol.iterator]=function(){return this.entries()};
var ae=function(){function a(){return ta(Map,[],this.constructor)}
if(sca)return Object.setPrototypeOf($d.prototype,Map.prototype),Object.defineProperties($d.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),$d;u(a,Map);return a}();
function tca(a){return a}
function be(a,b,c,e){c=c===void 0?tca:c;e=e===void 0?tca:e;var f=ae.call(this)||this;f.Cl=a[Dc]|0;f.Fn=b;f.Xu=c;f.yH=f.Fn?uca:e;for(var h=0;h<a.length;h++){var k=a[h],l=c(k[0],!1,!0),p=k[1];b?p===void 0&&(p=null):p=e(k[1],!1,!0,void 0,void 0,f.Cl);ae.prototype.set.call(f,l,p)}return f}
u(be,ae);function ce(a){if(a.Cl&2)throw Error("Cannot mutate an immutable Map");}
function de(a,b){return Jc(Array.from(ae.prototype.entries.call(a),b))}
n=be.prototype;n.clear=function(){ce(this);ae.prototype.clear.call(this)};
n.delete=function(a){ce(this);return ae.prototype.delete.call(this,this.Xu(a,!0,!1))};
n.entries=function(){if(this.Fn){var a=ae.prototype.keys.call(this);a=new Rc(a,vca,this)}else a=ae.prototype.entries.call(this);return a};
n.values=function(){if(this.Fn){var a=ae.prototype.keys.call(this);a=new Rc(a,be.prototype.get,this)}else a=ae.prototype.values.call(this);return a};
n.forEach=function(a,b){this.Fn?ae.prototype.forEach.call(this,function(c,e,f){a.call(b,f.get(e),e,f)}):ae.prototype.forEach.call(this,a,b)};
n.set=function(a,b){ce(this);a=this.Xu(a,!0,!1);return a==null?this:b==null?(ae.prototype.delete.call(this,a),this):ae.prototype.set.call(this,a,this.yH(b,!0,!0,this.Fn,!1,this.Cl))};
n.has=function(a){return ae.prototype.has.call(this,this.Xu(a,!1,!1))};
n.get=function(a){a=this.Xu(a,!1,!1);var b=ae.prototype.get.call(this,a);if(b!==void 0){var c=this.Fn;return c?(c=this.yH(b,!1,!0,c,this.uQ,this.Cl),c!==b&&ae.prototype.set.call(this,a,c),c):b}};
function oca(a,b,c){return b instanceof be?wca(a,b,c):xca(a,b,c)}
be.prototype[Symbol.iterator]=function(){return this.entries()};
be.prototype.toJSON=void 0;function uca(a,b,c,e,f,h){a=Vd(a,e,c,h);f&&(a=ee(a));return a}
function wca(a,b,c){if(a.size!=b.size)return!1;var e=!0;a.forEach(function(f,h){Yd(f,b.get(h),c==null?void 0:c.o(2))||(e=!1)});
return e}
function fe(a,b){if(!Array.isArray(a)||!Array.isArray(b))return 0;a=""+a[0];b=""+b[0];return a===b?0:a<b?-1:1}
function xca(a,b,c){if(b==null)return a.size===0;if(!Array.isArray(b)||a.size>b.length)return!1;b=kd(b);Array.prototype.sort.call(b,fe);for(var e=0,f=void 0,h=b.length-1;h>=0;h--){var k=b[h];if(!k||!Array.isArray(k)||k.length!==2)return!1;var l=k[0];if(l!==f){f=void 0;if(!Yd(a.get(l),k[1],(f=c)==null?void 0:f.o(2)))return!1;f=l;e++}}return e===a.size}
function pca(a,b){if(!Array.isArray(a)||!Array.isArray(b))return!1;a=kd(a);b=kd(b);Array.prototype.sort.call(a,fe);Array.prototype.sort.call(b,fe);var c=a.length,e=b.length;if(c===0&&e===0)return!0;for(var f=0,h=0;f<c&&h<e;){var k=void 0,l=a[f];if(!Array.isArray(l))return!1;for(var p=l[0];f<c-1&&Yd((k=a[f+1])[0],p);)f++,l=k;var r=void 0;k=b[h];if(!Array.isArray(k))return!1;for(var t=k[0];h<e-1&&Yd((r=b[h+1])[0],t);)h++,k=r;if(!Yd(p,t))return!1;p=void 0;if(!Yd(l[1],k[1],(p=void 0)==null?void 0:p.o(2)))return!1;
f++;h++}return f>=c&&h>=e}
function vca(a){return[a,this.get(a)]}
var yca;function zca(){return yca||(yca=new be(Ic([]),void 0,void 0,void 0,rca))}
;function ge(a){var b=ib(Cc);return b?a[b]:void 0}
function le(){}
function me(a,b){for(var c in a)!isNaN(c)&&b(a,+c,a[c])}
function Aca(a){var b=new le;me(a,function(c,e,f){b[e]=kd(f)});
b.iG=a.iG;return b}
function Bca(a,b){a=a.Aa;var c=ib(Cc);c&&c in a&&(a=a[c])&&delete a[b]}
var Cca={fV:!0};function Dca(a,b){var c=c===void 0?!1:c;if(ib(Dba)&&ib(Cc)&&void 0===Dba){var e=a.Aa,f=e[Cc];if(!f)return;if(f=f.iG)try{f(e,b,Cca);return}catch(h){ob(h)}}c&&Bca(a,b)}
function Eca(a,b){var c=ib(Cc),e;yc&&c&&((e=a[c])==null?void 0:e[b])!=null&&xc(xba,3)}
function Fca(a,b){b<100||xc(yba,1)}
;function ne(a,b,c,e){var f=e!==void 0;e=!!e;var h=ib(Cc),k;!f&&yc&&h&&(k=a[h])&&me(k,Fca);h=[];var l=a.length;k=4294967295;var p=!1,r=!!(b&64),t=r?b&128?0:-1:void 0;if(!(b&1)){var v=l&&a[l-1];v!=null&&typeof v==="object"&&v.constructor===Object?(l--,k=l):v=void 0;if(r&&!(b&128)&&!f){p=!0;var y;k=((y=oe)!=null?y:Wd)(k-t,t,a,v,void 0)+t}}b=void 0;for(y=0;y<l;y++){var E=a[y];if(E!=null&&(E=c(E,e))!=null)if(r&&y>=k){var oa=y-t,ra=void 0;((ra=b)!=null?ra:b={})[oa]=E}else h[y]=E}if(v)for(var Aa in v)l=
v[Aa],l!=null&&(l=c(l,e))!=null&&(y=+Aa,E=void 0,r&&!Number.isNaN(y)&&(E=y+t)<k?h[E]=l:(y=void 0,((y=b)!=null?y:b={})[Aa]=l));b&&(p?h.push(b):h[k]=b);f&&ib(Cc)&&(a=ge(a))&&a instanceof le&&(h[Cc]=Aca(a));return h}
function Gca(a){a[0]=pe(a[0]);a[1]=pe(a[1]);return a}
function pe(a){switch(typeof a){case "number":return Number.isFinite(a)?a:""+a;case "bigint":return Xc(a)?Number(a):""+a;case "boolean":return a?1:0;case "object":if(Array.isArray(a)){var b=a[Dc]|0;return a.length===0&&b&1?void 0:ne(a,b,pe)}if(a!=null&&Mc(a))return qe(a);if(a instanceof rc)return uc(a);if(a instanceof be)return a=a.size!==0?de(a,Gca):void 0,a;return}return a}
var Hca=nba?structuredClone:function(a){return ne(a,0,pe)},oe;
function Ica(a,b){if(b){oe=b==null||b===Wd||b[Cba]!==kca?Wd:b;try{return qe(a)}finally{oe=void 0}}return qe(a)}
function qe(a){a=a.Aa;return ne(a,a[Dc]|0,pe)}
;var Jca,Kca;function Lca(a){switch(typeof a){case "boolean":return Jca||(Jca=[0,void 0,!0]);case "number":return a>0?void 0:a===0?Kca||(Kca=[0,void 0]):[-a,void 0];case "string":return[0,a];case "object":return a}}
function re(a,b){return Mca(a,b[0],b[1])}
function se(a,b,c){return Mca(a,b,c,2048)}
function Mca(a,b,c,e){e=e===void 0?0:e;if(a==null){var f=32;c?(a=[c],f|=128):a=[];b&&(f=f&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");f=a[Dc]|0;if(Daa&&1&f)throw Error("rfarr");2048&f&&!(2&f)&&Nca();if(f&256)throw Error("farr");if(f&64)return(f|e)!==f&&Gc(a,f|e),a;if(c&&(f|=128,c!==a[0]))throw Error("mid");a:{c=a;f|=64;var h=c.length;if(h){var k=h-1,l=c[k];if(l!=null&&typeof l==="object"&&l.constructor===Object){b=f&128?0:-1;k-=b;if(k>=1024)throw Error("pvtlmt");for(var p in l)h=
+p,h<k&&(c[h+b]=l[p],delete l[p]);f=f&-16760833|(k&1023)<<14;break a}}if(b){p=Math.max(b,h-(f&128?0:-1));if(p>1024)throw Error("spvt");f=f&-16760833|(p&1023)<<14}}}Gc(a,f|64|e);return a}
function Nca(){if(Daa)throw Error("carr");xc(Aba,5)}
;function Oca(a,b){if(typeof a!=="object")return a;if(Array.isArray(a)){var c=a[Dc]|0;return a.length===0&&c&1?void 0:Pca(a,c,b)}if(a!=null&&Mc(a))return Qca(a);if(a instanceof be){b=a.Cl;if(b&2)return a;if(!a.size)return;c=Ic(de(a));if(a.Fn)for(a=0;a<c.length;a++){var e=c[a],f=e[1];f==null||typeof f!=="object"?f=void 0:f!=null&&Mc(f)?f=Qca(f):Array.isArray(f)?f=Pca(f,f[Dc]|0,!!(b&32)):f=void 0;e[1]=f}return c}if(a instanceof rc)return a}
function Pca(a,b,c){if(b&2)return a;!c||4096&b||16&b?a=te(a,b,!1,c&&!(b&16)):(Hc(a,34),b&4&&Object.freeze(a));return a}
function ue(a,b,c){a=new a.constructor(b);c&&(a.ma=Oc);a.oa=Oc;return a}
function Qca(a){var b=a.Aa,c=b[Dc]|0;return Nc(a,c)?a:ve(a,b,c)?ue(a,b):te(b,c)}
function te(a,b,c,e){e!=null||(e=!!(34&b));a=ne(a,b,Oca,e);e=32;c&&(e|=2);b=b&16769217|e;Gc(a,b);return a}
function ee(a){var b=a.Aa,c=b[Dc]|0;return Nc(a,c)?ve(a,b,c)?ue(a,b,!0):new a.constructor(te(b,c,!1)):a}
function Rca(a){var b=a.Aa,c=b[Dc]|0;return Nc(a,c)?a:ve(a,b,c)?ue(a,b):new a.constructor(te(b,c,!0))}
function we(a){if(a.ma!==Oc)return!1;var b=a.Aa;b=te(b,b[Dc]|0);Hc(b,2048);a.Aa=b;a.ma=void 0;a.oa=void 0;return!0}
function xe(a){if(!we(a)&&Nc(a,a.Aa[Dc]|0))throw Error();}
function ye(a,b){b===void 0&&(b=a[Dc]|0);b&32&&!(b&4096)&&Gc(a,b|4096)}
function ve(a,b,c){return c&2?!0:c&32&&!(c&4096)?(Gc(b,c|2),a.ma=Oc,!0):!1}
;var Sca=Wc(0),ze={};function Ae(a,b,c,e,f){b=Be(a.Aa,b,c,f);if(b!==null||e&&a.oa!==Oc)return b}
function Be(a,b,c,e){if(b===-1)return null;var f=b+(c?0:-1),h=a.length-1;if(!(h<1+(c?0:-1))){if(f>=h){var k=a[h];if(k!=null&&typeof k==="object"&&k.constructor===Object){c=k[b];var l=!0}else if(f===h)c=k;else return}else c=a[f];if(e&&c!=null){e=e(c);if(e==null)return e;if(!Object.is(e,c))return l?k[b]=e:a[f]=e,e}return c}}
function Ce(a,b,c,e){xe(a);var f=a.Aa;De(f,f[Dc]|0,b,c,e);return a}
function De(a,b,c,e,f){var h=c+(f?0:-1),k=a.length-1;if(k>=1+(f?0:-1)&&h>=k){var l=a[k];if(l!=null&&typeof l==="object"&&l.constructor===Object)return l[c]=e,b}if(h<=k)return a[h]=e,b;if(e!==void 0){var p;k=((p=b)!=null?p:b=a[Dc]|0)>>14&1023||536870912;c>=k?e!=null&&(h={},a[k+(f?0:-1)]=(h[c]=e,h)):a[h]=e}return b}
function Ee(a,b,c){a=a.Aa;return Fe(a,a[Dc]|0,b,c)!==void 0}
function Ge(a,b,c,e){var f=a.Aa;return Fe(f,f[Dc]|0,b,He(a,e,c))!==void 0}
function Ie(a,b){return Je(a,a[Dc]|0,b)}
function Ke(a,b,c){var e=a.Aa;return Le(a,e,e[Dc]|0,b,c,3).length}
function Me(a,b,c,e,f){Ne(a,b,c,f,e,1);return a}
function Oe(a){return a===Sc?2:4}
function Pe(a,b,c,e,f,h,k){var l=a.Aa,p=l[Dc]|0;e=Nc(a,p)?1:e;f=!!f||e===3;e===2&&we(a)&&(l=a.Aa,p=l[Dc]|0);var r=Qe(l,b,k),t=r===Ec?7:r[Dc]|0,v=Re(t,p);var y=v;4&y?h==null?a=!1:(!f&&h===0&&(512&y||1024&y)&&(a.constructor[wba]=(a.constructor[wba]|0)+1)<5&&uba(),a=h===0?!1:!(h&y)):a=!0;if(a){4&v&&(r=kd(r),t=0,v=Se(v,p),p=De(l,p,b,r,k));for(var E=y=0;y<r.length;y++){var oa=c(r[y]);oa!=null&&(r[E++]=oa)}E<y&&(r.length=E);c=(v|4)&-513;v=c&=-1025;h&&(v|=h);v&=-4097}v!==t&&(Gc(r,v),2&v&&Object.freeze(r));
return r=Tca(r,v,l,p,b,k,e,a,f)}
function Tca(a,b,c,e,f,h,k,l,p){var r=b;k===1||(k!==4?0:2&b||!(16&b)&&32&e)?Te(b)||(b|=!a.length||l&&!(4096&b)||32&e&&!(4096&b||16&b)?2:256,b!==r&&Gc(a,b),Object.freeze(a)):(k===2&&Te(b)&&(a=kd(a),r=0,b=Se(b,e),e=De(c,e,f,a,h)),Te(b)||(p||(b|=16),b!==r&&Gc(a,b)));2&b||!(4096&b||16&b)||ye(c,e);return a}
function Qe(a,b,c){a=Be(a,b,c);return Array.isArray(a)?a:Ec}
function Re(a,b){2&b&&(a|=2);return a|1}
function Te(a){return!!(2&a)&&!!(4&a)||!!(256&a)}
function Ue(a){return Pc(a,!0,!0)}
function Uca(a){a=kd(a);for(var b=0;b<a.length;b++){var c=a[b]=kd(a[b]);Array.isArray(c[1])&&(c[1]=Ic(c[1]))}return Jc(a)}
function Ve(a,b,c,e){var f=a.Aa,h=f[Dc]|0;var k=Nc(a,h);a:{!k&&we(a)&&(f=a.Aa,h=f[Dc]|0);var l=Be(f,b);a=!1;if(l==null){if(k){b=zca();break a}l=[]}else if(l.constructor===be)if(l.Cl&2&&!k)l=de(l);else{b=l;break a}else Array.isArray(l)?a=!!((l[Dc]|0)&2):l=[];if(k){if(!l.length){b=zca();break a}a||(a=!0,Ic(l))}else a&&(a=!1,Jc(l),l=Uca(l));!a&&h&32&&Kc(l);e=new be(l,c,e,void 0);h=De(f,h,b,e);a||ye(f,h);b=e}!k&&c&&(b.uQ=!0);return b}
function We(a,b,c,e){xe(a);var f=a.Aa,h=f[Dc]|0;if(c==null)return De(f,h,b),a;var k=c===Ec?7:c[Dc]|0,l=k,p=Te(k),r=p||Object.isFrozen(c);p||(k=0);r||(c=kd(c),l=0,k=Se(k,h),r=!1);k|=5;var t;p=(t=Hba(k))!=null?t:0;for(t=0;t<c.length;t++){var v=c[t],y=e(v,p);Object.is(v,y)||(r&&(c=kd(c),l=0,k=Se(k,h),r=!1),c[t]=y)}k!==l&&(r&&(c=kd(c),k=Se(k,h)),Gc(c,k));De(f,h,b,c);return a}
function Xe(a,b,c,e){xe(a);var f=a.Aa;De(f,f[Dc]|0,b,(e==="0"?Number(c)===0:c===e)?void 0:c);return a}
function Ye(a,b,c,e,f){return Ze(a,b,c,e,void 0,f,void 0,void 0,!0)}
function Je(a,b,c){if(b&2)throw Error();var e=Tc(b),f=Qe(a,c,e),h=f===Ec?7:f[Dc]|0,k=Re(h,b);if(2&k||Te(k)||16&k)k===h||Te(k)||Gc(f,k),f=kd(f),h=0,k=Se(k,b),De(a,b,c,f,e);k&=-13;k!==h&&Gc(f,k);return f}
function $e(a,b,c,e,f,h){return Ze(a,b,c,f,e,h,void 0,1)}
function af(a,b,c,e){xe(a);var f=a.Aa,h=f[Dc]|0;if(e==null){var k=bf(f);if(cf(k,f,h,c)===b)k.set(c,0);else return a}else h=df(f,h,c,b);De(f,h,b,e);return a}
function ef(a,b,c,e){var f=a[Dc]|0,h=Tc(f);f=df(a,f,c,b,h);De(a,f,b,e,h)}
function He(a,b,c){return ff(a,b)===c?c:-1}
function ff(a,b){a=a.Aa;return cf(bf(a),a,void 0,b)}
function bf(a){if(yc){var b;return(b=a[Bc])!=null?b:a[Bc]=new Map}if(Bc in a)return a[Bc];b=new Map;Object.defineProperty(a,Bc,{value:b});return b}
function df(a,b,c,e,f){var h=bf(a),k=cf(h,a,b,c,f);k!==e&&(k&&(b=De(a,b,k,void 0,f)),h.set(c,e));return b}
function cf(a,b,c,e,f){var h=a.get(e);if(h!=null)return h;for(var k=h=0;k<e.length;k++){var l=e[k];Be(b,l,f)!=null&&(h!==0&&(c=De(b,c,h,void 0,f)),h=l)}a.set(e,h);return h}
function gf(a,b,c){xe(a);a=a.Aa;var e=a[Dc]|0,f=Be(a,c),h=void 0===Kba;b=Vd(f,b,!h,e);if(!h||b)return b=ee(b),f!==b&&(e=De(a,e,c,b),ye(a,e)),b}
function hf(a,b,c){var e=a[Dc]|0,f=Tc(e),h=Be(a,c,f);if(h!=null&&Mc(h)){if(!Nc(h))return we(h),h.Aa;var k=h.Aa}else Array.isArray(h)&&(k=h);if(k){var l=k[Dc]|0;l&2&&(k=te(k,l))}k=re(k,b);k!==h&&De(a,e,c,k,f);return k}
function Fe(a,b,c,e,f){var h=!1;e=Be(a,e,f,function(k){var l=Vd(k,c,!1,b);h=l!==k&&l!=null;return l});
if(e!=null)return h&&!Nc(e)&&ye(a,b),e}
function Vca(a,b,c){a=a.Aa;return Fe(a,a[Dc]|0,b,c)||b[Ac]||(b[Ac]=jca(b))}
function jf(a,b,c,e){var f=a.Aa,h=f[Dc]|0;b=Fe(f,h,b,c,e);if(b==null)return b;h=f[Dc]|0;if(!Nc(a,h)){var k=ee(b);k!==b&&(we(a)&&(f=a.Aa,h=f[Dc]|0),b=k,h=De(f,h,c,b,e),ye(f,h))}return b}
function kf(a,b,c){var e=a.Aa;return Le(a,e,e[Dc]|0,b,c,1)}
function Le(a,b,c,e,f,h,k,l,p){var r=Nc(a,c);h=r?1:h;l=!!l||h===3;r=p&&!r;(h===2||r)&&we(a)&&(b=a.Aa,c=b[Dc]|0);a=Qe(b,f,k);var t=a===Ec?7:a[Dc]|0,v=Re(t,c);if(p=!(4&v)){var y=a,E=c,oa=!!(2&v);oa&&(E|=2);for(var ra=!oa,Aa=!0,Ba=0,Ha=0;Ba<y.length;Ba++){var Na=Vd(y[Ba],e,!1,E);if(Na instanceof e){if(!oa){var Va=Nc(Na);ra&&(ra=!Va);Aa&&(Aa=Va)}y[Ha++]=Na}}Ha<Ba&&(y.length=Ha);v|=4;v=Aa?v&-4097:v|4096;v=ra?v|8:v&-9}v!==t&&(Gc(a,v),2&v&&Object.freeze(a));if(r&&!(8&v||!a.length&&(h===1||(h!==4?0:2&v||
!(16&v)&&32&c)))){Te(v)&&(a=kd(a),v=Se(v,c),c=De(b,c,f,a,k));e=a;r=v;for(t=0;t<e.length;t++)y=e[t],v=ee(y),y!==v&&(e[t]=v);r|=8;v=r=e.length?r|4096:r&-4097;Gc(a,v)}return a=Tca(a,v,b,c,f,k,h,p,l)}
function lf(a,b,c,e){var f=a.Aa;return Le(a,f,f[Dc]|0,b,c,e,void 0,!1,!0)}
function Wca(a){a==null&&(a=void 0);return a}
function nf(a,b,c,e,f){e=Wca(e);Ce(a,c,e,f);e&&!Nc(e)&&ye(a.Aa);return a}
function of(a,b,c,e){e=Wca(e);af(a,b,c,e);e&&!Nc(e)&&ye(a.Aa);return a}
function pf(a,b,c){xe(a);var e=a.Aa,f=e[Dc]|0;if(c==null)return De(e,f,b),a;for(var h=c===Ec?7:c[Dc]|0,k=h,l=Te(h),p=l||Object.isFrozen(c),r=!0,t=!0,v=0;v<c.length;v++){var y=c[v];l||(y=Nc(y),r&&(r=!y),t&&(t=y))}l||(h=r?13:5,h=t?h&-4097:h|4096);p&&h===k||(c=kd(c),k=0,h=Se(h,f));h!==k&&Gc(c,h);f=De(e,f,b,c);2&h||!(4096&h||16&h)||ye(e,f);return a}
function Se(a,b){return a=(2&b?a|2:a&-3)&-273}
function Ze(a,b,c,e,f,h,k,l,p,r){xe(a);b=Pe(a,b,h,2,!0,void 0,k);var t;h=(t=Hba(b===Ec?7:b[Dc]|0))!=null?t:0;if(p)if(Array.isArray(e))for(f=e.length,l=0;l<f;l++)b.push(c(e[l],h));else for(e=w(e),f=e.next();!f.done;f=e.next())b.push(c(f.value,h));else l&&r?(f!=null||(f=b.length-1),Qc(b,f),b.splice(f,l)):(l&&Jba(b,f),f!=void 0?b.splice(f,l,c(e,h)):b.push(c(e,h)));return a}
function Ne(a,b,c,e,f,h,k){xe(a);var l=a.Aa;a=Le(a,l,l[Dc]|0,c,b,2,void 0,!0);h&&k?(f!=null||(f=a.length-1),Qc(a,f),a.splice(f,h),a.length||(a[Dc]&=-4097)):(h?Jba(a,f):e=e!=null?e:new c,f!=void 0?a.splice(f,h,e):a.push(e),f=c=a===Ec?7:a[Dc]|0,(e=Nc(e))?(c&=-9,a.length===1&&(c&=-4097)):c|=4096,c!==f&&Gc(a,c),e||ye(l))}
function sf(a,b,c,e,f){Ne(a,b,c,e,f);return a}
function Xca(a,b){Ne(a,1,tf,void 0,b,1,!0);return a}
function uf(a,b,c,e){xe(a);var f=a.Aa;b=Le(a,f,f[Dc]|0,c,b,2,void 0,!0);var h=c=0;if(Array.isArray(e))for(var k=e.length,l=0;l<k;l++){var p=e[l];b.push(p);(p=Nc(p))&&!c++&&(b[Dc]&=-9);p||h++||Hc(b,4096)}else for(e=w(e),k=e.next();!k.done;k=e.next())k=k.value,b.push(k),(k=Nc(k))&&!c++&&(b[Dc]&=-9),k||h++||Hc(b,4096);h&&ye(f);return a}
function vf(a,b){return Pe(a,1,Ld,b,void 0,0)}
function Yca(a){return Md(a,!0)}
function Zca(a){return Pc(a,!1,!1)}
function wf(a,b,c,e){return Ud(Ae(a,b,c,e))}
function xf(a,b,c,e){return xd(Ae(a,b,c,e))}
function yf(a,b,c){c=c===void 0?!1:c;var e;return(e=td(Ae(a,b)))!=null?e:c}
function Af(a,b,c){c=c===void 0?0:c;var e;return(e=Ad(Ae(a,b)))!=null?e:c}
function Bf(a,b,c){c=c===void 0?Sca:c;var e;return(e=Nd(Ae(a,b)))!=null?e:c}
function Cf(a,b){var c=c===void 0?Sca:c;var e;return(e=Pd(Ae(a,b)))!=null?e:c}
function Df(a,b){var c=c===void 0?"":c;var e;return(e=wf(a,b))!=null?e:c}
function Ef(a,b,c){c=c===void 0?0:c;var e;return(e=xf(a,b))!=null?e:c}
function Ff(a,b){var c=c===void 0?"0":c;var e;return(e=Md(Ae(a,b),!0))!=null?e:c}
function Gf(a,b,c){a=Pe(a,b,Nd,3,!0,1024);Qc(a,c);return a[c]}
function Hf(a,b,c,e,f){return Pe(a,b,Ud,c,f,void 0,e)}
function If(a,b,c){a=Hf(a,b,3,void 0,!0);Qc(a,c);return a[c]}
function Jf(a,b,c,e){return Pe(a,1,Ue,b,e,void 0,c)}
function Kf(a,b,c){return yf(a,He(a,c,b))}
function Lf(a,b,c){return Df(a,He(a,c,b))}
function Mf(a,b,c){return Nf(a,He(a,c,b))}
function Of(a,b,c,e){return jf(a,b,He(a,e,c),void 0)}
function $ca(a){var b=He(a,Pf,7);return td(Ae(a,b))}
function Qf(a,b){return td(Ae(a,b,void 0,ze))}
function Rf(a,b){return Ad(Ae(a,b,void 0,ze))}
function Sf(a,b){return Nd(Ae(a,b))}
function Tf(a,b){return Nd(Ae(a,b,void 0,ze))}
function Uf(a,b){return Pd(Ae(a,b,void 0,ze))}
function Nf(a,b){return wf(a,b,void 0,ze)}
function Vf(a,b){return xf(a,b,void 0,ze)}
function Wf(a,b,c){return Ce(a,b,sd(c))}
function Xf(a,b,c){return Xe(a,b,sd(c),!1)}
function Yf(a,b,c){return Ce(a,b,zd(c))}
function $f(a,b,c){return Ce(a,b,Hd(c))}
function ag(a,b,c){return Ce(a,b,Td(c))}
function bg(a,b,c){return Xe(a,b,Td(c),"")}
function cg(a,b,c){return Ce(a,b,wd(c))}
function dg(a,b,c){return Xe(a,b,wd(c),0)}
function eg(a,b,c){return We(a,b,c,Sd)}
function fg(a,b){return Ld(Ae(a,b))!=null}
function hg(a,b){return wf(a,b)!=null}
function ig(a,b,c){b=He(a,c,b);return wf(a,b)!=null}
;function jg(a,b,c){this.buffer=a;if(c&&!b)throw Error();this.o=b}
function kg(a,b){if(typeof a==="string")return new jg(oc(a),b);if(Array.isArray(a))return new jg(new Uint8Array(a),b);if(a.constructor===Uint8Array)return new jg(a,!1);if(a.constructor===ArrayBuffer)return a=new Uint8Array(a),new jg(a,!1);if(a.constructor===rc)return b=vc(a)||new Uint8Array(0),new jg(b,!0,a);if(a instanceof Uint8Array)return a=a.constructor===Uint8Array?a:new Uint8Array(a.buffer,a.byteOffset,a.byteLength),new jg(a,!1);throw Error();}
;function ada(a,b,c,e){this.ma=null;this.qa=!1;this.o=this.oa=this.ua=0;this.init(a,b,c,e)}
n=ada.prototype;n.init=function(a,b,c,e){var f=e===void 0?{}:e;e=f.Nw===void 0?!1:f.Nw;f=f.RA===void 0?!1:f.RA;this.Nw=e;this.RA=f;a&&(a=kg(a,this.RA),this.ma=a.buffer,this.qa=a.o,this.ua=b||0,this.oa=c!==void 0?this.ua+c:this.ma.length,this.o=this.ua)};
n.free=function(){this.clear();lg.length<100&&lg.push(this)};
n.clear=function(){this.ma=null;this.qa=!1;this.o=this.oa=this.ua=0;this.Nw=!1};
n.getEnd=function(){return this.oa};
n.setEnd=function(a){this.oa=a};
n.reset=function(){this.o=this.ua};
n.getCursor=function(){return this.o};
n.setCursor=function(a){this.o=a};
function og(a,b){var c=0,e=0,f=0,h=a.ma,k=a.o;do{var l=h[k++];c|=(l&127)<<f;f+=7}while(f<32&&l&128);if(f>32)for(e|=(l&127)>>4,f=3;f<32&&l&128;f+=7)l=h[k++],e|=(l&127)<<f;pg(a,k);if(!(l&128))return b(c>>>0,e>>>0);throw Error();}
function pg(a,b){a.o=b;if(b>a.oa)throw Error();}
function qg(a){var b=a.ma,c=a.o,e=b[c++],f=e&127;if(e&128&&(e=b[c++],f|=(e&127)<<7,e&128&&(e=b[c++],f|=(e&127)<<14,e&128&&(e=b[c++],f|=(e&127)<<21,e&128&&(e=b[c++],f|=e<<28,e&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128)))))throw Error();pg(a,c);return f}
function rg(a){return qg(a)>>>0}
function sg(a){return og(a,hd)}
function tg(a){return og(a,id)}
function ug(a){var b=a.ma,c=a.o,e=b[c+0],f=b[c+1],h=b[c+2];b=b[c+3];pg(a,a.o+4);return(e<<0|f<<8|h<<16|b<<24)>>>0}
function vg(a){var b=ug(a);a=(b>>31)*2+1;var c=b>>>23&255;b&=8388607;return c==255?b?NaN:a*Infinity:c==0?a*1.401298464324817E-45*b:a*Math.pow(2,c-150)*(b+8388608)}
function wg(a){var b=ug(a),c=ug(a);a=(c>>31)*2+1;var e=c>>>20&2047;b=4294967296*(c&1048575)+b;return e==2047?b?NaN:a*Infinity:e==0?a*4.9E-324*b:a*Math.pow(2,e-1075)*(b+4503599627370496)}
function xg(a){for(var b=0,c=a.o,e=c+10,f=a.ma;c<e;){var h=f[c++];b|=h;if((h&128)===0)return pg(a,c),!!(b&127)}throw Error();}
function bda(a){return qg(a)}
function cda(a,b){if(b<0)throw Error();var c=a.o;b=c+b;if(b>a.oa)throw Error();a.o=b;return c}
function dda(a,b){if(b==0)return tc();var c=cda(a,b);a.Nw&&a.qa?c=a.ma.subarray(c,c+b):(a=a.ma,b=c+b,c=c===b?new Uint8Array(0):Wba?a.slice(c,b):new Uint8Array(a.subarray(c,b)));return c.length==0?tc():new rc(c,qc)}
var lg=[];function eda(a,b,c,e){if(lg.length){var f=lg.pop();f.init(a,b,c,e);a=f}else a=new ada(a,b,c,e);this.ma=a;this.qa=this.ma.getCursor();this.o=this.ua=this.oa=-1;this.setOptions(e)}
n=eda.prototype;n.setOptions=function(a){a=a===void 0?{}:a;this.DC=a.DC===void 0?!1:a.DC};
function fda(a,b,c,e){if(yg.length){var f=yg.pop();f.setOptions(e);f.ma.init(a,b,c,e);return f}return new eda(a,b,c,e)}
n.free=function(){this.ma.clear();this.o=this.oa=this.ua=-1;yg.length<100&&yg.push(this)};
n.getCursor=function(){return this.ma.getCursor()};
n.getTag=function(){return this.ua};
n.reset=function(){this.ma.reset();this.qa=this.ma.getCursor();this.o=this.oa=this.ua=-1};
function gda(a){var b=a.ma;if(b.o==b.oa)return!1;a.qa=a.ma.getCursor();b=rg(a.ma);var c=b>>>3,e=b&7;if(!(e>=0&&e<=5))throw Error();if(c<1)throw Error();a.ua=b;a.oa=c;a.o=e;return!0}
function zg(a){switch(a.o){case 0:a.o!=0?zg(a):xg(a.ma);break;case 1:a=a.ma;pg(a,a.o+8);break;case 2:if(a.o!=2)zg(a);else{var b=rg(a.ma);a=a.ma;pg(a,a.o+b)}break;case 5:a=a.ma;pg(a,a.o+4);break;case 3:b=a.oa;do{if(!gda(a))throw Error();if(a.o==4){if(a.oa!=b)throw Error();break}zg(a)}while(1);break;default:throw Error();}}
function Ag(a,b,c){var e=a.ma.getEnd(),f=rg(a.ma);f=a.ma.getCursor()+f;var h=f-e;h<=0&&(a.ma.setEnd(f),c(b,a,void 0,void 0,void 0),h=f-a.ma.getCursor());if(h)throw Error();a.ma.setCursor(f);a.ma.setEnd(e);return b}
function Bg(a){var b=rg(a.ma);a=a.ma;var c=cda(a,b);a=a.ma;if(waa){var e=a,f;(f=nb)||(f=nb=new TextDecoder("utf-8",{fatal:!0}));b=c+b;e=c===0&&b===e.length?e:e.subarray(c,b);try{var h=f.decode(e)}catch(r){if(mb===void 0){try{f.decode(new Uint8Array([128]))}catch(t){}try{f.decode(new Uint8Array([97])),mb=!0}catch(t){mb=!1}}!mb&&(nb=void 0);throw r;}}else{h=c;b=h+b;c=[];for(var k=null,l,p;h<b;)l=a[h++],l<128?c.push(l):l<224?h>=b?lb():(p=a[h++],l<194||(p&192)!==128?(h--,lb()):c.push((l&31)<<6|p&63)):
l<240?h>=b-1?lb():(p=a[h++],(p&192)!==128||l===224&&p<160||l===237&&p>=160||((f=a[h++])&192)!==128?(h--,lb()):c.push((l&15)<<12|(p&63)<<6|f&63)):l<=244?h>=b-2?lb():(p=a[h++],(p&192)!==128||(l<<28)+(p-144)>>30!==0||((f=a[h++])&192)!==128||((e=a[h++])&192)!==128?(h--,lb()):(l=(l&7)<<18|(p&63)<<12|(f&63)<<6|e&63,l-=65536,c.push((l>>10&1023)+55296,(l&1023)+56320))):lb(),c.length>=8192&&(k=vaa(k,c),c.length=0);h=vaa(k,c)}return h}
function Cg(a){var b=rg(a.ma);return dda(a.ma,b)}
function Dg(a,b,c){var e=rg(a.ma);for(e=a.ma.getCursor()+e;a.ma.getCursor()<e;)c.push(b(a.ma))}
var yg=[];function Eg(a,b){this.ma=a>>>0;this.o=b>>>0}
function hda(a){a=BigInt.asUintN(64,a);return new Eg(Number(a&BigInt(4294967295)),Number(a>>BigInt(32)))}
function Fg(a){if(!a)return ida||(ida=new Eg(0,0));if(!/^\d+$/.test(a))return null;jd(a);return new Eg(Yc,Zc)}
var ida;function Gg(a,b){this.ma=a>>>0;this.o=b>>>0}
function jda(a){a=BigInt.asUintN(64,a);return new Gg(Number(a&BigInt(4294967295)),Number(a>>BigInt(32)))}
function Hg(a){if(!a)return kda||(kda=new Gg(0,0));if(!/^-?\d+$/.test(a))return null;jd(a);return new Gg(Yc,Zc)}
var kda;function Ig(){this.o=[]}
Ig.prototype.length=function(){return this.o.length};
Ig.prototype.end=function(){var a=this.o;this.o=[];return a};
function Jg(a,b,c){for(;c>0||b>127;)a.o.push(b&127|128),b=(b>>>7|c<<25)>>>0,c>>>=7;a.o.push(b)}
function Kg(a,b){for(;b>127;)a.o.push(b&127|128),b>>>=7;a.o.push(b)}
function Lg(a,b){if(b>=0)Kg(a,b);else{for(var c=0;c<9;c++)a.o.push(b&127|128),b>>=7;a.o.push(1)}}
function lda(a,b){jd(b);Yba(function(c,e){Jg(a,c>>>0,e>>>0)})}
Ig.prototype.writeUint8=function(a){this.o.push(a>>>0&255)};
function Mg(a,b){a.o.push(b>>>0&255);a.o.push(b>>>8&255);a.o.push(b>>>16&255);a.o.push(b>>>24&255)}
Ig.prototype.writeInt8=function(a){this.o.push(a>>>0&255)};function mda(){this.oa=[];this.ma=0;this.o=new Ig}
function Ng(a,b){b.length!==0&&(a.oa.push(b),a.ma+=b.length)}
function Og(a,b){Pg(a,b,2);b=a.o.end();Ng(a,b);b.push(a.ma);return b}
function Qg(a,b){var c=b.pop();for(c=a.ma+a.o.length()-c;c>127;)b.push(c&127|128),c>>>=7,a.ma++;b.push(c);a.ma++}
function Pg(a,b,c){Kg(a.o,b*8+c)}
function nda(a,b,c){if(c!=null)switch(Pg(a,b,0),typeof c){case "number":a=a.o;bd(c);Jg(a,Yc,Zc);break;case "bigint":c=jda(c);Jg(a.o,c.ma,c.o);break;default:c=Hg(c),Jg(a.o,c.ma,c.o)}}
function oda(a,b,c){if(c!=null)switch(pda(c),Pg(a,b,1),typeof c){case "number":a=a.o;ad(c);Mg(a,Yc);Mg(a,Zc);break;case "bigint":c=hda(c);a=a.o;b=c.o;Mg(a,c.ma);Mg(a,b);break;default:c=Fg(c),a=a.o,b=c.o,Mg(a,c.ma),Mg(a,b)}}
function qda(a,b,c){c!=null&&(c=parseInt(c,10),Pg(a,b,0),Lg(a.o,c))}
function Rg(a,b,c){Pg(a,b,2);Kg(a.o,c.length);Ng(a,a.o.end());Ng(a,c)}
function Sg(a,b,c,e){c!=null&&(b=Og(a,b),e(c,a),Qg(a,b))}
function rda(a){switch(typeof a){case "string":Hg(a)}}
function pda(a){switch(typeof a){case "string":Fg(a)}}
;function Ug(){function a(){throw Error();}
Object.setPrototypeOf(a,a.prototype);return a}
var Vg=Ug(),sda=Ug(),Wg=Ug(),Xg=Ug(),Yg=Ug(),tda=Ug(),uda=Ug(),Zg=Ug(),vda=Ug(),wda=Ug(),$g=Ug(),ah=Ug(),bh=Ug(),ch=Ug(),dh=Ug();function eh(a,b,c){this.Aa=se(a,b,c)}
n=eh.prototype;n.toJSON=function(){return Ica(this)};
n.serialize=function(a){return JSON.stringify(Ica(this,a))};
function fh(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");return new a(Kc(b))}
function gh(a,b){return a===b||a==null&&b==null||!(!a||!b)&&a instanceof b.constructor&&nca(a,b)}
n.clone=function(){var a=this.Aa,b=a[Dc]|0;return ve(this,a,b)?ue(this,a,!0):new this.constructor(te(a,b,!1))};
n.Br=function(){return!Nc(this)};
function hh(a,b,c){Bca(a,b.fieldIndex);return b.ctor?b.oa(a,b.ctor,b.fieldIndex,c,b.o):b.oa(a,b.fieldIndex,c,b.o)}
n.toBuilder=function(){return ee(this)};
eh.prototype[Bba]=Iba;eh.prototype.toString=function(){return this.Aa.toString()};
function xda(a,b){if(b==null)return new a;if(!Array.isArray(b))throw Error();if(Object.isFrozen(b)||Object.isSealed(b)||!Object.isExtensible(b))throw Error();return new a(Kc(b))}
;function ih(a,b,c){this.o=a;this.ma=b;a=ib(Vg);(a=!!a&&c===a)||(a=ib(sda),a=!!a&&c===a);this.oa=a}
function jh(a,b){var c=c===void 0?Vg:c;return new ih(a,b,c)}
function yda(a,b,c,e,f){Sg(a,c,kh(b,e),f)}
var zda=jh(function(a,b,c,e,f){if(a.o!==2)return!1;Ag(a,hf(b,e,c),f);return!0},yda),Ada=jh(function(a,b,c,e,f){if(a.o!==2)return!1;
Ag(a,hf(b,e,c),f);return!0},yda),lh=Symbol(),mh=Symbol(),nh=Symbol(),Bda=Symbol(),Cda=Symbol(),oh,ph;
function qh(a,b,c,e){var f=e[a];if(f)return f;f={};f.pQ=e;f.yv=Lca(e[0]);var h=e[1],k=1;h&&h.constructor===Object&&(f.extensions=h,h=e[++k],typeof h==="function"&&(f.RK=!0,oh!=null||(oh=h),ph!=null||(ph=e[k+1]),h=e[k+=2]));for(var l={};h&&Dda(h);){for(var p=0;p<h.length;p++)l[h[p]]=h;h=e[++k]}for(p=1;h!==void 0;){typeof h==="number"&&(p+=h,h=e[++k]);var r=void 0;if(h instanceof ih)var t=h;else t=zda,k--;h=void 0;if((h=t)==null?0:h.oa){h=e[++k];r=e;var v=k;typeof h==="function"&&(h=h(),r[v]=h);r=h}h=
e[++k];v=p+1;typeof h==="number"&&h<0&&(v-=h,h=e[++k]);for(;p<v;p++){var y=l[p];r?c(f,p,t,r,y):b(f,p,t,y)}}return e[a]=f}
function Dda(a){return Array.isArray(a)&&!!a.length&&typeof a[0]==="number"&&a[0]>0}
function Eda(a){return Array.isArray(a)?a[0]instanceof ih?a:[Ada,a]:[a,void 0]}
function kh(a,b){if(a instanceof eh)return a.Aa;if(Array.isArray(a))return re(a,b)}
;function rh(a,b,c,e){var f=c.o;a[b]=e?function(h,k,l){return f(h,k,l,e)}:f}
function sh(a,b,c,e,f){var h=c.o,k,l;a[b]=function(p,r,t){return h(p,r,t,l||(l=qh(mh,rh,sh,e).yv),k||(k=th(e)),f)}}
function th(a){var b=a[nh];if(b!=null)return b;var c=qh(mh,rh,sh,a);b=c.RK?function(e,f){return oh(e,f,c)}:function(e,f){for(;gda(f)&&f.o!=4;){var h=f.oa,k=c[h];
if(k==null){var l=c.extensions;l&&(l=l[h])&&(l=Fda(l),l!=null&&(k=c[h]=l))}if(k==null||!k(f,e,h)){k=f;l=k.qa;zg(k);if(k.DC)var p=void 0;else{var r=k.ma.getCursor()-l;k.ma.setCursor(l);p=dda(k.ma,r)}r=l=k=void 0;var t=e;p&&((k=(l=(r=t[Cc])!=null?r:t[Cc]=new le)[h])!=null?k:l[h]=[]).push(p)}}if(e=ge(e))e.iG=c.pQ[Cda];return!0};
a[nh]=b;a[Cda]=Gda.bind(a);return b}
function Gda(a,b,c,e){var f=this[mh],h=this[nh],k=re(void 0,f.yv),l=ge(a);if(l){var p=!1,r=f.extensions;if(r){f=function(oa,ra,Aa){if(Aa.length!==0)if(r[ra])for(oa=w(Aa),ra=oa.next();!ra.done;ra=oa.next()){ra=fda(ra.value);try{p=!0,h(k,ra)}finally{ra.free()}}else e==null||e(a,ra,Aa)};
if(b==null)me(l,f);else if(l!=null){var t=l[b];t&&f(l,b,t)}if(p){var v=a[Dc]|0;if(v&2&&v&2048&&(c==null||!c.fV))throw Error();var y=Tc(v),E=function(oa,ra){if(Be(a,oa,y)!=null)switch(c==null?void 0:c.aqa){case 1:return;default:throw Error();}ra!=null&&(v=De(a,v,oa,ra,y));delete l[oa]};
b==null?Lba(k,k[Dc]|0,function(oa,ra){E(oa,ra)}):E(b,Be(k,b,y))}}}}
function Fda(a){a=Eda(a);var b=a[0].o;if(a=a[1]){var c=th(a),e=qh(mh,rh,sh,a).yv;return function(f,h,k){return b(f,h,k,e,c)}}return b}
;function uh(a,b,c){a[b]=c.ma}
function vh(a,b,c,e){var f,h,k=c.ma;a[b]=function(l,p,r){return k(l,p,r,h||(h=qh(lh,uh,vh,e).yv),f||(f=Hda(e)))}}
function Hda(a){var b=a[Bda];if(!b){var c=qh(lh,uh,vh,a);b=function(e,f){return Ida(e,f,c)};
a[Bda]=b}return b}
function Ida(a,b,c){Lba(a,a[Dc]|0,function(e,f){if(f!=null){var h=Jda(c,e);h?h(b,f,e):e<500||xc(zba,3)}});
(a=ge(a))&&me(a,function(e,f,h){Ng(b,b.o.end());for(e=0;e<h.length;e++)Ng(b,vc(h[e])||new Uint8Array(0))})}
function Jda(a,b){var c=a[b];if(c)return c;if(c=a.extensions)if(c=c[b]){c=Eda(c);var e=c[0].ma;if(c=c[1]){var f=Hda(c),h=qh(lh,uh,vh,c).yv;c=a.RK?ph(h,f):function(k,l,p){return e(k,l,p,h,f)}}else c=e;
return a[b]=c}}
;function wh(a,b,c){if(Array.isArray(b)){var e=b[Dc]|0;if(e&4)return b;for(var f=0,h=0;f<b.length;f++){var k=a(b[f]);k!=null&&(b[h++]=k)}h<f&&(b.length=h);a=e|1;c&&(a=(a|4)&-1537);a!==e&&Gc(b,a);c&&a&2&&Object.freeze(b);return b}}
function Kda(a,b,c,e,f,h){if(Array.isArray(b)){for(var k=0;k<b.length;k++)h(a,b[k],c,e,f);a=b[Dc]|0;a&1||Gc(b,a|1)}}
function Lda(a,b){var c=new mda;Ida(a.Aa,c,qh(lh,uh,vh,b));Ng(c,c.o.end());a=new Uint8Array(c.ma);b=c.oa;for(var e=b.length,f=0,h=0;h<e;h++){var k=b[h];a.set(k,f);f+=k.length}c.oa=[a];return a}
function xh(a,b,c){return new ih(a,b,c)}
function yh(a,b,c){return new ih(a,b,c)}
function Mda(a,b,c){c=c===void 0?Vg:c;return new ih(a,b,c)}
function zh(a,b,c){De(a,a[Dc]|0,b,c,Tc(a[Dc]|0))}
function Nda(a,b,c){b=re(void 0,b);Je(a,a[Dc]|0,c).push(b);return b}
var Ah=jh(function(a,b,c,e,f){if(a.o!==2)return!1;a=Ag(a,re([void 0,void 0],e),f);a=kd(a);e=b[Dc]|0;f=Tc(e);if(e&2)throw Error();var h=Be(b,c,f);if(h instanceof be)(h.Cl&2)!=0?(h=de(h),h.push(a),De(b,e,c,h,f)):(b=h,c=b.Xu(a[0],!1,!0),a=a[1],a=b.Fn?a===void 0?null:a:b.yH(a,!1,!0,void 0,!1,b.Cl),ae.prototype.set.call(b,c,a));else if(Array.isArray(h)){var k=h[Dc]|0;k&8192||Gc(h,k|=8192);k&2&&(h=Uca(h),De(b,e,c,h,f));h.push(a)}else De(b,e,c,Jc([a]),f);return!0},function(a,b,c,e,f){if(b instanceof be)b.forEach(function(l,
p){Sg(a,c,re([p,
l],e),f)});
else if(Array.isArray(b)){for(var h=0;h<b.length;h++){var k=b[h];Array.isArray(k)&&Sg(a,c,re(k,e),f)}Jc(b)}});
function Ch(a,b,c){b=rd(b);b!=null&&(Pg(a,c,1),a=a.o,c=$c||($c=new DataView(new ArrayBuffer(8))),c.setFloat64(0,+b,!0),Yc=c.getUint32(0,!0),Zc=c.getUint32(4,!0),Mg(a,Yc),Mg(a,Zc))}
function Dh(a,b,c){b=rd(b);b!=null&&(Pg(a,c,5),a=a.o,Xba(b),Mg(a,Yc))}
function Eh(a,b,c){b=Qd(b);b!=null&&(rda(b),nda(a,c,b))}
function Oda(a,b,c){b=wh(Qd,b,!1);if(b!=null&&b.length){c=Og(a,c);for(var e=0;e<b.length;e++){var f=b[e];switch(typeof f){case "number":var h=a.o;bd(f);Jg(h,Yc,Zc);break;case "bigint":f=jda(f);Jg(a.o,f.ma,f.o);break;default:f=Hg(f),Jg(a.o,f.ma,f.o)}}Qg(a,c)}}
function Pda(a,b,c){b=Rd(b);if(b!=null&&(pda(b),b!=null))switch(Pg(a,c,0),typeof b){case "number":a=a.o;bd(b);Jg(a,Yc,Zc);break;case "bigint":c=hda(b);Jg(a.o,c.ma,c.o);break;default:c=Fg(b),Jg(a.o,c.ma,c.o)}}
function Fh(a,b,c){b=Ad(b);b!=null&&b!=null&&(Pg(a,c,0),Lg(a.o,b))}
function Qda(a,b,c){oda(a,c,Rd(b))}
function Gh(a,b,c){b=td(b);b!=null&&(Pg(a,c,0),a.o.o.push(b?1:0))}
function Hh(a,b,c){b=Ud(b);b!=null&&Rg(a,c,Aaa(b))}
function Rda(a,b,c,e,f){b=kh(b,e);b!=null&&(Pg(a,c,3),f(b,a),Pg(a,c,4))}
function Sda(a,b,c,e,f){Sg(a,c,kh(b,e),f)}
function Ih(a,b,c){b=ica(b);b!=null&&Rg(a,c,kg(b,!0).buffer)}
function Jh(a,b,c){qda(a,c,Ad(b))}
function Tda(a,b,c){if(a.o!==0&&a.o!==2)return!1;b=Ie(b,c);a.o==2?Dg(a,sg,b):b.push(sg(a.ma));return!0}
function Uda(a,b,c){if(a.o!==0&&a.o!==2)return!1;b=Ie(b,c);a.o==2?Dg(a,qg,b):b.push(qg(a.ma));return!0}
function Vda(a,b,c){if(a.o!==0&&a.o!==2)return!1;b=Ie(b,c);a.o==2?Dg(a,bda,b):b.push(qg(a.ma));return!0}
var Kh=xh(function(a,b,c){if(a.o!==1)return!1;zh(b,c,wg(a.ma));return!0},Ch,bh),Lh=xh(function(a,b,c,e){if(a.o!==1)return!1;
ef(b,c,e,wg(a.ma));return!0},Ch,bh),Mh=xh(function(a,b,c){if(a.o!==5)return!1;
zh(b,c,vg(a.ma));return!0},Dh,ah),Nh=yh(function(a,b,c){if(a.o!==5&&a.o!==2)return!1;
b=Ie(b,c);a.o==2?Dg(a,vg,b):b.push(vg(a.ma));return!0},function(a,b,c){b=wh(rd,b,!0);
if(b!=null&&b.length)for(Pg(a,c,2),Kg(a.o,b.length*4),c=0;c<b.length;c++){var e=a.o;Xba(b[c]);Mg(e,Yc)}},ah),Oh=xh(function(a,b,c){if(a.o!==5)return!1;
a=vg(a.ma);zh(b,c,a===0?void 0:a);return!0},Dh,ah),Wda=xh(function(a,b,c,e){if(a.o!==5)return!1;
ef(b,c,e,vg(a.ma));return!0},Dh,ah),Ph=xh(function(a,b,c){if(a.o!==0)return!1;
zh(b,c,tg(a.ma));return!0},Eh,Zg),Xda=yh(function(a,b,c){if(a.o!==0&&a.o!==2)return!1;
b=Ie(b,c);a.o==2?Dg(a,tg,b):b.push(tg(a.ma));return!0},Oda,Zg),Qh=xh(function(a,b,c){if(a.o!==0)return!1;
a=tg(a.ma);zh(b,c,a==="0"?void 0:a);return!0},Eh,Zg),Rh=xh(function(a,b,c){if(a.o!==0)return!1;
zh(b,c,sg(a.ma));return!0},Eh,Zg),Sh=yh(Tda,function(a,b,c){b=wh(Qd,b,!1);
if(b!=null)for(var e=0;e<b.length;e++)nda(a,c,b[e])},Zg),Th=yh(Tda,Oda,Zg),Uh=xh(function(a,b,c){if(a.o!==0)return!1;
a=sg(a.ma);zh(b,c,a===0?void 0:a);return!0},Eh,Zg),Vh=xh(function(a,b,c,e){if(a.o!==0)return!1;
ef(b,c,e,sg(a.ma));return!0},Eh,Zg),Wh=xh(function(a,b,c){if(a.o!==0)return!1;
zh(b,c,og(a.ma,fd));return!0},Pda,vda),Xh=xh(function(a,b,c){if(a.o!==0)return!1;
zh(b,c,og(a.ma,dd));return!0},Pda,vda),Zh=xh(function(a,b,c){if(a.o!==0)return!1;
zh(b,c,qg(a.ma));return!0},Fh,Yg),$h=yh(Uda,function(a,b,c){b=wh(Ad,b,!0);
if(b!=null)for(var e=0;e<b.length;e++){var f=a,h=c,k=b[e];k!=null&&(Pg(f,h,0),Lg(f.o,k))}},Yg),ai=yh(Uda,function(a,b,c){b=wh(Ad,b,!0);
if(b!=null&&b.length){c=Og(a,c);for(var e=0;e<b.length;e++)Lg(a.o,b[e]);Qg(a,c)}},Yg),bi=xh(function(a,b,c){if(a.o!==0)return!1;
a=qg(a.ma);zh(b,c,a===0?void 0:a);return!0},Fh,Yg),ci=xh(function(a,b,c,e){if(a.o!==0)return!1;
ef(b,c,e,qg(a.ma));return!0},Fh,Yg),Yda=xh(function(a,b,c){if(a.o!==1)return!1;
var e=a.ma;a=ug(e);e=ug(e);a=fd(a,e);zh(b,c,a);return!0},Qda,$g),Zda=xh(function(a,b,c){if(a.o!==5)return!1;
zh(b,c,ug(a.ma));return!0},function(a,b,c){b=Cd(b);
b!=null&&(Pg(a,c,5),Mg(a.o,b))},uda),di=xh(function(a,b,c){if(a.o!==0)return!1;
zh(b,c,xg(a.ma));return!0},Gh,Wg),ei=xh(function(a,b,c){if(a.o!==0)return!1;
a=xg(a.ma);zh(b,c,a===!1?void 0:a);return!0},Gh,Wg),fi=xh(function(a,b,c,e){if(a.o!==0)return!1;
ef(b,c,e,xg(a.ma));return!0},Gh,Wg),x=xh(function(a,b,c){if(a.o!==2)return!1;
zh(b,c,Bg(a));return!0},Hh,Xg),gi=yh(function(a,b,c){if(a.o!==2)return!1;
a=Bg(a);Je(b,b[Dc]|0,c).push(a);return!0},function(a,b,c){b=wh(Ud,b,!0);
if(b!=null)for(var e=0;e<b.length;e++){var f=a,h=c,k=b[e];k!=null&&Rg(f,h,Aaa(k))}},Xg),hi=xh(function(a,b,c){if(a.o!==2)return!1;
a=Bg(a);zh(b,c,a===""?void 0:a);return!0},Hh,Xg),ii=xh(function(a,b,c,e){if(a.o!==2)return!1;
ef(b,c,e,Bg(a));return!0},Hh,Xg),$da=Mda(function(a,b,c,e,f){if(a.o!==3)return!1;
b=Nda(b,e,c);f(b,a);if(a.o!==4)throw Error();if(a.oa!==c)throw Error();return!0},function(a,b,c,e,f){Kda(a,b,c,e,f,Rda)},sda),ji=Mda(function(a,b,c,e,f){if(a.o!==2)return!1;
Ag(a,Nda(b,e,c),f);return!0},function(a,b,c,e,f){Kda(a,b,c,e,f,Sda)}),ki=jh(function(a,b,c,e,f,h){if(a.o!==2)return!1;
var k=b[Dc]|0;df(b,k,h,c,Tc(k));b=hf(b,e,c);Ag(a,b,f);return!0},Sda),li=xh(function(a,b,c){if(a.o!==2)return!1;
zh(b,c,Cg(a));return!0},Ih,ch),mi=yh(function(a,b,c){if(a.o!==2)return!1;
a=Cg(a);Je(b,b[Dc]|0,c).push(a);return!0},function(a,b,c){b=wh(ica,b,!1);
if(b!=null)for(var e=0;e<b.length;e++){var f=a,h=c,k=b[e];k!=null&&Rg(f,h,kg(k,!0).buffer)}},ch),ni=xh(function(a,b,c){if(a.o!==2)return!1;
a=Cg(a);zh(b,c,a===tc()?void 0:a);return!0},Ih,ch),aea=xh(function(a,b,c,e){if(a.o!==2)return!1;
ef(b,c,e,Cg(a));return!0},Ih,ch),oi=xh(function(a,b,c){if(a.o!==0)return!1;
zh(b,c,rg(a.ma));return!0},function(a,b,c){b=Cd(b);
b!=null&&b!=null&&(Pg(a,c,0),Kg(a.o,b))},tda),bea=yh(function(a,b,c){if(a.o!==0&&a.o!==2)return!1;
b=Ie(b,c);a.o==2?Dg(a,rg,b):b.push(rg(a.ma));return!0},function(a,b,c){b=wh(Cd,b,!0);
if(b!=null)for(var e=0;e<b.length;e++){var f=a,h=c,k=b[e];k!=null&&(Pg(f,h,0),Kg(f.o,k))}},tda),pi=xh(function(a,b,c){if(a.o!==0)return!1;
zh(b,c,qg(a.ma));return!0},Jh,dh),qi=yh(Vda,function(a,b,c){b=wh(Ad,b,!0);
if(b!=null)for(var e=0;e<b.length;e++)qda(a,c,b[e])},dh),ri=yh(Vda,function(a,b,c){b=wh(Ad,b,!0);
if(b!=null&&b.length){c=Og(a,c);for(var e=0;e<b.length;e++)Lg(a.o,b[e]);Qg(a,c)}},dh),si=xh(function(a,b,c){if(a.o!==0)return!1;
a=qg(a.ma);zh(b,c,a===0?void 0:a);return!0},Jh,dh),ti=xh(function(a,b,c,e){if(a.o!==0)return!1;
ef(b,c,e,qg(a.ma));return!0},Jh,dh),cea=xh(function(a,b,c){if(a.o!==0)return!1;
zh(b,c,og(a.ma,Zba));return!0},function(a,b,c){b=Qd(b);
if(b!=null&&(rda(b),b!=null))switch(Pg(a,c,0),typeof b){case "number":a=a.o;c=b;b=c<0;c=Math.abs(c)*2;ad(c);c=Yc;var e=Zc;b&&(c==0?e==0?e=c=4294967295:(e--,c=4294967295):c--);Yc=c;Zc=e;Jg(a,Yc,Zc);break;case "bigint":a=a.o;b=b<<BigInt(1)^b>>BigInt(63);Yc=Number(BigInt.asUintN(32,b));Zc=Number(BigInt.asUintN(32,b>>BigInt(32)));Jg(a,Yc,Zc);break;default:lda(a.o,b)}},wda),dea=[!0,
x,Zh],ui=[!0,x,di],eea=[!0,x,x];function vi(a,b,c){this.fieldIndex=a;this.ctor=c;this.isRepeated=0;this.ma=jf;this.oa=nf;this.defaultValue=void 0;this.o=b.messageId!=null?Mba:void 0}
vi.prototype.register=function(){Wb(this)};function fea(a,b){return function(c,e){var f={RA:!0};e&&Object.assign(f,e);c=fda(c,void 0,void 0,f);try{var h=new a,k=h.Aa;th(b)(k,c);var l=h}finally{c.free()}return l}}
function wi(a){return function(){return Lda(this,a)}}
function xi(a){return Uc(function(b){return b instanceof a&&!Nc(b)})}
function yi(a){return function(b){return fh(a,b)}}
;var gea=[0,[4],pi,2,ki,[0,di,-1]];var zi=[0,pi];var hea=[0,zi,gea,Rh];var iea=[0,pi,Xh,Rh];function Ai(a){this.Aa=se(a)}
u(Ai,eh);Ai.prototype.getLanguage=function(){return Df(this,3)};
Ai.prototype.setLanguage=function(a){return ag(this,3,a)};var jea=[0,x,Rh,x];Ai.prototype.Ba=wi(jea);var kea=[0,Rh,-1];function Bi(a){this.Aa=se(a)}
u(Bi,eh);var Ci=[2,3];var Di=[0,Ci,Rh,ki,kea,ki,jea];Bi.prototype.Ba=wi(Di);var Ei=[0,pi,Xh];var lea=[0,x,-1];function Fi(a){this.Aa=se(a)}
u(Fi,eh);Fi.prototype.Tf=function(){return Df(this,4)};var Gi=[0,Rh,pi,di,x,-1,ji,lea,pi,-1,ji,[0,[5,6,7,8],x,-3,ki,[0,x,-2],ki,[0,x,-3,ji,[0,x,-5]],ki,[0,x,-2],ki,[0,x,-1]],di];Fi.prototype.Ba=wi(Gi);var Hi=[0,Rh,-1];function Ii(a){this.Aa=se(a)}
u(Ii,eh);Ii.prototype.getType=function(){return Ef(this,1,1)};
Ii.prototype.setType=function(a){return cg(this,1,a)};var mea=[0,pi,Hi,-1,Rh,-1,Hi,-3];Ii.prototype.Ba=wi(mea);function Ji(a){this.Aa=se(a)}
u(Ji,eh);Ji.prototype.getId=function(){return Bf(this,1)};
Ji.prototype.setId=function(a){return $f(this,1,a)};
function Ki(a){return Sf(a,1)}
;function Li(a){this.Aa=se(a)}
u(Li,eh);Li.prototype.getState=function(){return Ef(this,1)};
Li.prototype.getVisibility=function(){return Ef(this,2)};
Li.prototype.setVisibility=function(a){return cg(this,2,a)};
Li.prototype.clearOffTopic=function(){return Ce(this,7)};function Mi(a){this.Aa=se(a)}
u(Mi,eh);n=Mi.prototype;n.getInfo=function(){return jf(this,Ji,1)};
n.getIndex=function(){return Cf(this,2)};
n.getMetadata=function(){return jf(this,Li,5)};
n.Mf=function(a){return nf(this,Li,5,a)};
n.getTypeInfo=function(){return jf(this,Ii,6)};
n.ND=la(0);n.getLanguage=function(){return Df(this,39)};
n.setLanguage=function(a){return ag(this,39,a)};
n.fp=la(2);var nea=[0,pi,Rh,-1];var Ni=[0,[4,5,6,7],pi,Rh,-1,ti,-3];var Oi=[0,Kh,-1,di,x,-2];var Pi=[0,x,-1,Zh,x,pi,-1,zi,x,pi,-1,x,di];var oea=[0,x,-3,ji,[0,x,-1,pi],gi];var Qi=[0,Rh,Wh,Rh,Xh];Ji.prototype.Ba=wi(Qi);var pea=[0,di,Xh,di,qi];var Ri=[0,pi,-1,di,zi,x,-1,di,-2,pea];Li.prototype.Ba=wi(Ri);var Si=[0,li,Xh,-1,x];var Ti=[0,Qi,Xh,Rh,x,Ri,mea,-1,1,ji,Pi,1,pi,Xh,pi,oea,x,Rh,Xh,17,Oi,nea,Rh,ji,Si,x,-1,1,Gi,Ni,ji,Gi,Ei];Mi.prototype.Ba=wi(Ti);var qea=[0,pi,Xh];var rea=[0,x,-1];var sea=[0,x,-1];function Ui(a){this.Aa=se(a)}
u(Ui,eh);n=Ui.prototype;n.getKey=function(){return Nf(this,1)};
n.setKey=function(a){return ag(this,1,a)};
n.getValue=function(){return Nf(this,2)};
n.setValue=function(a){return ag(this,2,a)};
n.Yb=function(){return hg(this,2)};var tea=[0,x,-1];Ui.prototype.Ba=wi(tea);var uea=[0,Rh,-2,Xh,pi,[0,pi,-1,Rh,-1],Rh];function Vi(a){this.Aa=se(a)}
u(Vi,eh);n=Vi.prototype;n.getInfo=function(){return jf(this,Ji,1)};
n.Gs=la(4);n.getTitle=function(){return Nf(this,9)};
n.setTitle=function(a){return ag(this,9,a)};
n.getLanguage=function(){return Nf(this,14)};
n.setLanguage=function(a){return ag(this,14,a)};
n.getState=function(){return Ef(this,15,10)};
n.setProperty=function(a,b){return Me(this,16,Ui,a,b)};
n.getMetadata=function(){return jf(this,Li,12)};
n.Mf=function(a){return nf(this,Li,12,a)};
n.OD=la(5);n.Ac=function(){return Nf(this,22)};
n.Xb=function(){return If(this,44)};
n.Nc=function(a,b){return $e(this,44,Sd,a,b,Ud)};
n.aw=la(6);var Wi=[49,50];var vea=[0,pi,Kh,Rh,-1];var wea=[0,x,di,x,Rh,1,x,-1,Rh,1,x,Rh,pi,-1];var xea=[0,Rh,pi,x];var yea=[0,x,-6,gi,di,2,Rh,[0,x,oi,-1],-4];var zea=[0,yea,wea,pi,ji,xea,di];var Xi=[0,Wi,Qi,2,di,-1,1,Rh,Xh,x,Xh,1,Ri,x,-1,pi,ji,tea,Xh,ji,Pi,1,Xh,pi,x,Xh,pi,di,Di,oea,pi,x,-1,Rh,pi,Sh,ji,uea,Oi,di,Rh,nea,Xh,ji,vea,Xh,1,Di,gi,x,gi,ji,Si,x,ki,rea,ki,sea,di,zea,Xh,x,Ni,di,qea,Ei];Vi.prototype.Ba=wi(Xi);var Yi=[0,pi,di];var Aea=[0,oi,-2];var Bea=[0,di,-4];var Cea=[0,5,Mh,di,-1,pi];var Zi=[0,1,Rh,pi,gi,qi];var $i=[0,Zi,Cea,ji,Aea,-6];var Dea=[0,hea,-2,Zh,di,Th,ji,iea];function aj(a){this.Aa=se(a)}
u(aj,eh);aj.prototype.getLanguage=function(a){return If(this,5,a)};
aj.prototype.setLanguage=function(a,b){return $e(this,5,Sd,a,b,Ud)};var Eea=[0,x,di,-2,gi,x,di,Sh,di,x,Xh,x,Bea,Yi,pi,-1,x,di,-2,Rh,di,Rh,di,-1,Th,Rh,-1,di];aj.prototype.Ba=wi(Eea);function bj(a){this.Aa=se(a)}
u(bj,eh);bj.prototype.getName=function(){return Df(this,1)};
bj.prototype.Sf=function(){return Nf(this,1)};
bj.prototype.setName=function(a){return ag(this,1,a)};
bj.prototype.qf=la(10);var cj=[0,x,-1,Rh,x,-3];bj.prototype.Ba=wi(cj);function dj(a){this.Aa=se(a)}
u(dj,eh);function ej(a,b){return nf(a,bj,2,b)}
dj.prototype.rk=la(11);dj.prototype.FG=function(a){return nf(this,aj,3,a)};var fj=[0,Rh,cj,Eea,di,-1,zi,Pi,Dea,di,Ni];dj.prototype.Ba=wi(fj);var Fea=[0,gi];var Gea=[0,x];var gj=[0,x,-1];var hj=[0,Rh,-2,ji,gj,x,di,-1];var Hea=[0,Rh,-2,x,-1];function ij(a){this.Aa=se(a)}
u(ij,eh);ij.prototype.getSeconds=function(){return Bf(this,1)};
ij.prototype.setSeconds=function(a){return Xe(this,1,Hd(a),"0")};
ij.prototype.getNanos=function(){return Af(this,2)};
ij.prototype.setNanos=function(a){return Xe(this,2,zd(a),0)};
function jj(a){var b=Number;var c=c===void 0?"0":c;var e;var f=(e=Md(Ae(a,1),!0))!=null?e:c;b=b(f);a=a.getNanos();return new Date(b*1E3+a/1E6)}
function kj(){var a=new Date(Date.now()),b=new ij;a=a.getTime();Number.isFinite(a)||(a=0);return b.setSeconds(Math.floor(a/1E3)).setNanos((a%1E3+1E3)%1E3*1E6)}
;function lj(a){this.Aa=se(a)}
u(lj,eh);var mj=[0,Uh,bi];ij.prototype.Ba=wi(mj);var nj=[0,ji,hj,x,Ah,ui,ji,Gea,ji,Hea,x,[0,[0,pi,mj],mj],Ah,[!0,Rh,Fea]];lj.prototype.Ba=wi(nj);var oj=[0,ji,function(){return oj},
x,-3,Sh,di,ji,function(){return oj},
di,pi,x,pi,x,-1];function pj(a){this.Aa=se(a)}
u(pj,eh);n=pj.prototype;n.getName=function(){return Df(this,1)};
n.Sf=function(){return Nf(this,1)};
n.setName=function(a){return ag(this,1,a)};
n.qf=la(9);n.Uq=function(){return yf(this,3)};
n.Qh=function(a){return Wf(this,3,a)};var qj=[0,x,-1,di,Rh];pj.prototype.Ba=wi(qj);function rj(a){this.Aa=se(a)}
u(rj,eh);rj.prototype.getFrdIdentifier=function(){return Ef(this,1)};
function sj(a,b){return cg(a,1,b)}
rj.prototype.Vq=function(){return Ef(this,2)};
rj.prototype.Xc=function(a){return cg(this,2,a)};function tj(a){this.Aa=se(a)}
u(tj,eh);tj.prototype.Mg=function(a){return We(this,1,a,Zca)};
tj.prototype.getValue=function(a){var b=Jf(this,3,void 0,!0);Qc(b,a);return b[a]};
tj.prototype.setValue=function(a,b){return $e(this,1,Zca,a,b,Ue)};function uj(a){this.Aa=se(a)}
u(uj,eh);function Iea(a,b){return We(a,1,b,Dd)}
;function vj(a){this.Aa=se(a)}
u(vj,eh);vj.prototype.Mg=function(a){return We(this,1,a,Dd)};
vj.prototype.getValue=function(a){return Gf(this,1,a)};
vj.prototype.setValue=function(a,b){return $e(this,1,Dd,a,b,Ld)};function wj(a){this.Aa=se(a)}
u(wj,eh);function xj(a){return lf(a,vj,1,Oe())}
function yj(a,b){return pf(a,1,b)}
;function zj(a){this.Aa=se(a)}
u(zj,eh);function Aj(a,b){return Hf(a,1,Oe(b))}
zj.prototype.Mg=function(a){return eg(this,1,a)};
zj.prototype.getValue=function(a){return If(this,1,a)};
zj.prototype.setValue=function(a,b){return $e(this,1,Sd,a,b,Ud)};function Bj(a){this.Aa=se(a)}
u(Bj,eh);function Cj(a){return Of(a,zj,8,Pf)}
function Dj(a,b){return of(a,8,Pf,b)}
n=Bj.prototype;n.ih=function(){return Of(this,vj,2,Pf)};
n.Gi=function(a){return of(this,2,Pf,a)};
n.vk=function(){return Of(this,zj,3,Pf)};
n.Lg=function(a){return of(this,3,Pf,a)};
function Ej(a){return Of(a,uj,4,Pf)}
function Fj(a,b){return of(a,4,Pf,b)}
function Gj(a){return Of(a,tj,5,Pf)}
function Hj(a,b){return of(a,5,Pf,b)}
n.Xo=function(){return Of(this,wj,6,Pf)};
n.Yv=function(a){return of(this,6,Pf,a)};
n.Uq=function(){return Kf(this,7,Pf)};
n.Qh=function(a){return af(this,7,Pf,sd(a))};
var Pf=[2,3,4,5,6,7,8];function Ij(a){this.Aa=se(a)}
u(Ij,eh);Ij.prototype.getFrdContext=function(){return jf(this,rj,1)};
function Jj(a,b){return nf(a,rj,1,b)}
Ij.prototype.getFrdIdentifier=function(){return Ef(this,5)};
function Kj(a,b){return cg(a,5,b)}
function Lj(a){return jf(a,Bj,2)}
function Mj(a,b){return nf(a,Bj,2,b)}
Ij.prototype.setFieldName=function(a){return ag(this,4,a)};var Nj=[0,Rh,x];var Oj=[0,pi,-1];rj.prototype.Ba=wi(Oj);var Jea=[0,mi];tj.prototype.Ba=wi(Jea);var Kea=[0,Sh];uj.prototype.Ba=wi(Kea);var Pj=[0,Sh];vj.prototype.Ba=wi(Pj);var Lea=[0,ji,Pj];wj.prototype.Ba=wi(Lea);var Qj=[0,gi];zj.prototype.Ba=wi(Qj);var Rj=[0,Pf,1,ki,Pj,ki,Qj,ki,Kea,ki,Jea,ki,Lea,fi,ki,Qj];Bj.prototype.Ba=wi(Rj);var Sj=[0,Oj,Rj,pi,x,pi,Rj];Ij.prototype.Ba=wi(Sj);var Mea=[0,1,x,3,x,pi,2,x];var Nea=[0,x,di,-1,Sh,di,x,-2];var Oea=[0,x,-4,ji,[0,x,Sh]];var Tj=[0,x,-1,pi,x,Sh,x,-1,di,91,x];var Pea=[0,x,-1,[0,gi],x];var Qea=[0,ji,gj];var Rea=[0,x,-2,di,gi,di];var Sea=[0,x,Rh];var Uj=[0,Nj,Sj,-1,ji,Sj];var Tea=[0,x,-2,pi];var Uea=[0,x,ji,[0,x,pi]];var Vea=[0,x];var Wea=[0,x,pi];var Xea=[0,x,-2];var Yea=[0,pi,1,pi,ji,[0,pi,x,-1]];var Zea=[0,[4],pi,Zh,x,ci,x];var $ea=[0,ji,[0,[2,3],x,ki,[0,gi],ki,[0,x],di,-1],pi];var afa=[0,x,-2];var bfa=[0,di,Zh];var cfa=[0,bfa];var dfa=[0,Zh];var Wj=[0,Ah,[!0,x,function(){return Vj}]],Vj=[0,
[1,2,3,4,5,6],ti,Lh,ii,fi,ki,function(){return Wj},
ki,function(){return efa}],efa=[0,
ji,function(){return Vj}];var ffa=[0,x,pi,[0,di,ji,[0,pi,ji,[0,x,-2,Vj]]],[0,di,ji,[0,x,-1,ji,[0,x,-1]]]];var gfa=[0,ji,[0,x,Zh,di,pi,di,pi,[0,pi,x],ffa],Zh,pi,ffa,di];var hfa=[0,pi,ji,gj];var ifa=[0,pi,2,qi];var jfa=[0,x,-1,Zh];var kfa=[0,x,-1,di,-1,x,-1,1,di,Sh,Sj,ifa,Th,gi];function Xj(a){this.Aa=se(a)}
u(Xj,eh);function Yj(a,b){return pf(a,1,b)}
function Zj(a){var b=new Xj;return sf(b,1,Ij,a)}
var lfa=yi(Xj);function ak(a){this.Aa=se(a)}
u(ak,eh);n=ak.prototype;n.getId=function(){return Df(this,1)};
n.setId=function(a){return ag(this,1,a)};
n.getType=function(){return Ef(this,3)};
n.setType=function(a){return cg(this,3,a)};
n.getTitle=function(){return Df(this,4)};
n.setTitle=function(a){return ag(this,4,a)};
n.getDescription=function(){return Df(this,5)};
n.setDescription=function(a){return ag(this,5,a)};
n.getValue=function(){return Df(this,6)};
n.setValue=function(a){return ag(this,6,a)};
n.Yb=function(){return hg(this,6)};function bk(a){this.Aa=se(a)}
u(bk,eh);function ck(a){this.Aa=se(a)}
u(ck,eh);function dk(a){this.Aa=se(a)}
u(dk,eh);n=dk.prototype;n.getType=function(){return Ef(this,1)};
n.setType=function(a){return cg(this,1,a)};
n.getDescription=function(){return Df(this,3)};
n.setDescription=function(a){return ag(this,3,a)};
n.getValue=function(){return Df(this,4)};
n.setValue=function(a){return ag(this,4,a)};
n.Yb=function(){return hg(this,4)};
var ek=[10,17];function fk(a){this.Aa=se(a,3)}
u(fk,eh);function gk(a){return jf(a,dk,1)}
var mfa=yi(fk);var hk=[0,ji,Sj,Rh,x,Nj];Xj.prototype.Ba=wi(hk);var nfa=[0,x,Sh,pi,x,-6,gi,-1,x,pi,-1,ji,Sj,ji,hk,hk,x,-1];ak.prototype.Ba=wi(nfa);var ofa=[0,Zh,x];bk.prototype.Ba=wi(ofa);var ik=[0,di,x,-3];ck.prototype.Ba=wi(ik);var pfa=[0,ek,pi,x,-2,Zh,x,Zh,-2,ii,1,pi,-1,$h,ji,hk,1,ki,ofa,1,ik,Sh,ji,[0,hk,pi]];dk.prototype.Ba=wi(pfa);var jk=[-3,{},pfa,nfa];fk.prototype.Ba=wi(jk);var qfa=[0,[27,28,29,30,31,35,38,40,41,43,45,46,47],x,-1,di,pi,ji,kfa,x,hfa,jfa,x,-5,Sh,x,di,gi,ji,kfa,pi,x,Zh,di,Zh,nj,gi,ki,dfa,ki,$ea,ki,gfa,ki,Yea,ki,Xea,Sj,ifa,x,ki,Uea,di,1,ki,jk,pi,ki,cfa,ki,afa,di,ki,Tea,1,ki,Zea,ki,Vea,ki,Wea,di];function kk(a){this.Aa=se(a)}
u(kk,eh);function lk(a){return jf(a,Ij,1)}
function nk(a,b){return nf(a,Ij,1,b)}
;var ok=[0,Sj,Zh,pi,qi,di];kk.prototype.Ba=wi(ok);var pk=[0,[0,x,-2],li,3,x];var rfa=[0,x,gi,ji,qfa,x,-2,2,x,-3,di,-2,gi,Zh,pi,1,gi,-1,Rea,x,di,-1,x,-1,1,di,bfa,pi,x,Zh,Sh,pk,-1,nj,x,-1,Sea,2,Uj,1,di,-1,1,pi,ji,ok,x,-1,Zh,Rh,46,x];var qk=[0,ji,ok,Nj,pi,Sh];var rk=[0,Uh,bi];function sk(a){this.Aa=se(a)}
u(sk,eh);sk.prototype.dr=function(){return Rf(this,1)};
sk.prototype.getTimestamp=function(){return Uf(this,5)};
sk.prototype.setTimestamp=function(a){return Ce(this,5,Od(a))};function tk(a){this.Aa=se(a)}
u(tk,eh);tk.prototype.getUrl=function(){return Nf(this,1)};
tk.prototype.setUrl=function(a){return ag(this,1,a)};function uk(a){this.Aa=se(a)}
u(uk,eh);function vk(a){this.Aa=se(a)}
u(vk,eh);n=vk.prototype;n.getViews=function(){return Tf(this,1)};
n.getThumbnail=function(){return Nf(this,2)};
n.hasThumbnail=function(){return hg(this,2)};
n.getTimestamp=function(){return Uf(this,4)};
n.setTimestamp=function(a){return Ce(this,4,Od(a))};function wk(a){this.Aa=se(a)}
u(wk,eh);n=wk.prototype;n.getUrl=function(){return Nf(this,1)};
n.setUrl=function(a){return ag(this,1,a)};
n.getTitle=function(){return Nf(this,2)};
n.setTitle=function(a){return ag(this,2,a)};
n.Ud=function(){return Nf(this,3)};
function xk(a,b){return ag(a,3,b)}
n.getLanguage=function(){return Nf(this,10)};
n.setLanguage=function(a){return ag(this,10,a)};
n.getPageType=function(){return Vf(this,15)};
function yk(a,b){return ag(a,21,b)}
n.Rb=function(){return Nf(this,22)};
function zk(a,b){return ag(a,22,b)}
function Ak(a){return jf(a,sk,26)}
function Bk(a){return jf(a,vk,28)}
;function Ck(a){this.Aa=se(a)}
u(Ck,eh);function Dk(a){return lf(a,wk,1,Oe())}
;function Ek(a){this.Aa=se(a)}
u(Ek,eh);Ek.prototype.Zi=function(){return Nf(this,3)};
Ek.prototype.Rb=function(){return Nf(this,14)};function Fk(a){this.Aa=se(a)}
u(Fk,eh);Fk.prototype.getActive=function(){return Qf(this,3)};
Fk.prototype.setActive=function(a){return Wf(this,3,a)};function Gk(a){this.Aa=se(a)}
u(Gk,eh);function Hk(a){this.Aa=se(a)}
u(Hk,eh);Hk.prototype.getQuery=function(){return Mf(this,1,Ik)};
Hk.prototype.setQuery=function(a){return af(this,1,Ik,Td(a))};
Hk.prototype.getStartIndex=function(){return Rf(this,2)};
var Ik=[1,5];function Jk(a){this.Aa=se(a)}
u(Jk,eh);function Kk(a){this.Aa=se(a)}
u(Kk,eh);function Lk(a){this.Aa=se(a)}
u(Lk,eh);n=Lk.prototype;n.getId=function(){return Nf(this,1)};
n.setId=function(a){return ag(this,1,a)};
n.getLanguage=function(){return Nf(this,2)};
n.setLanguage=function(a){return ag(this,2,a)};
n.getName=function(){return Nf(this,3)};
n.Sf=function(){return Nf(this,3)};
n.setName=function(a){return ag(this,3,a)};
n.qf=la(8);n.getTitle=function(){return Nf(this,4)};
n.setTitle=function(a){return ag(this,4,a)};
function sfa(a,b){return ag(a,5,b)}
n.getContent=function(){return Nf(this,6)};
n.setContent=function(a){return ag(this,6,a)};
n.clearContent=function(){return Ce(this,6)};
n.getMetadata=function(){return jf(this,lj,13)};
n.Mf=function(a){return nf(this,lj,13,a)};
n.setProperty=function(a,b){return Me(this,20,pj,a,b)};
n.getAuthorEmail=function(){return Nf(this,22)};function Mk(a){this.Aa=se(a)}
u(Mk,eh);Mk.prototype.Uq=function(){return yf(this,2)};
Mk.prototype.Qh=function(a){return Wf(this,2,a)};
function Nk(a){return Bf(a,3)}
;function Ok(a){this.Aa=se(a)}
u(Ok,eh);function Pk(a){return lf(a,Mk,3,Oe())}
Ok.prototype.Mg=function(a){return pf(this,3,a)};
Ok.prototype.setValue=function(a,b){return Me(this,3,Mk,a,b)};function Qk(a){this.Aa=se(a)}
u(Qk,eh);function Rk(a,b){return lf(a,Ok,5,Oe(b))}
var Sk=yi(Qk);var Tk=[0,x,-3];var Uk=[0,x,pi,1,x];var Vk=[0,pi,x,-5];var tfa=[0,x,-9,2,x,-12];var ufa=[0,x,-1,Rh,-1];var vfa=[0,x];var wfa=[0,Zh,-2,x,Xh,x,-1,di,pi];sk.prototype.Ba=wi(wfa);var xfa=[0,x];tk.prototype.Ba=wi(xfa);var yfa=[0,xfa,-4];uk.prototype.Ba=wi(yfa);var zfa=[0,Rh,x,Zh,Xh,x,di,x,yfa];vk.prototype.Ba=wi(zfa);var Wk=[0,x,-2,pi,x,ji,oj,x,-1,pk,x,-2,1,di,pi,di,x,-1,di,x,-2,pi,ji,function(){return Wk},
1,wfa,ji,function(){return Wk},
zfa,1,vfa,ufa];wk.prototype.Ba=wi(Wk);var Xk=[0,ji,Wk];Ck.prototype.Ba=wi(Xk);Ek.prototype.Ba=wi([0,ji,Wk,Rh,x,tfa,ji,Wk,-1,x,ji,Wk,Vk,ji,Tk,ji,Uk,Zh,-1,x,Xk]);var Afa=[0,x,-1,di];Fk.prototype.Ba=wi(Afa);Gk.prototype.Ba=wi([0,ji,Afa]);Hk.prototype.Ba=wi([0,Ik,ii,Zh,-1,x,ii,pi,x,Zh,di,-1,Zh]);var Yk=[0,1,x];Jk.prototype.Ba=wi(Yk);var Bfa=[0,x,pi,x,-1];var Zk=[0,x,-1,pi];Kk.prototype.Ba=wi(Zk);var Cfa=[0,ji,hj,-1,x,ji,hj,Ah,ui];var $k=[0,x,-1,di,Zh,Mh,di,-2,ji,function(){return $k}];var Dfa=[0,x,-2,$k,x,-1];var Efa=[0,x];var Ffa=[0,x,-2,nj,x];var Gfa=[0,x,-1,ji,hj,-1,Ah,ui];var Hfa=[0,Zh,-2];var Ifa=[0,x,-5,function(){return al},
ji,function(){return al},
-1,di,-1,x,Rh,x,pk,-1,x,-1,Th,ji,qj,ji,Bfa,Efa,di,-1,x],Jfa=[0,x,-8,function(){return al},
nj,x,Sh,ji,qj,x,Rh,x,pk,-1,x,pk],Kfa=[0,x,-2,1,x,function(){return al},
nj,x,Sh,ji,qj,x,Rh,x,pk,-1,x],Lfa=[0,x,-6,function(){return al},
ji,function(){return al},
-1,di,-1,nj,x,-2,Sh,ji,Tj,-1,ji,qj,ji,Hfa,x,Rh,x,pk,-1,x,ji,Bfa,[0,x],Efa,ji,qk,di,-2,pk];Lk.prototype.Ba=wi(Lfa);var al=[0,x,-1,di,ji,function(){return al},
ji,function(){return Mfa},
function(){return al},
ji,function(){return al},
x,Sh,gi,2,di,pi,x,ji,Nea,ji,Tj,x,-1,Mea,Pea,x,-2,Gfa,x,1,Oea,x,pi,pk,ji,qj,ji,Qea,di,pk,gi,di,ji,function(){return Lfa},
ji,function(){return Kfa},
ji,function(){return Jfa},
ji,Dfa,ji,Ffa,ji,rfa,ji,function(){return Ifa}],Mfa=[0,
x,-11,di,-1,x,8,x,$k,1,function(){return al},
ji,function(){return al},
x,Sh,di,Rh,x,-1,ji,Tj,x,ji,Tj,ji,function(){return al},
x,ji,hj,-1,x,1,x,-1,Cfa,pk,ji,qj,ji,Hfa,pk,Zh,x,-5];var Nfa=[0,x,ji,function(){return bl}],Ofa=[0,
ji,function(){return Nfa}],bl=[0,
x,di,Rh,Zh,Kh,Mh,Xh,oi,function(){return Ofa}];
Mk.prototype.Ba=wi(bl);var cl=[0,pi,x,ji,bl];Ok.prototype.Ba=wi(cl);var Pfa=[0,x,-2,di,ji,cl];Qk.prototype.Ba=wi(Pfa);var Qfa=new Map([["","HOMEPAGE"],["announcement","ANNOUNCEMENT"],["answer","ANSWER"],["topic","TOPIC"],["contact","CONTACT_FORM"],["troubleshooter","TROUBLESHOOTER"],["known-issues","KNOWN_ISSUES"],["suggestions","SUGGESTIONS"],["release-notes","RELEASE_NOTES"],["search","SEARCH_RESULTS"],["sitemap","SITEMAP"],["faq","FAQ"],["apis","API"],["checklist","CHECKLIST"],["table","TABLE"],["helpcenterz","HELPCENTERZ"],["contactflow","CONTACT_FLOW"],["forum","FORUM_THREAD"],["forum-attachment","FORUM_ATTACHMENT"],
["threads","SUPPORT_FORUM_THREAD_LIST"],["thread","SUPPORT_FORUM_THREAD"],["community-video","COMMUNITY_VIDEO"],["community-guide","COMMUNITY_GUIDE"],["settings","USER_SETTINGS"],["profile","USER_PROFILE"],["workflow","WORKFLOW"],["inapp","IN_APP"],["community","SUPPORT_FORUM_HOMEPAGE"],["gethelp","GET_HELP"],["snippet","SNIPPET"],["symptom","SYMPTOM_RESOURCES"],["video","VIDEO"]]),Rfa=new Map(Array.from(Qfa).map(function(a){return[a[1],a[0]]})),Sfa=new Map([[0,
""],[1,"answer"],[2,"topic"],[4,"contact"],[5,"troubleshooter"],[6,"known-issues"],[7,"suggestions"],[8,"release-notes"],[10,"search"],[11,"sitemap"],[13,"faq"],[16,"apis"],[17,"checklist"],[18,"table"],[19,"helpcenterz"],[21,"contactflow"],[22,"forum"],[23,"forum-attachment"],[24,"threads"],[25,"thread"],[27,"settings"],[28,"profile"],[29,"workflow"],[30,"inapp"],[31,"community"],[33,"gethelp"],[34,"announcement"],[35,"snippet"],[36,"symptom"],[37,"community-video"],[38,"video"],[39,"community-guide"]]),
Tfa=new Map(Array.from(new Map([["HOMEPAGE",0],["ANSWER",1],["TOPIC",2],["CONTACT_FORM",4],["TROUBLESHOOTER",5],["KNOWN_ISSUES",6],["SUGGESTIONS",7],["RELEASE_NOTES",8],["PORTAL",9],["SEARCH_RESULTS",10],["SITEMAP",11],["CONTACT_FORM_CONFIRMATION",12],["FAQ",13],["HOMEPAGE_TOP_ARTICLES",14],["VANITY",15],["API",16],["CHECKLIST",17],["TABLE",18],["HELPCENTERZ",19],["PRODUCT_SELECTOR",20],["CONTACT_FLOW",21],["FORUM_THREAD",22],["FORUM_ATTACHMENT",23],["SUPPORT_FORUM_THREAD_LIST",24],["SUPPORT_FORUM_THREAD",
25],["SUPPORT_FORUM_NEW_THREAD",26],["USER_SETTINGS",27],["USER_PROFILE",28],["WORKFLOW",29],["IN_APP",30],["SUPPORT_FORUM_HOMEPAGE",31],["SUPPORT_FORUM_ABOUT",32],["GET_HELP",33],["ANNOUNCEMENT",34],["SNIPPET",35],["COMMUNITY_VIDEO",37],["VIDEO",38],["COMMUNITY_GUIDE",39]])).map(function(a){return[a[1],a[0]]}));function dl(a){return bb(a)&&a.nodeType===1}
function el(a){return bb(a)&&dl(a)&&(!a.namespaceURI||a.namespaceURI==="http://www.w3.org/1999/xhtml")}
;/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
function fl(a){return{valueOf:a}.valueOf()}
;var gl=globalThis.trustedTypes,Ufa=gl,hl;function Vfa(){var a=null;if(!Ufa)return a;try{var b=function(c){return c};
a=Ufa.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function il(){hl===void 0&&(hl=Vfa());return hl}
;function jl(a){this.o=a}
jl.prototype.toString=function(){return this.o+""};
function ll(a){var b=il();a=b?b.createScriptURL(a):a;return new jl(a)}
function ml(a){if(a instanceof jl)return a.o;throw Error("");}
;var Wfa=za([""]),Xfa=Ca(["\x00"],["\\0"]),Yfa=Ca(["\n"],["\\n"]),Zfa=Ca(["\x00"],["\\u0000"]);function nl(a){return a.toString().indexOf("`")===-1}
nl(function(a){return a(Wfa)})||nl(function(a){return a(Xfa)})||nl(function(a){return a(Yfa)})||nl(function(a){return a(Zfa)});function ol(a){this.o=a}
ol.prototype.toString=function(){return this.o};
function pl(a){return new ol(a)}
var ql=pl("about:invalid#zClosurez");function rl(a){if(a instanceof ol)return a.o;throw Error("");}
;function sl(a){this.isValid=a}
function tl(a){return new sl(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var $fa=tl("tel"),aga=[tl("data"),tl("http"),tl("https"),tl("mailto"),tl("ftp"),new sl(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function ul(a,b){b=b===void 0?aga:b;if(a instanceof ol)return a;for(var c=0;c<b.length;++c){var e=b[c];if(e instanceof sl&&e.isValid(a))return pl(a)}}
function vl(a,b){b=b===void 0?aga:b;return ul(a,b)||ql}
function wl(a){var b=window;if(typeof MediaSource!=="undefined"&&a instanceof MediaSource||typeof b.ManagedMediaSource!=="undefined"&&a instanceof b.ManagedMediaSource)return pl(URL.createObjectURL(a));b=a.type;b.toLowerCase()==="application/octet-stream"?b=!0:(b=b.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i),b=(b==null?void 0:b.length)===2&&(/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon|heic|heif|avif|x-ms-bmp)$/i.test(b[1])||/^video\/(?:3gpp|avi|mpeg|mpg|mp4|ogg|webm|x-flv|x-matroska|quicktime|x-ms-wmv)$/i.test(b[1])||
/^audio\/(?:3gpp2|3gpp|aac|amr|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(b[1])||/^font\/[\w-]+$/i.test(b[1])));if(!b)throw Error("");return pl(URL.createObjectURL(a))}
var bga=fl(function(){return typeof URL==="function"}),cga=["data:",
"http:","https:","mailto:","ftp:"],dga=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;function ega(a){if(dga.test(a))return a}
function xl(a){return a instanceof ol?rl(a):ega(a)}
;function yl(a,b){b=xl(b);b!==void 0&&(a.href=b)}
;function zl(a){this.o=a}
zl.prototype.toString=function(){return this.o+""};
function Al(a){var b=il();a=b?b.createHTML(a):a;return new zl(a)}
var Bl=fl(function(){return new zl(gl?gl.emptyHTML:"")});
function Cl(a){if(a instanceof zl)return a.o;throw Error("");}
;var fga={PX:0,BX:1,DX:2,0:"FORMATTED_HTML_CONTENT",1:"EMBEDDED_INTERNAL_CONTENT",2:"EMBEDDED_TRUSTED_EXTERNAL_CONTENT"};function Dl(a,b){a.setAttribute("sandbox","");for(var c=0;c<b.length;c++)a.sandbox.supports&&!a.sandbox.supports(b[c])||a.sandbox.add(b[c])}
function El(a,b){var c=Error.call(this,a+" cannot be used with intent "+fga[b]);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.type=a;this.intent=b;this.name="TypeCannotBeUsedWithIframeIntentError"}
u(El,Error);
function Fl(a,b,c){a.removeAttribute("srcdoc");switch(b){case 0:if(c instanceof jl)throw new El("TrustedResourceUrl",0);Dl(a,[]);b=xl(c);b!==void 0&&(a.src=b);break;case 1:if(!(c instanceof jl))throw new El(typeof c,1);Dl(a,"allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" "));a.src=ml(c).toString();break;case 2:if(c instanceof jl)throw new El("TrustedResourceUrl",2);Dl(a,"allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" "));b=
xl(c);b!==void 0&&(a.src=b);break;default:ld(b)}}
;function Gl(a,b,c){b=xl(b);return b!==void 0?a.open(b,c,void 0):null}
function Hl(a){a=a===void 0?document:a;var b,c;a=(c=(b=a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Il(a){this.o=a}
Il.prototype.toString=function(){return this.o+""};
function gga(a){var b=il();a=b?b.createScript(a):a;return new Il(a)}
function hga(a){if(a instanceof Il)return a.o;throw Error("");}
;function iga(a){var b=Hl(a.ownerDocument);b&&a.setAttribute("nonce",b)}
function Jl(a,b){a.textContent=hga(b);iga(a)}
function Kl(a,b){a.src=ml(b);iga(a)}
;function Ll(a){this.o=a}
Ll.prototype.toString=function(){return this.o};function Ml(a,b){if(a.nodeType===1&&/^(script|style)$/i.test(a.tagName))throw Error("");a.innerHTML=Cl(b)}
function Nl(a,b,c,e){if(a.length===0)throw Error("");a=a.map(function(h){if(h instanceof Ll)h=h.o;else throw Error("");return h});
var f=c.toLowerCase();if(a.every(function(h){return f.indexOf(h)!==0}))throw Error('Attribute "'+c+'" does not match any of the allowed prefixes.');
b.setAttribute(c,e)}
;function Ol(a,b){this.name=a;this.value=b}
Ol.prototype.toString=function(){return this.name};
var jga=new Ol("SEVERE",1E3),kga=new Ol("WARNING",900),lga=new Ol("CONFIG",700);function Pl(a,b){b=xl(b);b!==void 0&&a.replace(b)}
;function Ql(a){return new Ll(a[0].toLowerCase())}
;function Rl(a){if(a instanceof zl)return a;a=String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");return Al(a)}
function mga(a){return nga(a)}
function nga(a){var b=Rl("");return Al(a.map(function(c){return Cl(Rl(c))}).join(Cl(b).toString()))}
var oga=/^[a-z][a-z\d-]*$/i,pga="APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE".split(" "),qga="AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" "),rga=["action","formaction","href"];function Sl(a){if(!oga.test(a))throw Error("");if(pga.indexOf(a.toUpperCase())!==-1)throw Error("");}
function Tl(a,b,c){Sl(a);var e="<"+a;b&&(e+=sga(b));Array.isArray(c)||(c=c===void 0?[]:[c]);qga.indexOf(a.toUpperCase())!==-1?e+=">":(b=mga(c.map(function(f){return f instanceof zl?f:Rl(String(f))})),e+=">"+b.toString()+"</"+a+">");
return Al(e)}
function sga(a){for(var b="",c=Object.keys(a),e=0;e<c.length;e++){var f=c[e],h=a[f];if(!oga.test(f))throw Error("");if(h!==void 0&&h!==null){if(/^on./i.test(f))throw Error("");rga.indexOf(f.toLowerCase())!==-1&&(h=h instanceof ol?h.toString():ega(String(h))||"about:invalid#zClosurez");h=f+'="'+Rl(String(h))+'"';b+=" "+h}}return b}
;function Ul(){this.o=new Map}
Ul.prototype.format=function(a){var b=this,c=Rl("_safevalues_format_marker_:").toString();a=Rl(a).toString().replace(new RegExp("\\{"+c+"[\\w&#;]+\\}","g"),function(e){var f;if(f=b.o.get(e)){e="";switch(f.type){case "html":e=f.html;break;case "startTag":e="<"+f.tagName+f.attributes+">";break;case "endTag":e="</"+f.tagName+">"}f=e}else f=e;return f});
return Al(a)};
function Vl(a,b,c){Sl(b);return Wl(a,{type:"startTag",tagName:b,attributes:c!==void 0?sga(c):""})}
function Xl(a,b){Sl(b);return Wl(a,{type:"endTag",tagName:b})}
Ul.prototype.text=function(a){return Wl(this,{type:"html",html:Rl(a).toString()})};
Ul.prototype.safeHtml=function(a){return Wl(this,{type:"html",html:Cl(a).toString()})};
function Wl(a,b){var c="{_safevalues_format_marker_:"+a.o.size+"_"+Math.random().toString(36).slice(2)+"}";a.o.set(Rl(c).toString(),b);return c}
;function Yl(a){try{return new URL(a,window.document.baseURI)}catch(b){return new URL("about:invalid")}}
;function tga(a,b){var c=b.createRange();c.selectNode(b.body);a=Al(a);return c.createContextualFragment(Cl(a))}
;function uga(a){a=a.nodeName;return typeof a==="string"?a:"FORM"}
function vga(a){a=a.nodeType;return a===1||typeof a!=="number"}
;function Zl(a,b,c,e,f){this.oa=a;this.o=b;this.ua=c;this.qa=e;this.ma=f}
function wga(a,b,c){c=a.o.get(c);return(c==null?0:c.has(b))?c.get(b):a.ua.has(b)?{wf:1}:(c=a.qa.get(b))?c:a.ma&&[].concat(ya(a.ma)).some(function(e){return b.indexOf(e)===0})?{wf:1}:{wf:0}}
;var xga="ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" "),
yga=[["A",new Map([["href",{wf:7}]])],["AREA",new Map([["href",{wf:7}]])],["LINK",new Map([["href",{wf:5,conditions:new Map([["rel",new Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]])}]])],["SOURCE",new Map([["src",{wf:5}],["srcset",{wf:6}]])],["IMG",new Map([["src",{wf:5}],["srcset",{wf:6}]])],["VIDEO",new Map([["src",{wf:5}]])],["AUDIO",new Map([["src",{wf:5}]])]],zga="title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked cite color cols colspan controls controlslist coords crossorigin datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden inert ismap label lang loop max maxlength media minlength min multiple muted nonce open playsinline placeholder poster preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type usemap valign value width wrap itemscope itemtype itemid itemprop itemref".split(" "),
Aga=[["dir",{wf:3,conditions:fl(function(){return new Map([["dir",new Set(["auto","ltr","rtl"])]])})}],
["async",{wf:3,conditions:fl(function(){return new Map([["async",new Set(["async"])]])})}],
["loading",{wf:3,conditions:fl(function(){return new Map([["loading",new Set(["eager","lazy"])]])})}],
["target",{wf:3,conditions:fl(function(){return new Map([["target",new Set(["_self","_blank"])]])})}]],Bga=new Zl(new Set(xga),new Map(yga),new Set(zga),new Map(Aga)),Cga=new Zl(new Set(xga.concat(["BUTTON",
"INPUT"])),new Map(yga),new Set(fl(function(){return zga.concat(["class","id","name"])})),new Map(fl(function(){return Aga.concat([["style",
{wf:1}]])})));function $l(a,b,c,e,f){this.oa=a;this.qa=b;this.ua=c;this.o=e;this.ma=f;this.changes=[]}
$l.prototype.Wd=function(a){var b=document.implementation.createHTMLDocument("");a=Dga(this,a,b);b=b.body;b.appendChild(a);b=(new XMLSerializer).serializeToString(b);b=b.slice(b.indexOf(">")+1,b.lastIndexOf("</"));return Al(b)};
function Dga(a,b,c){b=tga(b,c);b=document.createTreeWalker(b,5,function(l){if(l.nodeType===3)l=1;else if(vga(l))if(l=uga(l),l===null)l=2;else{var p=a.oa;l=l!=="FORM"&&(p.oa.has(l)||p.o.has(l))?1:2}else l=2;return l});
for(var e=b.nextNode(),f=c.createDocumentFragment(),h=f;e!==null;){var k=void 0;if(e.nodeType===3)a.qa&&h.nodeName==="STYLE"?(e=a.qa(e.data),k=a.createTextNode(e)):k=a.createTextNode(e.data);else if(vga(e))k=Ega(a,e,c);else throw Error("");h.appendChild(k);if(e=b.firstChild())h=k;else for(;!(e=b.nextSibling())&&(e=b.parentNode());)h=h.parentNode}return f}
$l.prototype.createTextNode=function(a){return document.createTextNode(a)};
function Ega(a,b,c){var e,f=uga(b);c=c.createElement(f);b=b.attributes;for(var h=w(b),k=h.next();!k.done;k=h.next()){var l=k.value;k=l.name;l=l.value;var p=wga(a.oa,k,f);a:{if(e=p.conditions){e=w(e);for(var r=e.next();!r.done;r=e.next()){var t=w(r.value);r=t.next().value;t=t.next().value;var v=void 0;if((r=(v=b.getNamedItem(r))==null?void 0:v.value)&&!t.has(r)){e=!1;break a}}}e=!0}if(e)switch(p.wf){case 1:am(c,k,l);break;case 2:throw Error();case 3:am(c,k,l.toLowerCase());break;case 4:a.ua?(l=a.ua(l),
am(c,k,l)):am(c,k,l);break;case 5:a.o?(p={type:2,attributeName:k,bJ:f},l=Yl(l),(l=a.o(l,p))&&am(c,k,l.toString())):am(c,k,l);break;case 6:if(a.o){p={type:2,attributeName:k,bJ:f};e=[];l=w(l.split(","));for(r=l.next();!r.done;r=l.next())t=w(r.value.trim().split(/\s+/,2)),r=t.next().value,t=t.next().value,e.push({url:r,uC:t});l={parts:[]};e=w(e);for(r=e.next();!r.done;r=e.next())r=r.value,t=Yl(r.url),(t=a.o(t,p))&&l.parts.push({url:t.toString(),uC:r.uC});am(c,k,Fga(l))}else am(c,k,l);break;case 7:p=
l;if(a.ma){p={type:2,attributeName:k,bJ:f};l=Yl(l);l=a.ma(l,p);if(l===null)break;p=l.toString()}l=p;a:if(p=void 0,e=l,bga){try{p=new URL(e)}catch(y){p="https:";break a}p=p.protocol}else b:{p=e;e=document.createElement("a");try{e.href=p}catch(y){p=void 0;break b}p=e.protocol;p=p===":"||p===""?"https:":p}p=p!==void 0&&cga.indexOf(p.toLowerCase())!==-1?l:"about:invalid#zClosurez";am(c,k,p)}}return c}
function am(a,b,c){a.setAttribute(b,c)}
function Fga(a){return a.parts.map(function(b){var c=b.uC;return""+b.url+(c?" "+c:"")}).join(" , ")}
var bm=fl(function(){return new $l(Bga)});
function cm(a){return bm.Wd(a)}
var Gga=fl(function(){return new $l(Cga)});
function dm(a){return Gga.Wd(a)}
;function Hga(){this.ma=!1;this.o=Bga}
function em(){Hga.apply(this,arguments)}
u(em,Hga);em.prototype.build=function(){if(this.ma)throw Error("this sanitizer has already called build");this.ma=!0;return new $l(this.o,void 0,void 0,this.ua,this.oa)};function fm(a){var b=Sa.apply(1,arguments);if(b.length===0)return ll(a[0]);for(var c=a[0],e=0;e<b.length;e++)c+=encodeURIComponent(b[e])+a[e+1];return ll(c)}
;function gm(a){return gga(JSON.stringify(a).replace(/</g,"\\u003C"))}
;var Iga=new Map([[1,"answer"],[2,"topic"],[4,"contact"],[5,"troubleshooter"],[6,"known-issues"],[7,"suggestions"],[8,"release-notes"],[10,"search"],[11,"sitemap"],[13,"faq"],[15,"go"],[16,"apis"],[17,"checklist"],[18,"table"],[19,"helpcenterz"],[21,"contactflow"],[22,"forum"],[23,"forum-attachment"],[24,"threads"],[25,"thread"],[26,"thread/new"],[27,"settings"],[28,"profile"],[29,"workflow"],[30,"inapp"],[31,"community"],[33,"gethelp"],[34,"announcement"],[35,"snippet"],[36,"symptom"],[37,"community-video"],
[38,"video"],[39,"community-guide"],[40,"appointments"],[41,"marketing_advisor_signup"],[-1,"bin"]]),hm=[].concat(ya(Iga.values())),im=new Map([[0,"HOMEPAGE"],[1,"ANSWER"],[2,"TOPIC"],[4,"CONTACT_FORM"],[5,"TROUBLESHOOTER"],[6,"KNOWN_ISSUES"],[7,"SUGGESTIONS"],[8,"RELEASE_NOTES"],[9,"PORTAL"],[10,"SEARCH_RESULTS"],[11,"SITEMAP"],[12,"CONTACT_FORM_CONFIRMATION"],[13,"FAQ"],[14,"HOMEPAGE_TOP_ARTICLES"],[15,"VANITY"],[16,"API"],[17,"CHECKLIST"],[18,"TABLE"],[19,"HELPCENTERZ"],[20,"PRODUCT_SELECTOR"],
[21,"CONTACT_FLOW"],[22,"FORUM_THREAD"],[23,"FORUM_ATTACHMENT"],[24,"SUPPORT_FORUM_THREAD_LIST"],[25,"SUPPORT_FORUM_THREAD"],[26,"SUPPORT_FORUM_NEW_THREAD"],[27,"USER_SETTINGS"],[28,"USER_PROFILE"],[29,"WORKFLOW"],[30,"IN_APP"],[31,"SUPPORT_FORUM_HOMEPAGE"],[32,"SUPPORT_FORUM_ABOUT"],[33,"GET_HELP"],[34,"ANNOUNCEMENT"],[35,"SNIPPET"],[36,"SYMPTOM_RESOURCES"],[37,"COMMUNITY_VIDEO"],[38,"VIDEO"],[39,"COMMUNITY_GUIDE"],[40,"APPOINTMENTS"],[41,"MARKETING_ADVISOR_SIGNUP"],[100,"UNKNOWN"]]),Jga=new Map([[3,
"SUPPORT_ANSWER_URL"],[5,"SUPPORT_TOPIC_URL"],[12,"SUPPORT_FORUM_URL"],[13,"SUPPORT_THREAD_URL"],[14,"TROUBLESHOOTER_URL"],[15,"SUPPORT_TABLE_URL"],[16,"SUPPORT_FAQ_URL"],[18,"SUPPORT_ANNOUNCEMENT_URL"],[19,"AUTHORABLE_WORKFLOW_URL"],[25,"SUPPORT_GET_HELP_URL"],[100,"UNKNOWN_URL"]]),Kga=new Map([["SUPPORT_ANSWER_URL","ANSWER"],["SUPPORT_TOPIC_URL","TOPIC"],["SUPPORT_FORUM_URL","SUPPORT_FORUM_THREAD"],["SUPPORT_THREAD_URL","SUPPORT_FORUM_NEW_THREAD"],["TROUBLESHOOTER_URL","TROUBLESHOOTER"],["SUPPORT_TABLE_URL",
"TABLE"],["SUPPORT_FAQ_URL","FAQ"],["SUPPORT_ANNOUNCEMENT_URL","ANNOUNCEMENT"],["AUTHORABLE_WORKFLOW_URL","WORKFLOW"],["SUPPORT_GET_HELP_URL","GET_HELP"],["UNKNOWN_URL","UNKNOWN"]]),Lga=new Map([[0,0],[1,3],[2,4],[3,5],[4,9],[5,10],[6,11],[7,13],[8,6],[9,7],[10,8],[11,14],[12,12],[13,15],[14,16],[15,17],[16,18],[17,19],[50,2],[60,1]]),jm=null,Mga="",Nga="",Oga,km,Pga=Math.floor(4294967296*Math.random()),Qga=Math.floor(4294967296*Math.random());km=(new Date).toISOString()+"."+Pga+"."+Qga;
function lm(a,b,c){var e=typeof c=="undefined";if(a.classList)e?a.classList.toggle(b):c?a.classList.add(b):a.classList.remove(b);else{var f=Rga(a),h=f.indexOf(b)!=-1;if(!c&&!e||h)if((c===!1||e)&&h)f=f.filter(function(k){return k!=b});
else return;else f.push(b);Sga(a,f.join(" "))}}
function mm(a){return a instanceof SVGElement?a.getAttribute("class")||"":a.className}
function Sga(a,b){a instanceof SVGElement?a.setAttribute("class",b):a.className=b}
function nm(a,b){return mm(a).split(" ").indexOf(b)!=-1}
function Rga(a){return mm(a)?mm(a).split(/\s+/):[]}
function om(a,b){return(a=(new RegExp("[?&]"+pm(encodeURIComponent(a))+"=([^&]*)")).exec(b!==void 0?b:z().query))?qm(a[1]):""}
function rm(a,b,c){var e=e===void 0?!0:e;a=encodeURIComponent(a);b=encodeURIComponent(b);var f=new RegExp("([?&]"+pm(a)+"=)([^&]*)");return f.test(c)&&e?c.replace(f,"$1"+b.replace("$","$$")):c?c+"&"+a+"="+b:"?"+a+"="+b}
function sm(a,b){b=b===void 0?window.location.hash:b;b="#"+(b.split("#")[1]||"");return(a=(new RegExp("[#&]"+pm(encodeURIComponent(a))+"=([^&]*)")).exec(b))?qm(a[1]):""}
function tm(a,b){a=encodeURIComponent(a);b=encodeURIComponent(b);var c=new RegExp("([#&]"+pm(a)+"=)([^&]*)");a=c.test(window.location.hash)?window.location.hash.replace(c,"$1"+b.replace("$","$$")):window.location.hash&&window.location.hash!="#"?window.location.hash+"&"+a+"="+b:"#"+a+"="+b;if(window.history.replaceState)try{window.history.replaceState(null,"",a)}catch(e){}else Pl(window.location,vl(a))}
function um(a){a=pm(encodeURIComponent(a));a=new RegExp("(?:(#)|&)"+a+"=[^&]*$|([#&])"+a+"=[^&]*.");a.test(window.location.hash)&&(a=window.location.hash.replace(a,"$1$2"),window.history.replaceState?window.history.replaceState(null,"",a):Pl(window.location,vl(a)))}
function wm(a){a=a===void 0?window.location.hash:a;a="#"+(a.split("#")[1]||"");return(a=RegExp("#([^=&]+)(?=&|$)").exec(a))?qm(a[1]):""}
function pm(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}
function Tga(a,b){var c=a.indexOf("?")<0?"?":"&";(b=b.mendelIds||z().mendel_ids)&&b.length&&(a+=c+"mendel_ids="+b.join(),c="&");b=z();b.au&&(a+=c+"authuser="+b.au);return a}
var xm="e expid fl format rtt_override gkms_expid scdeb sso dark cps initial_parameters sjid caseId appointmentId".split(" "),Uga={sjid:function(){return ym()}};
function zm(a){if(!Vga()){var b=z(),c=a.helpcenter||b.ehc,e=b.ehn+"/apis/"+a.endpoint;a.params=a.params||{};if(window.sc_preserveSelectQueryParametersForApiCalls)for(var f=w(xm),h=f.next();!h.done;h=f.next()){h=h.value;var k=om(h);k&&(a.params[h]=k)}a.params.helpcenter=c;a.params.hl||(a.params.hl=b.lang);a.params.key=a.nqa?b.skey:b.key;a.params.request_source=b.rs;a.params.service_configuration=b.service_configuration;var l=a.qd;a.qd=function(r){var t=r.getResponseHeader("X-SupportContent-XsrfToken");
t?(Am({"issue:":"xsrf token expired, fetched new token",xsrf:b.xsrf,new_xsrf:t}),window.sc_log&&a&&window.sc_log("Api","INFO","API request failed to "+e+", but there is a new XSRF token, so trying again with same API options: "+JSON.stringify(a)),b.xsrf=t,a.qd=l,Wga(e,a)):l&&l(r)};
c="";for(var p in a.params)for(f=Array.isArray(a.params[p])?a.params[p]:[a.params[p]],h=0;h<f.length;++h)c+=(c?"&":"?")+encodeURIComponent(p)+"="+encodeURIComponent(f[h]);e+=c;Oga=e=Tga(e,a);Wga(e,a)}}
function Wga(a,b){var c=b||{},e=new XMLHttpRequest;e.open(c.httpMethod||"GET",a);e.withCredentials=!0;e.setRequestHeader("X-SupportContent-AllowApiCookieAuth","true");(b=z().auth_token)&&e.setRequestHeader("Authorization",b);e.setRequestHeader("X-SupportContent-XsrfToken",z().xsrf);c.onLoadCallback&&e.addEventListener("load",function(){c.onLoadCallback(e)});
(c.qd||c.Zm)&&e.addEventListener("error",function(){c.Zm&&Am({path:a,method:c.httpMethod||"GET",body:typeof c.requestBody=="string"?c.requestBody:JSON.stringify(c.requestBody),xmlhttp_status:e.status,xmlhttp_readystate:e.readyState});c.qd&&c.qd(e)});
c.requestBody?e.send(typeof c.requestBody=="string"?c.requestBody:JSON.stringify(c.requestBody)):e.send()}
function Bm(){var a=z().ehn,b=(new URL(z().bcUrl)).pathname;return""+a+b}
function Cm(){var a=z(),b=a.bcUrl;a.query&&(b+=a.query);return b+window.location.hash}
function Dm(){return window.innerWidth<=770}
function Em(){return window.sc_useDarkMode!==void 0?window.sc_useDarkMode:z().dark}
function Fm(){try{return!!window.localStorage}catch(a){return!1}}
function Gm(a,b){if(!Fm())return!1;try{return window.localStorage.setItem(a,b),!0}catch(c){return window.sc_trackStatsEvent(41,21,"local storage - persist local data"),!1}}
function Hm(a,b){if(!Fm())return null;try{var c=window.localStorage.getItem(a);if(!c)return null;b&&Fm()&&window.localStorage.removeItem(a);return c}catch(e){return window.sc_trackStatsEvent(41,21,"local storage - get local data"),null}}
var Im=[],Jm;function Km(a,b,c){b=b===void 0?!0:b;c=c===void 0?"":c;a=Lm(a);for(var e=0;e<Im.length;e++)Im[e](a);Jm&&Jm(a,b)||(e=window.location,c==="_top"&&(e=window.top.location),b?(b=e,c=vl(a.href),c=xl(c),c!==void 0&&(b.href=c)):Pl(e,vl(a.href)))}
var Mm;function Nm(a){Mm&&Mm(Lm(a))||(z().rs==3?Km(a):window.location.reload(!0))}
function Xga(a){Im.push(a)}
window.sc_setNavigationHandler=function(a){Jm=a};
window.sc_setReloadHandler=function(a){Mm=a};
function Om(a){if(a.getAttribute("href")[0]=="#")return!1;var b=z(),c=/([^/?#]+)/;if(!jm){jm=Lm(b.bcUrl);var e=jm.href,f=e.indexOf("//")+2;Mga=(e=c.exec(e.substring(f)))?e[1]:"";e=b.ehn.indexOf("//")+2;Nga=(b=c.exec(b.ehn.substring(e)))?b[1]:""}a=a.href;b=a.indexOf("//")+2;c=(c=c.exec(a.substring(b)))?c[1]:"";return(a.indexOf("http")==0||a.indexOf("//")==0)&&a.indexOf("google.com/support")==-1&&c!=Mga&&c!=Nga}
function Lm(a){var b=document.createElement("a");yl(b,a);return b}
function Pm(a){var b=a.indexOf("//");return(a=/(\/[^?#]+)/.exec(a.substring(b==-1?0:b+2)))?a[1]:""}
function Qm(a){a=/^\/([^?#]+)/.exec(Pm(a.href));if(!a)return"";a=a[1].split("/");for(var b=a[0],c=1;c<a.length&&hm.indexOf(a[c])==-1;c++)b+="/"+a[c];return b}
function Rm(a){var b={},c=/\?([^#]+)/.exec(a.href);c=c?c[1].split("&"):[];c=w(c);for(var e=c.next();!e.done;e=c.next())e=e.value.split("="),e.length==2&&(b[e[0]]=e[1]);(a=/#(.+)/.exec(a.href))&&(b.fragment=a[1]);return b}
var Yga=1;function z(){return window.sc_pageModel}
function Sm(){return window.sc_scope||document}
function Tm(){var a=document.querySelector("#gb, .fixed-one-bar-placeholder");if(a&&window.getComputedStyle(a).position=="fixed")return a.offsetHeight}
var Um={};function Vm(a){if(!(a in Um)){var b=Sm().querySelector('[data-page-data-key="'+a+'"]');if(!b)return"";Um[a]=b.textContent}return Um[a]}
function Vga(){return z().is_render_api||!z().esid?!1:window.sc_sid!=Zga()?(Nm(window.location.href),!0):!1}
function Zga(){var a=document.cookie.split(";");a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,b=b.trim(),b.indexOf("__Secure-3PAPISID=")==0)return b.substr(18);return""}
function Am(a){if(window.sc_enableInfoLogDispatcher){var b=new XMLHttpRequest;b.open("POST",z().ehn+"/s/infolog");a.pageModel=z();b.send(JSON.stringify(a))}}
function Wm(a){if(window.sc_enableClientSideStreamz){var b=new XMLHttpRequest,c=z().ehn+"/s/clientsidestreamz";b.withCredentials=!0;b.open("POST",c);b.send(a)}}
function $ga(a){if(!a)return 0;var b=a.getBoundingClientRect(),c=window.innerWidth||document.documentElement.clientWidth,e=window.innerHeight||document.documentElement.clientHeight;if(b.top>e||b.bottom<0)return 0;if(b.top>=0&&b.bottom<=e&&b.left>=0&&b.right<=c||b.top<=0&&b.bottom>=e||b.left<=0&&b.right>=c)return 100;a=aha(a);e=b.width;b.left<0&&(e=b.right);b.right>c&&(e=c-b.left);return a/b.height*(e/b.width)*100}
function aha(a){if(!a)return 0;a=a.getBoundingClientRect();var b=window.innerHeight||document.documentElement.clientHeight,c=a.height;a.top<0&&(c=a.bottom);a.bottom>b&&(c=b-a.top);return c}
function Xm(){for(var a={},b=w(z().psd||[]),c=b.next();!c.done;c=b.next())c=c.value,a[c.name]=c.value;return a}
function qm(a){return decodeURIComponent(a.replace(/\+/g," "))}
function Ym(){return(z().mendel_ids||[]).map(function(a){return String(a)})}
function ym(){var a=z();return a&&a.support_journey_id?a.support_journey_id:""}
;function Zm(a,b,c){c=c===void 0?{}:c;if(typeof window.CustomEvent==="function")var e=new CustomEvent(b,Object.assign({},{bubbles:!0,cancelable:!0},c));else e=document.createEvent("CustomEvent"),e.initCustomEvent(b,!0,!0,c);a.dispatchEvent(e)}
function $m(a){Zm(document,a?"sc_modalShow":"sc_modalHide")}
function an(a,b){var c=null;return function(){var e=Sa.apply(0,arguments);clearTimeout(c);c=setTimeout(function(){a.apply(null,ya(e))},b)}}
function bha(a){var b=2E3;b=b===void 0?1E3:b;var c=0,e,f=!0,h=b<=0?1E3:b;return function(){var k=Sa.apply(0,arguments),l=Date.now();if(f||l-c>=h)f=!1,c=l,e=a.apply(null,ya(k));return e}}
;function bn(a){this.ma=[];this.o=[];a=cha.exec(a);this.oa=a[1];a[2]&&(this.ma=dha(a[2]));a[3]&&(this.o=dha(a[3]))}
function dha(a){var b=[];a=a.split("&");for(var c=0;c<a.length;c++){var e=a[c].split("=");b.push({key:decodeURIComponent(e[0]),value:e[1]?decodeURIComponent(e[1].replaceAll("+"," ")):""})}return b}
function cn(a,b,c){return dn(a,a.ma,b,c)}
function dn(a,b,c,e){for(var f=0;f<b.length;f++){var h=b[f];if(h.key==c){h.value=e;for(f=f+1||0;f<b.length;)b[f].key==c?b.splice(f,1):f++;return a}}b.push({key:c,value:e});return a}
bn.prototype.toString=function(){var a=this.oa;this.ma.length>0&&(a+="?"+eha(this.ma));this.o.length>0&&(a+="#"+eha(this.o));return a};
function eha(a){for(var b="",c=0;c<a.length;c++){b&&(b+="&");var e=a[c];b+=encodeURIComponent(e.key);e.value&&(b+="="+encodeURIComponent(e.value))}return b}
var cha=/^([^?#]*)(?:\?([^#]*))?(?:#(.*))?$/;function fha(a){z().li||(a=a||(new bn(Cm())).toString(),Km(cn(new bn(Vm("signin__login-url")),"continue",a).toString()))}
;function en(a,b,c,e){this.oa=a;this.ma=b;this.o=c;this.ua=e===void 0?1:e}
function gha(a){if(!a||a==="transparent")return new en(0,0,0,0);var b=a.match(/\.?\d+(\.\d+)?/g);if(b.length<3)throw Error("Could not parse '"+a+"' as a color.");b.length=4;return new (Function.prototype.bind.apply(en,[null].concat(ya(b.map(Number)))))}
en.prototype.getAlpha=function(){return this.ua};
function hha(a){var b=iha(a,jha);a=iha(a,kha);return b<3.1&&a>b}
var kha=new en(0,0,0),jha=new en(255,255,255);function iha(a,b){a=.2126*fn(a.oa)+.7152*fn(a.ma)+.0722*fn(a.o)+.05;b=.2126*fn(b.oa)+.7152*fn(b.ma)+.0722*fn(b.o)+.05;return Math.max(a,b)/Math.min(a,b)}
function fn(a){a/=255;return a<.03928?a/12.92:Math.pow((a+.055)/1.055,2.4)}
;var lha=new Map([["alt",[""]]]);function gn(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
n=gn.prototype;n.clone=function(){return new gn(this.x,this.y)};
n.equals=function(a){return a instanceof gn&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
n.translate=function(a,b){a instanceof gn?(this.x+=a.x,this.y+=a.y):(this.x+=Number(a),typeof b==="number"&&(this.y+=b));return this};
n.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function hn(a,b){this.width=a;this.height=b}
n=hn.prototype;n.clone=function(){return new hn(this.width,this.height)};
n.area=function(){return this.width*this.height};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!this.area()};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
n.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function jn(a,b,c){for(var e in a)b.call(c,a[e],e,a)}
function mha(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1}
function kn(a){var b={},c;for(c in a)b[c]=a[c];return b}
var nha="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oha(a,b){for(var c,e,f=1;f<arguments.length;f++){e=arguments[f];for(c in e)a[c]=e[c];for(var h=0;h<nha.length;h++)c=nha[h],Object.prototype.hasOwnProperty.call(e,c)&&(a[c]=e[c])}}
function pha(a){var b=arguments.length;if(b==1&&Array.isArray(arguments[0]))return pha.apply(null,arguments[0]);for(var c={},e=0;e<b;e++)c[arguments[e]]=!0;return c}
;function ln(a,b){this.o=a===qha&&b||"";this.ma=rha}
ln.prototype.toString=function(){return this.o};
function sha(a){return a instanceof ln&&a.constructor===ln&&a.ma===rha?a.o:"type_error:Const"}
function mn(a){return new ln(qha,a)}
var rha={},qha={};function nn(a){return encodeURIComponent(String(a))}
function on(a){return decodeURIComponent(a.replace(/\+/g," "))}
function tha(a,b){var c={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'};var e=b?b.createElement("div"):Ya.document.createElement("div");return a.replace(uha,function(f,h){var k=c[f];if(k)return k;h.charAt(0)=="#"&&(h=Number("0"+h.slice(1)),isNaN(h)||(k=String.fromCharCode(h)));k||(Ml(e,Al(f+" ")),k=e.firstChild.nodeValue.slice(0,-1));return c[f]=k})}
function vha(a){return a.replace(/&([^;]+);/g,function(b,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:return c.charAt(0)!="#"||(c=Number("0"+c.slice(1)),isNaN(c))?b:String.fromCharCode(c)}})}
var uha=/&([^;\s<&]+);?/g;function pn(a,b){return a&&b?a.split(b).length-1:0}
var qn=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
function rn(a,b){if(!Number.isFinite(a))return String(a);a=String(a);var c=a.indexOf(".");c===-1&&(c=a.length);var e=a[0]==="-"?"-":"";e&&(a=a.substring(1));return e+qn("0",Math.max(0,b-c))+a}
function wha(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,e){return c+e.toUpperCase()})}
;function sn(a){return a?new tn(un(a)):uaa||(uaa=new tn)}
function xha(a,b){jn(b,function(c,e){e=="style"?a.style.cssText=c:e=="class"?a.className=c:e=="for"?a.htmlFor=c:yha.hasOwnProperty(e)?a.setAttribute(yha[e],c):pb(e,"aria-")||pb(e,"data-")?a.setAttribute(e,c):a[e]=c})}
var yha={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function vn(a){a=a.document;a=a.compatMode=="CSS1Compat"?a.documentElement:a.body;return new hn(a.clientWidth,a.clientHeight)}
function zha(a,b,c){function e(l){l&&b.appendChild(typeof l==="string"?a.createTextNode(l):l)}
for(var f=1;f<c.length;f++){var h=c[f];if(!paa(h)||bb(h)&&h.nodeType>0)e(h);else{a:{if(h&&typeof h.length=="number"){if(bb(h)){var k=typeof h.item=="function"||typeof h.item=="string";break a}if(typeof h==="function"){k=typeof h.item=="function";break a}}k=!1}Qb(k?Ub(h):h,e)}}}
function wn(a){return xn(document,a)}
function xn(a,b){b=String(b);a.contentType==="application/xhtml+xml"&&(b=b.toLowerCase());return a.createElement(b)}
function yn(a){var b=Array.prototype.map.call(arguments,sha).join("");var c=Al(b);var e=document;b=xn(e,"DIV");Ml(b,c);if(b.childNodes.length==1)b=b.removeChild(b.firstChild);else{for(c=e.createDocumentFragment();b.firstChild;)c.appendChild(b.firstChild);b=c}return b}
function zn(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function An(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}
function Aha(a){return a.parentElement||null}
function un(a){return a.nodeType==9?a:a.ownerDocument||a.document}
function Bha(a,b){if("textContent"in a)a.textContent=b;else if(a.nodeType==3)a.data=String(b);else if(a.firstChild&&a.firstChild.nodeType==3){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else zn(a),a.appendChild(un(a).createTextNode(String(b)))}
var Cha={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Dha={IMG:" ",BR:"\n"};function Eha(a,b,c){if(!(a.nodeName in Cha))if(a.nodeType==3)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Dha)b.push(Dha[a.nodeName]);else for(a=a.firstChild;a;)Eha(a,b,c),a=a.nextSibling}
function tn(a){this.o=a||Ya.document||document}
n=tn.prototype;n.getDocument=function(){return this.o};
n.getElement=function(a){var b=this.o;return typeof a==="string"?b.getElementById(a):a};
n.getElementsByTagName=function(a,b){return(b||this.o).getElementsByTagName(String(a))};
n.setProperties=xha;n.createElement=function(a){return xn(this.o,a)};
n.createTextNode=function(a){return this.o.createTextNode(String(a))};
n.createTable=function(a,b,c){var e=this.o;c=!!c;for(var f=xn(e,"TABLE"),h=f.appendChild(xn(e,"TBODY")),k=0;k<a;k++){for(var l=xn(e,"TR"),p=0;p<b;p++){var r=xn(e,"TD");c&&Bha(r,"\u00a0");l.appendChild(r)}h.appendChild(l)}return f};
n.appendChild=function(a,b){a.appendChild(b)};
n.append=function(a,b){zha(un(a),a,arguments)};
n.canHaveChildren=function(a){if(a.nodeType!=1)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
n.removeNode=An;n.getChildren=function(a){return a.children!=void 0?a.children:Array.prototype.filter.call(a.childNodes,function(b){return b.nodeType==1})};
n.getParentElement=Aha;n.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&b.nodeType==1)return a==b||a.contains(b);if(typeof a.compareDocumentPosition!="undefined")return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};
n.getTextContent=function(a){var b=[];Eha(a,b,!0);a=b.join("");a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");a=a.replace(/ +/g," ");a!=" "&&(a=a.replace(/^\s*/,""));return a};/*
 SPDX-License-Identifier: Apache-2.0
*/
var Fha=Object.prototype.hasOwnProperty;function Bn(){}
Bn.prototype=Object.create(null);function Cn(a,b){for(;a.length>b;)a.pop()}
function Dn(a){a=Array(a);Cn(a,0);return a}
;var En=new Bn;En.__default=function(a,b,c){var e=typeof c;e==="object"||e==="function"?a[b]=c:c==null?a.removeAttribute(b):(e=b.lastIndexOf("xml:",0)===0?"http://www.w3.org/XML/1998/namespace":b.lastIndexOf("xlink:",0)===0?"http://www.w3.org/1999/xlink":null)?a.setAttributeNS(e,b,c):a.setAttribute(b,c)};
En.style=function(a,b,c){a=a.style;if(typeof c==="string")a.cssText=c;else{a.cssText="";for(var e in c)if(Fha.call(c,e)){b=a;var f=e,h=c[e];f.indexOf("-")>=0?b.setProperty(f,h):b[f]=h}}};
function Fn(a,b,c,e){(e[b]||e.__default)(a,b,c)}
;var Gn=null;function Gha(a){this.created=[];this.deleted=[];this.node=a}
;var Hha=typeof Node!=="undefined"&&Node.prototype.getRootNode||function(){for(var a=this,b=a;a;)b=a,a=a.parentNode;return b};function Iha(a,b){this.o=null;this.oa=!1;this.ma=a;this.key=b;this.text=void 0}
function Hn(a,b,c){b=new Iha(b,c);return a.__incrementalDOMData=b}
function Kn(a,b){if(a.__incrementalDOMData)return a.__incrementalDOMData;var c=a.nodeType===1?a.localName:a.nodeName,e=a.nodeType===1?a.getAttribute("key"):null;b=Hn(a,c,a.nodeType===1?e||b:null);if(a.nodeType===1&&(a=a.attributes,c=a.length)){e=b.o||(b.o=Dn(c*2));for(var f=0,h=0;f<c;f+=1,h+=2){var k=a[f],l=k.value;e[h]=k.name;e[h+1]=l}}return b}
;function Jha(a,b,c,e,f){return b==c&&e==f}
var Ln=null,Mn=null,Nn=null,On=null,Pn=[],Qn=Jha,Rn=[],Sn=[];function Kha(){for(var a=Nn,b=Tn();b!==null;){var c=b.nextSibling;a.removeChild(b);Ln.deleted.push(b);b=c}}
function Tn(){return Mn?Mn.nextSibling:Nn.firstChild}
function Lha(a,b,c){Mn=Tn();var e;a:{if(e=Mn){do{var f=e,h=a,k=b,l=Kn(f,k);if(Qn(f,h,l.ma,k,l.key))break a}while(b&&(e=e.nextSibling))}e=null}e||(a==="#text"?(c=On.createTextNode(""),Hn(c,"#text",null),a=c):(e=On,f=Nn,typeof a==="function"?e=new a:e=(f=a==="svg"?"http://www.w3.org/2000/svg":a==="math"?"http://www.w3.org/1998/Math/MathML":f==null||Kn(f).ma==="foreignObject"?null:f.namespaceURI)?e.createElementNS(f,a):e.createElement(a),Hn(e,a,b),a=e,c&&a.setAttribute("nonce",c)),Ln.created.push(a),
e=a);c=e;if(c!==Mn){if(Pn.indexOf(c)>=0)for(a=Nn,b=c.nextSibling,e=Mn;e!==null&&e!==c;)f=e.nextSibling,a.insertBefore(e,b),e=f;else Nn.insertBefore(c,Mn);Mn=c}}
function Mha(){Kha();Mn=Nn;Nn=Nn.parentNode;return Mn}
function Nha(a,b){b=b===void 0?{}:b;var c=b.matches===void 0?Jha:b.matches;return function(e,f,h){var k=Ln,l=On,p=Pn,r=Rn,t=Sn,v=Mn,y=Nn,E=Qn;On=e.ownerDocument;Ln=new Gha(e);Qn=c;Rn=[];Sn=[];Mn=null;var oa=Nn=e.parentNode,ra,Aa=Hha.call(e);if((ra=Aa.nodeType===11||Aa.nodeType===9?Aa.activeElement:null)&&e.contains(ra)){for(Aa=[];ra!==oa;)Aa.push(ra),ra=ra.parentNode||(oa?ra.host:null);oa=Aa}else oa=[];Pn=oa;try{return a(e,f,h)}finally{e=Ln,Gn&&e.deleted.length>0&&Gn(e.deleted),On=l,Ln=k,Qn=E,Rn=
r,Sn=t,Mn=v,Nn=y,Pn=p}}}
var Un=function(a){return Nha(function(b,c,e){Nn=Mn=b;Mn=null;c(e);Kha();Mn=Nn;Nn=Nn.parentNode;return b},a)}();var Vn=[],Wn=0;function Xn(a,b,c){Vn.push(Fn);Vn.push(a);Vn.push(b);Vn.push(c);Vn.push(En)}
;var Yn=new Bn;var Zn=new Bn;
function Oha(a,b,c){var e=Rn;e[0]=a;e[1]=b;e[2]=c;for(e=3;e<arguments.length;e+=2){var f=arguments[e+1],h=Sn;h.push(arguments[e]);h.push(f)}e=Rn;a:{if(f=Rn[2])for(h=0;h<f.length;h+=2)if(f[h]==="nonce"){f=f[h+1];break a}f=""}Lha(e[0],e[1],f);Nn=Mn;Mn=null;f=Nn;h=Kn(f);var k=e[2];if(!h.oa&&(h.oa=!0,k&&k.length)){var l=h.o;if(l&&l.length){for(l=0;l<k.length;l+=2)Zn[k[l]]=l+1;l=h.o||(h.o=Dn(0));for(var p=0,r=0;r<l.length;r+=2){var t=l[r],v=l[r+1],y=Zn[t];y?k[y]===v&&delete Zn[t]:(l[p]=t,l[p+1]=v,p+=2)}Cn(l,
p);for(var E in Zn)Fn(f,E,k[Zn[E]],En),delete Zn[E]}else for(E=0;E<k.length;E+=2)Fn(f,k[E],k[E+1],En)}E=Sn;h=h.o||(h.o=Dn(E.length));l=!h.length||!1;for(k=0;k<E.length;k+=2){p=E[k];if(l)h[k]=p;else if(h[k]!==p)break;r=E[k+1];if(l||h[k+1]!==r)h[k+1]=r,Xn(f,p,r)}if(k<E.length||k<h.length){for(k=l=k;k<h.length;k+=2)Yn[h[k]]=h[k+1];for(k=l;k<E.length;k+=2)l=E[k],p=E[k+1],Yn[l]!==p&&Xn(f,l,p),h[k]=l,h[k+1]=p,delete Yn[l];Cn(h,E.length);for(var oa in Yn)Xn(f,oa),delete Yn[oa]}oa=Wn;Wn=h=Vn.length;for(k=
oa;k<h;k+=5)(0,Vn[k])(Vn[k+1],Vn[k+2],Vn[k+3],Vn[k+4]);Wn=oa;Cn(Vn,oa);Cn(E,0);Cn(e,0);return f}
function $n(a){Lha("#text",null);var b=Mn;var c=Kn(b);if(c.text!==a){c=c.text=a;for(var e=1;e<arguments.length;e+=1)c=(0,arguments[e])(c);b.data!==c&&(b.data=c)}return b}
;function ao(a){a=bo(a);return Al(a)}
function Pha(a){a=bo(a);return gga(a)}
function co(a){a=bo(a);return ll(a)}
function bo(a){return a===null?"null":a===void 0?"undefined":a}
;function eo(){var a=window.sc_scope;return a!==void 0?a:document}
var fo=new Map;function go(a){if(!fo.has(a)){var b=eo().querySelector('[data-page-data-key="'+a+'"]');if(!b)return"";b=b.textContent;if(b===null)return"";fo.set(a,b)}return fo.get(a)}
function ho(a,b){Un(a,b)}
function Qha(a,b){return(b instanceof Object?Object.keys(b).filter(function(c){return b[c]}):b.split(/\s+/)).map(function(c){return c[0]==="^"?c.substring(1):a+c}).join(" ")}
function io(a,b){for(var c=0;c<b.length-1;c+=2){b[c]==="class"&&(b[c+1]=Qha(a,b[c+1]));var e;(e=b[c+1]||b[c+1]===0)||(e=b[c+1],e=(lha.get(b[c])||[]).includes(e));e||(b[c+1]=void 0)}return[b,b.length%2===1?b.pop():void 0]}
function jo(a,b,c,e){c=c===void 0?[]:c;a=Oha.apply(null,[a,b,void 0].concat(ya(c)));e&&(e instanceof Function?e():typeof e==="string"?$n(e):e instanceof zl?(Ml(a,e),Mn=Nn.lastChild):e.render());return Mha()}
function ko(a){var b=w(io("",Sa.apply(1,arguments))),c=b.next().value;b=b.next().value;jo(a,void 0,c,b)}
function lo(a){return $n(a)}
function mo(a){typeof a==="string"&&(a=Gga.Wd(a));var b=Oha("html-blob"),c=a.toString();b.__cachedInnerHtml!==c&&(b.__cachedInnerHtml=c,b.textContent="",c=b.appendChild,a instanceof ln?a=yn(a):(a=document.createRange().createContextualFragment(Cl(a)),a=a.childNodes.length===1?a.childNodes[0]:a),c.call(b,a));Mn=Nn.lastChild;Mha();return b}
function Rha(a,b){var c,e;return(e=(c=typeof a.nodeType==="number"?a:a.getElement())==null?void 0:c.querySelector(b))!=null?e:null}
;function no(a){return Math.floor(Math.random()*Math.pow(10,a===void 0?17:a))}
;function A(a){Sha++;this.ua=null;this.subscriptions=[];this.tagName=Tha(a);this.Ge=oo(a)}
n=A.prototype;n.render=function(a){var b=this,c=this.tb;a&&(this.tb=a);this.element(this.tagName,function(){if(b.ua&&b.ua===Nn&&!b.Fe(c,b.tb))Mn=Nn.lastChild;else{var e=Nn,f=e.XF;f&&b!==f&&f.detach();b.ua!==e&&(b.detach(),e.XF=b,b.ua=e);po(b)}})};
n.detach=function(){this.ua&&(this.onDetach(),this.ua.XF=void 0,this.ua=null)};
n.element=function(a){var b=w(io(this.Ge,Sa.apply(1,arguments))),c=b.next().value;b=b.next().value;return jo(a,void 0,c,b)};
n.rj=function(a,b){var c=w(io(this.Ge,Sa.apply(2,arguments))),e=c.next().value;c=c.next().value;return jo(a,b,e,c)};
n.onDetach=function(){};
n.Fe=function(a,b){return a||b?!0:!1};
n.Ja=function(){var a=this;this.ua&&ho(this.ua,function(){po(a)})};
function qo(a){a.ua&&(a.ua.textContent="",ho(a.ua,function(){po(a)}))}
n.watch=function(a,b){if(b===void 0)return a.zy.add(this),this.subscriptions.push({model:a}),this;b=Array.isArray(b)?b:[b];b=w(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var e=void 0,f=a;if(c===void 0)throw Error(Uha("Model.subscribeToProperty"));var h=(e=f.Ha.get(c))!=null?e:new Set;h.add(this);f.Ha.set(c,h);this.subscriptions.push({model:a,property:c})}return this};
function ro(a,b,c){if(b)if(c===void 0)Vha(a,b);else{c=Array.isArray(c)?c:[c];c=new Set(c);for(var e=[],f=0;f<a.subscriptions.length;f++){var h=a.subscriptions[f];h.model===b&&c.has(h.property)?Wha(b,a,h.property):e.push(h)}a.subscriptions=e}else{b=w(a.subscriptions);for(c=b.next();!c.done;c=b.next())e=c.value,c=e.model,e=e.property,e===void 0?c.zy.delete(a):Wha(c,a,e);a.subscriptions=[]}}
n.getElement=function(){return this.ua};
function po(a){a.tb!==void 0?a.content(a.tb):a.content()}
function Vha(a,b){var c=a.subscriptions.findIndex(function(e){return e.model===b&&e.property===void 0});
c!==-1&&(a.subscriptions.splice(c,1),b.zy.delete(a))}
function Tha(a){return a.replace(/\./g,"-").replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}
function oo(a){return a.replace(/(\.?)([^.]+)/g,function(b,c,e){return c?e[0].toUpperCase()+e.substring(1).toLowerCase():e.toLowerCase()})}
function so(){return"rce-"+no()}
var Sha=0;Gn=function(a){a=w(a);for(var b=a.next();!b.done;b=a.next()){var c=void 0;(c=b.value.XF)==null||c.detach()}};function to(){var a,b,c;return(c=(a=document.activeElement)==null?void 0:(b=a.shadowRoot)==null?void 0:b.activeElement)!=null?c:document.activeElement}
function uo(a){return Array.from(a.querySelectorAll("*")).filter(Xha)}
function Xha(a){if(a.disabled||a.offsetWidth===0||a.offsetHeight===0||window.getComputedStyle(a).visibility==="hidden")a=!1;else if(a.tabIndex!==0||a.attributes.getNamedItem("tabindex"))a=a.tabIndex>=0;else a:switch(a.tagName){case "A":case "BUTTON":case "INPUT":case "SELECT":case "TEXTAREA":a=!0;break a;default:a=!1}return a}
function Yha(a,b){b=b===void 0?document:b;vo(a,-1,b)}
function vo(a,b,c){c.activeElement&&(c=a.indexOf(c.activeElement),wo(a[((c===-1?0:c+b)+a.length)%a.length]))}
function wo(a,b){var c;(c=a.focus)==null||c.call(a,b)}
;function xo(){this.Fa=new Map;this.Pa=new Set;this.Ha=new Map;this.zy=new Set}
xo.prototype.onChange=function(a,b){if(typeof a==="function")this.Pa.add(yo(a));else{var c,e=(c=this.Fa.get(a))!=null?c:new Set;e.add(yo(b));this.Fa.set(a,e)}};
function zo(a,b,c){if(typeof b==="function")a.Pa.delete(yo(b));else{var e;(e=a.Fa.get(b))==null||e.delete(yo(c))}}
function Wha(a,b,c){if(c===void 0)throw Error(Uha("Model.unsubscribeFromProperty"));(a=a.Ha.get(c))&&a.delete(b)}
xo.prototype.Da=function(a){var b,c=(b=this.Fa.get(a))!=null?b:new Set;b=new Set([].concat(ya(this.Pa),ya(c)));b=w(b);for(c=b.next();!c.done;c=b.next())c=c.value,c();var e;a=(e=this.Ha.get(a))!=null?e:new Set;e=new Set([].concat(ya(this.zy),ya(a)));e=w(e);for(a=e.next();!a.done;a=e.next())a.value.Ja()};
function Uha(a){return"Expected a valid property enum value to "+a+" but received [undefined]."}
function yo(a){if(typeof a!=="function")throw Error("Expected [handler] to be a function. Instead received "+typeof a);return a}
;function Ao(a){xo.call(this);this.text="";this.disabled=!1;this.Eo=!0;this.title=this.Bl=this.ariaDescription=this.ariaLabel=this.href="";this.Mu=this.highContrast=this.ariaHasPopup=!1;this.rg=this.minWidth=this.maxWidth=this.Sp=this.icon="";this.dh=!1;this.padding="";this.style=1;this.Jf=0;this.Qr=this.ct=this.we=!1;this.lj=0;this.Gc="rem";this.compact=this.wc=!1;this.Ik=this.Ib=0;this.qg=this.It="";this.ud=0;this.vd="button";this.Nu=this.Rt=!1;this.Cf(a)}
u(Ao,xo);n=Ao.prototype;
n.Cf=function(a){var b=a.text===void 0?"":a.text;var c=a.href===void 0?"":a.href;var e=a.target;var f=a.ariaLabel===void 0?"":a.ariaLabel;var h=a.ariaDescription===void 0?"":a.ariaDescription;var k=a.Bl===void 0?"":a.Bl;var l=a.title===void 0?"":a.title;var p=a.icon===void 0?"":a.icon;var r=a.Sp===void 0?"":a.Sp;var t=a.style===void 0?1:a.style;var v=a.disabled===void 0?!1:a.disabled;var y=a.Eo===void 0?!0:a.Eo;var E=a.ariaExpanded;var oa=a.ariaHasPopup===void 0?!1:a.ariaHasPopup;var ra=a.OB;var Aa=
a.ariaPressed;var Ba=a.highContrast===void 0?!1:a.highContrast;var Ha=a.Mu===void 0?!1:a.Mu;var Na=a.Jf===void 0?0:a.Jf;var Va=a.we===void 0?!1:a.we;var cb=a.ct===void 0?!1:a.ct;var sb=a.Qr===void 0?!1:a.Qr;var Cb=a.lj===void 0?0:a.lj;var $b=a.maxWidth===void 0?"":a.maxWidth;var Mb=a.minWidth===void 0?"":a.minWidth;var rb=a.rg===void 0?"":a.rg;var vb=a.dh===void 0?!1:a.dh;var fc=a.padding===void 0?"":a.padding;var Fc=a.tabIndex;var nc=a.trigger;var gd=a.wc===void 0?!1:a.wc;var he=a.compact===void 0?
!1:a.compact;var mf=a.Ib===void 0?0:a.Ib;var Zf=a.Ik===void 0?0:a.Ik;var ie=a.It===void 0?"":a.It;var je=a.qg===void 0?"":a.qg;var zf=a.ud===void 0?0:a.ud;var ke=a.Gc===void 0?"rem":a.Gc;var Yh=a.vd===void 0?"button":a.vd;var kl=a.Rt===void 0?!1:a.Rt;a=a.Nu===void 0?!1:a.Nu;this.text=b;this.href=c;this.target=e;this.ariaLabel=f;this.ariaDescription=h;this.Bl=k;this.title=l;this.ariaExpanded=E;this.ariaHasPopup=oa;this.OB=ra;this.ariaPressed=Aa;this.highContrast=Ba;this.Mu=Ha;this.maxWidth=$b;this.minWidth=
Mb;this.rg=rb;this.dh=vb;this.padding=fc;this.Jf=Na;this.we=Va;this.ct=cb;this.Qr=sb;this.lj=Cb;this.icon=p;this.Sp=r;this.style=t;this.disabled=v;this.Eo=y;this.tabIndex=Fc;this.trigger=nc;this.wc=gd;this.compact=he;this.Ib=mf;this.Ik=Zf;this.It=ie;this.qg=je;this.ud=zf;this.Gc=ke;this.vd=Yh;this.Rt=kl;this.Nu=a};
n.getText=function(){return this.text};
n.setText=function(a){this.text=a;this.Da(0)};
n.setIcon=function(a){this.icon=a;this.Da(1)};
n.iA=function(a){this.Sp=a;this.Da(2)};
n.mf=function(){return this.disabled};
n.setDisabled=function(a){this.disabled=a;this.Da(4)};
n.ue=la(13);n.Yl=function(){return this.href};
n.getTarget=function(){return this.target};
n.Bj=function(a){this.ariaLabel=a;this.Da(6)};
n.Jd=function(){return this.ariaLabel};
n.HJ=function(){return this.ariaDescription};
n.getTitle=function(){return this.title};
n.jn=function(a){this.ariaExpanded=a;this.Da(5)};
n.wD=function(){return this.ariaExpanded};
n.xD=function(){return""+this.ariaHasPopup};
n.Qc=function(){return this.icon};
n.wy=function(){return this.Sp};
function Bo(a){return a.getText()!==""&&a.Qc()!==""&&a.wy()!==""}
n.Zl=function(){return this.maxWidth};
n.sy=function(){return this.padding};
n.getStyle=function(){return this.style};
n.RD=function(){return this.tabIndex};
n.gr=function(){return this.trigger};
n.bp=function(){return this.getText()!==""&&this.Qc()!==""&&this.wc&&!Bo(this)};
function Zha(a){return a.getText()!==""&&a.Qc()!==""&&!a.wc&&!Bo(a)}
;var $ha={"account_circle.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"></path>\n  <path fill="none" d="M0 0h24v24H0V0z"></path>\n</svg>\n'),
"add.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7v2z"/><path d="M0 0h24v24H0V0z" fill="none"/></svg>\n'),"add_ad.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#041E49"><path d="M18 20V17H15V15H18V12H20V15H23V17H20V20ZM3 21Q2.175 21 1.588 20.413Q1 19.825 1 19V5Q1 4.175 1.588 3.587Q2.175 3 3 3H17Q17.825 3 18.413 3.587Q19 4.175 19 5V10H17V8H3V19Q3 19 3 19Q3 19 3 19H16V21ZM3 6H17V5Q17 5 17 5Q17 5 17 5H3Q3 5 3 5Q3 5 3 5Z"/></svg>\n'),
"add_box.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm-6 4q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21zm0-2h14V5H5v14zm0 0V5v14z"/></svg>\n'),"ads_outline.svg":mn('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect x="-0.351562" y="19.1836" width="21.9857" height="7.33359" rx="3.66679" transform="rotate(-59.9993 -0.351562 19.1836)" fill="#0B57D0" stroke="white" stroke-width="1.5"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M22.5088 15.9964L15.175 3.29518C14.1625 1.54143 11.92 0.940179 10.1663 1.95268C8.41252 2.96518 7.81127 5.20768 8.82377 6.96143L16.1575 19.6627C17.17 21.4164 19.4125 22.0164 21.1663 21.0052C22.92 19.9927 23.52 17.7502 22.5088 15.9964Z" fill="#0B57D0" stroke="white" stroke-width="1.5"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66625 21.5005C6.69106 21.5005 8.3325 19.859 8.3325 17.8342C8.3325 15.8094 6.69106 14.168 4.66625 14.168C2.64144 14.168 1 15.8094 1 17.8342C1 19.859 2.64144 21.5005 4.66625 21.5005Z" fill="#0B57D0" stroke="white" stroke-width="1.5"/>\n</svg>\n'),
"ads_outline_dark.svg":mn('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect x="-0.351562" y="19.1836" width="21.9857" height="7.33359" rx="3.66679" transform="rotate(-59.9993 -0.351562 19.1836)" fill="#D3E3FD" stroke="#1A1A1A" stroke-width="1.5"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M22.5088 15.9964L15.175 3.29518C14.1625 1.54143 11.92 0.940179 10.1663 1.95268C8.41252 2.96518 7.81127 5.20768 8.82377 6.96143L16.1575 19.6627C17.17 21.4164 19.4125 22.0164 21.1663 21.0052C22.92 19.9927 23.52 17.7502 22.5088 15.9964Z" fill="#D3E3FD" stroke="#1A1A1A" stroke-width="1.5"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66625 21.5005C6.69106 21.5005 8.3325 19.859 8.3325 17.8342C8.3325 15.8094 6.69106 14.168 4.66625 14.168C2.64144 14.168 1 15.8094 1 17.8342C1 19.859 2.64144 21.5005 4.66625 21.5005Z" fill="#D3E3FD" stroke="#1A1A1A" stroke-width="1.5"/>\n</svg>\n'),
"announcement.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>\n  <path d="M11 5h2v6h-2zm0 8h2v2h-2z"/>\n</svg>\n'),"appeal_closed.svg":mn('<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M19.3362 0.84289C20.9358 -0.280964 23.0642 -0.280963 24.6638 0.84289C25.6955 1.56782 26.9761 1.84119 28.2122 1.60042C30.1287 1.22715 32.073 2.0966 33.0792 3.77671C33.7282 4.86046 34.7873 5.63329 36.0141 5.91831C37.916 6.36016 39.3402 7.94873 39.5789 9.8946C39.7329 11.1498 40.3875 12.2884 41.3928 13.05C42.9513 14.2305 43.609 16.2636 43.0391 18.1387C42.6714 19.3483 42.8083 20.6559 43.4183 21.7622C44.3639 23.4774 44.1415 25.6033 42.8614 27.0836C42.0357 28.0384 41.6312 29.2888 41.7404 30.5487C41.9097 32.5019 40.8455 34.3532 39.0766 35.1825C37.9356 35.7175 37.0596 36.6946 36.6492 37.8902C36.0128 39.7437 34.2909 41.0001 32.3391 41.0352C31.0801 41.0578 29.8841 41.5926 29.025 42.5171C27.693 43.9504 25.6111 44.3949 23.8139 43.6296C22.6546 43.136 21.3454 43.136 20.1861 43.6296C18.3889 44.3949 16.307 43.9504 14.975 42.5171C14.1159 41.5926 12.9199 41.0578 11.6609 41.0352C9.70909 41.0001 7.98719 39.7437 7.35084 37.8902C6.94038 36.6946 6.06439 35.7175 4.9234 35.1825C3.15454 34.3532 2.09034 32.5019 2.25964 30.5487C2.36884 29.2888 1.9643 28.0384 1.1386 27.0836C-0.141468 25.6033 -0.363946 23.4774 0.581724 21.7622C1.19172 20.6559 1.32856 19.3483 0.960927 18.1387C0.390988 16.2635 1.0487 14.2305 2.60722 13.05C3.61253 12.2884 4.2671 11.1498 4.4211 9.8946C4.65984 7.94873 6.08401 6.36016 7.98591 5.91831C9.21271 5.63329 10.2718 4.86046 10.9208 3.77671C11.927 2.0966 13.8713 1.22715 15.7878 1.60042C17.0239 1.84119 18.3045 1.56782 19.3362 0.84289Z" fill="#F2F2F2"/>\n<g clip-path="url(#clip0_8749_19037)">\n<path d="M16 32C15.1667 32 14.4583 31.7083 13.875 31.125C13.2917 30.5417 13 29.8333 13 29V26H16V12H31V29C31 29.8333 30.7083 30.5417 30.125 31.125C29.5417 31.7083 28.8333 32 28 32H16ZM28 30C28.2833 30 28.5167 29.9083 28.7 29.725C28.9 29.525 29 29.2833 29 29V14H18V26H27V29C27 29.2833 27.0917 29.525 27.275 29.725C27.475 29.9083 27.7167 30 28 30ZM19 19V17H28V19H19ZM19 22V20H28V22H19ZM16 30H25V28H15V29C15 29.2833 15.0917 29.525 15.275 29.725C15.475 29.9083 15.7167 30 16 30ZM16 30C15.7167 30 15.475 30 15.275 30C15.0917 30 15 30 15 30H25H16Z" fill="#0D4D3A"/>\n</g>\n<defs>\n<clipPath id="clip0_8749_19037">\n<rect width="24" height="24" fill="white" transform="translate(10 10)"/>\n</clipPath>\n</defs>\n</svg>\n'),
"appeal_closed_dark.svg":mn('<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M19.3362 0.84289C20.9358 -0.280964 23.0642 -0.280963 24.6638 0.84289C25.6955 1.56782 26.9761 1.84119 28.2122 1.60042C30.1287 1.22715 32.073 2.0966 33.0792 3.77671C33.7282 4.86046 34.7873 5.63329 36.0141 5.91831C37.916 6.36016 39.3402 7.94873 39.5789 9.8946C39.7329 11.1498 40.3875 12.2884 41.3928 13.05C42.9513 14.2305 43.609 16.2636 43.0391 18.1387C42.6714 19.3483 42.8083 20.6559 43.4183 21.7622C44.3639 23.4774 44.1415 25.6033 42.8614 27.0836C42.0357 28.0384 41.6312 29.2888 41.7404 30.5487C41.9097 32.5019 40.8455 34.3532 39.0766 35.1825C37.9356 35.7175 37.0596 36.6946 36.6492 37.8902C36.0128 39.7437 34.2909 41.0001 32.3391 41.0352C31.0801 41.0578 29.8841 41.5926 29.025 42.5171C27.693 43.9504 25.6111 44.3949 23.8139 43.6296C22.6546 43.136 21.3454 43.136 20.1861 43.6296C18.3889 44.3949 16.307 43.9504 14.975 42.5171C14.1159 41.5926 12.9199 41.0578 11.6609 41.0352C9.70909 41.0001 7.98719 39.7437 7.35084 37.8902C6.94038 36.6946 6.06439 35.7175 4.9234 35.1825C3.15454 34.3532 2.09034 32.5019 2.25964 30.5487C2.36884 29.2888 1.9643 28.0384 1.1386 27.0836C-0.141468 25.6033 -0.363946 23.4774 0.581724 21.7622C1.19172 20.6559 1.32856 19.3483 0.960927 18.1387C0.390988 16.2635 1.0487 14.2305 2.60722 13.05C3.61253 12.2884 4.2671 11.1498 4.4211 9.8946C4.65984 7.94873 6.08401 6.36016 7.98591 5.91831C9.21271 5.63329 10.2718 4.86046 10.9208 3.77671C11.927 2.0966 13.8713 1.22715 15.7878 1.60042C17.0239 1.84119 18.3045 1.56782 19.3362 0.84289Z" fill="#303030"/>\n<g clip-path="url(#clip0_8749_20741)">\n<path d="M16 32C15.1667 32 14.4583 31.7083 13.875 31.125C13.2917 30.5417 13 29.8333 13 29V26H16V12H31V29C31 29.8333 30.7083 30.5417 30.125 31.125C29.5417 31.7083 28.8333 32 28 32H16ZM28 30C28.2833 30 28.5167 29.9083 28.7 29.725C28.9 29.525 29 29.2833 29 29V14H18V26H27V29C27 29.2833 27.0917 29.525 27.275 29.725C27.475 29.9083 27.7167 30 28 30ZM19 19V17H28V19H19ZM19 22V20H28V22H19ZM16 30H25V28H15V29C15 29.2833 15.0917 29.525 15.275 29.725C15.475 29.9083 15.7167 30 16 30ZM16 30C15.7167 30 15.475 30 15.275 30C15.0917 30 15 30 15 30H25H16Z" fill="#CEF2E7"/>\n</g>\n<defs>\n<clipPath id="clip0_8749_20741">\n<rect width="24" height="24" fill="white" transform="translate(10 10)"/>\n</clipPath>\n</defs>\n</svg>\n'),
"appeal_review.svg":mn('<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M19.3362 0.84289C20.9358 -0.280964 23.0642 -0.280963 24.6638 0.84289C25.6955 1.56782 26.9761 1.84119 28.2122 1.60042C30.1287 1.22715 32.073 2.0966 33.0792 3.77671C33.7282 4.86046 34.7873 5.63329 36.0141 5.91831C37.916 6.36016 39.3402 7.94873 39.5789 9.8946C39.7329 11.1498 40.3875 12.2884 41.3928 13.05C42.9513 14.2305 43.609 16.2636 43.0391 18.1387C42.6714 19.3483 42.8083 20.6559 43.4183 21.7622C44.3639 23.4774 44.1415 25.6033 42.8614 27.0836C42.0357 28.0384 41.6312 29.2888 41.7404 30.5487C41.9097 32.5019 40.8455 34.3532 39.0766 35.1825C37.9356 35.7175 37.0596 36.6946 36.6492 37.8902C36.0128 39.7437 34.2909 41.0001 32.3391 41.0352C31.0801 41.0578 29.8841 41.5926 29.025 42.5171C27.693 43.9504 25.6111 44.3949 23.8139 43.6296C22.6546 43.136 21.3454 43.136 20.1861 43.6296C18.3889 44.3949 16.307 43.9504 14.975 42.5171C14.1159 41.5926 12.9199 41.0578 11.6609 41.0352C9.70909 41.0001 7.98719 39.7437 7.35084 37.8902C6.94038 36.6946 6.06439 35.7175 4.9234 35.1825C3.15454 34.3532 2.09034 32.5019 2.25964 30.5487C2.36884 29.2888 1.9643 28.0384 1.1386 27.0836C-0.141468 25.6033 -0.363946 23.4774 0.581724 21.7622C1.19172 20.6559 1.32856 19.3483 0.960927 18.1387C0.390988 16.2635 1.0487 14.2305 2.60722 13.05C3.61253 12.2884 4.2671 11.1498 4.4211 9.8946C4.65984 7.94873 6.08401 6.36016 7.98591 5.91831C9.21271 5.63329 10.2718 4.86046 10.9208 3.77671C11.927 2.0966 13.8713 1.22715 15.7878 1.60042C17.0239 1.84119 18.3045 1.56782 19.3362 0.84289Z" fill="#CEF2E7"/>\n<g clip-path="url(#clip0_8080_21046)">\n<path d="M16 32C15.1667 32 14.4583 31.7083 13.875 31.125C13.2917 30.5417 13 29.8333 13 29V26H16V12H31V29C31 29.8333 30.7083 30.5417 30.125 31.125C29.5417 31.7083 28.8333 32 28 32H16ZM28 30C28.2833 30 28.5167 29.9083 28.7 29.725C28.9 29.525 29 29.2833 29 29V14H18V26H27V29C27 29.2833 27.0917 29.525 27.275 29.725C27.475 29.9083 27.7167 30 28 30ZM19 19V17H28V19H19ZM19 22V20H28V22H19ZM16 30H25V28H15V29C15 29.2833 15.0917 29.525 15.275 29.725C15.475 29.9083 15.7167 30 16 30ZM16 30C15.7167 30 15.475 30 15.275 30C15.0917 30 15 30 15 30H25H16Z" fill="#0D4D3A"/>\n</g>\n<defs>\n<clipPath id="clip0_8080_21046">\n<rect width="24" height="24" fill="white" transform="translate(10 10)"/>\n</clipPath>\n</defs>\n</svg>\n'),
"appeal_review_dark.svg":mn('<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M19.3362 0.84289C20.9358 -0.280964 23.0642 -0.280963 24.6638 0.84289C25.6955 1.56782 26.9761 1.84119 28.2122 1.60042C30.1287 1.22715 32.073 2.0966 33.0792 3.77671C33.7282 4.86046 34.7873 5.63329 36.0141 5.91831C37.916 6.36016 39.3402 7.94873 39.5789 9.8946C39.7329 11.1498 40.3875 12.2884 41.3928 13.05C42.9513 14.2305 43.609 16.2636 43.0391 18.1387C42.6714 19.3483 42.8083 20.6559 43.4183 21.7622C44.3639 23.4774 44.1415 25.6033 42.8614 27.0836C42.0357 28.0384 41.6312 29.2888 41.7404 30.5487C41.9097 32.5019 40.8455 34.3532 39.0766 35.1825C37.9356 35.7175 37.0596 36.6946 36.6492 37.8902C36.0128 39.7437 34.2909 41.0001 32.3391 41.0352C31.0801 41.0578 29.8841 41.5926 29.025 42.5171C27.693 43.9504 25.6111 44.3949 23.8139 43.6296C22.6546 43.136 21.3454 43.136 20.1861 43.6296C18.3889 44.3949 16.307 43.9504 14.975 42.5171C14.1159 41.5926 12.9199 41.0578 11.6609 41.0352C9.70909 41.0001 7.98719 39.7437 7.35084 37.8902C6.94038 36.6946 6.06439 35.7175 4.9234 35.1825C3.15454 34.3532 2.09034 32.5019 2.25964 30.5487C2.36884 29.2888 1.9643 28.0384 1.1386 27.0836C-0.141468 25.6033 -0.363946 23.4774 0.581724 21.7622C1.19172 20.6559 1.32856 19.3483 0.960927 18.1387C0.390988 16.2635 1.0487 14.2305 2.60722 13.05C3.61253 12.2884 4.2671 11.1498 4.4211 9.8946C4.65984 7.94873 6.08401 6.36016 7.98591 5.91831C9.21271 5.63329 10.2718 4.86046 10.9208 3.77671C11.927 2.0966 13.8713 1.22715 15.7878 1.60042C17.0239 1.84119 18.3045 1.56782 19.3362 0.84289Z" fill="#093326"/>\n<g clip-path="url(#clip0_8749_20727)">\n<path d="M16 32C15.1667 32 14.4583 31.7083 13.875 31.125C13.2917 30.5417 13 29.8333 13 29V26H16V12H31V29C31 29.8333 30.7083 30.5417 30.125 31.125C29.5417 31.7083 28.8333 32 28 32H16ZM28 30C28.2833 30 28.5167 29.9083 28.7 29.725C28.9 29.525 29 29.2833 29 29V14H18V26H27V29C27 29.2833 27.0917 29.525 27.275 29.725C27.475 29.9083 27.7167 30 28 30ZM19 19V17H28V19H19ZM19 22V20H28V22H19ZM16 30H25V28H15V29C15 29.2833 15.0917 29.525 15.275 29.725C15.475 29.9083 15.7167 30 16 30ZM16 30C15.7167 30 15.475 30 15.275 30C15.0917 30 15 30 15 30H25H16Z" fill="#CEF2E7"/>\n</g>\n<defs>\n<clipPath id="clip0_8749_20727">\n<rect width="24" height="24" fill="white" transform="translate(10 10)"/>\n</clipPath>\n</defs>\n</svg>\n'),
"arrow_back.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>\n  <path fill="none" d="M0 0h24v24H0V0z"/>\n</svg>\n'),"arrow_circle_down.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M 12 15.699219 L 15.648438 12.050781 L 14.601562 11 L 12.75 12.851562 L 12.75 8.300781 L 11.25 8.300781 L 11.25 12.851562 L 9.398438 11 L 8.351562 12.050781 Z M 12 22 C 10.632812 22 9.339844 21.738281 8.125 21.210938 C 6.910156 20.6875 5.847656 19.972656 4.9375 19.0625 C 4.027344 18.152344 3.3125 17.089844 2.789062 15.875 C 2.261719 14.660156 2 13.367188 2 12 C 2 10.617188 2.261719 9.316406 2.789062 8.101562 C 3.3125 6.882812 4.027344 5.824219 4.9375 4.925781 C 5.847656 4.023438 6.910156 3.3125 8.125 2.789062 C 9.339844 2.261719 10.632812 2 12 2 C 13.382812 2 14.683594 2.261719 15.898438 2.789062 C 17.117188 3.3125 18.175781 4.023438 19.074219 4.925781 C 19.976562 5.824219 20.6875 6.882812 21.210938 8.101562 C 21.738281 9.316406 22 10.617188 22 12 C 22 13.367188 21.738281 14.660156 21.210938 15.875 C 20.6875 17.089844 19.976562 18.152344 19.074219 19.0625 C 18.175781 19.972656 17.117188 20.6875 15.898438 21.210938 C 14.683594 21.738281 13.382812 22 12 22 Z M 12 20.5 C 14.367188 20.5 16.375 19.671875 18.023438 18.011719 C 19.675781 16.355469 20.5 14.351562 20.5 12 C 20.5 9.632812 19.675781 7.625 18.023438 5.976562 C 16.375 4.324219 14.367188 3.5 12 3.5 C 9.648438 3.5 7.644531 4.324219 5.988281 5.976562 C 4.328125 7.625 3.5 9.632812 3.5 12 C 3.5 14.351562 4.328125 16.355469 5.988281 18.011719 C 7.644531 19.671875 9.648438 20.5 12 20.5 Z M 12 12 Z M 12 12 "/>\n</svg>\n'),
"arrow_circle_down_filled.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M 12 15.75 L 15.710938 12.039062 L 14.601562 10.933594 L 12.796875 12.738281 L 12.796875 8.25 L 11.210938 8.25 L 11.210938 12.738281 L 9.398438 10.933594 L 8.296875 12.039062 Z M 12 21.832031 C 10.652344 21.832031 9.378906 21.574219 8.183594 21.054688 C 6.984375 20.539062 5.941406 19.832031 5.054688 18.945312 C 4.164062 18.054688 3.460938 17.011719 2.945312 15.816406 C 2.425781 14.621094 2.167969 13.347656 2.167969 12 C 2.167969 10.640625 2.425781 9.363281 2.945312 8.164062 C 3.460938 6.96875 4.167969 5.925781 5.054688 5.039062 C 5.945312 4.15625 6.988281 3.453125 8.183594 2.941406 C 9.378906 2.425781 10.652344 2.167969 12 2.167969 C 13.359375 2.167969 14.636719 2.425781 15.835938 2.941406 C 17.03125 3.457031 18.074219 4.160156 18.960938 5.046875 C 19.84375 5.933594 20.546875 6.972656 21.058594 8.167969 C 21.574219 9.363281 21.832031 10.640625 21.832031 12 C 21.832031 13.347656 21.574219 14.621094 21.058594 15.816406 C 20.542969 17.015625 19.84375 18.058594 18.957031 18.945312 C 18.070312 19.835938 17.027344 20.539062 15.832031 21.054688 C 14.636719 21.574219 13.359375 21.832031 12 21.832031 Z M 12 21.832031 "/>\n</svg>\n'),
"arrow_downward.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 20 4 12 5.4 10.575 11 16.175V4H13V16.175L18.6 10.575L20 12Z"/></svg>\n'),"arrow_drop_down.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 10l5 5 5-5H7z"/></svg>\n'),"arrow_drop_up.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 14l5-5 5 5H7z"/></svg>\n'),"arrow_forward.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>\n'),
"arrow_forward_ios.svg":mn('<svg viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M1.2 11.6L0.208333 10.6083L4.81667 6L0.208333 1.39167L1.2 0.399999L6.8 6L1.2 11.6Z" fill="#4C4D50"/>\n</svg>\n'),"arrow_outward.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">\n  <path d="m2.104 12.167-1.229-1.23 8.333-8.312h-7.27V.875h10.229v10.25h-1.73V3.833l-8.333 8.334Z"/>\n</svg>\n'),"arrow_upward.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 20V7.825l-5.6 5.6L4 12l8-8 8 8-1.4 1.425-5.6-5.6V20z"/></svg>\n'),
"article.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3B78E7"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>\n'),"attach_file.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 6v10.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V6a2.5 2.5 0 0 1 5 0v9.5c0 .55-.45 1-1 1s-1-.45-1-1V6H9v9.5a2.5 2.5 0 0 0 5 0V6c0-2.21-1.79-4-4-4S6 3.79 6 6v10.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"/></svg>\n'),
"attach_file_add.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e3e3e3"><path d="M600-504v-216h72v216h-72ZM432-243q-32-8-52-34.89-20-26.88-20-62.11v-380h72v477Zm24 147q-91 0-153.5-65.5T240-319v-389q0-65 45.5-110.5T396-864q66 0 111 48t45 115v305h-72v-312q0-35-24.5-59.5T395.8-792q-35.19 0-59.5 25.5Q312-741 312-706v394q0 60 42 101.5T456-168q32 1 60-13t48-37v93q-24 14-51.39 21.5T456-96Zm180-48v-108H528v-72h108v-108h72v108h108v72H708v108h-72Z"/></svg>\n'),
"auto_awesome.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/></svg>\n'),"awf.svg":mn('<svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_2776_16815)">\n<mask id="mask0_2776_16815" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">\n<path d="M22.4688 12L12.5001 21.9688L2.53134 12L12.5001 2.03131L22.4688 12ZM23.8929 10.5759L13.9242 0.607209C13.1409 -0.176048 11.8592 -0.176048 11.076 0.607209L1.10724 10.5759C0.323979 11.3592 0.323979 12.6409 1.10724 13.4241L11.076 23.3929C11.8592 24.1761 13.1409 24.1761 13.9242 23.3929L23.8929 13.4241C24.6761 12.6409 24.6761 11.3592 23.8929 10.5759Z" fill="white"/>\n</mask>\n<g mask="url(#mask0_2776_16815)">\n<path d="M22.4688 12L12.5001 21.9688L2.53134 12L12.5001 2.03131L22.4688 12ZM23.8929 10.5759L13.9242 0.607209C13.1409 -0.176048 11.8592 -0.176048 11.076 0.607209L1.10724 10.5759C0.323979 11.3592 0.323979 12.6409 1.10724 13.4241L11.076 23.3929C11.8592 24.1761 13.1409 24.1761 13.9242 23.3929L23.8929 13.4241C24.6761 12.6409 24.6761 11.3592 23.8929 10.5759Z" fill="#0B57D0"/>\n<path d="M26.029 8.43987L12.5001 -5.08911L3.95544 3.45551L17.4844 16.9845L26.029 8.43987Z" fill="#34A853"/>\n<path d="M29.5893 11.9999L21.0447 3.45532L12.5001 11.9999L21.0447 20.5446L29.5893 11.9999Z" fill="#0B57D0"/>\n<path d="M20.3326 19.8327L11.788 11.2881L3.24341 19.8327L11.788 28.3773L20.3326 19.8327Z" fill="#D93025"/>\n<path d="M11.788 11.288L3.24341 2.74341L-5.30121 11.288L3.24341 19.8326L11.788 11.288Z" fill="#F9AB00"/>\n</g>\n<path d="M12.5001 17.035L14.081 13.581L17.535 12.0001L14.081 10.4191L12.5001 6.96509L10.9191 10.4191L7.46509 12.0001L10.9191 13.581L12.5001 17.035Z" fill="#0B57D0"/>\n</g>\n<defs>\n<clipPath id="clip0_2776_16815">\n<rect width="24" height="24" fill="white" transform="translate(0.5)"/>\n</clipPath>\n</defs>\n</svg>\n'),
"awf_dark.svg":mn('<svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_2776_18202)">\n<mask id="mask0_2776_18202" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">\n<path d="M22.4687 12L12.5 21.9688L2.53128 12L12.5 2.03131L22.4687 12ZM23.8928 10.5759L13.9241 0.607209C13.1408 -0.176048 11.8592 -0.176048 11.0759 0.607209L1.10717 10.5759C0.323918 11.3592 0.323918 12.6409 1.10717 13.4241L11.0759 23.3929C11.8592 24.1761 13.1408 24.1761 13.9241 23.3929L23.8928 13.4241C24.6761 12.6409 24.6761 11.3592 23.8928 10.5759Z" fill="white"/>\n</mask>\n<g mask="url(#mask0_2776_18202)">\n<path d="M22.4687 12L12.5 21.9688L2.53128 12L12.5 2.03131L22.4687 12ZM23.8928 10.5759L13.9241 0.607209C13.1408 -0.176048 11.8592 -0.176048 11.0759 0.607209L1.10717 10.5759C0.323918 11.3592 0.323918 12.6409 1.10717 13.4241L11.0759 23.3929C11.8592 24.1761 13.1408 24.1761 13.9241 23.3929L23.8928 13.4241C24.6761 12.6409 24.6761 11.3592 23.8928 10.5759Z" fill="#D3E3FD"/>\n<path d="M26.029 8.43987L12.5 -5.08911L3.95538 3.45551L17.4844 16.9845L26.029 8.43987Z" fill="#C4EED0"/>\n<path d="M29.5892 11.9999L21.0446 3.45532L12.5 11.9999L21.0446 20.5446L29.5892 11.9999Z" fill="#D3E3FD"/>\n<path d="M20.3326 19.8327L11.7879 11.2881L3.24332 19.8327L11.7879 28.3773L20.3326 19.8327Z" fill="#F6AEA9"/>\n<path d="M11.7879 11.288L3.24332 2.74341L-5.3013 11.288L3.24332 19.8326L11.7879 11.288Z" fill="#FDD663"/>\n</g>\n<path d="M12.5 17.035L14.081 13.581L17.535 12.0001L14.081 10.4191L12.5 6.96509L10.919 10.4191L7.46503 12.0001L10.919 13.581L12.5 17.035Z" fill="#D3E3FD"/>\n</g>\n<defs>\n<clipPath id="clip0_2776_18202">\n<rect width="24" height="24" fill="white" transform="translate(0.5)"/>\n</clipPath>\n</defs>\n</svg>\n'),
"beta.svg":mn('<svg viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect x="0.578157" y="0.430879" width="24.991" height="12.9264" rx="1.29264" stroke="#0B57D0" stroke-width="0.861758"/>\n<path d="M4.56421 9V4.06385H6.41182C6.68298 4.06385 6.92887 4.1213 7.14948 4.2362C7.37009 4.35111 7.54474 4.50737 7.67343 4.705C7.80671 4.90263 7.87336 5.12554 7.87336 5.37372C7.87336 5.62651 7.81131 5.84252 7.68722 6.02177C7.56312 6.20101 7.40226 6.33659 7.20463 6.42852V6.46299C7.45282 6.54571 7.65504 6.68819 7.81131 6.89042C7.96758 7.09264 8.04571 7.33394 8.04571 7.61429C8.04571 7.89006 7.97447 8.13135 7.83199 8.33817C7.69411 8.54499 7.50567 8.70815 7.26668 8.82765C7.03228 8.94255 6.7749 9 6.49454 9H4.56421ZM5.32255 6.81458V8.29681H6.49454C6.66 8.29681 6.80248 8.26234 6.92198 8.19339C7.04147 8.12445 7.1311 8.03253 7.19084 7.91763C7.25519 7.80273 7.28736 7.68323 7.28736 7.55914C7.28736 7.42586 7.25519 7.30406 7.19084 7.19376C7.1265 7.07886 7.03228 6.98693 6.90819 6.91799C6.78869 6.84905 6.64162 6.81458 6.46697 6.81458H5.32255ZM5.32255 6.13896H6.37735C6.53821 6.13896 6.67379 6.10679 6.7841 6.04245C6.899 5.97351 6.98632 5.88618 7.04607 5.78047C7.10582 5.67017 7.13569 5.55757 7.13569 5.44266C7.13569 5.32776 7.10582 5.21976 7.04607 5.11864C6.99092 5.01294 6.90819 4.92791 6.79788 4.86356C6.68758 4.79462 6.55659 4.76015 6.40492 4.76015H5.32255V6.13896ZM9.43125 9V4.06385H12.4233V4.78083H10.1896V6.17344H12.2027V6.89042H10.1896V8.28302H12.4233V9H9.43125ZM14.9345 9V4.78083H13.5488V4.06385H17.0648V4.78083H15.686V9H14.9345ZM17.4446 9L19.306 4.06385H20.1678L22.0361 9H21.2019L20.7469 7.73149H18.7338L18.2788 9H17.4446ZM20.4918 7.0283L19.9472 5.5185L19.761 4.95319H19.7197L19.5335 5.5185L18.9889 7.0283H20.4918Z" fill="#0B57D0"/>\n</svg>\n'),
"beta_dark.svg":mn('<svg viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect x="0.430879" y="0.430879" width="24.991" height="12.9264" rx="1.29264" stroke="#D3E3FD" stroke-width="0.861758"/>\n<path d="M4.41693 9V4.06385H6.26454C6.5357 4.06385 6.78159 4.1213 7.0022 4.2362C7.22281 4.35111 7.39746 4.50737 7.52615 4.705C7.65944 4.90263 7.72608 5.12554 7.72608 5.37372C7.72608 5.62651 7.66403 5.84252 7.53994 6.02177C7.41585 6.20101 7.25498 6.33659 7.05735 6.42852V6.46299C7.30554 6.54571 7.50777 6.68819 7.66403 6.89042C7.8203 7.09264 7.89843 7.33394 7.89843 7.61429C7.89843 7.89006 7.82719 8.13135 7.68471 8.33817C7.54683 8.54499 7.3584 8.70815 7.1194 8.82765C6.885 8.94255 6.62763 9 6.34727 9H4.41693ZM5.17528 6.81458V8.29681H6.34727C6.51272 8.29681 6.6552 8.26234 6.7747 8.19339C6.8942 8.12445 6.98382 8.03253 7.04357 7.91763C7.10791 7.80273 7.14008 7.68323 7.14008 7.55914C7.14008 7.42586 7.10791 7.30406 7.04357 7.19376C6.97922 7.07886 6.885 6.98693 6.76091 6.91799C6.64141 6.84905 6.49434 6.81458 6.31969 6.81458H5.17528ZM5.17528 6.13896H6.23007C6.39093 6.13896 6.52651 6.10679 6.63682 6.04245C6.75172 5.97351 6.83904 5.88618 6.89879 5.78047C6.95854 5.67017 6.98841 5.55757 6.98841 5.44266C6.98841 5.32776 6.95854 5.21976 6.89879 5.11864C6.84364 5.01294 6.76091 4.92791 6.65061 4.86356C6.5403 4.79462 6.40931 4.76015 6.25764 4.76015H5.17528V6.13896ZM9.28397 9V4.06385H12.276V4.78083H10.0423V6.17344H12.0554V6.89042H10.0423V8.28302H12.276V9H9.28397ZM14.7873 9V4.78083H13.4016V4.06385H16.9175V4.78083H15.5387V9H14.7873ZM17.2974 9L19.1587 4.06385H20.0205L21.8888 9H21.0546L20.5996 7.73149H18.5865L18.1315 9H17.2974ZM20.3445 7.0283L19.7999 5.5185L19.6138 4.95319H19.5724L19.3863 5.5185L18.8416 7.0283H20.3445Z" fill="#D3E3FD"/>\n</svg>\n'),
"bookmark_add.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">\n  <path d="M200-120v-640q0-33 23.5-56.5T280-840h240v80H280v518l200-86 200 86v-278h80v400L480-240 200-120Zm80-640h240-240Zm400 160v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"></path>\n</svg>\n'),"brand_awareness.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0B57D0">\n  <path d="M13 10.75v-1.5h3v1.5Zm1.062 5-2.395-1.812.895-1.188 2.417 1.792Zm-1.5-8.5-.895-1.188 2.395-1.812.917 1.208ZM3 12V8h3l4-4v12l-4-4Zm5.5-4.375L6.625 9.5H4.5v1h2.125L8.5 12.375ZM6.521 10Z"/>\n</svg>\n'),
"brand_awareness_dark.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0B57D0">\n  <path d="M12.917 10.688V9.292h2.895v1.396Zm1.041 4.874-2.312-1.729.833-1.104 2.333 1.709Zm-1.479-8.291-.833-1.104 2.312-1.729.854 1.124Zm-9.271 4.604v-3.75h2.896l3.834-3.833v11.416l-3.834-3.833Zm5.334-4.229L6.667 9.521H4.604v.958h2.063l1.875 1.854ZM6.583 10Z"/>\n</svg>\n'),"calendar_month.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g clip-path="url(#clip0_1_30)"><path d="M5 22C4.45 22 3.975 21.8083 3.575 21.425C3.19167 21.025 3 20.55 3 20V6C3 5.45 3.19167 4.98333 3.575 4.6C3.975 4.2 4.45 4 5 4H6V2H8V4H16V2H18V4H19C19.55 4 20.0167 4.2 20.4 4.6C20.8 4.98333 21 5.45 21 6V20C21 20.55 20.8 21.025 20.4 21.425C20.0167 21.8083 19.55 22 19 22H5ZM5 20H19V10H5V20ZM5 8H19V6H5V8ZM5 8V6V8ZM12 14C11.7167 14 11.475 13.9083 11.275 13.725C11.0917 13.525 11 13.2833 11 13C11 12.7167 11.0917 12.4833 11.275 12.3C11.475 12.1 11.7167 12 12 12C12.2833 12 12.5167 12.1 12.7 12.3C12.9 12.4833 13 12.7167 13 13C13 13.2833 12.9 13.525 12.7 13.725C12.5167 13.9083 12.2833 14 12 14ZM8 14C7.71667 14 7.475 13.9083 7.275 13.725C7.09167 13.525 7 13.2833 7 13C7 12.7167 7.09167 12.4833 7.275 12.3C7.475 12.1 7.71667 12 8 12C8.28333 12 8.51667 12.1 8.7 12.3C8.9 12.4833 9 12.7167 9 13C9 13.2833 8.9 13.525 8.7 13.725C8.51667 13.9083 8.28333 14 8 14ZM16 14C15.7167 14 15.475 13.9083 15.275 13.725C15.0917 13.525 15 13.2833 15 13C15 12.7167 15.0917 12.4833 15.275 12.3C15.475 12.1 15.7167 12 16 12C16.2833 12 16.5167 12.1 16.7 12.3C16.9 12.4833 17 12.7167 17 13C17 13.2833 16.9 13.525 16.7 13.725C16.5167 13.9083 16.2833 14 16 14ZM12 18C11.7167 18 11.475 17.9083 11.275 17.725C11.0917 17.525 11 17.2833 11 17C11 16.7167 11.0917 16.4833 11.275 16.3C11.475 16.1 11.7167 16 12 16C12.2833 16 12.5167 16.1 12.7 16.3C12.9 16.4833 13 16.7167 13 17C13 17.2833 12.9 17.525 12.7 17.725C12.5167 17.9083 12.2833 18 12 18ZM8 18C7.71667 18 7.475 17.9083 7.275 17.725C7.09167 17.525 7 17.2833 7 17C7 16.7167 7.09167 16.4833 7.275 16.3C7.475 16.1 7.71667 16 8 16C8.28333 16 8.51667 16.1 8.7 16.3C8.9 16.4833 9 16.7167 9 17C9 17.2833 8.9 17.525 8.7 17.725C8.51667 17.9083 8.28333 18 8 18ZM16 18C15.7167 18 15.475 17.9083 15.275 17.725C15.0917 17.525 15 17.2833 15 17C15 16.7167 15.0917 16.4833 15.275 16.3C15.475 16.1 15.7167 16 16 16C16.2833 16 16.5167 16.1 16.7 16.3C16.9 16.4833 17 16.7167 17 17C17 17.2833 16.9 17.525 16.7 17.725C16.5167 17.9083 16.2833 18 16 18Z"/></g><defs><clipPath id="clip0_1_30"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>\n'),
"calendar_today.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>\n'),"campaign.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF">\n  <path d="M0 0h24v24H0z" fill="none"/>\n  <path d="M22 11v2h-4v-2h4zm-6 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM15.5 12c0 1.33-.58 2.53-1.5 3.34V19l-6-4H7v4H5v-4H4c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h4l6-4v3.65c.92.82 1.5 2.02 1.5 3.35zM12 8.74l-2.89 1.93-.5.33H4v2h4.61l.5.34L12 15.26V8.74z"/>\n</svg>\n'),
"cancel.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9997 0.333252C5.54801 0.333252 0.333008 5.54825 0.333008 11.9999C0.333008 18.4516 5.54801 23.6666 11.9997 23.6666C18.4513 23.6666 23.6663 18.4516 23.6663 11.9999C23.6663 5.54825 18.4513 0.333252 11.9997 0.333252ZM11.9997 21.3333C6.85467 21.3333 2.66634 17.1449 2.66634 11.9999C2.66634 6.85492 6.85467 2.66659 11.9997 2.66659C17.1447 2.66659 21.333 6.85492 21.333 11.9999C21.333 17.1449 17.1447 21.3333 11.9997 21.3333ZM11.9997 10.3549L16.188 6.16658L17.833 7.81158L13.6447 11.9999L17.833 16.1883L16.188 17.8333L11.9997 13.6449L7.81134 17.8333L6.16634 16.1883L10.3547 11.9999L6.16634 7.81158L7.81134 6.16658L11.9997 10.3549Z" fill="#5F6368"/>\n</svg>\n'),
"chat.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H4V4h16v12zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z"/>\n  <path d="M0 0h24v24H0V0z" fill="none"/>\n</svg>\n'),"chat_spark.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">\n  <path d="M700-480q0-92-64-156t-156-64q92 0 156-64t64-156q0 92 64 156t156 64q-92 0-156 64t-64 156ZM80-80v-720q0-33 23.5-56.5T160-880h400v80H160v525l46-45h594v-241h80v241q0 33-23.5 56.5T800-240H240L80-80Zm160-320v-80h400v80H240Zm0-120v-80h360v80H240Zm0-120v-80h200v80H240Z"/>\n</svg>\n'),
"check.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"></path>\n    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>\n</svg>\n'),"check_blue.svg":mn('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g id="check">\n<path id="ic_done_24px" d="M9.00002 16.1999L4.80002 11.9999L3.40002 13.3999L9.00002 18.9999L21 6.99985L19.6 5.59985L9.00002 16.1999Z" fill="#0B57D0"/>\n</g>\n</svg>\n'),"check_circle.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n  <path d="M10 14.2l-2.6-2.6L6 13l4 4 8-8-1.4-1.4z"/>\n</svg>\n'),
"check_circle_filled.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <g>\n    <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M10,17l-4-4l1.4-1.4l2.6,2.6l6.6-6.6 L18,9L10,17z"/>\n    <path d="M0,0h24v24H0V0z" fill="none"/>\n  </g>\n</svg>\n'),"check_circle_outline.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-5.8l-2.6-2.6L6 13l4 4 8-8-1.4-1.4z"></path>\n  <path d="M0 0h24v24H0V0z" fill="none"></path>\n</svg>\n'),
"check_white.svg":mn('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g id="check">\n<path id="ic_done_24px" d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z" fill="#D3E3FD"/>\n</g>\n</svg>\n'),"close.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>\n  <path fill="none" d="M0 0h24v24H0V0z"/>\n</svg>\n'),
"code.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 6l-1.41 1.41L19.17 12l-4.58 4.59L16 18l6-6zM8 18l1.41-1.41L4.83 12l4.58-4.59L8 6l-6 6z"/></svg>\n'),"content_copy.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M18 21H4V7H2v14c0 1.1.9 2 2 2h14v-2zm3-4V3c0-1.1-.9-2-2-2H8c-1.1 0-2\n           .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2zm-2 0H8V3h11v14z"/>\n</svg>\n'),"control_point_duplicate.svg":mn('<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M14 16H16V13H19V11H16V8H14V11H11V13H14ZM6 20.5Q3.275 19.55 1.638 17.212Q0 14.875 0 12Q0 9.125 1.638 6.787Q3.275 4.45 6 3.5V5.7Q4.15 6.575 3.075 8.275Q2 9.975 2 12Q2 14.025 3.075 15.725Q4.15 17.425 6 18.3ZM15 21Q13.125 21 11.488 20.288Q9.85 19.575 8.638 18.362Q7.425 17.15 6.713 15.512Q6 13.875 6 12Q6 10.125 6.713 8.487Q7.425 6.85 8.638 5.637Q9.85 4.425 11.488 3.712Q13.125 3 15 3Q16.875 3 18.513 3.712Q20.15 4.425 21.363 5.637Q22.575 6.85 23.288 8.487Q24 10.125 24 12Q24 13.875 23.288 15.512Q22.575 17.15 21.363 18.362Q20.15 19.575 18.513 20.288Q16.875 21 15 21ZM15 12Q15 12 15 12Q15 12 15 12Q15 12 15 12Q15 12 15 12Q15 12 15 12Q15 12 15 12Q15 12 15 12Q15 12 15 12ZM15 19Q17.925 19 19.962 16.962Q22 14.925 22 12Q22 9.075 19.962 7.037Q17.925 5 15 5Q12.075 5 10.038 7.037Q8 9.075 8 12Q8 14.925 10.038 16.962Q12.075 19 15 19Z"/></svg>\n'),
"critical.svg":mn('<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M19.3362 0.84289C20.9358 -0.280964 23.0642 -0.280963 24.6638 0.84289C25.6955 1.56782 26.9761 1.84119 28.2122 1.60042C30.1287 1.22715 32.073 2.0966 33.0792 3.77671C33.7282 4.86046 34.7873 5.63329 36.0141 5.91831C37.916 6.36016 39.3402 7.94873 39.5789 9.8946C39.7329 11.1498 40.3875 12.2884 41.3928 13.05C42.9513 14.2305 43.609 16.2636 43.0391 18.1387C42.6714 19.3483 42.8083 20.6559 43.4183 21.7622C44.3639 23.4774 44.1415 25.6033 42.8614 27.0836C42.0357 28.0384 41.6312 29.2888 41.7404 30.5487C41.9097 32.5019 40.8455 34.3532 39.0766 35.1825C37.9356 35.7175 37.0596 36.6946 36.6492 37.8902C36.0128 39.7437 34.2909 41.0001 32.3391 41.0352C31.0801 41.0578 29.8841 41.5926 29.025 42.5171C27.693 43.9504 25.6111 44.3949 23.8139 43.6296C22.6546 43.136 21.3454 43.136 20.1861 43.6296C18.3889 44.3949 16.307 43.9504 14.975 42.5171C14.1159 41.5926 12.9199 41.0578 11.6609 41.0352C9.70909 41.0001 7.98719 39.7437 7.35084 37.8902C6.94038 36.6946 6.06439 35.7175 4.9234 35.1825C3.15454 34.3532 2.09034 32.5019 2.25964 30.5487C2.36884 29.2888 1.9643 28.0384 1.1386 27.0836C-0.141468 25.6033 -0.363946 23.4774 0.581724 21.7622C1.19172 20.6559 1.32856 19.3483 0.960927 18.1387C0.390988 16.2635 1.0487 14.2305 2.60722 13.05C3.61253 12.2884 4.2671 11.1498 4.4211 9.8946C4.65984 7.94873 6.08401 6.36016 7.98591 5.91831C9.21271 5.63329 10.2718 4.86046 10.9208 3.77671C11.927 2.0966 13.8713 1.22715 15.7878 1.60042C17.0239 1.84119 18.3045 1.56782 19.3362 0.84289Z" fill="#F9DEDC"/>\n<g clip-path="url(#clip0_8070_13711)">\n<path d="M22 27C22.2833 27 22.5167 26.9083 22.7 26.725C22.9 26.525 23 26.2833 23 26C23 25.7167 22.9 25.4833 22.7 25.3C22.5167 25.1 22.2833 25 22 25C21.7167 25 21.475 25.1 21.275 25.3C21.0917 25.4833 21 25.7167 21 26C21 26.2833 21.0917 26.525 21.275 26.725C21.475 26.9083 21.7167 27 22 27ZM21 23H23V17H21V23ZM22 32C20.6167 32 19.3167 31.7417 18.1 31.225C16.8833 30.6917 15.825 29.975 14.925 29.075C14.025 28.175 13.3083 27.1167 12.775 25.9C12.2583 24.6833 12 23.3833 12 22C12 20.6167 12.2583 19.3167 12.775 18.1C13.3083 16.8833 14.025 15.825 14.925 14.925C15.825 14.025 16.8833 13.3167 18.1 12.8C19.3167 12.2667 20.6167 12 22 12C23.3833 12 24.6833 12.2667 25.9 12.8C27.1167 13.3167 28.175 14.025 29.075 14.925C29.975 15.825 30.6833 16.8833 31.2 18.1C31.7333 19.3167 32 20.6167 32 22C32 23.3833 31.7333 24.6833 31.2 25.9C30.6833 27.1167 29.975 28.175 29.075 29.075C28.175 29.975 27.1167 30.6917 25.9 31.225C24.6833 31.7417 23.3833 32 22 32ZM22 30C24.2333 30 26.125 29.225 27.675 27.675C29.225 26.125 30 24.2333 30 22C30 19.7667 29.225 17.875 27.675 16.325C26.125 14.775 24.2333 14 22 14C19.7667 14 17.875 14.775 16.325 16.325C14.775 17.875 14 19.7667 14 22C14 24.2333 14.775 26.125 16.325 27.675C17.875 29.225 19.7667 30 22 30Z" fill="#601410"/>\n</g>\n<defs>\n<clipPath id="clip0_8070_13711">\n<rect width="24" height="24" fill="white" transform="translate(10 10)"/>\n</clipPath>\n</defs>\n</svg>\n'),
"critical_dark.svg":mn('<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M19.3362 0.84289C20.9358 -0.280964 23.0642 -0.280963 24.6638 0.84289C25.6955 1.56782 26.9761 1.84119 28.2122 1.60042C30.1287 1.22715 32.073 2.0966 33.0792 3.77671C33.7282 4.86046 34.7873 5.63329 36.0141 5.91831C37.916 6.36016 39.3402 7.94873 39.5789 9.8946C39.7329 11.1498 40.3875 12.2884 41.3928 13.05C42.9513 14.2305 43.609 16.2636 43.0391 18.1387C42.6714 19.3483 42.8083 20.6559 43.4183 21.7622C44.3639 23.4774 44.1415 25.6033 42.8614 27.0836C42.0357 28.0384 41.6312 29.2888 41.7404 30.5487C41.9097 32.5019 40.8455 34.3532 39.0766 35.1825C37.9356 35.7175 37.0596 36.6946 36.6492 37.8902C36.0128 39.7437 34.2909 41.0001 32.3391 41.0352C31.0801 41.0578 29.8841 41.5926 29.025 42.5171C27.693 43.9504 25.6111 44.3949 23.8139 43.6296C22.6546 43.136 21.3454 43.136 20.1861 43.6296C18.3889 44.3949 16.307 43.9504 14.975 42.5171C14.1159 41.5926 12.9199 41.0578 11.6609 41.0352C9.70909 41.0001 7.98719 39.7437 7.35084 37.8902C6.94038 36.6946 6.06439 35.7175 4.9234 35.1825C3.15454 34.3532 2.09034 32.5019 2.25964 30.5487C2.36884 29.2888 1.9643 28.0384 1.1386 27.0836C-0.141468 25.6033 -0.363946 23.4774 0.581724 21.7622C1.19172 20.6559 1.32856 19.3483 0.960927 18.1387C0.390988 16.2635 1.0487 14.2305 2.60722 13.05C3.61253 12.2884 4.2671 11.1498 4.4211 9.8946C4.65984 7.94873 6.08401 6.36016 7.98591 5.91831C9.21271 5.63329 10.2718 4.86046 10.9208 3.77671C11.927 2.0966 13.8713 1.22715 15.7878 1.60042C17.0239 1.84119 18.3045 1.56782 19.3362 0.84289Z" fill="#601410"/>\n<g clip-path="url(#clip0_8213_81611)">\n<path d="M22 27C22.2833 27 22.5167 26.9083 22.7 26.725C22.9 26.525 23 26.2833 23 26C23 25.7167 22.9 25.4833 22.7 25.3C22.5167 25.1 22.2833 25 22 25C21.7167 25 21.475 25.1 21.275 25.3C21.0917 25.4833 21 25.7167 21 26C21 26.2833 21.0917 26.525 21.275 26.725C21.475 26.9083 21.7167 27 22 27ZM21 23H23V17H21V23ZM22 32C20.6167 32 19.3167 31.7417 18.1 31.225C16.8833 30.6917 15.825 29.975 14.925 29.075C14.025 28.175 13.3083 27.1167 12.775 25.9C12.2583 24.6833 12 23.3833 12 22C12 20.6167 12.2583 19.3167 12.775 18.1C13.3083 16.8833 14.025 15.825 14.925 14.925C15.825 14.025 16.8833 13.3167 18.1 12.8C19.3167 12.2667 20.6167 12 22 12C23.3833 12 24.6833 12.2667 25.9 12.8C27.1167 13.3167 28.175 14.025 29.075 14.925C29.975 15.825 30.6833 16.8833 31.2 18.1C31.7333 19.3167 32 20.6167 32 22C32 23.3833 31.7333 24.6833 31.2 25.9C30.6833 27.1167 29.975 28.175 29.075 29.075C28.175 29.975 27.1167 30.6917 25.9 31.225C24.6833 31.7417 23.3833 32 22 32ZM22 30C24.2333 30 26.125 29.225 27.675 27.675C29.225 26.125 30 24.2333 30 22C30 19.7667 29.225 17.875 27.675 16.325C26.125 14.775 24.2333 14 22 14C19.7667 14 17.875 14.775 16.325 16.325C14.775 17.875 14 19.7667 14 22C14 24.2333 14.775 26.125 16.325 27.675C17.875 29.225 19.7667 30 22 30Z" fill="#F9DEDC"/>\n</g>\n<defs>\n<clipPath id="clip0_8213_81611">\n<rect width="24" height="24" fill="white" transform="translate(10 10)"/>\n</clipPath>\n</defs>\n</svg>\n'),
"delete.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#041E49"><path d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413Q17.825 21 17 21ZM17 6H7v13h10ZM9 17h2V8H9Zm4 0h2V8h-2ZM7 6v13Z"/></svg>\n'),"delete_outline.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"/></svg>\n'),"do_not_disturb.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M0 0h24v24H0V0z" fill="none"/>\n  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"/>\n</svg>\n'),
"down_arrow.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M12 16.41l-6.71-6.7 1.42-1.42 5.29 5.3 5.29-5.3 1.42 1.42z"/>\n  <path d="M0 0h24v24H0V0z" fill="none"/>\n</svg>\n'),"drive_document.svg":mn('<svg viewbox="0 0 24 24">\n  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9\n           2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path>\n  <path d="M0 0h24v24H0z" fill="none"></path>\n</svg>\n'),"drive_image.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M0 0h24v24H0z" fill="none"/>\n  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0\n           2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>\n</svg>\n'),
"dvr.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zm-2-9H8v2h11V8zm0 4H8v2h11v-2zM7 8H5v2h2V8zm0 4H5v2h2v-2z"/></svg>\n'),"edit.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n<path xmlns="http://www.w3.org/2000/svg" d="M5 19h1.4L16.45 8.975l-.7-.725-.725-.7L5 17.6Zm-2 2v-4.25L16.45 3.325q.575-.575 1.413-.575.837 0 1.412.575l1.4 1.425q.575.575.575 1.4t-.575 1.4L7.25 21ZM19.25 6.15l-1.4-1.4Zm-2.8 2.825-.7-.725-.725-.7 1.425 1.425Z"/>\n</svg>\n'),
"edit_calendar.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v200h-80v-40H200v400h280v80H200Zm0-560h560v-80H200v80Zm0 0v-80 80ZM560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg>\n'),
"edit_note.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path fill="none" d="M0 0h24v24H0z"/><path d="M3 10h11v2H3v-2zm0-2h11V6H3v2zm0 8h7v-2H3v2zm15.01-3.13l.71-.71a.996.996 0 011.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71-2.12-2.12zm-.71.71l-5.3 5.3V21h2.12l5.3-5.3-2.12-2.12z"/>\n</svg>\n'),"email.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.8 2L12 10.8 4.8 6h14.4zM4 18V7.87l8 5.33 8-5.33V18H4z"/>\n  <path d="M0 0h24v24H0V0z" fill="none"/>\n</svg>\n'),
"error.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>\n'),"error_outline.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>\n  <path fill="none" d="M0 0h24v24H0V0z"/>\n</svg>\n'),
"event_available.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M0 0h24v24H0z" fill="none"/>\n  <path\n      d="M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>\n</svg>\n'),"event_busy.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960"><path d="m388-212-56-56 92-92-92-92 56-56 92 92 92-92 56 56-92 92 92 92-56 56-92-92-92 92ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/></svg>\n'),
"face.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10.25 13a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM15 11.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-2 0c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24a10 10 0 01-7.76-3.69A10.016 10.016 0 014 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z"/></svg>\n'),"fast_forward.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 9.86L18.03 12 15 14.14V9.86m-9 0L9.03 12 6 14.14V9.86M13 6v12l8.5-6L13 6zM4 6v12l8.5-6L4 6z"/><path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none"/></svg>\n'),
"featured_video.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM4 6h9v7H4z"/></svg>\n'),"filter_list.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>\n</svg>\n'),"flag.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#455A64"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.36 6l.4 2H18v6h-3.36l-.4-2H7V6h5.36M14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6L14 4z"/></svg>\n'),
"flag_filled.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.5,3.5h-9v17h2v-7h5.6l0.4,2h7v-10h-5.6L13.5,3.5z"/><path d="M0,0h24v24H0V0z" fill="none"/></svg>\n'),"format_bold.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.11 11.76C17.22 10.99 18 9.74 18 8.57 18 5.99 16 4 13.43 4H6v16h8.33c2.39 0 4.24-1.94 4.24-4.33 0-1.74-.98-3.22-2.46-3.91zM9 6.5h4c1.11 0 2 .89 2 2s-.89 2-2 2H9v-4zm4.67 11H9v-4h4.67c1.11 0 2 .89 2 2s-.9 2-2 2z"/></svg>\n'),
"format_clear.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.75 12.75l-2.1-2.1-7.84-7.84-1.42 1.41 8.41 8.41L6.64 20h3l2.26-5.27 7.88 7.88 1.41-1.42zM12.22 7l-.72 1.67 2.1 2.1L15.21 7H21V4H6.83l3 3z"/></svg>\n'),"format_indent_decrease.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/></svg>\n'),
"format_indent_increase.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/></svg>\n'),"format_italic.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 4v3h3.5l-4 10H5v3h10v-3h-3.5l4-10H19V4H9z"/></svg>\n'),"format_list_bulleted.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4.5 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S6 12.83 6 12s-.67-1.5-1.5-1.5zm0-6C3.67 4.5 3 5.17 3 6s.67 1.5 1.5 1.5S6 6.83 6 6s-.67-1.5-1.5-1.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5S6 18.82 6 18s-.67-1.5-1.5-1.5zM8 19h13v-2H8v2zm0-6h13v-2H8v2zm0-8v2h13V5H8z"/></svg>\n'),
"format_list_numbered.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 16h3v4H3v-1h2v-.5H4v-1h1V17H3v-1zm1-8h1V4H3v1h1v3zm-1 3h1.8L3 13.1v.9h3v-1H4.2L6 10.9V10H3v1zm5 8h13v-2H8v2zm0-6h13v-2H8v2zm0-8v2h13V5H8z"/></svg>\n'),"format_quote.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24">\n  <path d="M8 5.99c-2.21 0-4 1.79-4 4s1.79 4 4 4h.01L5.69 18H8l3.46-6-.02-.01c.34-.59.55-1.27.55-2 .01-2.21-1.78-4-3.99-4zm-1.5 4c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm14.5 0c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4h.01L14.69 18H17l3.46-6-.02-.01c.35-.59.56-1.27.56-2zm-5.5 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5z"/>\n</svg>\n'),
"format_underline.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"/></svg>\n'),"forum.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#041E49"><path d="M7 18q-.425 0-.713-.288Q6 17.425 6 17v-2h13V6h2q.425 0 .712.287Q22 6.575 22 7v15l-4-4Zm-5-1V3q0-.425.288-.713Q2.575 2 3 2h13q.425 0 .712.287Q17 2.575 17 3v9q0 .425-.288.712Q16.425 13 16 13H6Zm13-6V4H4v7ZM4 11V4Z"/></svg>\n'),
"google_ads_logo.svg":mn('<svg viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <g id="Logo">\n    <rect id="Rectangle" x="0.491211" y="14.9998" width="14.6659" height="7.33359" transform="rotate(-59.9993 0.491211 14.9998)" fill="#FBBC04"/>\n    <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M21.5088 14.9989L14.175 2.29762C13.1625 0.543871 10.92 -0.0573795 9.16627 0.955121C7.41252 1.96762 6.81127 4.21012 7.82377 5.96387L15.1575 18.6651C16.17 20.4189 18.4125 21.0189 20.1663 20.0076C21.92 18.9951 22.52 16.7526 21.5088 14.9989Z" fill="#4285F4"/>\n    <path id="Oval" fill-rule="evenodd" clip-rule="evenodd" d="M3.66723 20.4988C5.69204 20.4988 7.33348 18.8573 7.33348 16.8325C7.33348 14.8077 5.69204 13.1663 3.66723 13.1663C1.64241 13.1663 0.000976562 14.8077 0.000976562 16.8325C0.000976562 18.8573 1.64241 20.4988 3.66723 20.4988Z" fill="#34A853"/>\n  </g>\n</svg>\n'),
"google_ads_logo_base.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 23" fill="none">\n<rect x="1.67159" y="16.2196" width="15.8659" height="8.53359" transform="rotate(-59.9993 1.67159 16.2196)" fill="white" stroke="#0B57D0" stroke-width="1.2"/>\n<path d="M24.0286 15.7006L24.0284 15.7003L16.6946 2.99909C16.6946 2.99908 16.6946 2.99907 16.6946 2.99906C15.5165 0.958445 12.9071 0.258739 10.8663 1.43697C8.82564 2.6151 8.12592 5.22451 9.30415 7.26533L9.30417 7.26536L16.6379 19.9666C17.8162 22.0075 20.4256 22.7054 22.466 21.5289L22.4663 21.5287C24.5072 20.3504 25.2051 17.741 24.0286 15.7006Z" fill="white" stroke="#0B57D0" stroke-width="1.2"/>\n<path d="M5.66747 22.1005C8.02365 22.1005 9.93372 20.1904 9.93372 17.8342C9.93372 15.478 8.02365 13.568 5.66747 13.568C3.31129 13.568 1.40122 15.478 1.40122 17.8342C1.40122 20.1904 3.31129 22.1005 5.66747 22.1005Z" fill="white" stroke="#0B57D0" stroke-width="1.2"/>\n</svg>\n'),
"google_ads_logo_base_dark.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 23" fill="none">\n<g id="Logo">\n<rect id="Rectangle" x="1.67159" y="16.2196" width="15.8659" height="8.53359" transform="rotate(-59.9993 1.67159 16.2196)" fill="#121821" stroke="#D3E3FD" stroke-width="1.2"/>\n<path id="Path" d="M24.0286 15.7006L24.0284 15.7003L16.6946 2.99909C16.6946 2.99908 16.6946 2.99907 16.6946 2.99906C15.5165 0.958445 12.9071 0.258739 10.8663 1.43697C8.82564 2.6151 8.12592 5.22451 9.30415 7.26533L9.30417 7.26536L16.6379 19.9666C17.8162 22.0075 20.4256 22.7054 22.466 21.5289L22.4663 21.5287C24.5072 20.3504 25.2051 17.741 24.0286 15.7006Z" fill="#121821" stroke="#D3E3FD" stroke-width="1.2"/>\n<path id="Oval" d="M5.66747 22.1005C8.02365 22.1005 9.93372 20.1904 9.93372 17.8342C9.93372 15.478 8.02365 13.568 5.66747 13.568C3.31129 13.568 1.40122 15.478 1.40122 17.8342C1.40122 20.1904 3.31129 22.1005 5.66747 22.1005Z" fill="#121821" stroke="#D3E3FD" stroke-width="1.2"/>\n</g>\n</svg>\n'),
"google_analytics_logo.svg":mn('<?xml version="1.0" encoding="utf-8"?>\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 192 192" xml:space="preserve">\n  <path fill="#F9AB00" d="M130,29v132c0,14.77,10.19,23,21,23c10,0,21-7,21-23V30c0-13.54-10-22-21-22S130,17.33,130,29z"/>\n  <path fill="#E37400" d="M75,96v65c0,14.77,10.19,23,21,23c10,0,21-7,21-23V97c0-13.54-10-22-21-22S75,84.33,75,96z"/>\n  <circle fill="#E37400" cx="41" cy="163" r="21"/>\n</svg>\n'),
"google_ring.svg":mn('<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n<mask id="path-1-inside-1_6663_32132" fill="white">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"/>\n</mask>\n<g clip-path="url(#paint0_angular_6663_32132_clip_path)" data-figma-skip-parse="true" mask="url(#path-1-inside-1_6663_32132)"><g transform="matrix(0.02 0 0 0.02 20 20)"><foreignObject x="-1100" y="-1100" width="2200" height="2200"><div xmlns="http://www.w3.org/1999/xhtml" style="background:conic-gradient(from 90deg,rgba(49, 116, 241, 1) 0deg,rgba(49, 116, 241, 1) 44.2072deg,rgba(36, 154, 65, 1) 44.6321deg,rgba(36, 154, 65, 1) 153.57deg,rgba(246, 173, 1, 1) 153.603deg,rgba(246, 173, 1, 1) 208.159deg,rgba(233, 45, 24, 1) 208.19deg,rgba(233, 45, 24, 1) 312.86deg,rgba(49, 116, 241, 1) 313.173deg,rgba(49, 116, 241, 1) 360deg);height:100%;width:100%;opacity:1"></div></foreignObject></g></g><path d="M20 40V42C32.1503 42 42 32.1503 42 20H40H38C38 29.9411 29.9411 38 20 38V40ZM40 20H42C42 7.84974 32.1503 -2 20 -2V0V2C29.9411 2 38 10.0589 38 20H40ZM20 0V-2C7.84974 -2 -2 7.84974 -2 20H0H2C2 10.0589 10.0589 2 20 2V0ZM0 20H-2C-2 32.1503 7.84974 42 20 42V40V38C10.0589 38 2 29.9411 2 20H0Z" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.19215686619281769,&#34;g&#34;:0.45490196347236633,&#34;b&#34;:0.94509804248809814,&#34;a&#34;:1.0},&#34;position&#34;:0.12279788404703140},{&#34;color&#34;:{&#34;r&#34;:0.14117647707462311,&#34;g&#34;:0.60392159223556519,&#34;b&#34;:0.25490197539329529,&#34;a&#34;:1.0},&#34;position&#34;:0.12397814542055130},{&#34;color&#34;:{&#34;r&#34;:0.14117647707462311,&#34;g&#34;:0.60392159223556519,&#34;b&#34;:0.25490197539329529,&#34;a&#34;:1.0},&#34;position&#34;:0.42658302187919617},{&#34;color&#34;:{&#34;r&#34;:0.96470588445663452,&#34;g&#34;:0.67843139171600342,&#34;b&#34;:0.0039215688593685627,&#34;a&#34;:1.0},&#34;position&#34;:0.42667552828788757},{&#34;color&#34;:{&#34;r&#34;:0.96470588445663452,&#34;g&#34;:0.67843139171600342,&#34;b&#34;:0.0039215688593685627,&#34;a&#34;:1.0},&#34;position&#34;:0.57821923494338989},{&#34;color&#34;:{&#34;r&#34;:0.91372549533843994,&#34;g&#34;:0.17647059261798859,&#34;b&#34;:0.094117648899555206,&#34;a&#34;:1.0},&#34;position&#34;:0.57830667495727539},{&#34;color&#34;:{&#34;r&#34;:0.91372549533843994,&#34;g&#34;:0.17647059261798859,&#34;b&#34;:0.094117648899555206,&#34;a&#34;:1.0},&#34;position&#34;:0.86905503273010254},{&#34;color&#34;:{&#34;r&#34;:0.19215686619281769,&#34;g&#34;:0.45490196347236633,&#34;b&#34;:0.94509804248809814,&#34;a&#34;:1.0},&#34;position&#34;:0.86992377042770386}],&#34;stopsVar&#34;:[],&#34;transform&#34;:{&#34;m00&#34;:40.0,&#34;m01&#34;:0.0,&#34;m02&#34;:0.0,&#34;m10&#34;:0.0,&#34;m11&#34;:40.0,&#34;m12&#34;:0.0},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}" mask="url(#path-1-inside-1_6663_32132)"/>\n<defs>\n<clipPath id="paint0_angular_6663_32132_clip_path"><path d="M20 40V42C32.1503 42 42 32.1503 42 20H40H38C38 29.9411 29.9411 38 20 38V40ZM40 20H42C42 7.84974 32.1503 -2 20 -2V0V2C29.9411 2 38 10.0589 38 20H40ZM20 0V-2C7.84974 -2 -2 7.84974 -2 20H0H2C2 10.0589 10.0589 2 20 2V0ZM0 20H-2C-2 32.1503 7.84974 42 20 42V40V38C10.0589 38 2 29.9411 2 20H0Z" mask="url(#path-1-inside-1_6663_32132)"/></clipPath></defs>\n</svg>\n'),
"help_guide.svg":mn('<svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M14.5352 8.99358L13.7098 9.819C13.596 9.93275 13.596 10.118 13.7098 10.2317L14.8545 11.3765H10.2083C10.0479 11.3765 9.91663 11.5077 9.91663 11.6682V12.8348C9.91663 12.9952 10.0479 13.1265 10.2083 13.1265H14.8545L13.7098 14.2713C13.596 14.385 13.596 14.5702 13.7098 14.684L14.5352 15.5094C14.6489 15.6232 14.8341 15.6232 14.9479 15.5094L17.9987 12.4586C18.1125 12.3448 18.1125 12.1596 17.9987 12.0459L14.9479 8.99504C14.8327 8.87983 14.6489 8.87983 14.5352 8.99358Z" fill="#4688F1"/>\n<path d="M19.3622 17.6123C16.4003 20.5742 11.5995 20.5742 8.63763 17.6123L6.16284 20.0871C8.32701 22.2513 11.1635 23.3333 13.9999 23.3333V26.5417C13.9999 26.7458 14.2041 26.8858 14.3966 26.8144C17.5378 25.6404 20.4224 23.4967 22.4028 20.6515L19.3622 17.6123Z" fill="#3AA757"/>\n<path d="M8.63767 6.88776L6.16288 4.41296C1.83454 8.7413 1.83454 15.7588 6.16288 20.0871L8.63767 17.6123C5.67579 14.6505 5.67579 9.84963 8.63767 6.88776Z" fill="#4688F1"/>\n<path d="M25.0833 12.2603C25.0863 9.42088 24.0042 6.58005 21.8371 4.41296L19.3623 6.88776C22.3242 9.84963 22.3242 14.6505 19.3623 17.6123L22.4015 20.6515C24.0581 18.2715 25.0819 15.4146 25.0833 12.2603Z" fill="#FBBC04"/>\n<path d="M6.16284 4.41294L8.63763 6.88773C11.5995 3.92585 16.4003 3.92585 19.3622 6.88773L21.837 4.41294C17.5087 0.0846037 10.4912 0.0846037 6.16284 4.41294Z" fill="#EA4335"/>\n</svg>\n'),
"help_guide_base.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M 12 15.898438 L 17.027344 10.871094 L 12 5.847656 L 10.417969 7.414062 L 12.746094 9.75 L 7.019531 9.75 L 7.019531 11.992188 L 12.730469 11.992188 L 10.40625 14.332031 Z M 12 1.757812 C 14.582031 1.757812 16.769531 2.640625 18.566406 4.414062 C 20.359375 6.183594 21.253906 8.339844 21.253906 10.886719 C 21.253906 13.15625 20.414062 15.378906 18.730469 17.546875 C 17.046875 19.71875 14.722656 21.589844 11.757812 23.164062 L 11.757812 19.785156 C 10.523438 19.710938 9.359375 19.421875 8.269531 18.925781 C 7.179688 18.425781 6.222656 17.78125 5.40625 16.988281 C 4.589844 16.195312 3.941406 15.289062 3.464844 14.265625 C 2.984375 13.242188 2.746094 12.167969 2.746094 11.042969 C 2.746094 9.75 2.984375 8.542969 3.46875 7.417969 C 3.949219 6.296875 4.609375 5.3125 5.449219 4.46875 C 6.289062 3.625 7.269531 2.960938 8.390625 2.480469 C 9.515625 1.996094 10.71875 1.757812 12 1.757812 Z M 12 4.28125 C 10.128906 4.28125 8.542969 4.941406 7.234375 6.257812 C 5.925781 7.578125 5.269531 9.167969 5.269531 11.027344 C 5.269531 12.695312 5.941406 14.152344 7.285156 15.398438 C 8.628906 16.648438 10.203125 17.273438 12 17.273438 L 14.28125 17.273438 L 14.28125 18.59375 C 15.71875 17.425781 16.820312 16.175781 17.582031 14.847656 C 18.347656 13.515625 18.730469 12.191406 18.730469 10.871094 C 18.730469 9.050781 18.074219 7.496094 16.765625 6.210938 C 15.457031 4.925781 13.871094 4.28125 12 4.28125 Z M 12 11.425781 Z M 12 11.425781 "/>\n</svg>\n'),
"help_guide_dark.svg":mn('<svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M14.5352 8.99358L13.7098 9.819C13.5961 9.93275 13.5961 10.118 13.7098 10.2317L14.8546 11.3765H10.2084C10.0479 11.3765 9.91669 11.5077 9.91669 11.6682V12.8348C9.91669 12.9952 10.0479 13.1265 10.2084 13.1265H14.8546L13.7098 14.2713C13.5961 14.385 13.5961 14.5702 13.7098 14.684L14.5352 15.5094C14.649 15.6232 14.8342 15.6232 14.9479 15.5094L17.9988 12.4586C18.1125 12.3448 18.1125 12.1596 17.9988 12.0459L14.9479 8.99504C14.8327 8.87983 14.649 8.87983 14.5352 8.99358Z" fill="#E3E3E3"/>\n<path d="M19.3623 17.6123C16.4005 20.5742 11.5996 20.5742 8.63776 17.6123L6.16296 20.0871C8.32713 22.2513 11.1636 23.3333 14 23.3333V26.5417C14 26.7458 14.2042 26.8858 14.3967 26.8144C17.538 25.6404 20.4225 23.4967 22.403 20.6515L19.3623 17.6123Z" fill="#E3E3E3"/>\n<path d="M8.63773 6.88776L6.16294 4.41296C1.8346 8.7413 1.8346 15.7588 6.16294 20.0871L8.63773 17.6123C5.67585 14.6505 5.67585 9.84963 8.63773 6.88776Z" fill="#E3E3E3"/>\n<path d="M25.0833 12.2603C25.0863 9.42088 24.0042 6.58005 21.8371 4.41296L19.3623 6.88776C22.3242 9.84963 22.3242 14.6505 19.3623 17.6123L22.4015 20.6515C24.0581 18.2715 25.0819 15.4146 25.0833 12.2603Z" fill="#E3E3E3"/>\n<path d="M6.16296 4.41294L8.63776 6.88773C11.5996 3.92585 16.4005 3.92585 19.3623 6.88773L21.8371 4.41294C17.5088 0.0846037 10.4913 0.0846037 6.16296 4.41294Z" fill="#E3E3E3"/>\n</svg>\n'),
"help_guide_spark.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28">\n  <path fill="#0B57D0" d="M13.668 1.75c2.936 0 5.415 1.02 7.438 3.063 2.041 2.022 3.062 4.5 3.062 7.437 0 2.683-.933 5.28-2.8 7.788-1.867 2.488-4.433 4.56-7.7 6.212v-4.083c-1.42 0-2.77-.263-4.054-.788a11.4 11.4 0 0 1-3.325-2.158 10.692 10.692 0 0 1-2.275-3.15 8.91 8.91 0 0 1-.846-3.821c0-1.458.272-2.82.817-4.083A10.478 10.478 0 0 1 6.23 4.813a10.567 10.567 0 0 1 3.325-2.246 10.42 10.42 0 0 1 4.113-.817Zm0 1.75c-2.43 0-4.501.856-6.213 2.567-1.691 1.691-2.537 3.752-2.537 6.183 0 2.178.865 4.083 2.596 5.717 1.75 1.633 3.801 2.45 6.154 2.45h1.75v2.829c2.236-1.711 3.957-3.51 5.163-5.396 1.224-1.906 1.837-3.772 1.837-5.6 0-2.43-.856-4.492-2.567-6.183C18.16 4.356 16.1 3.5 13.668 3.5Z"/>\n  <path fill="#0B57D0" d="M13.677 19.054c-.023 0-.034-.011-.034-.034a6.55 6.55 0 0 0-.528-2.62 6.806 6.806 0 0 0-1.446-2.144 6.807 6.807 0 0 0-2.144-1.446 6.555 6.555 0 0 0-2.62-.527c-.023 0-.034-.012-.034-.035 0-.022.011-.034.034-.034.93 0 1.804-.175 2.62-.527a6.809 6.809 0 0 0 2.144-1.446 6.807 6.807 0 0 0 1.446-2.144 6.55 6.55 0 0 0 .528-2.62c0-.023.011-.034.034-.034.022 0 .034.011.034.034 0 .93.175 1.803.527 2.62a6.807 6.807 0 0 0 1.446 2.144 6.809 6.809 0 0 0 2.144 1.446c.817.352 1.69.527 2.62.527.023 0 .034.012.034.034 0 .023-.011.035-.034.035-.93 0-1.803.175-2.62.527a6.807 6.807 0 0 0-2.144 1.446 6.806 6.806 0 0 0-1.446 2.144 6.555 6.555 0 0 0-.527 2.62c0 .023-.012.034-.034.034Z"/>\n</svg>\n'),
"help_outline.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M0 0h24v24H0V0z" fill="none"/>\n  <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/>\n</svg>\n'),"highlight_alt.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 5h-2V3h2v2zm-2 16h2v-2.59L19.59 21 21 19.59 18.41 17H21v-2h-6v6zm4-12h2V7h-2v2zm0 4h2v-2h-2v2zm-8 8h2v-2h-2v2zM7 5h2V3H7v2zM3 17h2v-2H3v2zm2 4v-2H3c0 1.1.9 2 2 2zM19 3v2h2c0-1.1-.9-2-2-2zm-8 2h2V3h-2v2zM3 9h2V7H3v2zm4 12h2v-2H7v2zm-4-8h2v-2H3v2zm0-8h2V3c-1.1 0-2 .9-2 2z"/></svg>\n'),
"info.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M0 0h24v24H0V0z" fill="none"/>\n  <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10\n           10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59\n           8 8-3.59 8-8 8z"/>\n</svg>\n'),"info_filled.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>\n'),
"information_spark_icon.svg":mn('<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g id="information_spark_icon">\n<g id="Group 1">\n<path id="particle" d="M19.6189 0.670481C18.3465 -0.223494 16.6535 -0.223494 15.3811 0.670481C14.5604 1.24713 13.5418 1.46458 12.5584 1.27306C11.034 0.97614 9.48736 1.66775 8.68702 3.0042C8.17077 3.86627 7.32829 4.48103 6.35243 4.70774C4.83956 5.05922 3.70669 6.32285 3.51679 7.8707C3.39429 8.86913 2.87361 9.77489 2.07393 10.3806C0.834194 11.3198 0.311012 12.9369 0.764374 14.4285C1.05681 15.3907 0.94796 16.4308 0.462738 17.3109C-0.289497 18.6752 -0.11253 20.3663 0.905708 21.5438C1.56251 22.3033 1.88431 23.2979 1.79744 24.3001C1.66277 25.8538 2.50929 27.3264 3.91634 27.9861C4.82395 28.4116 5.52076 29.1889 5.84726 30.1399C6.35345 31.6143 7.72314 32.6137 9.27571 32.6416C10.2772 32.6596 11.2285 33.085 11.9119 33.8204C12.9715 34.9606 14.6275 35.3141 16.0571 34.7054C16.9793 34.3127 18.0207 34.3127 18.9429 34.7054C20.3725 35.3141 22.0285 34.9606 23.0881 33.8204C23.7715 33.085 24.7228 32.6596 25.7243 32.6416C27.2769 32.6137 28.6466 31.6143 29.1527 30.1399C29.4792 29.1889 30.1761 28.4116 31.0837 27.9861C32.4907 27.3264 33.3372 25.8538 33.2026 24.3001C33.1157 23.2979 33.4375 22.3033 34.0943 21.5437C35.1125 20.3663 35.2895 18.6752 34.5373 17.3109C34.052 16.4308 33.9432 15.3907 34.2356 14.4285C34.689 12.9369 34.1658 11.3198 32.9261 10.3806C32.1264 9.77489 31.6057 8.86913 31.4832 7.8707C31.2933 6.32285 30.1604 5.05922 28.6476 4.70774C27.6717 4.48103 26.8292 3.86627 26.313 3.0042C25.5126 1.66775 23.966 0.97614 22.4416 1.27306C21.4582 1.46458 20.4396 1.24713 19.6189 0.670481Z" fill="#B3261E"/>\n<path id="Vector" d="M16.4286 22.7619V16.4762H18.5238V22.7619H16.4286ZM17.4762 15.4286C17.1794 15.4286 16.9306 15.3282 16.7298 15.1274C16.529 14.9266 16.4286 14.6778 16.4286 14.381C16.4286 14.0841 16.529 13.8353 16.7298 13.6345C16.9306 13.4337 17.1794 13.3333 17.4762 13.3333C17.773 13.3333 18.0218 13.4337 18.2226 13.6345C18.4234 13.8353 18.5238 14.0841 18.5238 14.381C18.5238 14.6778 18.4234 14.9266 18.2226 15.1274C18.0218 15.3282 17.773 15.4286 17.4762 15.4286ZM25.7 15.9524L27.4286 14.2238C27.6032 14.7476 27.7341 15.2845 27.8214 15.8345C27.9087 16.3845 27.9524 16.9476 27.9524 17.5238C27.9524 18.973 27.6774 20.3349 27.1274 21.6095C26.5774 22.8841 25.831 23.9929 24.8881 24.9357C23.9452 25.8786 22.8365 26.625 21.5619 27.175C20.2873 27.725 18.9254 28 17.4762 28C16.027 28 14.6651 27.725 13.3905 27.175C12.1159 26.625 11.0071 25.8786 10.0643 24.9357C9.12143 23.9929 8.375 22.8841 7.825 21.6095C7.275 20.3349 7 18.973 7 17.5238C7 16.0746 7.275 14.7127 7.825 13.4381C8.375 12.1635 9.12143 11.0548 10.0643 10.1119C11.0071 9.16905 12.1159 8.42262 13.3905 7.87262C14.6651 7.32262 16.027 7.04762 17.4762 7.04762C18.0524 7.04762 18.6155 7.09127 19.1655 7.17857C19.7155 7.26587 20.2524 7.39683 20.7762 7.57143L19.0476 9.3C18.7857 9.24762 18.5282 9.20833 18.275 9.18214C18.0218 9.15595 17.7556 9.14286 17.4762 9.14286C15.1365 9.14286 13.1548 9.95476 11.531 11.5786C9.90714 13.2024 9.09524 15.1841 9.09524 17.5238C9.09524 19.8635 9.90714 21.8452 11.531 23.469C13.1548 25.0929 15.1365 25.9048 17.4762 25.9048C19.8159 25.9048 21.7976 25.0929 23.4214 23.469C25.0452 21.8452 25.8571 19.8635 25.8571 17.5238C25.8571 17.2444 25.844 16.9782 25.8179 16.725C25.7917 16.4718 25.7524 16.2143 25.7 15.9524ZM23.2381 17.5238C23.2381 15.9175 22.6794 14.5556 21.5619 13.4381C20.4444 12.3206 19.0825 11.7619 17.4762 11.7619C19.0825 11.7619 20.4444 11.2032 21.5619 10.0857C22.6794 8.96825 23.2381 7.60635 23.2381 6C23.2381 7.60635 23.7968 8.96825 24.9143 10.0857C26.0317 11.2032 27.3937 11.7619 29 11.7619C27.3937 11.7619 26.0317 12.3206 24.9143 13.4381C23.7968 14.5556 23.2381 15.9175 23.2381 17.5238Z" fill="white"/>\n</g>\n</g>\n</svg>\n'),
"information_spark_primary.svg":mn('<svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M6.4 11.2V7.2H7.6V11.2H6.4ZM7 6.4C6.83333 6.4 6.68889 6.34444 6.56667 6.23333C6.45556 6.11111 6.4 5.96667 6.4 5.8C6.4 5.63333 6.45556 5.49444 6.56667 5.38333C6.68889 5.26111 6.83333 5.2 7 5.2C7.16667 5.2 7.30556 5.26111 7.41667 5.38333C7.53889 5.49444 7.6 5.63333 7.6 5.8C7.6 5.96667 7.53889 6.11111 7.41667 6.23333C7.30556 6.34444 7.16667 6.4 7 6.4ZM12.1167 7.1L13.1167 6.1C13.2167 6.41111 13.2889 6.72222 13.3333 7.03333C13.3778 7.34444 13.4 7.66667 13.4 8C13.4 8.87778 13.2333 9.70556 12.9 10.4833C12.5667 11.2611 12.1056 11.9444 11.5167 12.5333C10.9389 13.1111 10.2611 13.5667 9.48333 13.9C8.71667 14.2333 7.88889 14.4 7 14.4C6.12222 14.4 5.29444 14.2333 4.51667 13.9C3.73889 13.5667 3.05556 13.1111 2.46667 12.5333C1.88889 11.9444 1.43333 11.2611 1.1 10.4833C0.766667 9.70556 0.6 8.87778 0.6 8C0.6 7.11111 0.766667 6.28333 1.1 5.51667C1.43333 4.73889 1.88889 4.06111 2.46667 3.48333C3.05556 2.89444 3.73889 2.43333 4.51667 2.1C5.29444 1.76667 6.12222 1.6 7 1.6C7.33333 1.6 7.65556 1.62222 7.96667 1.66667C8.27778 1.71111 8.58889 1.78333 8.9 1.88333L7.9 2.88333C7.74444 2.86111 7.59444 2.84444 7.45 2.83333C7.30556 2.81111 7.15556 2.8 7 2.8C5.55556 2.8 4.32778 3.30555 3.31667 4.31667C2.30556 5.32778 1.8 6.55556 1.8 8C1.8 9.44444 2.30556 10.6722 3.31667 11.6833C4.32778 12.6944 5.55556 13.2 7 13.2C8.44444 13.2 9.67222 12.6944 10.6833 11.6833C11.6944 10.6722 12.2 9.44444 12.2 8C12.2 7.84444 12.1889 7.69444 12.1667 7.55C12.1556 7.40556 12.1389 7.25556 12.1167 7.1ZM10.6 8C10.6 7 10.25 6.15 9.55 5.45C8.85 4.75 8 4.4 7 4.4C8 4.4 8.85 4.05 9.55 3.35C10.25 2.65 10.6 1.8 10.6 0.799999C10.6 1.8 10.95 2.65 11.65 3.35C12.35 4.05 13.2 4.4 14.2 4.4C13.2 4.4 12.35 4.75 11.65 5.45C10.95 6.15 10.6 7 10.6 8Z" fill="#0B57D0"/>\n</svg>\n'),
"information_spark_primary_dark.svg":mn('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_8773_21475)">\n<path d="M10.8917 17.8333V10.8333H13.1375V17.8333H10.8917ZM12 9.69583C11.6889 9.69583 11.4167 9.58889 11.1833 9.375C10.9694 9.16111 10.8625 8.88889 10.8625 8.55833C10.8625 8.24722 10.9694 7.98472 11.1833 7.77083C11.3972 7.5375 11.6694 7.42083 12 7.42083C12.3111 7.42083 12.5736 7.5375 12.7875 7.77083C13.0208 7.98472 13.1375 8.24722 13.1375 8.55833C13.1375 8.88889 13.0306 9.16111 12.8167 9.375C12.6028 9.58889 12.3306 9.69583 12 9.69583ZM21.2167 10.1042L23.0542 8.26667C23.2681 8.85 23.4236 9.45278 23.5208 10.075C23.6181 10.6972 23.6667 11.3389 23.6667 12C23.6667 13.6139 23.3556 15.1306 22.7333 16.55C22.1306 17.9694 21.3042 19.2042 20.2542 20.2542C19.2042 21.3042 17.9694 22.1403 16.55 22.7625C15.1306 23.3653 13.6139 23.6667 12 23.6667C10.3861 23.6667 8.86944 23.3653 7.45 22.7625C6.03056 22.1403 4.79583 21.3042 3.74583 20.2542C2.69583 19.2042 1.85972 17.9694 1.2375 16.55C0.634722 15.1306 0.333333 13.6139 0.333333 12C0.333333 10.3861 0.634722 8.86944 1.2375 7.45C1.85972 6.03055 2.69583 4.79583 3.74583 3.74583C4.79583 2.69583 6.03056 1.86944 7.45 1.26667C8.86944 0.644444 10.3861 0.333333 12 0.333333C12.6611 0.333333 13.3028 0.381944 13.925 0.479166C14.5472 0.576387 15.15 0.731943 15.7333 0.945832L13.8958 2.78333C13.5847 2.70555 13.2736 2.65694 12.9625 2.6375C12.6514 2.59861 12.3306 2.57917 12 2.57917C9.375 2.57917 7.14861 3.49305 5.32083 5.32083C3.49306 7.14861 2.57917 9.375 2.57917 12C2.57917 14.625 3.49306 16.8514 5.32083 18.6792C7.14861 20.5069 9.375 21.4208 12 21.4208C14.625 21.4208 16.8514 20.5069 18.6792 18.6792C20.5069 16.8514 21.4208 14.625 21.4208 12C21.4208 11.6694 21.4014 11.3486 21.3625 11.0375C21.3431 10.7264 21.2944 10.4153 21.2167 10.1042ZM18.4167 11.9417C18.4167 10.1722 17.7944 8.675 16.55 7.45C15.325 6.20555 13.8278 5.58333 12.0583 5.58333C13.8278 5.58333 15.325 4.97083 16.55 3.74583C17.7944 2.50139 18.4167 0.994443 18.4167 -0.775002C18.4167 0.994443 19.0292 2.50139 20.2542 3.74583C21.4986 4.97083 23.0056 5.58333 24.775 5.58333C23.0056 5.58333 21.4986 6.20555 20.2542 7.45C19.0292 8.675 18.4167 10.1722 18.4167 11.9417Z" fill="#D3E3FD"/>\n</g>\n<defs>\n<clipPath id="clip0_8773_21475">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>\n</svg>\n'),
"information_spark_warn.svg":mn('<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g id="information_spark_icon">\n<g id="Group 1">\n<path id="particle" d="M19.6189 0.670481C18.3465 -0.223494 16.6535 -0.223494 15.3811 0.670481C14.5604 1.24713 13.5418 1.46458 12.5584 1.27306C11.034 0.97614 9.48736 1.66775 8.68702 3.0042C8.17077 3.86627 7.32829 4.48103 6.35243 4.70774C4.83956 5.05922 3.70669 6.32285 3.51679 7.8707C3.39429 8.86913 2.87361 9.77489 2.07393 10.3806C0.834194 11.3198 0.311012 12.9369 0.764374 14.4285C1.05681 15.3907 0.94796 16.4308 0.462738 17.3109C-0.289497 18.6752 -0.11253 20.3663 0.905708 21.5438C1.56251 22.3033 1.88431 23.2979 1.79744 24.3001C1.66277 25.8538 2.50929 27.3264 3.91634 27.9861C4.82395 28.4116 5.52076 29.1889 5.84726 30.1399C6.35345 31.6143 7.72314 32.6137 9.27571 32.6416C10.2772 32.6596 11.2285 33.085 11.9119 33.8204C12.9715 34.9606 14.6275 35.3141 16.0571 34.7054C16.9793 34.3127 18.0207 34.3127 18.9429 34.7054C20.3725 35.3141 22.0285 34.9606 23.0881 33.8204C23.7715 33.085 24.7228 32.6596 25.7243 32.6416C27.2769 32.6137 28.6466 31.6143 29.1527 30.1399C29.4792 29.1889 30.1761 28.4116 31.0837 27.9861C32.4907 27.3264 33.3372 25.8538 33.2026 24.3001C33.1157 23.2979 33.4375 22.3033 34.0943 21.5437C35.1125 20.3663 35.2895 18.6752 34.5373 17.3109C34.052 16.4308 33.9432 15.3907 34.2356 14.4285C34.689 12.9369 34.1658 11.3198 32.9261 10.3806C32.1264 9.77489 31.6057 8.86913 31.4832 7.8707C31.2933 6.32285 30.1604 5.05922 28.6476 4.70774C27.6717 4.48103 26.8292 3.86627 26.313 3.0042C25.5126 1.66775 23.966 0.97614 22.4416 1.27306C21.4582 1.46458 20.4396 1.24713 19.6189 0.670481Z" fill="#1A73E8"/>\n<path id="Vector" d="M16.4286 22.7619V16.4762H18.5238V22.7619H16.4286ZM17.4762 15.4286C17.1794 15.4286 16.9306 15.3282 16.7298 15.1274C16.529 14.9266 16.4286 14.6778 16.4286 14.381C16.4286 14.0841 16.529 13.8353 16.7298 13.6345C16.9306 13.4337 17.1794 13.3333 17.4762 13.3333C17.773 13.3333 18.0218 13.4337 18.2226 13.6345C18.4234 13.8353 18.5238 14.0841 18.5238 14.381C18.5238 14.6778 18.4234 14.9266 18.2226 15.1274C18.0218 15.3282 17.773 15.4286 17.4762 15.4286ZM25.7 15.9524L27.4286 14.2238C27.6032 14.7476 27.7341 15.2845 27.8214 15.8345C27.9087 16.3845 27.9524 16.9476 27.9524 17.5238C27.9524 18.973 27.6774 20.3349 27.1274 21.6095C26.5774 22.8841 25.831 23.9929 24.8881 24.9357C23.9452 25.8786 22.8365 26.625 21.5619 27.175C20.2873 27.725 18.9254 28 17.4762 28C16.027 28 14.6651 27.725 13.3905 27.175C12.1159 26.625 11.0071 25.8786 10.0643 24.9357C9.12143 23.9929 8.375 22.8841 7.825 21.6095C7.275 20.3349 7 18.973 7 17.5238C7 16.0746 7.275 14.7127 7.825 13.4381C8.375 12.1635 9.12143 11.0548 10.0643 10.1119C11.0071 9.16905 12.1159 8.42262 13.3905 7.87262C14.6651 7.32262 16.027 7.04762 17.4762 7.04762C18.0524 7.04762 18.6155 7.09127 19.1655 7.17857C19.7155 7.26587 20.2524 7.39683 20.7762 7.57143L19.0476 9.3C18.7857 9.24762 18.5282 9.20833 18.275 9.18214C18.0218 9.15595 17.7556 9.14286 17.4762 9.14286C15.1365 9.14286 13.1548 9.95476 11.531 11.5786C9.90714 13.2024 9.09524 15.1841 9.09524 17.5238C9.09524 19.8635 9.90714 21.8452 11.531 23.469C13.1548 25.0929 15.1365 25.9048 17.4762 25.9048C19.8159 25.9048 21.7976 25.0929 23.4214 23.469C25.0452 21.8452 25.8571 19.8635 25.8571 17.5238C25.8571 17.2444 25.844 16.9782 25.8179 16.725C25.7917 16.4718 25.7524 16.2143 25.7 15.9524ZM23.2381 17.5238C23.2381 15.9175 22.6794 14.5556 21.5619 13.4381C20.4444 12.3206 19.0825 11.7619 17.4762 11.7619C19.0825 11.7619 20.4444 11.2032 21.5619 10.0857C22.6794 8.96825 23.2381 7.60635 23.2381 6C23.2381 7.60635 23.7968 8.96825 24.9143 10.0857C26.0317 11.2032 27.3937 11.7619 29 11.7619C27.3937 11.7619 26.0317 12.3206 24.9143 13.4381C23.7968 14.5556 23.2381 15.9175 23.2381 17.5238Z" fill="white"/>\n</g>\n</g>\n</svg>\n'),
"information_spark_warn_dark.svg":mn('<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g id="information_spark_icon">\n<g id="Group 1">\n<path id="particle" d="M19.6189 0.670481C18.3465 -0.223494 16.6535 -0.223494 15.3811 0.670481C14.5604 1.24713 13.5418 1.46458 12.5584 1.27306C11.034 0.97614 9.48736 1.66775 8.68702 3.0042C8.17077 3.86627 7.32829 4.48103 6.35243 4.70774C4.83956 5.05922 3.70669 6.32285 3.51679 7.8707C3.39429 8.86913 2.87361 9.77489 2.07393 10.3806C0.834194 11.3198 0.311012 12.9369 0.764374 14.4285C1.05681 15.3907 0.94796 16.4308 0.462738 17.3109C-0.289497 18.6752 -0.11253 20.3663 0.905708 21.5438C1.56251 22.3033 1.88431 23.2979 1.79744 24.3001C1.66277 25.8538 2.50929 27.3264 3.91634 27.9861C4.82395 28.4116 5.52076 29.1889 5.84726 30.1399C6.35345 31.6143 7.72314 32.6137 9.27571 32.6416C10.2772 32.6596 11.2285 33.085 11.9119 33.8204C12.9715 34.9606 14.6275 35.3141 16.0571 34.7054C16.9793 34.3127 18.0207 34.3127 18.9429 34.7054C20.3725 35.3141 22.0285 34.9606 23.0881 33.8204C23.7715 33.085 24.7228 32.6596 25.7243 32.6416C27.2769 32.6137 28.6466 31.6143 29.1527 30.1399C29.4792 29.1889 30.1761 28.4116 31.0837 27.9861C32.4907 27.3264 33.3372 25.8538 33.2026 24.3001C33.1157 23.2979 33.4375 22.3033 34.0943 21.5437C35.1125 20.3663 35.2895 18.6752 34.5373 17.3109C34.052 16.4308 33.9432 15.3907 34.2356 14.4285C34.689 12.9369 34.1658 11.3198 32.9261 10.3806C32.1264 9.77489 31.6057 8.86913 31.4832 7.8707C31.2933 6.32285 30.1604 5.05922 28.6476 4.70774C27.6717 4.48103 26.8292 3.86627 26.313 3.0042C25.5126 1.66775 23.966 0.97614 22.4416 1.27306C21.4582 1.46458 20.4396 1.24713 19.6189 0.670481Z" fill="#D3E3FD"/>\n<path id="Vector" d="M16.4286 22.7619V16.4762H18.5238V22.7619H16.4286ZM17.4762 15.4286C17.1794 15.4286 16.9306 15.3282 16.7298 15.1274C16.529 14.9266 16.4286 14.6778 16.4286 14.381C16.4286 14.0841 16.529 13.8353 16.7298 13.6345C16.9306 13.4337 17.1794 13.3333 17.4762 13.3333C17.773 13.3333 18.0218 13.4337 18.2226 13.6345C18.4234 13.8353 18.5238 14.0841 18.5238 14.381C18.5238 14.6778 18.4234 14.9266 18.2226 15.1274C18.0218 15.3282 17.773 15.4286 17.4762 15.4286ZM25.7 15.9524L27.4286 14.2238C27.6032 14.7476 27.7341 15.2845 27.8214 15.8345C27.9087 16.3845 27.9524 16.9476 27.9524 17.5238C27.9524 18.973 27.6774 20.3349 27.1274 21.6095C26.5774 22.8841 25.831 23.9929 24.8881 24.9357C23.9452 25.8786 22.8365 26.625 21.5619 27.175C20.2873 27.725 18.9254 28 17.4762 28C16.027 28 14.6651 27.725 13.3905 27.175C12.1159 26.625 11.0071 25.8786 10.0643 24.9357C9.12143 23.9929 8.375 22.8841 7.825 21.6095C7.275 20.3349 7 18.973 7 17.5238C7 16.0746 7.275 14.7127 7.825 13.4381C8.375 12.1635 9.12143 11.0548 10.0643 10.1119C11.0071 9.16905 12.1159 8.42262 13.3905 7.87262C14.6651 7.32262 16.027 7.04762 17.4762 7.04762C18.0524 7.04762 18.6155 7.09127 19.1655 7.17857C19.7155 7.26587 20.2524 7.39683 20.7762 7.57143L19.0476 9.3C18.7857 9.24762 18.5282 9.20833 18.275 9.18214C18.0218 9.15595 17.7556 9.14286 17.4762 9.14286C15.1365 9.14286 13.1548 9.95476 11.531 11.5786C9.90714 13.2024 9.09524 15.1841 9.09524 17.5238C9.09524 19.8635 9.90714 21.8452 11.531 23.469C13.1548 25.0929 15.1365 25.9048 17.4762 25.9048C19.8159 25.9048 21.7976 25.0929 23.4214 23.469C25.0452 21.8452 25.8571 19.8635 25.8571 17.5238C25.8571 17.2444 25.844 16.9782 25.8179 16.725C25.7917 16.4718 25.7524 16.2143 25.7 15.9524ZM23.2381 17.5238C23.2381 15.9175 22.6794 14.5556 21.5619 13.4381C20.4444 12.3206 19.0825 11.7619 17.4762 11.7619C19.0825 11.7619 20.4444 11.2032 21.5619 10.0857C22.6794 8.96825 23.2381 7.60635 23.2381 6C23.2381 7.60635 23.7968 8.96825 24.9143 10.0857C26.0317 11.2032 27.3937 11.7619 29 11.7619C27.3937 11.7619 26.0317 12.3206 24.9143 13.4381C23.7968 14.5556 23.2381 15.9175 23.2381 17.5238Z" fill="#121821"/>\n</g>\n</g>\n</svg>\n'),
"intent.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed">\n  <path d="M496-480ZM80-160l240-320L80-800h520q19 0 36 8.5t28 23.5l216 288-5 7q-27-18-58.5-29.5T751-518L600-720H240l180 240-180 240h200q0 21 3 41t9 39H80Zm611 10 139-138-42-42-97 95-39-39-42 43 81 81Zm29 110q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Z"></path>\n</svg>\n'),"keep_pin_outline.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M0 0h24v24H0z" fill="none"/>\n  <path d="M17 4v7l2 3v2h-6v5l-1 1-1-1v-5H5v-2l2-3V4c0-1.1.9-2 2-2h6c1.11 0 2\n           .89 2 2zM9 4v7.75L7.5 14h9L15 11.75V4H9z"/>\n</svg>\n'),
"keyboard_arrow_down.svg":mn('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_4580_10845)">\n<path d="M12 15.4L6 9.4L7.4 8L12 12.6L16.6 8L18 9.4L12 15.4Z" fill="#0B57D0"/>\n</g>\n<defs>\n<clipPath id="clip0_4580_10845">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>\n</svg>\n'),"keyboard_arrow_up.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M0 0h24v24H0V0z" fill="none"/>\n  <path d="M17.29 15.71L12 10.41l-5.29 5.3-1.42-1.42L12 7.59l6.71 6.7z"/>\n</svg>\n'),
"label.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M0 0h24v24H0V0z" fill="none"/>\n  <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0\n           1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16\n           17H5V7h11l3.55 5L16 17z"/>\n</svg>\n'),"label_off.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M0 0h24v24H0V0z" fill="none"/>\n  <path d="M15.98 6.99l3.57 4.99-1.95 2.77 1.44 1.43 2.96-4.2-4.39-6.15A1.96\n           1.96 0 0 0 15.98 5l-8.17.02 2 1.99 6.17-.02zm.45 9.41L6.98\n           7.01l-2-1.98-2.21-2.2-1.4 1.42L3.22 6.1c-.15.28-.24.59-.24.93l.03\n           10c0 1.1.91 1.99 2.01 1.98l11-.02c.05 0 .1-.01.15-.02l3.64 3.61\n           1.41-1.42-3.35-3.33-1.44-1.43zm-11.42.62l-.03-9.17 9.2\n           9.14-9.17.03z"/>\n</svg>\n'),
"language.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>\n'),
"lightbulb.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#455A64"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/></svg>\n'),"link.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"/></svg>\n'),
"list_alt.svg":mn('\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#444746">\n  <path d="M8 17q.425 0 .713-.288Q9 16.425 9 16t-.287-.713Q8.425 15 8 15t-.713.287Q7 15.575 7 16t.287.712Q7.575 17 8 17Zm0-4q.425 0 .713-.288Q9 12.425 9 12t-.287-.713Q8.425 11 8 11t-.713.287Q7 11.575 7 12t.287.712Q7.575 13 8 13Zm0-4q.425 0 .713-.288Q9 8.425 9 8t-.287-.713Q8.425 7 8 7t-.713.287Q7 7.575 7 8t.287.712Q7.575 9 8 9Zm3 8h6v-2h-6Zm0-4h6v-2h-6Zm0-4h6V7h-6ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14ZM5 5v14V5Z"/>\n</svg>\n'),
"list_alt_dark.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#C4C7C5">\n  <path d="M8.075 16.825q.4 0 .675-.275t.275-.65q0-.4-.275-.675t-.675-.275q-.375 0-.65.275t-.275.675q0 .375.275.65t.65.275Zm0-3.9q.4 0 .675-.275t.275-.65q0-.4-.275-.675t-.675-.275q-.375 0-.65.275T7.15 12q0 .375.275.65t.65.275Zm0-3.925q.4 0 .675-.275t.275-.65q0-.4-.275-.675t-.675-.275q-.375 0-.65.275t-.275.675q0 .375.275.65t.65.275Zm2.95 7.85h5.85v-1.875h-5.85Zm0-3.925h5.85V11.05h-5.85Zm0-3.9h5.85V7.15h-5.85ZM5.1 20.775q-.775 0-1.325-.55-.55-.55-.55-1.325V5.1q0-.775.55-1.325.55-.55 1.325-.55h13.8q.775 0 1.325.55.55.55.55 1.325v13.8q0 .775-.55 1.325-.55.55-1.325.55Zm0-1.875h13.8V5.1H5.1v13.8Zm0-13.8v13.8V5.1Z"/>\n</svg>\n'),
"lock.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/>\n  <path d="M0 0h24v24H0V0z" fill="none"/>\n  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0\n           1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3\n           3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9\n           2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>\n</svg>\n'),"lock_open.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M0 0h24v24H0V0z" fill="none"/>\n  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3\n           3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9\n           2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/>\n  <circle cx="12" cy="15" r="2"/>\n</svg>\n'),
"lock_person.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M18 18q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q18.625 15 18 15t-1.062.438q-.438.437-.438 1.062t.438 1.062Q17.375 18 18 18Zm0 3q.75 0 1.4-.35.65-.35 1.075-.975-.575-.35-1.2-.512Q18.65 19 18 19q-.65 0-1.275.163-.625.162-1.2.512.425.625 1.075.975.65.35 1.4.35ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6Zm3.25 14H6q-.825 0-1.412-.587Q4 20.825 4 20V10q0-.825.588-1.413Q5.175 8 6 8h1V6q0-2.075 1.463-3.538Q9.925 1 12 1t3.538 1.462Q17 3.925 17 6v2h1q.825 0 1.413.587Q20 9.175 20 10v1.3q-.45-.15-.938-.225Q18.575 11 18 11v-1H6v10h5.3q.2.6.4 1.038.2.437.55.962ZM18 23q-2.075 0-3.537-1.462Q13 20.075 13 18q0-2.075 1.463-3.538Q15.925 13 18 13t3.538 1.462Q23 15.925 23 18q0 2.075-1.462 3.538Q20.075 23 18 23ZM6 10v10-10Z"/>\n</svg>\n'),
"mail_outline.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"/></svg>\n'),"mark_chat_read.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24">\n<path d="M18.2708 21.3333L14.1875 17.2208L15.7625 15.675L18.2708 18.1833L23.2583 13.1958L24.8333 14.7708L18.2708 21.3333ZM0.333333 23.6667V2.57917C0.333333 1.95694 0.547222 1.43194 0.975 1.00417C1.42222 0.556944 1.95694 0.333333 2.57917 0.333333H21.4208C22.0431 0.333333 22.5681 0.556944 22.9958 1.00417C23.4431 1.43194 23.6667 1.95694 23.6667 2.57917V10.8917H21.4208V2.57917H2.57917V18.2417L4.0375 16.7542H12.0583V19H5L0.333333 23.6667ZM2.57917 16.7542V2.57917V16.7542Z"/>\n</svg>\n'),
"mark_chat_unread.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#041E49"><path d="M80-80v-720q0-33 23.5-56.5T160-880h404q-4 20-4 40t4 40H160v525l46-45h594v-324q23-5 43-13.5t37-22.5v360q0 33-23.5 56.5T800-240H240L80-80Zm80-720v480-480Zm600 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/></svg>\n'),"mark_email_read.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 25 25">\n<path d="M16.5792 21.6667L11.6792 16.7667L13.225 15.1917L16.5792 18.5167L23.2583 11.8375L24.8333 13.4125L16.5792 21.6667ZM12 8.80417L21.3917 2.9125H2.57917L12 8.80417ZM12 11.0208L2.57917 5.12917V17.0292H8.82083L11.0667 19.275H2.57917C1.95694 19.275 1.42222 19.0611 0.975 18.6333C0.547222 18.1861 0.333333 17.6514 0.333333 17.0292V2.9125C0.333333 2.29028 0.547222 1.76528 0.975 1.3375C1.42222 0.890277 1.95694 0.666666 2.57917 0.666666H21.4208C22.0236 0.666666 22.5389 0.890277 22.9667 1.3375C23.4139 1.76528 23.6375 2.29028 23.6375 2.9125V8.30833L21.4208 10.5542V5.12917L12 11.0208Z"/>\n</svg>\n'),
"mark_email_unread.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#041E49"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h404q-4 20-4 40t4 40H160l320 200 146-91q14 13 30.5 22.5T691-572L480-440 160-640v400h640v-324q23-5 43-14t37-22v360q0 33-23.5 56.5T800-160H160Zm0-560v480-480Zm600 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/></svg>\n'),"maximize.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 3h18v2H3V3z"/></svg>\n'),
"minimize.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19h12v2H6v-2z"/></svg>\n'),"mode_edit.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0L13.4 6.41 3 16.82V21h4.18l10.46-10.46 2.77-2.77c.79-.78.79-2.05 0-2.83zm-14 14.12L5 19v-1.36l9.82-9.82 1.41 1.41-9.82 9.83z"/>\n  <path fill="none" d="M0 0h24v24H0V0z"/>\n</svg>\n'),"more_vert.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M0 0h24v24H0V0z" fill="none"/>\n  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>\n</svg>\n'),
"navigate_before.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>\n'),"navigate_next.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>\n'),"notifications.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 17v-6c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v6H4v2h16v-2h-2zm-2 0H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z"/></svg>\n'),
"open_in_new.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>\n'),"pen_spark.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="#041E49">\n  <path d="M260 876h44l485-485-44-44-485 485v44Zm-60 60V808l588-588q17-17 42.5-16.5t42.863 17.784l42.274 42.834Q933 281.402 933 306.201T916 348L328 936H200Zm589-545-44-44 44 44ZM260 566q0-87.818-61.091-148.909Q137.818 356 50 356q87.818 0 148.909-61.091Q260 233.818 260 146q0 87.818 61.091 148.909Q382.182 356 470 356q-87.818 0-148.909 61.091Q260 478.182 260 566Z"/>\n</svg>\n'),
"person_add.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960"><path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z"/></svg>\n'),
"phone.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M16.01 14.46l-2.62 2.62c-2.75-1.49-5.01-3.75-6.5-6.5l2.62-2.62c.24-.24.34-.58.27-.9L9.13 3.8c-.09-.46-.5-.8-.98-.8H4c-.56 0-1.03.47-1 1.03.17 2.91 1.04 5.63 2.43 8.01 1.57 2.69 3.81 4.93 6.5 6.5 2.38 1.39 5.1 2.26 8.01 2.43.56.03 1.03-.44 1.03-1v-4.15c0-.48-.34-.89-.8-.98l-3.26-.65c-.33-.07-.67.04-.9.27z"/>\n  <path d="M0 0h24v24H0V0z" fill="none"/>\n</svg>\n'),"play_arrow.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/>\n  <path fill="none" d="M0 0h24v24H0V0z"/>\n</svg>\n'),
"play_circle.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M0 0h24v24H0V0z" fill="none"/>\n  <path\n      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>\n</svg>\n'),"play_circle_outline.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="m9.5 16.5 7-4.5-7-4.5ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/>\n</svg>\n'),
"policy.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="#041E49"><path d="M480 976q-140-35-230-162.5T160 534V296l320-120 320 120v238q0 78-21.5 154.5T703 831L563 697q-19 11-40.161 18-21.162 7-42.839 7-62 0-105.5-43T331 573.5q0-62.5 43.5-106T480 424q62 0 105.5 43.5T629 574q0 21-6 42t-19 38l88 84q24-43 36-96.5T740 534V335.516L480 241l-260 94.516V534q0 131 72.5 236.5T480.2 914q28.8-8 70.3-33t65.5-48l42 43q-35 32-83.5 60.5T480 976Zm.204-314Q517 662 543 636.5t26-63q0-37.5-26.204-63.5-26.203-26-63-26Q443 484 417 510t-26 63.5q0 37.5 26.204 63 26.203 25.5 63 25.5ZM479 572Z"/></svg>\n'),
"priority.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M9 21q-2.5 0-4.25-1.75T3 15V9q0-2.5 1.75-4.25T9 3h6q2.5 0 4.25 1.75T21 9v6q0 2.5-1.75 4.25T15 21Zm2-5 6-6-1.4-1.4-4.6 4.6L8.8 11l-1.4 1.4Zm-2 3h6q1.65 0 2.825-1.175Q19 16.65 19 15V9q0-1.65-1.175-2.825Q16.65 5 15 5H9Q7.35 5 6.175 6.175 5 7.35 5 9v6q0 1.65 1.175 2.825Q7.35 19 9 19Zm3-7Z"/>\n</svg>\n'),"privacy_tip.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z"/></svg>\n'),
"prompt_suggestion.svg":mn('<svg viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.3625 10.4L8.40625 9.44375L10.7125 7.1375L3.85 7.1375C2.975 7.1375 2.23125 6.83125 1.61875 6.21875C1.00625 5.60625 0.7 4.8625 0.7 3.9875C0.7 3.1125 1.00625 2.36875 1.61875 1.75625C2.23125 1.14375 2.975 0.837499 3.85 0.837499H4.3L4.3 2.1875H3.85C3.35 2.1875 2.925 2.3625 2.575 2.7125C2.225 3.0625 2.05 3.4875 2.05 3.9875C2.05 4.4875 2.225 4.9125 2.575 5.2625C2.925 5.6125 3.35 5.7875 3.85 5.7875L10.7125 5.7875L8.40625 3.48125L9.3625 2.525L13.3 6.4625L9.3625 10.4Z" fill="#0B57D0"/>\n</svg>\n'),
"public.svg":mn('<svg viewbox="0 0 24 24">\n  <path d="M0 0h24v24H0V0z" fill="none"></path>\n  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4\n           12c0-.61.08-1.21.21-1.78L8.99 15v1c0 1.1.9 2 2 2v1.93C7.06 19.43 4 16.07 4 12zm13.89\n           5.4c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9\n           2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.4z"></path>\n</svg>\n'),"question_answer.svg":mn('<svg viewbox="0 0 24 24">\n  <path d="M16 13c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10zm-1-9v7H4V4h11zm6\n           2h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"></path>\n  <path d="M0 0h24v24H0V0z" fill="none"></path>\n</svg>\n'),
"remove_circle_outline.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M0 0h24v24H0V0z" fill="none"/>\n  <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'),"reply.svg":mn('<svg viewbox="0 0 24 24">\n  <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path>\n</svg>\n'),"reply_modern.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#041E49"><path d="M19 19v-4q0-1.25-.875-2.125T16 12H6.8l3.6 3.6L9 17l-6-6 6-6 1.4 1.4L6.8 10H16q2.075 0 3.538 1.462Q21 12.925 21 15v4Z"/></svg>\n'),
"restart_alt.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M6 13c0-1.65.67-3.15 1.76-4.24L6.34 7.34A8.014 8.014 0 0 0 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91zm14 0c0-4.42-3.58-8-8-8-.06 0-.12.01-.18.01l1.09-1.09L11.5 2.5 8 6l3.5 3.5 1.41-1.41-1.08-1.08c.06 0 .12-.01.17-.01 3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93z"/>\n  <path fill="none" d="M0 0h24v24H0z"/>\n</svg>\n'),"schedule.svg":mn('<svg jstemplate="ScheduleIcon" viewbox="0 0 24 24">\n  <path d="M11.99,2C6.47,2,2,6.48,2,12s4.47,10,9.99,10C17.52,22,22,17.52,22,12S17.52,2,11.99,2z M12,20c-4.42,0-8-3.58-8-8 s3.58-8,8-8s8,3.58,8,8S16.42,20,12,20z M17.23,14.94l-1.26,1.55L11,13V6h2v6L17.23,14.94z"></path>\n</svg>\n'),
"screenshot_monitor.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10H6.5V7.5H9V6H5ZM15 16H19V12H17.5V14.5H15ZM8 21V19H4Q3.175 19 2.588 18.413Q2 17.825 2 17V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V17Q22 17.825 21.413 18.413Q20.825 19 20 19H16V21ZM4 17H20Q20 17 20 17Q20 17 20 17V5Q20 5 20 5Q20 5 20 5H4Q4 5 4 5Q4 5 4 5V17Q4 17 4 17Q4 17 4 17ZM4 17Q4 17 4 17Q4 17 4 17V5Q4 5 4 5Q4 5 4 5Q4 5 4 5Q4 5 4 5V17Q4 17 4 17Q4 17 4 17Z"/></svg>\n'),
"search.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M20.49 19l-5.73-5.73C15.53 12.2 16 10.91 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.41 0 2.7-.47 3.77-1.24L19 20.49 20.49 19zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z"></path>\n  <path fill="none" d="M0 0h24v24H0V0z"></path>\n</svg>\n'),"send.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M2 3v18l20-9L2 3zm2 11l9-2-9-2V6.09L17.13 12 4 17.91V14z"/></svg>\n'),
"send_spark.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">\n  <path d="M80-80v-640l760 320L80-80Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Zm580-360q0-75-52.5-127.5T560-740q75 0 127.5-52.5T740-920q0 75 52.5 127.5T920-740q-75 0-127.5 52.5T740-560Z"/>\n</svg>\n'),"sentiment_very_satisfied.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12L13 9.94zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11l1.06-1.06zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>\n'),
"smart_assistant.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-520Zm0 480L360-160H200q-33 0-56.5-23.5T120-240v-560q0-33 23.5-56.5T200-880h280v80H200v560h560v-240h80v240q0 33-23.5 56.5T760-160H600L480-40Zm260-520q-1 0-8-6-16-61-60.5-105.5T566-732q-2-1-6-8 0-2 6-8 61-16 105.5-60.5T732-914q1-2 8-6 2 0 8 6 17 61 61 105.5T914-748q2 0 6 8 0 1-6 8-61 16-105.5 60.5T748-566q0 2-8 6Z"/></svg>\n'),"spark.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M 12 20.574219 C 12 19.386719 11.773438 18.273438 11.324219 17.226562 C 10.875 16.183594 10.261719 15.277344 9.488281 14.503906 C 8.71875 13.730469 7.808594 13.121094 6.765625 12.671875 C 5.722656 12.222656 4.609375 12 3.425781 12 C 4.613281 12 5.726562 11.773438 6.773438 11.324219 C 7.816406 10.875 8.722656 10.261719 9.496094 9.488281 C 10.269531 8.71875 10.878906 7.808594 11.328125 6.765625 C 11.777344 5.722656 12 4.609375 12 3.425781 C 12 4.613281 12.226562 5.726562 12.675781 6.773438 C 13.125 7.816406 13.738281 8.722656 14.511719 9.496094 C 15.28125 10.269531 16.191406 10.878906 17.234375 11.328125 C 18.277344 11.777344 19.390625 12 20.574219 12 C 19.386719 12 18.273438 12.226562 17.226562 12.675781 C 16.183594 13.125 15.277344 13.738281 14.503906 14.511719 C 13.730469 15.28125 13.121094 16.191406 12.671875 17.234375 C 12.222656 18.277344 12 19.390625 12 20.574219 Z M 12 20.574219 "/>\n</svg>\n'),
"star.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/></svg>\n'),"star_boarder.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>\n'),
"storefront.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M21.9,8.89l-1.05-4.37c-0.22-0.9-1-1.52-1.91-1.52H5.05C4.15,3,3.36,3.63,3.15,4.52L2.1,8.89 c-0.24,1.02-0.02,2.06,0.62,2.88C2.8,11.88,2.91,11.96,3,12.06V19c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-6.94 c0.09-0.09,0.2-0.18,0.28-0.28C21.92,10.96,22.15,9.91,21.9,8.89z M18.91,4.99l1.05,4.37c0.1,0.42,0.01,0.84-0.25,1.17 C19.57,10.71,19.27,11,18.77,11c-0.61,0-1.14-0.49-1.21-1.14L16.98,5L18.91,4.99z M13,5h1.96l0.54,4.52 c0.05,0.39-0.07,0.78-0.33,1.07C14.95,10.85,14.63,11,14.22,11C13.55,11,13,10.41,13,9.69V5z M8.49,9.52L9.04,5H11v4.69 C11,10.41,10.45,11,9.71,11c-0.34,0-0.65-0.15-0.89-0.41C8.57,10.3,8.45,9.91,8.49,9.52z M4.04,9.36L5.05,5h1.97L6.44,9.86 C6.36,10.51,5.84,11,5.23,11c-0.49,0-0.8-0.29-0.93-0.47C4.03,10.21,3.94,9.78,4.04,9.36z M5,19v-6.03C5.08,12.98,5.15,13,5.23,13 c0.87,0,1.66-0.36,2.24-0.95c0.6,0.6,1.4,0.95,2.31,0.95c0.87,0,1.65-0.36,2.23-0.93c0.59,0.57,1.39,0.93,2.29,0.93 c0.84,0,1.64-0.35,2.24-0.95c0.58,0.59,1.37,0.95,2.24,0.95c0.08,0,0.15-0.02,0.23-0.03V19H5z"/>\n</svg>\n'),
"supervised_user_circle.svg":mn('<svg viewbox="0 0 24 24">\n  <path d="M9.36 6c-1.94 0-3.5 1.56-3.5 3.5S7.42 13 9.36 13s3.5-1.56 3.5-3.5S11.3 6 9.36 6zm0 5c-.83\n           0-1.5-.67-1.5-1.5S8.53 8 9.36 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>\n  <circle cx="16" cy="12.5" r="2.5"></circle>\n  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.83\n           14.14c-.98-.34-2.07-.52-2.83-.52-.44 0-1\n           .06-1.58.18-.48.1-.98.23-1.44.41-.23.09-.45.19-.65.29-.01\n           0-.01.01-.02.01-.2.11-.39.22-.56.35-.45.35-.75.77-.75 1.26v1.81a7.971 7.971 0 0\n           1-5.05-2.71c1.01-.42 2.33-.71 3.41-.71h.06c.42-.76 1.14-1.33\n           1.96-1.77-.8-.16-1.53-.23-2.02-.23-1 0-2.94.29-4.53 1.03A7.95 7.95 0 0 1 4 12c0-4.41\n           3.59-8 8-8s8 3.59 8 8c0 1.52-.43 2.93-1.17 4.14z"></path>\n  <path d="M0 0h24v24H0V0z" fill="none"></path>\n</svg>\n'),
"support.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm-2.9-2.55 1.2-2.75q-1.05-.375-1.812-1.163Q7.725 14.75 7.3 13.7l-2.75 1.15q.575 1.6 1.775 2.8 1.2 1.2 2.775 1.8ZM7.3 10.3q.425-1.05 1.188-1.837Q9.25 7.675 10.3 7.3L9.15 4.55q-1.6.6-2.8 1.8-1.2 1.2-1.8 2.8ZM12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm2.9 4.45q1.575-.6 2.763-1.787 1.187-1.188 1.787-2.763l-2.75-1.2q-.375 1.05-1.15 1.812-.775.763-1.8 1.188Zm1.8-9.2 2.75-1.15q-.6-1.575-1.787-2.763Q16.475 5.15 14.9 4.55l-1.15 2.8q1.025.375 1.775 1.137.75.763 1.175 1.763Z"/>\n</svg>\n'),
"swap_horiz.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-160 80-360l200-200 56 57-103 103h287v80H233l103 103-56 57Zm400-240-56-57 103-103H440v-80h287L624-743l56-57 200 200-200 200Z"/></svg>\n'),"swap_vert.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z"/></svg>\n'),
"sync.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960"><path d="M160-160v-80h110l-16-14q-52-46-73-105t-21-119q0-111 66.5-197.5T400-790v84q-72 26-116 88.5T240-478q0 45 17 87.5t53 78.5l10 10v-98h80v240zm400-10v-84q72-26 116-88.5T720-482q0-45-17-87.5T650-648l-10-10v98h-80v-240h240v80H690l16 14q49 49 71.5 106.5T800-482q0 111-66.5 197.5T560-170"/></svg>\n'),"sync_disabled.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960"><path d="M792-56 643-205q-19 11-39.5 20T560-170v-84q6-2 12-4.5t12-5.5L264-584q-11 25-17.5 51.5T240-478q0 45 17 87.5t53 78.5l10 10v-98h80v240H160v-80h110l-16-14q-49-49-71.5-106.5T160-478q0-45 11.5-86.5T205-643L56-792l57-57 736 736zm-35-263-60-60q11-24 17-50t6-53q0-45-17-87.5T650-648l-10-10v98h-80v-240h240v80H690l16 14q49 49 71.5 106.5T800-482q0 45-11.5 85.5T757-319M379-697l-60-60q19-11 39-19t42-14v84q-5 2-10.5 4t-10.5 5"/></svg>\n'),
"tag_assistant.svg":mn('<svg viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_5427_167301)">\n<path d="M30.1401 37.5C34.2823 37.5 37.6401 34.1421 37.6401 30C37.6401 25.8579 34.2823 22.5 30.1401 22.5C25.998 22.5 22.6401 25.8579 22.6401 30C22.6401 34.1421 25.998 37.5 30.1401 37.5Z" fill="#1A73E8"/>\n<path d="M53.6401 29L31.1401 6.5C30.1401 5.5 28.8901 5 27.6401 5H10.1401C7.39014 5 5.14014 7.25 5.14014 10V27.5C5.14014 28.75 5.64014 30 6.64014 31L16.1401 40.5L18.3901 38.25H20.1401L21.1401 37.25C19.6401 35.25 18.6401 32.75 18.6401 30C18.6401 23.75 23.8901 18.5 30.1401 18.5C36.3901 18.5 41.6401 23.75 41.6401 30C41.6401 36.25 36.3901 41.5 30.1401 41.5C27.3901 41.5 24.8901 40.5 22.8901 39L21.8901 40V41.75L19.6401 44L29.1401 53.5C30.1401 54.5 31.3901 55 32.6401 55C33.8901 55 35.1401 54.5 36.1401 53.5L53.6401 36C54.6401 35 55.1401 33.75 55.1401 32.5C55.1401 31.25 54.6401 29.75 53.6401 29ZM13.8901 17.5C11.8901 17.5 10.1401 15.75 10.1401 13.75C10.1401 11.75 11.8901 10 13.8901 10C15.8901 10 17.6401 11.75 17.6401 13.75C17.6401 15.75 15.8901 17.5 13.8901 17.5Z" fill="#1A73E8"/>\n</g>\n<defs>\n<clipPath id="clip0_5427_167301">\n<rect width="60" height="60" fill="white" transform="translate(0.140137)"/>\n</clipPath>\n</defs>\n</svg>\n'),
"text_format.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10.69 4h2.6l4.51 12h-2.5l-1.01-2.87H9.7L8.7 16H6.2l4.49-12zm2.87 7.06L12.5 8.04l-.43-1.44h-.13l-.44 1.44-1.07 3.02h3.13zM4 18v2h16v-2H4z"/></svg>\n'),"thumb_down_alt.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M3 15h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 22l6.59-6.59c.12-.12.22-.26.3-.41H22V2H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2zm0-4l3-7h9v10l-4.34 4.34L12 13H3v-2z"/></svg>\n'),
"thumb_up.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 7h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 0S7.08 6.85 7 7v13h11c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73V9c0-1.1-.9-2-2-2zM5 7H1v13h4V7z"/></svg>\n'),"thumb_up_alt.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M21 9h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 2 7.58 8.59c-.12.12-.22.26-.3.41H2v13h16c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2zm0 4l-3 7H9V10l4.34-4.34L12 11h9v2z"/></svg>\n'),
"timer.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">\n<path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"/>\n</svg>\n'),"timer_primary.svg":mn('<svg viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M4 1.4V0.199999H8V1.4H4ZM5.4 8.6H6.6V4.6H5.4V8.6ZM6 13.4C5.22222 13.4 4.49444 13.2556 3.81667 12.9667C3.13889 12.6667 2.54444 12.2667 2.03333 11.7667C1.53333 11.2556 1.13333 10.6611 0.833333 9.98333C0.544445 9.30556 0.4 8.57778 0.4 7.8C0.4 7.02222 0.544445 6.29444 0.833333 5.61667C1.13333 4.93889 1.53333 4.35 2.03333 3.85C2.54444 3.33889 3.13889 2.93889 3.81667 2.65C4.49444 2.35 5.22222 2.2 6 2.2C6.64444 2.2 7.26111 2.31111 7.85 2.53333C8.45 2.74444 9.00556 3.04444 9.51667 3.43333L10.3833 2.58333L11.2167 3.41667L10.3667 4.28333C10.7556 4.78333 11.0556 5.33333 11.2667 5.93333C11.4889 6.53333 11.6 7.15556 11.6 7.8C11.6 8.57778 11.45 9.30556 11.15 9.98333C10.8611 10.6611 10.4611 11.2556 9.95 11.7667C9.45 12.2667 8.86111 12.6667 8.18333 12.9667C7.50556 13.2556 6.77778 13.4 6 13.4ZM6 12.2C7.22222 12.2 8.26111 11.7722 9.11667 10.9167C9.97222 10.0611 10.4 9.02222 10.4 7.8C10.4 6.57778 9.97222 5.53889 9.11667 4.68333C8.26111 3.82778 7.22222 3.4 6 3.4C4.77778 3.4 3.73889 3.82778 2.88333 4.68333C2.02778 5.53889 1.6 6.57778 1.6 7.8C1.6 9.02222 2.02778 10.0611 2.88333 10.9167C3.73889 11.7722 4.77778 12.2 6 12.2Z" fill="#0B57D0"/>\n</svg>\n'),
"translate.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#041E49"><path d="M11.9 22 16.45 10H18.55L23.1 22H21L19.95 18.95H15.1L14 22ZM15.7 17.2H19.3L17.55 12.25H17.45ZM4 19 2.6 17.6 7.65 12.55Q6.7 11.5 5.988 10.375Q5.275 9.25 4.75 8H6.85Q7.3 8.9 7.813 9.625Q8.325 10.35 9.05 11.15Q10.15 9.95 10.875 8.688Q11.6 7.425 12.1 6H1V4H8V2H10V4H17V6H14.1Q13.575 7.775 12.675 9.45Q11.775 11.125 10.45 12.6L12.85 15.05L12.1 17.1L9 14Z"/></svg>\n'),"undo.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.1 8H7.83l2.59-2.59L9 4 4 9l5 5 1.41-1.41L7.83 10h6.27c2.15 0 3.9 1.57 3.9 3.5S16.25 17 14.1 17H7v2h7.1c3.25 0 5.9-2.47 5.9-5.5S17.35 8 14.1 8z"/></svg>\n'),
"unfold_more.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.92 9.91L12 6.83l3.08 3.08L16.5 8.5 12 4 7.5 8.5zm6.16 4.18L12 17.17l-3.08-3.08L7.5 15.5 12 20l4.5-4.5z"/></svg>\n'),"unpin.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path fill="none" d="M0 0h24v24H0z"/>\n  <path d="M7 4.17V4c0-1.1.9-2 2-2h6c1.11 0 2 .89 2 2v7l2\n           3v2h-.17l-2.99-2.99-.84-1.26V4H9v2.17l-2-2zm12.78 18.44L13.17\n           16H13v5l-1 1-1-1v-5H5v-2l2-3V9.83L1.39 4.22 2.8 2.81l18.38 18.38-1.4\n           1.42zM11.17 14l-2.2-2.2L7.5 14h3.67z"/>\n</svg>\n'),
"verified.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m8.6 22.5-1.9-3.2-3.6-.8.35-3.7L1 12l2.45-2.8-.35-3.7 3.6-.8 1.9-3.2L12 2.95l3.4-1.45 1.9 3.2 3.6.8-.35 3.7L23 12l-2.45 2.8.35 3.7-3.6.8-1.9 3.2-3.4-1.45zm.85-2.55 2.55-1.1 2.6 1.1 1.4-2.4 2.75-.65-.25-2.8 1.85-2.1-1.85-2.15.25-2.8-2.75-.6-1.45-2.4L12 5.15l-2.6-1.1L8 6.45l-2.75.6.25 2.8L3.65 12l1.85 2.1-.25 2.85 2.75.6zM12 12zm-1.05 3.55L16.6 9.9l-1.4-1.45-4.25 4.25-2.15-2.1L7.4 12z"/></svg>\n'),"video_youtube.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"/></svg>\n'),
"video_youtube_outline.svg":mn('<svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M32.37 10.785C32.025 9.495 31.005 8.475 29.715 8.13C27.375 7.5 18 7.5 18 7.5C18 7.5 8.625 7.5 6.285 8.13C4.995 8.475 3.975 9.495 3.63 10.785C3 13.125 3 18 3 18C3 18 3 22.875 3.63 25.215C3.975 26.505 4.995 27.525 6.285 27.87C8.625 28.5 18 28.5 18 28.5C18 28.5 27.375 28.5 29.715 27.87C31.005 27.525 32.025 26.505 32.37 25.215C33 22.875 33 18 33 18C33 18 33 13.125 32.37 10.785Z"\n        fill="none" stroke="#D93025" stroke-width="2"/>\n  <path d="M15 13.5V22.5L22.8 18L15 13.5Z" fill="#D93025"/>\n</svg>\n'),
"view_column.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1" fill="#041E49"><path d="M3.0 19.0V5.0H20.975V19.0ZM5.0 17.0H8.325V7.0H5.0ZM10.325 17.0H13.65V7.0H10.325ZM15.65 17.0H18.975V7.0H15.65ZM12.475 11.5Z" /></svg>\n'),"visibility.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path d="M0 0h24v24H0V0z" fill="none"/>\n  <path\n      d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/>\n</svg>\n'),
"warning.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24">\n  <path d="M0 0h24v24H0V0z" fill="none"></path>\n  <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path>\n</svg>\n'),"warning_filled.svg":mn('<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M1 21 12 2l11 19Zm10-6h2v-5h-2Zm1 3q.425 0 .713-.288Q13 17.425 13 17t-.287-.712Q12.425 16 12 16t-.712.288Q11 16.575 11 17t.288.712Q11.575 18 12 18Z"/></svg>\n')};var aia="arrow_back arrow_forward chevron_left chevron_right exit_to_app first_page format_quote gm/arrow_back gm/arrow_forward gm/format_quote gm/help_outline gm/navigate_before gm/navigate_next gm/open_in_new gm/play_arrow gm/undo last_page navigate_before navigate_next open_in_new star_half".split(" ");
function Co(a){var b=a.icon;var c=a.ariaLabel===void 0?"":a.ariaLabel;var e=a.ariaBusy===void 0?!1:a.ariaBusy;var f=a.size===void 0?24:a.size;var h=a.Bb===void 0?!1:a.Bb;var k=a.re===void 0?[]:a.re;var l=a.title===void 0?"":a.title;var p=a.Gc===void 0?"rem":a.Gc;a=a.color===void 0?0:a.color;A.call(this,"sc.shared.MaterialIcon");this.icon=b;this.ariaLabel=c;this.ariaBusy=e;this.size=f;this.re=k;this.Bb=h;this.title=l;this.Gc=p;this.color=a}
u(Co,A);
Co.prototype.content=function(){var a=this,b=""+(this.Gc!=="rem"?this.size:this.size/16)+this.Gc,c={root:!0,baseline:this.Bb,flip:aia.indexOf(this.icon)!==-1,"color-icon-blue":this.color===1,"color-icon-fixed-grey":this.color===2,"color-icon-on-surface-variant":this.color===3},e=this.icon.indexOf("gm/")===0;e||(c["text-icon"]=!0);for(var f=w(this.re),h=f.next();!h.done;h=f.next())h=h.value,h!==""&&(c[h]=!0);e?this.element("div","class",c,"title",this.title,"role",this.ariaLabel!==""||this.title!==""?
"img":"presentation","aria-busy",this.ariaBusy,"aria-label",this.ariaLabel!==""?this.ariaLabel:void 0,"style",{width:b,height:b},function(){var k=a.icon.replace("gm/","")+".svg";mo($ha[k])}):this.element("div","class",c,"title",this.title,"role",this.ariaLabel!==""||this.title!==""?"img":"presentation","aria-busy",this.ariaBusy,"aria-label",this.ariaLabel!==""?this.ariaLabel:void 0,"style","font-size: "+b,this.icon)};var bia=[{opacity:0},{opacity:.16,offset:.25},{opacity:.16,offset:.5},{opacity:0}],cia={duration:300},dia={duration:225,easing:"cubic-bezier(.4, .0, .2, 1)"};function Do(a){a=a===void 0?{}:a;a=a.rq===void 0?!1:a.rq;A.call(this,"sc.shared.MaterialInteractionOverlay");var b=this;this.oa=!1;this.parentElement=null;this.rq=a;this.va=function(c){Eo(b,c.clientX,c.clientY,b.rq)};
this.qa=function(){b.oa=!0;b.Ja()};
this.ma=function(){b.oa=!1;b.Ja()}}
u(Do,A);Do.prototype.onDetach=function(){this.ma()};
Do.prototype.content=function(){var a=this,b=hha(gha(getComputedStyle(this.element("span")).color));this.root=this.element("div","class",{root:!0,"light-text":b,hover:this.oa},"aria-hidden","true",function(){a.element("div","class","hover-overlay");a.element("div","class","pressed-overlay");a.o=a.element("div","class","ripple")});
Eo(this,0,0,!0,!1);eia(this)};
function eia(a){setTimeout(function(){var b=a.parentElement,c,e,f=(e=a.getElement()&&((c=a.getElement())==null?void 0:c.parentElement))!=null?e:null;b!==f&&(b&&(b.removeEventListener("mousedown",a.va),b.removeEventListener("mouseenter",a.qa),b.removeEventListener("mouseleave",a.ma)),f&&(f.addEventListener("mousedown",a.va),f.addEventListener("mouseenter",a.qa),f.addEventListener("mouseleave",a.ma)),a.parentElement=f)},0)}
function Fo(a,b){b.code!=="Enter"&&b.code!=="Space"||Eo(a,0,0,!0)}
function Eo(a,b,c,e,f){f=f===void 0?!0:f;var h;if((h=a.o)!=null&&h.animate){var k=a.root.getBoundingClientRect(),l=.6*Math.max(k.width,k.height)/256;h=(Math.sqrt(Math.pow(k.width/2,2)+Math.pow(k.height/2,2))+10)/128;if(e)b=k="calc(50% - 128px)",l="scale("+l+")",h="scale("+h+")";else{b=b-k.left-128;var p=c-k.top-128;c=k.width/2-128-b;e=k.height/2-128-p;k=p+"px";b+="px";l="translate(0, 0) scale("+l+")";h="translate("+c+"px, "+e+"px) scale("+h+")"}l=[{transform:l},{transform:h}];a.o.style.top=k;a.o.style.left=
b;a.o.style.transform=h;f&&(a.o.animate(bia,cia),a.o.animate(l,dia))}}
;function Go(a){a=a===void 0?{}:a;A.call(this,"sc.shared.MaterialButton");this.model=a instanceof Ao?a:new Ao(a);this.overlay=new Do;this.watch(this.model)}
u(Go,A);n=Go.prototype;n.content=function(a){var b=this;a&&this.model.Cf(a);var c=this.model.getText()!=="",e=this.model.Qc()!=="",f=this.model.Yl()?"a":"button";this.element("div","class","container","style",{height:this.model.dh?"100%":null},function(){b.element("div","class",{"touch-target":!0,hidden:!b.model.Eo},"aria-hidden","true","hidden",!b.model.Eo,"onclick",function(){if(!b.model.mf()){var r;(r=b.o)==null||r.click();Eo(b.overlay,0,0,!0)}});
var h,k,l,p={};b.o=b.element(f,"href",b.model.Yl()||void 0,"target",fia(b),"class",(p.root=!0,p.text=b.model.getStyle()===1,p["color-label"]=(b.model.getStyle()===1||b.model.getStyle()===6)&&b.model.Ib==="color-label",p["color-label-dark"]=b.model.getStyle()===3&&b.model.Ib==="color-label-dark",p["color-hint"]=b.model.getStyle()===6&&c,p["color-danger"]=b.model.getStyle()===3&&b.model.Ib==="error",p["color-text-white"]=b.model.Ib==="white",p["color-text-fixed-blue"]=b.model.Ib==="blue-40",p["color-text-m3-primary"]=
b.model.Ib==="color-m3-primary",p["color-outline-blue"]=b.model.Ik==="on-surface-variant",p["color-background-fixed-blue"]=b.model.Ik==="blue-40",p["left-icon"]=Zha(b.model),p.hairline=b.model.getStyle()===3,p.pill=b.model.getStyle()===10,p.href=!!b.model.Yl(),p["chat-bubble"]=b.model.getStyle()===12,p.filled=b.model.getStyle()===4,p["filled-pill"]=b.model.getStyle()===11,p["protected"]=b.model.getStyle()===5,p.tonal=b.model.getStyle()===9,p.navigational=b.model.getStyle()===6&&!c,p["right-icon"]=
b.model.bp(),p["icon-only"]=e&&!c&&!b.model.Qr,p["small-icon"]=b.model.we,p["two-icons"]=Bo(b.model),p["expanded-height"]=b.model.dh,p["disable-legacy-icon-only-touch-target"]=b.model.Rt,p.hidden=!b.model.Eo,p.compact=b.model.compact,p["high-contrast"]=b.model.highContrast,p["high-contrast-link-text-color"]=b.model.Mu,p[b.model.Ib]=b.model.Ib!==0,p[b.model.ud]=b.model.ud!==0,p),"style",{"max-width":b.model.Zl()===""?null:b.model.Zl(),"min-width":b.model.minWidth===""?null:b.model.minWidth,width:b.model.rg===
""?null:b.model.rg,height:b.model.dh?"100%":null,"font-weight":(k=b.model.It)!=null?k:"unset","font-size":(l=b.model.qg)!=null?l:"unset",padding:b.model.sy()===""?null:b.model.sy()},"role",b.model.vd,"type","button","tabindex",b.model.RD(),"aria-label",b.model.Jd(),"aria-description",b.model.HJ(),"aria-describedby",b.model.Bl,"title",b.model.getTitle(),"aria-expanded",(h=b.model.wD())==null?void 0:h.toString(),"aria-haspopup",b.model.xD(),"aria-controls",b.model.OB,"aria-pressed",b.model.ariaPressed,
"disabled",b.model.mf(),"onclick",function(r){b.Ob(r)},"onkeydown",function(r){b.overlay&&Fo(b.overlay,r)},function(){if(e){var r=b.element,t={icon:!0,
"before-text":Bo(b.model)},v=b.model.Qc(),y=b.model.Nu,E=b.model.Jd(),oa=b.model.Jf;r.call(b,"span","aria-hidden",c?!0:!1,"class",t,new Co({icon:v,ariaBusy:y,ariaLabel:E,size:oa>0?oa:b.model.ct||!b.model.we&&!c?24:18,Bb:!0,Gc:b.model.Gc,color:gia(b.model.lj)}))}c&&b.element("span","class",{overflow:b.model.Zl()!==""||b.model.rg!==""},b.model.getText());Bo(b.model)&&(r=b.element,t={icon:!0,"after-text":Bo(b.model)},v=b.model.Jf,r.call(b,"span","aria-hidden",!0,"class",t,new Co({icon:b.model.wy(),size:v>
0?v:b.model.ct||!b.model.we&&!c?24:18,Bb:!0,Gc:b.model.Gc,color:gia(b.model.lj)})));b.overlay.render()})})};
n.Ob=function(a){var b=this.model.gr();b&&b({method:a.clientX===0&&a.clientY===0?1:2})};
n.setDisabled=function(a){this.model.setDisabled(a)};
n.ue=la(12);n.wD=function(){return this.model.wD()};
n.jn=function(a){this.model.jn(a)};
n.xD=function(){return this.model.xD()};
n.getText=function(){return this.model.getText().toString()};
n.setText=function(a){this.model.setText(a)};
n.Qc=function(){return this.model.Qc()};
n.wy=function(){return this.model.wy()};
n.setIcon=function(a){this.model.setIcon(a)};
n.iA=function(a){this.model.iA(a)};
n.focus=function(){var a;(a=this.o)==null||a.focus()};
function fia(a){if(a.model.Yl())return(a=a.model.getTarget())?hia[a]:void 0}
function gia(a){switch(a){case 1:return 1;case 2:return 2;case 3:return 3;default:return 0}}
var Ho={},hia=(Ho[1]="_blank",Ho[2]="_parent",Ho[0]="_self",Ho[3]="_top",Ho);function Io(){try{return!!window.localStorage}catch(a){return!1}}
function Jo(a,b){if(Io())try{window.localStorage.setItem(a,JSON.stringify(b))}catch(c){}}
function Ko(a){var b={};var c=b.removeItem===void 0?!1:b.removeItem;b=b.wV===void 0?!0:b.wV;if(!Io())return null;try{var e=window.localStorage.getItem(a);if(!e)return null;b&&(e=JSON.parse(e));c&&Lo(a);return e}catch(f){return null}}
function Lo(a){Io()&&window.localStorage.removeItem(a)}
;function Mo(a,b,c){c=c===void 0?!1:c;try{var e=new URL(a);var f=!0}catch(k){f=Lm(a),e=new URL(f.href),f=!1}a="";c&&(a=e.search);c=new URLSearchParams(a);b=w(b.entries());for(a=b.next();!a.done;a=b.next()){var h=w(a.value);a=h.next().value;h=h.next().value;c.set(a,h)}e.search=c.toString();return f?e.toString():e.pathname+e.search+e.hash}
function No(a,b){b=new URL(b!=null?b:window.location.href);return(new URLSearchParams(b.search)).get(a)}
function Oo(a){var b=b===void 0?window.location.hash:b;b=b.split("#")[1]||b;var c;return(c=(new URLSearchParams(b)).get(a))!=null?c:""}
function Po(a,b,c){c=c===void 0?window.location.hash:c;c=c.split("#")[1]||"";c=new URLSearchParams(c);c.set(a,b);return"#"+c}
function Qo(a,b){try{var c=new URL(b);var e=!0}catch(f){b=Lm(b),c=new URL(b.href),e=!1}c.hash=Po("play",a,c.hash);return e?c.toString():c.pathname+c.search+c.hash}
;function Ro(a){if(a!=null)return So(a)}
function To(a){return a==null?null:So(a)}
function So(a){return Xc(a)?Number(a):String(a)}
;var iia={HH:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},ON:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}},Uo=iia;Uo=iia;var Vo={AED:[2,"dh","\u062f.\u0625."],ALL:[0,"Lek","Lek"],AUD:[2,"$","AU$"],BDT:[2,"\u09f3","Tk"],BGN:[2,"lev","lev"],BRL:[2,"R$","R$"],CAD:[2,"$","C$"],CDF:[2,"FrCD","CDF"],CHF:[2,"CHF","CHF"],CLP:[0,"$","CL$"],CNY:[2,"\u00a5","RMB\u00a5"],COP:[32,"$","COL$"],CRC:[0,"\u20a1","CR\u20a1"],CZK:[50,"K\u010d","K\u010d"],DKK:[50,"kr.","kr."],DOP:[2,"RD$","RD$"],EGP:[2,"\u00a3","LE"],ETB:[2,"Birr","Birr"],EUR:[2,"\u20ac","\u20ac"],GBP:[2,"\u00a3","GB\u00a3"],HKD:[2,"$","HK$"],HRK:[2,"kn","kn"],HUF:[34,
"Ft","Ft"],IDR:[0,"Rp","Rp"],ILS:[34,"\u20aa","IL\u20aa"],INR:[2,"\u20b9","Rs"],IRR:[0,"Rial","IRR"],ISK:[0,"kr","kr"],JMD:[2,"$","JA$"],JPY:[0,"\u00a5","JP\u00a5"],KRW:[0,"\u20a9","KR\u20a9"],LKR:[2,"Rs","SLRs"],LTL:[2,"Lt","Lt"],MNT:[0,"\u20ae","MN\u20ae"],MVR:[2,"Rf","MVR"],MXN:[2,"$","Mex$"],MYR:[2,"RM","RM"],NOK:[50,"kr","NOkr"],PAB:[2,"B/.","B/."],PEN:[2,"S/.","S/."],PHP:[2,"\u20b1","PHP"],PKR:[0,"Rs","PKRs."],PLN:[50,"z\u0142","z\u0142"],RON:[2,"RON","RON"],RSD:[0,"din","RSD"],RUB:[50,"\u20bd",
"RUB"],SAR:[2,"SAR","SAR"],SEK:[50,"kr","kr"],SGD:[2,"$","S$"],THB:[2,"\u0e3f","THB"],TRY:[2,"\u20ba","TRY"],TWD:[2,"$","NT$"],TZS:[0,"TSh","TSh"],UAH:[2,"\u0433\u0440\u043d.","UAH"],USD:[2,"$","US$"],UYU:[2,"$","$U"],VND:[48,"\u20ab","VN\u20ab"],YER:[0,"Rial","Rial"],ZAR:[2,"R","ZAR"]};var jia={JH:".",pB:",",PERCENT:"%",AB:"0",PO:"+",dI:"-",LH:"E",eI:"\u2030",qB:"\u221e",GO:"NaN",IH:"#,##0.###",XO:"#E0",KO:"#,##0%",QN:"\u00a4#,##0.00",kB:"USD"},Wo=jia;Wo=jia;function Xo(a,b){var c;if(c=b){a:if(b&&b.length===3){for(c=0;c<3;c++){var e=b[c];if(e<"A"||e>"Z"&&e<"a"||e>"z"){c=!1;break a}}c=!0}else c=!1;c=!c}if(c)throw new TypeError("Currency must be valid ISO code");this.Sa=b?b.toUpperCase():null;this.Ia=40;this.oa=1;this.Pa=0;this.o=3;this.Ma=this.ua=0;this.tb=!1;this.La=this.Ca="";this.qa=Wo.dI;this.Fa="";this.ma=1;this.ya=!1;this.va=[];this.Ra=this.Va=!1;this.Ha=0;if(typeof a==="number")switch(a){case 1:Yo(this,Wo.IH);break;case 2:Yo(this,Wo.XO);break;case 3:Yo(this,
Wo.KO);break;case 4:a=Wo.QN;b=["0"];if(c=Vo[this.Sa||Wo.kB]){c=c[0]&7;if(c>0)for(b.push("."),e=0;e<c;e++)b.push("0");a=a.replace(/0.00/g,b.join(""))}Yo(this,a);break;case 5:kia(this,1);break;case 6:kia(this,2);break;default:throw Error("Unsupported pattern type.");}else Yo(this,a)}
function Zo(a){a.o=2;return a}
function Yo(a,b){b.replace(/ /g,"\u00a0");var c=[0];a.Ca=$o(a,b,c);for(var e=c[0],f=-1,h=0,k=0,l=0,p=-1,r=b.length,t=!0;c[0]<r&&t;c[0]++)switch(b.charAt(c[0])){case "#":k>0?l++:h++;p>=0&&f<0&&p++;break;case "0":if(l>0)throw Error('Unexpected "0" in pattern "'+b+'"');k++;p>=0&&f<0&&p++;break;case ",":p>0&&a.va.push(p);p=0;break;case ".":if(f>=0)throw Error('Multiple decimal separators in pattern "'+b+'"');f=h+k+l;break;case "E":if(a.Ra)throw Error('Multiple exponential symbols in pattern "'+b+'"');
a.Ra=!0;a.Ma=0;c[0]+1<r&&b.charAt(c[0]+1)=="+"&&(c[0]++,a.tb=!0);for(;c[0]+1<r&&b.charAt(c[0]+1)=="0";)c[0]++,a.Ma++;if(h+k<1||a.Ma<1)throw Error('Malformed exponential pattern "'+b+'"');t=!1;break;default:c[0]--,t=!1}k==0&&h>0&&f>=0&&(k=f,k==0&&k++,l=h-k,h=k-1,k=1);if(f<0&&l>0||f>=0&&(f<h||f>h+k)||p==0)throw Error('Malformed pattern "'+b+'"');l=h+k+l;a.o=f>=0?l-f:0;f>=0&&(a.ua=h+k-f,a.ua<0&&(a.ua=0));a.oa=(f>=0?f:l)-h;a.Ra&&(a.Ia=h+a.oa,a.o==0&&a.oa==0&&(a.oa=1));a.va.push(Math.max(0,p));a.Va=f==
0||f==l;e=c[0]-e;a.La=$o(a,b,c);c[0]<b.length&&b.charAt(c[0])==";"?(c[0]++,a.ma!=1&&(a.ya=!0),a.qa=$o(a,b,c),c[0]+=e,a.Fa=$o(a,b,c)):(a.qa+=a.Ca,a.Fa+=a.La)}
function kia(a,b){a.Ha=b;Yo(a,Wo.IH);a.ua=0;Zo(a);if(a.ua>0)throw Error("Can't combine significant digits and minimum fraction digits");a.Pa=2}
Xo.prototype.parse=function(a,b){b=b||[0];if(this.Ha!==0)throw Error("Parsing of compact numbers is unimplemented");a=a.replace(/ |\u202f/g,"\u00a0");var c=a.indexOf(this.Ca,b[0])==b[0],e=a.indexOf(this.qa,b[0])==b[0];c&&e&&(this.Ca.length>this.qa.length?e=!1:this.Ca.length<this.qa.length&&(c=!1));c?b[0]+=this.Ca.length:e&&(b[0]+=this.qa.length);if(a.indexOf(Wo.qB,b[0])==b[0]){b[0]+=Wo.qB.length;var f=Infinity}else{f=a;var h=!1,k=!1,l=!1,p=-1,r=1,t=Wo.JH,v=Wo.pB,y=Wo.LH;if(this.Ha!=0)throw Error("Parsing of compact style numbers is not implemented");
v=v.replace(/\u202f/g,"\u00a0");for(var E="";b[0]<f.length;b[0]++){var oa=f.charAt(b[0]),ra=lia(oa);if(ra>=0&&ra<=9)E+=ra,l=!0;else if(oa==t.charAt(0)){if(h||k)break;E+=".";h=!0}else if(oa==v.charAt(0)&&("\u00a0"!=v.charAt(0)||b[0]+1<f.length&&lia(f.charAt(b[0]+1))>=0)){if(h||k)break}else if(oa==y.charAt(0)){if(k)break;E+="E";k=!0;p=b[0]}else if(oa=="+"||oa=="-"){if(l&&p!=b[0]-1)break;E+=oa}else if(this.ma==1&&oa==Wo.PERCENT.charAt(0)){if(r!=1)break;r=100;if(l){b[0]++;break}}else if(this.ma==1&&oa==
Wo.eI.charAt(0)){if(r!=1)break;r=1E3;if(l){b[0]++;break}}else break}this.ma!=1&&(r=this.ma);f=parseFloat(E)/r}if(c){if(a.indexOf(this.La,b[0])!=b[0])return NaN;b[0]+=this.La.length}else if(e){if(a.indexOf(this.Fa,b[0])!=b[0])return NaN;b[0]+=this.Fa.length}return e?-f:f};
Xo.prototype.format=function(a){if(this.ua>this.o)throw Error("Min value must be less than max value");if(isNaN(a))return Wo.GO;var b=[];var c=a,e=a;if(this.Ha==0)var f=ap;else c=Math.abs(c),e=Math.abs(e),f=mia(this,c<=1?0:bp(c)).JC,e=cp(e,-f),dp(this,e),c=cp(c,-f),c=dp(this,c),f=mia(this,f+bp(c.intValue));a=cp(a,-f.JC);(c=a<0||a==0&&1/a<0)?f.ZE?b.push(f.ZE):(b.push(f.prefix),b.push(this.qa)):(b.push(f.prefix),b.push(this.Ca));if(isFinite(a))if(a*=c?-1:1,a*=this.ma,this.Ra)if(e=a,e==0)ep(this,e,this.oa,
b),nia(this,0,b);else{var h=Math.floor(Math.log(e)/Math.log(10)+2E-15);e=cp(e,-h);var k=this.oa;this.Ia>1&&this.Ia>this.oa?(k=h%this.Ia,k<0&&(k=this.Ia+k),e=cp(e,k),h-=k,k=1):this.oa<1?(h++,e=cp(e,-1)):(h-=this.oa-1,e=cp(e,this.oa-1));ep(this,e,k,b);nia(this,h,b)}else ep(this,a,this.oa,b);else b.push(Wo.qB);c?f.aF?b.push(f.aF):(isFinite(a)&&b.push(f.suffix),b.push(this.Fa)):(isFinite(a)&&b.push(f.suffix),b.push(this.La));return b.join("")};
function dp(a,b){var c=cp(b,a.o);a.Pa>0&&(c=oia(c,a.Pa,a.o));c=Math.round(c);if(isFinite(c)){var e=Math.floor(cp(c,-a.o));c=Math.floor(c-cp(e,a.o));if(c<0||c>=cp(1,a.o))e=Math.round(b),c=0}else e=b,c=0;return{intValue:e,OR:c}}
function ep(a,b,c,e){if(a.ua>a.o)throw Error("Min value must be less than max value");e||(e=[]);b=dp(a,b);var f=b.intValue,h=b.OR,k=a.ua>0||h>0||!1;b=a.ua;k&&(b=a.ua);for(var l="",p=f;p>1E20;)l="0"+l,p=Math.round(cp(p,-1));l=p+l;var r=Wo.JH;p=Wo.AB.codePointAt(0);var t=l.length,v=0;if(f>0||c>0){for(f=t;f<c;f++)e.push(String.fromCodePoint(p));if(a.va.length>=2)for(c=1;c<a.va.length;c++)v+=a.va[c];c=t-v;if(c>0){f=a.va;v=t=0;for(var y,E=Wo.pB,oa=l.length,ra=0;ra<oa;ra++)if(e.push(String.fromCodePoint(p+
Number(l.charAt(ra))*1)),oa-ra>1)if(y=f[v],ra<c){var Aa=c-ra;(y===1||y>0&&Aa%y===1)&&e.push(E)}else v<f.length&&(ra===c?v+=1:y===ra-c-t+1&&(e.push(E),t+=y,v+=1))}else{c=l;l=a.va;f=Wo.pB;y=c.length;E=[];for(t=l.length-1;t>=0&&y>0;t--){v=l[t];for(oa=0;oa<v&&y-oa-1>=0;oa++)E.push(String.fromCodePoint(p+Number(c.charAt(y-oa-1))*1));y-=v;y>0&&E.push(f)}e.push.apply(e,E.reverse())}}else k||e.push(String.fromCodePoint(p));(a.Va||k)&&e.push(r);h=String(h);k=h.split("e+");k.length==2&&(h=String(oia(parseFloat(k[0]),
a.Pa,1)),h=h.replace(".",""),h+=qn("0",parseInt(k[1],10)-h.length+1));a.o+1>h.length&&(h="1"+qn("0",a.o-h.length)+h);for(a=h.length;h.charAt(a-1)=="0"&&a>b+1;)a--;for(b=1;b<a;b++)e.push(String.fromCodePoint(p+Number(h.charAt(b))*1))}
function nia(a,b,c){c.push(Wo.LH);b<0?(b=-b,c.push(Wo.dI)):a.tb&&c.push(Wo.PO);b=""+b;for(var e=Wo.AB,f=b.length;f<a.Ma;f++)c.push(e);a=e.codePointAt(0)-pia;for(e=0;e<b.length;e++)c.push(String.fromCodePoint(a+b.codePointAt(e)))}
function lia(a){a=a.codePointAt(0);if(48<=a&&a<58)return a-48;var b=Wo.AB.codePointAt(0);return b<=a&&a<b+10?a-b:-1}
var pia="0".codePointAt(0);
function $o(a,b,c){for(var e="",f=!1,h=b.length;c[0]<h;c[0]++){var k=b.charAt(c[0]);if(k=="'")c[0]+1<h&&b.charAt(c[0]+1)=="'"?(c[0]++,e+="'"):f=!f;else if(f)e+=k;else switch(k){case "#":case "0":case ",":case ".":case ";":return e;case "\u00a4":c[0]+1<h&&b.charAt(c[0]+1)=="\u00a4"?(c[0]++,e+=a.Sa||Wo.kB):(k=a.Sa||Wo.kB,e+=k in Vo?Vo[k][1]:k);break;case "%":if(!a.ya&&a.ma!=1)throw Error("Too many percent/permill");if(a.ya&&a.ma!=100)throw Error("Inconsistent use of percent/permill characters");a.ma=
100;a.ya=!1;e+=Wo.PERCENT;break;case "\u2030":if(!a.ya&&a.ma!=1)throw Error("Too many percent/permill");if(a.ya&&a.ma!=1E3)throw Error("Inconsistent use of percent/permill characters");a.ma=1E3;a.ya=!1;e+=Wo.eI;break;default:e+=k}}return e}
var ap={JC:0,ZE:"",aF:"",prefix:"",suffix:""};function mia(a,b){a=a.Ha==1?Uo.HH:Uo.ON;a==null&&(a=Uo.HH);if(b<3)return ap;b=Math.min(14,b);var c=a[cp(1,b)];for(--b;!c&&b>=3;)c=a[cp(1,b)],b--;if(!c)return ap;c=c.other;var e=a="",f=c.indexOf(";");f>=0&&(c=c.substring(0,f),f=c.substring(f+1))&&(e=/([^0]*)(0+)(.*)/.exec(f),a=e[1],e=e[3]);return c&&c!="0"?(c=/([^0]*)(0+)(.*)/.exec(c))?{JC:b+1-(c[2].length-1),ZE:a,aF:e,prefix:c[1],suffix:c[3]}:ap:ap}
function bp(a){if(!isFinite(a))return a>0?a:0;for(var b=0;(a/=10)>=1;)b++;return b}
function cp(a,b){if(!a||!isFinite(a)||b==0)return a;a=String(a).split("e");return parseFloat(a[0]+"e"+(parseInt(a[1]||0,10)+b))}
function qia(a,b){return a&&isFinite(a)?cp(Math.round(cp(a,b)),-b):a}
function oia(a,b,c){if(!a)return a;b=b-bp(a)-1;return b<-c?qia(a,-c):qia(a,b)}
;function ria(a){return a%10==1&&a%100!=11?"one":a%10==2&&a%100!=12?"two":a%10==3&&a%100!=13?"few":"other"}
var sia=ria;sia=ria;function tia(a,b){var c=a|0;if(void 0===b){b=Math;var e=b.min,f=a+"",h=f.indexOf(".");b=e.call(b,h===-1?0:f.length-h-1,3)}e=Math.pow(10,b);a={v:b,f:(a*e|0)%e};return c==1&&a.v==0?"one":"other"}
var uia=tia;uia=tia;function fp(a){this.oa=a;this.ma=this.o=this.qa=null;a=Wo;var b=Uo;if(via!==a||wia!==b)via=a,wia=b,xia=new Xo(1);this.va=xia}
var via=null,wia=null,xia=null,yia=RegExp("'([{}#].*?)'","g"),zia=RegExp("''","g");fp.prototype.format=function(a){if(this.oa){this.qa=[];var b=Aia(this,this.oa);this.ma=gp(this,b);this.oa=null}if(this.ma&&this.ma.length!=0)for(this.o=Ub(this.qa),b=[],hp(this,this.ma,a,!1,b),a=b.join("");this.o.length>0;)a=a.replace(this.ua(this.o),String(this.o.pop()).replace("$","$$$$"));else a="";return a};
function hp(a,b,c,e,f){for(var h=0;h<b.length;h++)switch(b[h].type){case 4:f.push(b[h].value);break;case 3:var k=b[h].value;var l=a,p=f,r=c[k];r===void 0?p.push("Undefined parameter - "+k):(l.o.push(r),p.push(l.ua(l.o)));break;case 2:k=b[h].value;l=a;p=c;r=e;var t=f,v=k.Rw;p[v]===void 0?t.push("Undefined parameter - "+v):(v=k[p[v]],v===void 0&&(v=k.other),hp(l,v,p,r,t));break;case 0:k=b[h].value;Bia(a,k,c,uia,e,f);break;case 1:k=b[h].value,Bia(a,k,c,sia,e,f)}}
function Bia(a,b,c,e,f,h){var k=b.Rw,l=b.sI,p=+c[k];isNaN(p)?h.push("Undefined or invalid parameter - "+k):(l=p-l,k=b[c[k]],k===void 0&&(e=e(Math.abs(l)),k=b[e],k===void 0&&(k=b.other)),b=[],hp(a,k,c,f,b),c=b.join(""),f?h.push(c):(a=a.va.format(l),h.push(c.replace(/#/g,a))))}
function Aia(a,b){var c=a.qa,e=a.ua.bind(a);b=b.replace(zia,function(){c.push("'");return e(c)});
return b=b.replace(yia,function(f,h){c.push(h);return e(c)})}
function ip(a){var b=0,c=[],e=[],f=/[{}]/g;f.lastIndex=0;for(var h;h=f.exec(a);){var k=h.index;h[0]=="}"?(c.pop(),c.length==0&&(h={type:1},h.value=a.substring(b,k),e.push(h),b=k+1)):(c.length==0&&(b=a.substring(b,k),b!=""&&e.push({type:0,value:b}),b=k+1),c.push("{"))}a=a.substring(b);a!=""&&e.push({type:0,value:a});return e}
var Cia=/^\s*(\w+)\s*,\s*plural\s*,(?:\s*offset:(\d+))?/,Dia=/^\s*(\w+)\s*,\s*selectordinal\s*,/,Eia=/^\s*(\w+)\s*,\s*select\s*,/;
function gp(a,b){var c=[];b=ip(b);for(var e=0;e<b.length;e++){var f={};if(0==b[e].type)f.type=4,f.value=b[e].value;else if(1==b[e].type){var h=b[e].value;switch(Cia.test(h)?0:Dia.test(h)?1:Eia.test(h)?2:/^\s*\w+\s*/.test(h)?3:5){case 2:f.type=2;f.value=Fia(a,b[e].value);break;case 0:f.type=0;f.value=Gia(a,b[e].value);break;case 1:f.type=1;f.value=Hia(a,b[e].value);break;case 3:f.type=3,f.value=b[e].value}}c.push(f)}return c}
function Fia(a,b){var c="";b=b.replace(Eia,function(l,p){c=p;return""});
var e={};e.Rw=c;b=ip(b);for(var f=0;f<b.length;){var h=b[f].value;f++;var k=void 0;1==b[f].type&&(k=gp(a,b[f].value));e[h.replace(/\s/g,"")]=k;f++}return e}
function Gia(a,b){var c="",e=0;b=b.replace(Cia,function(p,r,t){c=r;t&&(e=parseInt(t,10));return""});
var f={};f.Rw=c;f.sI=e;b=ip(b);for(var h=0;h<b.length;){var k=b[h].value;h++;var l=void 0;1==b[h].type&&(l=gp(a,b[h].value));f[k.replace(/\s*(?:=)?(\w+)\s*/,"$1")]=l;h++}return f}
function Hia(a,b){var c="";b=b.replace(Dia,function(l,p){c=p;return""});
var e={};e.Rw=c;e.sI=0;b=ip(b);for(var f=0;f<b.length;){var h=b[f].value;f++;var k=void 0;1==b[f].type&&(k=gp(a,b[f].value));e[h.replace(/\s*(?:=)?(\w+)\s*/,"$1")]=k;f++}return e}
fp.prototype.ua=function(a){return"\ufddf_"+(a.length-1).toString(10)+"_"};function jp(a,b,c,e){var f=window.sc_trackStatsImpressions;if(f)f([{id:a,type:b,index:c}],e===void 0?!1:e);else if(z()&&z().env!=="PROD")throw Error("window.sc_trackStatsImpressions() is undefined or null. Please make sure Stats functions are initialized first.");}
function kp(a,b,c,e,f){var h=window.sc_trackStatsEvent;if(h)f?h(c,a,b,e,function(){},f):h(c,a,b,e);
else if(z()&&z().env!=="PROD")throw Error("window.sc_trackStatsEvent() is undefined or null. Please make sure Stats functions are initialized first.");}
;var Iia=["kejbdjndbnbjgmefkgdddjlbokphdefk","jmekfmbnaedfebfnmakmokmlfpblbfdm","mgapdfmlohfieomcgamllncmnoeemmoo","bkcklghljembpnfhmlbdnbmjgkdhgmnd","aeeoncifoephjblokgamlhnkebllljfj"];function lp(){var a=window;this.o=chrome;this.window=a}
function mp(a){var b,c,e,f;return Ra(function(h){switch(h.o){case 1:if(!hc)return h.return(!1);if(a.extensionId)return h.return(!0);b=w(Iia);c=b.next();case 2:if(c.done){h.Qa(4);break}e=c.value;return h.yield(Jia(a,e,{type:"connect_side_panel"}),5);case 5:if(f=h.ma)return h.return(!0);c=b.next();h.Qa(2);break;case 4:return h.return(!1)}})}
function Kia(a,b){b=Object.assign({},b);if(a.extensionId)Jia(a,a.extensionId,{type:"open_side_panel",context:btoa(JSON.stringify(b))});else{a=a.window;var c=b.entryPoint,e=b.environment;e=new URL(e==="nightly"||e==="local"?"https://supporttagging-autopush.sandbox.google.com/embed/tagging/install":"https://support.google.com/embed/tagging/install");e.searchParams.set("utm_source",c);e.searchParams.set("context",btoa(JSON.stringify(b)));Gl(a,ul(e.toString()),"_blank")}}
function Jia(a,b,c){var e,f,h,k;return Ra(function(l){if(l.o==1)return Ja(l,2),l.yield((e=a.o)==null?void 0:(f=e.runtime)==null?void 0:f.sendMessage(b,c),4);if(l.o!=2)return h=l.ma,((k=h)==null?void 0:k.type)==="side_panel_connected"?(a.extensionId=b,l.return(!0)):l.return(!1);La(l);return l.return(!1)})}
;function np(a){var b=a===void 0?{}:a;a=b.size===void 0?"mspin-small":b.size;b=b.jx===void 0?!1:b.jx;A.call(this,"sc.shared.MaterialSpinner");this.size=a;this.jx=b}
u(np,A);np.prototype.content=function(){var a=this;this.element("div","dir","ltr","class","mspin "+this.size+" "+(this.jx?"mspin-centered":""),function(){a.element("div",function(){a.element("div")})})};
np.prototype.asElement=function(){var a=wn("div");a.classList.add("scSharedMaterialspinnermspin","scSharedMaterialspinnermspin-medium","scSharedMaterialspinner");var b=wn("div"),c=wn("div");b.appendChild(c);a.appendChild(b);return a};var Lia=Promise;function Mia(a){this.o=a}
Mia.prototype.send=function(a,b,c){this.o.then(function(e){e.send(a,b,c)})};function Nia(a,b){this.data=a;this.channel=b}
Nia.prototype.reply=function(a,b,c){this.channel.send(a,b,c)};function Oia(a){this.o=a}
Oia.prototype.send=function(a,b,c){c=c===void 0?[]:c;var e=new MessageChannel;Pia(e.port1,b);this.o.postMessage(a,[e.port2].concat(c))};
function Qia(a,b){Pia(a,b);return new Oia(a)}
function Pia(a,b){b&&(a.onmessage=function(c){b(new Nia(c.data,Qia(c.ports[0])))})}
;function op(a){this.o=a}
op.prototype.verify=function(a){return this.o(a)};
function Ria(a){var b=Object.create(null);(typeof a==="string"?[a]:a).forEach(function(c){if(c==="null")throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");b[c]=!0});
return function(c){return b[c]===!0}}
;var Sia=function(){if(!Ya.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
Ya.addEventListener("test",c,b);Ya.removeEventListener("test",c,b)}catch(e){}return a}();function Tia(a){var b=a.destination;var c=a.iframe;var e=a.origin;var f=a.Vn===void 0?"ZNWN1d":a.Vn;var h=a.onMessage===void 0?void 0:a.onMessage;a=a.zz===void 0?void 0:a.zz;return Uia({destination:b,getSource:function(){return c.contentWindow},
oU:e instanceof op?e:typeof e==="function"?new op(e):new op(Ria(e)),Vn:f,onMessage:h,zz:a})}
function Uia(a){var b=a.destination;var c=a.getSource;var e=a.oU;var f=a.token===void 0?void 0:a.token;var h=a.Vn;var k=a.onMessage===void 0?void 0:a.onMessage;var l=a.zz===void 0?void 0:a.zz;return new Mia(new Lia(function(p,r){function t(v){v.source&&v.source===c()&&e.verify(v.origin)&&(v.data.n||v.data)===h&&(b.removeEventListener("message",t,!1),f&&v.data.t!==f?r(Error('Token mismatch while establishing channel "'+h+'". Expected '+f+", but received "+v.data.t+".")):(p(Qia(v.ports[0],k)),l&&l(v)))}
b.addEventListener("message",t,!1)}))}
;function pp(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function qp(a,b,c,e,f,h,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,e&&(l+=":"+e));f&&(l+=f);h&&(l+="?"+h);k&&(l+="#"+k);return l}
var rp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sp(a){return a?decodeURI(a):a}
function Via(a){a=a.match(rp)[1]||null;!a&&Ya.self&&Ya.self.location&&(a=Ya.self.location.protocol.slice(0,-1));return a?a.toLowerCase():""}
function tp(a){a=a.match(rp);return qp(a[1],null,a[3],a[4])}
function Wia(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var e=a[c].indexOf("="),f=null;if(e>=0){var h=a[c].substring(0,e);f=a[c].substring(e+1)}else h=a[c];b(h,f?on(f):"")}}}
function Xia(a,b){if(!b)return a;var c=a.indexOf("#");c<0&&(c=a.length);var e=a.indexOf("?");if(e<0||e>c){e=c;var f=""}else f=a.substring(e+1,c);a=[a.slice(0,e),f,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function Yia(a,b,c){if(Array.isArray(b))for(var e=0;e<b.length;e++)Yia(a,String(b[e]),c);else b!=null&&c.push(a+(b===""?"":"="+nn(b)))}
function up(a,b,c){c=c!=null?"="+nn(c):"";return Xia(a,b+c)}
function Zia(a,b,c,e){for(var f=c.length;(b=a.indexOf(c,b))>=0&&b<e;){var h=a.charCodeAt(b-1);if(h==38||h==63)if(h=a.charCodeAt(b+f),!h||h==61||h==38||h==35)return b;b+=f+1}return-1}
var $ia=/#|$/;function vp(a,b){var c=a.search($ia),e=Zia(a,0,b,c);if(e<0)return null;var f=a.indexOf("&",e);if(f<0||f>c)f=c;e+=b.length+1;return on(a.slice(e,f!==-1?f:0))}
var aja=/[?&]($|#)/;function wp(a,b){for(var c=a.search($ia),e=0,f,h=[];(f=Zia(a,e,b,c))>=0;)h.push(a.substring(e,f)),e=Math.min(a.indexOf("&",f)+1||c,c);h.push(a.slice(e));return h.join("").replace(aja,"$1")}
function xp(a,b,c){return up(wp(a,b),b,c)}
;function yp(a,b,c){this.Wg=a;this.Go=b;this.params=c;this.qa=new pp;this.zk={Wg:a.clone(),Go:b.clone(),Jq:Object.assign({},c)}}
n=yp.prototype;n.initialize=function(a){var b=this;return Ra(function(c){return c.yield(b.rB(a),0)})};
n.reloadWithOptions=function(a){var b=this,c,e,f,h;return Ra(function(k){if(k.o==1){if(!b.o)return k.return();c=a;e=c.Wg===void 0?b.Wg:c.Wg;f=c.Go===void 0?b.Go:c.Go;h=c.Jq===void 0?b.params:c.Jq;b.Wg=e;b.Go=f;b.params=h;return k.yield(bja(b),2)}return k.o!=3?k.yield(cja(b),3):k.yield(dja(b),0)})};
n.rB=function(a){var b=this;return Ra(function(c){switch(c.o){case 1:return b.hf=a,b.o=wn("IFRAME"),b.hA(b.o),c.yield(bja(b),2);case 2:return c.yield(cja(b),3);case 3:return b.hf.appendChild(b.o),c.yield(dja(b),4);case 4:b.params.UT||b.o.focus(),Ia(c)}})};
function bja(a){var b,c,e,f,h,k,l,p,r,t,v,y;return Ra(function(E){if(!a.o)return E.return();var oa,ra={},Aa=Object,Ba=Aa.assign,Ha=a.params.opa||{},Na=a.uD();ra.authuser=(oa=a.params.authUser)!=null?oa:"";ra.dark=a.params.isDarkMode?"1":"0";ra.hl=Df(a.Go,9)||"en";oa=a.ma;var Va=a.Wg.serialize();Va=lc(Va,4);b=Ba.call(Aa,{},Ha,Na,(ra[oa]=Va,ra));b.authuser||(c=vp(window.location.href,"authuser")||"",ra=window.location.href.match(rp)[5]||null,e=sp(ra)||"",f=e.startsWith("/u/")?e.slice(3,4):"",b.authuser=
c||f);(h=vp(window.location.href,"jsmode")||"")&&(b.jsmode=h);k=vp(window.location.href,"forceexps")||"";b.forceexps=k;a.params.wr?(ra=a.params.wr.match(rp),ra=qp(ra[1],ra[2],ra[3],ra[4])):ra="";ra=((ra.startsWith("https:")||ra.startsWith("http:"))&&(ra.match(/\.google\.com:?\d*$/)||ra.match(/\.googlers\.com:?\d*$/))?a.params.wr:"https://support.google.com")+"/"+a.HD();Aa=[];for(cb in b)Yia(cb,b[cb],Aa);var cb=Aa.join("&");l=Xia(ra,cb);l=up(l,"origin",tp(document.location.href));p=w(a.params.wJ||
[]);for(r=p.next();!r.done;r=p.next())t=r.value,l=up(l,"origin",tp(t));eja(a,a.o,l);a.params.bQ&&((v=a.o)==null||v.sandbox.add("allow-top-navigation-by-user-activation"));a.params.qI&&((y=a.o)==null||y.sandbox.add("allow-downloads"));Ia(E)})}
function dja(a){return Ra(function(b){if(b.o==1)return b.yield(Tia({destination:window,iframe:a.o,origin:tp(a.o.src),Vn:a.oa,onMessage:function(c){a.params.xv&&a.params.xv(c.data)}}),2);
a.va=b.ma;Ia(b)})}
n.hA=function(a){a.setAttribute("frameBorder","0");this.params.ZS&&(a.title=this.params.ZS);a.name="embedFrame";a.tabIndex=0;a.style.position="relative";a.style.height="100%";a.style.width="100%"};
function eja(a,b,c){a.o.onload=function(){var e,f;(f=(e=a.params).onLoad)==null||f.call(e,a.o);An(a.params.aH||null);a.qa.resolve()};
c=vl(c);Fl(b,2,c)}
n.uD=function(){return{}};
function cja(a){return Ra(function(b){if(!a.hf)return b.return();a.params.aH&&(a.params.aH.style.position="absolute",a.hf.style.display="flex",a.hf.style.alignItems="center",a.hf.style.justifyContent="center",a.hf.appendChild(a.params.aH));Ia(b)})}
;function zp(a){this.Aa=se(a)}
u(zp,eh);function Ap(a){this.Aa=se(a)}
u(Ap,eh);function Bp(a){this.Aa=se(a)}
u(Bp,eh);var fja=[3,4,5,6,7,8];function Cp(a){this.Aa=se(a)}
u(Cp,eh);var gja=[2,3,4,6,7,9,10,11,12,13,14];function Dp(a){this.Aa=se(a,1)}
u(Dp,eh);var hja={};function Ep(a){this.Aa=se(a)}
u(Ep,eh);Ep.prototype.getKey=function(){return Df(this,1)};
Ep.prototype.setKey=function(a){return bg(this,1,a)};
Ep.prototype.getValue=function(){return Df(this,2)};
Ep.prototype.setValue=function(a){return bg(this,2,a)};function Fp(a){this.Aa=se(a)}
u(Fp,eh);Fp.prototype.xd=function(){return Af(this,5)};
Fp.prototype.setProductSpecificData=function(a,b){return Me(this,7,Ep,a,b)};function Gp(a){this.Aa=se(a)}
u(Gp,eh);function ija(a,b){return bg(a,1,b)}
;function Hp(a){this.Aa=se(a)}
u(Hp,eh);function jja(a,b){return of(a,1,kja,b)}
var kja=[1,2,3];function Ip(a){this.Aa=se(a)}
u(Ip,eh);function lja(a,b){return bg(a,1,b)}
;function Jp(a){this.Aa=se(a)}
u(Jp,eh);Jp.prototype.getKey=function(){return Df(this,1)};
Jp.prototype.setKey=function(a){return bg(this,1,a)};
Jp.prototype.getValue=function(){return Df(this,2)};
Jp.prototype.setValue=function(a){return bg(this,2,a)};function Kp(a){this.Aa=se(a)}
u(Kp,eh);function mja(a,b){return bg(a,1,b)}
function nja(a,b){return bg(a,2,b)}
Kp.prototype.xd=function(){return Af(this,3)};
function oja(a,b){return Xe(a,3,zd(b),0)}
function pja(a,b){return pf(a,4,b)}
Kp.prototype.setProductSpecificData=function(a,b){return Me(this,4,Jp,a,b)};
function qja(a,b){nf(a,Xj,5,b)}
;function Lp(a){this.Aa=se(a)}
u(Lp,eh);function Mp(a,b){return bg(a,9,b)}
function Np(a,b){return ag(a,10,b)}
function Op(a,b){return ag(a,13,b)}
function rja(a,b){return nf(a,Hp,14,b)}
function sja(a,b){return nf(a,Ip,15,b)}
function tja(a){return jf(a,Kp,16)}
function uja(a,b){return nf(a,Kp,16,b)}
function vja(a,b){return We(a,17,b,yd)}
function Pp(a,b){return Ye(a,17,yd,b,Ad)}
Lp.prototype.Bg=function(){return Af(this,19)};
Lp.prototype.Yc=function(a){return Xe(this,19,zd(a),0)};var wja=[0,[0,x]];var xja=[0,ei,ai,ei];zp.prototype.Ba=wi(xja);var yja=[0,[0,hi,-2,si,hi]];var zja=[0,hi];var Aja=[0];Ap.prototype.Ba=wi(Aja);var Bja=[0,hi];var Cja=[0,fja,hi,-1,ki,[0,hi,-1],ki,[0],ki,[0,[1,2],ii,-1,Bja],ki,[0,hi,Bja],ki,Aja,ki,[0]];Bp.prototype.Ba=wi(Cja);var Dja=[0,Zh,x,-3];var Qp=[0,gja,xja,ki,Cja,ki,[0,[0,x,-3],[0,[1,2,3],ki,[0],ki,[0,Dja],ki,[0,Dja]]],ki,yja,1,ki,wja,ki,[0],ei,ki,[0],ki,zja,ki,[0],ki,[0],ki,[0],ki,[0]];Cp.prototype.Ba=wi(Qp);var Eja=[0,[0,pi,x],Vj];var Rp=[-1,hja];Dp.prototype.Ba=wi(Rp);var Fja=[0,hi,-1];Ep.prototype.Ba=wi(Fja);var Sp=[0,1,x,-1,1,Zh,gi,ji,Fja,x,hk,1,x,Rp,ji,Eja];Fp.prototype.Ba=wi(Sp);var Gja=[0,[1,2,3],ki,[0],ki,[0],ki,[0,Zh,x]];var Hja=[0,hi,-2,si,x,-4];var Ija=[0,Hja];var Jja=[0,Hja];var Kja=[0,hi,x];Gp.prototype.Ba=wi(Kja);var Lja=[0,kja,ki,Kja,ki,Ija,ki,Jja];Hp.prototype.Ba=wi(Lja);var Mja=[0,[1],ki,[0,hi,-2]];var Nja=[0,hi,bi,hi];Ip.prototype.Ba=wi(Nja);var Oja=[0,hi,-1];Jp.prototype.Ba=wi(Oja);var Pja=[0,hi,-1,bi,ji,Oja,hk];Kp.prototype.Ba=wi(Pja);var Tp=[0,Mja,ei,2,Gja,2,hi,-1,x,Qp,Sp,x,Lja,Nja,Pja,ai,si,bi];Lp.prototype.Ba=wi(Tp);var Qja=[0,pi,-1,di,-2,x,di];var Rja=[0,ji,[0,x,mj,x],di];function Up(a){this.Aa=se(a)}
u(Up,eh);function Vp(a){this.Aa=se(a)}
u(Vp,eh);n=Vp.prototype;n.getUserAgent=function(){return Nf(this,3)};
n.setRegionCode=function(a){return ag(this,6,a)};
n.getProjectId=function(){return Uf(this,7)};
n.setProjectId=function(a){return Ce(this,7,Od(a))};
n.getPageType=function(){return Ef(this,21,100)};
n.Zi=function(){return Nf(this,26)};
n.Bg=function(){return Rf(this,27)};
n.Yc=function(a){return Yf(this,27,a)};
n.setApiKey=function(a){return ag(this,29,a)};
n.setSupportJourneyId=function(a){return ag(this,57,a)};var Wp=[0,Rh,Zda,-1];Up.prototype.Ba=wi(Wp);var Sja=[0,[37,38,39,41],x,-3,di,x,Xh,Wp,-1,li,Xh,pi,$h,Zh,-1,1,x,-1,Zh,pi,-3,x,pi,x,Zh,ji,Zk,x,-2,pi,x,-1,Ah,[!0,x,Vj],Qja,Vh,-2,Zh,Vh,1,x,Ah,[!0,x,Vj],ji,Sj,x,-7,pi,1,[0,x,ji,[0,[2,3],Zh,aea,fi],Xh,2,x,di,x],x,Rh,Rja,1,x];Vp.prototype.Ba=wi(Sja);var Tja=[0,x,pi,2,x,ji,gj,x,-1,1,x,1,di,x,10,Zh,gi,-1,x,-2,1,Zh,gi,x,di,x,-7,[0,pi,Zh],pi,ji,gj,x,[0,x],1,gi,-1];var Uja=[0,[1,2],Vh,ci];function Xp(a){this.Aa=se(a)}
u(Xp,eh);Xp.prototype.getLanguage=function(){return Nf(this,2)};
Xp.prototype.setLanguage=function(a){return ag(this,2,a)};
Xp.prototype.Xb=function(){return Nf(this,18)};
Xp.prototype.Nc=function(a){return ag(this,18,a)};var Yp=[0,x,-1,Sja,gi,x,-2,Tja,di,x,gi,di,pi,x,-1,Uja,x,-2,pi,di,x,1,x,-1,di];Xp.prototype.Ba=wi(Yp);function Zp(a,b,c,e,f){var h=Error.call(this,a+"/"+b+" "+c+" "+e);this.message=h.message;"stack"in h&&(this.stack=h.stack);this.serviceName=a;this.path=b;this.type=c;this.statusCode=e;this.responseText=f}
u(Zp,Error);function $p(a){var b=a.serverUrl;a=a.serviceName;this.serverUrl=b;this.serviceName=a}
$p.prototype.get=function(a,b,c,e){c=c===void 0?{}:c;e=e===void 0?new XMLHttpRequest:e;var f=this,h;return Ra(function(k){if(k.o==1)return k.yield(f.call("GET",a,c,e,"application/json+protobuf"),2);h=k.ma;try{return k.return(fh(b,h))}catch(l){throw aq(f,a),l;}})};
function Vja(a,b,c){c=c===void 0?{}:c;var e=e===void 0?new XMLHttpRequest:e;var f;return Ra(function(h){if(h.o==1)return h.yield(a.call("GET",b,c,e,"application/json"),2);f=h.ma;try{return h.return(JSON.parse(f))}catch(k){throw aq(a,b),k;}})}
$p.prototype.post=function(a,b,c,e,f){e=e===void 0?{}:e;f=f===void 0?new XMLHttpRequest:f;var h=this,k;return Ra(function(l){if(l.o==1)return l.yield(h.call("POST",a,e,f,"application/json+protobuf",b.serialize()),2);k=l.ma;try{return l.return(fh(c,k))}catch(p){throw aq(h,a),p;}})};
function Wja(a,b,c,e){e=e===void 0?{}:e;var f=f===void 0?new XMLHttpRequest:f;var h;return Ra(function(k){if(k.o==1)return k.yield(a.call("POST",b,e,f,"application/json",JSON.stringify(c)),2);h=k.ma;try{return k.return(JSON.parse(h))}catch(l){throw aq(a,b),l;}})}
$p.prototype.call=function(a,b,c,e,f,h){var k=this;return Ra(function(l){return l.return(new Promise(function(p,r){var t="";if(c.query){for(var v=[],y=w(Object.entries(c.query)),E=y.next();!E.done;E=y.next()){var oa=w(E.value);E=oa.next().value;oa=oa.next().value;oa=Array.isArray(oa)?oa:[oa];oa=w(oa);for(var ra=oa.next();!ra.done;ra=oa.next())ra=ra.value,v.push(encodeURIComponent(E)+"="+encodeURIComponent(ra))}v.length>0&&(t="?"+v.join("&"))}e.open(a,(k.serverUrl instanceof Function?k.serverUrl():
k.serverUrl)+"/"+b+t);e.timeout=c.timeout||0;c.withCredentials&&(e.withCredentials=!0);e.setRequestHeader("Content-Type",f);if(c.headers)for(t=w(Object.entries(c.headers)),v=t.next();!v.done;v=t.next())y=w(v.value),v=y.next().value,y=y.next().value,e.setRequestHeader(v,y);e.addEventListener("load",function(){if(e.status<200||e.status>299)Wm(k.serviceName+"_"+b+"_non_200_status"),r(new Zp(k.serviceName,b,"application_error",e.status,e.responseText));else{var Aa=e.responseText;Aa.startsWith(")]}'\n")&&
(Aa=Aa.substring(5));p(Aa)}});
e.addEventListener("error",function(){Wm(k.serviceName+"_"+b+"_error");r(new Zp(k.serviceName,b,"network_error"))});
e.addEventListener("timeout",function(){Wm(k.serviceName+"_"+b+"_timeout");r(new Zp(k.serviceName,b,"timeout"))});
h?e.send(h):e.send()}))})};
function aq(a,b){Wm(a.serviceName+"_"+b+"_parse_fail")}
;function bq(a){this.serverUrl=a.serverUrl;this.helpcenter=a.helpcenter;var b={hl:a.language,key:a.apiKey,request_source:""+a.requestSource,mendel_ids:a.mendelIds.join(",")};a.authUser!==void 0&&(b.authuser=""+a.authUser);a.serviceConfiguration&&(b.service_configuration=a.serviceConfiguration);this.ma=b;b={"X-SupportContent-AllowApiCookieAuth":"true","X-SupportContent-XsrfToken":a.xsrfToken};a.authToken&&(b.Authorization=a.authToken);this.o=b}
bq.prototype.get=function(a){var b=Xja(this,a),c=b.Nk,e=b.path;b=b.xI;return a.json?Vja(c,e,b):c.get(e,a.response,b)};
bq.prototype.post=function(a){var b=Xja(this,a),c=b.Nk,e=b.path;b=b.xI;return a.json?Wja(c,e,a.request,b):c.post(e,a.request,a.response,b)};
function Xja(a,b){var c,e,f={query:Object.assign({},a.ma,(c=b.queryParams)!=null?c:{},{helpcenter:(e=b.helpcenter)!=null?e:a.helpcenter}),headers:a.o,withCredentials:!0};return{Nk:new $p({serverUrl:a.serverUrl,serviceName:b.endpoint}),path:"apis/"+b.endpoint,xI:f}}
;var cq;function dq(){if(cq!==void 0)return cq;var a=z(),b=Number(a.au);return cq=new bq({serverUrl:a.ehn,helpcenter:a.ehc,language:a.lang,apiKey:a.key,requestSource:a.rs,mendelIds:a.mendel_ids,xsrfToken:a.xsrf,authUser:isNaN(b)?void 0:b,serviceConfiguration:a.service_configuration,authToken:a.auth_token})}
;function eq(a){this.Aa=se(a)}
u(eq,eh);n=eq.prototype;n.getContent=function(){return Df(this,1)};
n.setContent=function(a){return bg(this,1,a)};
n.clearContent=function(){return Ce(this,1)};
n.getId=function(){return Df(this,2)};
n.setId=function(a){return bg(this,2,a)};var Yja=[0,hi,-1];eq.prototype.Ba=wi(Yja);function fq(a){this.Aa=se(a)}
u(fq,eh);fq.prototype.setEnabled=function(a){return Xf(this,1,a)};var Zja=[0,ei,gi];fq.prototype.Ba=wi(Zja);function gq(a){this.Aa=se(a)}
u(gq,eh);gq.prototype.getUrl=function(){return Df(this,1)};
gq.prototype.setUrl=function(a){return bg(this,1,a)};
gq.prototype.setSupportJourneyId=function(a){return bg(this,2,a)};
gq.prototype.getLocale=function(){return Df(this,4)};
function hq(a,b){return nf(a,fq,6,b)}
;var iq=[0,hi,-3,Yja,Zja];gq.prototype.Ba=wi(iq);var $ja=[0,x,-1,si];var aka=[0,hi,-2,si,$ja];var bka=[0,hi,Uh,bi];var cka=[0,mj,hi,bka];var dka=[0,ji,cka,ji,aka];function jq(a){this.Aa=se(a)}
u(jq,eh);var kq=[0,x,di];jq.prototype.Ba=wi(kq);function lq(a){this.Aa=se(a)}
u(lq,eh);lq.prototype.getQuery=function(){return Df(this,1)};
lq.prototype.setQuery=function(a){return bg(this,1,a)};function mq(a){this.Aa=se(a)}
u(mq,eh);function nq(a){this.Aa=se(a)}
u(nq,eh);function oq(a){this.Aa=se(a)}
u(oq,eh);n=oq.prototype;n.getId=function(){return Df(this,1)};
n.setId=function(a){return bg(this,1,a)};
n.getLabel=function(){return Df(this,2)};
n.setLabel=function(a){return bg(this,2,a)};
n.getUrl=function(){return Lf(this,3,pq)};
n.setUrl=function(a){return af(this,3,pq,Td(a))};
n.getType=function(){return Ef(this,4)};
n.setType=function(a){return dg(this,4,a)};
var pq=[3,7,9,10,11];function qq(a){this.Aa=se(a)}
u(qq,eh);function rq(a,b){return lf(a,oq,1,Oe(b))}
;function sq(a){this.Aa=se(a)}
u(sq,eh);sq.prototype.getTitle=function(){return Df(this,1)};
sq.prototype.setTitle=function(a){return bg(this,1,a)};
sq.prototype.getDescription=function(){return Df(this,2)};
sq.prototype.setDescription=function(a){return bg(this,2,a)};function tq(a){this.Aa=se(a)}
u(tq,eh);function uq(a){return Df(a,2)}
;function vq(a){this.Aa=se(a)}
u(vq,eh);function wq(a){this.Aa=se(a)}
u(wq,eh);n=wq.prototype;n.getLabel=function(){return Df(this,1)};
n.setLabel=function(a){return bg(this,1,a)};
n.Ac=function(){return Ef(this,2)};
n.Qc=function(){return Ef(this,3)};
n.setIcon=function(a){return dg(this,3,a)};function xq(a){this.Aa=se(a)}
u(xq,eh);xq.prototype.getTitle=function(){return Df(this,1)};
xq.prototype.setTitle=function(a){return bg(this,1,a)};function yq(a){this.Aa=se(a)}
u(yq,eh);yq.prototype.getText=function(){return Df(this,1)};
yq.prototype.setText=function(a){return bg(this,1,a)};
yq.prototype.getStatus=function(){return Ef(this,2)};function zq(a){this.Aa=se(a)}
u(zq,eh);n=zq.prototype;n.getKey=function(){return Df(this,1)};
n.setKey=function(a){return ag(this,1,a)};
n.getValue=function(){return Df(this,2)};
n.setValue=function(a){return ag(this,2,a)};
n.Yb=function(){return hg(this,2)};function Aq(a){this.Aa=se(a)}
u(Aq,eh);function Bq(a){this.Aa=se(a)}
u(Bq,eh);n=Bq.prototype;n.getTitle=function(){return Df(this,1)};
n.setTitle=function(a){return ag(this,1,a)};
n.Qc=function(){return Ef(this,3)};
n.setIcon=function(a){return dg(this,3,a)};
n.getLabel=function(){return jf(this,yq,4)};
n.setLabel=function(a){return nf(this,yq,4,a)};function Cq(a){this.Aa=se(a)}
u(Cq,eh);function Dq(a){return jf(a,qq,4)}
function Eq(a){return jf(a,tq,6)}
;function Fq(a){this.Aa=se(a)}
u(Fq,eh);Fq.prototype.getMetaData=function(){return jf(this,jq,4)};var eka=[0,hi,-1,si];var fka=[0,hi,-1,eka];var Gq=[0,hi];lq.prototype.Ba=wi(Gq);var gka=[0,si];mq.prototype.Ba=wi(gka);var hka=[0,hi,-3];nq.prototype.Ba=wi(hka);var ika=[0,pq,hi,-1,ii,si,-2,ki,hka,hi,ii,-1,ki,gka];oq.prototype.Ba=wi(ika);var jka=[0,ji,ika];qq.prototype.Ba=wi(jka);var kka=[0,hi,-1,x];sq.prototype.Ba=wi(kka);var Hq=[0,x,-2];tq.prototype.Ba=wi(Hq);var lka=[0,hi];vq.prototype.Ba=wi(lka);var Iq=[0,hi,si,-2];wq.prototype.Ba=wi(Iq);var mka=[0,hi,ji,Iq,si,ji,Iq];xq.prototype.Ba=wi(mka);var nka=[0,hi,si];yq.prototype.Ba=wi(nka);var oka=[0,x,-1];zq.prototype.Ba=wi(oka);var pka=[0,ji,oka];Aq.prototype.Ba=wi(pka);var Jq=[0,x,pka,si,nka,x];Bq.prototype.Ba=wi(Jq);var Kq=[0,mka,kka,Jq,jka,ji,Jq,Hq,pi,-1,lka];Cq.prototype.Ba=wi(Kq);Fq.prototype.Ba=wi([0,ji,fka,dka,ji,Kq,kq,ji,Gq]);function Lq(a){this.Aa=se(a)}
u(Lq,eh);Lq.prototype.getHtmlContent=function(){return Df(this,1)};
Lq.prototype.setHtmlContent=function(a){return bg(this,1,a)};var qka=[0,hi];Lq.prototype.Ba=wi(qka);function Mq(a){this.Aa=se(a)}
u(Mq,eh);Mq.prototype.Vc=function(){return jf(this,Lq,1)};
Mq.prototype.Jg=la(15);Mq.prototype.Ba=wi([0,qka,hi,ei,ji,Gq]);function Nq(a){this.Aa=se(a)}
u(Nq,eh);Nq.prototype.Ba=wi([0,ji,Gq]);function Oq(a,b){var c=z();var e=(new gq).setUrl(c.bcUrl).setSupportJourneyId(c.support_journey_id);e=bg(e,3,c.hc);c=bg(e,4,c.lang);b&&nf(c,eq,5,b);a&&(b=(new fq).setEnabled(!0),a=Ye(b,2,Sd,a,Ud),hq(c,a));return c}
function Pq(a,b){var c=new Xp;if(z()){var e=gf(c,Vp,3);cg(e,21,z().pt);z().vid!==0&&gf(c,Vp,3).Yc(z().vid)}b&&(e=gf(c,Vp,3),pf(e,45,b));a&&c.Nc(a);return c}
function Qq(a,b){b=b===void 0?{}:b;var c=b.Zb===void 0?dq():b.Zb;var e=b.zA===void 0?!1:b.zA;var f;return Ra(function(h){if(h.o==1)return Ja(h,2),h.yield(c.post({json:!1,endpoint:"aiarticlerefinedintent",queryParams:{v:"1"},request:a,response:Fq}),4);if(h.o!=2)return h.return(h.ma);f=La(h);if(e)throw f;if(z()&&z().env!=="PROD")throw f;return h.return(new Fq)})}
function rka(a){var b={};var c=b.Zb===void 0?dq():b.Zb;var e;return Ra(function(f){if(f.o==1)return Ja(f,2),f.yield(c.post({json:!1,endpoint:"aiarticlesubmitquery",queryParams:{v:"1"},request:a,response:Mq}),4);if(f.o!=2)return f.return(f.ma);e=La(f);throw e;})}
function ska(a){var b={};var c=b.Zb===void 0?dq():b.Zb;var e;return Ra(function(f){if(f.o==1)return Ja(f,2),f.yield(c.post({json:!1,endpoint:"aiarticlegeneratesuggestedqueries",queryParams:{v:"1"},request:a,response:Nq}),4);if(f.o!=2)return f.return(f.ma);e=La(f);throw e;})}
;function tka(a){return(new eq).setContent([wf(a,4),wf(a,5),wf(a,6)].join("\n"))}
function uka(a){var b,c,e=(c=(b=Rq(a,210,"CidArrayWithMccAndChildAccounts"))==null?void 0:Pk(b).map(function(l){return So(Nk(l))}))!=null?c:[],f,h,k=(h=(f=Rq(a,210,"ExtCidArrayWithMccAndChildAccounts"))==null?void 0:Pk(f).map(function(l){return So(Nk(l))}))!=null?h:[];
return e.map(function(l,p){return{cid:l,Mo:k.at(p)}})}
function vka(a){var b=a.mA===void 0?!1:a.mA;var c=a.customerContext;var e=a.yq;a=a.externalCid;if(b)return{cid:-1,Mo:-1,descriptiveName:""};b="";e||(e=uka(c));if(a){var f=a;c=wka(e,a)}else b=xka(c),c=b.cid,b=b.descriptiveName,c!==void 0&&(f=yka(e,c));return{cid:c,Mo:f,descriptiveName:b}}
function xka(a){var b=zka(a,401,"MaxSpendCid"),c=zka(a,1,"CustomerId");if(b){var e;c=(e=Aka(a,401,"MaxSpendCustomerDescriptiveName"))!=null?e:"";return{cid:b,descriptiveName:c}}if(c){var f;b=(f=Aka(a,1,"DescriptiveName"))!=null?f:"";return{cid:c,descriptiveName:b}}var h;return{cid:(h=Rq(a,210,"CidArrayWithMccAndChildAccounts"))==null?void 0:Pk(h).map(function(k){return So(Nk(k))}).sort().reverse()[0],
descriptiveName:""}}
function yka(a,b){var c,e;return(e=a==null?void 0:(c=a.find(function(f){return f.cid===b}))==null?void 0:c.Mo)!=null?e:void 0}
function wka(a,b){var c,e;return(e=a==null?void 0:(c=a.find(function(f){return f.Mo===b}))==null?void 0:c.cid)!=null?e:void 0}
function zka(a,b,c){var e;return Ro((e=Rq(a,b,c))==null?void 0:Nk(Pk(e)[0]))}
function Aka(a,b,c){(a=Rq(a,b,c))==null?a=void 0:(a=Pk(a)[0],a=wf(a,1));return a}
function Rq(a,b,c){return Rk(a).find(function(e){return Ef(e,1)===b&&Df(e,2)===c})}
function Sq(a){kp(a.action,"",a.sveType,a.index,a.eventSpecificData)}
;function Tq(a){a=a===void 0?new kk:a;this.state=this.priority=0;this.yc=Bka(a);Uq(this);Vq(this);Wq(this)}
function Xq(a){var b;return(b=lk(a.yc))!=null?b:new Ij}
n=Tq.prototype;n.getPriority=function(){return this.priority};
function Yq(a){var b,c=(b=lk(a.yc))!=null?b:new Ij;nk(a.yc,c);return c}
function Cka(a){a=Yq(a);var b,c=(b=a.getFrdContext())!=null?b:new rj;Jj(a,c);return c}
n.getId=function(){var a;return(a=Ad(Ae(this.yc,2)))!=null?a:null};
function Zq(a){var b,c,e;return(e=(b=lk(a.yc))==null?void 0:(c=b.getFrdContext())==null?void 0:xf(c,1))!=null?e:null}
function $q(a){var b,c;return(c=(b=lk(a.yc))==null?void 0:xf(b,5))!=null?c:null}
n.setPriority=function(a){this.priority=a;return this};
n.isRequired=function(){var a;return(a=yf(this.yc,5))!=null?a:!1};
n.setRequired=function(a){Wf(this.yc,5,a);return this};
n.Cr=function(){return Pe(this.yc,4,xd,Oe()).includes(1)||this.Vq()===5};
function ar(a,b){Pe(a.yc,4,xd,Oe()).includes(b)||(Ze(a.yc,4,vd,b,void 0,xd),Uq(a))}
n.Vq=function(){var a,b,c;return(c=(a=lk(this.yc))==null?void 0:(b=a.getFrdContext())==null?void 0:xf(b,2))!=null?c:null};
n.Xc=function(a){this.Vq()!==a&&(Cka(this).Xc(a),Uq(this));return this};
n.Yb=function(){return this.getValues().length>0};
n.getValues=function(){var a;if((a=lk(this.yc))==null||!Lj(a))return[];var b;a=(b=lk(this.yc))==null?void 0:Lj(b);var c,e,f,h,k,l,p,r,t,v,y,E;return((c=a.vk())==null?0:Aj(c).length)?(e=a.vk())==null?void 0:Aj(e,Sc):((f=a.ih())==null?0:vf(f,Oe()).length)?(h=a.ih())==null?void 0:vf(h,Oe(Sc)):((k=a.Xo())==null?0:xj(k).length)?(l=a.Xo())==null?void 0:xj(l).map(function(oa){return vf(oa,Oe(Sc))}):((p=Cj(a))==null?0:Aj(p).length)?(r=Cj(a))==null?void 0:Aj(r,Sc):((t=Ej(a))==null?0:vf(t,Oe()).length)?(v=
Ej(a))==null?void 0:vf(v,Oe(Sc)):((y=Gj(a))==null?0:Jf(y,Oe()).length)?(E=Gj(a))==null?void 0:Jf(E,Oe()).map(function(oa){return uc(oa)}):$ca(a)!=null?[a.Uq()]:[]};
n.vk=function(){var a,b,c,e;return(e=(a=lk(this.yc))==null?void 0:(b=Lj(a))==null?void 0:(c=b.vk())==null?void 0:Aj(c,Sc))!=null?e:null};
n.ih=function(){var a,b,c,e;return(e=(a=lk(this.yc))==null?void 0:(b=Lj(a))==null?void 0:(c=b.ih())==null?void 0:vf(c,Oe(Sc)))!=null?e:null};
n.Xo=function(){var a,b,c,e;return(e=(a=lk(this.yc))==null?void 0:(b=Lj(a))==null?void 0:(c=b.Xo())==null?void 0:xj(c).map(function(f){return vf(f,Oe(Sc))}))!=null?e:null};
n.Uq=function(){var a,b,c;return(c=(a=lk(this.yc))==null?void 0:(b=Lj(a))==null?void 0:$ca(b))!=null?c:null};
n.Lg=function(a){br(this).Lg(cr(a));Wq(this);return this};
n.Gi=function(a){br(this).Gi(dr(a));Wq(this);return this};
n.Yv=function(a){br(this).Yv(yj(new wj,a.map(function(b){return dr(b)})));
Wq(this);return this};
n.setDateValues=function(a){Fj(br(this),er(a));Wq(this);return this};
n.Qh=function(a){br(this).Qh(a);Wq(this);return this};
function br(a){var b=new Bj;Mj(Yq(a),b);return b}
function Uq(a){var b;a.Cr()&&((b=lk(a.yc))==null?0:Ee(b,rj,1))&&(ar(a,1),a.Xc(5))}
function Vq(a){var b,c=(b=$q(a))!=null?b:Zq(a);c&&Yf(a.yc,2,c)}
n.aK=function(){var a,b=(a=lk(this.yc))==null?void 0:Lj(a);if(!b)return 0;var c;return(c=Dka.get(ff(b,Pf)))!=null?c:0};
function Wq(a){var b=a.aK();b===0?Ce(a.yc,3):cg(a.yc,3,b)}
n.nc=function(){return!!this.getId()&&this.Yb()};
var Dka=new Map([[3,2],[2,1],[6,8],[8,4],[4,3],[5,11],[7,9]]);function Eka(a){var b=Kj(new Ij,a.frdIdentifier);if(a.frdContext){var c=a.frdContext;c=sj(new rj,c.frdIdentifier).Xc(c.contextType)}else c=void 0;return Mj(Jj(b,c),Fka(a.selectedValueList))}
function Fka(a){if(a){if(a.stringValues)return(new Bj).Lg(cr(a.stringValues.value));if(a.intValues)return(new Bj).Gi(dr(a.intValues.value));if(a.intListValues)return(new Bj).Yv(yj(new wj,a.intListValues.list.map(function(b){return dr(b.value)})));
if(a.enumValueIdentifiers)return Dj(new Bj,cr(a.enumValueIdentifiers.value));if(a.dateTimeValues)return Fj(new Bj,er(a.dateTimeValues.valueTimeMillis));if(a.bytesValues)return Hj(new Bj,Gka(a.bytesValues.value));if(typeof a.boolValue==="boolean")return(new Bj).Qh(a.boolValue)}}
function Hka(a){var b=Kj(new Ij,a.frd_identifier);if(a.frd_context){var c=a.frd_context;c=sj(new rj,c.frd_identifier).Xc(c.context_type)}else c=void 0;return Mj(Jj(b,c),Ika(a.selected_value_list))}
function Ika(a){if(a){if(a.string_values)return(new Bj).Lg(cr(a.string_values.value));if(a.int_values)return(new Bj).Gi(dr(a.int_values.value));if(a.int_list_values)return(new Bj).Yv(yj(new wj,a.int_list_values.list.map(function(b){return dr(b.value)})));
if(a.enum_value_identifiers)return Dj(new Bj,cr(a.enum_value_identifiers.value));if(a.date_time_values)return Fj(new Bj,er(a.date_time_values.value_time_millis));if(a.bytes_values)return Hj(new Bj,Gka(a.bytes_values.value));if(typeof a.bool_value==="boolean")return(new Bj).Qh(a.bool_value)}}
function fr(a){var b=a.getFrdContext(),c=Vf(a,5);a=Lj(a);var e={};if(b){var f=Vf(b,1);b=Vf(b,2);var h={};typeof f==="number"&&(h.frd_identifier=f);typeof b==="number"&&(h.context_type=b);e.frd_context=h}typeof c==="number"&&(e.frd_identifier=c);a&&(e.selected_value_list=Jka(a));return e}
function Jka(a){var b=a.vk();if(b)return{string_values:{value:Aj(b,Sc)}};if(b=a.ih())return{int_values:{value:vf(b,Oe(Sc))}};if(b=Cj(a))return{enum_value_identifiers:{value:Aj(b,Sc)}};if(b=Ej(a))return{date_time_values:{value_time_millis:vf(b,Oe(Sc))}};if(b=Gj(a))return{bytes_values:{value:Jf(b,Oe()).map(function(c){return uc(c)})}};
b=Qf(a,He(a,Pf,7));return typeof b==="boolean"?{bool_value:b}:(a=a.Xo())?{int_list_values:{list:xj(a).map(function(c){return{value:vf(c,Oe(Sc))}})}}:{}}
function Bka(a){if(a instanceof kk)return a.clone();if("frdId"in a||"frdValue"in a&&!Array.isArray(a.frdValue)){var b=new kk;b=Yf(b,2,a.frdId);b=nk(b,a.frdValue?Eka(a.frdValue):void 0);b=cg(b,3,a.frdValueType);b=We(b,4,a.frdUsages,vd);return Wf(b,5,a.isRequired)}if("frd_id"in a||"frd_value"in a&&!Array.isArray(a.frd_value))return b=new kk,b=Yf(b,2,a.frd_id),b=nk(b,a.frd_value?Hka(a.frd_value):void 0),b=cg(b,3,a.frd_value_type),b=We(b,4,a.frd_usages,vd),Wf(b,5,a.is_required);if(a instanceof Ij)return gr(a.clone());
if("frdIdentifier"in a||"frdContext"in a)return gr(Eka(a));if("frd_identifier"in a||"frd_context"in a)return gr(Hka(a));throw Error("Unrecognized FRD representation:"+JSON.stringify(a,null,"\t"));}
function dr(a){return(new vj).Mg(a)}
function cr(a){return(new zj).Mg(a)}
function er(a){return Iea(new uj,a)}
function Gka(a){return(new tj).Mg(a==null?void 0:a.slice())}
function gr(a){return nk(new kk,a)}
;function hr(a,b,c,e,f,h,k,l,p,r,t,v){window.sc_gseEmbed&&window.sc_gseEmbed.yL(a,{sA:b,sessionConfigId:c,entryPoint:e,kf:f,genieSessionId:h,zK:k,yK:l,uK:p,Yh:r,productSpecificCustomData:t,Ql:v})}
function Kka(a,b,c){window.sc_gseEmbed&&window.sc_gseEmbed.mU({kf:a.kf,jJ:a.jJ,Yh:c.Yh,sA:b,Ql:c.Ql,sessionConfigId:c.sessionConfigId,entryPoint:a.entryPoint,genieSessionId:c.genieSessionId,message:c.message})}
function Lka(a,b,c){window.sc_gseEmbed&&window.sc_gseEmbed.lU({caseId:a,chatSupportRequestId:b,IK:c})}
;function ir(a){this.Aa=se(a)}
u(ir,eh);ir.prototype.getQuery=function(){return Df(this,3)};
ir.prototype.setQuery=function(a){return bg(this,3,a)};ir.prototype.Ba=wi([0,Yp,iq,hi,Sp,Qp,Uh]);function jr(a){this.Aa=se(a)}
u(jr,eh);function Mka(a){var b=Pq();return nf(a,Xp,1,b)}
function Nka(a,b){return nf(a,gq,2,b)}
;jr.prototype.Ba=wi([0,Yp,iq]);function kr(a){this.Aa=se(a)}
u(kr,eh);function lr(a,b){return bg(a,1,b)}
function mr(a,b){return bg(a,4,b)}
function Oka(a,b){return ag(a,10,b)}
function nr(a,b){return bg(a,13,b)}
var Pka=yi(kr);var Qka=[0,hi,-1,ei,hi,1,gi,1,hi,1,x,1,ei,hi,ei,1,si,Rp,ai,hi,-1,[-2,{},[-2,{},pi]],hi,-2,ei,hi,ei];kr.prototype.Ba=wi(Qka);function or(a){this.Aa=se(a)}
u(or,eh);function pr(a,b){return ag(a,1,b)}
function qr(a,b){return cg(a,2,b)}
function rr(a,b){return cg(a,3,b)}
;var Rka=[0,x,pi,-3];or.prototype.Ba=wi(Rka);function sr(a){this.Aa=se(a)}
u(sr,eh);function tr(a,b){return ag(a,1,b)}
;var Ska=[0,x];sr.prototype.Ba=wi(Ska);function ur(a){this.Aa=se(a)}
u(ur,eh);function Tka(a,b){return ag(a,1,b)}
function vr(a,b){return ag(a,2,b)}
function wr(a,b){return ag(a,3,b)}
function xr(a,b){return nf(a,or,4,b)}
function yr(a,b){return uf(a,5,sr,b)}
function zr(a){var b=new ur;return cg(b,6,a)}
;var Uka=[0,x,-2,Rka,ji,Ska,pi];ur.prototype.Ba=wi(Uka);function Ar(a){var b=a.lq;var c=a.articleMetadata;var e=a.zf;var f=a.genieSessionId;var h=a.Ag;var k=a.gy;var l=a.externalCid;var p=a.Oe;var r=a.Xj;var t=a.Wj;a=a.Gm===void 0?function(){}:a.Gm;
xo.call(this);this.o=this.ma=0;this.userInput="";this.ua=1;this.pastQueries=[];this.lq=b;this.articleMetadata=c;this.zf=e!=null?e:[];this.genieSessionId=f;this.Ag=h;this.hk=k!=null?k:0;this.gy=k!=null?k:0;this.externalCid=l;var v;this.oa=((v=z())==null?void 0:v.hc)+"-ahc_ai_answers_cta-csp";this.Oe=p!=null?p:!1;this.Xj=r!=null?r:!1;this.Wj=t!=null?t:!1;this.Gm=a;this.sveType=b===1?292:297}
u(Ar,xo);function Br(a,b){a.userInput=b;a.Da(2)}
Ar.prototype.Jg=la(14);Ar.prototype.Vc=function(){return this.answer};
function Vka(a){var b,c,e,f,h;Ra(function(k){if(k.o==1){if(a.ma===1||a.ma===2)return k.return();Cr(a,1);Ja(k,2);b=Mka(Nka(new jr,hq(Oq([],a.articleMetadata),(new fq).setEnabled(!0))));return k.yield(ska(b),4)}if(k.o!=2)return c=k.ma,a.zf=[].concat(ya(lf(c,lq,1,Oe()))),Cr(a,2),a.zf.length>0&&(e=yr(new ur,a.zf.map(function(l){return tr(new sr,l.getQuery())})),Sq({action:12,
sveType:a.sveType,eventSpecificData:e})),Ka(k,0);f=La(k);((h=z())==null?void 0:h.env)!=="PROD"&&console.error("error while loading GenerateSuggestedQueries data: "+f);Cr(a,3);Ia(k)})}
function Dr(a,b){var c,e,f,h,k,l,p,r,t;Ra(function(v){if(v.o==1){if(a.o===1)return v.return();a.answer=void 0;Er(a,1);Ja(v,2);a.pastQueries.push(b);c=Wka(a,b);return v.yield(rka(c),4)}if(v.o!=2)return e=v.ma,yf(e,3)||(a.zf=[].concat(ya(lf(e,lq,4,Oe())))),a.answer=e.Vc(),a.qa=Df(e,2),Br(a,b),Er(a,2),a.answer&&(f=rr(qr(pr(new or,a.genieSessionId),a.Ag),a.hk),h=Tka(xr(new ur,f),Df(e,2)),Sq({action:14,sveType:a.sveType,eventSpecificData:h})),!yf(e,3)&&a.zf.length>0&&(k=rr(qr(pr(new or,a.genieSessionId),
a.Ag),a.hk),l=yr(xr(new ur,k),a.zf.map(function(y){return tr(new sr,y.getQuery())})),Sq({action:12,
sveType:a.sveType,eventSpecificData:l})),Ka(v,0);p=La(v);((r=z())==null?void 0:r.env)!=="PROD"&&console.error("error while loading SubmitQuery data: "+p);Er(a,4);t=xr(new ur,rr(qr(pr(new or,a.genieSessionId),a.Ag),a.hk));Sq({action:21,sveType:a.sveType,eventSpecificData:t});Ia(v)})}
function Cr(a,b){b!==0&&(a.ma=b,a.Da(0),a.Gm())}
function Er(a,b){b!==0&&(a.o=b,b!==3&&(a.Da(0),a.Gm()))}
function Wka(a,b){var c=new ir;var e=Oq(a.pastQueries,a.articleMetadata);c=nf(c,gq,2,e);e=Pq();b=nf(c,Xp,1,e).setQuery(b);c=a.oa;a=a.externalCid;var f=z();e=window.sc_helpcenterPageModelProto;var h=new Fp;h=ag(h,2,f.hc);f=ag(h,3,f.ehc);c=ag(f,8,c);e&&"config"in e&&(e=e==null?void 0:e.config)&&e.hasOwnProperty("product_escalations_id")&&Yf(c,5,e.Wpa);if(a&&!isNaN(Number(a))){e=Kj(new Ij,8000001).setFieldName("user_context_external_cid");f=new Bj;h=f.Gi;var k=new vj;a=Ze(k,1,Dd,Number(a),void 0,Ld);
a=Mj(e,h.call(f,a));a=Zj(a);nf(c,Xj,9,a)}b=nf(b,Fp,4,c);a=z();c=new Cp;e=new zp;e=Ye(e,2,yd,a.mendel_ids,Ad);c=nf(c,zp,1,e);e=new Bp;e=bg(e,1,a.bcUrl);a=bg(e,2,a.title);e=new Ap;a=of(a,7,fja,e);a=of(c,2,gja,a);return nf(b,Cp,5,a)}
;function Fr(){A.call(this,"sc.discovery.aiAnswers.TextField")}
u(Fr,A);n=Fr.prototype;
n.content=function(a){var b=this;this.element("div","class","root",function(){var c,e;b.o=b.element("input","disabled",(c=a==null?void 0:a.disabled)!=null?c:!1,"class","native-input","placeholder",b.getPlaceholder(a),"oninput",function(){var h,k,l=(k=(h=b.o)==null?void 0:h.value)!=null?k:"";a&&a.Bc&&a.Bc(l)},"onkeyup",function(h){h.key==="Enter"&&(a==null?0:a.uf)&&a.uf()},"onfocus",function(){return void b.onFocus(a)},"onblur",function(){return void b.onBlur(a)},"aria-label",(e=a==null?void 0:a.ariaLabel)!=
null?e:"","");
var f;b.o.value=(f=a==null?void 0:a.value)!=null?f:""})};
n.Fe=function(a,b){return a===void 0&&b===void 0?!1:a===void 0||b===void 0?!0:!(a.value===b.value&&a.placeholder===b.placeholder&&a.Bc===b.Bc&&a.uf===b.uf)};
n.getPlaceholder=function(a){var b;return(b=a==null?void 0:a.placeholder)!=null?b:""};
n.onFocus=function(a){if(a&&a.onFocus)a.onFocus()};
n.onBlur=function(a){if(a&&a.onBlur)a.onBlur()};function Gr(a){a=a.ob;A.call(this,"sc.discovery.aiAnswers.FloatingAiAnswers");var b=this;this.oa=this.uf.bind(this);this.qa=this.Bc.bind(this);this.ya=this.va.bind(this);this.ma=null;this.ob=a;this.o=new Go({ariaLabel:"Send",disabled:!0,icon:"gm/send_spark",style:1,Ib:"color-label",trigger:function(){b.oa()}});
this.watch(this.ob,0);this.watch(this.ob,2);this.watch(this.ob,1);this.watch(this.ob,1);this.watch(this.ob,2);Xka(this)}
u(Gr,A);function Xka(a){function b(){Yka(a)}
window.addEventListener("load",b);window.addEventListener("resize",b);window.addEventListener("scroll",b);window.addEventListener("DOMContentLoaded",b)}
function Yka(a){var b=document.getElementsByClassName("scDiscoveryAianswersroot")[0];b&&(aha(b)-(Tm()||0)>0?a.ma.style.display="none":a.ma.style.display="")}
Gr.prototype.content=function(){var a=this;this.ma=this.element("div","class",{root:!0,"root-personalized":!Em(),"root-personalized-dark":Em()},function(){Zka(a);$ka(a)});
this.ma.style.display="none";Yka(this)};
function Zka(a){a.element("div","class","header",function(){a.element("div","class","header-icon",function(){(new Co({icon:"gm/help_guide_spark"})).render()});
a.element("div","class","title",function(){return $n("Need more help?")})})}
function $ka(a){a.element("div","class","ai-answers-container",function(){a.element("div","class","text-field-container",function(){(new Fr).render({disabled:a.ob.o===1,uf:function(){a.oa()},
Bc:a.qa,placeholder:"Ask our AI agent",value:a.ob.userInput});a.o.render()});
a.ob.ma===1?a.element("div","class","answer-container-loading","Generating suggestions..."):a.ob.o===1?a.element("div","class","answer-container-loading","Generating results..."):ala(a,a.ob.zf)})}
Gr.prototype.uf=function(){var a=this.ob.userInput;Dr(this.ob,a);var b=rr(qr(pr(new or,this.ob.genieSessionId),this.ob.Ag),this.ob.hk);a=xr(wr(zr(2),a),b);Sq({action:22,sveType:this.ob.sveType,eventSpecificData:a})};
Gr.prototype.Bc=function(a){this.ob.userInput!==a&&(a.trim()!==""?this.o.model.mf()&&this.o.setDisabled(!1):this.o.model.mf()||this.o.setDisabled(!0),Br(this.ob,a))};
Gr.prototype.va=function(a,b){var c=a[b].getQuery();Br(this.ob,c);Dr(this.ob,c);var e=rr(qr(pr(new or,this.ob.genieSessionId),this.ob.Ag),this.ob.hk);c=xr(wr(zr(2),c),e);Sq({action:8,sveType:this.ob.sveType,eventSpecificData:c,index:b+","+a.length})};
function ala(a,b){a.element("div","class","suggested-queries-container",function(){b.forEach(function(c,e){a.element("div","class","suggested-query",function(){var f=c.getQuery();(new Go({rg:"259px",disabled:!1,icon:"gm/prompt_suggestion",style:12,text:f,Ib:"on-surface-variant",trigger:function(){a.ya(b,e)}})).render()})})})}
;function Hr(a){this.Aa=se(a)}
u(Hr,eh);function Ir(a,b){return Ze(a,4,Sd,b,void 0,Ud)}
function Jr(a,b){return Ze(a,6,Sd,b,void 0,Ud)}
function Kr(a,b){return dg(a,3,b)}
function Lr(a,b){return Xe(a,7,Hd(b),"0")}
function Mr(a,b){return uf(a,8,tq,b)}
function bla(a){return Pe(a,10,xd,Oe())}
;var Nr=[0,gi,si,-1,gi,[0,hi,-2,bi,[0,ei]],gi,Uh,ji,Hq,si,ri,-1,ei];Hr.prototype.Ba=wi(Nr);function Or(a,b){var c=b.experienceType;b={experienceType:c,issueType:b.issueType,actionId:b.actionId,actionType:b.actionType,sessionId:b.sessionId,viewType:b.viewType,genieDataCount:b.genieDataCount===void 0?0:b.genieDataCount,subIssueType:b.subIssueType};c===1&&delete b.issueType;c=JSON.stringify(b);kp(a,c,262)}
function Pr(a){var b=a.action;var c=a.Oa;var e=a.viewType,f,h,k;a=a.actionId||((k=(f=c.o)==null?void 0:(h=Dq(f))==null?void 0:rq(h)[0].getId())!=null?k:"");e=e!=null?e:c.Qd;if(c.experienceType===1){var l,p;e={experienceType:c.experienceType,actionId:a,actionType:Qr(c),sessionId:Rr(c),viewType:e,genieDataCount:(p=(l=c.genieData)==null?void 0:l.length)!=null?p:0}}else{var r,t;e={experienceType:c.experienceType,issueType:c.issueType,actionId:a,actionType:Qr(c),sessionId:Rr(c),viewType:e,genieDataCount:(t=
(r=c.genieData)==null?void 0:r.length)!=null?t:0,subIssueType:cla(c)}}c=JSON.stringify(e);kp(b,c,262)}
function Sr(a){return(new em).build().Wd(a)}
function Tr(a){return a.length===10?a.substring(0,3)+"-"+a.substring(3,6)+"-"+a.substring(6,10):a}
;function Ur(a){a=a.ob;A.call(this,"sc.discovery.AiAnswers");var b=this;this.Ca=this.Bc.bind(this);this.va=this.uf.bind(this);this.Fa=this.cO.bind(this);this.Ia=this.wL.bind(this);this.qa=function(){b.wL();b.ma.removeEventListener("focusin",b.qa)};
this.ma=null;this.dark=Em();this.ob=a;this.ob.Wj&&(new Gr({ob:this.ob})).render();this.Ha=new Fr;this.oa=new Go({ariaLabel:"Send",icon:"gm/send_spark",Ib:"color-label",style:1,disabled:!0,trigger:function(){b.va()}});
this.ya=this.ob.ma;this.o=this.ob.o;this.watch(this.ob,0);this.watch(this.ob,2);this.watch(this.ob,1)}
u(Ur,A);n=Ur.prototype;n.content=function(){var a=this;this.ya=this.ob.ma;this.o=this.ob.o;this.element("div","class",{root:!0,"root-personalized":this.ob.Oe&&!this.dark,"root-standalone":this.ob.lq===0},function(){a.element("div","class",{"input-bar":!0,"input-bar-personalized":a.ob.Oe},function(){dla(a);a.oa.render()});
a.ob.lq===0&&a.ya===1&&a.element("div","class","answer-container-loading",a.ob.Oe?"Generating results...":"");ela(a,a.ob.Vc());fla(a,a.ob.zf);a.ob.Oe&&gla(a)})};
function dla(a){a.element("div","class","text-field-container",function(){a.Ha.render({disabled:a.o===1,value:a.ob.userInput,placeholder:"Need help? Ask our AI agent for support",Bc:a.Ca,uf:function(){a.va()},
onFocus:function(){var b=a.ob;b.answer||(b.ua=0,b.Da(1),b.Gm())}})})}
function fla(a,b){hla(a)&&a.element("div","class","suggested-queries-container",function(){b.forEach(function(c,e){a.element("div","class","suggested-query",function(){var f=c.getQuery();(new Go({icon:"gm/prompt_suggestion",text:f,disabled:a.o===1,Ib:"on-surface-variant",style:10,trigger:function(){a.Fa(b,e)}})).render()})})})}
function ela(a,b){a.o===1&&a.element("div","class","answer-container-loading","tabindex","-1","Just a second...").focus();a.o===4&&a.element("div","class","answer-container-error","There was a problem generating a response. Please try asking your question again.");a.o!==2&&a.o!==3||a.element("div","class","answer-container",function(){a.ma=a.element("div","id","answer-content","class","answer-content","tabindex","0",function(){a.element("div","class","answer",Sr(b.getHtmlContent()));a.element("div",
"class","deep-dive-button",new Go({text:"Continue chat with AI Agent",trigger:function(){var e=a.ob;hr("",!0,e.oa,4,void 0,void 0,void 0,void 0,!1,void 0,void 0,!1);var f=rr(qr(pr(new or,e.genieSessionId),e.Ag),e.hk);f=Tka(xr(new ur,f),e.qa);Sq({action:48,sveType:e.sveType,eventSpecificData:f});Br(a.ob,"");a.ma.style.display="none";a.ob.Gm()},
icon:"gm/chat_spark",style:11,padding:"0.75rem 1rem"}));a.ob.Oe||ila(a)});
a.o===2&&a.ma.focus();a.ma.offsetHeight>400&&jla(a);var c=document.getElementById("show-more-wrapper");c!=null&&c.style.display!=="none"?a.ma.addEventListener("focusin",a.qa):a.ma.removeEventListener("focusin",a.qa);Er(a.ob,3)})}
function ila(a){a.o!==2&&a.o!==3||a.element("div","class","disclaimer",function(){a.element("span","AI summaries and responses can have mistakes. ");a.element("a","href","https://policies.google.com/terms?hl=en","target","_blank","Learn more.")})}
function gla(a){a.element("div","class","disclaimer-right-aligned",function(){a.element("span","AI can make mistakes.     ");a.element("a","href","https://policies.google.com/terms?hl=en","target","_blank","Learn more.")})}
function jla(a){a.element("div","id","show-more-wrapper","class","show-more-wrapper",function(){a.element("div","class","overflow-fade");a.element("div","class","show-more-container",new Go({text:"Show more",trigger:a.Ia,icon:"gm/keyboard_arrow_down",wc:!0,rg:"100%",style:10}))})}
n.Bc=function(a){this.ob.userInput!==a&&(a.trim()!==""?this.oa.model.mf()&&this.oa.setDisabled(!1):this.oa.model.mf()||this.oa.setDisabled(!0),Br(this.ob,a))};
n.uf=function(){var a=this.ob.userInput;Dr(this.ob,a);var b=rr(qr(pr(new or,this.ob.genieSessionId),this.ob.Ag),this.ob.hk);a=xr(wr(zr(1),a),b);Sq({action:22,sveType:this.ob.sveType,eventSpecificData:a})};
n.cO=function(a,b){var c=a[b].getQuery();Br(this.ob,c);Dr(this.ob,c);var e=rr(qr(pr(new or,this.ob.genieSessionId),this.ob.Ag),this.ob.hk);c=xr(wr(zr(1),c),e);Sq({action:8,sveType:this.ob.sveType,eventSpecificData:c,index:b+","+a.length})};
n.wL=function(){document.getElementById("answer-content").style.maxHeight="none";document.getElementById("show-more-wrapper").style.display="none";this.ob.Gm()};
function hla(a){var b=a.ob.lq===0;var c=a.ob;c=!!c.zf&&c.zf.length>0;var e=a.ob.Ag===1||a.ob.gy===71,f=a.ob.Ag===2||a.ob.Ag===5&&a.ob.gy!==71,h=a.ob.Ag===6,k=a.ob.ua===0;return a.o===2||a.o===3||b&&c||e||(f||h)&&(a.ob.Xj||k)}
;function kla(a,b,c,e,f,h){var k,l,p,r,t,v;return Ra(function(y){k=document.getElementById("ai-answers-container");if(!k||c||e)return y.return();l=sfa((new Lk).setTitle(a.title),a.subtext).setContent(a.content);p=Sk(JSON.stringify(b));r=vka({customerContext:p});t=r.Mo;v=new Ar({lq:0,articleMetadata:tka(l),externalCid:t===void 0?"":String(t),Oe:f,Wj:h});Vka(v);ho(k,function(){(new Ur({ob:v})).render();Sq({action:1,sveType:v.sveType})});
Ia(y)})}
hb("sc.discovery.ai_answers.initialize",kla);function lla(a){xo.call(this);this.ma=a;this.scrollLeft=this.o=0}
u(lla,xo);function Vr(a,b){var c=null;return function(){var e=Sa.apply(0,arguments);c!==null&&clearTimeout(c);c=setTimeout(function(){a.apply(null,ya(e))},b)}}
function Wr(a){var b=!1;return function(){var c=Sa.apply(0,arguments);if(!b)return b=!0,a.apply(null,ya(c))}}
function Xr(a,b,c){c=c===void 0?{}:c;if(typeof window.CustomEvent==="function")var e=new CustomEvent(b,Object.assign({},{bubbles:!0,cancelable:!0},c));else e=document.createEvent("CustomEvent"),e.initCustomEvent(b,!0,!0,c);a.dispatchEvent(e)}
;function Yr(a){var b=a.icon;var c=a.text===void 0?"":a.text;var e=a.title===void 0?"":a.title;var f=a.oz===void 0?!1:a.oz;var h=a.size===void 0?void 0:a.size;var k=a.Jf===void 0?void 0:a.Jf;var l=a.qv===void 0?!1:a.qv;var p=a.filled===void 0?!1:a.filled;var r=a.By===void 0?!1:a.By;var t=a.trigger;var v=a.tabIndex;var y=a.ariaLabel===void 0?"":a.ariaLabel;a=a.Gc===void 0?"rem":a.Gc;A.call(this,"sc.shared.MaterialFab");this.o=!1;this.icon=k?new Co({icon:b,Bb:!0,size:k,Gc:a}):new Co({icon:b,Bb:!0,Gc:a});
this.text=c;this.title=e;this.oz=f;this.size=h;this.qv=l;this.filled=p;this.By=r;this.trigger=t;this.overlay=new Do;this.tabIndex=v===void 0?null:String(v);this.ariaLabel=y}
u(Yr,A);Yr.prototype.content=function(){var a=this,b=["class",{root:!0,extended:this.text,mini:this.oz,lowered:this.qv,filled:this.filled,"fake-focus":this.o,grey:this.By},"tabindex",this.tabIndex,"onclick",this.trigger,"onkeydown",function(e){Fo(a.overlay,e)},
"aria-label",this.ariaLabel];this.title&&b.push("title",this.title);if(this.size){var c=this.size+"px";b.push("style",{height:c,width:c})}this.element.apply(this,["button"].concat(ya(b),[function(){a.element("span","class","icon",a.icon);a.text&&$n(a.text);a.overlay.render()}]))};function Zr(a){a=a.getBoundingClientRect();return{left:a.x,top:a.y,right:a.x+a.width,bottom:a.y+a.height}}
function mla(a,b){return a.left<b.left&&b.left<a.right||a.left<b.right&&b.right<a.right}
function $r(a){var b=a.isMobile;var c=a.kb;var e=a.cardList;var f=a.scrollBehavior===void 0?"smooth":a.scrollBehavior;var h=a.Mp===void 0?function(){}:a.Mp;
var k=a.Ky===void 0?!1:a.Ky;var l=a.style===void 0?0:a.style;var p=a.Iv===void 0?function(){}:a.Iv;
var r=a.Dv===void 0?function(){}:a.Dv;
var t=a.Jt===void 0?"":a.Jt;var v=a.Eq===void 0?"":a.Eq;var y=a.Kt===void 0?"":a.Kt;var E=a.Pl===void 0?48:a.Pl;a=a.Vy===void 0?!1:a.Vy;A.call(this,"sc.shared.CardCarousel");var oa=this;this.va=this.qa=this.Ca=this.o=null;this.oa=[];this.ya=null;this.Ha=Vr(function(){oa.Fa()},300);
this.Fa=function(){if(!oa.isMobile&&oa.ya){var ra=oa.ya.getBoundingClientRect().width+oa.Pl/2<window.innerWidth?"-"+(oa.Pl/2/16+"rem"):"0";oa.kb?(oa.va.style.left=ra,oa.qa.style.right=ra):(oa.va.style.right=ra,oa.qa.style.left=ra)}};
this.isMobile=b;this.kb=c;this.cardList=e;this.scrollBehavior=f;this.Mp=h;this.Ky=k;this.style=l;this.ma=new lla(this.cardList.length);this.Iv=p;this.Dv=r;this.Jt=t;this.Eq=v;this.Kt=y;this.Pl=E;this.Vy=a;this.style===1&&this.watch(this.ma,0);window.addEventListener("resize",this.Ha)}
u($r,A);function nla(a,b,c){c=(c===void 0?0:c)?{}:{visibility:as(a,b)?"visible":"hidden"};return a.element("div","class",{button:!0,previous:b===0,next:b===1},"style",c,"role","button","onclick",function(){var e,f,h=((f=(e=a.o)==null?void 0:e.scrollLeft)!=null?f:0)+ola(a,b);a.ma.scrollLeft=h;a.o.scrollTo({left:h,top:0,behavior:a.scrollBehavior})},function(){(new Yr({icon:b===0?"gm/navigate_before":"gm/navigate_next",
size:a.Pl,ariaLabel:b===0?"Previous":"Next",title:b===0?"Previous":"Next"})).render()})}
function ola(a,b){var c=Zr(a.o);if(b===0){b=null;for(var e=0;e<a.oa.length;e++){var f=Zr(a.oa[e]);if(mla(f,c)){b=f;break}if(f.left>=c.left&&f.right<=c.right){if(e===0)return 0;b=Zr(a.oa[e-1]);break}}return b===null?0:a.kb?b.left-c.left:b.right-c.right}b=null;for(e=a.oa.length-1;e>=0;e--){f=Zr(a.oa[e]);if(mla(f,c)){b=f;break}if(f.left>=c.left&&f.right<=c.right){if(e===a.oa.length-1)return 0;b=Zr(a.oa[e+1]);break}}return b===null?0:a.kb?b.right-c.right:b.left-c.left}
function as(a,b){if(!a.Ca||!a.o)return!1;var c=Math.max(0,a.Ca.getBoundingClientRect().width-a.o.getBoundingClientRect().width);a=Math.abs(a.o.scrollLeft);return b===0&&Math.abs(a-0)<=.5||b===1&&Math.abs(a-c)<=.5?!1:!0}
function pla(a){a.style!==0&&(a=a.cardList[a.ma.o])&&a.qa()}
function qla(a){a.o=a.element("div","class","viewport","onscroll",function(b){a.ma.scrollLeft=a.o.scrollLeft;pla(a);a.isMobile||a.style!==0||(a.qa.style.visibility=as(a,0)?"visible":"hidden",a.va.style.visibility=as(a,1)?"visible":"hidden");a.Mp(b)},function(){a.element("div","class","reel-wrapper",function(){a.Ca=a.element("ul","class",{reel:!0,
"reel-mobile":a.isMobile},"role","list",function(){a.oa=a.cardList.map(function(b){return a.element("li","class",{"card-container":!0,"custom-left-padding":a.Eq!=="","custom-right-padding":a.Kt!=="","equal-width-card":a.Vy},"role",a.Ky?"none":null,function(){b.render()})})})})});
a.ma.scrollLeft!==a.o.scrollLeft&&(a.o.scrollLeft=a.ma.scrollLeft);pla(a)}
function rla(a,b){var c=b===0?"Previous":"Next",e=b===0?-1:1;return a.element("div","class",b===0?"slide-previous":"slide-next",new Go({icon:b===0?"gm/navigate_before":"gm/navigate_next",trigger:function(){if(a.o){var f=a.o.getBoundingClientRect().width;f=a.o.scrollLeft+(a.kb?b===1?-f:f:b===0?-f:f);var h=a.ma,k=a.ma.o+e;h.o===k||k<0||k>=h.ma||(h.o=k,h.Da(0));a.ma.scrollLeft=f;a.o.scrollTo({left:f,top:0});b===0&&a.Iv&&a.Iv();b===1&&a.Dv&&a.Dv()}},
ariaLabel:c,title:c,disabled:b===0?a.ma.o===0:a.ma.o===a.ma.ma-1,style:6}))}
function sla(a){a.element("div","class","control-bar",function(){a.qa=rla(a,0);a.element("div","class","indicator",a.ma.o+1+" / "+a.ma.ma);a.va=rla(a,1)})}
function tla(a){var b,c,e;return{"--gap-size":(b=a.Jt)!=null?b:"","--custom-left-padding":(c=a.Eq)!=null?c:"","--custom-right-padding":(e=a.Kt)!=null?e:"","--custom-button-size":a.Pl?a.Pl/16+"rem":""}}
$r.prototype.content=function(){var a=this;this.ya=this.element("div","class",{root:!0,scrolling:this.style===0,slide:this.style===1},"style",tla(this),"dir",this.kb?"rtl":"ltr",function(){switch(a.style){case 0:a.isMobile||(a.qa=nla(a,0,!0));qla(a);a.isMobile||(a.va=nla(a,1),a.qa&&(a.qa.style.visibility=as(a,0)?"visible":"hidden"));break;case 1:sla(a),qla(a)}});
this.Fa()};
$r.prototype.onDetach=function(){window.removeEventListener("resize",this.Ha)};function bs(){A.apply(this,arguments)}
u(bs,A);bs.prototype.qa=function(){};function ds(a){var b=a.content;var c=a.elevation===void 0?0:a.elevation;var e=a.padding===void 0?"1rem":a.padding;var f=a.trigger;var h=a.backgroundColor===void 0?1:a.backgroundColor;var k=a.ll===void 0?!0:a.ll;a=a.borderRadius===void 0?"0.5rem":a.borderRadius;A.call(this,"sc.shared.MaterialCard");this.o=b;this.elevation=c;this.padding=e;this.overlay=(this.trigger=f)?new Do:null;this.backgroundColor=h;this.ll=k;this.borderRadius=a}
u(ds,A);ds.prototype.Fe=function(){return!0};
ds.prototype.content=function(){var a=this,b=this.elevation>0,c={};this.element(this.trigger?"button":"div","class",(c.root=!0,c.elevated=b,c.border=this.ll,c["surface-highlight-background"]=this.backgroundColor===2,c["m3-surface-container-low"]=this.backgroundColor===3,c["m3-pill-container"]=this.backgroundColor===4,c["m3-card-container"]=this.backgroundColor===5,c["elevation-"+this.elevation]=b,c),"style",{"--mc-custom-padding":this.padding,"--mc-custom-border-radius":this.borderRadius},"onclick",
this.trigger,"onkeydown",function(e){a.overlay&&Fo(a.overlay,e)},function(){a.o();
a.overlay&&a.overlay.render()})};function es(a,b){var c=b===void 0?{}:b;b=c.eV===void 0?!0:c.eV;(c.Cd===void 0?0:c.Cd)?Gl(window,a):(c=document.createElement("a"),yl(c,a),c.rel="noopener",b?(a=window.location,b=xl(c.href),b!==void 0&&(a.href=b)):Pl(window.location,c.href))}
;function ula(a){var b="";try{b=a.replace(/[^\p{Letter}\s_-]/gu,"")}catch(c){b=a.replace(/[^\w\s_-]/g,"")}return b.trim().replace(/[\s_]+/g,"-").toLowerCase()}
;function vla(a){var b=a.description;var c=a.duration;var e=a.embedUrl;var f={"@type":"InteractionCounter",interactionType:{"@type":"WatchAction"},userInteractionCount:a.userInteractionCount};b={"@context":"https://schema.org","@type":"VideoObject",name:a.name,description:b,thumbnailUrl:a.thumbnailUrl,uploadDate:a.uploadDate.toISOString(),duration:c,embedUrl:e,interactionStatistic:f};a=document.createElement("script");a.type="application/ld+json";b=gm(b);Jl(a,b);document.head.appendChild(a)}
;function gs(){this.part="snippet,id,contentDetails,localizations,statistics";this.Nk=new $p({serverUrl:"https://www.googleapis.com/youtube/v3",serviceName:"youtubeDataApi"})}
gs.prototype.getFields=function(a){return"items(snippet(thumbnails(default,medium,high,standard,maxres),publishedAt,channelId,channelTitle,defaultLanguage,localized),contentDetails/duration,localizations/"+a+",statistics/viewCount)"};
function wla(a,b,c){return Vja(a.Nk,"videos",{query:{id:b,hl:c,key:"AIzaSyD-4tE5aKFZYIS_IrfpCDRsgQZbv5VCJZM",part:a.part,fields:a.getFields(c)}})}
;var xla=za(["//www.youtube.com/player_api"]),yla=fm(xla),hs=[],zla=!1;function is(){if(!zla){window.onYouTubeIframeAPIReady=Ala;var a=wn("SCRIPT");Kl(a,yla);document.head.appendChild(a);zla=!0}}
function js(a,b){a=sm("play",a);b=sm("play",b);return b===a?"":b}
function Ala(){for(;hs.length>0;)hs.shift()()}
function ks(a){hs.push(a)}
function ls(a,b,c,e){switch(a){case -1:a=20;break;case 0:a=19;break;case 1:a=25;break;case 2:a=26;break;case 3:a=27;break;case 5:a=28;break;default:a=0}window.sc_trackStatsEvent(44,a,b,c+","+e)}
;var Bla=za(["aria-"]),Cla=za(["role"]),Dla=za(["data-stats-"]);function ms(a){this.o=a||document}
ms.prototype.init=function(){for(var a=this,b=this.o.querySelectorAll(".zippy"),c={},e=0;e<b.length;c={Hc:void 0,Zd:void 0},e++){var f=e+1;c.Hc=b[e];c.Zd=c.Hc.nextElementSibling;if(c.Zd&&(c.Zd instanceof HTMLDivElement||c.Zd instanceof HTMLParagraphElement)){var h=ula(c.Hc.textContent);h!==""&&(c.Hc.dataset.scZippyId=h);h=document.createElement("DIV");lm(h,"zippy-container",!0);c.Hc.parentNode.replaceChild(h,c.Hc);h.appendChild(c.Hc);var k=document.createElement("DIV");k.className="zippy-overflow";
c.Zd.parentNode.insertBefore(k,c.Zd);k.appendChild(c.Zd);lm(c.Hc,"index"+f,!0);Ela(k,h);lm(c.Zd,"zippy-content",!0);Fla(c.Hc)?(lm(c.Hc,"goog-zippy-expanded",!0),ns(c.Hc.parentElement,!0),c.Zd.removeAttribute("aria-hidden"),Nl(ps,c.Hc,"aria-expanded","true"),c.Zd.style.marginTop=0,Gla(c.Hc)):(qs(c.Zd),c.Zd.style.display="none",c.Zd.style.height=c.Zd.style.padding=0,Nl(ps,c.Zd,"aria-hidden","true"),Nl(ps,c.Hc,"aria-expanded","false"),lm(c.Zd,"zippy-hidden",!0),lm(c.Hc,"goog-zippy-collapsed",!0));window.addEventListener("resize",
function(l){nm(l,"zippy-hidden")&&rs(l,"",function(){qs(l)}.bind(this))}.bind(this,c.Zd));
c.Hc.tabIndex=0;Nl(ps,c.Hc,"role","button");c.Hc.addEventListener("click",this.ma.bind(this,c.Zd,c.Hc));c.Hc.addEventListener("keydown",this.ua.bind(this,c.Zd,c.Hc));c.Hc.addEventListener("focus",Hla);c.Hc.addEventListener("blur",Hla);Nl(ps,c.Hc,"data-stats-ve","2");Nl(ps,c.Hc,"data-stats-imp","");Nl(ps,c.Hc,"data-stats-idx",f+","+b.length);Nl(ps,c.Hc,"data-stats-ignore","");(f=c.Hc.getAttribute("id"))||(f=c.Hc.getAttribute("name"));f&&Nl(ps,c.Hc,"data-stats-id",f);Ila(this,c.Hc,c.Zd);window.addEventListener("hashchange",
function(l){return function(p){js(p.oldURL,p.newURL)&&Jla(l.Hc)&&ss(l.Zd)}}(c))}}window.addEventListener("hashchange",function(l){if(window.location.hash){var p=sm("zippy",l.oldURL);
l=sm("zippy",l.newURL);p&&!l&&tm("zippy",p)}(p=wm())&&(p=a.o.querySelector(".zippy.goog-zippy-collapsed#"+p))&&(l=p.parentElement.nextElementSibling)&&(l=l.querySelector(".zippy-content"))&&a.ma(l,p)})};
function rs(a,b,c){a.style.transition!=b?(a.style.transition=b,window.setTimeout(c,0)):c()}
function Fla(a){var b=z().query_params.find(function(c){return c.key=="expand_all_zippies"});
return(b?b.value=="true":!1)||nm(a,"zippy-expand")||Kla(a)||Lla(a)}
function Mla(){if(window.performance.getEntriesByType("navigation").length<=0)return null;var a=window.performance.getEntriesByType("navigation")[0].name,b;return a&&a.includes("#")&&((b=a.match(/:~:text=/g))==null?void 0:b.length)===1?(a=a.split("#").slice(1).filter(function(c){return c.includes(":~:text=")})[0])?a.split(":~:").filter(function(c){return c.startsWith("text=")})[0].substring(5).split("&text="):null:null}
function Kla(a){var b=Mla();if(!b||b.length===0)return!1;(b=b.some(function(c){return Nla(a,c)}))?window.sc_trackStatsEventByElement(a,2,30,"textFragment"):window.sc_trackStatsEventByElement(a,2,36,"textFragment");
return b}
function Nla(a,b){var c=!1,e=b.split(",");e=e.map(function(l,p){if(l.startsWith("-")&&p!==e.length-1||l.endsWith("-")&&p!==0)c=!0;return l.replace(/^-|-$/g,"")});
if(c)return!1;var f=a.parentElement.nextElementSibling.textContent;b=e.map(function(l){return f.indexOf(decodeURIComponent(l))});
a=-1;b=w(b.entries());for(var h=b.next();!h.done;h=b.next()){var k=w(h.value);h=k.next().value;k=k.next().value;if(a>=k)return!1;a=k+decodeURIComponent(e[h]).length-1}return!0}
function Lla(a){var b;(b=!!a.name&&Ola(z().query+window.location.hash,a.name)||Jla(a))||(b=(a=a.dataset.scZippyId)?ts().has(a):!1);return b}
function Jla(a){var b=sm("play");a=a.parentElement.nextElementSibling;return a!==null&&a.querySelector('[data-videoid="'+b+'"]')!==null}
function Ola(a,b){return(new RegExp("[?#&,]"+pm(b)+"(?:[#&,]|$)")).test(a)}
function qs(a){a.style.marginTop=-a.offsetHeight+"px"}
ms.prototype.ma=function(a,b){lm(a,"zippy-hidden");lm(b,"goog-zippy-expanded");lm(b,"goog-zippy-collapsed");var c=b.parentElement;if(us(b)){a.removeAttribute("aria-hidden");Nl(ps,b,"aria-expanded","true");var e=2;ss(a);ns(c,!0);Gla(b)}else Nl(ps,a,"aria-hidden","true"),Nl(ps,b,"aria-expanded","false"),e=3,a.addEventListener("transitionend",Pla),ns(c,!1),Qla(b),rs(a,"margin-top .218s ease-out",function(){qs(a)}.bind(this));
window.sc_trackStatsEventByElement(b,2,e)};
function ts(){return new Set(sm("zippy").split(","))}
function Gla(a){if(a=a.dataset.scZippyId){var b=ts();b.add(a);tm("zippy",[].concat(ya(b.values())).join(","))}}
function Qla(a){if(a=a.dataset.scZippyId){var b=ts();b.delete(a);tm("zippy",[].concat(ya(b)).join(","))}}
ms.prototype.ua=function(a,b,c){switch(c.which){case 13:case 32:c.preventDefault(),this.ma(a,b)}};
function ss(a){Rla(a);a.style.height=a.style.padding="";a.style.display="";a.removeEventListener("transitionend",Pla);rs(a,"margin-top .218s ease-out",function(){a.style.overflow="auto";a.style.marginTop=0});
Zm(document,"imgLazyLoad")}
function Rla(a){a=a.getElementsByClassName("goog-zippy-collapsed");for(var b=0;b<a.length;b++){var c=a[b].parentElement.nextElementSibling;c&&(c=c.firstChild)&&qs(c)}}
function Ila(a,b,c){if(b.name)for(var e=a.o.getElementsByTagName("a"),f=0;f<e.length;f++){var h=e[f];Ola(h.href,b.name)&&h.addEventListener("click",a.oa.bind(a,b,c))}}
ms.prototype.oa=function(a,b){us(a)||(lm(b,"zippy-hidden",!1),lm(a,"goog-zippy-expanded",!0),lm(a,"goog-zippy-collapsed",!1),ss(b),window.sc_trackStatsEventByElement(a,2,2))};
var ps=[Ql(Bla),Ql(Cla),Ql(Dla)];function us(a){return nm(a,"goog-zippy-expanded")}
window.sc_initZippy=function(){(new ms(window.sc_scope)).init()};
function Pla(a){a.target.style.display="none"}
function Ela(a,b){var c=a.parentElement,e=!1;nm(c,"zippy-wrapper")?(a=c.nextElementSibling)&&nm(a,"zippy-wrapper")||(e=!0):(a=a.nextElementSibling)&&nm(a,"zippy")||(e=!0);e&&lm(b,"zippy-last",!0)}
function ns(a,b){a&&nm(a,"zippy-last")&&lm(a,"zippy-last-focus",b)}
function Hla(a){lm(a.target.parentElement,"zippy-focus")}
;function vs(a){if(!a)return"";var b=document.createElement("textarea");Ml(b,bm.Wd(a));var c;return(c=b.textContent)!=null?c:""}
function ws(a,b){a.preventDefault();b();return!1}
function xs(a,b){var c=c===void 0?["Enter"," "]:c;if(!c.includes(a.key))return!0;a.preventDefault();b();return!1}
var Sla=/<\/?(?:blockquote|br|div|li|ol|ul|p)[^>]*>/gi,Tla=/<\/?(?:blockquote|div|li|ol|ul|p)[^>]*>/gi,Ula=/(<[^>]+>)/gi,Vla=RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$");function ys(a,b,c,e,f){b=b===void 0?!1:b;e=e===void 0?Ula:e;f=f===void 0?"":f;b&&(c===void 0?0:c)?(a=a.replace(Tla,"\n").replace(/\n{2,}/gi,"\n").trim(),a=a.replace(/<\/?br[^>]*>/gi,"\n")):b&&(a=a.replace(Sla,"\n").replace(/\n{2,}/gi,"\n").trim());return a.replace(e,f)}
;var Wla={ZN:["BC","AD"],YN:["Before Christ","Anno Domini"],HO:"JFMAMJJASOND".split(""),eP:"JFMAMJJASOND".split(""),EO:"January February March April May June July August September October November December".split(" "),dP:"January February March April May June July August September October November December".split(" "),ZO:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),gP:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),BP:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
iP:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),bP:"Sun Mon Tue Wed Thu Fri Sat".split(" "),hP:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Zna:"SMTWTFS".split(""),fP:"SMTWTFS".split(""),aP:["Q1","Q2","Q3","Q4"],UO:["1st quarter","2nd quarter","3rd quarter","4th quarter"],JN:["AM","PM"],Aw:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],iI:["h:mm:ss\u202fa zzzz","h:mm:ss\u202fa z","h:mm:ss\u202fa","h:mm\u202fa"],RN:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],OH:6,
Woa:[5,6],QH:5},zs=Wla;zs=Wla;function Xla(a,b,c,e,f){a=new Date(a,b,c);e=e!==void 0?e:3;f=f||0;b=((a.getDay()+6)%7-f+7)%7;return a.valueOf()+((e-f+7)%7-b)*864E5}
;function As(){}
function Bs(a){if(typeof a=="number"){var b=new As;b.qa=a;var c=a;if(c==0)c="Etc/GMT";else{var e=["Etc/GMT",c<0?"-":"+"];c=Math.abs(c);e.push(Math.floor(c/60)%100);c%=60;c!=0&&e.push(":",rn(c,2));c=e.join("")}b.oa=c;c=a;c==0?c="UTC":(e=["UTC",c<0?"+":"-"],c=Math.abs(c),e.push(Math.floor(c/60)%100),c%=60,c!=0&&e.push(":",c),c=e.join(""));a=Yla(a);b.ua=[c,c];b.o={Foa:a,hI:a};b.ma=[];return b}b=new As;b.oa=a.id;b.qa=-a.std_offset;b.ua=a.names;b.o=a.names_ext;b.ma=a.transitions;return b}
function Yla(a){var b=["GMT"];b.push(a<=0?"+":"-");a=Math.abs(a);b.push(rn(Math.floor(a/60)%100,2),":",rn(a%60,2));return b.join("")}
function Cs(a,b){b=Date.UTC(b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate(),b.getUTCHours(),b.getUTCMinutes())/36E5;for(var c=0;c<a.ma.length&&b>=a.ma[c];)c+=2;return c==0?0:a.ma[c-1]}
As.prototype.getOffset=function(a){a=this.qa-Cs(this,a);return a===-1440?0:a};
As.prototype.getShortName=function(a){return this.ua[Cs(this,a)>0?2:0]};function Ds(a){this.ma=[];this.o=zs;typeof a=="number"?Zla(this,a):$la(this,a)}
var ama=[/^'(?:[^']|'')*('|$)/,/^(?:G+|y+|Y+|u+|M+|k+|S+|E+|a+|b+|B+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/,/^[^'GyYuMkSEabBhKHcLQdmsvVwzZ]+/];function Es(a){return a.getHours?a.getHours():0}
function $la(a,b){for(bma&&(b=b.replace(/\u200f/g,""));b;){for(var c=b,e=0;e<ama.length;++e){var f=b.match(ama[e]);if(f){var h=f[0];b=b.substring(h.length);e==0&&(h=="''"?h="'":(h=h.substring(1,f[1]=="'"?h.length-1:h.length),h=h.replace(/''/g,"'")));a.ma.push({text:h,type:e});break}}if(c===b)throw Error("Malformed pattern part: "+b);}}
Ds.prototype.format=function(a,b){if(!a)throw Error("The date to format must be non-null.");var c=b?(a.getTimezoneOffset()-b.getOffset(a))*6E4:0,e=c?new Date(a.getTime()+c):a,f=e;b&&e.getTimezoneOffset()!=a.getTimezoneOffset()&&(f=(e.getTimezoneOffset()-a.getTimezoneOffset())*6E4,e=new Date(e.getTime()+f),c+=c>0?-864E5:864E5,f=new Date(a.getTime()+c));c=[];for(var h=0;h<this.ma.length;++h){var k=this.ma[h].text;1==this.ma[h].type?c.push(cma(this,k,a,e,f,b)):c.push(k)}return c.join("")};
function Zla(a,b){if(b<4)var c=a.o.Aw[b];else if(b<8)c=a.o.iI[b-4];else if(b<12)c=a.o.RN[b-8],c=c.replace("{1}",a.o.Aw[b-8]),c=c.replace("{0}",a.o.iI[b-8]);else if(b===12)c=a.o.Aw[0].replace(/[^EMd]*yy*[^EMd]*/,"");else if(b===13)c=a.o.Aw[2].replace(/[^EMd]*yy*[^EMd]*/,"");else{Zla(a,10);return}$la(a,c)}
function Fs(a,b){b=String(b);a=a.o||zs;if(a.DP!==void 0){for(var c=[],e=0;e<b.length;e++){var f=b.charCodeAt(e);c.push(48<=f&&f<=57?String.fromCharCode(a.DP+f-48):b.charAt(e))}b=c.join("")}return b}
var bma=!1;function dma(a,b,c,e){c=c.getFullYear();c<=0&&e&&(c=1-c);return Fs(a,ema(c,b))}
function ema(a,b){b==2&&(a%=100);a<0&&b++;return rn(a,b)}
function Gs(a){if(!(a.getHours&&a.getSeconds&&a.getMinutes))throw Error("The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields.");}
function Hs(a,b){Gs(b);b=Es(b);return a.o.JN[b>=12&&b<24?1:0]}
function cma(a,b,c,e,f,h){var k=b.length;switch(b.charAt(0)){case "G":return c=e.getFullYear()>0?1:0,k>=4?a.o.YN[c]:a.o.ZN[c];case "y":return dma(a,k,e,!0);case "Y":return c=e.getFullYear(),f=e.getMonth(),e=e.getDate(),c=Xla(c,f,e,a.o.QH,a.o.OH),c=(new Date(c)).getFullYear(),k==2&&(c%=100),Fs(a,ema(c,k));case "u":return dma(a,k,e,!1);case "M":a:switch(c=e.getMonth(),k){case 5:k=a.o.HO[c];break a;case 4:k=a.o.EO[c];break a;case 3:k=a.o.ZO[c];break a;default:k=Fs(a,rn(c+1,k))}return k;case "k":return Gs(f),
c=Es(f)||24,Fs(a,rn(c,k));case "S":return c=f.getMilliseconds()/1E3,Fs(a,c.toFixed(Math.min(3,k)).slice(2)+(k>3?rn(0,k-3):""));case "E":return c=e.getDay(),k>=4?a.o.BP[c]:a.o.bP[c];case "a":return Hs(a,f);case "b":return Hs(a,f);case "B":return Hs(a,f);case "h":return Gs(f),c=Es(f)%12||12,Fs(a,rn(c,k));case "K":return Gs(f),c=Es(f)%12,Fs(a,rn(c,k));case "H":return Gs(f),c=Es(f),Fs(a,rn(c,k));case "c":a:switch(c=e.getDay(),k){case 5:k=a.o.fP[c];break a;case 4:k=a.o.iP[c];break a;case 3:k=a.o.hP[c];
break a;default:k=Fs(a,rn(c,1))}return k;case "L":a:switch(c=e.getMonth(),k){case 5:k=a.o.eP[c];break a;case 4:k=a.o.dP[c];break a;case 3:k=a.o.gP[c];break a;default:k=Fs(a,rn(c+1,k))}return k;case "Q":return c=Math.floor(e.getMonth()/3),k<4?a.o.aP[c]:a.o.UO[c];case "d":return Fs(a,rn(e.getDate(),k));case "m":return Gs(f),Fs(a,rn(f.getMinutes?f.getMinutes():0,k));case "s":return Gs(f),Fs(a,rn(f.getSeconds(),k));case "v":return(h||Bs(c.getTimezoneOffset())).oa;case "V":a=h||Bs(c.getTimezoneOffset());
var l;k<=2?l=a.oa:l=Cs(a,c)>0?a.o.WN!==void 0?a.o.WN:a.o.DST_GENERIC_LOCATION:a.o.hI!==void 0?a.o.hI:a.o.STD_GENERIC_LOCATION;return l;case "w":return c=f.getFullYear(),e=f.getMonth(),f=f.getDate(),c=Xla(c,e,f,a.o.QH,a.o.OH),e=(new Date((new Date(c)).getFullYear(),0,1)).valueOf(),Fs(a,rn(Math.floor(Math.round((c-e)/864E5)/7)+1,k));case "z":return a=h||Bs(c.getTimezoneOffset()),k<4?a.getShortName(c):a.ua[Cs(a,c)>0?3:1];case "Z":return e=h||Bs(c.getTimezoneOffset()),k<4?(k=-e.getOffset(c),a=[k<0?"-":
"+"],k=Math.abs(k),a.push(rn(Math.floor(k/60)%100,2),rn(k%60,2)),k=a.join("")):k=Fs(a,Yla(e.getOffset(c))),k;default:return""}}
;function Is(){}
Is.prototype.request=function(a,b,c,e,f,h,k,l){var p=this;(new Promise(function(r,t){fma(p,a,b,c,r,t,f,h,k,l)})).then(function(r){e&&(window[r.requestId]=function(t){e(t.getChild(r.requestId))});
r.Vx();r.Tx()})};
function gma(a,b,c,e){var f=[25];return new Promise(function(h,k){fma(a,1,b,c,h,k,e,f)})}
function fma(a,b,c,e,f,h,k,l,p,r){var t=z(),v="render_api"+(Math.random()*1E9>>>0),y=[["js_request_id",v],["rr",1],["lc",1]],E=hma();E.length>0&&y.push(["loaded_js",E.join(",")]);k&&Js(k,y);Js(ima(),y);if(t.query_params){k=[];for(E=0;E<t.query_params.length;E++){var oa=t.query_params[E];k.push([oa.key,oa.value])}Js(k,y)}Js([["dark",Em()?1:0]],y);k={};k.hl=t.lang;k.page_type=b;k.id=c;k.view_id=t.vid;k.visit_id=t.visit_id;k.extra_param=[];k.component=[];k.sjid=t.support_journey_id;r&&(k.scdeb=r);for(b=
0;b<y.length;b++)y[b][0]!=="render_inapp"&&(r=c=void 0,((c=l)==null?void 0:c.length)===1&&((r=l)==null?void 0:r[0])===25&&t.lang&&y[b][0]==="hl"||k.extra_param.push(y[b][0]+"."+y[b][1]));if(l)for(t=0;t<l.length;t++)k.component.push(l[t]);p&&(k.containing_page_type=p);zm({httpMethod:"GET",endpoint:"render",params:k,onLoadCallback:function(ra){var Aa=this,Ba=null;try{Ba=JSON.parse(ra.responseText)}catch(Ha){}Ba&&Ba.html?(Ml(e,ao(Ba.html)),f({requestId:v,Vx:function(){for(var Ha=e.getElementsByTagName("style");Ha.length>
0;)document.head.appendChild(Ha[0])},
Tx:function(){Aa.o(e)}})):h()}.bind(a)})}
function Js(a,b){for(var c={},e=0;e<b.length;e++)c[b[e][0]]=!0;for(e=0;e<a.length;e++){var f=a[e][0],h=a[e][1];c[f]||b.push([f,h])}}
function hma(){for(var a=[],b=document.getElementsByTagName("script"),c=0;c<b.length;c++){var e=b[c].getAttribute("data-id");e&&a.push(e)}return a}
function ima(){for(var a=[],b=/([^?&=]+)=([^&]+)/g,c;c=b.exec(z().query);)a.push([c[1],decodeURIComponent(c[2])]);return a}
Is.prototype.o=function(a){window.sc_scope=a;for(var b=a.getElementsByTagName("script");b.length>0;){var c=b[0];c.parentNode.removeChild(c);var e=wn("SCRIPT");c.src?(e.setAttribute("data-id",c.getAttribute("data-id")),e.onload=this.o.bind(this,a),c=co(c.src),Kl(e,c)):(c=Pha(c.innerHTML),Jl(e,c));document.head.appendChild(e)}delete window.sc_scope};
window.sc_initRenderApi=function(){if(!window.sc_renderRequest){var a=new Is;window.sc_renderRequest=a.request.bind(a)}};function jma(a,b){this.o=a;this.ua="";this.va=document.createElement("article");this.qa=[];this.ya=!1;this.ma=b;this.Ca=new Is;this.oa=null;a=this.o.match(/(answer\/)([0-9]+)/);a!==null&&(this.ua=a[2]);a=this.o;b=[];for(var c=RegExp("[?&]"+pm(encodeURIComponent("co"))+"=([^&]*)","g"),e;(e=c.exec(a!==void 0?a:z().query))!==null;)b.push(qm(e[1]));this.qa=b;this.ma&&(this.o=rm("oco",this.ma,this.o));this.ya=this.ua.length>0&&this.qa.length>0}
function kma(a){return new Promise(function(b,c){a.oa?lma(a,b):a.ya?mma(a,b,c):c(a.o)})}
function mma(a,b,c){for(var e=[],f=w(a.qa),h=f.next();!h.done;h=f.next())e.push(["co",h.value]);a.ma&&e.push(["oco",a.ma]);gma(a.Ca,a.ua,a.va,e).then(function(k){a.oa=k;lma(a,b)},function(){c(a.o)})}
function lma(a,b){b({url:a.o,gQ:a.va,Vx:a.oa.Vx,Tx:a.oa.Tx})}
;function Ks(a){this.element=a}
Ks.prototype.init=function(){var a=document.getElementById(this.element.getAttribute("data-swap-with-id"));a&&a.appendChild(this.element)};
function nma(a){var b=document.querySelector('a[href="'+a+'"]');um("play");b?b.click():Km(a)}
;function Ls(a){this.element=a;var b=this;this.ma=a.querySelector(".context-selector-tab-container");this.ma.setAttribute("role","tablist");this.o=a.querySelectorAll(".context-selector-tab");this.Ha=a.querySelector(".context-selector-menu-container");this.oa=a.querySelector(".context-selector-menu");this.Ia=[];this.Fa=document.body.querySelector(".article-content-container");this.La=[];this.qa=null;this.ua=0;this.Ca=!0;this.Ra=this.ma.querySelector(".context-selector-tab__spinner");this.Pa=document.body.querySelector(".hcfe");
this.ya=!1;this.Ma=function(c){var e=null;c.state&&c.state.tabIndex>=0?e=c.state.tabIndex:b.qa!==null&&(e=b.qa);e!==null&&Ms(b,e,!1)};
this.va=function(){Ns(b);Os(b)}}
u(Ls,Ks);Ls.prototype.init=function(){var a=this;Ks.prototype.init.call(this);oma(this);pma(this);this.oa.addEventListener("change",function(){a.oa.value&&Ms(a,parseInt(a.oa.value,10))});
window.sc_initFittedSelect&&window.sc_initFittedSelect(this.oa);this.Ca=this.ma.hasAttribute("data-rapi")&&this.ma.getAttribute("data-rapi")==="1";window.addEventListener("resize",this.va);window.addEventListener("load",this.va);this.Ca||window.addEventListener("popstate",this.Ma);Ns(this);Os(this);this.ma.addEventListener("keydown",function(b){switch(b.key){case "ArrowLeft":Ps(a,(a.ua-1+a.o.length)%a.o.length);break;case "ArrowRight":Ps(a,(a.ua+1)%a.o.length)}})};
function oma(a){for(var b={yk:0};b.yk<a.o.length;b={yk:b.yk,tab:void 0},b.yk++)if(b.tab=a.o[b.yk],nm(b.tab,"context-selector-selected")?(b.tab.setAttribute("tabindex","0"),a.qa=b.yk,a.ua=b.yk):b.tab.setAttribute("tabindex","-1"),b.tab.hasAttribute("href")){var c=b.tab.getAttribute("href");qma(b.tab,c);var e=void 0;e=/[?&]oco=/.test(b.tab.search)?om("oco",c):a.ma.getAttribute("data-oco");a.La.push(new jma(c,e));b.tab.addEventListener("click",function(f){return function(){Ms(a,f.yk);window.sc_trackStatsEvent(19,
8,f.tab.innerHTML)}}(b));
b.tab.addEventListener("keypress",function(f){return function(h){h.key=="Enter"&&(Ms(a,f.yk),window.sc_trackStatsEvent(19,8,f.tab.innerHTML))}}(b));
b.tab.removeAttribute("href")}}
function qma(a,b){(b=om("co",b))&&b.startsWith("GENIE.Platform=")&&a.setAttribute("data-tab-platform",b.substring(15))}
function Ps(a,b){a.o[a.ua].setAttribute("tabindex","-1");a.ua=b;a.o[a.ua].setAttribute("tabindex","0");a.o[a.ua].focus()}
function Ms(a,b,c){c=c===void 0?!0:c;if(a.qa!==b){a.qa=b;var e=a.La[b];e&&(rma(a),kma(e).then(function(f){Zm(a.ma,"before-article-refreshed");a.Fa.textContent="";a.Fa.appendChild(f.gQ);f.Vx();f.Tx();for(var h=0;h<a.o.length;h++){var k=a.o[h];h===b?(lm(k,"context-selector-selected",!0),k.setAttribute("aria-selected",!0)):(lm(k,"context-selector-selected",!1),k.setAttribute("aria-selected",!1))}Ks.prototype.init.call(a);Ns(a);Os(a);h=z().html_title||"";h=ub(h,"&")?"document"in Ya?tha(h):vha(h):h;document.title=
h;c&&!a.Ca&&history.pushState({tabIndex:b},"",f.url+window.location.hash);rma(a);Zm(a.ma,"article-refreshed");Ps(a,b);f=sma(a.o[b]);h=w(tma);for(k=h.next();!k.done;k=h.next())k=k.value,k(f)},function(f){nma(f)}))}}
function rma(a){a.Pa.style.opacity=a.ya?1:.5;lm(a.Ra,"hidden",a.ya);a.ya=!a.ya}
function pma(a){for(var b=0;b<a.o.length;b++){var c=document.createElement("option");c.text=a.o[b].textContent;c.value=b;a.Ia.push(c)}}
function Ns(a){for(var b=0;b<a.o.length;b++)a.o[b].style.display="",a.oa.remove(1);a.Ha.style.display="none"}
function Os(a){for(var b=a.o.length-1;b>=0&&!(a.ma.offsetWidth>=a.ma.scrollWidth);b--)nm(a.o[b],"context-selector-selected")||(a.o[b].style.display="none",a.oa.add(a.Ia[b],a.oa.options[1]),a.Ha.style.display="");Zm(a.oa,"optionschange")}
Ls.prototype.dispose=function(){window.removeEventListener("resize",this.va);window.removeEventListener("load",this.va);window.removeEventListener("popstate",this.Ma)};
function sma(a){if(!a)return"";var b;return(b=a.getAttribute("data-tab-platform"))!=null?b:""}
var Qs=[],tma=[];window.sc_initContextTabs=function(){if(!(Qs.length>0))for(var a=Sm().querySelectorAll(".context-selector-tabs"),b=0;b<a.length;b++){var c=new Ls(a[b]);Qs.push(c);c.init()}};function Rs(a){this.Aa=se(a)}
u(Rs,eh);function Ss(a){var b=new Rs;return nf(b,gq,1,a)}
function Ts(a,b){return dg(a,2,b)}
function Us(a,b){return nf(a,Hr,4,b)}
function Vs(a,b){return nf(a,Xp,5,b)}
;var uma=[0,bi,hi];Rs.prototype.Ba=wi([0,iq,si,uma,Nr,Yp]);var vma=function(a){var b;return function(c){b||(a(function(){var e=b;b=null;e()}),b=c)}}(requestAnimationFrame);
function Ws(){A.call(this,"sc.shared.Draggable");var a=this;this.key=so();this.o={x:0,y:0};this.qa={x:0,y:0};this.va={x:0,y:0};this.ma={x:{min:-Infinity,max:Infinity},y:{min:-Infinity,max:Infinity}};this.ya=function(b){if(a.enabled&&a.oa){var c=Math.max(a.ma.x.min,Math.min(a.ma.x.max,a.va.x-(a.qa.x-b.clientX)));b=Math.max(a.ma.y.min,Math.min(a.ma.y.max,a.va.y-(a.qa.y-b.clientY)));var e=!1;a.o.x!==c&&(a.o.x=c,e=!0);a.o.y!==b&&(a.o.y=b,e=!0);e&&a.Fa()}};
this.Ca=function(){a.enabled&&(a.oa=!1)};
this.Fa=function(){vma(function(){a.Ja()})};
this.Wl=function(){return a.root};
this.oa=!1;this.enabled=!0}
u(Ws,A);Ws.prototype.disable=function(){this.enabled=!1;this.Ja()};
Ws.prototype.enable=function(){this.enabled=!0;this.Ja()};
Ws.prototype.onDetach=function(){window.removeEventListener("mousemove",this.ya);window.removeEventListener("mouseup",this.Ca)};
Ws.prototype.content=function(a){var b=this;var c=a.Wl;var e=a.content;a=a.pointerEvents;c&&(this.Wl=c);this.root=this.rj("div",this.key,"class","root","onmousedown",function(f){if(b.enabled&&!b.oa&&dl(f.target)&&b.Wl().contains(f.target)){var h=b.root.getBoundingClientRect();b.ma.x.min=b.o.x-h.left;b.ma.x.max=b.o.x+(window.innerWidth-h.right);b.ma.y.min=b.o.y-h.top;b.ma.y.max=b.o.y+(window.innerHeight-h.bottom);b.qa.x=f.clientX;b.qa.y=f.clientY;b.va.x=b.o.x;b.va.y=b.o.y;b.oa=!0}},"style",{transform:this.enabled?
"translate("+this.o.x+"px, "+(this.o.y+"px)"):null,
pointerEvents:a!=null?a:null},e);window.addEventListener("mousemove",this.ya);window.addEventListener("mouseup",this.Ca)};function Xs(a){return Uc(function(b){if(b instanceof a)return!0;var c,e,f=b==null?void 0:(c=b.ownerDocument)==null?void 0:(e=c.defaultView)==null?void 0:e[a.name];return Qba(f)&&b instanceof f})}
Xs(Node);Xs(Element);var wma=Xs(HTMLElement);Xs(SVGElement);function Ys(a){var b=a.content;var c=a.rc===void 0?5:a.rc;var e=a.tc===void 0?5:a.tc;var f=a.Hn===void 0?0:a.Hn;var h=a.Ki===void 0?0:a.Ki;var k=a.Dx===void 0?!1:a.Dx;var l=a.mq===void 0?!1:a.mq;var p=a.Sr;var r=a.onClose;var t=a.maxHeight;var v=a.Zk===void 0?!1:a.Zk;var y=a.eq===void 0?!0:a.eq;var E=a.ao===void 0?!0:a.ao;var oa=a.Ll===void 0?!0:a.Ll;var ra=a.Ji===void 0?!0:a.Ji;var Aa=a.jl===void 0?!1:a.jl;var Ba=a.gp===void 0?!1:a.gp;var Ha=a.Ug===void 0?{}:a.Ug;var Na=a.Qf===void 0?!1:a.Qf;var Va=
a.uu===void 0?!1:a.uu;var cb=a.draggable===void 0?!1:a.draggable;var sb=a.Wl;var Cb=a.Pr===void 0?!0:a.Pr;a=a.NB===void 0?!0:a.NB;A.call(this,"sc.shared.MaterialPopup");this.ma=null;this.oa=!1;this.xe=this.Le=0;this.ya=new Co({icon:"gm/close",Bb:!0});this.va=b;this.Hn=f;this.Ki=h;this.Dx=k;this.rc=c;this.tc=e;this.maxHeight=t;this.Ca=!v;this.Ji=Aa||ra;this.gp=Ba;this.Sr=p;this.onClose=r;this.mq=l;this.eq=y;this.ao=E;this.Ll=oa;this.Ug=Ha;this.Qf=Na;this.uu=Va;Aa&&(this.Ug=Object.assign({},{"background-color":"rgba(0, 0, 0, .5)",
"z-index":"992"},this.Ug));cb&&(this.draggable=new Ws);this.Wl=sb;this.Pr=Cb;this.NB=a}
u(Ys,A);n=Ys.prototype;n.Fe=function(){return!0};
n.content=function(){var a=this;this.qa=this.element("div","class",{backdrop:!0,"narrow-responsive":this.Pr,"wide-responsive":!this.Pr},"style",Object.assign({},{pointerEvents:this.Ji&&this.Eb()?"auto":"none",opacity:this.Eb()?"1":"0"},this.Ug),"onclick",this.Ji?function(b){a.Ll&&b.target===a.qa&&a.close()}:void 0,function(){a.popup=a.element("div","class",{popup:!0,
draggable:a.draggable,background:a.Ca,"full-screen-on-mobile":!a.uu&&a.Qf,"full-screen":a.uu},"style",{transform:a.getTransform(),transformOrigin:xma(a.Hn)+" "+xma(a.Ki),opacity:a.Eb()?"1":"0",visibility:a.Eb()?"visible":"hidden"},"onkeydown",function(b){if(a.ao&&b.key==="Escape")a.close();else if(a.eq)if(b.key==="Tab"&&!b.shiftKey||a.mq&&b.key==="ArrowDown"){b.preventDefault();b=a.popup?uo(a.popup):[];var c=yma(a);c=c===void 0?document:c;vo(b,1,c)}else if(b.key==="Tab"&&b.shiftKey||a.mq&&b.key===
"ArrowUp")b.preventDefault(),Yha(a.popup?uo(a.popup):[],yma(a))},function(){a.Ji&&a.gp&&a.element("button","type","button","class","close-button","aria-label","Close","onclick",function(){return void a.close()},function(){a.ya.render()});
a.draggable?a.draggable.render({Wl:a.Wl,content:function(){return void a.va()},
pointerEvents:"auto"}):a.va();a.element("span","tabindex","0")})});
this.o&&this.o()};
n.open=function(a){var b=this;var c=a===void 0?{}:a;var e=c.anchor;a=c.Nb;var f=c.Le;c=c.xe;if(!this.Eb()&&(this.oa=!0,zma(this),this.Ja(),this.o=function(){if(e instanceof A){var h;var k=(h=e.getElement())==null?void 0:h.getBoundingClientRect()}else dl(e)?k=e.getBoundingClientRect():e&&(k=e);if(b.popup){h=b.Le;var l=b.xe,p=b.qa.getBoundingClientRect();k?(h+=Ama(b.rc,k.left,k.right,p.left,p.width,b.popup.offsetWidth),l+=Ama(b.tc,k.top,k.bottom,p.top,p.height,b.popup.offsetHeight)):(h+=Zs(b.rc,p.width,
b.popup.offsetWidth),l+=Zs(b.tc,p.height,b.popup.offsetHeight));b.maxHeight&&(b.popup.style.maxHeight=b.maxHeight,b.popup.style.overflowY="auto");h=Bma(h,b.popup.offsetWidth,window.innerWidth);l=Bma(l,b.popup.offsetHeight,window.innerHeight);b.popup.style.left=h+"px";b.popup.style.top=l+"px"}},window.addEventListener("resize",this.o),window.addEventListener("scroll",this.o),$s(this,f,c),a)){if(a=to())this.ma=a;
a=this.popup?uo(this.popup):[];a.length>0&&wma(a[0])&&a[0].focus()}};
function $s(a,b,c){a.Le=b!=null?b:a.Le;a.xe=c!=null?c:a.xe;var e;(e=a.o)==null||e.call(a)}
n.close=function(){if(this.Eb()&&(!this.Sr||this.Sr())&&(this.ma&&(this.ma.focus(),this.ma=null),this.oa=!1,this.Ja(),this.o&&(window.removeEventListener("resize",this.o),window.removeEventListener("scroll",this.o),this.o=void 0),zma(this),this.onClose))this.onClose()};
n.setAlignment=function(a){var b=a.rc;a=a.tc;this.rc=b!=null?b:this.rc;this.tc=a!=null?a:this.tc;var c;(c=this.o)==null||c.call(this)};
n.Eb=function(){return this.oa};
function Ama(a,b,c,e,f,h){b-=e;c-=e;switch(a){case 0:return b-h;case 1:return b;case 2:return(b+c-h)/2;case 3:return c-h;case 4:return c;default:return Zs(a,f,h)}}
function Zs(a,b,c){switch(a){case 6:return 0;case 7:return(b-c)/2;case 8:return b-c;default:return 0}}
function Bma(a,b,c){return b>c||a<0?0:a+b>=c?c-b:a}
function xma(a){switch(a){case 1:case 3:return"100%";case 2:case 4:return"0%";default:return"50%"}}
n.getTransform=function(){return this.Dx?"none":this.Eb()?"scale(1, 1)":"scale("+(this.Hn===0?1:0)+", "+(this.Ki===0?1:0)+")"};
function yma(a){var b,c;return(c=(b=a.getElement())==null?void 0:b.getRootNode())!=null?c:document}
function zma(a){if(a.NB){var b=a.uu||a.Qf&&window.matchMedia("(max-width: 37.5rem)").matches;a=!a.Eb()||!b;document.documentElement.style.overflow=a?"auto":"hidden"}}
;function at(a){var b=a.text===void 0?"":a.text;var c=a.trigger;var e=a.Xd===void 0?"":a.Xd;var f=a.kb===void 0?!1:a.kb;var h=a.tj===void 0?!0:a.tj;var k=a.Ci===void 0?!1:a.Ci;var l=a.mH===void 0?0:a.mH;var p=a.al===void 0?4:a.al;var r=a.delay===void 0?0:a.delay;var t=a.cW===void 0?function(){}:a.cW;
var v=a.dW===void 0?function(){}:a.dW;
var y=a.Ms===void 0?!1:a.Ms;var E=a.Ko===void 0?!1:a.Ko;var oa=a.Ln===void 0?!1:a.Ln;var ra=a.hg===void 0?1:a.hg;a=a.Qi===void 0?"":a.Qi;A.call(this,"sc.shared.MaterialTooltip");var Aa=this;this.o=!1;this.ma=function(){Aa.Ja()};
this.mH=l;this.al=p;this.kb=f;this.text=b;this.trigger=c;this.Xd=e;this.tj=h;this.Ci=k;this.Ms=y;this.Ko=E;this.Ln=oa;this.hg=ra;this.Qi=a;this.activate=function(){if(!Aa.Ci||Cma(Aa,Aa.trigger))Aa.o=!0,r>0?setTimeout(function(){Aa.Ja();t();Dma(Aa)},r):(Aa.Ja(),t(),Dma(Aa))};
this.deactivate=function(){Aa.o=!1;Aa.Ja();v()};
this.oa=function(Ba){var Ha=Ba.clientX,Na=Ba.clientY;Ba=Aa.container.getBoundingClientRect();var Va=Ba.right,cb=Ba.bottom;Na=Ba.top<=Na&&Na<=cb;Ba.left<=Ha&&Ha<=Va&&Na||Aa.deactivate()};
this.qa=function(Ba){Ba.key==="Escape"&&Aa.o&&(Aa.deactivate(),Ba.stopPropagation())}}
u(at,A);function Dma(a){a.Ms&&setTimeout(function(){var b;(b=a.blob)==null||b.setAttribute("aria-hidden","true")},0)}
at.prototype.content=function(){var a=this;Ema(this);var b;this.container=this.element("div","class",{container:!0,"container-dark":this.hg===1,"container-light":this.hg===2,"container-gm3":this.hg===3,"container-gm3-rich":this.hg===4},"role",this.Ms?"alert":"","style",{display:this.o?"":"none",direction:this.kb?"rtl":void 0,"max-height":this.tj?"7rem":void 0,"max-width":(b=this.Qi)!=null?b:void 0},function(){if(!a.Ms||a.o){var f=mo(a.text);a.blob=f;f.classList.add(Fma+"blob");a.Ms||f.setAttribute("aria-hidden",
"true");for(var h=w(a.Xd.split(/ +/)),k=h.next();!k.done;k=h.next())(k=k.value)&&f.classList.add(k);a.tj?(f.style.webkitLineClamp="5",f.style.whiteSpace="normal"):f.style.display="inline-block";a.Qi!==""&&(f.style.maxWidth=a.Qi)}});
this.container.style.top="0";this.container.style.left="0";this.container.style.transform="none";b=this.container.getBoundingClientRect();var c=this.trigger.getBoundingClientRect(),e=c.top-b.top;this.container.style.left=Math.floor(c.x-b.x+c.width/2+this.mH)+"px";this.container.style.top=e+c.height+this.al+"px";this.container.style.transform="";this.trigger.addEventListener("mouseenter",this.activate);this.trigger.addEventListener("mouseleave",this.oa);this.trigger.addEventListener("focus",this.activate);
this.trigger.addEventListener("focusin",this.activate);this.trigger.addEventListener("focusout",this.deactivate);this.trigger.addEventListener("blur",this.deactivate);this.trigger.addEventListener("keydown",this.qa);window.addEventListener("resize",this.ma);this.container&&this.container.addEventListener("mouseleave",this.deactivate)};
at.prototype.Ja=function(){A.prototype.Ja.call(this);var a;if((a=this.getElement())!=null&&a.firstChild&&(a=this.getElement().firstChild)){var b=window.innerHeight,c=document.documentElement.clientWidth,e=a.getBoundingClientRect();if(e.right>=c){var f=Number(a.style.left.replace("px",""));a.style.left=Math.floor(f-(e.right-c))+"px"}e.bottom>=b&&(a.style.top=a.offsetHeight/2*-1+"px");this.Ko&&(f=Number(a.style.left.replace("px","")),f<(e.right-f)/2&&(a.style.left="0",a.style.transform="none"),e.right>=
c&&(a.style.maxWidth="100vw"),c=a.getBoundingClientRect(),Number(a.style.top.replace("px",""))<0||c.bottom>=b)&&(a.style.top="0");this.Ln&&this.container&&(a=this.trigger.getBoundingClientRect(),b=this.container.offsetHeight,window.innerHeight-a.bottom<b+12&&(this.container.style.top=a.top-b-this.al+"px"))}};
at.prototype.onDetach=function(){Ema(this)};
function Ema(a){a.trigger.removeEventListener("mouseenter",a.activate);a.trigger.removeEventListener("mouseleave",a.oa);a.trigger.removeEventListener("focus",a.activate);a.trigger.removeEventListener("blur",a.deactivate);window.removeEventListener("resize",a.ma);a.container&&a.container.removeEventListener("mouseleave",a.deactivate)}
function Cma(a,b){if(b.scrollWidth>Math.round(b.getBoundingClientRect().width))return!0;b=w(b.children);for(var c=b.next();!c.done;c=b.next())if(Cma(a,c.value))return!0;return!1}
var Fma=oo("sc.shared.MaterialTooltip");var bt={item:!0,highlight:!0,"item-top-separator":!1,"item-bottom-separator":!1,"item-with-description":!1},Gma=Object.assign({},bt),Hma=Object.assign({},bt,{highlight:!1}),Ima={DEFAULT:bt,HELPCENTER_FIELD_SELECT:Gma,HELPCENTER_FIELD_SELECT_WITH_DESCRIPTION:Object.assign({},Gma,{"item-with-description":!0}),MULTI_SELECT:Hma,MULTI_SELECT_WITH_SEPARATOR:Object.assign({},Hma,{"item-top-separator":!0}),WITH_BOTTOM_SEPARATOR:Object.assign({},bt,{"item-bottom-separator":!0})};
function ct(a){var b=a.items;var c=a.Fs;var e=a.rc===void 0?5:a.rc;var f=a.tc===void 0?5:a.tc;var h=a.Hn===void 0?0:a.Hn;var k=a.Ki===void 0?0:a.Ki;var l=a.onClose;var p=a.maxHeight===void 0?void 0:a.maxHeight;var r=a.width;var t=a.wz===void 0?!1:a.wz;var v=a.Dt===void 0?!0:a.Dt;var y=a.Gc===void 0?"px":a.Gc;a=a.vd===void 0?"listbox":a.vd;A.call(this,"sc.shared.MaterialMenu");var E=this;this.items=b;this.Fs=c;this.maxHeight=p;this.width=r&&v?Math.max(112,Math.min(280,r)):r;this.wz=t;this.Dt=v;this.Gc=
y;this.vd=a;this.popup=new Ys({content:function(){return void Jma(E)},
rc:e,tc:f,Hn:h,Ki:k,mq:!0,onClose:l,Zk:!0,Gc:this.Gc})}
u(ct,A);n=ct.prototype;n.setWidth=function(a){this.width=this.Dt?Math.max(112,Math.min(280,a)):a;this.Ja()};
n.content=function(){this.popup.render()};
function Jma(a){var b=a.width!==void 0?a.Gc==="px"?a.width:(a.width/16).toFixed(2):null;b=b?""+b+a.Gc:null;a.element("div","role",a.vd,"tabindex","-1","aria-expanded",a.popup.Eb(),"class",{root:!0,"omit-top-rounded-corners":a.wz},"style",Object.assign({},{width:b},a.maxHeight?{maxHeight:a.maxHeight,overflowY:"auto"}:void 0),function(){a.Vm(a.items,0)})}
n.Vm=function(a,b){var c=this;a=w(a);for(var e=a.next(),f={};!e.done;f={od:void 0},e=a.next())if(f.od=e.value,!f.od.Dd||f.od.Dd())e=this.element("div",function(h){return function(){var k=c.vd==="listbox",l,p;c.element("button","type","button","role",(l=h.od.Lpa)!=null?l:"option","class",Ima[h.od.Er||"DEFAULT"],"disabled",(p=h.od.disabled)!=null?p:null,"data-item-id",h.od.itemId!==void 0?h.od.itemId:"","aria-selected",k?(c.Fs===h.od.Ve||c.Fs===h.od.value).toString():null,"onclick",function(){var r;
c.Fs=(r=h.od.Ve)!=null?r:h.od.value;h.od.trigger()},function(){h.od.icon&&Kma(c,h.od.icon,h.od.jj);
c.element("span","class",{"item-label":!0,"label-wrap":h.od.textWrap},"style",{"padding-left":b*5+"px"},function(){switch(typeof h.od.value){case "string":mo(h.od.value);break;case "function":h.od.value()}})})}}(f)),f.od.tooltipText&&(new at({text:f.od.tooltipText,
trigger:e})).render(),f.od.Vm&&Array.isArray(f.od.items)&&f.od.items.length>0&&this.Vm(f.od.items,++b)};
function Kma(a,b,c){c!=null||(c="DEFAULT");if(b){var e={};a.element("div","class",(e.icon=!0,e[c]=!!c,e),new Co({icon:b,size:24}))}}
n.Eb=function(){return this.popup.Eb()};
n.open=function(a){a=a===void 0?{}:a;this.popup.open({anchor:a.anchor,Le:a.Le,xe:a.xe,Nb:a.Nb})};
n.close=function(){this.popup.close()};function dt(a){var b=Error.call(this,a.getMessage());this.message=b.message;"stack"in b&&(this.stack=b.stack);this.code=a.getCode();this.canonicalCode=Ef(a,2);Ee(a,et,3)&&(this.pii=jf(a,et,3))}
u(dt,Error);var ft=new Ul,Lma="Failed to post. Content violates "+Vl(ft,"a",{href:"https://support.google.com/communities/answer/7425194",target:"_blank"})+"Community Policy"+Xl(ft,"a")+".",Mma="The display name you chose does not meet the "+Vl(ft,"a",{href:"https://support.google.com/communities/answer/7425194",target:"_blank"})+"Community Policy"+Xl(ft,"a")+".";Vl(ft,"a",{href:"https://support.google.com/communities/answer/7425194",target:"_blank"});Xl(ft,"a");function gt(a){return a+" (Opens in a new window)"}
;var ht=new Ul,Nma=Vl(ht,"span",{id:"disclaimerText"})+"Community content may not be verified or up-to-date."+Xl(ht,"span")+" "+Vl(ht,"a",{href:"https://support.google.com/communities/answer/7424249",target:"_blank","aria-label":"Learn more about how community content may not be verified or up-to-date"})+"Learn more"+Xl(ht,"a")+".",Oma=ht.format(Nma),Pma="Please follow our "+Vl(ht,"a",{href:"https://support.google.com/communities/answer/7425194",target:"_blank"})+"content policy"+Xl(ht,"a")+" when creating your post.",
Qma=ht.format(Pma),Rma="Your notifications are currently off and you won't receive subscription updates. To turn them on, go to "+Vl(ht,"b")+"Notifications"+Xl(ht,"b")+" preferences on your "+Vl(ht,"b")+"Profile"+Xl(ht,"b")+" page.",Sma=ht.format(Rma),Tma="You'll be posting in a "+Vl(ht,"b")+"public thread"+Xl(ht,"b")+". Make sure your content is appropriate for this forum.",Uma=ht.format(Tma),Vma=gt("Generative AI Additional Terms of Service"),Wma=Vl(ht,"a",{href:"https://policies.google.com/terms/generative-ai",
target:"_blank","class":"link","aria-label":Vma})+"Review for safety, factuality and helpfulness"+Xl(ht,"a")+" before posting. Your feedback will help make this feature better.",Xma=ht.format(Wma),Yma="To start, please review and accept the "+Vl(ht,"a",{href:"https://policies.google.com/terms/generative-ai",target:"_blank","class":"link","aria-label":Vma})+"Generative AI Additional Terms of Service"+Xl(ht,"a"),Zma=ht.format(Yma),$ma="This reply will be attributed to you. Please verify that it follows our\n    "+
Vl(ht,"a",{href:"https://support.google.com/communities/answer/7425194",target:"_blank"})+"content policy"+Xl(ht,"a")+" before posting.",ana=ht.format($ma);var bna=Intl===void 0||typeof Intl.RelativeTimeFormat!=="function"?null:new Intl.RelativeTimeFormat("en",{style:"short"}),cna=Intl===void 0||typeof Intl.RelativeTimeFormat!=="function"?null:new Intl.RelativeTimeFormat("en",{style:"long"});
function it(a){var b=a.jH;var c=a.WT;a=a.style;c=c!=null?c:Date.now();c=b-c;var e=Math.abs(c);a=a===1?cna:bna;if(!a)return(new Date(b)).toDateString();e<6E4?(c=Math.trunc(c/1E3),b="second"):e<36E5?(c=Math.trunc(c/6E4),b="minute"):e<864E5?(c=Math.trunc(c/36E5),b="hour"):e<6048E5?(c=Math.trunc(c/864E5),b="day"):e<2628E6?(c=Math.trunc(c/6048E5),b="week"):e<31536E6?(c=Math.trunc(c/2628E6),b="month"):(c=Math.trunc(c/31536E6),b="year");return a.format(c,b)}
function dna(a){return{hours:Math.floor(a/3600),minutes:Math.floor(a/60)%60,seconds:a%60}}
function ena(a){a=a.split(":");for(var b=["0","0","0"],c=b.length-1,e=a.length-1;e>=0;e--)b[c--]=a[e];a=["{NUM_COUNT, plural, =1 {{NUM_COUNT} hour } other {{NUM_COUNT} hours }}","{NUM_COUNT, plural, =1 {{NUM_COUNT} minute } other {{NUM_COUNT} minutes }}","{NUM_COUNT, plural, =1 {{NUM_COUNT} second} other {{NUM_COUNT} seconds}}"];c="";b=w(b.entries());for(e=b.next();!e.done;e=b.next()){var f=w(e.value);e=f.next().value;f=f.next().value;f=Number(f);f!==0&&(c+=(new fp(a[e])).format({NUM_COUNT:f}))}return c}
;var jt;hb("hcfe.stats.getInstance",function(){return jt});
var fna=new Map([["primary-button",1],["action-button",2],["default-button",3],["product-link",4]]);var kt=[0,mj,-1];function lt(a){this.Aa=se(a)}
u(lt,eh);var mt=[0,Qh,x,Qh];lt.prototype.Ba=wi(mt);var gna=[0,hi,-1];function nt(a){this.Aa=se(a)}
u(nt,eh);nt.prototype.getEmail=function(){return Df(this,1)};var ot=[0,hi,-2];nt.prototype.Ba=wi(ot);var hna=[0,kt,mt,hi,ot,gna];function ina(a){if(!a)return null;a=Nf(a,2);return a===null||a===void 0?null:Al(a)}
;var jna=[0,1,mt,ot,hi];function pt(a){this.Aa=se(a)}
u(pt,eh);var qt=[4,5,6];pt.prototype.Ba=wi([0,qt,Qh,-1,ot,ii,ki,jna,ki,hna]);var rt;function kna(){var a={iT:Number(No("internal_customer_id"))};var b=a.iT;var c=a.Zb===void 0?dq():a.Zb;var e;return Ra(function(f){try{if(rt)return f.return(rt);e={v:"1"};b&&(e.internal_customer_id=b.toString());rt=c.get({endpoint:"adssellerappointment",queryParams:e,response:pt});return f.return(rt)}catch(h){return f.return(new pt)}Ia(f)})}
;var lna={"ads.svg":mn('<svg viewBox="-4 -4 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 2.25c.825 0 1.5.675 1.5 1.5V7.5h-1.5V6H3v8.25h9v1.5H3c-.825 0-1.5-.675-1.5-1.5V3.75c0-.825.675-1.5 1.5-1.5ZM15 9v2.25h2.25v1.5H15V15h-1.5v-2.25h-2.25v-1.5h2.25V9H15Zm-6 2.25v1.5H4.5v-1.5H9Zm1.5-3v1.5h-6v-1.5h6Z"/></svg>\n'),"ads_logo.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 58"><path fill="#FBBC04" d="M2.154 41.762 22.931 5.776l17.995 10.39L20.149 52.15z"/><path fill="#4285F4" fill-rule="evenodd" d="M61.703 41.758 40.924 5.771C38.056.802 31.702-.9 26.733 1.967c-4.969 2.87-6.673 9.223-3.804 14.192l20.78 35.987c2.868 4.969 9.222 6.669 14.19 3.804 4.97-2.87 6.67-9.223 3.804-14.192" clip-rule="evenodd"/><path fill="#34A853" fill-rule="evenodd" d="M11.153 57.342c5.737 0 10.388-4.65 10.388-10.388s-4.65-10.388-10.388-10.388S.765 41.217.765 46.954s4.651 10.388 10.388 10.388" clip-rule="evenodd"/></svg>\n'),
"alumnus_expert.svg":mn('<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#34A853"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.833 13.5L16 8.5l9.167 5v6.667H23.5v-5.759L16 18.5l-9.166-5zm3.334 6.817v-3.334L16 20.167l5.834-3.184v3.334L16 23.5l-5.833-3.183z" fill="#fff"/></svg>\n'),"attribution_icon.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 136 86" fill="none">\n  <path fill="#3C4043" d="m93.672.5 1.374 32.14-1.765.132L93.672.5Z"/>\n  <path fill="#4285F4" d="m33.549 12.709.142.113-.142-.346v.233Z"/>\n  <path fill="#fff" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M93.325.633H25.516v57.25h67.81V.633Z"/>\n  <path fill="#fff" stroke="#3C4043" stroke-miterlimit="10" d="m78.664 23.592-11.05 2.64a9.207 9.207 0 0 1-3.549 9.582l6.613 9.347a20.744 20.744 0 0 0 8.527-16.82 20.599 20.599 0 0 0-.54-4.75Z"/>\n  <path fill="#fff" stroke="#3C4043" stroke-miterlimit="10" d="m67.86 9.806-5.048 10.306a9.196 9.196 0 0 1 4.799 6.123l11.05-2.64c-1.404-6.054-5.432-11.087-10.802-13.79Z"/>\n  <path fill="#D2E3FC" stroke="#D2E3FC" stroke-miterlimit="10" d="M38.37 28.344c0 3.307.771 6.425 2.126 9.197l10.168-5.115a9.267 9.267 0 0 1-.95-4.082c0-5.084 4.064-9.198 9.074-9.198V7.644c-11.275 0-20.418 9.266-20.418 20.7Z"/>\n  <path fill="#fff" stroke="#3C4043" stroke-miterlimit="10" d="M58.79 49.042a20.17 20.17 0 0 0 11.89-3.874l-6.614-9.348a8.941 8.941 0 0 1-5.283 1.726c-3.561 0-6.638-2.085-8.123-5.115l-10.168 5.115c3.35 6.81 10.286 11.496 18.297 11.496ZM62.821 20.112l5.047-10.306a20.09 20.09 0 0 0-9.074-2.155v11.497c1.448 0 2.809.353 4.027.964Z"/>\n  <path fill="#fff" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M64.048 49.102H3.878V85.5h60.17V49.102Z"/>\n  <path fill="#fff" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m3.978 65.713 15.973 6.305 17.167-7.446 14.767 7.667 9.062-6.413"/>\n  <path fill="#EA4335" stroke="#EA4335" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M19.931 75.003c1.868 0 3.381-1.534 3.381-3.427 0-1.892-1.513-3.427-3.38-3.427-1.868 0-3.382 1.535-3.382 3.427 0 1.893 1.514 3.427 3.381 3.427Z"/>\n  <path fill="#fff" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M51.9 75.003c1.867 0 3.38-1.534 3.38-3.427 0-1.892-1.513-3.427-3.38-3.427-1.868 0-3.381 1.535-3.381 3.427 0 1.893 1.513 3.427 3.38 3.427ZM37.068 67.818c1.867 0 3.38-1.535 3.38-3.427 0-1.893-1.513-3.427-3.38-3.427-1.868 0-3.381 1.534-3.381 3.427 0 1.892 1.513 3.427 3.38 3.427ZM3.881 69.149c1.867 0 3.381-1.534 3.381-3.427s-1.514-3.427-3.38-3.427C2.013 62.295.5 63.829.5 65.722s1.514 3.427 3.381 3.427ZM135.5 23.234H92.385v36.399H135.5V23.234Z"/>\n  <path fill="#fff" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M127.963 43.545h-26.104a1.143 1.143 0 0 1-1.131-1.146v-.296c0-.63.509-1.147 1.131-1.147h26.104c.621 0 1.131.517 1.131 1.147v.296c0 .63-.51 1.146-1.131 1.146Z"/>\n  <path fill="#fff" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M109.86 32.85H59.33v44.323h50.53V32.85Z"/>\n  <path fill="#fff" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M76.632 55.938H67.31v13.858h9.322V55.937ZM104.595 62.865h-9.323v6.93h9.323v-6.93Z"/>\n  <path fill="#FBBC04" stroke="#FBBC04" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M94.662 49.007H85.34v20.788h9.323V49.007Z"/>\n  <path fill="#fff" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M85.347 42.077h-8.701v27.718h8.7V42.077Z"/>\n  <path fill="#fff" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M62.818 69.794h44.402"/>\n</svg>\n'),
"beenhere.svg":mn('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#041E49"><path d="m12 23-7.2-5.4q-.375-.275-.587-.7Q4 16.475 4 16V4q0-.825.588-1.413Q5.175 2 6 2h12q.825 0 1.413.587Q20 3.175 20 4v12q0 .475-.212.9-.213.425-.588.7zm0-2.5 6-4.5V4H6v12zM10.95 15l5.65-5.65-1.4-1.45-4.25 4.25-2.1-2.1-1.45 1.4zM12 4H6h12z"/></svg>\n'),"beta.svg":mn('<svg viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M4.648 11V5.272H6.792C7.10667 5.272 7.392 5.33867 7.648 5.472C7.904 5.60533 8.10667 5.78667 8.256 6.016C8.41067 6.24533 8.488 6.504 8.488 6.792C8.488 7.08533 8.416 7.336 8.272 7.544C8.128 7.752 7.94133 7.90933 7.712 8.016V8.056C8 8.152 8.23467 8.31733 8.416 8.552C8.59733 8.78667 8.688 9.06667 8.688 9.392C8.688 9.712 8.60533 9.992 8.44 10.232C8.28 10.472 8.06133 10.6613 7.784 10.8C7.512 10.9333 7.21333 11 6.888 11H4.648ZM5.528 8.464V10.184H6.888C7.08 10.184 7.24533 10.144 7.384 10.064C7.52267 9.984 7.62667 9.87733 7.696 9.744C7.77067 9.61067 7.808 9.472 7.808 9.328C7.808 9.17333 7.77067 9.032 7.696 8.904C7.62133 8.77067 7.512 8.664 7.368 8.584C7.22933 8.504 7.05867 8.464 6.856 8.464H5.528ZM5.528 7.68H6.752C6.93867 7.68 7.096 7.64267 7.224 7.568C7.35733 7.488 7.45867 7.38667 7.528 7.264C7.59733 7.136 7.632 7.00533 7.632 6.872C7.632 6.73867 7.59733 6.61333 7.528 6.496C7.464 6.37333 7.368 6.27467 7.24 6.2C7.112 6.12 6.96 6.08 6.784 6.08H5.528V7.68ZM10.2958 11V5.272H13.7678V6.104H11.1758V7.72H13.5118V8.552H11.1758V10.168H13.7678V11H10.2958ZM16.6819 11V6.104H15.0739V5.272H19.1539V6.104H17.5539V11H16.6819ZM19.5947 11L21.7547 5.272H22.7547L24.9227 11H23.9547L23.4267 9.528H21.0907L20.5627 11H19.5947ZM23.1307 8.712L22.4987 6.96L22.2827 6.304H22.2347L22.0187 6.96L21.3867 8.712H23.1307Z" fill="#041E49"/>\n<rect x="0.5" y="0.5" width="29" height="15" rx="1.5" stroke="#041E49" fill="none"/>\n</svg>\n\n'),
"beta_dark.svg":mn('<svg viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M4.648 11V5.272H6.792C7.10667 5.272 7.392 5.33867 7.648 5.472C7.904 5.60533 8.10667 5.78667 8.256 6.016C8.41067 6.24533 8.488 6.504 8.488 6.792C8.488 7.08533 8.416 7.336 8.272 7.544C8.128 7.752 7.94133 7.90933 7.712 8.016V8.056C8 8.152 8.23467 8.31733 8.416 8.552C8.59733 8.78667 8.688 9.06667 8.688 9.392C8.688 9.712 8.60533 9.992 8.44 10.232C8.28 10.472 8.06133 10.6613 7.784 10.8C7.512 10.9333 7.21333 11 6.888 11H4.648ZM5.528 8.464V10.184H6.888C7.08 10.184 7.24533 10.144 7.384 10.064C7.52267 9.984 7.62667 9.87733 7.696 9.744C7.77067 9.61067 7.808 9.472 7.808 9.328C7.808 9.17333 7.77067 9.032 7.696 8.904C7.62133 8.77067 7.512 8.664 7.368 8.584C7.22933 8.504 7.05867 8.464 6.856 8.464H5.528ZM5.528 7.68H6.752C6.93867 7.68 7.096 7.64267 7.224 7.568C7.35733 7.488 7.45867 7.38667 7.528 7.264C7.59733 7.136 7.632 7.00533 7.632 6.872C7.632 6.73867 7.59733 6.61333 7.528 6.496C7.464 6.37333 7.368 6.27467 7.24 6.2C7.112 6.12 6.96 6.08 6.784 6.08H5.528V7.68ZM10.2958 11V5.272H13.7678V6.104H11.1758V7.72H13.5118V8.552H11.1758V10.168H13.7678V11H10.2958ZM16.6819 11V6.104H15.0739V5.272H19.1539V6.104H17.5539V11H16.6819ZM19.5947 11L21.7547 5.272H22.7547L24.9227 11H23.9547L23.4267 9.528H21.0907L20.5627 11H19.5947ZM23.1307 8.712L22.4987 6.96L22.2827 6.304H22.2347L22.0187 6.96L21.3867 8.712H23.1307Z" fill="#D3E3FD"/>\n<rect x="0.5" y="0.5" width="29" height="15" rx="1.5" stroke="#D3E3FD" fill="none"/>\n</svg>\n'),
"bids_and_budgets.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 32 32"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3 5 6.99h3V14h2V6.99h3L9 3z"/></svg>\n'),"bronze_expert.svg":mn('<svg viewBox="0 0 24 24"><circle cx="12" cy="12" fill="#a1887f" r="12"/><path d="M12 15.06l4.33 3.15-1.66-5.09L19 10h-5.31L12 4.79 10.31 10H5l4.33 3.08-1.66 5.13z" fill="#fff"/></svg>\n'),"carousel.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208 208"><path d="M91.408 3.985a21.89 21.89 0 0 1 25.184 0 21.893 21.893 0 0 0 16.775 3.58c9.059-1.764 18.251 2.346 23.007 10.289a21.975 21.975 0 0 0 13.874 10.123c8.991 2.09 15.724 9.599 16.852 18.798a22.085 22.085 0 0 0 8.575 14.916c7.368 5.58 10.477 15.191 7.783 24.056a22.145 22.145 0 0 0 1.792 17.129c4.471 8.108 3.419 18.158-2.632 25.155a22.124 22.124 0 0 0-5.3 16.381c.8 9.234-4.23 17.985-12.592 21.905a22.027 22.027 0 0 0-11.475 12.8c-3.009 8.762-11.148 14.702-20.375 14.868a21.924 21.924 0 0 0-15.667 7.005 21.899 21.899 0 0 1-24.634 5.259 21.877 21.877 0 0 0-17.15 0 21.9 21.9 0 0 1-24.634-5.259 21.923 21.923 0 0 0-15.667-7.005c-9.227-.166-17.366-6.106-20.375-14.868a22.03 22.03 0 0 0-11.475-12.8c-8.362-3.92-13.392-12.671-12.592-21.905a22.126 22.126 0 0 0-5.3-16.381c-6.05-6.997-7.102-17.047-2.632-25.155a22.148 22.148 0 0 0 1.793-17.13c-2.695-8.864.414-18.474 7.782-24.055A22.083 22.083 0 0 0 20.9 46.775c1.128-9.2 7.86-16.709 16.852-18.797 5.799-1.348 10.806-5.001 13.874-10.124C56.382 9.91 65.574 5.8 74.633 7.566a21.892 21.892 0 0 0 16.775-3.581Z"/></svg>\n'),
"community_specialist.svg":mn('<svg viewBox="0 0 24 24"><path d="M3.51 3.51a12 12 0 000 17L12 12z" fill="#3e81f6"/><path d="M20.49 3.51a12 12 0 00-17 0L12 12zm0 16.98L12 12l-8.49 8.49a12 12 0 0016.98 0z" fill="#7fa6f6"/><path d="M20.49 20.49a12 12 0 000-17L12 12z" fill="#3e81f6"/><circle cx="12" cy="12" fill="#fff" r="9"/><path d="M9.38 15l-2.96-3-1 1 4 4 8.5-8.5-1-1z" fill="#4285f4"/></svg>\n'),"desktop_mobile.svg":mn('<svg viewBox="0 0 208 208" fill="none"><path fill="#fff" d="M23.313 37.538v99.145h161.23V37.538H23.313Z"/><path fill="#3C4043" fill-rule="evenodd" d="M22.813 137.183V37.038h162.23v100.145H22.813Zm1-1h160.23V38.038H23.813v98.145Z" clip-rule="evenodd"/><path fill="#3C4043" fill-rule="evenodd" d="M33.5 45.745c-1.143 0-2.073.93-2.073 2.081 0 1.15.93 2.08 2.073 2.08 1.143 0 2.072-.93 2.072-2.08s-.93-2.08-2.072-2.08Zm-3.073 2.081c0-1.7 1.375-3.08 3.073-3.08a3.076 3.076 0 0 1 3.072 3.08c0 1.7-1.374 3.08-3.072 3.08a3.076 3.076 0 0 1-3.073-3.08ZM43.751 45.745c-1.142 0-2.072.93-2.072 2.081 0 1.15.93 2.08 2.072 2.08 1.143 0 2.073-.93 2.073-2.08s-.93-2.08-2.073-2.08Zm-3.072 2.081c0-1.7 1.374-3.08 3.072-3.08a3.076 3.076 0 0 1 3.073 3.08c0 1.7-1.374 3.08-3.073 3.08a3.076 3.076 0 0 1-3.072-3.08Z" clip-rule="evenodd"/><path stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M23.845 56.652h139.273"/><path fill="#fff" stroke="#3C4043" stroke-miterlimit="10" d="M134.376 169.598c.559.523.149 1.458-.597 1.458H74.096c-.746 0-1.156-.935-.596-1.458l3.69-3.628a40.87 40.87 0 0 0 12.116-29.059h29.264a40.87 40.87 0 0 0 12.115 29.059l3.691 3.628Z"/><path fill="#3C4043" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m89.8 137.231-.616 6.154 28.935-6.152c.036-.043-28.647.085-28.319-.002Z"/><path stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M16.472 171.201h150.486"/><path fill="#3C4043" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m163.863 114.63-4.622 21.79h4.622c.038 0-.298-22.09 0-21.79Z"/><path fill="#fff" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M192.537 171.2h-25.105a3.768 3.768 0 0 1-3.758-3.756v-52.508a3.768 3.768 0 0 1 3.758-3.756h25.105a3.768 3.768 0 0 1 3.758 3.756v52.508a3.768 3.768 0 0 1-3.758 3.756Z"/><path stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M174.836 167.782h10.298M176.528 113.506c0 .939.751 1.728 1.728 1.728h5.149c.94 0 1.729-.751 1.729-1.728"/><path fill="#34A853" d="M180.267 150.73c5.97 0 10.81-4.877 10.81-10.892 0-6.016-4.84-10.893-10.81-10.893-5.971 0-10.811 4.877-10.811 10.893 0 6.015 4.84 10.892 10.811 10.892Z"/><mask id="desktopMobileCharacter" width="62" height="62" x="73" y="66" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#4285F4" stroke="#4285F4" stroke-miterlimit="10" d="M103.959 127.385c16.66 0 30.166-13.501 30.166-30.154 0-16.654-13.506-30.154-30.166-30.154s-30.165 13.5-30.165 30.154c0 16.653 13.505 30.154 30.165 30.154Z"/></mask><g mask="url(#desktopMobileCharacter)"><path fill="#4285F4" d="M103.959 127.385c16.66 0 30.166-13.501 30.166-30.154 0-16.654-13.506-30.154-30.166-30.154s-30.165 13.5-30.165 30.154c0 16.653 13.505 30.154 30.165 30.154Z"/><path fill="#4285F4" fill-rule="evenodd" d="M103.959 67.577c-16.384 0-29.665 13.277-29.665 29.654 0 16.377 13.281 29.654 29.665 29.654s29.666-13.277 29.666-29.654c0-16.377-13.282-29.654-29.666-29.654ZM73.294 97.23c0-16.93 13.73-30.654 30.665-30.654 16.936 0 30.666 13.724 30.666 30.654s-13.73 30.654-30.666 30.654-30.665-13.724-30.665-30.654Z" clip-rule="evenodd"/><path fill="#FE8160" d="M90.872 80.475c-1.268 1.945-.895 6.358-.97 7.892-.148 2.692-.633 5.497-2.423 7.48.783.336 1.603.71 2.386 1.047.038 2.393.373 4.787.97 7.068.186.748.447 1.496 1.006 2.02.56.448 1.305.598 2.013.598 2.386 0 4.585-1.122 6.748-2.094.521-.225 1.192-.449 1.64-.113.335.262.41.748.447 1.197.224 3.142-.373 6.695-2.908 8.527-2.646 1.87-6.188 1.197-9.431 1.047-1.566-.074-3.169.038-4.548.748-2.088 1.085-1.743.827-2.302 3.108-.56 2.281.485-2.281 0 0 15.918 0 26.045-.5 42-.5.112-6.844-1.897-3.393-8.57-4.852-1.566-.336-3.467-.635-4.138-2.094-.224-.486-.261-1.047-.298-1.571-.522-5.759-2.983-11.332-6.897-15.595-.224-.262-.485-.524-.559-.823-.336-1.084.969-1.87 1.864-2.58 1.528-1.197 2.311-3.516 1.379-5.199-.708-1.272-2.535-1.907-3.877-1.272-1.342.636-1.64 3.553-3.169 3.441-.372-.037-.708-.261-1.006-.486-1.976-1.645-3.094-4.039-4.735-6.021-.596-.71-1.304-1.421-2.162-1.72-1.193-.412-1.938-.038-2.46.747Z"/><path fill="#3C4043" fill-rule="evenodd" d="M91.685 79.18c.535-.187 1.14-.157 1.81.075h.002c.995.348 1.778 1.153 2.38 1.871l.003.003c.623.753 1.178 1.572 1.715 2.364.185.273.368.543.551.806.724 1.04 1.463 2.001 2.393 2.778.294.22.525.356.74.38.191.012.359-.059.552-.254.209-.212.402-.529.62-.927l.139-.258c.168-.315.351-.659.552-.96.258-.386.59-.778 1.048-.995.808-.383 1.737-.374 2.549-.102.811.271 1.555.82 1.979 1.582h.001c.544.983.574 2.126.276 3.163a5.297 5.297 0 0 1-1.784 2.671c-.138.11-.277.216-.412.318-.343.26-.666.506-.926.782-.35.372-.445.656-.357.94l.004.014.003.013a.742.742 0 0 0 .137.245c.062.081.126.154.201.24l.11.127c3.986 4.344 6.489 10.017 7.021 15.882v.01c.039.544.075 1.009.254 1.397.26.564.768.936 1.464 1.212.605.24 1.288.384 1.979.529l.346.074h.002c6.905 1.509 8.079-2.369 7.963 4.713l-42.5.627.697 1.5c.22-1.032-.182.266-.053-.82.01-.086-.654-.594-.644-.68.14-1.167-.258.692.5.5-.472.119.197-2.251 2.572-3.551l.001-.001c1.497-.771 3.206-.879 4.8-.803.575.026 1.144.068 1.707.108 1.081.079 2.144.156 3.195.125 1.573-.045 3.007-.334 4.216-1.188 2.31-1.671 2.92-4.981 2.7-8.081a2.694 2.694 0 0 0-.091-.559c-.047-.15-.104-.232-.162-.28-.075-.054-.198-.088-.416-.056a3.048 3.048 0 0 0-.719.229l-.642.292c-1.94.886-4.041 1.845-6.307 1.845-.765 0-1.642-.159-2.326-.708l-.015-.012-.014-.013c-.67-.629-.96-1.501-1.149-2.261a30.452 30.452 0 0 1-.978-6.861c-.298-.13-.6-.264-.9-.397h-.002c-.401-.179-.8-.355-1.188-.522l-.642-.276.468-.519c1.666-1.845 2.147-4.494 2.295-7.17.015-.302.011-.724.007-1.24l-.003-.337c-.004-.662-.004-1.43.034-2.213.037-.782.114-1.592.265-2.337.15-.74.381-1.45.747-2.012l.002-.003c.301-.453.697-.831 1.23-1.018Zm-.395 1.57c-.268.411-.465.982-.604 1.663-.137.677-.21 1.43-.247 2.187-.036.754-.036 1.499-.032 2.157l.003.324c.004.517.008.977-.008 1.31v.003c-.138 2.49-.562 5.192-2.115 7.259l.587.26h.001c.401.178.8.354 1.188.521l.297.128.005.324c.037 2.352.367 4.706.953 6.95l.002.005c.181.727.412 1.345.849 1.762.433.34 1.04.477 1.685.477 2.035 0 3.93-.863 5.904-1.761l.639-.289.007-.004c.27-.116.617-.25.974-.302.357-.052.792-.031 1.165.25l.007.005c.275.215.422.507.505.775.082.265.113.544.133.775v.006c.227 3.18-.356 6.974-3.113 8.967l-.005.004c-1.437 1.015-3.097 1.324-4.766 1.372-1.1.032-2.254-.052-3.368-.132-.55-.039-1.09-.078-1.609-.102-1.537-.074-3.034.043-4.295.692-1.902.989-1.988.444-2.532 2.664-.272 1.108.097-.67-.043.5-.011.089-.25.411-.26.5-.104.876.42-1.884.26-1L125 117.873c-.141-6.426-1.896-2.363-8.176-3.736a30.049 30.049 0 0 0-.327-.069c-.686-.144-1.464-.307-2.156-.581-.814-.323-1.592-.83-2.003-1.724-.26-.564-.304-1.196-.339-1.691l-.004-.048c-.513-5.649-2.927-11.117-6.766-15.298l-.006-.007-.006-.006-.083-.096c-.085-.097-.187-.213-.271-.325a1.72 1.72 0 0 1-.307-.592c-.239-.794.149-1.44.588-1.908.323-.343.75-.666 1.113-.942.12-.091.234-.177.334-.257l.003-.002a4.307 4.307 0 0 0 1.44-2.162c.242-.842.198-1.7-.19-2.4-.284-.51-.808-.914-1.422-1.12-.614-.205-1.27-.196-1.804.057-.213.101-.421.312-.644.647-.171.257-.323.541-.487.847l-.158.295c-.216.396-.468.827-.786 1.15-.334.338-.774.59-1.344.549l-.013-.001c-.527-.053-.963-.362-1.258-.584l-.01-.008-.01-.008c-1.04-.867-1.845-1.922-2.583-2.983-.198-.285-.39-.568-.58-.849-.53-.78-1.045-1.54-1.635-2.253-.59-.702-1.223-1.317-1.942-1.568-.521-.18-.886-.169-1.152-.075-.268.093-.506.293-.726.625Z" clip-rule="evenodd"/><path fill="#fff" d="M102.279 109.759s-.746 5.572-7.008 5.759c-6.263.15-8.612-1.72-11.669 2.768 0 0 15.024 16.343 35.937 5.198l-1.976-12.715-15.284-1.01Z"/><path fill="#fff" fill-rule="evenodd" d="m101.845 109.229 16.151 1.067 2.092 13.463-.314.167c-10.613 5.655-19.758 4.339-26.24 1.599a33.69 33.69 0 0 1-7.566-4.466 29.11 29.11 0 0 1-2.022-1.729 18.2 18.2 0 0 1-.526-.513c-.06-.06-.105-.108-.136-.14l-.036-.038-.01-.01-.002-.003-.001-.001.367-.339-.367.339-.27-.293.224-.328c.789-1.157 1.556-1.942 2.384-2.449.835-.511 1.695-.719 2.63-.779.86-.055 1.806.015 2.855.092l.214.016c1.145.084 2.446.171 3.985.134 2.954-.088 4.565-1.433 5.454-2.732a7.009 7.009 0 0 0 1.035-2.392c.015-.069.024-.122.03-.157l.006-.037.001-.007.001-.002.061-.462Zm.837 1.058a7.995 7.995 0 0 1-1.146 2.564c-1.049 1.534-2.942 3.068-6.25 3.167h-.003c-1.592.038-2.933-.052-4.084-.137l-.187-.013c-1.077-.08-1.957-.144-2.746-.094-.818.053-1.509.228-2.17.633-.597.366-1.197.935-1.846 1.827.1.1.228.224.381.368a28.557 28.557 0 0 0 1.954 1.67 32.652 32.652 0 0 0 7.338 4.332c6.193 2.618 14.901 3.902 25.067-1.396l-1.859-11.967-14.449-.954Z" clip-rule="evenodd"/><path fill="#3C4043" d="M110.518 114.396a41.25 41.25 0 0 1 .111-1.608 12.608 12.608 0 0 0-.111 1.608Z"/><path fill="#3C4043" fill-rule="evenodd" d="M110.687 112.292a.5.5 0 0 1 .44.546 40.18 40.18 0 0 0-.11 1.586.5.5 0 0 1-.999-.027c0-.51.039-1.093.116-1.675a.5.5 0 0 1 .553-.43Z" clip-rule="evenodd"/><path fill="#3C4043" d="M133.295 102.241c-1.976-3.814-7.232-5.385-11.146-5.61-.858-.037-1.752-.074-2.498-.486-.932-.523-1.491-1.533-1.678-2.617-.596-3.404 1.715-6.47 1.38-9.836-.858-8.34-9.655-13.539-20.615-12.305-3.952.487-8.202 1.272-10.737 4.488-1.193 1.534-1.715 3.478-1.528 5.498.224 2.356 1.827 2.954 3.318 4.3l.112.113c.037-1.833.186-4.077.969-5.31.522-.786 1.267-1.16 2.423-.786.895.3 1.603.972 2.2 1.72 1.602 1.982 2.758 4.376 4.734 6.022.298.224.596.486.969.486 1.566.112 1.827-2.805 3.169-3.441 1.342-.598 3.168 0 3.877 1.309.932 1.683.186 4.002-1.38 5.198-1.491 1.122-2.535 2.282-1.379 4.152.708 1.159 1.603 2.206 2.311 3.403 1.193 1.945 2.125 4.076 2.61 6.32.522 2.431.596 4.975.261 7.443 0 .149-.037.336-.037.486-.038.374-.075.935-.112 1.608.074 5.423 3.504 7.966 5.964 9.088 1.417.636 2.498.823 2.498.823s3.579-1.982 6.561-4.974l1.118-1.234a13.337 13.337 0 0 0 2.983-2.992c2.162-3.03 5.517-9.387 3.653-12.866Z"/><path fill="#3C4043" fill-rule="evenodd" d="M98.682 70.89c11.094-1.249 20.27 4.01 21.168 12.75v.002c.17 1.702-.296 3.323-.731 4.838l-.073.253c-.464 1.622-.856 3.135-.58 4.708v.002c.169.983.666 1.837 1.428 2.266.624.343 1.393.385 2.276.423h.007c2.005.115 4.358.575 6.472 1.5 2.111.924 4.029 2.334 5.088 4.376.525.981.667 2.133.576 3.323-.091 1.193-.417 2.455-.865 3.683-.895 2.455-2.299 4.841-3.399 6.383a13.789 13.789 0 0 1-3.053 3.074l-1.084 1.198-.017.017c-1.52 1.525-3.187 2.788-4.47 3.668-.642.441-1.191.787-1.579 1.024a28.834 28.834 0 0 1-.579.341l-.032.018-.009.005-.004.002-.242-.437-.085.493-.002-.001h-.004l-.012-.003-.043-.008c-.036-.007-.088-.017-.154-.032a9.989 9.989 0 0 1-.553-.141 13.36 13.36 0 0 1-1.849-.675l-.003-.001c-2.558-1.166-6.179-3.846-6.257-9.536v-.034c.037-.661.074-1.223.112-1.608.002-.095.012-.191.02-.261l.001-.01c.01-.091.016-.146.016-.188 0-.023.001-.045.004-.067.328-2.414.255-4.899-.254-7.27-.47-2.179-1.378-4.259-2.547-6.165l-.004-.006c-.341-.577-.729-1.12-1.131-1.678l-.061-.085c-.378-.525-.768-1.065-1.115-1.633l-.001-.002.427-.26-.425.263-.001-.001c-.647-1.048-.717-1.982-.332-2.826.36-.788 1.088-1.423 1.835-1.986l-.001.001.303.397-.3-.4-.002.002c1.418-1.085 2.028-3.143 1.244-4.558l-.002-.004c-.284-.525-.806-.928-1.42-1.134-.611-.204-1.27-.197-1.808.041l.005-.002-.214-.452.203.457.006-.003c-.21.101-.414.31-.633.642-.166.254-.314.533-.473.835-.053.1-.107.203-.164.307-.214.397-.464.83-.786 1.154-.334.337-.774.584-1.341.549h.019v-.5l-.036.498.017.002c-.3-.005-.55-.112-.748-.229-.154-.09-.305-.207-.425-.298a5.866 5.866 0 0 0-.097-.075c-1.04-.867-1.854-1.92-2.597-2.982-.224-.321-.441-.64-.655-.955-.506-.745-.998-1.47-1.551-2.154l-.003-.003c-.574-.72-1.207-1.303-1.964-1.557h.002l.154-.475-.159.474h.003c-.5-.16-.856-.144-1.121-.047-.267.098-.507.3-.727.63l.003-.004-.422-.268.416.277a.168.168 0 0 1 .003-.004c-.333.527-.552 1.31-.689 2.231-.135.913-.181 1.907-.2 2.817a.5.5 0 0 1-.854.343l-.102-.103.01.009.237-.263.21.004.354-.353-.112-.112a13.777 13.777 0 0 0-.707-.595c.03-.626.083-1.273.175-1.893.143-.965.388-1.919.837-2.626l.005-.008c.301-.453.695-.829 1.219-1.02.526-.193 1.12-.177 1.775.035l.005.002c1.03.344 1.812 1.107 2.43 1.881v-.001l-.39.314.391-.311v-.002c.58.718 1.11 1.498 1.625 2.257.208.307.415.611.621.906.728 1.04 1.477 2.002 2.408 2.78l-.01-.008-.3.4.32-.385a.087.087 0 0 0-.01-.007l.102.077c.113.086.202.154.299.211a.512.512 0 0 0 .294.091c.207.015.382-.06.576-.254.209-.211.402-.527.616-.925l.142-.267c.165-.312.344-.652.54-.95.255-.387.585-.78 1.045-.998l.01-.005c.803-.358 1.726-.35 2.538-.078.812.271 1.557.821 1.981 1.604l-.001-.002-.437.242.439-.238-.001-.002c1.079 1.95.198 4.527-1.514 5.836l-.003.002c-.743.559-1.282 1.064-1.528 1.603-.221.484-.234 1.064.273 1.886l.002.002c.327.535.696 1.047 1.08 1.58l.054.076c.399.554.812 1.13 1.179 1.75l-.002-.003-.427.261.431-.255-.002-.003c1.215 1.983 2.171 4.165 2.67 6.473.532 2.481.61 5.072.271 7.585l.001-.037h-.5l.495.067a.308.308 0 0 0 .004-.03 2.696 2.696 0 0 1-.02.251l-.001.01a1.878 1.878 0 0 0-.018.238c-.036.359-.072.904-.109 1.568v-.017l-.5.007.499.028.001-.018c.078 5.144 3.31 7.546 5.67 8.623l-.001-.001-.205.456.208-.455h-.002c.682.305 1.282.503 1.71.624.213.06.383.101.498.126a34.22 34.22 0 0 0 1.963-1.249c1.25-.858 2.86-2.079 4.32-3.542l1.11-1.225a.472.472 0 0 1 .074-.067 12.824 12.824 0 0 0 2.872-2.88c1.061-1.487 2.416-3.794 3.273-6.145.429-1.175.726-2.344.808-3.416.082-1.074-.055-2.019-.462-2.777l-.003-.006c-.917-1.771-2.613-3.053-4.603-3.924-1.985-.869-4.216-1.307-6.124-1.417h-.004l-.052-.002c-.82-.036-1.812-.079-2.659-.546l-.003-.002c-1.1-.618-1.721-1.783-1.925-2.968-.321-1.83.145-3.552.604-5.155l.057-.199c.447-1.562.863-3.012.713-4.517-.816-7.939-9.235-13.076-20.059-11.858-3.97.489-8.01 1.266-10.401 4.3-1.107 1.424-1.6 3.239-1.424 5.142.1 1.045.493 1.68 1.038 2.222.283.281.608.539.972.822l.098.076c.117.09.237.183.359.28-.018.36-.029.713-.035 1.05l.28.005-.246.246.009.01c-.322-.29-.65-.545-.983-.803l-.095-.074a11.385 11.385 0 0 1-1.064-.904c-.686-.682-1.204-1.525-1.329-2.836v-.001c-.197-2.135.354-4.209 1.632-5.85l.002-.003c2.677-3.398 7.136-4.191 11.068-4.675h.005Zm20.298 53.417-.085.493a.502.502 0 0 0 .327-.056l-.242-.437Z" clip-rule="evenodd"/><path stroke="#1F1F1F" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M77.899 82.026a.5.5 0 0 1 .19.68 29.508 29.508 0 0 0-3.795 14.525c0 16.377 13.281 29.654 29.665 29.654s29.666-13.277 29.666-29.654a.5.5 0 0 1 1 0c0 16.93-13.73 30.654-30.666 30.654s-30.665-13.724-30.665-30.654a30.507 30.507 0 0 1 3.924-15.015.5.5 0 0 1 .681-.19Z" clip-rule="evenodd"/></g></svg>\n'),
"diamond_expert.svg":mn('<svg viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.687 27.313A15.952 15.952 0 0015.981 32V16.02L4.687 27.313z" fill="#79A8FA"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.98 16H0a15.95 15.95 0 004.687 11.313L15.98 16.02V16zm0-16A15.95 15.95 0 004.687 4.687L15.98 15.98V0z" fill="#A0C1FC"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.98 15.98L4.687 4.686A15.95 15.95 0 000 16h15.98v-.02zM16 16L27.315 4.686A15.952 15.952 0 0016 0h-.02v15.98L16 16z" fill="#C5D9FD"/><path fill-rule="evenodd" clip-rule="evenodd" d="M32 16a15.95 15.95 0 00-4.686-11.314L16.001 16h16zm-16.02.02v15.979L16 32a15.95 15.95 0 0011.314-4.686L16.002 16l-.02.02z" fill="#A0C1FC"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16 16l11.314 11.314A15.954 15.954 0 0032 16H16z" fill="#79A8FA"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.982 19.55l5.107 3.716-1.954-6.002 5.106-3.634h-6.263l-1.996-6.193-1.996 6.193H7.724l5.106 3.634-1.955 6.002 5.107-3.716z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.98 16H16l-.02-.02V16zm0 .02L16 16h-.02v.02z" fill="#79A8FA"/></svg>\n'),
"error_computer.svg":mn('<svg viewbox=\'0 0 133 95\' fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M69.86 86.5c24.024 0 43.499-19.252 43.499-43S93.884.5 69.859.5c-24.024 0-43.5 19.252-43.5 43s19.476 43 43.5 43z" fill="#D2E3FC"/><path fill-rule="evenodd" clip-rule="evenodd" d="M30.946 83.328h-.509c0-4.703 4.26-8.516 9.516-8.516a10.5 10.5 0 013.26.513c2.408-2.536 5.942-4.138 9.88-4.138 5.062 0 9.455 2.644 11.65 6.519a8.458 8.458 0 011.718-.175c3.879 0 7.023 2.596 7.023 5.797H72.36c.72.21 1.125.39 1.125.525 0 1.133-9.252 2.194-19.464 2.194-10.212 0-23.583-1.054-23.583-2.194 0-.106.187-.289.51-.525z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M47.259 91.938h-.509c0-4.704 4.26-8.516 9.516-8.516 1.144 0 2.242.18 3.259.512 2.408-2.536 5.942-4.137 9.881-4.137 5.062 0 9.455 2.644 11.65 6.518a8.458 8.458 0 011.717-.174c3.88 0 7.024 2.595 7.024 5.796H88.67c.72.21 1.126.39 1.126.526 0 1.132-9.252 2.193-19.465 2.193-10.212 0-23.582-1.053-23.582-2.193 0-.107.186-.29.509-.525z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M101.164 83.781h.414c0-3.702-3.449-6.703-7.703-6.703-.953 0-1.865.15-2.707.426-1.95-1.93-4.786-3.145-7.941-3.145-4.117 0-7.687 2.067-9.46 5.091a6.64 6.64 0 00-1.189-.106c-3.003 0-5.437 1.987-5.437 4.437h.918c-.587.177-.918.328-.918.442 0 .942 7.401 1.824 15.571 1.824s18.866-.876 18.866-1.824c0-.09-.151-.243-.414-.442zm-8.279-72.953c.324.148.537.264.537.316 0 .307-4.785.59-8.44.59-3.655 0-6.966-.286-6.966-.59 0-.07.53-.183 1.364-.316h-1.364c0-.699 1.115-1.265 2.492-1.265.18 0 .357.01.527.028.675-1.34 2.416-2.294 4.457-2.294 1.538 0 2.906.542 3.776 1.382.173-.015.35-.023.529-.023 2.002 0 3.625.973 3.625 2.172h-.537zM64.33 12.64c.335.186.545.33.545.4 0 .499-6.755.96-11.915.96-5.16 0-9.835-.465-9.835-.96 0-.094.502-.233 1.33-.4h-1.33c0-1.199 1.623-2.171 3.625-2.171.194 0 .384.009.57.026 1.05-1.883 3.444-3.198 6.227-3.198 2.068 0 3.92.726 5.166 1.871.309-.038.626-.059.951-.059 2.878 0 5.211 1.581 5.211 3.532h-.545z" fill="#fff"/><mask id="error_svg__a" maskUnits="userSpaceOnUse" x="40" y="20" width="59" height="47"><path fill-rule="evenodd" clip-rule="evenodd" d="M93.648 20.086H46.07c-2.907 0-5.286 2.341-5.286 5.203v36.422c0 2.862 2.379 5.203 5.286 5.203h47.578c2.908 0 5.287-2.341 5.287-5.203V25.289c0-2.862-2.38-5.203-5.287-5.203zm0 41.625H46.07V25.289h47.578v36.422zm-5.286-10.406H51.357v7.804h37.005v-7.804z" fill="#fff"/></mask><g mask="url(#error_svg__a)"><path fill="#4285F4" d="M38.141 12.281h63.438v62.438H38.141z"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M1.304 59.54h-.32c0-6.252 5.522-11.32 12.332-11.32 1.508 0 2.953.248 4.289.703 3.115-3.298 7.66-5.376 12.721-5.376 6.425 0 12.017 3.349 14.911 8.291a10.04 10.04 0 012.099-.22c4.931 0 8.93 3.546 8.93 7.921h-.645c.418.167.645.313.645.435 0 1.53-11.882 2.964-24.997 2.964-13.114 0-30.285-1.424-30.285-2.964 0-.1.114-.248.32-.435z" fill="#fff"/><path opacity=".306" fill-rule="evenodd" clip-rule="evenodd" d="M1.757 60.898h-.32c0-6.251 5.522-11.319 12.333-11.319 1.507 0 2.952.248 4.288.703 3.116-3.298 7.66-5.376 12.721-5.376 6.425 0 12.018 3.35 14.911 8.291a10.04 10.04 0 012.099-.22c4.932 0 8.93 3.547 8.93 7.921h-.645c.419.167.645.314.645.435 0 1.53-11.882 2.964-24.997 2.964-13.114 0-30.285-1.424-30.285-2.964 0-.1.114-.248.32-.435z" fill="#A6CCF9"/><path fill-rule="evenodd" clip-rule="evenodd" d="M90.204 43.34h-.407c0-4.766 4.266-8.63 9.527-8.63 1.248 0 2.44.218 3.533.613 2.404-2.467 5.832-4.01 9.638-4.01 5.12 0 9.558 2.794 11.737 6.875.375-.052.76-.079 1.153-.079 3.831 0 6.944 2.545 7.005 5.703l.001.012-.001.015.001.067h-.014c-.4 1.18-9.369 2.266-19.246 2.266-10.105 0-23.334-1.128-23.334-2.348 0-.102.147-.27.407-.484z" fill="#fff"/><path opacity=".306" fill-rule="evenodd" clip-rule="evenodd" d="M90.657 44.246h-.407c0-4.766 4.266-8.629 9.528-8.629 1.248 0 2.439.218 3.532.613 2.404-2.468 5.833-4.011 9.638-4.011 5.12 0 9.558 2.794 11.737 6.875a8.516 8.516 0 011.153-.078c3.831 0 6.944 2.544 7.005 5.703l.001.012-.001.014.001.068h-.014c-.4 1.18-9.369 2.265-19.246 2.265-10.105 0-23.334-1.127-23.334-2.347 0-.103.147-.27.407-.485z" fill="#A6CCF9"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.332 32.578h-.488c0-1.95 1.927-3.531 4.304-3.531.65 0 1.267.118 1.82.33 1.075-1.04 2.602-1.69 4.298-1.69 2.412 0 4.485 1.316 5.396 3.199.161-.018.326-.027.494-.027 1.721 0 3.122.939 3.17 2.109a.03.03 0 01.002.009v.054h-.017c-.29.475-4.34.907-8.793.907-4.623 0-10.674-.462-10.674-.961 0-.07.187-.214.488-.399z" fill="#fff"/><path opacity=".306" fill-rule="evenodd" clip-rule="evenodd" d="M17.785 33.484h-.488c0-1.95 1.927-3.53 4.305-3.53.65 0 1.266.117 1.819.33 1.075-1.04 2.603-1.69 4.298-1.69 2.412 0 4.485 1.315 5.396 3.198.161-.017.326-.026.494-.026 1.721 0 3.122.938 3.17 2.108a.03.03 0 01.002.009v.055h-.017c-.29.474-4.34.906-8.793.906-4.622 0-10.674-.462-10.674-.961 0-.07.188-.213.488-.399z" fill="#A6CCF9"/><path fill-rule="evenodd" clip-rule="evenodd" d="M75.843 66.665h-.546c0-4.403 3.958-7.972 8.84-7.972a9.66 9.66 0 013.187.534c2.242-2.389 5.544-3.899 9.227-3.899 4.717 0 8.811 2.477 10.849 6.106a7.63 7.63 0 011.377-.125c3.532 0 6.395 2.398 6.395 5.356h-1.232c.785.221 1.232.41 1.232.55 0 1.066-8.57 2.066-18.03 2.066s-21.845-.993-21.845-2.067c0-.109.201-.3.546-.55z" fill="#fff"/><path opacity=".306" fill-rule="evenodd" clip-rule="evenodd" d="M76.296 67.57h-.546c0-4.402 3.958-7.971 8.84-7.971 1.124 0 2.199.189 3.188.534 2.241-2.389 5.543-3.899 9.226-3.899 4.718 0 8.811 2.478 10.85 6.106a7.601 7.601 0 011.376-.124c3.532 0 6.395 2.397 6.395 5.355h-1.231c.784.222 1.231.41 1.231.55 0 1.067-8.57 2.067-18.03 2.067S75.75 69.195 75.75 68.12c0-.109.201-.3.546-.55z" fill="#A6CCF9"/></svg>\n'),
"gold_expert.svg":mn('<svg viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.686 4.686c-6.244 6.244-6.248 16.363-.013 22.613L27.3 4.673c-6.25-6.235-16.37-6.23-22.613.013" fill="#FFB300"/><mask id="a" maskUnits="userSpaceOnUse" x="4" y="4" width="28" height="28"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.673 4.673H32V32H4.673V4.673z" fill="#fff"/></mask><g mask="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.314 27.314c6.248-6.25 6.248-16.38 0-22.628a.104.104 0 01-.015-.013L4.673 27.299l.013.015c6.248 6.248 16.379 6.248 22.628 0" fill="#FFA000"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M16 19.504l5.107 3.716-1.955-6 5.106-3.635h-6.263L16 7.391l-1.995 6.194H7.741l5.106 3.634-1.955 6.001L16 19.504z" fill="#fff"/></svg>\n'),
"google_employee.svg":mn('<svg viewBox="0 0 24 24"><path d="M3.51 3.51a12 12 0 000 17L12 12z" fill="#fcbc00"/><path d="M20.49 3.51a12 12 0 00-17 0L12 12z" fill="#ec412d"/><path d="M20.49 20.49L12 12l-8.49 8.49a12 12 0 0016.98 0z" fill="#2da84f"/><path d="M20.49 20.49a12 12 0 000-17L12 12z" fill="#3e81f6"/><circle cx="12" cy="12" fill="#fff" r="9"/><path d="M9.38 15l-2.96-3-1 1 4 4 8.5-8.5-1-1z" fill="#4285f4"/></svg>\n'),"guidebook.svg":mn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 2.99994C18.67 2.99994 19.89 3.14994 21 3.49994C21.75 3.74994 22.4 4.04994 23 4.49994V19.0999C23 19.3499 22.75 19.5999 22.5 19.5999C22.4 19.5999 22.35 19.5999 22.25 19.5499C20.85 18.7999 19.15 18.4999 17.5 18.4999C15.8 18.4999 13.35 19.1499 12 19.9999C10.55 18.8999 8.45 18.4999 6.5 18.4999C5.05 18.4999 3.1 18.9499 1.75 19.5999C1.7 19.5999 1.6625 19.6124 1.625 19.6249C1.5875 19.6374 1.55 19.6499 1.5 19.6499C1.25 19.6499 1 19.3999 1 19.1499V4.49994C2.45 3.39994 4.55 2.99994 6.5 2.99994C8.45 2.99994 10.55 3.39994 12 4.49994C13.45 3.39994 15.55 2.99994 17.5 2.99994ZM17.5 16.4999C18.7 16.4999 19.9 16.6499 21 16.9999V5.49994C19.9 5.14994 18.7 4.99994 17.5 4.99994C15.8 4.99994 13.35 5.64994 12 6.49994V17.9999C13.35 17.1499 15.8 16.4999 17.5 16.4999Z" fill="#146C2E"/>\n</svg>\n'),
"keywords_and_targeting.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 32 32"><path d="m20.49 19-5.73-5.73C15.53 12.2 16 10.91 16 9.5A6.5 6.5 0 1 0 9.5 16c1.41 0 2.7-.47 3.77-1.24L19 20.49 20.49 19zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z"/></svg>\n'),"laptop_check.svg":mn('<svg viewbox="0 0 264 129">\n  <path clip-rule="evenodd"\n        d="M253.699 77.341V121.672H255.699V82.1615C261.066 95.9199 264 110.814 264 126.364H0C0\n           114.162 1.80653 102.364 5.17753 91.2023L5.17752 121.672H7.17752L7.17753 85.1573C14.9741\n           63.5098 28.7424 44.5253 46.5978 30.0079L46.5978 121.672H48.5978L48.5978 28.4139C60.2493\n           19.311 73.5554 12.0755 88.018 7.18427L88.018 121.672H90.018L90.018 6.52521C102.437\n           2.53981 115.68 0.274025 129.438 0.0233224V121.672H131.438V0.00112029C131.625 0.000373674\n           131.813 0 132 0C145.524 0 158.573 1.94705 170.858 5.56432V121.672H172.858V6.17004C187.24\n           10.6473 200.538 17.4242 212.279 26.0475V121.672H214.279V27.5458C231.413 40.6375 245.067\n           57.7279 253.699 77.341Z"\n        fill="url(#paint0_linear)"\n        fill-rule="evenodd"\n        opacity="0.43643"></path>\n  <path d="M64.072 37.8157C64.072 35.6065 65.8629 33.8157 68.072 33.8157H195.928C198.137 33.8157\n           199.928 35.6065 199.928 37.8157V123.398H64.072V37.8157Z"\n        fill="url(#paint1_linear)"></path>\n  <rect fill="#1A73E8" height="7.1191" rx="3.55955" width="264" y="121.025"></rect>\n  <rect fill="white" height="74.7506" rx="2" width="123.991" x="70.0046" y="39.155"></rect>\n  <path d="M48.8264 121.82C48.4414 120.536 49.4023 119.245 50.742 119.245H213.301C214.641 119.245\n           215.601 120.536 215.217 121.82L214.709 123.512C214.455 124.358 213.676 124.938 212.793\n           124.938H51.2498C50.3666 124.938 49.588 124.358 49.3342 123.512L48.8264 121.82Z"\n        fill="#8AB4F8"></path>\n  <circle cx="132" cy="77" fill="#8AB4F8" opacity="0.3" r="28"></circle>\n  <path d="M128.25 82.25L123 77L121.25 78.75L128.25 85.75L143.25 70.75L141.5 69L128.25 82.25Z"\n        fill="#185ABC"></path>\n  <defs>\n    <linearGradient gradientunits="userSpaceOnUse"\n                    id="paint0_linear"\n                    x1="132"\n                    x2="132"\n                    y1="0"\n                    y2="126.364">\n      <stop stop-color="#D2E3FC" stop-opacity="0.35"></stop>\n      <stop offset="0.703125" stop-color="#D2E3FC" stop-opacity="0.5"></stop>\n      <stop offset="1" stop-color="#AECBFA"></stop>\n    </linearGradient>\n    <linearGradient gradientunits="userSpaceOnUse"\n                    id="paint1_linear"\n                    x1="132"\n                    x2="132"\n                    y1="33.8157"\n                    y2="123.398">\n      <stop stop-color="#D2E3FC"></stop>\n      <stop offset="0.204095" stop-color="#D2E3FC"></stop>\n      <stop offset="0.979167" stop-color="#AECBFA"></stop>\n    </linearGradient>\n  </defs>\n</svg>\n'),
"legacy_expert.svg":mn('<svg viewBox="0 0 40 40">\n  <path fill="#00838F" d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"></path>\n  <path fill="#00ABBE" fill-rule="evenodd" d="M37.343 10.034A19.908 19.908 0 0140 20c0 11.046-8.955 20-20 20a19.91 19.91 0 01-9.7-2.505c.085-14.88 11.933-26.973 26.717-27.453l.326-.008z" clip-rule="evenodd"></path>\n  <path fill="#0A666E" fill-rule="evenodd" d="M38.867 26.676zM27.05 11.929l.15.188a27.738 27.738 0 00-13.294 11.861L7.78 16.213l19.27-4.284z" clip-rule="evenodd"></path>\n  <path fill="url(#paint0_linear)" fill-rule="evenodd" d="M27.203 12.114l11.665 14.56a20.052 20.052 0 01-12.81 12.316l-12.15-15.014a27.738 27.738 0 0113.295-11.862z" clip-rule="evenodd"></path>\n  <path fill="#F3F3F9" fill-rule="evenodd" d="M15.395 21.615l3.628 8.315c.103.21.251.316.444.316a.516.516 0 00.456-.267l7.38-17.59a.484.484 0 00-.081-.485c-.116-.153-.32-.196-.613-.13l-18.504 3.74c-.233.067-.362.192-.388.375a.435.435 0 00.17.433l7.508 5.293z" clip-rule="evenodd"></path>\n  <path fill="#E8E8EE" fill-rule="evenodd" d="M15.498 21.504a.378.378 0 01.115.108c.032.045 1.256 2.86 3.673 8.442a.452.452 0 00.091.129l.06.059c-.178-.01-.316-.116-.414-.316l-3.628-8.315.103-.107z" clip-rule="evenodd"></path>\n  <path fill="#DADBDC" fill-rule="evenodd" d="M7.713 15.956c.127-.067.234-.036.321.094l7.527 5.393-.167.17h-.004l-7.503-5.29a.425.425 0 01-.176-.366l.002-.001z" clip-rule="evenodd"></path>\n  <path fill="#fff" fill-rule="evenodd" d="M26.61 11.774c.291-.066.495-.023.611.13.021.027.04.055.054.083-.01.066-.03.11-.06.133-.05.04-.122.04-.213 0l-.32-.07-18.866 3.906h-.105c0-.022.003-.044.006-.067.025-.183.155-.307.388-.374l18.504-3.741z" clip-rule="evenodd"></path>\n  <path fill="#E4E5E6" fill-rule="evenodd" d="M15.498 21.504l11.542-9.29c-.037-.132-.13-.198-.277-.198a1.73 1.73 0 00-.27.031c-1.32.236-18.57 3.72-18.679 3.74-.107.022-.119.19-.103.254.017.064.036.075.198.19a621.926 621.926 0 007.589 5.273z" clip-rule="evenodd"></path>\n  <path fill="#00ABBE" fill-rule="evenodd" d="M14.223 15.886l1.047-.194 3.436 4.46-.418 1.059-4.065-5.325zM16.465 15.429l1.076-.194 4.537 5.952-.404 1.051-5.21-6.81zM18.623 14.976l1.05-.208 3.34 4.286-.45 1.02-3.94-5.098z" clip-rule="evenodd"></path>\n  <path fill="#008486" fill-rule="evenodd" d="M15.27 15.692l2.869 3.723-.754.612-3.162-4.141 1.047-.194zM17.541 15.235l2.197 2.882-.75.61-2.523-3.298 1.076-.194zM19.673 14.768l1.623 2.083-.752.61-1.921-2.485 1.05-.208z" clip-rule="evenodd"></path>\n  <defs>\n    <linearGradient id="paint0_linear" x1="30.317" x2="20.618" y1="29.551" y2="18.797" gradientUnits="userSpaceOnUse">\n      <stop stop-color="#00ABBE"/>\n      <stop offset="1" stop-color="#068B9B"/>\n    </linearGradient>\n  </defs>\n</svg>\n'),
"logo_googleg_48dp.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 48 48">\n    <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>\n    <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>\n    <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/>\n    <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/>\n    <path fill="none" d="M2 2h44v44H2z"/>\n</svg>\n'),
"no_notifications.svg":mn('<svg width="166" height="105" viewBox="0 0 166 105" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M109.11 46.3599C109.11 46.3599 139.11 45.0999 143.33 13.9299" stroke="#BDC1C6" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M42.8599 46.7101C42.8599 46.7101 32.6599 26.0001 26.8999 36.1601C26.8999 36.1601 21.7299 18.9901 8.62988 19.7801" stroke="#BDC1C6" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M127.22 26.57C127.999 26.57 128.63 25.9387 128.63 25.16C128.63 24.3813 127.999 23.75 127.22 23.75C126.441 23.75 125.81 24.3813 125.81 25.16C125.81 25.9387 126.441 26.57 127.22 26.57Z" fill="#EA4335" stroke="#EA4335" stroke-linejoin="round"/>\n<path d="M18.28 45.2601C19.0145 45.2601 19.61 44.6646 19.61 43.9301C19.61 43.1956 19.0145 42.6001 18.28 42.6001C17.5454 42.6001 16.95 43.1956 16.95 43.9301C16.95 44.6646 17.5454 45.2601 18.28 45.2601Z" fill="#FBBC04" stroke="#FBBC04" stroke-miterlimit="10"/>\n<path d="M141.62 43.96C142.095 43.96 142.48 43.575 142.48 43.1C142.48 42.625 142.095 42.24 141.62 42.24C141.145 42.24 140.76 42.625 140.76 43.1C140.76 43.575 141.145 43.96 141.62 43.96Z" fill="#4285F4" stroke="#4285F4" stroke-miterlimit="10"/>\n<path d="M33.7999 18.8599C34.2749 18.8599 34.6599 18.4749 34.6599 17.9999C34.6599 17.5249 34.2749 17.1399 33.7999 17.1399C33.325 17.1399 32.9399 17.5249 32.9399 17.9999C32.9399 18.4749 33.325 18.8599 33.7999 18.8599Z" fill="#E8EAED" stroke="#E8EAED" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M70.61 86.6199C71.085 86.6199 71.47 86.2349 71.47 85.7599C71.47 85.2849 71.085 84.8999 70.61 84.8999C70.135 84.8999 69.75 85.2849 69.75 85.7599C69.75 86.2349 70.135 86.6199 70.61 86.6199Z" fill="#E8EAED" stroke="#E8EAED" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M115.42 11.4199H49.6201V72.7299H115.42V11.4199Z" fill="white" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M82.5199 58.67C91.6823 58.67 99.1099 51.2424 99.1099 42.08C99.1099 32.9176 91.6823 25.49 82.5199 25.49C73.3575 25.49 65.9299 32.9176 65.9299 42.08C65.9299 51.2424 73.3575 58.67 82.5199 58.67Z" fill="#34A853" stroke="#34A853" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M77.3899 43.62L79.9399 46.18L87.6599 38.46" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M127.59 95.1401L122.59 80.9501L125.17 72.4901C125.17 72.4901 126.59 67.1701 122.26 64.4901C119.26 62.6101 111.63 58.6001 111.63 58.6001C111.63 58.6001 105.52 56.0101 104.81 58.9701C104.1 61.9301 106.06 67.2901 106.06 67.2901L107.06 69.6501L107.99 70.3601L109.62 69.8001L109.73 73.1401L102.5 73.2101C103.12 74.9501 108.32 80.8501 110.3 83.5801C112.28 86.3101 114.85 96.4401 114.85 96.4401C114.85 96.4401 116.13 98.4401 119.75 99.2401C124.01 100.13 126.05 95.8701 127.59 95.1401Z" fill="#A06549" stroke="#A06549" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M122.26 67.7301L116.8 67C116.329 66.9129 115.846 66.9264 115.381 67.0396C114.916 67.1529 114.48 67.3633 114.102 67.6571C113.724 67.9509 113.413 68.3214 113.188 68.7442C112.964 69.1669 112.832 69.6324 112.8 70.11C112.549 71.4583 112.382 72.821 112.3 74.1901C112.294 74.3658 112.349 74.5382 112.457 74.6771C112.565 74.816 112.718 74.9126 112.89 74.95C113.44 75.07 114.33 74.95 115.16 73.46C116.16 71.74 116.39 71.14 116.39 71.14L119.21 71.6601" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M119.86 63.51L112.93 63C112.93 63 109.78 62.77 109.58 67.27C109.419 69.3939 109.48 71.5286 109.76 73.64C109.76 73.64 111.14 75.17 112.38 72.3" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M114.96 60.72C114.96 60.72 106.96 59.2 106.67 61.56C106.469 63.7906 106.405 66.0316 106.48 68.27C106.48 68.27 107.15 71.8 109.15 69.8" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M127.59 95.14L122.55 80.95L125.13 72.48" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M106.02 67.24C106.02 67.24 104.02 61.86 104.77 58.92C105.52 55.98 111.59 58.55 111.59 58.55" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M104.91 72.74H54.8301" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M36.95 95.1401L41.95 80.9501L39.3699 72.4901C39.3699 72.4901 37.94 67.1701 42.27 64.4901C45.27 62.6101 52.9 58.6001 52.9 58.6001C52.9 58.6001 59.02 56.0101 59.72 58.9701C60.42 61.9301 58.5 67.2401 58.5 67.2401L57.5 69.6001L56.58 70.3101L54.9399 69.7501L54.83 73.0901L62.06 73.1601C61.44 74.9001 56.2499 80.8001 54.2599 83.5301C52.2699 86.2601 49.72 96.3901 49.72 96.3901C49.72 96.3901 48.4299 98.3901 44.82 99.1901C40.4999 100.13 37.86 96.9301 36.95 95.1401Z" fill="#A06549" stroke="#A06549" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M42.27 67.7301L47.73 67C48.2007 66.9129 48.6844 66.9264 49.1495 67.0396C49.6145 67.1529 50.0503 67.3633 50.4282 67.6571C50.806 67.9509 51.1174 68.3214 51.3418 68.7442C51.5662 69.1669 51.6985 69.6324 51.73 70.11C51.9813 71.4583 52.1483 72.821 52.23 74.1901C52.2388 74.3649 52.1854 74.5371 52.0792 74.6763C51.973 74.8154 51.821 74.9124 51.65 74.95C51.09 75.07 50.21 74.95 49.37 73.46C48.37 71.74 48.15 71.14 48.15 71.14L45.32 71.6601" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M44.6799 63.51L51.5999 63C51.5999 63 54.7499 62.77 54.9499 67.27C55.1174 69.3937 55.0571 71.5292 54.7699 73.64C54.7699 73.64 53.3899 75.17 52.1499 72.3" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M49.5801 60.72C49.5801 60.72 57.5801 59.2 57.8601 61.56C58.0672 63.7903 58.1307 66.0316 58.0501 68.27C58.0501 68.27 57.3901 71.8 55.3901 69.8" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M36.95 95.14L41.99 80.95L39.41 72.48" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M58.4999 67.24C58.4999 67.24 60.4999 61.86 59.7499 58.92C58.9999 55.98 52.9299 58.55 52.9299 58.55" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n'),
"page_desktop.svg":mn('<svg viewbox="0 0 408 202" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".436" d="M407.917 199.25C407.917 91.416 316.601 4 203.958 4S0 91.416 0 199.25h407.917z" fill="url(#paint0_linear)"/><path stroke="#fff" stroke-width="2" d="M9 0v192M73 0v192M137 0v192M201 0v192M265 0v192M329 0v192M393 0v192"/><path d="M99 60.25a4 4 0 014-4h201.917a4 4 0 014 4v134.417H99V60.25z" fill="url(#paint1_linear)"/><rect y="191" width="407.917" height="11" rx="4" fill="#1A73E8"/><rect x="108.167" y="64.5" width="191.583" height="115.5" rx="2" fill="#fff"/><path d="M75.022 190.825a2 2 0 011.916-2.575h254.107a2 2 0 011.915 2.575l-1.438 4.796a2 2 0 01-1.916 1.425H78.376a2 2 0 01-1.915-1.425l-1.439-4.796z" fill="#8AB4F8"/><rect x="115" y="120" width="178" height="20" rx="10" fill="#E8F0FE"/><path fill-rule="evenodd" clip-rule="evenodd" d="M130.61 130.741l3.342 3.342-.869.869-3.342-3.342a3.748 3.748 0 01-2.199.723 3.79 3.79 0 110-7.583 3.79 3.79 0 013.791 3.792c0 .822-.274 1.575-.723 2.199zm-3.068-4.824a2.62 2.62 0 00-2.625 2.625 2.621 2.621 0 002.625 2.625 2.622 2.622 0 002.625-2.625 2.621 2.621 0 00-2.625-2.625z" fill="#1967D2"/><defs><linearGradient id="paint0_linear" x1="203.958" y1="4" x2="203.958" y2="199.25" gradientUnits="userSpaceOnUse"><stop stop-color="#D2E3FC" stop-opacity=".35"/><stop offset=".703" stop-color="#D2E3FC" stop-opacity=".5"/><stop offset="1" stop-color="#AECBFA"/></linearGradient><linearGradient id="paint1_linear" x1="203.958" y1="56.25" x2="203.958" y2="194.667" gradientUnits="userSpaceOnUse"><stop stop-color="#D2E3FC"/><stop offset=".204" stop-color="#D2E3FC"/><stop offset=".979" stop-color="#AECBFA"/></linearGradient></defs></svg>\n'),
"page_desktop_dark.svg":mn('<svg viewbox="0 0 408 198" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".436" fill-rule="evenodd" clip-rule="evenodd" d="M392 188v-68.498c-13.519-30.72-35.013-57.434-62-77.767V188h-2V40.247c-18.437-13.542-39.36-24.137-62-31.05V60.5h31.75a2 2 0 012 2V174a2 2 0 01-2 2H266v12h-2v-12h-62v12h-2v-12h-62v12h-2v-12h-25.833a2 2 0 01-2-2V62.5a2 2 0 012-2H136V11.1c-22.799 7.711-43.738 19.192-62 33.661V188h-2V46.366c-28.442 23.125-50.172 53.585-62 88.326V188H8v-47.08c-5.209 17.247-8 35.477-8 54.33h407.917c0-25.06-4.932-49.017-13.917-71.031V188h-2zM138 60.5h62V.036c-21.661.395-42.496 4.022-62 10.4V60.5zm64 0h62V8.598C245.018 3.008 224.855 0 203.958 0c-.653 0-1.306.003-1.958.009v60.49z" fill="url(#paint0_linear)"/><rect y="187" width="407.917" height="11" rx="4" fill="#1A73E8"/><path fill-rule="evenodd" clip-rule="evenodd" d="M103 52.25a4 4 0 00-4 4v134.417h209.917V56.25a4 4 0 00-4-4H103zm7.167 8.25a2 2 0 00-2 2V174a2 2 0 002 2H297.75a2 2 0 002-2V62.5a2 2 0 00-2-2H110.167z" fill="url(#paint1_linear)"/><path d="M75.022 186.825a2 2 0 011.916-2.575h254.107a2 2 0 011.915 2.575l-1.438 4.796a2 2 0 01-1.916 1.425H78.376a2 2 0 01-1.915-1.425l-1.439-4.796z" fill="#8AB4F8"/><rect opacity=".3" x="115" y="116" width="178" height="20" rx="10" fill="#8AB4F8"/><path fill-rule="evenodd" clip-rule="evenodd" d="M130.61 126.741l3.342 3.342-.869.869-3.342-3.342a3.748 3.748 0 01-2.199.723 3.79 3.79 0 110-7.583 3.79 3.79 0 013.791 3.792c0 .822-.274 1.575-.723 2.199zm-3.068-4.824a2.62 2.62 0 00-2.625 2.625 2.621 2.621 0 002.625 2.625 2.622 2.622 0 002.625-2.625 2.621 2.621 0 00-2.625-2.625z" fill="#fff"/><defs><linearGradient id="paint0_linear" x1="203.958" y1="0" x2="203.958" y2="195.25" gradientUnits="userSpaceOnUse"><stop stop-color="#D2E3FC" stop-opacity=".35"/><stop offset=".703" stop-color="#D2E3FC" stop-opacity=".5"/><stop offset="1" stop-color="#AECBFA"/></linearGradient><linearGradient id="paint1_linear" x1="203.958" y1="52.25" x2="203.958" y2="190.667" gradientUnits="userSpaceOnUse"><stop stop-color="#D2E3FC"/><stop offset=".204" stop-color="#D2E3FC"/><stop offset=".979" stop-color="#AECBFA"/></linearGradient></defs></svg>\n'),
"platinum_expert.svg":mn('<svg viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.687 27.313A15.951 15.951 0 0015.98 32V16.02L4.688 27.314z" fill="#77909D"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.981 16H0a15.95 15.95 0 004.687 11.313L15.981 16.02V16zM15.98 0A15.947 15.947 0 004.687 4.687L15.981 15.98V0z" fill="#8FA4AE"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.981 15.98L4.687 4.686A15.951 15.951 0 000 16h15.981v-.02zM16 16L27.315 4.686A15.952 15.952 0 0016 0h-.02l.001 15.98.02.02z" fill="#B0BEC6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M32 16a15.95 15.95 0 00-4.686-11.314L16.001 16h16zm-16.019.02v15.979L16 32a15.95 15.95 0 0011.314-4.686L16.002 16l-.02.02z" fill="#8FA4AE"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16 16l11.314 11.314A15.952 15.952 0 0032 16H16z" fill="#77909D"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.982 19.55l5.107 3.716-1.954-6.002 5.106-3.634h-6.263l-1.996-6.193-1.996 6.193H7.724l5.106 3.634-1.955 6.002 5.107-3.716z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.98 16H16l-.02-.02V16zm0 .02L16 16h-.02v.02z" fill="#79A8FA"/></svg>\n'),
"play.svg":mn('<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.48 4.48 0 10 0s10 4.48 10 10-4.48 10-10 10S0 15.52 0 10zm14 0L8 5.5v9l6-4.5z" fill="#1A73E8"/></svg>\n'),"quickreply.svg":mn('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#041E49"><path d="M2 22V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v6h-2V4H4v12h11v2H6zm2-6V4zm15 7v-5h-2v-6h5l-1.7 4h2.2z"/></svg>\n'),"search.svg":mn('<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#1A73E8"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.76 17.27L24.49 23 23 24.49l-5.73-5.73C16.2 19.53 14.91 20 13.5 20a6.5 6.5 0 116.5-6.5c0 1.41-.47 2.7-1.24 3.77zM13.5 9C11.01 9 9 11.01 9 13.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5S15.99 9 13.5 9z" fill="#fff"/></svg>\n'),
"shield_icon.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 86" fill="none"><path fill="#fff" stroke="#3C4043" d="M95.587 43c0 23.196-18.804 42-42 42s-42-18.804-42-42 18.804-42 42-42 42 18.804 42 42Z"/><path fill="#FBBC04" d="M11.483 38.652a6.294 6.294 0 1 0 0-12.589 6.294 6.294 0 0 0 0 12.589Z"/><path fill="#E8710A" d="M11.305 42.61c-1.456 0-2.825-.276-4.104-.83a10.637 10.637 0 0 1-3.342-2.249 10.627 10.627 0 0 1-2.25-3.341 10.246 10.246 0 0 1-.828-4.104c0-1.316.254-2.605.763-3.868a11.05 11.05 0 0 1 2.13-3.38 10.52 10.52 0 0 1 3.289-2.395c1.28-.605 2.683-.907 4.21-.907.367 0 .745.017 1.13.053.387.035.782.097 1.185.184-.158.79-.105 1.535.158 2.236a4.313 4.313 0 0 0 1.184 1.75 4.318 4.318 0 0 0 1.882.959c.728.175 1.477.131 2.25-.131-.457 1.034-.39 2.026.196 2.972.588.947 1.46 1.438 2.618 1.474a10.49 10.49 0 0 1 .053 1.079c0 1.438-.277 2.793-.83 4.064a10.838 10.838 0 0 1-2.249 3.342 10.52 10.52 0 0 1-3.341 2.263c-1.281.553-2.65.828-4.104.828ZM9.725 29.98a1.52 1.52 0 0 0 1.119-.46c.306-.308.46-.68.46-1.119 0-.439-.153-.811-.46-1.118a1.524 1.524 0 0 0-1.118-.46c-.439 0-.812.153-1.118.46-.307.308-.46.68-.46 1.118 0 .439.152.812.46 1.118.307.307.68.461 1.118.461Zm-2.104 5.261a1.52 1.52 0 0 0 1.118-.46c.307-.308.461-.68.461-1.118a1.52 1.52 0 0 0-.46-1.119 1.525 1.525 0 0 0-1.119-.46 1.52 1.52 0 0 0-1.118.46c-.306.308-.46.68-.46 1.118 0 .44.153.812.46 1.119.308.306.68.46 1.118.46Zm6.84 1.052c.298 0 .548-.1.75-.302.203-.203.303-.452.303-.75 0-.3-.1-.549-.303-.75a1.017 1.017 0 0 0-.75-.303c-.299 0-.548.1-.75.302a1.017 1.017 0 0 0-.303.75c0 .3.101.548.303.75.202.203.451.303.75.303ZM95.434 77.063c6.932 0 12.551-5.62 12.551-12.551 0-6.932-5.619-12.551-12.55-12.551-6.933 0-12.552 5.62-12.552 12.55 0 6.932 5.62 12.552 12.551 12.552Z"/><path fill="#FBBC04" d="M95.442 77.998c-1.906 0-3.697-.361-5.373-1.085a13.905 13.905 0 0 1-4.374-2.944 13.906 13.906 0 0 1-2.945-4.375c-.723-1.676-1.085-3.467-1.085-5.372 0-1.722.334-3.41 1-5.062a14.45 14.45 0 0 1 2.79-4.425c1.193-1.297 2.628-2.343 4.305-3.134 1.676-.792 3.513-1.188 5.51-1.188.482 0 .976.023 1.481.07 0 0 .787.077 1.55.24 4.537.97 7.619 4.608 7.619 4.608s2.819 3.327 3.23 7.515c.034.35.051.706.051.706.012.219.018.453.018.706 0 1.883-.361 3.657-1.085 5.32a14.16 14.16 0 0 1-2.945 4.375 13.749 13.749 0 0 1-4.374 2.962C99.139 77.64 97.348 78 95.443 78l-.001-.002Zm-2.067-16.531c.574 0 1.062-.202 1.464-.603a1.99 1.99 0 0 0 .603-1.464c0-.574-.201-1.061-.603-1.464a1.99 1.99 0 0 0-1.464-.602c-.574 0-1.061.2-1.464.602a1.99 1.99 0 0 0-.602 1.464c0 .574.201 1.062.602 1.464.402.402.89.603 1.464.603Zm-2.755 6.888c.574 0 1.061-.202 1.464-.603a1.99 1.99 0 0 0 .602-1.464c0-.574-.2-1.061-.602-1.464a1.99 1.99 0 0 0-1.464-.602c-.574 0-1.062.201-1.464.602a1.99 1.99 0 0 0-.602 1.464c0 .574.2 1.062.602 1.464.402.402.89.603 1.464.603Zm8.954 1.377c.39 0 .718-.132.982-.395.265-.264.396-.591.396-.982s-.132-.718-.396-.982a1.329 1.329 0 0 0-.981-.396c-.391 0-.718.132-.983.396a1.33 1.33 0 0 0-.395.982c0 .39.132.717.395.982.264.264.592.395.983.395Z"/><path fill="#E8710A" d="M86.741 23.236a8.255 8.255 0 1 0 0-16.51 8.255 8.255 0 0 0 0 16.51Z"/><path fill="#FBBC04" d="M81.649 7.712a8.808 8.808 0 0 1 3.305-1.44 9.159 9.159 0 0 1 3.468-.061 9.147 9.147 0 0 1 3.236 1.248 8.828 8.828 0 0 1 2.61 2.488 8.836 8.836 0 0 1 1.369 3.106 9.488 9.488 0 0 1 .164 3.437 9.063 9.063 0 0 1-1.14 3.312c-.606 1.059-1.446 1.965-2.524 2.717-.26.182-.534.356-.824.521 0 0-.453.254-.926.454-2.812 1.187-5.844.388-5.844.388s-2.773-.732-4.574-2.834c-.15-.177-.294-.362-.294-.362a8.165 8.165 0 0 1-.275-.374 8.684 8.684 0 0 1-1.42-3.277 9.335 9.335 0 0 1-.062-3.469 9.054 9.054 0 0 1 1.242-3.244 8.829 8.829 0 0 1 2.488-2.61Zm7.344 8.134c-.31.216-.497.508-.562.876-.066.368.01.707.227 1.017.216.31.508.497.876.562.368.065.707-.01 1.017-.227.31-.217.497-.509.562-.877a1.311 1.311 0 0 0-.227-1.016 1.312 1.312 0 0 0-.877-.562 1.31 1.31 0 0 0-1.016.227Zm-1.11-4.752c-.31.216-.498.509-.563.877-.065.367.01.707.227 1.016.217.31.509.497.877.562.368.065.707-.01 1.016-.227.31-.216.498-.508.563-.876a1.311 1.311 0 0 0-.227-1.017 1.312 1.312 0 0 0-.877-.562 1.311 1.311 0 0 0-1.016.227Zm-5.347 2.632a.88.88 0 0 0-.38.583.878.878 0 0 0 .156.678.88.88 0 0 0 .583.38.877.877 0 0 0 .678-.156.88.88 0 0 0 .38-.583.877.877 0 0 0-.155-.678.88.88 0 0 0-.584-.38.877.877 0 0 0-.678.156Z"/><path fill="#8AB4F8" stroke="#3C4043" d="M31.302 41.332V27.641l22.32-10.442L75.945 27.64v13.691c0 12.684-9.515 24.572-22.321 27.507-12.807-2.934-22.32-14.823-22.32-27.507Z"/><path fill="#D2E3FC" fill-rule="evenodd" d="M53.591 17.85v50.425c11.929-2.169 22.446-14.796 22.446-27.06v-13.26l-10.301-4.682L53.59 17.85Z" clip-rule="evenodd"/><path fill="#4285F4" d="M53.639 56.2c7.29 0 13.2-5.91 13.2-13.2 0-7.291-5.91-13.201-13.2-13.201-7.29 0-13.2 5.91-13.2 13.2 0 7.29 5.91 13.2 13.2 13.2Z"/><mask id="a" width="27" height="26" x="40" y="30" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M53.612 55.65c6.991 0 12.659-5.667 12.659-12.659 0-6.991-5.668-12.659-12.659-12.659-6.992 0-12.66 5.668-12.66 12.66 0 6.99 5.669 12.658 12.66 12.658Z"/></mask><g mask="url(#a)"><path fill="#fff" d="M53.606 45.66c-1.455 0-2.702-.518-3.738-1.555-1.037-1.036-1.555-2.282-1.555-3.738s.518-2.701 1.555-3.738c1.036-1.036 2.282-1.555 3.738-1.555s2.701.519 3.738 1.555c1.037 1.037 1.555 2.282 1.555 3.738s-.518 2.702-1.555 3.738c-1.037 1.037-2.282 1.555-3.738 1.555ZM43.02 56.245v-3.704c0-.75.193-1.44.579-2.068a3.86 3.86 0 0 1 1.537-1.439 19.574 19.574 0 0 1 4.167-1.537 18.236 18.236 0 0 1 4.3-.513c1.455 0 2.888.17 4.3.513 1.41.342 2.8.854 4.167 1.537.64.33 1.152.81 1.538 1.44.385.628.578 1.317.578 2.067v3.704H43.018h.003Z"/></g></svg>\n'),
"silver_expert.svg":mn('<svg viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.686 4.686c-6.244 6.244-6.248 16.363-.013 22.613L27.3 4.673c-6.25-6.235-16.37-6.23-22.613.013" fill="#BDBDBD"/><mask id="a" maskUnits="userSpaceOnUse" x="4" y="4" width="28" height="28"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.673 4.673H32V32H4.673V4.673z" fill="#fff"/></mask><g mask="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.314 27.314c6.248-6.25 6.248-16.38 0-22.628a.104.104 0 01-.015-.013L4.673 27.299l.013.015c6.248 6.248 16.379 6.248 22.628 0" fill="#9E9E9E"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M16 19.504l5.107 3.716-1.955-6 5.106-3.635h-6.263L16 7.391l-1.995 6.194H7.741l5.106 3.634-1.955 6.001L16 19.504z" fill="#fff"/></svg>\n'),
"sites.svg":mn('<svg viewBox="0 0 260 147"><path fill="#fff" stroke="#E8EAED" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M108.2 33.947h86.143V105.172H108.2V33.947Z"/><path fill="#fff" stroke="#E8EAED" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M98.119 21.018h87v71.226h-87V21.018Z"/><path stroke="#E8EAED" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M107.2 83.974h15.7M107.2 87.858h10.406M134.7 83.974h15.7M134.7 87.858h10.406M161.1 83.974h15.706M161.1 87.858h10.412M175.194 26.804h9.925"/><path fill="#fff" stroke="#E8EAED" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M176.712 43.3h-2.193v-3.555h2.193c.894 0 1.613.718 1.613 1.598v.36c.006.879-.719 1.597-1.613 1.597ZM176.712 56.11h-2.193v-3.555h2.193c.894 0 1.613.718 1.613 1.598v.36a1.598 1.598 0 0 1-1.613 1.598Z"/><path fill="#E8EAED" stroke="#E8EAED" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M174.106 98.184H117.8v6.963h56.306v-6.963Z"/><path stroke="#E8EAED" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M185.119 39.738h9.225"/><path fill="#fff" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M82.5 12.699h92.694v66.115H82.5V12.699Z"/><path stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M82.668 18.51h67.958M96.693 63.575h15.671M96.693 67.453h15.671M96.693 71.337h10.387M120.063 63.575h15.671M120.063 67.453h15.671M120.063 71.337h10.387M143.57 63.575h15.678M143.57 67.453h15.678M143.57 71.337h10.393"/><path fill="#E8EAED" stroke="#E8EAED" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M159.404 24.778h-11.23v29.115h11.23V24.778Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M151.587 39.044h4.735M153.958 41.398v-4.701"/><path fill="#fff" stroke="#3C4043" stroke-miterlimit="10" stroke-width=".5" d="M86.674 16.385c.375 0 .68-.303.68-.675a.678.678 0 0 0-.68-.676.678.678 0 0 0-.68.676c0 .372.304.675.68.675ZM91.153 16.385c.376 0 .68-.303.68-.675a.678.678 0 0 0-.68-.676.678.678 0 0 0-.68.676c0 .372.305.675.68.675Z"/><path fill="#fff" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M138.75 24.778h-42.5v29.115h42.5V24.778Z"/><path fill="#4285F4" stroke="#4285F4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M125.206 39.447a7.21 7.21 0 0 1-3.362 6.09 7.295 7.295 0 0 1-3.925 1.133c-4.025 0-7.294-3.233-7.294-7.229 0-3.995 3.263-7.23 7.294-7.23 4.019.013 7.287 3.247 7.287 7.236Z"/><path fill="#3C4043" fill-rule="evenodd" d="M10.75 103.45a.5.5 0 0 1 .5-.5h40.938a.5.5 0 0 1 .5.5v14.057h48.562a.5.5 0 0 1 .5.5v14.557a.5.5 0 0 1-1 0v-14.057H52.187a.5.5 0 0 1-.5-.5V103.95H11.25a.5.5 0 0 1-.5-.5Z" clip-rule="evenodd"/><path fill="#3C4043" d="m29.013 95.844.034.498-.034-.498Zm.934 2.322-.425-.264.425.264Zm-1.74 1.803-.29-.406h-.001l.292.406Zm-.836-4.36a.5.5 0 1 0 .258.967l-.258-.966Zm-1.409 4.879a.501.501 0 0 0 .255.967l-.255-.967Zm-.101.806.428.257-.428-.257Zm1.838-7.136.5.022a.5.5 0 0 0-.5-.522v.5Zm-10.2 0v-.5a.5.5 0 0 0-.499.522l.5-.022Zm4.883-3.876a.5.5 0 1 0 .699.715l-.7-.715ZM18.75 86.42l-.228-.445-.005.002.233.443Zm7.061-11.687a.5.5 0 0 0-.51-.86l.51.86Zm3.236 21.608c.36-.024.562.034.668.094a.328.328 0 0 1 .167.225c.064.258-.036.72-.36 1.24l.85.529c.373-.601.641-1.357.481-2.008a1.325 1.325 0 0 0-.645-.856c-.334-.19-.753-.254-1.229-.221l.069.997Zm.475 1.56c-.397.64-.97 1.206-1.605 1.661l.582.813c.716-.514 1.391-1.17 1.873-1.946l-.85-.528Zm-1.893-1.326a7.519 7.519 0 0 1 1.418-.234l-.068-.997a8.52 8.52 0 0 0-1.608.265l.258.966Zm.287 2.987a5.96 5.96 0 0 1-1.954.925l.255.967a6.948 6.948 0 0 0 2.283-1.08l-.584-.812Zm-1.626 1.988c.87-1.452 1.341-3.308 1.599-4.768a24.132 24.132 0 0 0 .297-2.397 14.305 14.305 0 0 0 .012-.19v-.015l-.5-.023-.499-.022v.01l-.002.034-.009.138a23.099 23.099 0 0 1-.285 2.292c-.25 1.422-.697 3.134-1.471 4.427l.858.514Zm1.409-7.893h-10.2v1h10.2v-1Zm-10.2.5L17 94.18V94.19l.002.022a8.656 8.656 0 0 0 .026.386c.021.26.056.632.114 1.076.113.887.316 2.077.67 3.273.353 1.189.867 2.421 1.622 3.364.765.955 1.801 1.64 3.164 1.64v-1c-.98 0-1.752-.477-2.383-1.265-.64-.798-1.108-1.89-1.444-3.023a20.312 20.312 0 0 1-.638-3.116 21.97 21.97 0 0 1-.128-1.314L18 94.158v-.022l-.5.022Zm5.1 9.792c1.713 0 2.895-1.073 3.69-2.399l-.857-.514c-.702 1.171-1.614 1.913-2.834 1.913v1Zm.482-12.953a14.98 14.98 0 0 0 2.252-2.821c.301-.496.553-.995.723-1.467.168-.466.269-.939.231-1.37-.04-.45-.235-.871-.656-1.141-.397-.254-.921-.327-1.526-.274-1.207.105-3.011.734-5.583 2.052l.456.89c2.553-1.309 4.211-1.859 5.213-1.946.5-.043.768.035.9.12.109.07.182.177.2.386.02.228-.032.545-.175.944-.142.392-.36.83-.638 1.287a13.98 13.98 0 0 1-2.096 2.625l.699.715Zm-4.564-5.019c-.895.472-1.584.714-2.086.791-.51.079-.74-.023-.837-.113-.095-.088-.194-.283-.155-.703.038-.414.205-.962.522-1.62 1.273-2.636 4.732-6.567 9.85-9.599l-.51-.86c-5.244 3.107-8.863 7.17-10.24 10.025-.346.715-.565 1.384-.618 1.962-.052.572.053 1.144.474 1.531.418.385 1.017.466 1.666.366.657-.101 1.457-.398 2.4-.895l-.466-.885Z"/><path fill="#3C4043" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M34.25 92.04c-.156.37.063 1.034 2.1 1.034 0-1.041.019-1.952.019-1.952l-2.119.917Z"/><path stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M78.194 131.022H37.831"/><path fill="#D2E3FC" stroke="#D2E3FC" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M36.37 91.122c0 4.014-.488 12.699 13.805 11.987 14.432-.725 16.313-.917 16.313-.917l-5.631 20.585h6.28s7.007-14.582 8.688-18.473c1.682-3.89.094-9.093-6.45-10.307 3.032-1.264 5.107-2.113 5.107-2.113l10.325 18.144h7.45s-9.1-21.675-9.525-22.889c-.425-1.214-3.088-6.436-9.1-5.116-6.013 1.319-22.507 5.643-22.507 5.643s-11.512 2.007-14.756 3.456Z"/><path fill="#FBA089" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M82.45 81.558c-1.313 0-3.625.272-5.95.322v-2.713s1.775.254 2.688.365c0 0 1.493-.681 5.106-.681h4.731s-1.038 2.707-6.575 2.707Z"/><path fill="#D2E3FC" d="M69.369 93.99c3.03-1.263 5.106-2.112 5.106-2.112L84.8 110.022h7.45s-9.1-21.675-9.525-22.889"/><path fill="#3C4043" fill-rule="evenodd" d="M82.56 86.661a.5.5 0 0 1 .636.307c.207.588 2.578 6.287 4.912 11.872a7856.385 7856.385 0 0 0 4.21 10.055l.392.933-.46.194.46-.193a.5.5 0 0 1-.46.693H84.8a.499.499 0 0 1-.435-.253L74.257 92.508l-1.008.415c-.897.37-2.173.897-3.688 1.53a.5.5 0 1 1-.385-.924 1040.649 1040.649 0 0 1 4.737-1.96l.372-.153a.5.5 0 0 1 .624.215l10.181 17.891h6.407l-.1-.24-1.037-2.472c-.86-2.051-2.01-4.799-3.175-7.584-2.322-5.556-4.713-11.302-4.932-11.928a.5.5 0 0 1 .306-.637ZM66.853 101.858a.5.5 0 0 1 .11.466l-5.458 19.953h5.626a.5.5 0 0 1 0 1H60.85a.5.5 0 0 1-.482-.632l5.43-19.85c-.197.027-.431.057-.703.09-.971.119-2.423.277-4.353.434-3.86.316-9.634.631-17.304.631a.5.5 0 0 1 0-1c7.642 0 13.39-.314 17.223-.627 1.917-.157 3.355-.313 4.312-.431a50.828 50.828 0 0 0 1.342-.18l.066-.01.016-.003h.004" clip-rule="evenodd"/><path fill="#fff" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M34.25 92.04s6.313-17.488 9.712-23.689c3.52-6.417 6.744-7.786 9.675-7.786 2.932 0 4.963.867 6.488 3.084.862 1.252 8.7 14.322 8.7 14.322l7.675 1.196v2.707s-4.356.533-6.063.793c-3.562.545-5.056-1.685-6.006-2.998a1818.406 1818.406 0 0 0-4.756-6.468c-.7 4.33-5.25 5.99-6.275 8.753-1.025 2.763-2.275 5.712-2.275 5.712-7.031 1.022-12.038 1.994-16.875 4.373Z"/><path fill="#D2E3FC" d="M69.369 93.99c6.543 1.215 8.13 6.418 6.45 10.308-.82 1.896-2.907 6.337-4.832 10.395"/><path fill="#3C4043" fill-rule="evenodd" d="M68.877 93.9a.5.5 0 0 1 .583-.401c3.398.63 5.575 2.314 6.662 4.412 1.08 2.086 1.05 4.517.156 6.586-.823 1.905-2.915 6.356-4.839 10.41a.5.5 0 1 1-.903-.428c1.926-4.061 4.01-8.493 4.824-10.379.787-1.822.803-3.937-.126-5.729-.922-1.78-2.81-3.305-5.956-3.889a.5.5 0 0 1-.4-.583Z" clip-rule="evenodd"/><path fill="#FBA089" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M81.25 70.78c-1.956.018.713-1.017 1.25-1.09v-.93c-1.734.075-4.187 1.266-5.987 1.542-.413.062-5.632.936-6.032.998l1.763 4.008c2.306-.886 5.881-2.088 7.95-1.778 3.2.378 3.2-1.115 5.062-2.082 1.863-.966.9-1.4-1.53-.972-.85.149-1.438.248-2.476.303Z"/><path stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m60.138 73.263-1.619.267"/><path fill="#FBA089" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M51.831 60.726c1.019-1.01 1.7-3.544 1.7-3.544s.888-.365.288-1.257c-.682-1.01.743-2.292 1.668-1.19.85 1.01-.337 2.026.513 2.026.85 0 .294-1.722 1.512-2.527 1.02-.675 2.663-.768 2.663-.768 1.019 2.192.756 8.238-1.313 7.216-.68-.334-1.193-.675-1.7-1.01-.337 1.01-.387 1.394-.73 2.404 2.043 3.71 2.555 5.235 1.7 5.736-.85.508-5.62-5.06-6.3-7.086Z"/><path fill="#AC6D44" fill-rule="evenodd" d="M50.912 46.097c.23-.273.307-.602.17-.861-.204-.386-.81-.471-1.351-.19-.542.282-.815.823-.611 1.21.154.29.536.41.947.331-.707.54-1.062 1.225-.817 1.69.217.409.844.535 1.573.373-1.139.983-1.648 2.227-1.15 3.024.6.96 2.433.91 4.094-.11 1.66-1.021 2.52-2.626 1.92-3.586-.461-.736-1.649-.878-2.927-.442.393-.446.55-.923.365-1.273-.278-.526-1.234-.585-2.213-.166Z" clip-rule="evenodd"/><path fill="#3C4043" d="m50.912 46.097-.383-.322a.5.5 0 0 0 .58.782l-.197-.46Zm.17-.861.442-.234-.442.234Zm-1.351-.19.23.444-.23-.444Zm-.611 1.21-.442.233.442-.234Zm.947.331.303.398a.5.5 0 0 0-.398-.889l.095.491Zm-.817 1.69.442-.235-.442.234Zm1.573.373.327.38a.5.5 0 0 0-.435-.868l.108.489Zm-1.15 3.024.424-.265-.423.265Zm4.094-.11.262.425-.262-.426Zm1.92-3.586-.424.265.424-.265Zm-2.927-.442-.375-.331a.5.5 0 0 0 .536.804l-.16-.473Zm.365-1.273-.442.234.442-.234Zm-1.83.155c.305-.363.496-.912.229-1.416l-.884.468c.006.012.016.037.005.089a.515.515 0 0 1-.116.216l.766.643Zm.229-1.416c-.197-.372-.565-.556-.921-.607a1.86 1.86 0 0 0-1.102.207l.46.888a.864.864 0 0 1 .503-.104c.132.018.168.07.176.084l.884-.468Zm-2.023-.4c-.353.184-.638.461-.801.784-.163.322-.22.73-.022 1.103l.884-.467c-.007-.014-.028-.07.03-.185a.849.849 0 0 1 .37-.347l-.462-.888Zm-.823 1.887c.3.566.961.69 1.483.59l-.19-.983a.63.63 0 0 1-.313-.01c-.068-.022-.09-.051-.096-.064l-.884.467Zm1.085-.3c-.397.304-.721.667-.91 1.05-.187.379-.27.846-.045 1.271l.884-.468c-.02-.038-.048-.146.058-.36.104-.211.31-.461.62-.697l-.607-.795Zm-.955 2.321c.198.374.56.572.925.655.366.083.783.066 1.198-.026l-.216-.977c-.314.07-.575.07-.76.028-.184-.042-.244-.112-.263-.148l-.884.468Zm1.688-.238c-.616.532-1.084 1.152-1.328 1.779-.243.624-.279 1.312.082 1.888l.847-.53c-.138-.221-.169-.554.003-.996.171-.44.527-.933 1.05-1.384l-.654-.757Zm-1.246 3.667c.433.693 1.258.944 2.086.922.843-.023 1.8-.324 2.693-.872l-.524-.852c-.769.473-1.557.707-2.196.724-.653.018-1.045-.186-1.212-.452l-.847.53Zm4.779.05c.891-.548 1.59-1.265 1.986-2.005.39-.728.53-1.576.096-2.27l-.848.53c.165.264.176.698-.13 1.268-.298.557-.86 1.153-1.628 1.625l.524.852Zm2.081-4.276c-.332-.53-.9-.804-1.51-.89-.61-.087-1.307.003-2.001.24l.322.946c.584-.2 1.12-.256 1.538-.197.42.06.675.226.804.431l.848-.53Zm-2.975.154c.427-.485.771-1.196.432-1.838l-.884.468c.032.06.06.302-.298.708l.75.662Zm.432-1.838c-.255-.482-.773-.669-1.25-.702-.492-.035-1.056.077-1.602.31l.393.92c.434-.186.838-.254 1.138-.233.314.023.413.128.437.173l.884-.468Z"/><path fill="#AC6D44" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M53.531 57.182c-.968-.173-1.887-.421-2.312-1.208-.894-1.648.206-3.958 2.456-5.154 2.25-1.195 4.656-.75 5.694.818.619.942.806 1.827.806 1.827s-1.637.093-2.662.768c-1.22.806-.657 2.528-1.513 2.528-.856 0 .338-1.01-.512-2.026-.925-1.102-2.35.18-1.67 1.19.6.886-.287 1.257-.287 1.257Z"/><path fill="#3C4043" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M57.156 59.672c-.794-.508-1.419-1.115-1.531-1.542 0 0 .2 1.573 1.25 2.447l.281-.905Z"/><path fill="#fff" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m85.707 110.264 2.643 7.625h10.475s.65-1.567-2.418-2.397c-3.07-.83-5.363-1.158-7.032-5.228h-3.668Z"/><path stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m66.488 102.192 2.144-.186M74.475 91.884l2.338-1.04"/><path fill="#fff" d="M54.644 90.07s12 3.121 14.725 3.92l-14.725-3.92Z"/><path stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M54.644 90.07s12 3.121 14.725 3.92"/><path fill="#fff" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m61.638 122.777-2.556 8.245h14.175s.65-1.568-2.42-2.398c-3.068-.83-6.274-2.304-5.53-5.847h-3.67Z"/><path fill="#3C4043" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m65.313 122.777-4.02 1.108.345-1.108h3.675ZM89.306 110.264l-3.056 1.239s-.056-.515-.313-1.239h3.37Z"/><path fill="#fff" d="m51.531 64.176 8.606 9.087L70.47 71.3l1.762 4.008s-6.887 3.58-8.95 4.565c-2.062.985-5.575 1.896-9.425-1.703-3.806-3.562-7.619-7.124-7.619-7.124"/><path fill="#3C4043" d="M51.894 63.832a.5.5 0 0 0-.726.688l.726-.688Zm8.243 9.431-.363.344a.5.5 0 0 0 .457.148l-.094-.492ZM70.47 71.3l.457-.201a.5.5 0 0 0-.55-.29l.093.49Zm1.762 4.008.23.443a.5.5 0 0 0 .228-.645l-.458.202ZM53.856 78.17l-.342.365.342-.365Zm-7.277-7.49a.5.5 0 1 0-.683.731l.683-.73Zm4.589-6.16 8.606 9.087.726-.687-8.606-9.088-.726.688Zm9.063 9.235 10.33-1.964-.186-.982-10.331 1.963.187.983Zm9.78-2.254 1.762 4.008.916-.403-1.763-4.007-.915.402Zm2.22 3.807-.23-.444h-.002l-.003.003-.015.007-.058.03-.222.116-.808.419c-.678.35-1.603.829-2.592 1.337-1.982 1.02-4.212 2.157-5.235 2.646l.43.902c1.04-.496 3.285-1.641 5.262-2.658a1073.7 1073.7 0 0 0 3.403-1.759l.223-.115.058-.03.015-.008.003-.002h.001l-.23-.444Zm-9.165 4.114c-.989.472-2.295.911-3.797.82-1.49-.092-3.223-.71-5.072-2.438l-.682.73c2.001 1.872 3.95 2.598 5.693 2.705 1.733.107 3.215-.402 4.288-.915l-.43-.902Zm-8.868-1.617c-1.904-1.782-3.808-3.563-5.237-4.898l-1.727-1.614-.484-.453a78.587 78.587 0 0 0-.128-.119l-.032-.03-.009-.008-.002-.002-.342.365-.341.365.003.003.008.007.033.031.127.12.484.451 1.727 1.614 5.236 4.898.684-.73Z"/><path stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m60.138 73.263-1.282.254M59.969 66.61c.712 1.778 1.044 4.262-.113 6.04"/><path fill="#FBBC04" stroke="#FBBC04" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M244.375 33.147c0 2.521-1.325 4.737-3.315 6a7.194 7.194 0 0 1-3.869 1.118c-3.968 0-7.191-3.187-7.191-7.124s3.216-7.124 7.191-7.124c3.961.012 7.184 3.199 7.184 7.13Z"/><path fill="#933222" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M239.063 39.955c.131.366.375.892.475 1.24.518 1.82-.238 4.577.168 5.723l-2.4.799c-.318-1.462-.662-5.767-1.375-7.892-.706-2.125.588-.23 1.382 1.09.406.67.5 0 .5-.65 0 0 .618-.074 1.25-.31ZM231.719 35.47v4.665c-2.769 0-4.244.006-4.244.006l.156-1.926s-.856.47-2.262.823c-1.407.354-1.025-3.945-1.025-3.945h-.982c.338-.589 1.375-1.81 1.544-3.29.031-.204.1-.458.238-.78 1.506 0 3.225-.031 3.225-.031-.488 1.177-1.244 1.777-1.157 2.329.2 1.294 2.013-1.134 2.813-1.258.8-.124 1.775 1.215-.55 2.336v.279c0 .44.356.792.8.792h1.444Z"/><path fill="#3C4043" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M234.531 30.155c-.531 1.313-1.694 3.81-1.769 3.971-.468 1.04-.637 1.344-1.037 1.344h-1.444a.794.794 0 0 1-.8-.793V34.4c2.325-1.115 1.35-2.46.55-2.336-.8.124-2.612 2.552-2.812 1.258-.088-.552.668-1.152 1.156-2.33 0 0-1.713.032-3.225.032 0 0 .637-1.908.781-2.38.569-1.858 1.425-.854 2.344-.854.956 0 1.294-.508 2.169-.508s1.043.706 1.631.706c.587 0 1.444-.44 2.306-.44 1.381-.006.569 1.555.15 2.608Z"/><path fill="#D2E3FC" stroke="#D2E3FC" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M232.5 40.122h-5.725c-.163 2.596-3.656.025-6.413 4.72-1.425 2.435-5.006 11.628-5.006 11.628l-9.862-1.363-2.382 3.178s6.057 2.564 11.182 4.51c2.7 1.028 5-1.252 5-1.252l1.343 10.636h16.019l.219-10.84c1.387 2.063 3.2 2.738 5.006 2.156 2.169-.694 2.625-3.277 1.781-6.133-.843-2.856-3.75-10.488-3.75-10.488l-1.35.49s-.206-.558-.837-2.187c-1.256-3.24-5.213-2.72-5.225-5.055Z"/><path fill="#D2E3FC" d="m239.919 46.874-1.35.49s-.207-.558-.838-2.187c-1.256-3.24-5.212-2.713-5.231-5.055h-5.725c-.163 2.596-3.656.025-6.406 4.72-1.425 2.435-5.007 11.628-5.007 11.628l-9.862-1.363-2.381 3.178s6.043 2.688 11.181 4.51c6.175 2.186 11.45-10.606 11.45-10.606"/><path fill="#3C4043" d="M240.089 47.344a.5.5 0 1 0-.341-.94l.341.94Zm-1.52.02-.469.173a.5.5 0 0 0 .639.297l-.17-.47Zm-.838-2.187.466-.18-.466.18Zm-5.231-5.055.5-.004a.5.5 0 0 0-.5-.496v.5Zm-5.725 0v-.5a.5.5 0 0 0-.499.47l.499.03Zm-6.406 4.72-.432-.252.432.253Zm-5.007 11.628-.068.495a.5.5 0 0 0 .534-.314l-.466-.181Zm-9.862-1.363.068-.495a.5.5 0 0 0-.468.195l.4.3Zm-2.381 3.178-.4-.3a.499.499 0 0 0 .196.757l.204-.457Zm11.181 4.51-.167.47.167-.47Zm11.912-10.415a.5.5 0 0 0-.924-.381l.924.381Zm13.536-5.976-1.35.49.341.94 1.35-.49-.341-.94Zm-1.179.96.469-.174h-.001v-.002l-.002-.005-.008-.021-.032-.087-.141-.371a313.09 313.09 0 0 0-.657-1.708l-.932.362c.315.814.524 1.36.654 1.701l.14.368.031.084.007.02.002.005.001.001.469-.173Zm-.372-2.368c-.704-1.817-2.178-2.566-3.324-3.132-.598-.294-1.067-.52-1.403-.802-.304-.256-.467-.533-.47-.944l-1 .008c.006.76.345 1.296.827 1.701.45.379 1.052.663 1.603.934 1.151.567 2.283 1.174 2.835 2.597l.932-.362Zm-5.697-5.374h-5.725v1h5.725v-1Zm-6.224.47c-.017.267-.074.424-.135.522a.634.634 0 0 1-.273.234 2.57 2.57 0 0 1-.576.183c-.123.027-.255.053-.399.082-.143.028-.297.059-.457.093-.645.14-1.41.356-2.199.862-.791.508-1.577 1.288-2.3 2.522l.863.505c.653-1.114 1.334-1.773 1.977-2.185.645-.414 1.278-.598 1.871-.726.15-.033.294-.061.439-.09.143-.028.286-.057.424-.088a3.5 3.5 0 0 0 .805-.265c.262-.13.5-.318.674-.6.172-.276.26-.606.284-.987l-.998-.063Zm-6.339 4.498c-.734 1.254-2 4.198-3.068 6.788a286.582 286.582 0 0 0-1.389 3.433c-.18.45-.325.82-.426 1.076l-.117.297-.03.078-.008.02-.002.005v.001l.465.182.466.181.001-.001.002-.005.007-.02.031-.077.115-.295.425-1.073c.357-.898.849-2.121 1.384-3.42 1.079-2.615 2.316-5.484 3.007-6.665l-.863-.505Zm-4.506 11.384-9.863-1.362-.137.99 9.863 1.363.137-.99ZM205.1 54.807l-2.381 3.178.8.6 2.381-3.178-.8-.6Zm-1.981 3.478-.203.457h.001l.003.002.013.006.053.023.201.089c.176.077.433.19.757.33.649.281 1.567.675 2.646 1.126 2.156.901 4.961 2.033 7.543 2.948l.334-.943c-2.556-.906-5.342-2.03-7.491-2.928a210.876 210.876 0 0 1-3.637-1.56l-.013-.005a.014.014 0 0 0-.003-.002h-.001l-.203.457Zm11.014 4.98c1.736.616 3.387.16 4.835-.787 1.438-.94 2.718-2.391 3.779-3.875 1.065-1.49 1.93-3.044 2.528-4.223a36.827 36.827 0 0 0 .873-1.85c.021-.047.037-.084.047-.11l.013-.029a.04.04 0 0 1 .003-.008l.001-.002-.462-.192-.462-.19-.001.001-.002.006-.011.026-.044.103-.174.394c-.154.34-.381.824-.673 1.399-.584 1.151-1.424 2.658-2.449 4.093-1.03 1.44-2.226 2.778-3.514 3.62-1.278.837-2.602 1.16-3.953.682l-.334.943Z"/><path stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m236.65 72.173.362-18.77M238.562 47.364c.888 2.428 1.332 3.791 2.751 9.911"/><path fill="#34A853" stroke="#34A853" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M199.369 39.038h-9.931V67.88h9.931V39.038Z"/><path fill="#933222" d="M197.763 53.05c.275.093.568.18.7.23.506.192 2.931 1.697 1.025 1.263-1-.278-1.557-.501-2.344-.83-2.281-.941-3.313-.724-1.706.62 1.612 1.344 1.281 2.8 4.487 3.122 2.088.142 1.375.093 3.431.508l1.938-2.59c-2.05-.18-5.563-3.276-7.613-3.084a4.165 4.165 0 0 0-.387.055"/><path stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M197.763 53.05c.275.093.568.18.7.23.506.192 2.931 1.697 1.025 1.263-1-.278-1.557-.501-2.344-.83-2.281-.941-3.313-.724-1.706.62 1.612 1.344 1.281 2.8 4.487 3.122 2.088.142 1.375.093 3.431.508l1.938-2.59c-2.05-.18-5.563-3.276-7.613-3.084a4.165 4.165 0 0 0-.387.055"/><path fill="#34A853" stroke="#34A853" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M199.375 51.36v2.632c-.1-.1-2.319-.979-2.319-.979l-.931-2.23h1.9l1.35.576Z"/><path fill="#fff" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M220.687 72.173 203.7 123.496h7.631l16.819-32.578 3.043 32.578h7.475s1.119-30.496.3-38.215c-.825-7.718-1.237-11.156-2.275-13.108h-16.006Z"/><path stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M228.163 90.912c1.162-2.837 3.818-9.385 4.25-11.77"/><path fill="#fff" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m207.544 123.495-.7 2.478.106 4.857h-12.6c1.944-3.469 6.1.737 9.394-7.328l3.8-.007Z"/><path fill="#3C4043" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m207.469 123.495-4.306 1.276s.368-.594.575-1.276h3.731Z"/><path stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M202.569 125.973h4.269"/><path fill="#fff" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m236.962 123.495 1.294 7.329h-11.494c1.381-3.507 8.144 0 6.375-7.329h3.825Z"/><path stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M248.494 130.823h-64.75M237.406 126.017h-3.887"/><path fill="#3C4043" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m236.906 123.495-3.519 1.276s-.044-.545-.25-1.276h3.769Z"/><path fill="#FBBC04" stroke="#FBBC04" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M241.06 39.148c1.99-1.264 3.315-3.48 3.315-6l-6.743 7.104a7.194 7.194 0 0 0 3.428-1.104Z"/></svg>\n'),
"stop.svg":mn('<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.48 4.48 0 10 0s10 4.48 10 10-4.48 10-10 10S0 15.52 0 10zm14.286-4.286H5.714v8.572h8.572V5.714z" fill="#1A73E8"/></svg>\n'),"support_hub_banner.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 240" fill="none"><path fill="url(#a)" fill-opacity=".2" d="M-21.5 0h1301v275h-1301z"/><path fill="#9FC5E9" fill-opacity=".15" d="M1048.14 301.576c-14.69 7.593-32.09-3.564-31.33-20.085l5.51-118.784c.77-16.524 19.14-26.022 33.07-17.093l100.13 64.193c13.92 8.928 12.96 29.584-1.74 37.179z"/><rect width="132.46" height="132.46" x="1325.03" y="60.227" fill="#FFDF92" fill-opacity=".2" rx="25" transform="rotate(145.547 1325.03 60.227)"/><path fill="#FF92FB" fill-opacity=".1" d="M853.568 55.393C829.205 39.566 836.822 2.082 865.43-2.982l4.73-.837a32.02 32.02 0 0 0 21.269-14.085l2.617-4.028c15.827-24.363 53.311-16.746 58.375 11.862l.837 4.73a32.02 32.02 0 0 0 14.085 21.269l4.028 2.616c24.363 15.828 16.746 53.312-11.862 58.376l-4.73.837a32.02 32.02 0 0 0-21.268 14.085l-2.617 4.028c-15.828 24.363-53.312 16.746-58.376-11.862l-.837-4.73a32.02 32.02 0 0 0-14.085-21.269z"/><path fill="#FF8A64" fill-opacity=".15" d="M612.09 45.16c-24.787-25.122-24.787-65.852 0-90.973l21.061-21.346c24.786-25.121 64.973-25.121 89.759 0s24.787 65.85 0 90.972l-21.061 21.346c-24.786 25.121-64.973 25.121-89.759 0"/><defs><linearGradient id="a" x1="-21.5" x2="1189.16" y1="0" y2="384.744" gradientUnits="userSpaceOnUse"><stop stop-color="#0B57D0" stop-opacity=".8"/><stop offset=".3" stop-color="#A9D1E9"/><stop offset="1" stop-color="#FDF6E5"/></linearGradient></defs></svg>\n'),
"tag_manager_icon.svg":mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116 86" fill="none">\n  <path fill="#fff" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5" d="M107.714 9H8.286v68h99.428V9Z"/>\n  <path fill="#fff" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5" d="M8.286 20.688h91.142"/>\n  <path fill="#fff" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M13.982 16.438c.858 0 1.554-.714 1.554-1.594 0-.88-.696-1.594-1.554-1.594-.858 0-1.553.714-1.553 1.594 0 .88.695 1.594 1.553 1.594ZM21.232 16.438c.858 0 1.554-.714 1.554-1.594 0-.88-.696-1.594-1.554-1.594-.858 0-1.553.714-1.553 1.594 0 .88.695 1.594 1.553 1.594Z"/>\n  <path fill="#fff" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5" d="M45.686 48.313h16.572M46.607 35.326h16.571M45.686 61.063h16.572"/>\n  <path fill="#fff" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M43.714 51.5h-24.25c-1.6 0-2.893-1.425-2.893-3.188 0-1.762 1.294-3.187 2.894-3.187h24.249c1.6 0 2.893 1.425 2.893 3.188 0 1.762-1.293 3.187-2.893 3.187Z"/>\n  <path fill="#4285F4" stroke="#4285F4" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M43.714 38.75h-24.25c-1.6 0-2.893-1.425-2.893-3.188 0-1.762 1.294-3.187 2.894-3.187h24.249c1.6 0 2.893 1.425 2.893 3.188 0 1.762-1.293 3.187-2.893 3.187Z"/>\n  <path fill="#fff" stroke="#3C4043" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M43.714 64.25h-24.25c-1.6 0-2.893-1.425-2.893-3.188 0-1.762 1.294-3.187 2.894-3.187h24.249c1.6 0 2.893 1.425 2.893 3.188 0 1.762-1.293 3.187-2.893 3.187Z"/>\n  <path fill="#D2E3FC" stroke="#D2E3FC" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5" d="M99.428 29.188H62.144V68.5h37.285V29.187Z"/>\n  <path fill="#fff" stroke="#4285F4" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="m73.536 43.052.206 6.237 7.594 7.523L87 50.356 79.574 43l-6.038.052Z" clip-rule="evenodd"/>\n  <path fill="#fff" stroke="#4285F4" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M78.385 46.473c.418.4.441 1.072.051 1.501-.39.43-1.045.453-1.464.053a1.082 1.082 0 0 1-.051-1.502 1.018 1.018 0 0 1 1.464-.052"/>\n</svg>\n'),
"volunteer_activism.svg":mn('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#041E49"><path d="M16 13q-2.35-2.125-4.175-4.062Q10 7 10 5.3q0-1.4.95-2.35Q11.9 2 13.3 2q.8 0 1.5.337.7.338 1.2.913.5-.575 1.2-.913Q17.9 2 18.7 2q1.4 0 2.35.95.95.95.95 2.35 0 1.7-1.825 3.638Q18.35 10.875 16 13zm0-2.7q1.475-1.4 2.738-2.788Q20 6.125 20 5.3q0-.575-.362-.938Q19.275 4 18.7 4q-.35 0-.662.137-.313.138-.538.413L16 6.35l-1.5-1.8q-.225-.275-.537-.413Q13.65 4 13.3 4q-.575 0-.937.362Q12 4.725 12 5.3q0 .825 1.262 2.212Q14.525 8.9 16 10.3zm0-3.15zM14 22.5l-7-1.95V22H1V11h7.95l6.2 2.3q.825.3 1.338 1.05Q17 15.1 17 16h2q1.25 0 2.125.825T22 19v1zM3 20h2v-7H3zm10.95.4 5.95-1.85q-.075-.275-.338-.413Q19.3 18 19 18h-4.8q-.775 0-1.4-.1-.625-.1-1.35-.35l-1.725-.6.575-1.9 2 .65q.45.15 1.05.225.6.075 1.65.075 0-.275-.162-.525-.163-.25-.388-.325L8.6 13H7v5.5zM5 16.5zm10-.5zm-10 .5zm2 0z"/></svg>\n'),
"workflow.svg":mn('<svg viewBox="0 0 22 22"><g fill="none" fill-rule="evenodd"><path d="M-.077-.077h22.154v22.154H-.077z"></path><g transform="rotate(45 6.404 12.904)"><mask id="awf_svg_icon_lt_mask_0" fill="#fff"><path d="M14.77 1.846V14.77H1.845V1.846H14.77zm0-1.846H1.845C.831 0 0 .83 0 1.846V14.77a1.85 1.85 0 0 0 1.846 1.846H14.77a1.85 1.85 0 0 0 1.846-1.846V1.846A1.852 1.852 0 0 0 14.77 0z"></path></mask><path fill="#000" fill-rule="nonzero" d="M14.77 1.846V14.77H1.845V1.846H14.77zm0-1.846H1.845C.831 0 0 .83 0 1.846V14.77a1.85 1.85 0 0 0 1.846 1.846H14.77a1.85 1.85 0 0 0 1.846-1.846V1.846A1.852 1.852 0 0 0 14.77 0z"></path><path d="M-2.769-2.769h17.538V8.308H-2.769z" fill="#34A853" fill-rule="nonzero" style="mask: url(#awf_svg_icon_lt_mask_0)"></path><path d="M8.308-2.769h11.077V8.308H8.308z" fill="#1A73E8" fill-rule="nonzero" style="mask: url(#awf_svg_icon_lt_mask_0)"></path><path d="M7.385 8.308h11.077v11.077H7.385z" fill="#D93025" fill-rule="nonzero" style="mask: url(#awf_svg_icon_lt_mask_0)"></path><path d="M-3.692 8.308H7.385v11.077H-3.692z" fill="#F9AB00" fill-rule="nonzero" style="mask: url(#awf_svg_icon_lt_mask_0)"></path></g><path d="M11 15.615l1.45-3.166L15.614 11 12.45 9.55 11 6.386 9.55 9.55 6.386 11l3.166 1.45z" fill="#1A73E8" fill-rule="nonzero"></path></g></svg>\n'),
"workflow_dark.svg":mn('<svg viewBox="0 0 22 22"><defs><path id="awf_svg_icon_dk_path_0" d="M14.77 1.846V14.77H1.845V1.846H14.77zm0-1.846H1.845C.831 0 0 .83 0 1.846V14.77c0 1.016.83 1.846 1.846 1.846H14.77c1.016 0 1.846-.83 1.846-1.846V1.846C16.615.831 15.785 0 14.77 0z"></path></defs><g fill="none" fill-rule="evenodd"><path d="M-.077-.077h22.154v22.154H-.077z"></path><g transform="rotate(45 6.404 12.904)"><mask id="awf_svg_icon_dk_mask_0" fill="#fff"><use href="#awf_svg_icon_dk_path_0"></use></mask><path d="M-2.769-2.769h17.538V8.308H-2.769z" fill="#A8DAB5" fill-rule="nonzero" style="mask: url(#awf_svg_icon_dk_mask_0)"></path><path d="M8.308-2.769h11.077V8.308H8.308z" fill="#AECBFA" fill-rule="nonzero" style="mask: url(#awf_svg_icon_dk_mask_0)"></path><path d="M7.385 8.308h11.077v11.077H7.385z" fill="#F6AEA9" fill-rule="nonzero" style="mask: url(#awf_svg_icon_dk_mask_0)"></path><path d="M-3.692 8.308H7.385v11.077H-3.692z" fill="#FDE293" fill-rule="nonzero" style="mask: url(#awf_svg_icon_dk_mask_0)"></path></g><path d="M11 15.615l1.45-3.166L15.614 11 12.45 9.55 11 6.386 9.55 9.55 6.386 11l3.166 1.45z" fill="#AECBFA" fill-rule="nonzero"></path></g></svg>\n')};function st(a){A.call(this,"sc.shared.TsAssetInterop");this.o=a}
u(st,A);st.prototype.content=function(){mo(lna[this.o])};function tt(a){return window.matchMedia("(max-width: "+a+")").matches}
function ut(){return tt("37.5rem")}
;var mna=new Map([[0,"workflow.svg"],[1,"legacy_expert.svg"],[2,"alumnus_expert.svg"],[3,"bronze_expert.svg"],[4,"silver_expert.svg"],[5,"gold_expert.svg"],[6,"platinum_expert.svg"],[7,"diamond_expert.svg"],[9,"community_specialist.svg"],[10,"google_employee.svg"],[11,"play.svg"],[12,"stop.svg"],[13,"quickreply.svg"],[14,"volunteer_activism.svg"],[15,"beenhere.svg"],[17,"bids_and_budgets.svg"],[18,"keywords_and_targeting.svg"],[16,"ads.svg"],[19,"guidebook.svg"],[20,"beta.svg"],[21,"attribution_icon.svg"],
[22,"tag_manager_icon.svg"],[23,"shield_icon.svg"],[8,"carousel.svg"],[25,"desktop_mobile.svg"],[24,"support_hub_banner.svg"],[26,"ads_logo.svg"]]),nna=new Map([[0,"workflow_dark.svg"],[20,"beta_dark.svg"]]);
function vt(a){var b=a.Bb===void 0?!1:a.Bb;var c=a.mD===void 0?!1:a.mD;var e=a.icon;var f=a.isDarkMode===void 0?!1:a.isDarkMode;var h=a.size===void 0?24:a.size;var k=a.title;var l=a.xA===void 0?!1:a.xA;a=a.vv===void 0?!1:a.vv;A.call(this,"sc.icon.Icon");f=f&&nna.has(e)?nna.get(e):mna.get(e);if(f===void 0)throw Error("The icon asset "+e+" is undefined.");this.Bb=b;this.mD=c;this.size=h;this.o=new st(f);this.title=k;this.xA=l;this.vv=a}
u(vt,A);vt.prototype.content=function(){var a=this;this.element("div","class",{root:!0,baseline:this.Bb,"text-bottom":this.xA,flip:this.mD},"title",this.title,"style",{height:this.vv?"100%":this.size+"px",width:this.vv?"100%":this.size+"px"},function(){a.o.render()})};function wt(a,b){return[].concat(ya(a.querySelectorAll(b||"*"))).filter(ona)}
function ona(a){if(a.tabIndex!=0||a.attributes.tabIndex)var b=a.tabIndex;else{a:switch(a.tagName){case "A":case "BUTTON":case "INPUT":case "SELECT":case "TEXTAREA":b=!0;break a;default:b=!1}b=b?0:-1}return b!=-1&&!a.disabled&&a.offsetParent!==null&&window.getComputedStyle(a).visibility!="hidden"}
function xt(a){return a.length==0?null:a.reduce(function(b,c){return b.tabIndex<=c.tabIndex?b:c})}
function pna(a){return a.length==0?null:a.reduceRight(function(b,c){return b.tabIndex>=c.tabIndex?b:c})}
;var yt=[];function zt(){var a=this;this.qa=this.o=null;this.ma=!1;this.oa=[];this.ua=[];this.va=function(b){if(a.o&&a.ma){var c=wt(a.o),e=xt(c),f;e&&(f=pna(c));switch(b.key){case "Tab":if(!e||!f)break;b.shiftKey?document.activeElement===e&&(b.preventDefault(),f.focus()):document.activeElement===f&&(b.preventDefault(),e.focus());break;case "Escape":b.stopPropagation(),a.qa()}}}}
zt.prototype.init=function(a,b,c){c=c===void 0?!1:c;this.qa=b;if(this.o=a)this.o.addEventListener("keydown",this.va),c&&qna(this)};
function At(a,b){if(b||b!==!1&&!a.ma)qna(a);else if(a.ma){for(rna(a);yt.length>0;){b=yt[yt.length-1];if(b.ma)break;rna(b)}a.ma=!1}}
function qna(a){a.ma||(sna(a,a.o),yt.push(a),a.ma=!0)}
function sna(a,b){var c=b.parentElement;if(c){for(var e=w(c.children),f=e.next();!f.done;f=e.next()){f=f.value;var h=f.getAttribute("aria-hidden")==="true";f===b?h&&(a.ua.push(f),f.removeAttribute("aria-hidden")):h||(a.oa.push(f),f.setAttribute("aria-hidden","true"))}if(c!=document.body)sna(a,c);else for(b=w(c.querySelectorAll(".hcfe-content iframe")),c=b.next();!c.done;c=b.next()){c=c.value;try{var k=c.contentDocument.body;k.getAttribute("aria-hidden")!=="true"&&c!==a.o&&(a.oa.push(k),k.setAttribute("aria-hidden",
"true"))}catch(l){}}}}
function rna(a){if(yt[yt.length-1]===a){for(var b=w(a.oa),c=b.next();!c.done;c=b.next())c.value.removeAttribute("aria-hidden");b=w(a.ua);for(c=b.next();!c.done;c=b.next())c.value.setAttribute("aria-hidden","true");a.oa.length=0;a.ua.length=0;yt.pop()}}
function Bt(a,b){if(a.o&&(a=wt(a.o))){if(b)for(var c=w(a),e=c.next();!e.done;e=c.next()){var f=e=e.value,h=b;if(Element.prototype.matches?f.matches(h):Element.prototype.webkitMatchesSelector?f.webkitMatchesSelector(h):Element.prototype.msMatchesSelector&&f.msMatchesSelector(h)){e.focus();return}}(b=xt(a))&&b.focus()}}
zt.prototype.dispose=function(){this.o&&this.o.removeEventListener("keydown",this.va)};var tna=za(["aria-"]),una=0;function Ct(a){this.va=a;this.ma=new Date;this.ya=this.ua=this.oa=this.qa=null;this.Ca=this.ma.toLocaleString(this.va,{month:"long"})!=this.ma.toLocaleString();this.o=una++;vna(this)}
function vna(a){a.qa=document.createElement("table");a.qa.className="sc-calendar";var b=document.createElement("thead");b.appendChild(wna(a));b.appendChild(xna(a));a.qa.appendChild(b);a.ua=document.createElement("tbody");a.ua.addEventListener("click",function(c){if(c=c.target.getAttribute("data-time")||c.target.parentNode.getAttribute("data-time"))a.Fa&&(a.ya=new Date(parseInt(c,10)),a.Fa(a.ya)),Dt(a)});
a.ua.addEventListener("keydown",function(c){a:{switch(c.key){case "ArrowUp":var e=-7;break;case "ArrowDown":e=7;break;case "ArrowLeft":e=-1;break;case "ArrowRight":e=1;break;case "PageUp":e=-((new Date(a.ma.getYear(),a.ma.getMonth(),-1)).getDate()+1);break;case "PageDown":e=(new Date(a.ma.getYear(),a.ma.getMonth()+1,-1)).getDate()+1;break;default:var f=void 0;break a}c.preventDefault();c.stopPropagation();c=new Date(a.ma);a.ma.setDate(a.ma.getDate()+e);if(c.getMonth()!==a.ma.getMonth())Dt(a,!0);else if(e=
yna(a,a.ma))(f=yna(a,c))==null||f.setAttribute("tabindex",-1),e.setAttribute("tabindex",0),e.focus();f=void 0}return f});
a.qa.appendChild(a.ua);Dt(a)}
function wna(a){var b=document.createElement("td");b.colSpan=7;a.oa=document.createElement("span");a.oa.className="month";a.oa.setAttribute("aria-live","polite");var c="sc-calendar-month"+a.o;a.oa.id=c;b.appendChild(a.oa);a.qa.setAttribute("aria-labelledby",c);c=document.createElement("span");c.className="controls";b.appendChild(c);var e=document.createElement("button");e.className="previous";e.setAttribute("title","Previous month");e.setAttribute("aria-label","Previous month");e.appendChild(yn(mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83\n                   12l4.58-4.59z"></path>\n          <path fill="none" d="M0 0h24v24H0V0z"></path>\n        </svg>')));
e.addEventListener("click",function(){a.ma.setMonth(a.ma.getMonth()+-1);Dt(a)});
c.appendChild(e);e=document.createElement("button");e.className="next";e.setAttribute("title","Next month");e.setAttribute("aria-label","Next month");e.appendChild(yn(mn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"></path>\n          <path fill="none" d="M0 0h24v24H0V0z"></path>\n        </svg>')));e.addEventListener("click",function(){a.ma.setMonth(a.ma.getMonth()+1);Dt(a)});
c.appendChild(e);c=document.createElement("tr");c.appendChild(b);return c}
function xna(a){var b=document.createElement("tr");b.className="weekdays";for(var c=[],e=0;e<7;e++){var f=document.createElement("td");c.push(f);b.appendChild(f)}e=new Date(a.ma);for(f=0;f<7;f++){c[e.getDay()].textContent=a.Ca?e.toLocaleString(a.va,{weekday:"narrow"}):"SMTWTFS"[e.getDay()];var h=a.Ca?e.toLocaleString(a.va,{weekday:"long"}):zna[e.getDay()];Nl(Ana,c[e.getDay()],"aria-label",h);e.setDate(e.getDate()+1)}return b}
function Dt(a,b){b=b===void 0?!1:b;a.oa.textContent=a.Ca?a.ma.toLocaleString(a.va,{month:"long",year:"numeric"}):a.ma.getMonth()+1+"/"+a.ma.getFullYear();a.ua.textContent="";var c=new Date(a.ma);c.setDate(1);c.getDay()>0&&c.setDate(1-c.getDay());for(var e=null;Bna(c)<=Bna(a.ma);){for(var f=document.createElement("tr"),h=0;h<7;h++){var k=document.createElement("td");if(c.getMonth()==a.ma.getMonth()){var l=document.createElement("button");k.dataset.time=c.getTime().toString();var p=!1;a.ya&&(p=a.ya.getTime()===
c.getTime());l.textContent=c.getDate().toString();l.setAttribute("tabindex",-1);l.className="selectable";var r=zna[c.getDay()]+" "+c.getDate()+" "+a.oa.textContent;Nl(Ana,l,"aria-label",r);p&&lm(l,"selected",!0);c.getTime()===a.ma.getTime()&&(e=l);k.appendChild(l)}else k.className="unselectable";f.appendChild(k);c.setDate(c.getDate()+1)}a.ua.appendChild(f)}var t;(t=e)==null||t.setAttribute("tabindex",0);if(b){var v;(v=e)==null||v.focus()}}
function Bna(a){return new Date(a.getFullYear(),a.getMonth(),1)}
function yna(a,b){if(b.getMonth()!==a.ma.getMonth())return null;b=(new Date(b.getYear(),b.getMonth(),1)).getDay()+b.getDate()+1;return a.ua.querySelector("tr:nth-child("+(Math.floor(b/7)+1)+") td:nth-child("+(b%7+1)+") button")}
Ct.prototype.Ha=function(a){this.Fa=a};
Ct.prototype.getElement=function(){return this.qa};
var zna="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Ana=[Ql(tna)];window.sc_createCalendar=function(a){a=new Ct(a);return{setSelectDateCallback:a.Ha.bind(a),getElement:a.getElement.bind(a)}};function Cna(a){var b=a,c;return function(){if(b){var e=b;b=void 0;c=e.apply(this,arguments)}return c}}
;var Dna={hY:"https://www.google.com",Hoa:"https://support.google.com",OO:"https://play.google.com"};
function Ena(){var a=this;this.o=[];this.ma=[];this.initialize=Cna(function(){return Ra(function(b){if(b.o==1)return typeof document==="undefined"||document.requestStorageAccessFor===void 0||navigator.permissions===void 0||navigator.permissions.query===void 0||location.hostname.match(".+\\.google\\.com$")?b.return(Promise.resolve()):b.yield(Fna(a),2);a.o.length>0&&document.addEventListener("click",a.oa);Ia(b)})});
this.oa=function(){if(!(a.ma.length>0)){for(var b=w(a.o),c=b.next();!c.done;c=b.next()){c=c.value;try{a.ma.push(document.requestStorageAccessFor(c))}catch(e){}}Promise.all(a.ma).then(function(){}).catch(function(){}).finally(function(){a.reset()})}}}
Ena.prototype.reset=function(){document.removeEventListener("click",this.oa)};
function Fna(a){var b,c,e,f;return Ra(function(h){switch(h.o){case 1:b=w(Object.values(Dna)),c=b.next();case 2:if(c.done){h.Qa(0);break}e=c.value;Ja(h,5);return h.yield(navigator.permissions.query({name:"top-level-storage-access",requestedOrigin:e}),7);case 7:f=h.ma;f.state!=="granted"&&a.o.push(e);Ka(h,3);break;case 5:La(h);h.Qa(0);break;case 3:c=b.next(),h.Qa(2)}})}
;(new Ena).initialize();var Et=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?function(a){return a&&AsyncContext.Snapshot.wrap(a)}:function(a){return a};function Ft(a,b){this.ua=a;this.oa=b;this.ma=0;this.o=null}
Ft.prototype.get=function(){if(this.ma>0){this.ma--;var a=this.o;this.o=a.next;a.next=null}else a=this.ua();return a};
Ft.prototype.put=function(a){this.oa(a);this.ma<100&&(this.ma++,a.next=this.o,this.o=a)};function Gt(){this.ma=this.o=null}
Gt.prototype.add=function(a,b){var c=Gna.get();c.set(a,b);this.ma?this.ma.next=c:this.o=c;this.ma=c};
Gt.prototype.remove=function(){var a=null;this.o&&(a=this.o,this.o=this.o.next,this.o||(this.ma=null),a.next=null);return a};
var Gna=new Ft(function(){return new Ht},function(a){return a.reset()});
function Ht(){this.next=this.scope=this.o=null}
Ht.prototype.set=function(a,b){this.o=a;this.scope=b;this.next=null};
Ht.prototype.reset=function(){this.next=this.scope=this.o=null};var It,Jt=!1,Hna=new Gt;function Kt(a,b){It||Ina();Jt||(It(),Jt=!0);Hna.add(a,b)}
function Ina(){var a=Promise.resolve(void 0);It=function(){a.then(Jna)}}
function Jna(){for(var a;a=Hna.remove();){try{a.o.call(a.scope)}catch(b){ob(b)}Gna.put(a)}Jt=!1}
;function Lt(){}
;function Kna(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function Mt(a){this.o=0;this.ya=void 0;this.ua=this.ma=this.oa=null;this.qa=this.va=!1;if(a!=Lt)try{var b=this;a.call(void 0,function(c){Nt(b,2,c)},function(c){Nt(b,3,c)})}catch(c){Nt(this,3,c)}}
function Lna(){this.next=this.context=this.o=this.ma=this.child=null;this.oa=!1}
Lna.prototype.reset=function(){this.context=this.o=this.ma=this.child=null;this.oa=!1};
var Mna=new Ft(function(){return new Lna},function(a){a.reset()});
function Nna(a,b,c){var e=Mna.get();e.ma=a;e.o=b;e.context=c;return e}
function Ot(a){if(a instanceof Mt)return a;var b=new Mt(Lt);Nt(b,2,a);return b}
function Ona(a){return new Mt(function(b,c){c(a)})}
Mt.prototype.then=function(a,b,c){return Pna(this,Et(typeof a==="function"?a:null),Et(typeof b==="function"?b:null),c)};
Mt.prototype.$goog_Thenable=!0;n=Mt.prototype;n.aq=function(a,b){return Pna(this,null,Et(a),b)};
n.catch=Mt.prototype.aq;n.cancel=function(a){if(this.o==0){var b=new Pt(a);Kt(function(){Qna(this,b)},this)}};
function Qna(a,b){if(a.o==0)if(a.oa){var c=a.oa;if(c.ma){for(var e=0,f=null,h=null,k=c.ma;k&&(k.oa||(e++,k.child==a&&(f=k),!(f&&e>1)));k=k.next)f||(h=k);f&&(c.o==0&&e==1?Qna(c,b):(h?(e=h,e.next==c.ua&&(c.ua=e),e.next=e.next.next):Rna(c),Sna(c,f,3,b)))}a.oa=null}else Nt(a,3,b)}
function Tna(a,b){a.ma||a.o!=2&&a.o!=3||Una(a);a.ua?a.ua.next=b:a.ma=b;a.ua=b}
function Pna(a,b,c,e){var f=Nna(null,null,null);f.child=new Mt(function(h,k){f.ma=b?function(l){try{var p=b.call(e,l);h(p)}catch(r){k(r)}}:h;
f.o=c?function(l){try{var p=c.call(e,l);p===void 0&&l instanceof Pt?k(l):h(p)}catch(r){k(r)}}:k});
f.child.oa=a;Tna(a,f);return f.child}
n.kW=function(a){this.o=0;Nt(this,2,a)};
n.lW=function(a){this.o=0;Nt(this,3,a)};
function Nt(a,b,c){a.o==0&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.o=1,Vna(c,a.kW,a.lW,a)||(a.ya=c,a.o=b,a.oa=null,Una(a),b!=3||c instanceof Pt||Wna(a,c)))}
function Vna(a,b,c,e){if(a instanceof Mt)return Tna(a,Nna(b||Lt,c||null,e)),!0;if(Kna(a))return a.then(b,c,e),!0;if(bb(a))try{var f=a.then;if(typeof f==="function")return Xna(a,f,b,c,e),!0}catch(h){return c.call(e,h),!0}return!1}
function Xna(a,b,c,e,f){function h(p){l||(l=!0,e.call(f,p))}
function k(p){l||(l=!0,c.call(f,p))}
var l=!1;try{b.call(a,k,h)}catch(p){h(p)}}
function Una(a){a.va||(a.va=!0,Kt(a.lR,a))}
function Rna(a){var b=null;a.ma&&(b=a.ma,a.ma=b.next,b.next=null);a.ma||(a.ua=null);return b}
n.lR=function(){for(var a;a=Rna(this);)Sna(this,a,this.o,this.ya);this.va=!1};
function Sna(a,b,c,e){if(c==3&&b.o&&!b.oa)for(;a&&a.qa;a=a.oa)a.qa=!1;if(b.child)b.child.oa=null,Yna(b,c,e);else try{b.oa?b.ma.call(b.context):Yna(b,c,e)}catch(f){Zna.call(null,f)}Mna.put(b)}
function Yna(a,b,c){b==2?a.ma.call(a.context,c):a.o&&a.o.call(a.context,c)}
function Wna(a,b){a.qa=!0;Kt(function(){a.qa&&Zna.call(null,b)})}
var Zna=ob;function Pt(a){kb.call(this,a)}
jb(Pt,kb);Pt.prototype.name="cancel";function $na(a){this.o=a;a.then(eb(function(){},this),function(){},this)}
function Qt(a,b,c){return a.o.then(function(e){var f=e[b];if(!f)throw Error("Method not found: "+b);return f.apply(e,c)})}
function aoa(a,b,c){for(var e=Array(arguments.length-2),f=2;f<arguments.length;f++)e[f-2]=arguments[f];f=boa(a,b).then(function(h){return h.apply(null,e)},function(h){h=Error("Help service failed to load serviceFactory: "+b+" from serviceUrl:"+a+". Underlying error: "+h,{cause:h});
delete Rt[b];return Ona(h)});
return new $na(f)}
var Rt={};function boa(a,b){var c=Rt[b];if(c)return c;c=(c=$a(b))?Ot(c):(new Mt(function(e,f){var h=(new tn(document)).createElement("SCRIPT");h.async=!0;Kl(h,ll(sha(a)));h.onload=h.onreadystatechange=function(){h.readyState&&h.readyState!="loaded"&&h.readyState!="complete"||e()};
h.onerror=function(k){f(Error("Could not load "+b+" Help API from "+a,{cause:k}))};
(document.head||document.getElementsByTagName("head")[0]).appendChild(h)})).then(function(){var e=$a(b);
if(!e)throw Error("Failed to load "+b+" from "+a);return e});
return Rt[b]=c}
;function St(a){this.o=a}
St.prototype.updateProductData=function(a){Qt(this.o,"updateProductData",arguments)};
St.prototype.oa=function(a){Qt(this.o,"requestSurvey",arguments).aq(function(){},this)};
St.prototype.ua=function(a){Qt(this.o,"presentSurvey",arguments).aq(function(){},this)};
St.prototype.ma=function(a){Qt(this.o,"dismissSurvey",arguments).aq(function(){},this)};
var coa=mn("https://www.gstatic.com/feedback/js/help/prod/service/lazy.min.js");boa(coa,"help.service.Lazy.create").aq(function(){});function Tt(){this.o=null}
function Ut(a,b){var c=b.triggerId;var e=b.enableTestingMode===void 0?!1:b.enableTestingMode;var f=b.vA;var h=b.defaultStyle;var k=b.productData;var l=b.Pz;var p=b.mN===void 0?1E3:b.mN;var r=b.callback;var t=b.parentDomElementId;if(!Vt){if(l&&k)throw Error("Only one of productData or productDataFn should be used");Wt(a).oa({triggerId:c,callback:function(v){var y=k||(l?l():{});if(v.surveyData&&!Vt){y={surveyData:v.surveyData,colorScheme:z().dark?2:1,authuser:Number(z().au),customZIndex:p,listener:f,
parentDomElementId:t,defaultStyle:h,productData:y};y.productData.customData||(y.productData.customData={});if(!t){y.productData.customData.hc=z().hc;var E;y.productData.customData.rs=((E=z().rs)==null?void 0:E.toString())||"";var oa;y.productData.customData.pt=((oa=z().pt)==null?void 0:oa.toString())||"";y.productData.customData.bcUrl=z().bcUrl;y.productData.customData.env=z().env}Wt(a).ua(y);window.sc_trackStatsEvent(88,4,v.surveyData.surveyMetadata.sessionId)}r&&r(v.surveyData)},
authuser:Number(z().au),enableTestingMode:e})}}
function Wt(a){if(!a.o){var b={locale:z().lang,apiKey:"AIzaSyAl4av1b2hx9nKATy1JsQKVPSpM2SO6JQM",window:window};b=aoa(coa,"help.service.Lazy.create","0",{apiKey:b.apiKey||b.apiKey,asxUiUri:b.asxUiUri||b.asxUiUri,environment:b.environment||b.environment,flow:b.flow||b.flow,frdProductData:b.frdProductData||b.frdProductData,frdProductDataSerializedJspb:b.frdProductDataSerializedJspb||b.frdProductDataSerializedJspb,helpCenterPath:b.helpCenterPath||b.helpCenterPath,locale:b.locale||b.locale||"en".replace(/-/g,
"_"),nonce:b.nonce||b.nonce,productData:b.productData||b.productData,receiverUri:b.receiverUri||b.receiverUri,renderApiUri:b.renderApiUri||b.renderApiUri,theme:b.theme||b.theme,window:b.window||b.window});a.o=new St(b)}return a.o}
function Xt(a,b,c,e,f){b=b===void 0?!1:b;e=e===void 0?0:e;window.setTimeout(function(){Ut(new Tt,{triggerId:a,enableTestingMode:b,Pz:c})},Math.floor(Math.random()*((f===void 0?0:f)-e))+e)}
var Vt=!1;hb("hcfe.Survey.startSurvey",function(a,b,c,e){Ut(new Tt,{triggerId:a,enableTestingMode:b===void 0?!1:b,vA:e,Pz:c})});
hb("hcfe.SurveyModule.startSurveyWithDelay",Xt);hb("hcfe.Survey.startEmbeddedSurvey",function(a,b,c,e){Ut(new Tt,{triggerId:a,enableTestingMode:c===void 0?!1:c,Pz:e,parentDomElementId:b})});
hb("hcfe.Survey.startArticleSurvey",function(a,b,c){c=c===void 0?!1:c;var e={country_code:z().cc,article_feedback_helpcenter_name:z().hc,article_feedback_query_answer:z().pid,page_visit_id:z().visit_id,article_feedback_url:z().bcUrl,article_feedback_internal:z().ii?"true":"false",article_feedback_page_id:z().pid,article_feedback_page_type:"ANSWER",article_feedback_experiment:"phoenix",MendelExperiments:(z().mendel_ids||[]).join(",")};Ut(new Tt,{triggerId:a,enableTestingMode:c,productData:{customData:e},
parentDomElementId:b})});function Yt(a,b,c){this.value=a;this.icon=b;this.ariaDescription=c}
Yt.prototype.toString=function(){return this.value};
var Zt=new Yt("error","gm/error_outline","Error notification"),$t=new Yt("caution","gm/warning","Caution notification"),au=new Yt("informational","gm/info","Informational notification"),doa=new Yt("success","gm/check_circle_outline","Success notification");
function bu(a){var b=a.message;var c=a.type;var e=a.position;var f=a.qh;var h=a.icon;var k=a.color===void 0?!0:a.color;var l=a.compact===void 0?!1:a.compact;var p=a.Xz===void 0?!1:a.Xz;var r=a.Ul===void 0?!1:a.Ul;a=a.Oc;A.call(this,"sc.shared.Callout");this.o=[];this.message=b;this.messageId=so();this.type=c;this.position=e;this.icon=new Co({icon:h!=null?h:c.icon,Bb:!0,size:l||p?20:24});this.color=k;this.compact=l;this.Xz=p;this.Ul=r;this.o=eoa(this,f);a&&(this.Oc=new Go(Object.assign({},{we:!0,compact:!0,
Rt:!0},a)))}
u(bu,A);function eoa(a,b){return b===void 0?[]:(Array.isArray(b)?b:[b]).map(function(c){return new Go(Object.assign({},{style:1,compact:!0,Bl:a.messageId},c))})}
bu.prototype.content=function(){var a=this,b=["root",this.type,this.position];this.color&&b.push("color");this.compact&&b.push("compact");this.Xz&&b.push("relaxed");this.Ul&&b.push("force-mobile-style");this.element("div","class",b.join(" "),"aria-live","polite",function(){a.element("div","class","content",function(){a.element("div","class","icon-container","aria-hidden","true",a.icon);a.element("div","id",a.messageId,"class",{message:!0,"has-control-button":!!a.Oc},function(){a.element("span","class",
"sr-only",a.type.ariaDescription+".");a.element("div",a.message)})});
(a.o.length>0||a.Oc)&&a.element("div","class","buttons",function(){for(var c=w(a.o),e=c.next();!e.done;e=c.next())a.element("div","class","secondary-button",e.value);a.Oc&&a.element("div","class","control-button",a.Oc)})})};function cu(a){var b=a.label===void 0?"":a.label;var c=a.dk===void 0?!0:a.dk;var e=a.Jr===void 0?void 0:a.Jr;var f=a.disabled===void 0?!1:a.disabled;var h=a.filled===void 0?!1:a.filled;var k=a.zc===void 0?!1:a.zc;var l=a.Cj;var p=a.fv===void 0?"":a.fv;var r=a.De===void 0?!1:a.De;a=a.ariaHidden===void 0?!1:a.ariaHidden;A.call(this,"sc.shared.MaterialBorder");this.De=this.error=this.focused=this.active=!1;this.filled=h;this.dk=c;this.zc=k;this.label=b;this.Jr=e?"calc(100% - "+e/16+"rem)":void 0;this.disabled=
f;this.o=l;this.fv=p;this.De=r;this.ariaHidden=a}
u(cu,A);n=cu.prototype;n.content=function(){this.filled?foa(this):goa(this)};
n.render=function(){A.prototype.render.call(this)};
n.setLabel=function(a){this.label=a;this.Ja()};
function hoa(a,b){a.error=b}
function goa(a){var b,c,e=a.Cj();a.element("div","class",{container:!0,"container-dense":a.zc},function(){a.element("div","class",{left:!0,"left-error":a.error,focused:a.focused,disabled:a.disabled});c=a.element("div","class",{mid:!0,"mid-error":a.error,"mid-active":e&&a.dk,focused:a.focused,disabled:a.disabled},"style",{"max-width":a.Jr},function(){a.label&&(b=a.element("label","class",{label:!0,"label-dense":a.zc,"label-error":a.error,"label-active":e,"label-hidden":e&&!a.dk,"label-focused":a.focused,
"label-disabled":a.disabled,"label-multiline":a.De&&!a.dk},"aria-hidden",a.ariaHidden||"","style",{"font-size":e?"1rem":""},"id",a.fv,a.label))});
a.element("div","class",{right:!0,"right-error":a.error,focused:a.focused,disabled:a.disabled})});
if(b&&e&&a.dk&&c){var f=Number(window.getComputedStyle(c).width.replace("px",""));c.style.width=Math.ceil(f*.75+16)+"px";c.style.paddingLeft="4px";b.style.maxWidth="calc(100%/.75)"}}
function foa(a){var b=a.Cj();a.element("div","class",{container:!0,"container-dense":a.zc,filled:!0,"filled-error":a.error,"filled-active":b,"filled-disabled":a.disabled,"filled-focused":a.focused},function(){a.element("div","class",{"filled-bottom":!0,"filled-bottom-focused":a.focused});a.element("label","class",{"filled-label":!0,"label-dense":a.zc,"label-error":a.error,"label-hidden":b&&!a.dk,"filled-label-active":b,"filled-label-disabled":a.disabled,"filled-label-focused":a.focused},"style",{"max-width":a.Jr,
"font-size":b?"1rem":""},"id",a.fv,a.label)})}
n.blur=function(){this.focused=!1;this.o()?this.activate():this.deactivate()};
n.focus=function(){this.focused=!0;this.activate()};
n.activate=function(){this.active=!0;this.Ja()};
n.deactivate=function(){this.active=!1;this.Ja()};
n.Cj=function(){return this.label?this.active||this.o():!1};function du(a){xo.call(this);this.Cs=this.icon=this.href=this.Ws=this.text="";this.style=this.type=0;this.gs=this.selected=!1;this.WG=!0;this.wc=this.disabled=!1;this.maxWidth=this.ariaLabel="";this.target=0;this.Cf(a)}
u(du,xo);n=du.prototype;
n.Cf=function(a){var b=a.text;var c=a.Ws===void 0?"":a.Ws;var e=a.href===void 0?"":a.href;var f=a.icon===void 0?"":a.icon;var h=a.Cs===void 0?"":a.Cs;var k=a.type===void 0?0:a.type;var l=a.style===void 0?0:a.style;var p=a.selected===void 0?!1:a.selected;var r=a.gs===void 0?!1:a.gs;var t=a.WG;var v=a.disabled===void 0?!1:a.disabled;var y=a.trigger;var E=a.remove;var oa=a.wc===void 0?!1:a.wc;var ra=a.ariaLabel===void 0?"":a.ariaLabel;var Aa=a.maxWidth===void 0?"":a.maxWidth;var Ba=a.target===void 0?
0:a.target;a=a.fh;if((!f||t)&&h)throw Error("Invalid use of second icon.");this.text=b;this.Ws=c;this.href=e;this.icon=f;this.Cs=h;this.type=k;this.style=l;this.selected=p;this.gs=r;this.WG=t!=null?t:r;this.disabled=v;this.trigger=y;this.remove=E;this.wc=oa;this.ariaLabel=ra;this.maxWidth=Aa;this.target=Ba;this.fh=a};
n.getText=function(){return this.text};
n.Yl=function(){return this.href};
n.Qc=function(){return this.icon};
n.getType=function(){return this.type};
n.getStyle=function(){return this.style};
n.getSelected=function(){return this.selected};
n.setSelected=function(a){a!==this.selected&&(this.selected=a,this.Da(0))};
function ioa(a){return a.gs&&a.WG}
n.gr=function(){return this.trigger};
n.mf=function(){return this.disabled};
n.setDisabled=function(a){this.disabled=a;this.Da(1)};
n.bp=function(){return this.wc};
n.Jd=function(){return this.ariaLabel};
n.Zl=function(){return this.maxWidth};
n.getTarget=function(){return this.target};var eu={},joa=(eu[0]="_self",eu[1]="_blank",eu[2]="_parent",eu[3]="_top",eu);function fu(a){a=a===void 0?{text:""}:a;A.call(this,"sc.shared.MaterialChip");this.ma=new Co({icon:"gm/close",size:18});this.oa=new Co({icon:"gm/check",size:20,Bb:!0});this.overlay=new Do;this.model=a instanceof du?a:new du(a);this.watch(this.model)}
u(fu,A);n=fu.prototype;n.content=function(a){var b=this;a&&this.model.Cf(a);var c,e,f=(e=(c=this.model.fh)==null?void 0:c.attributes({wt:!1}))!=null?e:[],h=this.model.Yl(),k=!!h,l=k?"a":"button";this.element("div","class","container",function(){b.element("div","class","touch-target","onclick",function(){if(!b.model.mf()){var r;(r=b.o)==null||r.click();Eo(b.overlay,0,0,!0)}});
var p;b.o=b.element.apply(b,[l,"href",h,"target",k?joa[b.model.getTarget()]:void 0,"disabled",b.model.mf(),"aria-hidden",b.model.mf(),"aria-label",(p=b.model.Jd())!=null?p:void 0,"role",k?void 0:"button","aria-pressed",k?void 0:b.model.getSelected().toString(),"class",{root:!0,input:b.model.getType()===0,action:b.model.getType()!==0,assistive:b.model.getType()===1,suggestive:b.model.getType()===2,filter:b.model.getType()===3,hairline:b.model.getStyle()===0,"protected":b.model.getStyle()===1,"gm3-style":b.model.getStyle()===
2,selected:b.model.getSelected(),disabled:b.model.mf(),href:k,limitWidth:!!b.model.Zl()},"style",{"max-width":b.model.Zl()},"onclick",function(){b.Ob()},
"onkeydown",function(r){Fo(b.overlay,r);if(b.model.gs&&r.key==="Backspace"){var t;(t=b.model.remove)==null||t()}var v;(v=b.model.fh)==null||v.Wu(r)},
"data-removable",ioa(b.model)?"true":void 0].concat(ya(f),[function(){b.model.bp()?koa(b):loa(b);if(b.model.getText()){var r=b.model.Ws,t={};b.element("span","class",(t.text=!0,t[r]=r!=="",t),b.model.getText())}b.model.bp()?loa(b):koa(b);ioa(b.model)&&b.element("button","disabled",b.model.mf(),"class","remove-icon","onclick",function(v){v.stopPropagation();var y;(y=b.model.remove)==null||y()},b.ma);
b.overlay.render()}]))})};
n.Ob=function(){this.model.getType()===3&&this.model.setSelected(!this.model.getSelected());var a;(a=this.model.gr())==null||a()};
function loa(a){a.model.Qc()&&a.element("span","class",{icon:!0,"icon-right":a.model.bp(),"icon__no-text":!a.model.getText()},function(){(new Co({icon:a.model.Qc(),size:20,Bb:!0})).render()});
a.model.getType()===3&&a.element("span","class",{checkmark:!0,"checkmark-right":a.model.bp()},a.oa)}
function koa(a){a.model.Cs&&a.element("span","class",{"second-icon":!0,"second-icon-right":a.model.bp()},function(){(new Co({icon:a.model.Cs,size:20,Bb:!0})).render()})}
n.focus=function(){var a;(a=this.o)==null||a.focus()};
n.isSelected=function(){return this.model.getSelected()};
n.setDisabled=function(a){this.model.setDisabled(a)};function gu(){A.call(this,"sc.shared.material_dialog.DialogContent");this.o=new np}
u(gu,A);gu.prototype.content=function(a){var b=this;var c=a.title;var e=a.OQ===void 0?"":a.OQ;var f=a.content;var h=a.footer;var k=a.Mb;var l;this.element("div","class","root","style",{"--dialog-content-padding":(l=a.padding)!=null?l:null},function(){if(c){var p={};b.element("h1","class",(p.title=!0,p[e]=!!e,p),"role","heading","aria-level","1",c)}f&&b.element("div",f);h&&b.element("div",h);k&&b.element("div","class","loading-overlay",function(){b.o.render()})})};var moa={tW:!1,autoClose:!0};function hu(){A.call(this,"sc.shared.MaterialSnackbar");this.o=new Go;this.message="";this.Hq=5E3;this.uq=this.hB=!1;this.state=2}
u(hu,A);hu.prototype.open=function(a){var b=this;var c=a.message;var e=a.action;var f=a.Hq===void 0?5E3:a.Hq;var h=a.hB===void 0?!1:a.hB;var k=a.uq===void 0?!1:a.uq;a=a.hF;if(this.state===0)return Promise.resolve();this.state=0;this.message=c;this.Hq=f;this.hB=h;this.uq=k;this.hF=a;e?this.action=Object.assign({},moa,e):this.action=void 0;this.Ja();var l;((l=this.action)==null?0:l.uV)&&this.o.focus();noa(this);return new Promise(function(p){b.onClose=p})};
hu.prototype.close=function(){if(this.state===0){this.ma&&clearTimeout(this.ma);this.state=1;this.message="";var a;(a=this.hF)==null||a.call(this);this.Ja()}};
hu.prototype.content=function(){var a=this;this.element("div","class",{root:!0,widescreen:this.hB,"root-closed":this.isClosed()},function(){var b;a.element("div","class",{snackbar:!0,opened:a.state===0,closing:a.state===1,closed:a.isClosed(),"long-action":(b=a.action)==null?void 0:b.tW},"ontransitionend",function(c){if(c.propertyName==="opacity"&&a.state!==0&&!a.isClosed()){a.state=2;a.Ja();var e;(e=a.onClose)==null||e.call(a)}},function(){a.element("div","role","alert","aria-live","assertive","aria-relevant",
"all","class","message",a.message);
ooa(a)})})};
function ooa(a){a.action&&a.element("div","class","action",function(){a.o.render({text:a.action.mI,trigger:function(){a.action.autoClose&&a.close();var b,c;(c=(b=a.action).Lp)==null||c.call(b)},
Gc:a.action.Gc})})}
function noa(a){if(!a.action||a.uq)a.ma=setTimeout(function(){a.close()},a.Hq)}
hu.prototype.isClosed=function(){return this.state===2};function poa(){this.ua=[];this.ma=!1;this.qa=new hu}
function iu(){return qoa.initialize()}
n=poa.prototype;n.initialize=function(a){a=a===void 0?document.body:a;if(this.ma)return this;this.ma=!0;roa(this,a);return this};
n.open=function(a){this.ma&&this.enqueue(a)};
n.close=function(){this.qa.close()};
n.Ta=function(){var a=this;Ra(function(b){if(b.o==1)return a.ma?a.oa?b.yield(a.oa,2):b.Qa(2):b.return(a);a.o&&a.o.parentElement&&(a.o.parentElement.removeChild(a.o),a.o=void 0);a.ma=!1;return b.return(a)})};
n.enqueue=function(a){this.ua.push(a);soa(this)};
function soa(a,b){b=b===void 0?!1:b;var c,e;Ra(function(f){if(f.o==1){if(!b&&a.oa)return f.return();if(a.ua.length===0)return(e=(c=a).va)==null||e.call(c),delete a.oa,delete a.va,f.return();a.oa||(a.oa=new Promise(function(h){a.va=h}));
return f.yield(a.qa.open(a.ua[0]),2)}a.ua.shift();soa(a,!0);Ia(f)})}
function roa(a,b){document.readyState==="interactive"||document.readyState==="complete"?toa(a,b):window.addEventListener("DOMContentLoaded",function(){toa(a,b)})}
function toa(a,b){a.o=document.createElement("div");a.o.setAttribute("aria-live","polite");a.o.setAttribute("tabindex","-1");a.o.className="sc-shared-snackbar-container";b.appendChild(a.o);ho(a.o,function(){a.qa.render()})}
var qoa=new poa;var uoa={rc:7,tc:7,ao:!0,eq:!0};
function ju(a){var b=this,c=Object.assign({},a);var e=a.content;var f=a.scope===void 0?document.body:a.scope;var h=a.ariaLabel;var k=a.Uc;var l=a.Cx;a=a.hw===void 0?!1:a.hw;var p=(delete c.content,delete c.scope,delete c.ariaLabel,delete c.Uc,delete c.Cx,delete c.hw,c);this.o=new Map;this.scope=f;this.Cx=l;this.hw=a;this.popup=new Ys(Object.assign({},uoa,p,{onClose:function(){if(b.rd)for(var r=w(b.o),t=r.next();!t.done;t=r.next()){var v=w(t.value);t=v.next().value;(v=v.next().value)||t.removeAttribute("aria-hidden")}var y;
(y=p.onClose)==null||y.call(p)},
content:function(){ko("div","role","dialog","aria-modal","true","aria-label",h,"aria-labelledby",k,e)}}))}
n=ju.prototype;n.initialize=function(){var a=this;if(this.rd)return this;this.rd=document.createElement("div");this.rd.dataset.dialogId=this.Cx;this.rd.setAttribute("aria-live","polite");this.scope.appendChild(this.rd);ho(this.rd,function(){a.popup.render()});
return this};
n.Ta=function(){if(this.rd){this.popup.close();var a;(a=this.rd)==null||a.remove();this.rd=void 0}};
n.render=function(){var a=this;this.rd||this.initialize();ho(this.rd,function(){a.popup.render()})};
n.open=function(a){a=a===void 0?{}:a;this.initialize();if(this.rd)for(var b=this.rd;b&&b!==document.body;){var c=b,e=this.getParent(c);if(e){e=w(e.childNodes);for(var f=e.next();!f.done;f=e.next())f=f.value,c!==f&&dl(f)&&(f.className!=="sc-shared-snackbar-container"||this.hw)&&(this.o.set(f,f.getAttribute("aria-hidden")==="true"),f.setAttribute("aria-hidden","true"))}b=this.getParent(b)}this.popup.open(Object.assign({},{Nb:!0},a))};
n.close=function(){this.popup.close()};
n.setAlignment=function(a){this.popup.setAlignment(a)};
n.getParent=function(a){return a.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&a.host&&a.mode?a.host:a.parentNode};function ku(a){xo.call(this);this.inputType="";this.De=!1;this.Ff=!0;this.Kr=this.rows=0;this.Mr=1;this.qr=this.text=this.label="";this.zc=this.filled=!1;this.Qe=!0;this.disabled=this.oA=!1;this.ariaLabel=this.placeholder="";this.Uc=[];this.error="";this.maxLength=void 0;this.Rs=this.ariaInvalid=this.ariaRequired=!1;this.icon=void 0;this.Do=!1;this.Yu=!0;this.Ab=void 0;this.autocomplete="";this.Zu=!0;this.Cf(a)}
u(ku,xo);n=ku.prototype;
n.Cf=function(a){var b=a.inputType===void 0?"":a.inputType;var c=a.De===void 0?!1:a.De;var e=a.Ff===void 0?!0:a.Ff;var f=a.rows===void 0?0:a.rows;var h=a.Kr===void 0?0:a.Kr;var k=a.Mr===void 0?1:a.Mr;var l=a.label===void 0?"":a.label;var p=a.placeholder===void 0?"":a.placeholder;var r=a.text===void 0?"":a.text;var t=a.qr===void 0?"":a.qr;var v=a.filled===void 0?!1:a.filled;var y=a.zc===void 0?!1:a.zc;var E=a.Qe===void 0?!0:a.Qe;var oa=a.oA===void 0?!1:a.oA;var ra=a.disabled===void 0?!1:a.disabled;
var Aa=a.Bc===void 0?void 0:a.Bc;var Ba=a.onFocus===void 0?void 0:a.onFocus;var Ha=a.onBlur===void 0?void 0:a.onBlur;var Na=a.uf===void 0?void 0:a.uf;var Va=a.Dz===void 0?void 0:a.Dz;var cb=a.ariaLabel===void 0?"":a.ariaLabel;var sb=a.Uc===void 0?["self"]:a.Uc;var Cb=a.error===void 0?"":a.error;var $b=a.maxLength;var Mb=a.ariaRequired===void 0?!1:a.ariaRequired;var rb=a.ariaInvalid===void 0?!1:a.ariaInvalid;var vb=a.Rs===void 0?!1:a.Rs;var fc=a.icon===void 0?void 0:a.icon;var Fc=a.Do===void 0?!1:
a.Do;var nc=a.Yu===void 0?!0:a.Yu;var gd=a.Ab===void 0?void 0:a.Ab;var he=a.autocomplete===void 0?"":a.autocomplete;a=a.Zu===void 0?!0:a.Zu;this.inputType=b;this.De=c;this.rows=f;this.Kr=h;this.Mr=k;this.label=l;this.placeholder=p;this.text=r;this.qr=t;this.filled=v;this.zc=y;this.Qe=E;this.oA=oa;this.disabled=ra;this.Bc=Aa;this.onFocus=Ba;this.onBlur=Ha;this.uf=Na;this.Dz=Va;this.ariaLabel=cb;this.Uc=sb;this.error=Cb;this.Ff=e;this.maxLength=$b;this.ariaRequired=Mb;this.ariaInvalid=rb;this.Rs=vb;
this.icon=fc;this.Do=Fc;this.Yu=nc;this.Ab=gd;this.autocomplete=he;this.Zu=a};
n.um=function(){return this.Ff};
n.getLabel=function(){return this.label};
n.getRows=function(){return this.rows};
n.getMaxRows=function(){return this.Kr};
n.getText=function(){return this.text};
n.setText=function(a){a!==this.text&&(this.text=a,this.Da(0))};
n.getPlaceholder=function(){return this.placeholder};
n.setPlaceholder=function(a){a!==this.placeholder&&(this.placeholder=a,this.Da(1))};
n.getError=function(){return this.error};
n.setError=function(a){a!==this.error&&(this.error=a,this.ariaInvalid=a!=="",this.Da(2))};
n.setDisabled=function(a){a!==this.disabled&&(this.disabled=a,this.Da(3))};
n.Qc=function(){return this.icon};
n.Bj=function(a){a!==this.ariaLabel&&(this.ariaLabel=a,this.Da(5))};
n.Jd=function(){var a;return(a=this.ariaLabel)!=null?a:""};function lu(a){a=a===void 0?{}:a;A.call(this,"sc.shared.MaterialTextField");this.labelId=so();this.oa=so();this.qa=so();this.o=null;this.isComposing=this.focused=!1;this.model=a instanceof ku?a:new ku(a);this.watch(this.model)}
u(lu,A);function voa(a){return a.model.um()?a.o?a.o:new cu({label:a.model.getPlaceholder(),fv:a.model.getLabel()?void 0:mu(a),dk:a.model.Qe,disabled:a.model.disabled,filled:a.model.filled,zc:a.model.zc,De:a.model.De,Cj:function(){return a.model.getText()!==""},
ariaHidden:!0}):null}
n=lu.prototype;
n.content=function(a){var b=this;a&&this.model.Cf(a);this.o=voa(this);this.element("div","class","root",function(){b.model.getLabel()&&b.element("label","class","label","id",b.labelId,"aria-hidden",b.model.Zu?typeof b.model.getLabel()==="string":"false",b.model.getLabel());b.o&&hoa(b.o,!!b.model.getError());var c=b.model.Ab?nu(b.model.Ab,{id:"sc.shared.MaterialTextField"}):void 0,e=c?c.attributes({kq:!1,wt:!1}):"";b.element("div","class",{"input-container":!0,multiline:b.model.De,dense:b.model.zc,invalid:b.model.getError(),
outlined:!b.model.filled,filled:b.model.filled,disabled:b.model.disabled},function(){b.element(b.model.getLabel()?"div":"label","class",{box:!0,"box-no-label":b.model.filled&&!b.model.Qe,"filled-box":b.model.filled&&!b.model.zc&&(b.model.Qe||b.model.De),"filled-label":b.model.filled&&!b.model.zc&&b.model.Qe,"outlined-box":!b.model.filled&&b.model.Qe},function(){var h=b.rj.apply(b,[b.model.De?"textarea":"input",b.qa,"class",{"native-control":!0,"native-control-filled":b.model.filled},"style",{padding:"0 15px",
"padding-bottom":b.model.filled?"0":"15px","padding-top":!b.model.filled&&b.model.Qe?"13px":"0"},"placeholder",b.o?"":b.model.getPlaceholder(),"aria-placeholder",b.o?b.model.getPlaceholder():"","type",b.model.inputType,"rows",b.model.getRows(),"disabled",b.model.disabled,"aria-disabled",b.model.disabled,"aria-labelledby",woa(b),"aria-label",b.model.Jd(),"maxlength",b.model.maxLength,"onfocus",function(k){b.onFocus();c&&c.Pq(k)},
"onblur",function(){return void b.onBlur()},
"oninput",function(){return void xoa(b)},
"onkeyup",function(k){if(k.key==="Enter"){var l;(l=b.model.uf)==null||l()}else if(k.key==="Tab"){var p;(p=b.model.Dz)==null||p()}},
"onkeydown",function(k){b.model.Rs&&k.stopPropagation();c&&c.Wu(k)},
"onkeypress",function(k){b.model.Rs&&k.stopPropagation()},
"aria-required",b.model.ariaRequired,"aria-invalid",b.model.ariaInvalid,"tabindex",b.model.Yu?"0":"-1","autocomplete",b.model.autocomplete].concat(ya(e)));b.ma!==h&&(b.ma=h,b.ma.addEventListener("compositionstart",function(){b.isComposing=!0}),b.ma.addEventListener("compositionend",function(){b.isComposing=!1;
xoa(b)}));
b.ma.value=b.model.getText();b.model.De&&b.model.getRows()===0&&(h=yoa(b),b.ma.style.height=h+"px",h===0&&(b.ma.style.overflowY="hidden"));b.model.Do&&b.model.Qc()&&(!b.model.filled&&b.model.Qe?b.element("span","class","icon-for-outlined-box",b.model.Qc()):b.element("span","class","icon",b.model.Qc()))});
b.o&&(b.o.render(),b.o.setLabel(b.model.getPlaceholder()))});
var f=b.model.getError()||b.model.qr;f&&(b.element("div","id",b.oa,"aria-live",b.model.getError()?"polite":null,"class",{"helper-text":!0,"helper-text-invalid":b.model.getError(),"helper-text-disabled":b.model.disabled,"helper-text-filled":b.model.filled,"helper-text-outlined":!b.model.filled,"helper-text-hidden":!b.model.getError()&&b.model.oA&&!b.focused},f),b.ma.setAttribute("aria-describedby",b.oa))})};
function woa(a){return a.model.Jd().length>0?"":a.model.Uc?a.model.Uc.map(function(b){return b==="self"?mu(a):b}).join(" "):mu(a)}
function mu(a){if(a.model.getLabel()||a.model.getPlaceholder())return a.labelId}
function yoa(a){var b=Number(getComputedStyle(a.ma).paddingLeft.replace(/[^0-9\.]/g,"")),c=a.ma.clientWidth-2*b;b=a.element("div","class","expander","style","width: "+c+"px",""+a.model.getText()+"\u200b").clientHeight;if(a.model.getMaxRows()){var e="\n".repeat(a.model.getMaxRows()-1);e=a.element("div","class","expander","style","width: "+c+"px",""+e+"\u200b");b=Math.min(b,e.clientHeight)}a.model.Mr>1&&(e="\n".repeat(a.model.Mr-1),a=a.element("div","class","expander","style","width: "+c+"px",""+e+
"\u200b"),b=Math.max(b,a.clientHeight));return b}
n.onFocus=function(){this.focused=!0;this.o&&this.o.focus();var a;(a=this.model.onFocus)==null||a();this.Ja()};
n.onBlur=function(){this.focused=!1;this.o&&this.o.blur();var a;(a=this.model.onBlur)==null||a();this.Ja()};
function xoa(a){if(!a.isComposing){var b=a.ma.value;a.model.setText(b);var c;(c=a.model.Bc)==null||c(b)}}
n.getText=function(){return this.model.getText()};
n.setText=function(a){this.model.setText(a)};
n.setPlaceholder=function(a){this.model.setPlaceholder(a)};
n.setError=function(a){this.model.setError(a)};
n.Rc=function(){return!!this.model.getError()};
n.setDisabled=function(a){this.model.setDisabled(a)};
n.focus=function(){var a;(a=this.ma)==null||a.focus()};
n.Bj=function(a){this.model.Bj(a)};function ou(a){var b=a.triggerId;var c=a.productData;var e=a.callback;var f=a.ariaLabel===void 0?"Feedback":a.ariaLabel;var h=a.Sw===void 0?!1:a.Sw;var k=a.enableTestingMode===void 0?!1:a.enableTestingMode;var l=a.Px===void 0?!0:a.Px;a=a.Sv===void 0?[]:a.Sv;A.call(this,"sc.hats_survey_button.HatsSurveyButton");this.triggerId=b;this.productData=c;this.callback=e;this.ariaLabel=f;this.Sw=h;this.enableTestingMode=k;this.Px=l;this.Sv=a.map(function(p){return p.toLowerCase()})}
u(ou,A);function zoa(a){a.Sv.length>0&&!a.Sv.includes(z().lang.toLowerCase())||(a.o=a.element("div","class","survey-trigger-button",new Go({text:"Feedback",style:1,Ib:"color-label",icon:a.Px?"gm/announcement":"",compact:!0,trigger:function(){return void Aoa(a)},
ariaLabel:a.ariaLabel,ariaHasPopup:a.Sw})))}
function Aoa(a){var b;return Ra(function(c){if(c.o==1)return b=new Tt,Boa(b)?c.yield(new Promise(function(e){return void setTimeout(e,600)}),2):c.Qa(2);
Ut(b,{triggerId:a.triggerId,enableTestingMode:a.enableTestingMode,vA:{surveyPrompted:function(){var e=document.getElementById("google-hats-survey");e&&e.focus()},
surveyCompleted:function(){a.o.focus();kp(15,a.triggerId,88)},
surveyClosed:function(){a.o.focus();kp(45,a.triggerId,88)}},
productData:a.productData,callback:function(e){var f,h=(f=e==null?void 0:e.surveyMetadata.sessionId)!=null?f:"";h&&(Coa.push(h),kp(30,a.triggerId,88));a.callback&&a.callback(e)},
defaultStyle:1});Ia(c)})}
ou.prototype.content=function(){zoa(this)};
function Boa(a){var b=!1;if(!window.hatsNextGlobalObject||!window.hatsNextGlobalObject.surveyMap)return b;for(var c=w(Object.keys(window.hatsNextGlobalObject.surveyMap)),e=c.next();!e.done;e=c.next())e=e.value,Coa.includes(e)||(b=!0,Wt(a).ma({surveyMetadata:{sessionId:e}}));return b}
var Coa=[];/*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/
function pu(a,b){this.va=[];this.Ia=a;this.Ha=b||null;this.ua=this.oa=!1;this.ma=void 0;this.Fa=this.La=this.Ca=!1;this.ya=0;this.o=null;this.qa=0}
n=pu.prototype;n.cancel=function(a){if(this.oa)this.ma instanceof pu&&this.ma.cancel();else{if(this.o){var b=this.o;delete this.o;a?b.cancel(a):(b.qa--,b.qa<=0&&b.cancel())}this.Ia?this.Ia.call(this.Ha,this):this.Fa=!0;this.oa||this.Rx(new qu(this))}};
n.II=function(a,b){this.Ca=!1;ru(this,a,b)};
function ru(a,b,c){a.oa=!0;a.ma=c;a.ua=!b;Doa(a)}
function Eoa(a){if(a.oa){if(!a.Fa)throw new su(a);a.Fa=!1}}
n.callback=function(a){Eoa(this);ru(this,!0,a)};
n.Rx=function(a){Eoa(this);ru(this,!1,a)};
function tu(a,b,c,e){var f=a.oa;f||(b===c?b=c=Et(b):(b=Et(b),c=Et(c)));a.va.push([b,c,e]);f&&Doa(a)}
n.then=function(a,b,c){var e,f,h=new Mt(function(k,l){f=k;e=l});
tu(this,f,function(k){k instanceof qu?h.cancel():e(k);return Foa},this);
return h.then(a,b,c)};
pu.prototype.$goog_Thenable=!0;pu.prototype.branch=function(a){var b=new pu;tu(this,b.callback,b.Rx,b);a&&(b.o=this,this.qa++);return b};
pu.prototype.isError=function(a){return a instanceof Error};
function Goa(a){return Kaa(a.va,function(b){return typeof b[1]==="function"})}
var Foa={};
function Doa(a){if(a.ya&&a.oa&&Goa(a)){var b=a.ya,c=uu[b];c&&(Ya.clearTimeout(c.o),delete uu[b]);a.ya=0}a.o&&(a.o.qa--,delete a.o);b=a.ma;for(var e=c=!1;a.va.length&&!a.Ca;){var f=a.va.shift(),h=f[0],k=f[1];f=f[2];if(h=a.ua?k:h)try{var l=h.call(f||a.Ha,b);l===Foa&&(l=void 0);l!==void 0&&(a.ua=a.ua&&(l==b||a.isError(l)),a.ma=b=l);if(Kna(b)||typeof Ya.Promise==="function"&&b instanceof Ya.Promise)e=!0,a.Ca=!0}catch(p){b=p,a.ua=!0,Goa(a)||(c=!0)}}a.ma=b;e&&(l=eb(a.II,a,!0),e=eb(a.II,a,!1),b instanceof
pu?(tu(b,l,e),b.La=!0):b.then(l,e));c&&(b=new Hoa(b),uu[b.o]=b,a.ya=b.o)}
function su(){kb.call(this)}
jb(su,kb);su.prototype.message="Deferred has already fired";su.prototype.name="AlreadyCalledError";function qu(){kb.call(this)}
jb(qu,kb);qu.prototype.message="Deferred was canceled";qu.prototype.name="CanceledError";function Hoa(a){this.o=Ya.setTimeout(eb(this.zA,this),0);this.Sx=a}
Hoa.prototype.zA=function(){delete uu[this.o];throw this.Sx;};
var uu={};function Ioa(a,b){var c=b||{};b=c.document||document;var e=ml(a).toString(),f=(new tn(b)).createElement("SCRIPT"),h={mM:f,FA:void 0},k=new pu(Joa,h),l=null,p=c.timeout!=null?c.timeout:5E3;p>0&&(l=window.setTimeout(function(){vu(f,!0);k.Rx(new wu(1,"Timeout reached for loading script "+e))},p),h.FA=l);
f.onload=f.onreadystatechange=function(){f.readyState&&f.readyState!="loaded"&&f.readyState!="complete"||(vu(f,c.dpa||!1,l),k.callback(null))};
f.onerror=function(){vu(f,!0,l);k.Rx(new wu(0,"Error while loading script "+e))};
h=c.attributes||{};oha(h,{type:"text/javascript",charset:"UTF-8"});xha(f,h);Kl(f,a);Koa(b).appendChild(f);return k}
function Koa(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&b.length!==0?b[0]:a.documentElement}
function Joa(){if(this&&this.mM){var a=this.mM;a&&a.tagName=="SCRIPT"&&vu(a,!0,this.FA)}}
function vu(a,b,c){c!=null&&Ya.clearTimeout(c);a.onload=function(){};
a.onerror=function(){};
a.onreadystatechange=function(){};
b&&window.setTimeout(function(){An(a)},0)}
function wu(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);kb.call(this,c);this.code=a}
jb(wu,kb);function xu(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function yu(){this.Fa=this.Fa;this.Ca=this.Ca}
yu.prototype.Fa=!1;yu.prototype.isDisposed=function(){return this.Fa};
yu.prototype.dispose=function(){this.Fa||(this.Fa=!0,this.fe())};
yu.prototype[Symbol.dispose]=function(){this.dispose()};
function zu(a,b){a.Fa?b():(a.Ca||(a.Ca=[]),a.Ca.push(b))}
yu.prototype.fe=function(){if(this.Ca)for(;this.Ca.length;)this.Ca.shift()()};function Au(a,b){this.type=a;this.ma=this.target=b;this.defaultPrevented=this.oa=!1}
Au.prototype.stopPropagation=function(){this.oa=!0};
Au.prototype.preventDefault=function(){this.defaultPrevented=!0};function Bu(a,b){Au.call(this,a?a.type:"");this.relatedTarget=this.ma=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.timeStamp=0;this.o=null;a&&this.init(a,b)}
jb(Bu,Au);
Bu.prototype.init=function(a,b){var c=this.type=a.type,e=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.ma=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;e?(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.timeStamp=a.timeStamp;this.o=a;a.defaultPrevented&&Bu.wh.preventDefault.call(this)};
Bu.prototype.stopPropagation=function(){Bu.wh.stopPropagation.call(this);this.o.stopPropagation?this.o.stopPropagation():this.o.cancelBubble=!0};
Bu.prototype.preventDefault=function(){Bu.wh.preventDefault.call(this);var a=this.o;a.preventDefault?a.preventDefault():a.returnValue=!1};var Cu="closure_listenable_"+(Math.random()*1E6|0);function Du(a){return!(!a||!a[Cu])}
;var Loa=0;function Moa(a,b,c,e,f){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!e;this.handler=f;this.key=++Loa;this.removed=this.Zw=!1}
function Eu(a){a.removed=!0;a.listener=null;a.proxy=null;a.src=null;a.handler=null}
;function Fu(a){this.src=a;this.listeners={};this.o=0}
n=Fu.prototype;n.add=function(a,b,c,e,f){var h=a.toString();a=this.listeners[h];a||(a=this.listeners[h]=[],this.o++);var k=Gu(a,b,e,f);k>-1?(b=a[k],c||(b.Zw=!1)):(b=new Moa(b,this.src,h,!!e,f),b.Zw=c,a.push(b));return b};
n.remove=function(a,b,c,e){a=a.toString();if(!(a in this.listeners))return!1;var f=this.listeners[a];b=Gu(f,b,c,e);return b>-1?(Eu(f[b]),Array.prototype.splice.call(f,b,1),f.length==0&&(delete this.listeners[a],this.o--),!0):!1};
function Noa(a,b){var c=b.type;c in a.listeners&&Tb(a.listeners[c],b)&&(Eu(b),a.listeners[c].length==0&&(delete a.listeners[c],a.o--))}
n.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var e=this.listeners[c],f=0;f<e.length;f++)++b,Eu(e[f]);delete this.listeners[c];this.o--}return b};
n.Xq=function(a,b,c,e){a=this.listeners[a.toString()];var f=-1;a&&(f=Gu(a,b,c,e));return f>-1?a[f]:null};
n.hasListener=function(a,b){var c=a!==void 0,e=c?a.toString():"",f=b!==void 0;return mha(this.listeners,function(h){for(var k=0;k<h.length;++k)if(!(c&&h[k].type!=e||f&&h[k].capture!=b))return!0;return!1})};
function Gu(a,b,c,e){for(var f=0;f<a.length;++f){var h=a[f];if(!h.removed&&h.listener==b&&h.capture==!!c&&h.handler==e)return f}return-1}
;var Ju="closure_lm_"+(Math.random()*1E6|0),Ku={},Ooa=0;function Lu(a,b,c,e,f){if(e&&e.once)return Mu(a,b,c,e,f);if(Array.isArray(b)){for(var h=0;h<b.length;h++)Lu(a,b[h],c,e,f);return null}c=Nu(c);return Du(a)?a.listen(b,c,bb(e)?!!e.capture:!!e,f):Poa(a,b,c,!1,e,f)}
function Poa(a,b,c,e,f,h){if(!b)throw Error("Invalid event type");var k=bb(f)?!!f.capture:!!f,l=Ou(a);l||(a[Ju]=l=new Fu(a));c=l.add(b,c,e,k,h);if(c.proxy)return c;e=Qoa();c.proxy=e;e.src=a;e.listener=c;if(a.addEventListener)Sia||(f=k),f===void 0&&(f=!1),a.addEventListener(b.toString(),e,f);else if(a.attachEvent)a.attachEvent(Roa(b.toString()),e);else if(a.addListener&&a.removeListener)a.addListener(e);else throw Error("addEventListener and attachEvent are unavailable.");Ooa++;return c}
function Qoa(){function a(c){return b.call(a.src,a.listener,c)}
var b=Soa;return a}
function Mu(a,b,c,e,f){if(Array.isArray(b)){for(var h=0;h<b.length;h++)Mu(a,b[h],c,e,f);return null}c=Nu(c);return Du(a)?a.Hr(b,c,bb(e)?!!e.capture:!!e,f):Poa(a,b,c,!0,e,f)}
function Pu(a,b,c,e,f){if(Array.isArray(b))for(var h=0;h<b.length;h++)Pu(a,b[h],c,e,f);else e=bb(e)?!!e.capture:!!e,c=Nu(c),Du(a)?a.unlisten(b,c,e,f):a&&(a=Ou(a))&&(b=a.Xq(b,c,e,f))&&Qu(b)}
function Qu(a){if(typeof a!=="number"&&a&&!a.removed){var b=a.src;if(Du(b))b.rH(a);else{var c=a.type,e=a.proxy;b.removeEventListener?b.removeEventListener(c,e,a.capture):b.detachEvent?b.detachEvent(Roa(c),e):b.addListener&&b.removeListener&&b.removeListener(e);Ooa--;(c=Ou(b))?(Noa(c,a),c.o==0&&(c.src=null,b[Ju]=null)):Eu(a)}}}
function Roa(a){return a in Ku?Ku[a]:Ku[a]="on"+a}
function Soa(a,b){if(a.removed)a=!0;else{b=new Bu(b,this);var c=a.listener,e=a.handler||a.src;a.Zw&&Qu(a);a=c.call(e,b)}return a}
function Ou(a){a=a[Ju];return a instanceof Fu?a:null}
var Ru="__closure_events_fn_"+(Math.random()*1E9>>>0);function Nu(a){if(typeof a==="function")return a;a[Ru]||(a[Ru]=function(b){return a.handleEvent(b)});
return a[Ru]}
;function Su(){yu.call(this);this.ua=new Fu(this);this.tb=this;this.Va=null}
jb(Su,yu);Su.prototype[Cu]=!0;n=Su.prototype;n.LD=function(){return this.Va};
n.addEventListener=function(a,b,c,e){Lu(this,a,b,c,e)};
n.removeEventListener=function(a,b,c,e){Pu(this,a,b,c,e)};
n.dispatchEvent=function(a){var b,c=this.LD();if(c)for(b=[];c;c=c.LD())b.push(c);c=this.tb;var e=a.type||a;if(typeof a==="string")a=new Au(a,c);else if(a instanceof Au)a.target=a.target||c;else{var f=a;a=new Au(e,c);oha(a,f)}f=!0;var h;if(b)for(h=b.length-1;!a.oa&&h>=0;h--){var k=a.ma=b[h];f=k.ou(e,!0,a)&&f}a.oa||(k=a.ma=c,f=k.ou(e,!0,a)&&f,a.oa||(f=k.ou(e,!1,a)&&f));if(b)for(h=0;!a.oa&&h<b.length;h++)k=a.ma=b[h],f=k.ou(e,!1,a)&&f;return f};
n.fe=function(){Su.wh.fe.call(this);this.removeAllListeners();this.Va=null};
n.listen=function(a,b,c,e){return this.ua.add(String(a),b,!1,c,e)};
n.Hr=function(a,b,c,e){return this.ua.add(String(a),b,!0,c,e)};
n.unlisten=function(a,b,c,e){return this.ua.remove(String(a),b,c,e)};
n.rH=function(a){Noa(this.ua,a)};
n.removeAllListeners=function(a){return this.ua?this.ua.removeAll(a):0};
n.ou=function(a,b,c){a=this.ua.listeners[String(a)];if(!a)return!0;a=a.concat();for(var e=!0,f=0;f<a.length;++f){var h=a[f];if(h&&!h.removed&&h.capture==b){var k=h.listener,l=h.handler||h.src;h.Zw&&this.rH(h);e=k.call(l,c)!==!1&&e}}return e&&!c.defaultPrevented};
n.Xq=function(a,b,c,e){return this.ua.Xq(String(a),b,c,e)};
n.hasListener=function(a,b){return this.ua.hasListener(a!==void 0?String(a):void 0,b)};function Tu(a,b){if(typeof a!=="function")if(a&&typeof a.handleEvent=="function")a=eb(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(b)>2147483647?-1:Ya.setTimeout(a,b||0)}
;function Uu(a){this.ya=this.va=this.ma="";this.oa=null;this.qa=this.Ca="";this.ua=this.Fa=!1;if(a instanceof Uu){this.ua=a.ua;Vu(this,a.ma);var b=a.va;Wu(this);this.va=b;Xu(this,a.getDomain());Yu(this,a.oa);Zu(this,a.getPath());$u(this,a.o.clone());a=a.qa;Wu(this);this.qa=a}else a&&(b=String(a).match(rp))?(this.ua=!1,Vu(this,b[1]||"",!0),a=b[2]||"",Wu(this),this.va=av(a),Xu(this,b[3]||"",!0),Yu(this,b[4]),Zu(this,b[5]||"",!0),$u(this,b[6]||"",!0),a=b[7]||"",Wu(this),this.qa=av(a)):(this.ua=!1,this.o=
new bv(null,this.ua))}
n=Uu.prototype;n.toString=function(){var a=[],b=this.ma;b&&a.push(cv(b,Toa,!0),":");var c=this.getDomain();if(c||b=="file")a.push("//"),(b=this.va)&&a.push(cv(b,Toa,!0),"@"),a.push(nn(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.oa,c!=null&&a.push(":",String(c));if(c=this.getPath())this.ya&&c.charAt(0)!="/"&&a.push("/"),a.push(cv(c,c.charAt(0)=="/"?Uoa:Voa,!0));(c=this.o.toString())&&a.push("?",c);(c=this.qa)&&a.push("#",cv(c,Woa));return a.join("")};
n.resolve=function(a){var b=this.clone(),c=!!a.ma;c?Vu(b,a.ma):c=!!a.va;if(c){var e=a.va;Wu(b);b.va=e}else c=!!a.ya;c?Xu(b,a.getDomain()):c=a.oa!=null;e=a.getPath();if(c)Yu(b,a.oa);else if(c=!!a.Ca){if(e.charAt(0)!="/")if(this.ya&&!this.Ca)e="/"+e;else{var f=b.getPath().lastIndexOf("/");f!=-1&&(e=b.getPath().slice(0,f+1)+e)}f=e;if(f==".."||f==".")e="";else if(ub(f,"./")||ub(f,"/.")){e=pb(f,"/");f=f.split("/");for(var h=[],k=0;k<f.length;){var l=f[k++];l=="."?e&&k==f.length&&h.push(""):l==".."?((h.length>
1||h.length==1&&h[0]!="")&&h.pop(),e&&k==f.length&&h.push("")):(h.push(l),e=!0)}e=h.join("/")}else e=f}c?Zu(b,e):c=a.o.toString()!=="";c?$u(b,a.o.clone()):c=!!a.qa;c&&(a=a.qa,Wu(b),b.qa=a);return b};
n.clone=function(){return new Uu(this)};
function Vu(a,b,c){Wu(a);a.ma=c?av(b,!0):b;a.ma&&(a.ma=a.ma.replace(/:$/,""));return a}
n.getDomain=function(){return this.ya};
function Xu(a,b,c){Wu(a);a.ya=c?av(b,!0):b;return a}
function Yu(a,b){Wu(a);if(b){b=Number(b);if(isNaN(b)||b<0)throw Error("Bad port number "+b);a.oa=b}else a.oa=null;return a}
n.getPath=function(){return this.Ca};
function Zu(a,b,c){Wu(a);a.Ca=c?av(b,!0):b;return a}
function $u(a,b,c){Wu(a);b instanceof bv?(a.o=b,Xoa(a.o,a.ua)):(c||(b=cv(b,Yoa)),a.o=new bv(b,a.ua));return a}
n.setQuery=function(a,b){return $u(this,a,b)};
n.getQuery=function(){return this.o.toString()};
function dv(a,b,c){Wu(a);a.o.set(b,c);return a}
n.removeParameter=function(a){Wu(this);this.o.remove(a);return this};
n.setReadOnly=function(a){this.Fa=a;return this};
n.isReadOnly=function(){return this.Fa};
function Wu(a){if(a.Fa)throw Error("Tried to modify a read-only Uri");}
function av(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function cv(a,b,c){return typeof a==="string"?(a=encodeURI(a).replace(b,Zoa),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function Zoa(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var Toa=/[#\/\?@]/g,Voa=/[#\?:]/g,Uoa=/[#\?]/g,Yoa=/[#\?@]/g,Woa=/#/g;function bv(a,b){this.ma=this.o=null;this.oa=a||null;this.ua=!!b}
function ev(a){a.o||(a.o=new Map,a.ma=0,a.oa&&Wia(a.oa,function(b,c){a.add(on(b),c)}))}
n=bv.prototype;n.add=function(a,b){ev(this);this.oa=null;a=fv(this,a);var c=this.o.get(a);c||this.o.set(a,c=[]);c.push(b);this.ma+=1;return this};
n.remove=function(a){ev(this);a=fv(this,a);return this.o.has(a)?(this.oa=null,this.ma-=this.o.get(a).length,this.o.delete(a)):!1};
n.clear=function(){this.o=this.oa=null;this.ma=0};
n.isEmpty=function(){ev(this);return this.ma==0};
function $oa(a,b){ev(a);b=fv(a,b);return a.o.has(b)}
n.forEach=function(a,b){ev(this);this.o.forEach(function(c,e){c.forEach(function(f){a.call(b,f,e,this)},this)},this)};
n.getKeys=function(){ev(this);for(var a=Array.from(this.o.values()),b=Array.from(this.o.keys()),c=[],e=0;e<b.length;e++)for(var f=a[e],h=0;h<f.length;h++)c.push(b[e]);return c};
n.getValues=function(a){ev(this);var b=[];if(typeof a==="string")$oa(this,a)&&(b=b.concat(this.o.get(fv(this,a))));else{a=Array.from(this.o.values());for(var c=0;c<a.length;c++)b=b.concat(a[c])}return b};
n.set=function(a,b){ev(this);this.oa=null;a=fv(this,a);$oa(this,a)&&(this.ma-=this.o.get(a).length);this.o.set(a,[b]);this.ma+=1;return this};
n.get=function(a,b){if(!a)return b;a=this.getValues(a);return a.length>0?String(a[0]):b};
n.setValues=function(a,b){this.remove(a);b.length>0&&(this.oa=null,this.o.set(fv(this,a),Ub(b)),this.ma+=b.length)};
n.toString=function(){if(this.oa)return this.oa;if(!this.o)return"";for(var a=[],b=Array.from(this.o.keys()),c=0;c<b.length;c++){var e=b[c],f=nn(e);e=this.getValues(e);for(var h=0;h<e.length;h++){var k=f;e[h]!==""&&(k+="="+nn(e[h]));a.push(k)}}return this.oa=a.join("&")};
n.clone=function(){var a=new bv;a.oa=this.oa;this.o&&(a.o=new Map(this.o),a.ma=this.ma);return a};
function fv(a,b){b=String(b);a.ua&&(b=b.toLowerCase());return b}
function Xoa(a,b){b&&!a.ua&&(ev(a),a.oa=null,a.o.forEach(function(c,e){var f=e.toLowerCase();e!=f&&(this.remove(e),this.setValues(f,c))},a));
a.ua=b}
;function gv(){this.o=gb()}
var hv=null;gv.prototype.set=function(a){this.o=a};
gv.prototype.reset=function(){this.set(gb())};
gv.prototype.get=function(){return this.o};function iv(a){this.ua=a||"";hv||(hv=new gv);this.qa=hv}
iv.prototype.o=!0;iv.prototype.ma=!0;iv.prototype.oa=!1;function jv(a){return a<10?"0"+a:String(a)}
function apa(a){iv.call(this,a)}
jb(apa,iv);
function bpa(a,b){var c=[];c.push(a.ua," ");if(a.ma){var e=c.push;var f=new Date(b.oa());f=jv(f.getFullYear()-2E3)+jv(f.getMonth()+1)+jv(f.getDate())+" "+jv(f.getHours())+":"+jv(f.getMinutes())+":"+jv(f.getSeconds())+"."+jv(Math.floor(f.getMilliseconds()/10));e.call(c,"[",f,"] ")}e=c.push;f=a.qa.get();f=(b.oa()-f)/1E3;var h=f.toFixed(3),k=0;if(f<1)k=2;else for(;f<100;)k++,f*=10;for(;k-- >0;)h=" "+h;e.call(c,"[",h,"s] ");c.push("[",b.ma(),"] ");c.push(b.getMessage());a.oa&&(b=b.o(),b!==void 0&&c.push("\n",
b instanceof Error?b.message:String(b)));a.o&&c.push("\n");return c.join("")}
;function kv(){eb(this.ua,this);this.o=new apa;this.o.ma=!1;this.o.oa=!1;this.oa=this.o.o=!1;this.ma={}}
function cpa(){var a=new kv,b=!z().send_gil_test_log_to_clearcut;b!=a.oa&&(a.oa=b)}
kv.prototype.ua=function(a){function b(h){if(h){if(h.value>=jga.value)return"error";if(h.value>=kga.value)return"warn";if(h.value>=lga.value)return"log"}return"debug"}
if(!this.ma[a.ma()]){var c=bpa(this.o,a),e=dpa;if(e){var f=b(a.ua());epa(e,f,c,a.o())}}};
kv.prototype.addFilter=function(a){this.ma[a]=!0};
var dpa=Ya.console;function epa(a,b,c,e){if(a[b])a[b](c,e===void 0?"":e);else a.log(c,e===void 0?"":e)}
;function fpa(a){switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:return!0;default:return!1}}
;function gpa(){}
;var lv;function mv(){}
jb(mv,gpa);mv.prototype.o=function(){return new XMLHttpRequest};
lv=new mv;function nv(a){this.La="modal-backdrop "+a.className;this.Fa=a.Lw;this.ua=a.wT;this.Ha=a.VQ;this.qa=a.wW;this.Ia=this.va=!1;this.ma=new zt;hpa(this)}
function hpa(a){a.o=document.createElement("div");a.o.className=a.La;a.o.setAttribute("aria-hidden",!0);a.o.addEventListener("click",function(b){b.target==a.o&&(a.oa&&!a.oa()||a.close())});
a.ma.init(a.o,function(){a.oa&&!a.oa()||a.close()});
a.qa?(a.qa.parentNode.replaceChild(a.o,a.qa),a.setContent(a.qa)):document.body.appendChild(a.o)}
n=nv.prototype;
n.close=function(){this.o.setAttribute("aria-hidden",!0);this.o.style.zIndex="";At(this.ma,!1);lm(this.o,this.Fa,!1);var a;if(a=document.activeElement!=null)a=(document.activeElement.compareDocumentPosition(this.o)&Node.DOCUMENT_POSITION_CONTAINS)!=0;if(a)for(;ov.length>0;)if(a=ov.pop(),ona(a)){a.focus();ov.splice(0,ov.length);break}this.va&&(document.body.style.position="",document.body.style.width="",document.body.style.top="",window.scroll(0,this.Ca),this.ua&&lm(this.o,this.ua,!1));this.ya&&this.ya()};
n.setContent=function(a){this.o.firstChild&&this.o.removeChild(this.o.firstChild);this.o.appendChild(a);return this};
n.open=function(){for(var a=this.o.style,b=0,c=w(document.querySelectorAll(".modal-backdrop")),e=c.next();!e.done;e=c.next())e=parseInt(window.getComputedStyle(e.value).zIndex,10),isNaN(e)||(b=Math.max(b,e));a.zIndex=b+1;document.activeElement&&ov.push(document.activeElement);lm(this.o,this.Fa,!0);this.o.removeAttribute("aria-hidden");At(this.ma,!0);this.va&&(this.ua&&lm(this.o,this.ua,!0),this.Ca=window.pageYOffset,document.body.style.top=-this.Ca+"px",document.body.style.width=document.body.clientWidth+
"px",document.body.style.position="fixed");this.Ha&&lm(this.o,this.Ha,this.Ia);Bt(this.ma,".modal__default-focus");return this};
n.getElement=function(){return this.o};
n.pI=function(a){this.oa=a;return this};
n.onClose=function(a){this.ya=a;return this};
n.yM=function(a){this.va=a;return this};
n.wM=function(a){this.Ia=a;return this};
n.hide=function(){this.o.style.display="none"};
n.show=function(){this.o.style.display=""};
nv.prototype.show=nv.prototype.show;nv.prototype.hide=nv.prototype.hide;nv.prototype.setDisableClickCapturing=nv.prototype.wM;nv.prototype.setLockBackground=nv.prototype.yM;nv.prototype.onClose=nv.prototype.onClose;nv.prototype.allowCloseIf=nv.prototype.pI;nv.prototype.getElement=nv.prototype.getElement;nv.prototype.open=nv.prototype.open;nv.prototype.setContent=nv.prototype.setContent;nv.prototype.close=nv.prototype.close;var ov=[];function pv(a){this.o=a;this.va="after";this.ya="below";this.ua=!0}
n=pv.prototype;n.Is=function(a){this.qa=a;return this};
n.xM=function(a){this.va=a;return this};
n.VM=function(a){this.ya=a;return this};
n.LM=function(a){this.ua=a;return this};
n.open=function(){var a=this;this.ma||(this.ma=function(){return ipa(a)},window.addEventListener("resize",this.ma),window.addEventListener("scroll",this.ma));
ipa(this);lm(this.o,"popup--active",!0)};
n.close=function(){lm(this.o,"popup--active",!1);this.ma&&(window.removeEventListener("resize",this.ma),window.removeEventListener("scroll",this.ma),this.ma=void 0)};
function ipa(a){a.oa=a.qa.getBoundingClientRect();var b=jpa(a,a.va=="before"?["before","after"]:["after","before"]),c=jpa(a,a.ya=="above"?["above","below"]:["below","above"]);a.o.style.left=qv(a,b)+"px";a.o.style.top=qv(a,c)+"px";lm(a.o,"popup--before",b=="before");lm(a.o,"popup--after",b=="after");lm(a.o,"popup--above",c=="above");lm(a.o,"popup--below",c=="below")}
function jpa(a,b){var c=b[0];b=w(b);for(var e=b.next();!e.done;e=b.next()){e=e.value;a:{var f=qv(a,e);switch(e){case "before":case "after":f=Math.min(f,0)+Math.min(window.innerWidth-f-a.o.offsetWidth,0);break a;case "above":case "below":f=Math.min(f,0)+Math.min(window.innerHeight-f-a.o.offsetHeight,0);break a}f=0}if(f>=0)return e;if(!h||h<f){c=e;var h=f}}return c}
function qv(a,b){var c=z().rtl;switch(b){case "before":return c?a.oa.left:a.oa.right-a.o.offsetWidth;case "after":return c?a.oa.right-a.o.offsetWidth:a.oa.left;case "above":return a.oa.bottom-a.o.offsetHeight-a.qa.offsetHeight*(a.ua?0:1);case "below":return a.oa.top+a.qa.offsetHeight*(a.ua?0:1)}return 0}
pv.prototype.close=pv.prototype.close;pv.prototype.open=pv.prototype.open;pv.prototype.setOverlapTrigger=pv.prototype.LM;pv.prototype.setVerticalPosition=pv.prototype.VM;pv.prototype.setHorizontalPosition=pv.prototype.xM;pv.prototype.setTrigger=pv.prototype.Is;var kpa=0;function rv(a,b){this.element=a;this.trigger=b;this.ma=null;this.IG()}
n=rv.prototype;n.IG=function(){var a=this;this.trigger||(this.trigger=Sm().querySelector('[data-material-menu-trigger-for="'+this.element.dataset.materialMenuId+'"]'));this.trigger.addEventListener("click",function(b){return a.Ai(b)});
this.trigger.addEventListener("keydown",function(b){b.key==="Enter"&&a.Ai(b)});
this.element.addEventListener("keydown",function(b){switch(b.key){case "ArrowUp":b.preventDefault();lpa(a,-1);break;case "ArrowDown":b.preventDefault(),lpa(a,1)}});
this.JG()&&this.element.addEventListener("click",function(){return a.nx()});
this.JB();nm(this.element,"material-menu--match-trigger-width")&&(this.element.style.minWidth=this.trigger.getBoundingClientRect().width+"px");this.o=(new nv({className:"material-menu-backdrop",Lw:"material-menu-backdrop--active"})).onClose(function(){a.ua.close();a.o.hide();a.trigger.classList.remove("material-menu-trigger--open");a.trigger.removeAttribute("aria-expanded");a.ma&&a.ma()}).setContent(this.element);
lm(this.element,"material-menu--ready");this.ua=(new pv(this.element)).Is(this.trigger).xM(nm(this.element,"material-menu--before")?"before":"after").VM(nm(this.element,"material-menu--above")?"above":"below").LM(!nm(this.element,"material-menu--no-overlap-trigger"))};
n.JB=function(){var a="material-menu-"+kpa++;this.trigger.setAttribute("aria-haspopup",!0);this.trigger.setAttribute("aria-controls",a);this.element.setAttribute("role","menu");this.element.id=a};
n.JG=function(){return!0};
function lpa(a,b){a=wt(a.element,".material-menu__item");var c=document.activeElement?a.indexOf(document.activeElement):-1;c=c==-1?0:(c+b+a.length)%a.length;a[c].focus()}
n.sV=function(a){!Em()&&(a<2||a>5)||lm(this.element,"elevation--"+a)};
n.Ai=function(a){a.preventDefault();this.o.show();this.ua.open();this.o.open();this.trigger.classList.add("material-menu-trigger--open");this.trigger.setAttribute("aria-expanded",!0)};
n.nx=function(){this.o.close()};
n.onClose=function(a){this.ma=a;return this};
rv.prototype.closeMenu=rv.prototype.nx;rv.prototype.openMenu=rv.prototype.Ai;rv.prototype.setElevation=rv.prototype.sV;rv.setUpAll=function(){return[].concat(ya(Sm().querySelectorAll(".material-menu:not(.material-menu--ready)"))).map(function(a){return new rv(a)})};var sv=[];function tv(a,b){var c=this;this.ma=a;this.o=b;this.ua=this.oa=0;this.qa=function(e){c.oa=e.pageX;c.ua=e.pageY;document.addEventListener("mousemove",c.va);document.addEventListener("mouseup",c.ya);document.addEventListener("selectstart",mpa)};
this.va=function(e){var f=c.ma.getBoundingClientRect(),h=c.o.getBoundingClientRect(),k=npa(e.pageX-c.oa,f.left,f.right,window.innerWidth);f=npa(e.pageY-c.ua,f.top,f.bottom,window.innerHeight);c.o.style.position="fixed";c.o.style.left=h.left+k+"px";c.o.style.top=h.top+f+"px";c.oa=e.pageX;c.ua=e.pageY};
this.ya=function(){document.removeEventListener("mousemove",c.va);document.removeEventListener("mouseup",c.ya);document.removeEventListener("selectstart",mpa)}}
function opa(a,b){var c=a.dataset.draggableId;if(c)return sv[Number(c)];a.dataset.draggableId=String(sv.length);a=new tv(a,b);sv.push(a);return a}
tv.prototype.reset=function(){this.o.style.position="";this.o.style.left="";this.o.style.top="";return this};
tv.prototype.enable=function(a){a?this.ma.addEventListener("mousedown",this.qa):this.ma.removeEventListener("mousedown",this.qa);return this};
function npa(a,b,c,e){c=e-(c-b);a=b+a;a<0?a=0:a>c&&(a=c);return a-b}
function mpa(a){a.preventDefault()}
;function uv(a){this.Aa=se(a)}
u(uv,eh);n=uv.prototype;n.getEnableSsEngine=function(){return yf(this,2)};
n.getEnableAwr=function(){return yf(this,3)};
n.getAlohaAutoGaRollout=function(){return yf(this,5)};
n.getEnableConfigurator=function(){return yf(this,6)};
n.getEnableMweb=function(){return yf(this,7)};
function ppa(){var a=qpa();return Xf(a,7,!0)}
n.getEnableCtlConsentCheckbox=function(){return yf(this,8)};
n.getEnableIframe=function(){return yf(this,9)};
function qpa(){var a=new uv;a=Xf(a,5,!0);a=Xf(a,2,!0);a=Xf(a,4,!1);a=Xf(a,8,!0);return Xf(a,9,!0)}
n.getEnableScreenshotNudge=function(){return yf(this,10)};
n.getEnableWebStartupConfigEndpoint=function(){return yf(this,11)};
n.getEnableJunkNudge=function(){return yf(this,12)};
n.getEnableConfiguratorLocale=function(){return yf(this,13)};
n.getEnableTinyNoPointer=function(){return yf(this,14)};
n.getEnableSupportSessionLogging=function(){return yf(this,15)};
n.getEnableFileUploadForScreenshot=function(){return yf(this,16)};
n.getEnableDirectDeflectionForSingleCategory=function(){return yf(this,17)};
n.getEnableImageSanitization=function(){return yf(this,18)};
n.getEnableAlohaBinarySplit=function(){return yf(this,19)};
n.getEnableDbFeedbackIntents=function(){return yf(this,20)};
n.getEnableMarkMandatoryFieldsWithRequired=function(){return yf(this,21)};
n.getEnableFeedbackCategoryCustomUi=function(){return yf(this,22)};
n.getEnableRealtimeCtl=function(){return yf(this,23)};var rpa=[0,ei,-22];uv.prototype.Ba=wi(rpa);function vv(a){this.Aa=se(a)}
u(vv,eh);vv.prototype.Ba=wi([0,rpa]);function spa(a){return tpa.some(function(b){return b.test(a)})}
var tpa=[/https:\/\/sandbox\.google\.com\/tools\/feedback/,/https:\/\/feedback-frontend-qual[a-z0-9.]*\.google\.com\/inapp/,/https:\/\/feedback-frontend-qual[a-z0-9.]*\.google\.com\/tools\/feedback/,/https:\/\/.*\.googleusercontent\.com\/inapp/];var upa="af am ar-EG ar-JO ar-MA ar-SA ar-XB ar az be bg bn bs ca cs cy da de-AT de-CH de el en en-GB en-AU en-CA en-IE en-IN en-NZ en-SG en-XA en-XC en-ZA es es-419 es-AR es-BO es-CL es-CO es-CR es-DO es-EC es-GT es-HN es-MX es-NI es-PA es-PE es-PR es-PY es-SV es-US es-UY es-VE et eu fa fi fil fr-CA fr-CH fr gl gsw gu he hi hr hu hy id in is it iw ja ka kk km kn ko ky ln lo lt lv mk ml mn mo mr ms my nb ne nl no pa pl pt pt-BR pt-PT ro ru si sk sl sq sr-Latn sr sv sw ta te th tl tr uk ur uz vi zh zh-CN zh-HK zh-TW zu".split(" ");var vpa=za(["https://www.gstatic.com/uservoice/feedback/client/web/","/main_light_binary.js"]),wpa=za(["https://www.gstatic.com/uservoice/feedback/client/web/","/main_binary__",".js"]);
function xpa(a,b){var c;var e=(c=a.formContent)==null?void 0:c.locale;c=e==null?void 0:e.split("-")[0];e=e&&upa.includes(e)?e:c&&upa.includes(c)?c:void 0;e=(e!=null?e:"en").replaceAll("-","_").toLowerCase();var f;a=((f=a.initializationData)==null?0:f.useNightlyRelease)?"nightly":"live";var h;return(b==null?0:(h=b.getEnableAlohaBinarySplit)==null?0:h.call(b))?fm(vpa,a):fm(wpa,a,e)}
;function wv(){var a=Error.call(this,"Form is either loading or already opened");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="DuplicateFormError"}
u(wv,Error);var xv,yv,ypa,zpa;function Apa(a,b,c,e){if(xv&&ypa===b)return xv;ypa=b;var f=xpa(a,e);return xv=b.feedbackV2GlobalObject?Promise.resolve(b.feedbackV2GlobalObject):new Promise(function(h,k){var l=wn("SCRIPT");Kl(l,f);l.onload=function(){b.feedbackV2GlobalObject?h(b.feedbackV2GlobalObject):k(Error("feedbackV2GlobalObject not found on window."))};
l.onerror=function(){k(Error("Feedback binary script tag failed to load: "+f.toString()))};
c.body.appendChild(l)})}
function Bpa(a,b,c,e){if(yv&&zpa===b)return yv;zpa=b;var f=xpa(a,e);return yv=b.feedbackV2GlobalObject?Promise.resolve(b.feedbackV2GlobalObject):new Promise(function(h,k){var l=wn("SCRIPT");Kl(l,f);l.onload=function(){b.feedbackV2GlobalObject?h(b.feedbackV2GlobalObject):k(Error("feedbackV2GlobalObject not found on window."))};
l.onerror=function(){k(Error("Feedback binary script tag failed to load: "+f.toString()))};
c.body.appendChild(l)})}
function Cpa(a,b,c,e,f){f=f===void 0?!0:f;var h,k,l,p,r;return Ra(function(t){switch(t.o){case 1:return h=Date.now(),t.yield(Apa(a,c,e,b),2);case 2:k=t.ma;if(!(f||((p=a.initializationData)==null?0:p.useNightlyRelease)||((r=a.initializationData)==null?0:r.isLocalServer))){l=k.initializeFeedbackClient(a,h,b);t.Qa(3);break}return t.yield(k.initializeFeedbackClientAsync(a,h,b),4);case 4:l=t.ma;case 3:return l.initiateAloha(),t.return(l)}})}
function Dpa(a,b,c,e){var f,h,k;return Ra(function(l){if(l.o==1)return f=Date.now(),l.yield(Bpa(a,c,e.document,b),2);if(l.o!=3)return h=l.ma,l.yield(h.initializeFeedbackClientAsync(a,f,b,e),3);k=l.ma;k.initiateAloha();return l.return(k)})}
function Epa(a,b,c){var e=!0;e=e===void 0?!0:e;var f,h,k,l,p,r,t,v;return Ra(function(y){f=c||Ya;if((h=b)==null?0:(l=(k=h).getEnableAlohaBinarySplit)==null?0:l.call(k)){p=f;if(p.isFormOpened)throw new wv;p.isFormOpened=!0;a.callbacks=a.callbacks||{};r=a.callbacks.onClose||function(){};
a.callbacks.onClose=function(E){p.isFormOpened=!1;r(E)};
try{return y.return(Dpa(a,b,p,f))}catch(E){throw p.isFormOpened=!1,E;}}else{t=f;if(t.isFormOpened)throw new wv;t.isFormOpened=!0;a.callbacks=a.callbacks||{};v=a.callbacks.onClose||function(){};
a.callbacks.onClose=function(E){t.isFormOpened=!1;v(E)};
try{return y.return(Cpa(a,b,t,f.document,e))}catch(E){throw t.isFormOpened=!1,E;}}Ia(y)})}
;function Fpa(a){try{return Ya.JSON.parse(a)}catch(b){}a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
;function zv(a){Su.call(this);this.headers=new Map;this.FN=a||null;this.Sg=!1;this.Ub=null;this.Fp=this.xE="";this.vp=this.fE=this.Ry=this.YC=!1;this.AA=0;this.Af=null;this.fG="";this.IU=this.AH=!1;this.UB=this.nH=null}
jb(zv,Su);var Gpa=/^https?$/i,Hpa=["POST","PUT"],Ipa=[];function Jpa(a,b,c,e,f){var h=new zv;Ipa.push(h);b&&h.listen("complete",b);h.Hr("ready",h.DQ);f&&(h.AA=Math.max(0,f));h.AH=!0;h.send(a,"GET",c,e)}
n=zv.prototype;n.DQ=function(){this.dispose();Tb(Ipa,this)};
n.setTrustToken=function(a){this.nH=a};
n.setAttributionReporting=function(a){this.UB=a};
n.send=function(a,b,c,e){if(this.Ub)throw Error("[goog.net.XhrIo] Object is active with another request="+this.xE+"; newUri="+a);b=b?b.toUpperCase():"GET";this.xE=a;this.Fp="";this.YC=!1;this.Sg=!0;this.Ub=this.FN?this.FN.o():lv.o();this.Ub.onreadystatechange=Et(eb(this.uL,this));this.IU&&"onprogress"in this.Ub&&(this.Ub.onprogress=Et(eb(function(k){this.tL(k,!0)},this)),this.Ub.upload&&(this.Ub.upload.onprogress=Et(eb(this.tL,this))));
try{this.getStatus(),this.fE=!0,this.Ub.open(b,String(a),!0),this.fE=!1}catch(k){this.getStatus();this.Sx(5,k);return}a=c||"";c=new Map(this.headers);if(e)if(Object.getPrototypeOf(e)===Object.prototype)for(var f in e)c.set(f,e[f]);else if(typeof e.keys==="function"&&typeof e.get==="function"){f=w(e.keys());for(var h=f.next();!h.done;h=f.next())h=h.value,c.set(h,e.get(h))}else throw Error("Unknown input type for opt_headers: "+String(e));e=Array.from(c.keys()).find(function(k){return"content-type"==
k.toLowerCase()});
f=Ya.FormData&&a instanceof Ya.FormData;!Sb(Hpa,b)||e||f||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=w(c);for(e=b.next();!e.done;e=b.next())c=w(e.value),e=c.next().value,c=c.next().value,this.Ub.setRequestHeader(e,c);this.fG&&(this.Ub.responseType=this.fG);"withCredentials"in this.Ub&&this.Ub.withCredentials!==this.AH&&(this.Ub.withCredentials=this.AH);if("setTrustToken"in this.Ub&&this.nH)try{this.Ub.setTrustToken(this.nH)}catch(k){this.getStatus()}if("setAttributionReporting"in
this.Ub&&this.UB)try{this.Ub.setAttributionReporting(this.UB)}catch(k){this.getStatus()}try{this.Af&&(clearTimeout(this.Af),this.Af=null),this.AA>0&&(this.getStatus(),this.Af=setTimeout(this.FA.bind(this),this.AA)),this.getStatus(),this.Ry=!0,this.Ub.send(a),this.Ry=!1}catch(k){this.getStatus(),this.Sx(5,k)}};
n.FA=function(){typeof Xa!="undefined"&&this.Ub&&(this.Fp="Timed out after "+this.AA+"ms, aborting",this.getStatus(),this.dispatchEvent("timeout"),this.abort(8))};
n.Sx=function(a,b){this.Sg=!1;this.Ub&&(this.vp=!0,this.Ub.abort(),this.vp=!1);this.Fp=b;Kpa(this);Av(this)};
function Kpa(a){a.YC||(a.YC=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}
n.abort=function(){this.Ub&&this.Sg&&(this.getStatus(),this.Sg=!1,this.vp=!0,this.Ub.abort(),this.vp=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Av(this))};
n.fe=function(){this.Ub&&(this.Sg&&(this.Sg=!1,this.vp=!0,this.Ub.abort(),this.vp=!1),Av(this,!0));zv.wh.fe.call(this)};
n.uL=function(){this.isDisposed()||(this.fE||this.Ry||this.vp?Lpa(this):this.eU())};
n.eU=function(){Lpa(this)};
function Lpa(a){if(a.Sg&&typeof Xa!="undefined")if(a.Ry&&Bv(a)==4)setTimeout(a.uL.bind(a),0);else if(a.dispatchEvent("readystatechange"),a.nc()){a.getStatus();a.Sg=!1;try{if(Mpa(a))a.dispatchEvent("complete"),a.dispatchEvent("success");else{try{var b=Bv(a)>2?a.Ub.statusText:""}catch(c){b=""}a.Fp=b+" ["+a.getStatus()+"]";Kpa(a)}}finally{Av(a)}}}
n.tL=function(a,b){this.dispatchEvent(Npa(a,"progress"));this.dispatchEvent(Npa(a,b?"downloadprogress":"uploadprogress"))};
function Npa(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}}
function Av(a,b){if(a.Ub){a.Af&&(clearTimeout(a.Af),a.Af=null);var c=a.Ub;a.Ub=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=null}catch(e){}}}
n.isActive=function(){return!!this.Ub};
n.nc=function(){return Bv(this)==4};
function Mpa(a){var b=a.getStatus(),c;if(!(c=fpa(b))){if(b=b===0)a=Via(String(a.xE)),b=!Gpa.test(a);c=b}return c}
function Bv(a){return a.Ub?a.Ub.readyState:0}
n.getStatus=function(){try{return Bv(this)>2?this.Ub.status:-1}catch(a){return-1}};
n.getResponseText=function(){try{return this.Ub?this.Ub.responseText:""}catch(a){return""}};
function Opa(a){if(a.Ub){a=a.Ub.responseText;a.indexOf(")]}'\n")==0&&(a=a.substring(5));a:{if(Ya.JSON)try{var b=Ya.JSON.parse(a);break a}catch(c){}b=Fpa(a)}return b}}
n.getResponse=function(){try{if(!this.Ub)return null;if("response"in this.Ub)return this.Ub.response;switch(this.fG){case "":case "text":return this.Ub.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in this.Ub)return this.Ub.mozResponseArrayBuffer}return null}catch(a){return null}};
n.getResponseHeader=function(a){if(this.Ub&&this.nc())return a=this.Ub.getResponseHeader(a),a===null?void 0:a};
n.getAllResponseHeaders=function(){return this.Ub&&Bv(this)>=2?this.Ub.getAllResponseHeaders()||"":""};function Ppa(a,b){return Ra(function(c){return c.return(new Promise(function(e,f){Number.isInteger(Number(a))&&Number(a)>0?(f=Qpa(b!=null?b:"")+"/aloha_form_properties?productId="+a,Jpa(f,function(h){h=h.target;var k=null;try{k=fh(vv,JSON.stringify(Opa(h)))}catch(l){h=new vv,k=ppa(),k=Xf(k,10,!0),k=Xf(k,12,!0),k=Xf(k,13,!1),k=Xf(k,14,!0),k=Xf(k,15,!0),k=Xf(k,20,!1),k=nf(h,uv,1,k)}e(k)},"",{},2E3)):f(Error("Invalid product id: "+a))}))})}
function Qpa(a){return spa(a)?a:"https://www.google.com/tools/feedback"}
;function Cv(a,b,c){a.timeOfStartCall=(new Date).getTime();var e=c||Ya,f=e.document,h=a.nonce||Hl(e.document);h&&!a.nonce&&(a.nonce=h);if(a.flow=="help"){var k=$a("document.location.href",e);!a.helpCenterContext&&k&&(a.helpCenterContext=k.substring(0,1200));k=!0;if(b&&JSON&&JSON.stringify){var l=JSON.stringify(b);(k=l.length<=1200)&&(a.psdJson=l)}k||(b={invalidPsd:!0})}b=[a,b,c];e.GOOGLE_FEEDBACK_START_ARGUMENTS=b;c=a.feedbackServerUri||"//www.google.com/tools/feedback";if(k=e.GOOGLE_FEEDBACK_START)k.apply(e,
b);else{e=c+"/load.js?";for(var p in a)b=a[p],b==null||bb(b)||(e+=encodeURIComponent(p)+"="+encodeURIComponent(b)+"&");a=sn(f).createElement("SCRIPT");h&&a.setAttribute("nonce",h);Kl(a,ll(e));f.body.appendChild(a)}}
function Rpa(a,b,c,e){var f,h;return Ra(function(k){f=c||Ya;var l=a.serverEnvironment==="DEV",p=c||Ya;p=a.nonce||Hl(p.document);l={integrationKeys:{productId:a.productId,feedbackBucket:a.bucket,triggerId:a.triggerId},callbacks:{onClose:a.callback,onLoad:a.onLoadCallback},formContent:{locale:a.locale,disableScreenshot:a.disableScreenshotting,productDisplayName:void 0,announcement:void 0,issueCategories:void 0,includeSeveritySelection:void 0,customImageSrc:void 0,thankYouMessage:void 0,userEmail:void 0,
defaultFormInputValues:void 0,defaultFormInputValuesString:void 0,abuseLink:a.abuseLink,additionalDataConsent:a.additionalDataConsent},initializationData:{isLocalServer:l,nonce:p,useNightlyRelease:l,feedbackJsUrl:void 0,feedbackCssUrl:void 0,feedbackJsUrlSerialized:void 0,feedbackCssUrlSerialized:void 0,submissionServerUri:a.feedbackServerUri,colorScheme:a.colorScheme},extraData:{productVersion:a.productVersion,authUser:a.authuser,configuratorId:a.configuratorId,customZIndex:a.customZIndex,tinyNoPointer:a.tinyNoPointer,
allowNonLoggedInFeedback:a.allowNonLoggedInFeedback,enableAnonymousFeedback:a.enableAnonymousFeedback}};b&&(p=new Map(Object.entries(b)),l.extraData.productSpecificData=p);h=l;return k.yield(Epa(h,e,f),0)})}
function Spa(a,b,c){try{if(a.flow==="help"){var e=a.helpCenterPath.replace(/^\//,"");Gl(c||window,"https://support.google.com/"+e)}else a.flow==="submit"?Cv(a,b,c):Ppa(a.productId,a.feedbackServerUri).then(function(f){f=jf(f,uv,1);var h=!Oaa||(f==null?void 0:f.getEnableMweb()),k=!a.tinyNoPointer||(f==null?void 0:f.getEnableTinyNoPointer());!f||f.getAlohaAutoGaRollout()&&h&&k?Rpa(a,b,c,f).catch(function(l){!l||l instanceof wv||Cv(a,b,c)}):Cv(a,b,c)},function(f){!f||f instanceof wv||Cv(a,b,c)})}catch(f){Rpa(a,
b,c,null).catch(function(h){!h||h instanceof wv||Cv(a,b,c)})}}
hb("userfeedback.api.startFeedback",Spa);function Dv(a){window.sc_trackStatsEvent(49,8);Ev(a)}
function Ev(a){var b=a.productId;var c=a.bucket;var e=a.flow===void 0?"material":a.flow;var f=a.BC===void 0?!1:a.BC;var h=a.aQ===void 0?!0:a.aQ;var k=a.YU;var l=a.onClose;var p=a.onLoad;var r=a.payload;a=a.description;var t=z(),v={};b=(v.flow=e,v.locale=t.lang,v.productId=b,v.disableSubmit=f,v);c&&(b.bucket=c);l&&(b.callback=l);p&&(b.onLoadCallback=p);t.sb_uri&&(b.serverUri=t.sb_uri);k&&(b.reportDataCallback=k);b.allowNonLoggedInFeedback=h;e==="submit"&&(b.report={description:a});var y={};r.forEach(function(E,
oa){y[oa]=E});
Spa(b,y)}
;function Fv(){var a=z();a=new Map([["answer_id",a.pid],["bc_url",a.bcUrl],["environment_hostname",a.ehn],["external_name",a.ehc],["hc",a.hc],["hostname",a.host],["internal_ip",a.ii],["experiments",a.mendel_ids],["page_type",a.pt],["user_logged_in",a.li],["environment",a.env],["client",Gv()]]);a.set("escalation_availability_matching_frd_forms",Xm().escalation_availability_matching_frd_forms);a.set("rule_service_escalation_availability_c2c_event_id",Xm().rule_service_escalation_availability_c2c_event_id);
a.set("rule_service_escalation_availability_c2c_synthesis_event_id",Xm().rule_service_escalation_availability_c2c_synthesis_event_id);a.set("rule_service_escalation_availability_chat_event_id",Xm().rule_service_escalation_availability_chat_event_id);a.set("rule_service_escalation_availability_chat_synthesis_event_id",Xm().rule_service_escalation_availability_chat_synthesis_event_id);a.set("rule_service_escalation_availability_email_event_id",Xm().rule_service_escalation_availability_email_event_id);
a.set("rule_service_escalation_availability_email_synthesis_event_id",Xm().rule_service_escalation_availability_email_synthesis_event_id);a.set("rule_service_escalation_availability_phone_event_id",Xm().rule_service_escalation_availability_phone_event_id);a.set("rule_service_escalation_availability_phone_synthesis_event_id",Xm().rule_service_escalation_availability_phone_synthesis_event_id);a.set("rule_service_extensible_contact_options_event_id",Xm().rule_service_extensible_contact_options_event_id);
a.set("rule_service_form_synthesis_event_id",Xm().rule_service_form_synthesis_event_id);a.set("rule_service_helpcenter_fields_synthesis_event_id",Xm().rule_service_helpcenter_fields_synthesis_event_id);return a}
function Gv(){var a=z().rs;switch(a){case 4:return"cases";case 1:return"helpcenter";default:return String(a)}}
;function Hv(){Tpa(this)}
function Tpa(a){a.o=(new nv({className:"material-dialog-backdrop",Lw:"material-dialog-backdrop--active",wT:"material-dialog-backdrop--locked",VQ:"material-dialog-backdrop--disable-click-capture"})).pI(function(){return!a.qa});
a.o.getElement().addEventListener("click",function(b){b=b.target;var c=b.getAttribute("data-material-dialog-action");c&&(a.ma&&a.ma(c),nm(b,"material-dialog--disable-close")||a.close())})}
Hv.prototype.open=function(a){var b=this,c=a.querySelector(".material-dialog__title");a.setAttribute("role","dialog");c&&(a.setAttribute("title",c.textContent),opa(c,a).reset().enable(nm(a,"material-dialog--draggable")));var e=a.querySelector(".material-dialog__minimize-button");if(e){var f=e.getAttribute("data-material-dialog-minimized-aria-label"),h=function(){var k=document.createElement("button");k.className="material-dialog-minimized";k.textContent=c.textContent+"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u2594";
f&&k.setAttribute("aria-label",f);k.addEventListener("click",function(){b.o.open();document.body.removeChild(k)});
b.o.close();document.body.appendChild(k);k.focus()};
this.ua=function(){return e.removeEventListener("click",h)};
e.addEventListener("click",h)}this.qa=nm(a,"material-dialog--disable-close");this.o.yM(!nm(a,"material-dialog--show-background")).wM(nm(a,"material-dialog--disable-click-capture")).setContent(a).open();a.focus();return this};
Hv.prototype.close=function(){this.o.close();this.ua&&this.ua();this.oa&&this.oa()};
Hv.prototype.Lp=function(a){this.ma=a;return this};
Hv.prototype.onClose=function(a){this.oa=a;return this};
Hv.prototype.onClose=Hv.prototype.onClose;Hv.prototype.onAction=Hv.prototype.Lp;Hv.prototype.close=Hv.prototype.close;Hv.prototype.open=Hv.prototype.open;function Iv(a){xo.call(this);this.yl=!1;this.text=this.group="";this.selected=this.disabled=!1;this.Cf(a)}
u(Iv,xo);n=Iv.prototype;n.Cf=function(a){var b=a.group===void 0?"":a.group;var c=a.text===void 0?"":a.text;var e=a.disabled===void 0?!1:a.disabled;var f=a.selected===void 0?!1:a.selected;var h=a.content;var k=a.ariaLabel;var l=a.Bh;var p=a.Pk;a=a.yl===void 0?!1:a.yl;this.group=b;this.selected=f;this.text=c;this.content=h;this.ariaLabel=k;this.Bh=l;this.disabled=e;this.Pk=p;this.yl=a};
n.getGroup=function(){return this.group};
n.getText=function(){return this.text};
n.getContent=function(){return this.content};
n.Jd=function(){return this.ariaLabel};
n.isSelected=function(){return this.selected};
n.setSelected=function(a){this.selected=a;var b;(b=this.Pk)==null||b.call(this,this.selected);this.Da(0)};
n.setDisabled=function(a){this.disabled=a;this.Da(1)};function Jv(a){a=a===void 0?{}:a;A.call(this,"sc.shared.MaterialRadio");this.id=so();this.model=a instanceof Iv?a:new Iv(a);this.overlay=new Do({rq:!0});this.o=null;this.watch(this.model)}
u(Jv,A);
Jv.prototype.content=function(a){var b=this;a&&this.model.Cf(a);this.element("div","class",{root:!0,disabled:this.model.disabled,"align-top":this.model.yl},function(){b.element("div","class","touch-target","onclick",function(){b.model.disabled||!b.o||b.o.checked||(b.o.checked=!0,b.onChange())},function(){b.element("div","class","radio",function(){b.o=b.element("input","id",b.id,"class","native-control","type","radio","name",b.model.getGroup(),"aria-label",b.model.Jd(),"aria-describedby",b.model.Bh,"disabled",
b.model.disabled,"onchange",function(){b.onChange()});
b.o.checked=b.isSelected();b.element("div","class","ring");b.element("div","class","dot");b.overlay.render()})});
var c=b.model.getText(),e=b.model.getContent();(c||e)&&b.element("label","for",b.id,"class","label-text","aria-hidden","true","onclick",function(){Eo(b.overlay,0,0,!0)},c||e)})};
Jv.prototype.onChange=function(){if(this.o&&this.model.isSelected()!==this.o.checked&&(this.model.setSelected(this.o.checked),this.model.getGroup()))for(var a=w(Array.from(document.getElementsByName(this.model.getGroup()))),b=a.next();!b.done;b=a.next())b.value.dispatchEvent(new Event("change"))};
Jv.prototype.isSelected=function(){return this.model.isSelected()};function Kv(a){var b=Object.assign({},a);var c=a.content;var e=a.Th===void 0?!0:a.Th;var f=a.Gl===void 0?"placement-start":a.Gl;var h=a.xq===void 0?"alignment-start":a.xq;var k=a.style===void 0?"style-normal":a.style;a=a.Ft;b=(delete b.content,delete b.Th,delete b.Gl,delete b.xq,delete b.style,delete b.Ft,b);A.call(this,"sc.shared.MaterialRichTooltip");var l=this;this.o=!1;this.xe=this.Le=0;this.ma=c;this.Th=e;this.qa=f;this.oa=h;this.va=k;this.Ft=a;this.popup=new Ys(Object.assign({},{content:function(){Upa(l)},
Zk:!0,eq:!1,ao:!1},b))}
u(Kv,A);n=Kv.prototype;n.open=function(a){this.Th?this.popup.open(a):(this.o=!0,this.Ja())};
n.Eb=function(){return this.Th?this.popup.Eb():this.o};
n.close=function(){this.Th?this.popup.close():(this.o=!1,this.Ja())};
function Lv(a,b){var c=b.Le;b=b.xe;a.Th||(a.Le=c!=null?c:a.Le,a.xe=b!=null?b:a.xe,a.Ja())}
n.Fe=function(){return!0};
n.content=function(){var a=this;this.Th?this.popup.render():this.element("div","class","popup-container","style",{visibility:this.o?"visible":"hidden",transform:"translate("+this.Le+"px, "+this.xe+"px)","z-index":"993"},function(){Upa(a)})};
function Upa(a){a.element("div","class","root "+a.qa+" "+a.va,function(){a.element("div","class","container","style",{padding:a.Ft},a.ma);a.element("div","class","clip-track "+a.oa,function(){a.element("div","class","clip",function(){a.element("div","class","caret")})})})}
;function Mv(a,b){b=b===void 0?z().hc:b;this.ma=a;this.oa={};b&&(this.oa.helpcenter=b)}
n=Mv.prototype;n.Lm=function(a){this.qa=a;return this};
n.onError=function(a){this.ua=a;return this};
n.sL=function(a){this.va=a;return this};
n.Mf=function(a,b){this.oa[a]=b;return this};
n.start=function(a){var b=this;a=a===void 0?z().upload_hostname:a;var c=new XMLHttpRequest;c.open("POST",a+(z().redirect_upload_to_boq||z().redirect_upload_to_boq_support_content?"/upload-ceres":"/upload"));c.withCredentials=!0;c.addEventListener("load",function(){try{var e=JSON.parse(c.responseText);Vpa(b,e.sessionStatus.externalFieldTransfers[0].formPostInfo.url)}catch(f){Nv(b)}});
c.addEventListener("error",function(){return Nv(b)});
c.addEventListener("abort",function(){return Nv(b)});
c.send(Wpa(this));return this};
function Vpa(a,b){var c=new XMLHttpRequest;c.open("POST",b);c.withCredentials=!0;c.addEventListener("load",function(){try{var e=JSON.parse(c.responseText).sessionStatus.additionalInfo["uploader_service.GoogleRupioAdditionalInfo"].completionInfo.customerSpecificInfo;a.o=e.cns_filename;a.ya=e.document_id;a.qa&&a.qa()}catch(f){Nv(a)}});
c.upload.addEventListener("progress",function(e){a.va&&a.va(e.lengthComputable?Math.max(e.loaded-(e.total-a.ma.size),0):0)});
c.addEventListener("error",function(){return Nv(a)});
c.addEventListener("abort",function(){return Nv(a)});
b=new FormData;b.append("Filedata",a.ma,a.ma.name);c.send(b)}
function Nv(a){a.ua&&a.ua()}
function Wpa(a){var b=[{external:{name:"file",filename:a.ma.name,formPost:{}}}],c;for(c in a.oa)b.push({inlined:{name:c,content:a.oa[c],contentType:"text/plain"}});return JSON.stringify({protocolVersion:"0.8",createSessionRequest:{fields:b}})}
n.WR=function(){return this.o};
n.To=function(){return this.ya};
Mv.prototype.getDocumentId=Mv.prototype.To;Mv.prototype.getCnsFilename=Mv.prototype.WR;Mv.prototype.start=Mv.prototype.start;Mv.prototype.setMetadata=Mv.prototype.Mf;Mv.prototype.onProgress=Mv.prototype.sL;Mv.prototype.onError=Mv.prototype.onError;Mv.prototype.onSuccess=Mv.prototype.Lm;function Xpa(a){var b=a.actionData===void 0?new qq:a.actionData;var c=a.actionType===void 0?0:a.actionType;a=a.Qd===void 0?"none":a.Qd;this.actionData=b;this.actionType=c;this.Qd=a}
;var Ypa=["bbflpbccjhjmbbbiinhepnpchcofnojb","dphkapnbbgnkjhacgfkgednpebjihepo","pebbhcjfokadbgbnlmogdkkaahmamnap","aboklfjbdonbmoljbpmflniojemjijig"];function Zpa(){var a=window;this.o=chrome;this.window=a}
function $pa(a){var b,c,e,f;return Ra(function(h){switch(h.o){case 1:if(!hc)return h.return(!1);if(a.extensionId)return h.return(!0);b=w(Ypa);c=b.next();case 2:if(c.done){h.Qa(4);break}e=c.value;return h.yield(aqa(a,e,{type:"CONNECT_TO_EXTENSION"}),5);case 5:if(f=h.ma)return h.return(!0);c=b.next();h.Qa(2);break;case 4:return h.return(!1)}})}
function aqa(a,b,c){var e,f,h,k;return Ra(function(l){if(l.o==1)return Ja(l,2),l.yield((e=a.o)==null?void 0:(f=e.runtime)==null?void 0:f.sendMessage(b,c),4);if(l.o!=2)return h=l.ma,((k=h)==null?void 0:k.type)==="CONNECTED"?(a.extensionId=b,l.return(!0)):l.return(!1);La(l);return l.return(!1)})}
;function Ov(a){this.Aa=se(a)}
u(Ov,eh);Ov.prototype.getTitle=function(){return Df(this,1)};
Ov.prototype.setTitle=function(a){return ag(this,1,a)};
Ov.prototype.getBody=function(){return Df(this,2)};
Ov.prototype.hasBody=function(){return hg(this,2)};var bqa=[0,x,-2];Ov.prototype.Ba=wi(bqa);var cqa=new vi(1008,Dp,Ov);hja[1008]=bqa;var dqa=new Map([["adwords_policy_center","gm/ads_outline"],["adwords3","gm/ads_outline"]]);function Pv(a){var b=a.Mi;a=a.Oa;A.call(this,"sc.discovery.genie.Action");var c=this;this.Oa=a;this.Mi=b;typeof chrome!=="undefined"&&(this.ma=new lp,this.oa=new Zpa);var e;(e=this.ma)==null||mp(e).then(function(l){l&&Pr({action:37,Oa:c.Oa,viewType:c.Mi.Qd})});
var f;(f=this.oa)==null||$pa(f).then(function(l){l&&Pr({action:37,Oa:c.Oa,viewType:c.Mi.Qd})});
var h,k;(b=(h=rq(b.actionData,Sc)[0])==null?void 0:(k=Of(h,nq,7,pq))==null?void 0:Df(k,4))||(b=a.Ut?"genie_cta-csp":"genie_cta");this.o=z().hc+"-"+b;this.Yh=!this.Oa.Jo||this.Oa.extCidCount!==1&&this.Oa.requestSource!==1?void 0:Qv(this.Oa)}
u(Pv,A);Pv.prototype.content=function(){var a=this;this.element("div","class","root",function(){switch(a.Mi.actionType){case 0:eqa(a);break;case 1:fqa(a)}})};
function eqa(a){a.element("div","class",{"action-buttons":!0,"action-buttons-redesign":a.Oa.wd},function(){for(var b=w(rq(a.Mi.actionData,Sc)),c=b.next();!c.done;c=b.next()){c=c.value;if(c.getType()===3&&a.Oa.Ox){c=new oq;var e=a,f="https://hc-ai-mode-staging.corp.google.com/?entry_point_id=1";e.Oa.vu&&(f=e.Oa.vu||"");f=new URL(f);var h=f.searchParams,k=h.set;var l=(new Ov).setTitle(e.Oa.getTitle());var p=e.Oa.getDescription();l=ag(l,2,p);l=ag(l,3,"Start issue diagnosis").serialize();l=lc(l,4);k.call(h,
"gec",l);z().au&&f.searchParams.set("authuser",z().au);gqa(e.Oa)&&f.searchParams.set("ocid",gqa(e.Oa));f=f.toString();c=af(c,9,pq,Td(f));c=dg(c,5,5).setId("1d4ea0d7-372d-4c08-96ce-f9283c54579f").setLabel("Start issue diagnosis").setType(6)}Pr({action:4,Oa:a.Oa,viewType:a.Mi.Qd});if(hqa(a.Oa)){f=e=void 0;k=c;h=Rv(Ef(k,5));Ef(k,6)&&(h?f=Rv(Ef(k,6)):(h=Rv(Ef(k,6)),e=!0));l=h;p=f;var r=e;e=Ef(c,5)===2||Ef(c,6)===2||c.getType()===6;var t=void 0;f=a;h=f.element;k=(t=c.getLabel())!=null?t:"";t=c;t=t.getType()===
6||t.getType()===1?Lf(t,9,pq)?Lf(t,9,pq):t.getUrl():void 0;var v=iqa(a,c),y=e;c=c.getLabel();h.call(f,"div","class","action-button",new Go({text:k,href:t,trigger:v,icon:l,Sp:p,wc:r,ct:!0,target:e?1:0,style:11,padding:"0.625rem 1rem",vd:"link",ariaLabel:c?y?c+", opens in new tab.":c:""}))}}})}
function iqa(a,b){switch(b.getType()){case 3:var c,e,f=(e=(c=Of(b,nq,7,pq))==null?void 0:Df(c,1))!=null?e:"";return a.Oa.experienceType===1?function(){a.Oa.ma();Sv(a);var h=a.Oa.Ne||a.Oa.Hf,k=a.o,l=Rr(a.Oa);if(a.Oa.Xr){var p=a.Oa;var r=p.getTitle();p=p.getDescription();r=r&&p?"<p><strong>"+r+"</strong></p>\n<p>"+p+"</p>":r?"<p><strong>"+r+"</strong></p>":p?"<p>"+p+"</p>":""}else r=void 0;p=a.Yh;if(a.Oa.Xr){var t=new Dp;var v=(new Ov).setTitle(a.Oa.getTitle());var y=a.Oa.getDescription();v=ag(v,2,
y);v=ag(v,3,f);t=hh(t,cqa,v)}else t=void 0;hr(f,h,k,2,void 0,l,void 0,r,!0,p,t)}:function(){a.Oa.ma();
Sv(a);Kka({kf:"genieSkillEntryButtonId",entryPoint:1},a.Oa.Ne||a.Oa.Hf,{Ql:!0,sessionConfigId:a.o,genieSessionId:Rr(a.Oa),Yh:a.Yh,message:f})};
case 2:return function(){a.Oa.ma();Sv(a);if(Ge(b,nq,7,pq)){var h=Of(b,nq,7,pq);h=Df(h,3);Kka({kf:h,entryPoint:1},a.Oa.Ne||a.Oa.Hf,{Ql:!0,sessionConfigId:a.o,genieSessionId:Rr(a.Oa),Yh:a.Yh})}};
case 4:return function(){var h={entryPoint:"help_center"},k;a:{switch((k=Of(b,mq,11,pq))==null?void 0:Ef(k,1)){case 1:k="troubleshoot_enhanced_conversions";break a}k=void 0}k&&(h.purpose=k);var l;(l=a.ma)==null||Kia(l,h);a.Oa.ma();Sv(a)};
case 7:return function(){var h;(h=a.oa)!=null&&(h.extensionId?h.extensionId&&aqa(h,h.extensionId,{type:"OPEN_SIDE_PANEL"}):Gl(h.window,ul("https://support.google.com/embed/ads/chat/install?utm=hcgenie"),"_blank"));a.Oa.ma();Sv(a)};
default:return function(){a.Oa.ma();Sv(a)}}}
function Sv(a){Pr({action:35,Oa:a.Oa,viewType:a.Mi.Qd})}
function Rv(a){switch(a){case 1:a=dqa.get(z().hc);if(Em()){var b;return(b=a==null?void 0:a.concat("_dark"))!=null?b:void 0}return a;case 2:return"gm/arrow_forward";case 3:return"gm/chat_spark";case 4:return"gm/calendar_month";case 5:return"gm/smart_assistant"}}
function fqa(a){a.element("div","class","chat-button",new Go({text:"Chat to learn more",style:11,trigger:function(){Pr({action:22,Oa:a.Oa,actionId:"genieChatToLearnMore",viewType:a.Mi.Qd});hr("",a.Oa.Ne||a.Oa.Hf,z().hc+"-genie_cta",1,"genieChatToLearnMore",Rr(a.Oa))}}))}
;function Tv(a){var b=a.Fl;a=a.policyData;A.call(this,"sc.discovery.genie.v2.Card");var c=this;this.o=new ds({borderRadius:"1rem",padding:"0.75rem 1rem",ll:!1,backgroundColor:5,content:function(){jqa(c)}});
this.policyData=a;this.Fl=b;this.watch(this.Fl)}
u(Tv,A);Tv.prototype.content=function(){this.element("div","class","root",this.o)};
function jqa(a){a.element("div","class","card-root",function(){kqa(a,a.policyData.Qc());a.element("div","class","content",function(){a.element("div","class","content-title",function(){var c=a.policyData.getTitle();c&&a.element("div","class","title",c);(c=Df(a.policyData,5))&&a.element("div","class","sub-title",c)});
var b=a.element("div","class","content-items",function(){var c,e=((c=jf(a.policyData,Aq,2))==null?void 0:lf(c,zq,1,Oe()))||[];c=w(e);for(e=c.next();!e.done;e=c.next())e=e.value,e=e.getValue()?e.getKey()+": "+e.getValue():e.getKey(),a.element("div","class","content-item",e)});
lqa(a.Fl,b.offsetHeight);a.Fl.Ml!==0&&(b.style.height=a.Fl.Ml+"px")});
a.element("div","class","context",function(){var b=Vca(a.policyData,yq,4);b&&a.element("div","class",{label:!0,review:b.getStatus()===1,closed:b.getStatus()===2},b.getText())})})}
function kqa(a,b){a:{switch(b){case 4:b="gm/critical";break;case 5:b="gm/appeal_review";break;case 6:b="gm/appeal_closed";break;default:b="";break a}b=Em()?b+"_dark":b}b&&a.element("div","class","icon",new Co({icon:b,size:44}))}
;function mqa(a){a=a.Ml;xo.call(this);this.Ml=a}
u(mqa,xo);function lqa(a,b){var c=a.Ml!==0&&a.Ml<b;a.Ml=Math.max(a.Ml,b);c&&a.Da()}
;function Uv(a){a=a.IF;A.call(this,"sc.discovery.genie.v2.CardList");this.IF=a;this.Fl=new mqa({Ml:0})}
u(Uv,A);Uv.prototype.content=function(){var a=this;this.element("div","class","root",function(){for(var b=w(a.IF),c=b.next();!c.done;c=b.next())a.element("div","class","card",new Tv({Fl:a.Fl,policyData:c.value}))})};function Vv(a){var b=a.contentData;a=a.Oa;A.call(this,"sc.discovery.genie.Content");this.contentData=b;this.Oa=a}
u(Vv,A);Vv.prototype.content=function(){var a=this,b=Sr(this.contentData.getDescription());this.element("div","class",{root:!0,redesign:this.Oa.wd},function(){a.element("div","class",{description:!0,"description-basic":a.Oa.experienceType===1},b)})};var Wv=new Ul;function Xv(a){a=a.disclaimerData;A.call(this,"sc.discovery.genie.Disclaimer");this.disclaimerData=a}
u(Xv,A);
Xv.prototype.content=function(){var a=this.element;if(this.disclaimerData)var b=Sr(Df(this.disclaimerData,1));else b=(z().hc==="adwords_policy_center"?"Summaries are for convenience and may have inaccuracies. Refer to the full policy below for complete information.":"This product may show inaccurate or offensive information.")+" "+Vl(Wv,"a",{href:"https://policies.google.com/terms?hl="+z().lang,"class":"scDiscoveryGenieDisclaimerlink",target:"_blank"})+"Terms"+Xl(Wv,"a")+".",b=Wv.format(b);a.call(this,
"div","class","root",b)};function nqa(a){var b=a.timeout===void 0?1E4:a.timeout;var c=a.Tr===void 0?function(){}:a.Tr;
a=a.onError===void 0?function(){}:a.onError;
this.state=0;this.o=null;this.timeout=b;this.Tr=c;this.onError=a}
n=nqa.prototype;n.load=function(){var a=this;this.state===0&&(this.state=1,this.clearTimeout(),this.o=setTimeout(function(){a.error()},this.timeout))};
n.complete=function(){this.state===1&&(this.state=2,this.clearTimeout(),this.Tr())};
n.error=function(){this.state===1&&(this.state=3,this.clearTimeout(),this.onError())};
n.reset=function(){this.clearTimeout();this.state=0};
n.getState=function(){return this.state};
n.clearTimeout=function(){this.o!==null&&clearTimeout(this.o);this.o=null};function Yv(a,b,c){return a.find(function(e){return Ef(e,1)===b&&Df(e,2)===c})}
function Zv(a,b){b=oqa(a,b);var c,e;return b!==void 0&&((e=(c=Yv(a,1,"SuspendedCustomerId"))==null?void 0:Pk(c))!=null?e:[]).map(function(f){return Number(Nk(f))}).includes(b)}
function oqa(a,b){var c,e,f=((e=(c=Yv(a,210,"ExtCidArrayWithMccAndChildAccounts"))==null?void 0:Pk(c))!=null?e:[]).map(function(p){return Number(Nk(p))}).indexOf(b),h,k,l;
return f>=0?Number((k=((l=(h=Yv(a,210,"CidArrayWithMccAndChildAccounts"))==null?void 0:Pk(h))!=null?l:[])[f])==null?void 0:Nk(k)):void 0}
;var $v={ISSUE_TYPE_UNSPECIFIED:0,POLICY_DESTINATION_NOT_WORKING:1,POLICY_ADVERTISER_IDENTITY_VERIFICATION:2,BILLING_BAD_PRIMARY_INSTRUMENT:3,BILLING_PAYMENT_NOT_ENTERED:4,BILLING_PREPAY_BALANCE_LOW:5,BILLING_PREPAY_BALANCE_EXHAUSTED:6,BILLING_OVERDUE_PAYMENT:7,CID_IDENTIFICATION:8,TAG_ASSISTANT_COMPANION_DOWNLOAD:9,TAG_ASSISTANT_COMPANION_OPEN:10,TAG_ASSISTANT_COMPANION_ENHANCED_CONVERSIONS_DOWNLOAD:148,TAG_ASSISTANT_COMPANION_ENHANCED_CONVERSIONS_OPEN:149,TAG_DIAGNOSTIC_GENERAL:76,ACCOUNT_SUSPENSION:11,
ACCOUNT_SUSPENSION_NO_APPEAL_SINGLE_ABUSE_TAG:17,ACCOUNT_SUSPENSION_NO_APPEAL_MULTI_ABUSE_TAG:18,ACCOUNT_SUSPENSION_OPEN_APPEAL_SINGLE_ABUSE_TAG:19,ACCOUNT_SUSPENSION_OPEN_APPEAL_MULTI_ABUSE_TAG:20,ACCOUNT_SUSPENSION_CLOSED_APPEAL:21,ACCOUNT_SUSPENSION_HIJACKED_ACCOUNT:22,ACCOUNT_SUSPENSION_AIV_BOV_FAILED:23,POLICY_DESTINATION_NOT_WORKING_FALLBACK:24,POLICY_ADVERTISER_IDENTITY_VERIFICATION_V2_CASE2_1:25,POLICY_ADVERTISER_IDENTITY_VERIFICATION_V2_CASE3:26,POLICY_ADVERTISER_IDENTITY_VERIFICATION_V2_CASE3_1:44,
POLICY_ADVERTISER_IDENTITY_VERIFICATION_V2_CASE4:27,POLICY_ADVERTISER_IDENTITY_VERIFICATION_V2_CASE4_2:39,POLICY_ADVERTISER_IDENTITY_VERIFICATION_V2_CASE5:28,POLICY_ADVERTISER_IDENTITY_VERIFICATION_V2_CASE6:29,POLICY_ADVERTISER_IDENTITY_VERIFICATION_V2_CASE7:30,POLICY_ADVERTISER_IDENTITY_VERIFICATION_V2_CASE8:31,POLICY_ADVERTISER_IDENTITY_VERIFICATION_V2_CASE8_1:32,POLICY_ADVERTISER_IDENTITY_VERIFICATION_V2_CASE9:33,POLICY_ADVERTISER_IDENTITY_VERIFICATION_V2_CASE10_1:34,POLICY_MALWARE:35,POLICY_MALWARE_V2:46,
POLICY_MALWARE_V2_FALLBACK:86,DESTINATION_NOT_WORKING_V2:36,DESTINATION_NOT_WORKING_V3:67,DESTINATION_NOT_WORKING_V3_APPEALABLE_URLS:68,DESTINATION_NOT_WORKING_V3_ERRORS:69,DESTINATION_NOT_WORKING_V3_MULTI_CID:70,DESTINATION_NOT_WORKING_HTTPS_ERROR:37,DESTINATION_NOT_WORKING_APPEALABLE_CRAWL:38,SERVICE_RECOMMENDATIONS_CONVERSION_TRACKING:40,SERVICE_RECOMMENDATIONS_ENHANCED_CONVERSION_TRACKING:41,SUPPORT_HUB_SWITCH_ACCOUNT:42,SUPPORT_HUB_ADS_SIGN_UP:43,PIXEL_ISSUE:45,PIXEL_8_REPAIR_CENTER:47,PIXEL_8_REPAIR_PARTNER_HC:48,
PIXEL_8_POP:49,PIXEL_8_SERVICE_CENTER:50,PIXEL_5_HC:51,PIXEL_7_EAWF:52,PIXEL_4_EAWF:53,PIXEL_ANY_REPAIR_HISTORY:54,PIXEL_ANY_WARRANTY_HELPER:55,PIXEL_ANY_SERVICE_CENTER:56,ISSUE_TYPE_DEMO:57,SHOPIFY_MIGRATION_APP_DOWNLOAD:58,ADS_PLATFORM_DOCUMENTS_HAS_ACCOUNT_AND_DOCUMENT_ACCESS:61,ADS_PLATFORM_DOCUMENTS_HAS_ACCOUNT_BUT_NO_DOCUMENT_ACCESS:62,ADS_PLATFORM_DOCUMENTS_MONTHLY_INVOICING_MCC_ADMIN:72,ADS_PLATFORM_DOCUMENTS_MONTHLY_INVOICING_MCC_READONLY:73,ADS_PLATFORM_DOCUMENTS_MONTHLY_INVOICING_NON_MCC:74,
ADS_PLATFORM_DOCUMENTS:60,SELLER_MODULE:63,SHOPIFY_MIGRATION_BOOK_APPOINTMENT:64,CUSTOMER_MATCH:66,GENIE_BASIC:71,AUDIENCE_INCENTIVE_DSA_ELIGIBLE:75,AUDIENCE_INCENTIVE_MAXAPI:77,PIXEL_REPAIR_IN_WARRANTY:78,PIXEL_8_REPAIR_CENTER_AU:79,PIXEL_RETURN_B2C:80,PIXEL_RETURN_B2B:81,PIXEL_6A_EAWF:82,DFA_SHOPIFY_GCS_UNMANAGED:83,DFA_SHOPIFY_LCS:84,PIXEL_CRACKED_SCREEN_GSURF:85,DFA_ENHANCED_CONVERSION_FOR_LEADS_GCS:87,DFA_ENHANCED_CONVERSION_FOR_LEADS_GCS_UNMANAGED:88,DFA_ENHANCED_CONVERSION_FOR_LEADS_LCS:89,
TASK_ADD_CONVERSION_TRACKING:90,TASK_ADD_NEW_ASSET:91,TASK_ADD_NEW_DEMAND_GEN_CAMPAIGN:92,TASK_ADD_NEW_DISPLAY_CAMPAIGN:93,TASK_ADD_NEW_KEYWORD:94,TASK_ADD_NEW_LOCAL_CAMPAIGN:95,TASK_ADD_NEW_PMAX_CAMPAIGN:96,TASK_ADD_NEW_SEARCH_CAMPAIGN:97,TASK_ADD_NEW_SHOPPING_CAMPAIGN:98,TASK_ADD_NEW_VIDEO_CAMPAIGN:99,TASK_ACCOUNT_DISABLED:100,TASK_CAMPAIGN_DISABLED:101,TASK_CUSTOMER_IS_FRAUDSTER:102,TASK_EXTEND_CAMPAIGN_END_DATE:103,TASK_CREATIVE_DISAPPROVED:104,TASK_CREATIVE_DISAPPROVED_DESTINATION_NOT_WORKING:105,
TASK_CREATIVE_DISAPPROVED_COMPROMISED_SITE:106,TASK_CREATIVE_DISAPPROVED_DESTINATION_MISMATCH:107,TASK_CREATIVE_DISAPPROVED_MISLEADING_CONTENT:108,TASK_CREATIVE_DISAPPROVED_CIRCUMVENTING_SYSTEMS:109,TASK_CREATIVE_DISAPPROVED_CLICKBAIT:110,TASK_CREATIVE_DISAPPROVED_UNAVAILABLE_VIDEO:111,TASK_CREATIVE_DISAPPROVED_HEALTH_IN_PERSONALIZED_ADS:112,TASK_CREATIVE_DISAPPROVED_MALICIOUS_SOFTWARE:113,TASK_CREATIVE_DISAPPROVED_ONE_WEBSITE_PER_AD_GROUP:114,TASK_CREATIVE_DISAPPROVED_CAPITALIZATION:115,TASK_CREATIVE_DISAPPROVED_SYMBOLS:116,
TASK_CREATIVE_DISAPPROVED_STALE_DISAPPROVAL:117,TASK_CREATIVE_DISAPPROVED_YOUTUBE_AD_REQUIREMENTS_IMPROPER_CONTENT:118,TASK_CREATIVE_DISAPPROVED_UNVERIFIED_PHONE_NUMBER:119,BUSINESS_UPDATE_BUSINESS_INFO:120,TASK_ACCOUNT_DISABLED_CHARGEBACK_REQUESTED:121,TASK_ACCOUNT_DISABLED_SANCTIONED_COUNTRY:122,TASK_ACCOUNT_DISABLED_UNPAID_BALANCE:123,TASK_ACCOUNT_DISABLED_PAYMENT_CANCELLATION:124,TASK_ACCOUNT_DISABLED_UNAUTHORIZED_PHARMACIES:125,TASK_ACCOUNT_DISABLED_COUNTERFEIT:126,TASK_ACCOUNT_DISABLED_CIRCUMVENTING_SYSTEMS:127,
TASK_ACCOUNT_DISABLED_HIJACKED_ACCOUNT:128,TASK_ACCOUNT_DISABLED_UNACCEPTABLE_BUSINESS_PRACTICES:129,TASK_ACCOUNT_DISABLED_UNFAIR_ADVANTAGE:130,TASK_ACCOUNT_DISABLED_IDENTITY_VERIFICATION_INCOMPLETE_SUSPENSION:131,TASK_ACCOUNT_DISABLED_GOOGLE_GRANT:132,TASK_ACCOUNT_DISABLED_IDENTITY_VERIFICATION_INCOMPLETE_PAUSE:133,TASK_ACCOUNT_DISABLED_CANCELLED:134,TASK_ACCOUNT_DISABLED_CLOSED:135,TASK_ACCOUNT_DISABLED_SUSPICIOUS_PAYMENT_ACTIVITY:136,TASK_CAMPAIGN_DISABLED_VIDEO_QUALITY:137,TASK_CAMPAIGN_DISABLED_IMAGE_QUALITY:138,
TASK_CAMPAIGN_DISABLED_PHONE_NUMBER_IN_AD_TEXT:139,TASK_CAMPAIGN_DISABLED_UNACCEPTABLE_SPACING:140,TASK_CAMPAIGN_DISABLED_BUSINESS_NAME_REQUIREMENTS:141,TASK_CAMPAIGN_DISABLED_CAPITALIZATION:142,TASK_CAMPAIGN_DISABLED_REPETITION:143,TASK_CAMPAIGN_DISABLED_STYLE_AND_SPELLING:144,TASK_CAMPAIGN_DISABLED_SYMBOLS:145,TASK_CAMPAIGN_DISABLED_UNIDENTIFIED_BUSINESS:146,TASK_CAMPAIGN_DISABLED_MISUSE_OF_AD_FEATURES:147,MARKETING_ADVISOR:150,PIXEL_US_CARRIER_ACTIVATION:151,SHOPPING_MC_X_SBA:152,PLAY_REFUND_STATUS:153,
BUSINESS_ISSUE:154,PLAY_ISSUE:155,SMART_JOURNEYS_ISSUE:156,MARKETING_ADVISOR_OPEN:157,BILLING_ISSUE:158,PLAY_UNAUTHORIZED_CHARGES:159,PLAY_BOUGHT_BY_MISTAKE:160,PLAY_IWTB_ISSUER_DECLINE:161,PLAY_IWTB_CHOOSE_DIFFERENT_FOP:162,PLAY_IWTB_FOLLOW_FIX_URL:163,PLAY_IWTB_SECURE_USER_ACCOUNT:164,PLAY_IWTB_RISK_CONSULT_REQUIRED:165,DFA_DISPLAY_DYNAMIC_REMARKETING_TAGS_GCS:166};function pqa(a){a=w(qqa(a));for(var b=a.next();!b.done;b=a.next())switch(b.value){case 7:return 7;case 6:return 6;case 5:return 5}return 0}
function aw(a,b){var c;return(c=qqa(a).filter(function(e){return e===b}).find(function(e){return e===3||e===4}))!=null?c:0}
function qqa(a){return a.filter(function(b){return Df(b,2)==="NotificationTypes"&&Ef(b,1)===389}).map(function(b){return Pk(b)}).flatMap(function(b){return b.map(function(c){return Df(c,1)})}).map(function(b){return rqa(b)}).filter(function(b){return b!==0})}
function rqa(a){switch(a){case "PAYMENTS_BUYER_OVERDUE_PAYMENT":return 7;case "PAYMENTS_BAD_PRIMARY_INSTRUMENT":return 3;case "ALERTENGINE_PAYMENT_NOT_ENTERED":return 4;case "ADS_BILLING_CUSTOMER_PREPAY_BALANCE_LOW":return 5;case "ADS_BILLING_CUSTOMER_PREPAY_BALANCE_EXHAUSTED":return 6;default:return 0}}
function bw(a){a?(a=a.split(";")[0].trim(),a=$v[a]||0):a=0;return a}
function cw(a,b){return!!b&&b.split(";").map(function(c){return $v[c]}).includes(a)}
function dw(a,b){for(var c=w([{type:3,JD:function(){return aw(a,3)}},
{type:4,JD:function(){return aw(a,4)}},
{type:"BILLING_PAYMENT_REQUIRED",JD:function(){return pqa(a)}}]),e=c.next();!e.done;e=c.next()){var f=e.value;
e=f.type;f=f.JD;f=f();var h=void 0;if((typeof e==="string"?(h=b)==null?0:h.split(";").includes(e):cw(e,b))&&f!==0)return f}return 0}
function ew(a,b,c,e){var f=[];if(!a)return f;for(var h=!1,k=w(a.split(";")),l=k.next();!l.done;l=k.next())switch(l=l.value,l){case "DESTINATION_NOT_WORKING_V3":e?Zv(b,c)||f.push(67):f.push(67);break;case "POLICY_MALWARE":e?Zv(b,c)||f.push(35):f.push(35);break;case "BILLING_BAD_PRIMARY_INSTRUMENT":case "BILLING_PAYMENT_NOT_ENTERED":case "BILLING_PAYMENT_REQUIRED":h||(h=dw(b,a),h!==0&&f.push(h),h=!0);break;default:var p=$v[l];p&&p!==0&&f.push($v[l])}return f}
;var sqa=["https://support.google.com/google-ads/workflow/14159772","https://support.google.com/google-ads/workflow/14282534","https://support.google.com/google-ads/workflow/15498105"];function fw(a){a=Error.call(this,a);this.message=a.message;"stack"in a&&(this.stack=a.stack)}
u(fw,Error);var tqa=new Set([9,148,10,149,45,155,154,42,43,60,76,75,77]);
function gw(a){var b=a.experienceType;var c=a.issueType;var e=a.customerContext;var f=a.article;var h=a.enableBoqFeedbackModule===void 0?!1:a.enableBoqFeedbackModule;var k=a.hideGenieFeedbackModule===void 0?!0:a.hideGenieFeedbackModule;var l=a.Xr===void 0?!1:a.Xr;var p=a.Ut===void 0?!1:a.Ut;var r=a.Jo===void 0?!1:a.Jo;var t=a.Vt===void 0?!1:a.Vt;var v=a.wd===void 0?!1:a.wd;var y=a.externalCid===void 0?void 0:a.externalCid;var E=a.symptom===void 0?void 0:a.symptom;var oa=a.Rq===void 0?void 0:a.Rq;
var ra=a.requestSource===void 0?void 0:a.requestSource;var Aa=a.Ts===void 0?void 0:a.Ts;var Ba=a.Nz===void 0?void 0:a.Nz;var Ha=a.Oz===void 0?void 0:a.Oz;var Na=a.qA===void 0?!1:a.qA;var Va=a.Ne===void 0?!1:a.Ne;var cb=a.Hf===void 0?!1:a.Hf;var sb=a.Ox===void 0?!1:a.Ox;var Cb=a.vu===void 0?void 0:a.vu;var $b=a.Ho===void 0?!1:a.Ho;var Mb=a.Oe===void 0?!1:a.Oe;var rb=a.Jv===void 0?void 0:a.Jv;var vb=a.Xj===void 0?!1:a.Xj;a=a.Wj===void 0?!1:a.Wj;xo.call(this);this.qa=this.oa=0;this.Ra=(new em).build();
this.Ma=new DOMParser;this.Ca=this.Qd="none";this.La=this.ya=null;this.Ia=!1;this.sveType=262;this.yq=[];this.ma=function(){};
this.experienceType=b;this.issueType=c;this.customerContext=e;this.article=f;this.enableBoqFeedbackModule=h;this.hideGenieFeedbackModule=k;this.Xr=l;this.Ut=p;this.Jo=r;this.Vt=t;this.wd=v;this.descriptiveName="";this.symptom=E;this.Rq=oa;this.requestSource=ra;this.Ts=Aa;this.Nz=Ba;this.Oz=Ha;this.qA=Na;this.Ne=Va;this.Hf=cb;this.Ox=sb;this.vu=Cb;this.articleMetadata=tka(f);this.Ho=$b;this.Oe=Mb;this.Jv=rb;this.Xj=vb;this.Wj=a;this.yq=uka(e);b=vka({mA:this.mA(),customerContext:e,yq:this.yq,externalCid:y});
this.cid=b.cid;this.externalCid=b.Mo;this.descriptiveName=b.descriptiveName;this.extCidCount=this.yq.length;if(c===2&&hw(this)||c===76)this.va=uqa(this)}
u(gw,xo);
function iw(a){var b,c,e,f,h,k,l;return Ra(function(p){if(p.o==1){if(a.oa===1)return p.return();a.genieData=void 0;jw(a,1);if(a.experienceType===3)return jw(a,2),p.return();Ja(p,2);if(!a.cid&&!tqa.has(a.issueType))throw new fw("No cid found");b=vqa(a,a.cid,a.descriptiveName);if(a.experienceType===4)for(c=w(bla(jf(b,Hr,4))),e=c.next();!e.done;e=c.next())f=e.value,wqa(a,f);else wqa(a,a.issueType);return p.yield(Qq(b,{zA:!0}),4)}if(p.o!=2){h=p.ma;a.genieData=lf(h,Cq,3,Oe(Sc));a.metadata=h.getMetaData();a.zf=
[].concat(ya(lf(h,lq,5,Oe())));if(a.genieData.length===0)throw new fw("No Genie data received");a.issueType!==2&&a.issueType!==76||!hw(a)||(a.ua=xqa(a.genieData));a.o=a.genieData[0];a.genieData.forEach(function(r){var t,v,y,E=(t=Dq(r))==null?void 0:rq(t);t=((v=Eq(r))==null?0:hg(v,1))?(y=Eq(r))==null?void 0:Df(y,1):String(a.cid);if(E)for(v=w(E),y=v.next();!y.done;y=v.next())y=y.value,y.getType()===1&&y.getUrl()&&(E=y.getUrl(),E.includes("ads.google.com")&&y.setUrl(Mo(E,new Map([["ocid",t]]),!0)),sqa.includes(E)&&
y.setUrl(E+"?initial_parameters=ocid."+t));var oa;r=(oa=Dq(r))==null?void 0:rq(oa);oa=z().au;if(r&&oa!=="")for(r=w(r),t=r.next();!t.done;t=r.next())t=t.value,t.getType()===1&&t.getUrl()&&(v=t.getUrl(),v.includes("tagmanager.google.com")&&t.setUrl(Mo(v,new Map([["authuser",oa]]),!0)))});
jw(a,2);return Ka(p,0)}k=La(p);l=k instanceof fw?k.message:"No Genie response received: "+k;kp(21,yqa({isError:!0,experienceType:a.experienceType,issueType:a.issueType,sessionId:Rr(a),errorMessage:l}),a.sveType);z()&&z().env!=="PROD"&&console.error("error while loading refined intent data: "+l,k);a.genieData=void 0;jw(a,3);Ia(p)})}
function cla(a){var b;return(b=a.o)==null?void 0:Ef(b,7)}
function Rr(a){var b,c;return(c=(b=a.metadata)==null?void 0:Df(b,1))!=null?c:""}
function zqa(a){var b,c;return(c=(b=a.metadata)==null?void 0:yf(b,2))!=null?c:!1}
gw.prototype.Mf=function(a){this.metadata=a};
function kw(a,b){a.qa=b;a.Da(1)}
gw.prototype.getTitle=function(){var a;return this.o?Aqa(this,(a=jf(this.o,xq,1))==null?void 0:a.getTitle()):""};
gw.prototype.getDescription=function(){var a;return this.o?Aqa(this,(a=jf(this.o,sq,2))==null?void 0:a.getDescription()):""};
function gqa(a){var b,c;((b=a.o)==null?0:(c=Eq(b))==null?0:hg(c,1))?(a=Eq(a.o),a=Df(a,1)):a=a.cid===void 0?"":String(a.cid);return a}
function Qv(a){var b,c;return((b=a.o)==null?0:(c=Eq(b))==null?0:hg(c,2))?uq(Eq(a.o)):a.externalCid===void 0?"":String(a.externalCid)}
function Qr(a){var b,c,e,f;return(f=(b=a.o)==null?void 0:(c=Dq(b))==null?void 0:(e=rq(c)[0])==null?void 0:e.getType())!=null?f:0}
function lw(a){if(a.ya)if(a.experienceType===3)mw(a,"none");else{switch(a.oa){case 1:var b="loading";break;case 2:if(a.Ia||a.wd)b="expanded";else{var c=a.ya.getBoundingClientRect().top,e,f;b=((f=(e=a.La)==null?void 0:e.getBoundingClientRect().bottom)!=null?f:0)>c?a.experienceType===2?"collapsed":"none":"expanded"}break;default:b="none"}mw(a,b)}else mw(a,"none")}
function hw(a){var b;return a.Vt||((b=z())==null?void 0:b.env)==="TEST"}
function Bqa(a){return hw(a)&&!!a.ua&&a.ua.length>1}
function Cqa(a){var b;return(b=a.ua)!=null?b:[]}
function Dqa(a,b){if(uq(b)){var c;a.o=(c=a.genieData)==null?void 0:c.find(function(e){var f;return((f=Eq(e))==null?void 0:uq(f))===uq(b)});
a.Da(3)}}
function Eqa(a){return a.wd&&a.Ne&&!!a.zf}
function hqa(a){return!(zqa(a)&&Eqa(a))}
function mw(a,b){b!==a.Qd&&(a.Ca=a.Qd,a.Qd=b,a.Da(2))}
function vqa(a,b,c){var e=a.Ne;a.experienceType!==6||a.Xj||(e=!1);e=hq(Oq(),(new fq).setEnabled(e));switch(a.experienceType){case 2:if(a.externalCid===void 0&&a.issueType===8)throw new fw("No external cid found");var f;var h=Kr(Jr(Lr(Ir(new Hr,a.externalCid===void 0?"":String(a.externalCid)),a.extCidCount),c),a.experienceType);h=dg(h,2,a.issueType);h=Mr(h,(f=a.va)!=null?f:[]);b!==void 0&&Ze(h,1,Sd,String(b),void 0,Ud);a.requestSource&&dg(h,9,a.requestSource);nf(e,eq,5,a.articleMetadata);return Vs(Us(Ts(Ss(e),
3),h),Pq(a.symptom,a.Rq));case 4:if(a.externalCid===void 0)throw new fw("No external cid found");var k;h=Kr(Jr(Lr(Ir(new Hr,String(a.externalCid)),a.extCidCount),c),a.experienceType);f=ew(a.Ts,Rk(a.customerContext),a.externalCid,!a.Ho);h=Ye(h,10,vd,f,xd);h=Mr(h,(k=a.va)!=null?k:[]);b!==void 0&&Ze(h,1,Sd,String(b),void 0,Ud);a.requestSource&&dg(h,9,a.requestSource);return Vs(Us(Ts(Ss(e),3),h),Pq(a.symptom,a.Rq));case 1:if(a.externalCid===void 0)throw new fw("No external cid found");if(!a.article.getContent())throw new fw("No article content found");
nf(e,eq,5,a.articleMetadata);a=Kr(Lr(Ir(new Hr,String(a.externalCid)),a.extCidCount),a.experienceType);b!==void 0&&Ze(a,1,Sd,String(b),void 0,Ud);return Vs(Us(Ts(Ss(e),3),a),Pq());case 5:case 6:if(a.externalCid===void 0)throw new fw("No external cid found");k=Kr(Jr(Lr(Ir(new Hr,a.externalCid===void 0?"":String(a.externalCid)),a.extCidCount),c),a.experienceType);f=ew(a.Nz,Rk(a.customerContext),a.externalCid,!a.Ho);k=Ye(k,10,vd,f,xd);f=ew(a.Oz,Rk(a.customerContext),a.externalCid,!a.Ho);k=Ye(k,11,vd,
f,xd);k=Xf(k,12,a.qA);k=Mr(k,(h=a.va)!=null?h:[]);b!==void 0&&Ze(k,1,Sd,String(b),void 0,Ud);a.requestSource&&dg(k,9,a.requestSource);nf(e,eq,5,a.articleMetadata);return Vs(Us(Ts(Ss(e),3),k),Pq(a.symptom,a.Rq));default:throw new fw("Unsupported experience type");}}
function jw(a,b){b!==0&&(a.oa=b,a.Da(0),lw(a))}
function uqa(a){var b=[];b.push.apply(b,ya(a.yq.map(function(c){var e=new tq;e=ag(e,1,String(c.cid));return ag(e,2,String(c.Mo))})));
return b}
function xqa(a){return a.filter(function(b){return Ee(b,tq,6)}).map(function(b){return Eq(b)})}
function yqa(a){var b=a.experienceType;var c=a.issueType;var e=a.sessionId;var f=a.viewType;var h=a.isError;a=a.errorMessage;return h?b===1?JSON.stringify({experienceType:b,errorMessage:a,sessionId:e}):JSON.stringify({experienceType:b,issueType:c,errorMessage:a,sessionId:e}):b===1?JSON.stringify({experienceType:b,sessionId:e,viewType:f}):JSON.stringify({experienceType:b,issueType:c,sessionId:e,viewType:f})}
gw.prototype.mA=function(){var a=z();return(a==null?void 0:a.env)!=="PROD"&&(a==null?void 0:a.hc)==="support_content_dev"&&(a==null?void 0:a.pid)==="10693991"};
function Aqa(a,b){if(!b)return"";var c,e=a.Ma;a=a.Ra.Wd(b);return(c=e.parseFromString(Cl(a),"text/html").body.textContent)!=null?c:""}
function wqa(a,b){kp(32,yqa({isError:!1,experienceType:a.experienceType,issueType:b,sessionId:Rr(a),viewType:a.Qd}),a.sveType)}
;function nw(a){a=a.Oa;var b,c=Pp(Op(Np(Mp(new Lp,z().lang),(b=z().support_journey_id)!=null?b:""),z().visit_id),z().mendel_ids),e;yp.call(this,c,c,{authUser:z().au,isDarkMode:z().dark,wr:(e=z().genie_iframe_origin)!=null?e:"https://support.google.com",UT:!0,xv:function(h){switch(h.action){case "thumbUp":Pr({action:10,Oa:f.Oa});break;case "thumbDown":Pr({action:11,Oa:f.Oa});break;case "feedbackInitialized":f.ua.complete()}}});
var f=this;this.ya=this.Tr.bind(this);this.Ca=this.onError.bind(this);this.ua=new nqa({timeout:3E3,Tr:this.ya,onError:this.Ca});this.ma="embedOptions";this.oa="genieUiMessageChannel";this.Oa=a}
u(nw,yp);n=nw.prototype;n.rB=function(a){var b=this;return Ra(function(c){b.ua.reset();b.ua.load();kp(20,"wizFeedbackButton",262);kw(b.Oa,1);b.qa.promise.then(function(){kp(47,"wizFeedbackButton",262)});
return c.return(yp.prototype.rB.call(b,a))})};
n.HD=function(){return"embed/genie"};
n.hA=function(a){yp.prototype.hA.call(this,a);a.style.height="3rem";a.style.visibility="hidden"};
n.Tr=function(){kp(15,"wizFeedbackButton",262);kw(this.Oa,2);this.o&&(this.o.style.visibility="visible")};
n.onError=function(){kp(21,"wizFeedbackButton",262);kw(this.Oa,3)};function ow(a){a=a.Oa;A.call(this,"sc.discovery.genie.FeedbackButton");var b=this;this.va=new Go;this.qa=new Go;this.ya=so();this.o=this.ma=!1;this.Oa=a;this.Oa.onChange(1,function(){b.Oa.qa===3&&b.Ja()});
this.Ca=new nw({Oa:a})}
u(ow,A);ow.prototype.content=function(){var a=this;this.element("div","class",{root:!0,"boq-wiz":pw(this),rce:!pw(this)},function(){if(pw(a)){var b=a.rj("div",a.ya,"class","boq-wiz-container","");a.oa!==b&&(a.oa=b,a.Ca.initialize(a.oa))}else Fqa(a)})};
function Fqa(a){a.element("span","class","label","aria-live","polite",a.jh());a.element("div","class","buttons",function(){a.va.render({icon:"gm/thumb_up_alt",Jf:20,Ib:a.ma?0:"color-label",trigger:function(){a.ma=!a.ma;a.o=!1;a.Ja();Pr({action:10,Oa:a.Oa})},
ariaLabel:"Helpful",vd:"button"});a.qa.render({icon:"gm/thumb_down_alt",Jf:20,Ib:a.o?0:"color-label",trigger:function(){a.o=!a.o;a.ma=!1;a.Ja();Pr({action:11,Oa:a.Oa})},
ariaLabel:"Unhelpful",vd:"button"})})}
ow.prototype.jh=function(){return this.o?"Thanks for your feedback!":this.ma?"Thanks for your feedback! \ud83c\udf89":"Helpful?"};
function pw(a){return a.Oa.enableBoqFeedbackModule&&a.Oa.qa!==3}
;function qw(a){var b=a.accounts;var c=a.Ym;var e=a.fF;a=a.onOpen;A.call(this,"sc.discovery.genie.v2.Identifier.CidSelector");var f=this;this.accounts=b;this.Ym=c;this.fF=e;this.onOpen=a;b=this.oi();var h;this.menu=new ct({items:b,Fs:(h=b.find(function(k){return k.Ve===uq(f.Ym)}))==null?void 0:h.value,
Dt:!1,width:360,maxHeight:"16rem",rc:3,tc:4,onClose:function(){f.o.iA("gm/arrow_drop_down")}});
this.o=new Go({text:Gqa(this),icon:"gm/google_ads_logo",Sp:"gm/arrow_drop_down",trigger:function(){return void f.open()},
padding:"0.25rem 0.75rem"})}
u(qw,A);qw.prototype.content=function(){var a=this;this.element("div","class","root",function(){a.element("div","class","trigger",a.o);a.menu.render()})};
qw.prototype.oi=function(){var a=this;return[{value:"Accounts with a similar issue:",trigger:function(){},
disabled:!0}].concat(ya(this.accounts.map(function(b){var c=uq(b)===uq(a.Ym),e=Tr(uq(b)),f=Df(b,3).trim(),h=!f;return{value:function(){return a.element("div","class",{"customer-info":!0,"customer-selected":c},function(){a.element("div","class",{check:!0,"check-hidden":!c},new Co({icon:Em()?"gm/check_white":"gm/check_blue",size:24}));a.element("div","class",{"account-name":!0,"account-name-empty":h},h?"Unnamed account":f);a.element("div","class","ext-cid",e)})},
trigger:function(){a.Ym=b;a.fF(b);a.menu.close()},
Ve:uq(b)}})))};
function Gqa(a){var b=Df(a.Ym,3).trim(),c=uq(a.Ym);return Sr("<strong>"+(b?Df(a.Ym,3):"Account")+"</strong> "+Tr(c))}
qw.prototype.open=function(){this.menu.open({anchor:this.o.getElement(),Nb:!1,xe:12});this.o.iA("gm/arrow_drop_up");this.onOpen()};var Hqa=new Map([["adwords_policy_center","gm/google_ads_logo"],["adwords3","gm/google_ads_logo"]]),Iqa=new Map([[1,"gm/google_ads_logo"],[2,"gm/google_analytics_logo"]]);function rw(a){var b=a.identifierData;a=a.Oa;A.call(this,"sc.discovery.genie.v2.Identifier");this.identifierData=b;this.Oa=a}
u(rw,A);rw.prototype.content=function(){var a=this;this.element("div","class","root",function(){var b=lf(a.identifierData,wq,4,Oe())||[];a.Oa.experienceType===1&&(b=[(new wq).setLabel("Summarized by Google AI").setIcon(3),(new wq).setLabel("Beta")]);var c=(a.Oa.issueType===2||a.Oa.issueType===76)&&Bqa(a.Oa);(b.length>0||c)&&a.element("div","class","chips",function(){c&&a.element("div","class","cid-selector",new qw({accounts:Cqa(a.Oa),Ym:Eq(a.Oa.o),fF:function(k){Dqa(a.Oa,k)},
onOpen:function(){var k,l=a.Oa.experienceType,p=a.Oa.issueType,r,t,v,y;var E=(y=(r=a.Oa.o)==null?void 0:(t=Dq(r))==null?void 0:(v=rq(t)[0])==null?void 0:v.getId())!=null?y:"";Or(30,{experienceType:l,issueType:p,actionId:E,sessionId:Rr(a.Oa),viewType:a.Oa.Qd,genieDataCount:(k=a.Oa.genieData)==null?void 0:k.length})}}));
a.Oa.Oe&&Jqa(b)&&a.element("div","class","user-icon-container",function(){a.element("img","class","user-icon","aria-hidden","true","src",a.Oa.Jv||"");a.element("div","class","user-icon-ring",new Co({icon:"gm/google_ring",size:40}))});
for(var e=w(b),f=e.next(),h={};!f.done;h={dC:void 0,kM:void 0},f=e.next())f=f.value,h.dC=Kqa(f.Qc(),Ef(f,4),a.Oa.Oe),h.kM=Sr(f.getLabel()),a.element("div","class","chip",function(k){return function(){k.dC&&a.element("div","class","chip-icon",new Co({icon:k.dC,size:16}));a.element("div","class","chip-label",k.kM)}}(h))});
a.element("div","class","title","role","heading","aria-level","2",a.identifierData.getTitle())})};
function Kqa(a,b,c){switch(a){case 1:if(c)break;return b!==0?Iqa.get(b):Hqa.get(z().hc);case 2:return Em()?"gm/timer":"gm/timer_primary";case 3:return Em()?"gm/information_spark_primary_dark":"gm/information_spark_primary"}}
function Jqa(a){a=w(a);for(var b=a.next();!b.done;b=a.next())if(b.value.Qc()===1)return!0;return!1}
;function sw(a){a=a.Oa;A.call(this,"sc.discovery.genie.v2.ExpandedView");this.Oa=a;this.genieData=a.o;this.actionType=Qr(a);this.isGenai=zqa(a);this.hideGenieFeedbackModule=a.hideGenieFeedbackModule;this.o=!a.Oe&&(this.isGenai||Ee(this.genieData,vq,9))}
u(sw,A);
sw.prototype.content=function(){var a=this;this.element("div","class","root",function(){if(Ee(a.genieData,xq,1)){var b;a.element("div","class","identifier",new rw({identifierData:(b=jf(a.genieData,xq,1))!=null?b:new xq,Oa:a.Oa}))}if(Ee(a.genieData,sq,2)){var c;a.element("div","class","content",new Vv({contentData:(c=jf(a.genieData,sq,2))!=null?c:new sq,Oa:a.Oa}))}lf(a.genieData,Bq,5,Oe()).length>0&&a.element("div","class","card-list",new Uv({IF:[].concat(ya(kf(a.genieData,Bq,5)))}));Ee(a.genieData,qq,
4)&&a.actionType!==0&&(b=new Xpa({actionData:Dq(a.genieData),actionType:0,Qd:"expanded"}),a.element("div","class",{action:hqa(a.Oa)},new Pv({Mi:b,Oa:a.Oa})));Lqa(a)})};
function Lqa(a){a.element("div","class","footer",function(){a.hideGenieFeedbackModule||a.element("div","class",{feedback:!0,"align-with-action":!a.o},new ow({Oa:a.Oa}));a.o&&a.element("div","class","disclaimer",new Xv({disclaimerData:jf(a.genieData,vq,9)}))})}
;function tw(a){this.Aa=se(a)}
u(tw,eh);tw.prototype.Zo=la(17);var uw=[0,x,Zh];tw.prototype.Ba=wi(uw);function vw(a){this.Aa=se(a)}
u(vw,eh);vw.prototype.Tf=function(){return Df(this,1)};var ww=[0,x,gi];vw.prototype.Ba=wi(ww);function xw(a){this.Aa=se(a)}
u(xw,eh);xw.prototype.getFrdIdentifier=function(){return Df(this,1)};var yw=[0,x,-1,uw];xw.prototype.Ba=wi(yw);function zw(a){this.Aa=se(a)}
u(zw,eh);n=zw.prototype;n.getUrl=function(){return Df(this,1)};
n.setUrl=function(a){return ag(this,1,a)};
n.getTitle=function(){return Df(this,2)};
n.setTitle=function(a){return ag(this,2,a)};
n.Ud=function(){return Df(this,3)};var Aw=[0,x,-2,uw,pi];zw.prototype.Ba=wi(Aw);var Bw=[0,x,-2,Rh];var Mqa=[0,x,-2];var Nqa=[0,x,gi,x,-1,gi,ji,Mqa,x];function Cw(a){this.Aa=se(a)}
u(Cw,eh);Cw.prototype.setSupportJourneyId=function(a){return ag(this,1,a)};
Cw.prototype.getUrl=function(){return Df(this,2)};
Cw.prototype.setUrl=function(a){return ag(this,2,a)};
Cw.prototype.getPageType=function(){return Ef(this,4)};var Oqa=[0,x,-2,pi,-1,x,-1];Cw.prototype.Ba=wi(Oqa);function Dw(a){this.Aa=se(a)}
u(Dw,eh);Dw.prototype.getTitle=function(){return Df(this,2)};
Dw.prototype.setTitle=function(a){return ag(this,2,a)};var Pqa=[0,1,x,-2];Dw.prototype.Ba=wi(Pqa);var Qqa=[0,1,x];function Ew(a){this.Aa=se(a)}
u(Ew,eh);var Rqa=[0,Aw,ww];Ew.prototype.Ba=wi(Rqa);function Fw(a){this.Aa=se(a)}
u(Fw,eh);var Sqa=[0,ji,Aw,ww];Fw.prototype.Ba=wi(Sqa);var Tqa=[0,Rh,x,-1,yw,x,-1];var Uqa=[0,Bw,x,-1];var Vqa=[0,Bw,pi];function Gw(a){this.Aa=se(a)}
u(Gw,eh);Gw.prototype.Xb=function(){return jf(this,xw,1)};
Gw.prototype.Nc=function(a){return nf(this,xw,1,a)};var Wqa=[0,yw,ww];Gw.prototype.Ba=wi(Wqa);function Hw(a){this.Aa=se(a)}
u(Hw,eh);var Iw=[2,3,5,6,7,8,9,10,11];Hw.prototype.Ba=wi([0,Iw,Oqa,ki,Pqa,ki,Qqa,pi,ki,Wqa,ki,Rqa,ki,Sqa,ki,Vqa,ki,Uqa,ki,Tqa,ki,Nqa]);function Jw(a){this.Aa=se(a)}
u(Jw,eh);Jw.prototype.Ba=wi([0]);function Kw(a,b){var c=c===void 0?dq():c;if(Lw()){var e=Mw();a=Xqa(a,b);e=of(e,2,Iw,a);Nw(e,c)}}
function Ow(a,b,c){var e=e===void 0?dq():e;if(Lw()){var f=new Ew;b=Pw(a,b,c);f=nf(f,zw,1,b);a=Qw(a.Rb());a=nf(f,vw,2,a);f=Mw();a=of(f,6,Iw,a);Nw(a,e)}}
function Rw(a,b,c,e){var f=f===void 0?dq():f;if(Lw()){var h=new Fw;e=Qw(e);h=nf(h,vw,2,e);b=w(b);for(var k=b.next();!k.done;k=b.next())e=h,k=Pw(k.value,0,2),sf(e,1,zw,k);a=w(a);for(e=a.next();!e.done;e=a.next())b=h,e=Pw(e.value,0,1),sf(b,1,zw,e);c=w(c);for(b=c.next();!b.done;b=c.next())a=h,b=Pw(b.value,0,9),sf(a,1,zw,b);c=Mw();h=of(c,7,Iw,h);Nw(h,f)}}
function Yqa(a,b,c){a=a===void 0?"":a;var e=e===void 0?dq():e;Lw()&&(a=(new Gw).Nc(Zqa(a,b)),c=Qw(c),c=nf(a,vw,2,c),a=Mw(),c=of(a,5,Iw,c),Nw(c,e))}
function Zqa(a,b){a=a===void 0?"":a;for(var c=new xw,e=w(b.entries()),f=e.next();!f.done;f=e.next()){var h=w(f.value);f=h.next().value;h=h.next().value;if(h.id===a)return b=void 0,a=ag(c,2,h.text),a=ag(a,1,h.id),e=Sw((b=h.reporting_id)!=null?b:"",f+1),nf(a,tw,3,e),c}c=ag(c,1,"other");c=ag(c,2,"Other");b=Sw("",b.length+1);return nf(c,tw,3,b)}
function Pw(a,b,c){var e=(new zw).setUrl(a.getUrl()).setTitle(a.getTitle());var f=a.Ud();e=ag(e,3,f);a=Sw(Tw(a),b);a=nf(e,tw,4,a);return cg(a,5,c)}
function Qw(a){var b=new vw;a=ag(b,1,a);return eg(a,2,[])}
function Sw(a,b){var c=new tw;a=ag(c,1,a);return Yf(a,2,b)}
function Lw(){return Vm("SupportJourneyFeature__enable_journey_publish")==="true"&&z().rs!==26}
function $qa(){var a=z(),b;var c=new Cw;c=ag(c,3,a.hc);c=ag(c,6,a.lang);c=cg(c,4,a.pt);var e=(b=a.vid)==null?void 0:b.toString();b=ag(c,7,e).setSupportJourneyId(a.support_journey_id);return cg(b,5,a.rt).setUrl(window.location.href)}
function Nw(a,b){try{b.post({endpoint:"logjourney",queryParams:{v:"1"},request:a,response:Jw})}catch(c){if(z()&&z().env!=="PROD")throw c;}}
function Xqa(a,b){var c=z(),e;b=(new Dw).setTitle(b||c.title||c.html_title);a=ag(b,3,a||c.pid);c=(e=Hm("refererViewId"))==null?void 0:e.toString();return ag(a,4,c)}
function Mw(){var a=z();var b=new Hw;var c=$qa();b=nf(b,Cw,1,c);return cg(b,4,a.rs)}
;function Uw(a){this.Aa=se(a)}
u(Uw,eh);function Vw(a,b){return We(a,3,b,yd)}
;Uw.prototype.Ba=wi([0,$h,-3]);function ara(a){if(!(a&&a instanceof eh))throw Error("Value is not proto message.");return kc(a.serialize(Wd),2)}
;function bra(a,b,c,e){if(a){var f="";c&&c.length&&(f="; track:"+c.join(",").trim());c="";e&&e.length&&(c="; "+e.join("; ").trim());a.setAttribute("jslog",b+f+c);a.LSWHIf=void 0}}
;var Ww={ARROW_KEYS:{string:"arrow_keys",Yd:"Wxn7ub"},AUTOMATED:{string:"automated",Yd:"wjpLYc"},CLICK:{string:"click",Yd:"cOuCgd"},DRAGEND:{string:"dragend",Yd:"RlD3W"},DROP:{string:"drop",Yd:"DaY83b"},GENERIC_CLICK:{string:"generic_click",Yd:"szJgjc"},HOVER:{string:"hover",Yd:"ZmdkE"},IMPRESSION:{string:"impression",Yd:"xr6bB"},KEYBOARD_ENTER:{string:"keyboard_enter",Yd:"SYhH9d"},KEYPRESS:{string:"keypress",Yd:"Kr2w4b"},LONG_PRESS:{string:"long_press",Yd:"tfSNVb"},MOUSEOVER:{string:"mouseover",Yd:"FrfE3b"},
RIGHT_CLICK:{string:"rightclick",Yd:"CYQmze"},SCROLL:{string:"scroll",Yd:"XuHpsb"},SWIPE:{string:"swipe",Yd:"eteedb"},VIS:{string:"vis",Yd:"HkgBsf"}};function cra(a){if(dra.has(a))return dra.get(a);throw Error("Unrecognized EventLabel "+a+".");}
function era(a){for(var b=new Map,c=w(Object.keys(a)),e=c.next();!e.done;e=c.next())e=e.value,b.set(a[e].string,a[e].Yd);return b}
for(var dra=era(Ww),Xw=new Map,fra=w(Object.keys(Ww)),Yw=fra.next();!Yw.done;Yw=fra.next()){var gra=Yw.value;Xw.set(Ww[gra].Yd,Ww[gra].string)}var hra=era({TRACK:{string:"track",Yd:"u014N"},INDEX:{string:"index",Yd:"cQYSPc"},MUTABLE:{string:"mutable",Yd:"dYFj7e"},COMPONENT_ID:{string:"cid",Yd:"cOuyq"},TEST_CODE:{string:"tc",Yd:"DM6Eze"}});function Zw(a,b){this.ya=a;this.o=null;this.oa=[];this.ma=void 0;this.va=this.qa=!1;this.uI=null;this.ua=[];this.zw=b||!1;this.ow=new Set}
n=Zw.prototype;n.getID=function(){return this.ya};
function $w(a,b){return b?a.ow.has(a.wv(b)):a.ow.size!=0}
n.getIndex=function(){return this.o};
n.Br=function(){return this.qa};
n.setAttribute=function(a){this.uI=a;return this};
n.getAttribute=function(){return this.uI};
function ira(a,b){a.ua.push(b)}
function ax(a,b){for(var c=0;c<a.ua.length;++c)a.ua[c](b)}
n.wv=function(a){return this.zw?cra(a):a};
Zw.prototype.isMutable=Zw.prototype.Br;function bx(a){this.Aa=se(a)}
u(bx,eh);function cx(a){this.Aa=se(a)}
u(cx,eh);function dx(a,b){Yf(a,2,b)}
;function ex(a){this.Aa=se(a)}
u(ex,eh);var jra=[1,3,4],fx=[2,5];function gx(a){this.Aa=se(a,233)}
u(gx,eh);function hx(a,b){We(a,4,b,yd)}
gx.prototype.Tk=function(a){cg(this,6,a)};
gx.prototype.getLanguage=function(){return Df(this,17)};
gx.prototype.setLanguage=function(a){return ag(this,17,a)};
var kra=xi(gx),ix={};var jx=[0,Wp,Rh];bx.prototype.Ba=wi(jx);var lra=[0,[1,2],[3,6],ki,Wp,ki,jx,ci,2,ki,[0,$h,Zh]];var kx=[0,Zh,-1,2,Zh,-4,di,Zh,Yda,jx,Zh,[0,$h,Zh],Zh];cx.prototype.Ba=wi(kx);var lx=[0,jra,fx,ki,Wp,ki,kx,ki,jx,ii,-1];ex.prototype.Ba=wi(lx);var mx=[-233,ix,Zh,1,Zh,$h,x,pi,Zh,3,lra,5,x,112,di,18,Zh,82,[0,lx]];gx.prototype.Ba=wi(mx);function mra(){this.o=this.ma=this.ua=void 0;this.oa=[]}
;function nx(){}
nx.prototype.oa=function(){return[]};
nx.prototype.ua=function(){return[]};
nx.prototype.qa=function(){return[]};function ox(){if(!px){var a=px=new Up,b=Date.now()*1E3+Math.floor(Math.random()*1E3);$f(a,1,b);Ce(px,2,Bd(0));Ce(px,3,Bd(0));nra=0}a=new bx;a=nf(a,Up,1,px);b=++nra;return $f(a,2,b)}
var nra=0,px=void 0;function qx(a){this.Aa=se(a,1)}
u(qx,eh);var ora={};var pra=[-1,ora];qx.prototype.Ba=wi(pra);function rx(a){this.Aa=se(a)}
u(rx,eh);var qra=[0,jx];rx.prototype.Ba=wi(qra);function sx(a){this.Aa=se(a,7)}
u(sx,eh);sx.prototype.getTarget=function(){return jf(this,ex,1)};
sx.prototype.getType=function(){return Ef(this,2)};
sx.prototype.setType=function(a){return cg(this,2,a)};
function rra(a){var b=Date.now();b=Number.isFinite(b)?b*1E3:void 0;$f(a,4,b)}
var sra={};function tx(a){this.Aa=se(a)}
u(tx,eh);function ux(a){this.Aa=se(a,17)}
u(ux,eh);function vx(a,b){return ag(a,11,b)}
function tra(a,b){return Yf(a,1,b)}
function ura(a,b){Yf(a,2,b)}
ux.prototype.setImageUrl=function(a){return ag(this,9,a)};
function vra(a,b){pf(a,14,b)}
;function wx(a){this.Aa=se(a)}
u(wx,eh);var wra=[-7,sra,lx,pi,lx,Rh,lx,di];sx.prototype.Ba=wi(wra);var xra=[0,ji,wra];tx.prototype.Ba=wi(xra);var yra=[-17,{},Zh,-7,x,-4,ji,mx,pra,kx];ux.prototype.Ba=wi(yra);wx.prototype.Ba=wi([0,jx,ji,mx,jx,yra,pi,x,xra,jx,qra]);function zra(a){this.userAction=a;this.Qu=void 0}
;function Ara(a){this.userAction=a;Bra++}
var Bra=0;var Cra=fea(cx,kx),Dra=function(a){return function(b){return Lda(b,a)}}(kx);function xx(a,b){this.ya=a;this.Ca=b;this.qa=!1;this.oa=this.Se=void 0;this.ua=this.hidden=!0;this.ma=this.va=this.o=void 0}
xx.prototype.getTag=function(){return this.Ca};
xx.prototype.getElement=function(){return this.ya};
function Era(a){var b=yx++;a.o=b}
xx.prototype.setParent=function(a){this.va=a};
xx.prototype.getParent=function(){return this.va};
function zx(a){if(a.Se){var b=new cx;Yf(b,1,a.o);dx(b,a.getTag().getID());nf(b,bx,13,a.Se);a=Dra(b);return"0"+jc(a,4)}}
;function Ax(){this.zw=!1}
Ax.prototype.oC=function(a){return new Zw(a,this.zw)};
Ax.prototype.xt=function(){};
Ax.prototype.vt=function(){};function Bx(a){this.Aa=se(a)}
u(Bx,eh);Bx.prototype.Ba=wi([0,Zh,-1,$h,pi,2,pi]);function Cx(a){this.Aa=se(a)}
u(Cx,eh);function Fra(a,b){pf(a,1,b)}
Cx.prototype.addPath=function(a,b){return sf(this,1,gx,a,b)};var Gra=[0,ji,mx];Cx.prototype.Ba=wi(Gra);var Dx=new vi(100,sx,Cx);sra[100]=Gra;function Ex(a){this.Aa=se(a)}
u(Ex,eh);var Hra=[0,Ph];Ex.prototype.Ba=wi(Hra);function Fx(a){this.Aa=se(a)}
u(Fx,eh);Fx.prototype.getTimestamp=function(){return jf(this,Ex,1)};
Fx.prototype.setTimestamp=function(a){return nf(this,Ex,1,a)};var Gx=[0,Hra];Fx.prototype.Ba=wi(Gx);var Hx=new vi(126,qx,Fx);ora[126]=Gx;var Ira=new vi(618,gx,Fx);ix[618]=Gx;function Ix(a){this.Aa=se(a,2)}
u(Ix,eh);var Jra=[-2,{},di];Ix.prototype.Ba=wi(Jra);var Kra=new vi(273,gx,Ix);ix[273]=Jra;function Jx(a,b,c,e){this.left=a;this.top=b;this.width=c;this.height=e}
n=Jx.prototype;n.clone=function(){return new Jx(this.left,this.top,this.width,this.height)};
function Lra(a,b){var c=Math.max(a.left,b.left),e=Math.min(a.left+a.width,b.left+b.width);if(c<=e){var f=Math.max(a.top,b.top);a=Math.min(a.top+a.height,b.top+b.height);if(f<=a)return new Jx(c,f,e-c,a-f)}return null}
n.contains=function(a){return a instanceof gn?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
n.distance=function(a){var b=a.x<this.left?this.left-a.x:Math.max(a.x-(this.left+this.width),0);a=a.y<this.top?this.top-a.y:Math.max(a.y-(this.top+this.height),0);return Math.sqrt(b*b+a*a)};
n.getSize=function(){return new hn(this.width,this.height)};
n.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
n.translate=function(a,b){a instanceof gn?(this.left+=a.x,this.top+=a.y):(this.left+=a,typeof b==="number"&&(this.top+=b));return this};
n.scale=function(a,b){b=typeof b==="number"?b:a;this.left*=a;this.width*=a;this.top*=b;this.height*=b;return this};function Mra(){this.ma=0;this.o=[]}
n=Mra.prototype;n.add=function(a){var b=this.o[this.ma];this.o[this.ma]=a;this.ma=(this.ma+1)%50;return b};
n.get=function(a){a=Nra(this,a);return this.o[a]};
n.set=function(a,b){a=Nra(this,a);this.o[a]=b};
n.isEmpty=function(){return this.o.length==0};
n.clear=function(){this.ma=this.o.length=0};
n.getValues=function(){for(var a=this.o.length,b=[],c=this.o.length-this.o.length;c<a;c++)b.push(this.get(c));return b};
n.getKeys=function(){for(var a=[],b=this.o.length,c=0;c<b;c++)a[c]=c;return a};
function Nra(a,b){if(b>=a.o.length)throw Error("Out of bounds exception");return a.o.length<50?b:(a.ma+Number(b))%50}
;function Kx(a){this.Aa=se(a)}
u(Kx,eh);var Ora=[0,li,mi,di,x];Kx.prototype.Ba=wi(Ora);var Pra=[0,pi,[0,Mh,Zh,-2],[0,Mh]];var Qra=[0,gi,-1,$h,Sh,-1];var Rra=[0,Zh,x,-1];function Lx(a){this.Aa=se(a)}
u(Lx,eh);n=Lx.prototype;n.getKey=function(){return Df(this,1)};
n.setKey=function(a){return ag(this,1,a)};
n.getValue=function(){return Df(this,2)};
n.setValue=function(a){return ag(this,2,a)};
n.Yb=function(){return hg(this,2)};var Sra=[0,x,-1];Lx.prototype.Ba=wi(Sra);var Tra=[0,pi,-1];function Mx(a){this.Aa=se(a)}
u(Mx,eh);function Nx(a){this.Aa=se(a)}
u(Nx,eh);function Ox(a){this.Aa=se(a,4)}
u(Ox,eh);function Px(a){this.Aa=se(a,36)}
u(Px,eh);Px.prototype.getTag=function(){return Df(this,2)};
Px.prototype.setTag=function(a){return ag(this,2,a)};
Px.prototype.Mg=function(a){return pf(this,3,a)};
Px.prototype.setValue=function(a,b){return Me(this,3,Lx,a,b)};
function Qx(a,b){return ag(a,8,b)}
function Rx(a,b){ag(a,24,b)}
;var Ura=[0,hi,[0,si,mj,si,-1,[0,pi],si,-1],ni];var Vra=[0,12,Zh,10,di];Mx.prototype.Ba=wi(Vra);var Wra=[0,1,Vra,[0,7,[0,Zh,-1]]];Nx.prototype.Ba=wi(Wra);var Sx=[-4,{},Wra,pi,Ura];Ox.prototype.Ba=wi(Sx);var Xra=[-36,{},Ph,x,ji,Sra,li,1,li,Qra,x,Rra,di,Zh,Rh,x,-1,cea,Ora,Ph,li,pi,$h,Rh,-1,Tra,x,di,x,ai,x,-1,Kh,1,Kh,Sx,di,Pra];Px.prototype.Ba=wi(Xra);function Tx(a,b,c,e,f){this.o=f=f===void 0?Yra:f;this.va=a===void 0?!0:a;this.ma=c===void 0?!1:c;this.Ca=b===void 0?!1:b;this.ya=e===void 0?!1:e;this.Fa=new Mra}
u(Tx,nx);Tx.prototype.oa=function(a,b){for(var c=[],e=[],f=0;f<a.length;++f)a[f].keys().next().value.Se?e.push(a[f]):c.push(a[f]);a=Zra(this,c,b);b=this.Ca?$ra(this,e,b):asa(this,e,b);return a.concat(b)};
Tx.prototype.ua=function(a,b){var c=new wx,e=ox();nf(c,bx,1,e);e=new ux;a.ma?vx(e,a.ma):ura(tra(e,a.getTag().getID()),a.o);vra(Yf(e,3,b.userAction),Ux(this,a));b.Qu&&Yf(e,6,b.Qu);a.getTag();this.setTimestamp(e);var f=new rx;nf(f,bx,1,a.Se);nf(c,bx,3,a.Se);nf(c,ux,4,e);nf(c,rx,9,f);this.Fa.add(new Ara(b.userAction,a.getTag().getID()));this.o("Interaction Event",c);a=new Px;Rx(a,c.serialize());return[a]};
Tx.prototype.qa=function(a,b){for(var c=[],e=new Map,f=0;f<a.length;++f){var h=a[f],k=h.getElement(),l=h.oa,p=e.get(l);p=p?p:[];var r=new Cx;this.ma&&Fra(r,Ux(this,h));if(h.ua||$w(h.getTag(),"vis"))if(k=Vx(k,b),h.hidden&&k){k=new sx;k.setType(1);var t=Wx(h);nf(k,ex,1,t);rra(k);this.ma&&hh(k,Dx,r);p.push(k);h.hidden=!1;h.ua=!1}else h.hidden||k||(k=new sx,k.setType(2),t=Wx(h),nf(k,ex,1,t),rra(k),this.ma&&hh(k,Dx,r),p.push(k),h.hidden=!0);e.set(l,p)}a=w(e.keys());for(b=a.next();!b.done;b=a.next())b=
b.value,h=e.get(b),h.length&&(f=new tx,pf(f,1,h),h=new wx,l=ox(),p=new rx,nf(p,bx,1,b),nf(h,bx,1,l),nf(h,bx,3,b),nf(h,tx,7,f),nf(h,rx,9,p),b=new Px,this.o("Visibility Event",h),Rx(b,h.serialize()),c.push(b));return c};
function Vx(a,b){if(a.hasAttribute("ve-visible"))return a.getAttribute("ve-visible")=="true";if(a instanceof HTMLElement&&(a.offsetWidth<=0||a.offsetHeight<=0))return!1;a=a.getBoundingClientRect();return(b=Lra(b,new Jx(a.left,a.top,a.width,a.height)))&&b.width>=10&&b.height>=10?!0:!1}
function Zra(a,b,c){for(var e=[],f={},h=b.length-1;h>=0;f={Se:void 0,Kl:void 0,wA:void 0},h--){f.Kl=new wx;f.wA=[];f.Se=ox();nf(f.Kl,bx,1,f.Se);var k=new rx;nf(k,bx,1,f.Se);nf(f.Kl,rx,9,k);if(k=vp(window.location.href,"ved"))k=vx(new ux,k),nf(f.Kl,ux,4,k);b[h].forEach(function(l){return function(p,r){r.Se=l.Se;r.oa=l.Se;var t=Xx(this,r);p.length&&hx(t,p);p=r.getElement();Vx(p,c)?(r.ua=!1,r.hidden=!1):t.Tk(1);Yx(this,r)&&r.o!==void 0&&(p.setAttribute("data-hveid",Number(r.o)),lf(l.Kl,gx,2,Oe()).length===
0&&zx(r)&&(p.setAttribute("decode-data-ved","1"),p.setAttribute("data-ved",zx(r)+"")));this.setTimestamp(t);sf(l.Kl,2,gx,t);l.wA=l.wA.concat(r.getTag().oa)}}(f),a);
a.o("Impression Event",f.Kl);k=new Px;Rx(k,f.Kl.serialize());We(k,20,f.wA,yd);e.push(k)}return e}
function $ra(a,b,c){for(var e=[],f=new Map,h=b.length-1;h>=0;h--){var k=b[h],l=k.keys().next().value.oa,p=f.get(l)||[];p.push(k);f.set(l,p)}f.forEach(function(r,t){var v=0,y=[],E=new wx,oa=[],ra=ox();nf(E,bx,1,ra);nf(E,bx,3,t);var Aa=new rx;nf(Aa,bx,1,t);nf(E,rx,9,Aa);for(Aa=0;Aa<r.length;Aa++)for(var Ba=r[Aa],Ha=Ba.keys(),Na=Ha.next().value,Va=Ba.get(Na),cb={},sb=0;sb<Va.length;cb={tA:void 0,iC:void 0},++sb){var Cb=Na;cb.iC=0;cb.tA=Va[sb];var $b=Ba.size;sb!=Va.length-1&&($b=Va[sb+1]);for(var Mb=
cb.tA;Mb<$b;++Mb){var rb=Ha.next().value;Mb==cb.tA&&(Cb=rb,cb.iC=v);rb.Se=ra;rb.oa=t;rb.o=v;var vb=Ba.get(rb),fc=Xx(this,rb);vb.length&&hx(fc,vb.map(function(Fc){return function(nc){return nc-Fc.tA+Fc.iC}}(cb)));
vb=rb.getElement();Vx(vb,c)?(rb.ua=!1,rb.hidden=!1):fc.Tk(1);this.setTimestamp(fc);sf(E,2,gx,fc);oa=oa.concat(rb.getTag().oa);v++}cb=new sx;cb.setType(3);$b=Wx(Na);nf(cb,ex,1,$b);$b=new ex;Mb=new cx;rb=new Cx;Yf(Mb,1,Cb.o);dx(Mb,Cb.getTag().getID());of($b,2,fx,Mb);nf(cb,ex,3,$b);this.ma&&(Fra(rb,Ux(this,Cb)),hh(cb,Dx,rb));y.push(cb)}y.length&&(r=new tx,pf(r,1,y),nf(E,tx,7,r));this.o("Incremental Impression Event Batch",E);y=new Px;Rx(y,E.serialize());We(y,20,oa,yd);e.push(y)},a);
return e}
function asa(a,b,c){for(var e=[],f=b.length-1;f>=0;f--)for(var h=b[f],k=h.keys(),l=k.next().value,p=h.get(l),r={},t=0;t<p.length;r={uA:void 0},++t){r.uA=p[t];var v=h.size;t!=p.length-1&&(v=p[t+1]);var y=new wx,E=[],oa=ox(),ra=new rx;nf(ra,bx,1,l.Se);nf(y,bx,1,oa);nf(y,bx,3,l.Se);cg(y,5,3);nf(y,rx,9,ra);ra=new ux;l.ma?vx(ra,l.ma):ura(tra(ra,l.getTag().getID()),l.o);vra(ra,Ux(a,l));nf(y,ux,4,ra);for(ra=r.uA;ra<v;++ra){var Aa=k.next().value;Aa.Se=oa;Aa.oa=l.oa;Aa.o!=void 0&&(Aa.o-=r.uA);var Ba=h.get(Aa),
Ha=Xx(a,Aa);Ba.length&&hx(Ha,Ba.map(function(Na){return function(Va){return Va-Na.uA}}(r)));
Ba=Aa.getElement();Vx(Ba,c)?(Aa.ua=!1,Aa.hidden=!1):Ha.Tk(1);Yx(a,Aa)&&Aa.o!==void 0&&(Ba.setAttribute("data-hveid",Number(Aa.o)),lf(y,gx,2,Oe()).length===0&&zx(Aa)&&(Ba.setAttribute("decode-data-ved","1"),Ba.setAttribute("data-ved",zx(Aa)+"")));a.setTimestamp(Ha);sf(y,2,gx,Ha);E=E.concat(Aa.getTag().oa)}a.o("Incremental Impression Event",y);r=new Px;Rx(r,y.serialize());We(r,20,E,yd);e.push(r)}return e}
function Ux(a,b){if(!a.va)return[];for(var c=[],e=new Set;b&&!e.has(b);){var f=Xx(a,b);c.unshift(f);e.add(b);b=b.getParent()}return c}
function Xx(a,b){var c=new gx;var e=b.getTag().getID();c=Yf(c,1,e);Number.isFinite(b.getTag().getIndex())&&(e=b.getTag().getIndex(),Yf(c,3,e));ax(b.getTag(),c);Yx(a,b)&&(a=new Ix,Wf(a,1,!0),hh(c,Kra,a));return c}
function Wx(a){var b=new ex;if(a.ma)af(b,5,fx,Td(a.ma));else{var c=new cx;of(b,3,jra,a.Se);Yf(c,1,a.o);dx(c,a.getTag().getID());of(b,2,fx,c)}return b}
Tx.prototype.setTimestamp=function(a){var b=Date.now();b=Number.isFinite(b)?b.toString():void 0;var c;(c=a instanceof ux)&&!(c=!jf(a,qx,15))&&(c=jf(a,qx,15),Eca(c.Aa,Hx.fieldIndex),Dca(c,Hx.fieldIndex),c=!(Hx.ctor?Hx.isRepeated?Hx.ma(c,Hx.ctor,Hx.fieldIndex,Oe(),Hx.o):Hx.ma(c,Hx.ctor,Hx.fieldIndex,Hx.o):Hx.isRepeated?Hx.ma(c,Hx.fieldIndex,Oe(),Hx.o):Hx.ma(c,Hx.fieldIndex,Hx.defaultValue,Hx.o)));if(c){c=new Fx;var e=new Ex,f=jf(a,qx,15);f||(f=new qx);Ce(e,1,Hd(b));c.setTimestamp(e);hh(f,Hx,c);nf(a,
qx,15,f)}a instanceof gx&&(c=new Fx,e=new Ex,Ce(e,1,Hd(b)),c.setTimestamp(e),hh(a,Ira,c))};
function Yx(a,b){return a.ya?$w(b.getTag(),"hover")||$w(b.getTag(),"attention"):!1}
function Yra(a){return a+":"+JSON.stringify(null,null,1).replace(/"/g,"")}
;Ya.U3bHHf!=null||(Ya.U3bHHf=0);Ya.U3bHHf++;function bsa(a){return a?a.__owner?a.__owner:a.parentNode&&a.parentNode.nodeType===11?a.parentNode.host:Aha(a):null}
function Zx(a,b,c){for(c||(a=bsa(a));a&&!b(a);)a=bsa(a)}
;var csa=1;(function(){for(var a=["ms","moz","webkit","o"],b=0;b<a.length&&!window.requestAnimationFrame;++b)window.requestAnimationFrame=window[a[b]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[a[b]+"CancelAnimationFrame"]||window[a[b]+"CancelRequestAnimationFrame"];if(!window.requestAnimationFrame){var c=0;window.requestAnimationFrame=function(e){var f=(new Date).getTime(),h=Math.max(0,16-(f-c));c=f+h;return window.setTimeout(function(){e(f+h)},h)};
window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}})();
function dsa(){}
var esa=[[],[]],$x=0,ay=new Set,by=null,cy=0,fsa=0,gsa=0,dy=0,hsa=0;function isa(a){this.ma=this.o=void 0;this.oa=!1;this.ua=window;this.qa=a;this.va=dsa}
n=isa.prototype;n.measure=function(a){this.o=a;return this};
n.mutate=function(a){this.ma=a;return this};
n.jG=function(){this.oa=!0;return this};
n.window=function(a){this.ua=a;return this};
n.build=function(){return jsa({measure:this.o,mutate:this.ma,HV:this.va,window:this.ua,jG:this.oa},this.qa)};
function jsa(a,b){var c=hsa++,e=Math.max(a.measure?a.measure.length:0,a.mutate?a.mutate.length:0),f={id:c,jL:a.measure,mL:a.mutate,context:b,args:[]},h=f;return function(){var k=h.FF!==0;k&&(h=Object.assign({FF:0},f));b||(h.context=this);h.args=Array.prototype.slice.call(arguments);e>arguments.length&&h.args.push(new a.HV);k&&(k=$x,!a.jG||dy==0||a.measure&&dy!=1||(k=(k+1)%2),esa[k].push(h));return ksa(a.window)}}
function lsa(a,b){var c={};dy=1;for(var e=0;e<a.length;++e){var f=a[e];var h=f.args[f.args.length-1];h&&typeof h==="object"&&(h.now=b);if(f.jL){f.FF=1;try{f.jL.apply(f.context,f.args)}catch(k){c[e]=!0,ob(k)}}}dy=2;for(e=0;e<a.length;++e)if(f=a[e],(h=f.args[f.args.length-1])&&typeof h==="object"&&(h.now=b),!c[e]&&f.mL){f.FF=2;try{f.mL.apply(f.context,f.args)}catch(k){ob(k)}}cy>0&&b>1&&(a=b-cy,a<500&&(csa++,a>100&&fsa++,gsa<a&&(gsa=a)));cy=ay.size&&b>1?b:0}
function ksa(a){if(!ay.has(a)){ay.size||(by=new pp);ay.add(a);var b=by.resolve;a.requestAnimationFrame(function(c){ay.clear();var e=esa[$x];$x=($x+1)%2;try{lsa(e,c)}finally{dy=0,e.length=0}b()})}return by.promise}
;function msa(a,b){this.o=a;this.OA=b===void 0?!1:b}
function nsa(a,b){return osa(a,b).filter(function(c){return ey(this.o,c)!=null},a)}
function psa(a,b){var c=a.o;a=[];for(var e=void 0,f={},h=0;h<b.length;f={Pm:void 0},++h){var k=ey(c,b[h]);k.o==void 0&&k.ma==void 0&&(f.Pm=void 0,Zx(b[h],function(l){return function(p){p=ey(c,p);return p!=null?(l.Pm=p,!0):!1}}(f),!1),f.Pm?e&&e.has(f.Pm)||(e=new Map,a.unshift(e),e.set(f.Pm,[]),yx=1):(e=new Map,a.unshift(e),yx=0),Era(k),k.setParent(f.Pm),e.set(k,[]),f.Pm&&e.get(f.Pm).push(k.o))}return a}
function qsa(a,b){var c=a.o;return b.map(function(e){return ey(c,e)})}
function osa(a,b){if(a.OA){var c=[];a=[];for(c.push.apply(c,b.querySelectorAll("*"));c.length>0;){var e=c.shift();e.getAttribute("jslog")&&a.push(e);e.shadowRoot&&c.unshift.apply(c,e.shadowRoot.querySelectorAll("*"))}}else a=[].slice.call(b.querySelectorAll("[jslog]"));a.unshift(b);return a}
var yx=0;function rsa(a,b){this.oa=a;this.o=b||!1;this.ma=void 0}
function ey(a,b){var c=b.LSWHIf||null;if(c&&(c.getTag().ma||a.ma)&&c.getTag().ma!=a.ma)return null;var e;!(e=c&&c.getTag().Br&&!c.getTag().Br())&&(e=c&&c.getTag().Br&&c.getTag().Br())&&(e=b.getAttribute("jslog"),e=!(!e||qb(e)||e!=c.getTag().getAttribute()));if(e)return c;e=b.getAttribute("jslog");if(!e)return null;e=ssa(a,e);if(!e||(e.ma||a.ma)&&e.ma!=a.ma)return null;a=new xx(b,e);c&&c.getTag().va&&c.qa&&(a.qa=!0);if(c=a.getElement().getAttribute("data-ved")){a.ma=c;if(!c||c.charAt(0)!="0"&&c.charAt(0)!=
"2")var f=null;else{c=c.substring(1);try{var h=Cra(c);f=jf(h,bx,13)}catch(k){f=null}}f&&(a.Se=f,a.oa=f)}return b.LSWHIf=a}
function ssa(a,b){if(qb(b))return null;var c=b.split(";"),e=Number(c[0].trim());if(isNaN(e))return null;e=a.oa.oC(e);for(var f=1;f<c.length;f++){var h=c[f].trim();if(!qb(h)){var k=1;h=h.split(":");for(var l=[];k>0&&h.length;)l.push(h.shift()),k--;h.length&&l.push(h.join(":"));h=l;if(h.length<2)return null;k=h[0].trim();h=h[1].trim();if(qb(k)||qb(h))return null;switch(k){case fy(a,"track"):k=h.split(",");for(h=0;h<k.length;++h){var p=e;l=k[h].trim();if(a.o){if(!p.zw)throw Error("Method isTrackingXid should only be used when xidTagComponents_ is true.");
if(!Xw.has(l))throw Error("Unrecognized eventLabelXid: "+l+".");p.ow.add(l)}else p.ow.add(p.wv(l))}break;case fy(a,"index"):e.o=Number(h);break;case fy(a,"tc"):k=h.split(",");k=k.map(Number);k=k.filter(Number.isInteger);e.oa=k;break;case "cid":e.ma=h;break;case fy(a,"mutable"):h=="true"?e.qa=!0:h=="rci"&&(e.qa=!0,e.va=!0);break;default:a.oa.xt(e,k,h)}}}return e.setAttribute(b)}
function fy(a,b){if(a.o)if(hra.has(b))a=hra.get(b);else throw Error("Unrecognized PartLabel "+b+".");else a=b;return a}
;function gy(a,b,c){yu.call(this);this.va=c!=null?a.bind(c):a;this.qa=b;this.ua=null;this.ma=!1;this.oa=0;this.o=null}
u(gy,yu);n=gy.prototype;n.WH=function(a){this.ua=arguments;this.o||this.oa?this.ma=!0:hy(this)};
n.stop=function(){this.o&&(Ya.clearTimeout(this.o),this.o=null,this.ma=!1,this.ua=null)};
n.pause=function(){this.oa++};
n.resume=function(){this.oa--;this.oa||!this.ma||this.o||(this.ma=!1,hy(this))};
n.fe=function(){yu.prototype.fe.call(this);this.stop()};
function hy(a){a.o=Tu(function(){a.o=null;a.ma&&!a.oa&&(a.ma=!1,hy(a))},a.qa);
var b=a.ua;a.ua=null;a.va.apply(null,b)}
;function iy(a){yu.call(this);this.Ia=a;this.oa={}}
jb(iy,yu);var tsa=[];n=iy.prototype;n.listen=function(a,b,c,e){Array.isArray(b)||(b&&(tsa[0]=b.toString()),b=tsa);for(var f=0;f<b.length;f++){var h=Lu(a,b[f],c||this.handleEvent,e||!1,this.Ia||this);if(!h)break;this.oa[h.key]=h}return this};
n.Hr=function(a,b,c,e){return usa(this,a,b,c,e)};
function usa(a,b,c,e,f,h){if(Array.isArray(c))for(var k=0;k<c.length;k++)usa(a,b,c[k],e,f,h);else{b=Mu(b,c,e||a.handleEvent,f,h||a.Ia||a);if(!b)return a;a.oa[b.key]=b}return a}
n.unlisten=function(a,b,c,e,f){if(Array.isArray(b))for(var h=0;h<b.length;h++)this.unlisten(a,b[h],c,e,f);else c=c||this.handleEvent,e=bb(e)?!!e.capture:!!e,f=f||this.Ia||this,c=Nu(c),e=!!e,b=Du(a)?a.Xq(b,c,e,f):a?(a=Ou(a))?a.Xq(b,c,e,f):null:null,b&&(Qu(b),delete this.oa[b.key]);return this};
n.removeAll=function(){jn(this.oa,function(a,b){this.oa.hasOwnProperty(b)&&Qu(a)},this);
this.oa={}};
n.fe=function(){iy.wh.fe.call(this);this.removeAll()};
n.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function vsa(a,b){if(b&&a in b)return a;var c=Zb?"Webkit":Yb?"Moz":null;return c?(c=c.toLowerCase(),a=c+wha(a),b===void 0||a in b?a:null):null}
;function wsa(a,b){Au.call(this,"visibilitychange");this.hidden=a;this.visibilityState=b}
u(wsa,Au);var xsa=new WeakMap;function jy(a){function b(f){f=w(f);f.next();f=xa(f);return c(e,f)}
var c=c===void 0?ysa:c;var e=qaa(a);return function(){var f=Sa.apply(0,arguments),h=this||Ya,k=xsa.get(h);k||(k={},xsa.set(h,k));h=k;k=[this].concat(ya(f));f=b?b(k):k;if(Object.prototype.hasOwnProperty.call(h,f))h=h[f];else{var l=w(k);k=l.next().value;l=xa(l);k=a.apply(k,l);h=h[f]=k}return h}}
function ysa(a,b){a=[a];for(var c=b.length-1;c>=0;--c)a.push(typeof b[c],b[c]);return a.join("\v")}
;function ky(a){Su.call(this);this.o=a||sn();if(this.ma=this.VR())this.oa=Lu(this.o.getDocument(),this.ma,eb(this.eO,this))}
jb(ky,Su);n=ky.prototype;n.VR=jy(function(){var a=this.isSupported(),b=this.FD()!="hidden";if(a){var c;b?c=(((Zb?"Webkit":Yb?"Moz":null)||"")+"visibilitychange").toLowerCase():c="visibilitychange";a=c}else a=null;return a});
n.FD=jy(function(){return vsa("hidden",this.o.getDocument())});
n.eS=jy(function(){return vsa("visibilityState",this.o.getDocument())});
n.isSupported=function(){return!!this.FD()};
n.isHidden=function(){return!!this.o.getDocument()[this.FD()]};
n.eO=function(){var a=this.isSupported()?this.o.getDocument()[this.eS()]:null;a=new wsa(this.isHidden(),a);this.dispatchEvent(a)};
n.fe=function(){Qu(this.oa);ky.wh.fe.call(this)};function ly(a,b,c,e,f,h,k){var l=e===void 0?{}:e;var p=l.vq===void 0?void 0:l.vq;e=l.lJ===void 0?!1:l.lJ;l=l.OA===void 0?!1:l.OA;iy.call(this);var r=this;this.Sa=a;this.transport=c;this.Ma=this.o=this.xc=this.Qb=void 0;this.Ra=[];this.mb=[];this.Ha=e;this.va=b||new Ax;this.ya=new rsa(this.va,this.Ha);this.Va={click:3};this.tb={click:this.wv("generic_click")};this.La=new ky;this.Ic=(new isa(this)).measure(p?function(){return p().then(r.fK.bind(r))}:this.fK).jG().build();
this.ub=new gy(this.Ic,500,this);this.Pa=k||new msa(this.ya,l);this.Sa instanceof nx&&(this.ua=this.Sa);this.qa=f;this.Db=h}
u(ly,iy);function my(a,b,c){a.Va[b]=c;a.tb[b]=a.wv(b)}
function zsa(a,b,c){var e=a.Va[b];if(e&&(b=Asa(a,b,c)))if(a.ua)for(e=a.ua.ua(b,new zra(e)),b=0;b<e.length;++b)a.va.vt(e[b]),a.qa&&ag(e[b],28,a.qa),a.transport&&a.transport.dispatch(e[b]);else c=Bsa(a,b.getElement()),Csa(a,e,b,c),Dsa(b,c)}
function Esa(a){a.o=new tn;a.Ma=a.o.getDocument().body;var b=a.o.getDocument();b.readyState!=="interactive"&&b.readyState!=="complete"||a.Qg();a.Hr(b,"load",a.Qg,!1);a.Hr(b,"DOMContentLoaded",a.Qg,!1);a.listen(a.La,"visibilitychange",a.Qg,!1);a.listen(b,"scroll",a.Qg,!0);a.listen(b,"resize",a.Qg,!0)}
n=ly.prototype;n.Qg=function(){this.o&&this.ub.WH()};
function Csa(a,b,c,e){var f=Fsa(e),h=a.getIndex(c);var k=new Bx;k=cg(k,4,b);var l=c.getTag().getID();k=Yf(k,1,l);f=We(k,3,f,yd);h!=null&&Yf(f,2,h);h=new mra;h.ua=a.getMetadata(c,e);h.ma=a.xc;h.o=a.Qb;c=Qx(new Px,f.serialize());c=We(c,20,h.oa,yd);a.transport&&a.transport.dispatch(c);if(b!=null)for(b=new zra(b),c=0;c<a.Ra.length;c++)a.Ra[c](b)}
n.log=function(a){this.transport&&this.transport.dispatch(a);Rf(a,11)};
function Gsa(a){for(var b=0;b<a.mb.length;b++)a.mb[b]()}
n.getIndex=function(a){return a.getTag().getIndex()};
function Fsa(a){return a.map(function(b){return b.getTag().getID()})}
n.getMetadata=function(a,b){var c=new gx;ax(a.getTag(),c);for(a=0;a<b.length;++a)ax(b[a].getTag(),c);return c};
function Asa(a,b,c){var e,f=a.ya,h=a.tb[b];Zx(c,function(k){if(!bb(k)||k.nodeType!=1)return!1;k=ey(f,k);var l;if(l=k!=null)if(l=k.getTag(),a.Ha){if(!l.zw)throw Error("Method isTrackingXid should only be used when xidTagComponents_ is true.");if(!Xw.has(h))throw Error("Unrecognized eventLabelXid: "+h+".");l=l.ow.has(h)}else l=$w(l,h);return l?(e=k,!0):!1},!0);
return e}
function Bsa(a,b){var c=[],e=a.ya;Zx(b,function(f){if(!bb(f)||f.nodeType!=1)return!1;f=ey(e,f);f!=null&&c.push(f);return!1},!1);
return c}
n.fK=function(){if(!this.La.isHidden()&&this.Ma){var a=!(!window.performance||!window.performance.clearMarks);a&&(window.performance.clearMeasures("ZVwBtb"),window.performance.clearMarks("KtiTlc"),window.performance.mark("KtiTlc"));var b=nsa(this.Pa,this.Ma);if(this.ua){var c=Hsa(this);c=new Jx(0,0,c.width,c.height);var e=psa(this.Pa,b);if(e.length){e=this.ua.oa(e,c);for(var f=0;f<e.length;++f)this.va.vt(e[f]),ag(e[f],28,this.qa),this.transport&&this.transport.dispatch(e[f])}b=qsa(this.Pa,b);b=this.ua.qa(b,
c);if(b.length)for(c=0;c<b.length;++c)this.va.vt(b[c]),this.qa&&ag(b[c],28,this.qa),this.transport&&this.transport.dispatch(b[c]);Gsa(this)}else{c=[];e=Hsa(this);e=new Jx(0,0,e.width,e.height);for(f=0;f<b.length;f++){var h=b[f];if(h.hasAttribute("ve-visible"))var k=h.getAttribute("ve-visible")==="true";else k=h.getBoundingClientRect(),k=(k=Lra(e,new Jx(k.left,k.top,k.width,k.height)))&&k.width>=10&&k.height>=10?!0:!1;k&&(h=ey(this.ya,h))&&$w(h.getTag(),"impression")&&c.push(h)}for(b=0;b<c.length;b++)e=
c[b],e.qa||(f=Bsa(this,e.getElement()),Csa(this,void 0,e,f),Gsa(this),e.qa=!0,Dsa(e,f))}a&&window.performance.measure("ZVwBtb","KtiTlc")}};
n.wv=function(a){return this.Ha?cra(a):a};
function Dsa(a,b){var c="VE:["+a.getTag().getID()+"] pathToRoot:[";b.forEach(function(e){c+=e.getTag().getID()+" -> "});
c+=b.length?"END]":"EMPTY]"}
function Hsa(a){if(a.Db){var b=a.o;a=a.Db();b=vn(a||b.o.defaultView||window)}else b=vn(a.o.o.defaultView||window);return b}
n.Ta=function(){if(this.o){var a=this.o.getDocument();this.unlisten(a,"scroll",this.Qg,!0);this.unlisten(a,"resize",this.Qg,!0);this.unlisten(a,"load",this.Qg,!1);this.unlisten(a,"DOMContentLoaded",this.Qg,!1)}this.unlisten(this.La,"visibilitychange",this.Qg,!1);this.ub.dispose()};function Isa(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var e=b.indexOf(":");if(e!=-1){var f=b.substring(e+1);b=b.substring(0,e);if(c==="http"&&f!=="80"||c==="https"&&f!=="443")a=":"+f}return c+"://"+b+a}
;function Jsa(){function a(){f[0]=1732584193;f[1]=4023233417;f[2]=2562383102;f[3]=271733878;f[4]=3285377520;t=r=0}
function b(v){for(var y=k,E=0;E<64;E+=4)y[E/4]=v[E]<<24|v[E+1]<<16|v[E+2]<<8|v[E+3];for(E=16;E<80;E++)v=y[E-3]^y[E-8]^y[E-14]^y[E-16],y[E]=(v<<1|v>>>31)&4294967295;v=f[0];var oa=f[1],ra=f[2],Aa=f[3],Ba=f[4];for(E=0;E<80;E++){if(E<40)if(E<20){var Ha=Aa^oa&(ra^Aa);var Na=1518500249}else Ha=oa^ra^Aa,Na=1859775393;else E<60?(Ha=oa&ra|Aa&(oa|ra),Na=2400959708):(Ha=oa^ra^Aa,Na=3395469782);Ha=((v<<5|v>>>27)&4294967295)+Ha+Ba+Na+y[E]&4294967295;Ba=Aa;Aa=ra;ra=(oa<<30|oa>>>2)&4294967295;oa=v;v=Ha}f[0]=f[0]+
v&4294967295;f[1]=f[1]+oa&4294967295;f[2]=f[2]+ra&4294967295;f[3]=f[3]+Aa&4294967295;f[4]=f[4]+Ba&4294967295}
function c(v,y){if(typeof v==="string"){v=unescape(encodeURIComponent(v));for(var E=[],oa=0,ra=v.length;oa<ra;++oa)E.push(v.charCodeAt(oa));v=E}y||(y=v.length);E=0;if(r==0)for(;E+64<y;)b(v.slice(E,E+64)),E+=64,t+=64;for(;E<y;)if(h[r++]=v[E++],t++,r==64)for(r=0,b(h);E+64<y;)b(v.slice(E,E+64)),E+=64,t+=64}
function e(){var v=[],y=t*8;r<56?c(l,56-r):c(l,64-(r-56));for(var E=63;E>=56;E--)h[E]=y&255,y>>>=8;b(h);for(E=y=0;E<5;E++)for(var oa=24;oa>=0;oa-=8)v[y++]=f[E]>>oa&255;return v}
for(var f=[],h=[],k=[],l=[128],p=1;p<64;++p)l[p]=0;var r,t;a();return{reset:a,update:c,digest:e,digestString:function(){for(var v=e(),y="",E=0;E<v.length;E++)y+="0123456789ABCDEF".charAt(Math.floor(v[E]/16))+"0123456789ABCDEF".charAt(v[E]%16);return y}}}
;function Ksa(a,b,c){var e=String(Ya.location.href);return e&&a&&b?[b,Lsa(Isa(e),a,c||null)].join(" "):null}
function Lsa(a,b,c){var e=[],f=[];if((Array.isArray(c)?2:1)==1)return f=[b,a],Qb(e,function(l){f.push(l)}),Msa(f.join(" "));
var h=[],k=[];Qb(c,function(l){k.push(l.key);h.push(l.value)});
c=Math.floor((new Date).getTime()/1E3);f=h.length==0?[c,b,a]:[h.join(":"),c,b,a];Qb(e,function(l){f.push(l)});
a=Msa(f.join(" "));a=[c,a];k.length==0||a.push(k.join(""));return a.join("_")}
function Msa(a){var b=Jsa();b.update(a);return b.digestString().toLowerCase()}
;function ny(){this.o=document||{cookie:""}}
n=ny.prototype;n.isEnabled=function(){if(!Ya.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{maxAge:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var e=!1;if(typeof c==="object"){var f=c.sameSite;e=c.secure||!1;var h=c.domain||void 0;var k=c.path||void 0;var l=c.maxAge}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');l===void 0&&(l=-1);c=h?";domain="+h:"";k=k?";path="+k:"";e=e?";secure":"";l=l<0?"":l==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+l*1E3)).toUTCString();this.o.cookie=a+"="+b+c+k+l+e+(f!=null?
";samesite="+f:"")};
n.get=function(a,b){for(var c=a+"=",e=(this.o.cookie||"").split(";"),f=0,h;f<e.length;f++){h=tb(e[f]);if(h.lastIndexOf(c,0)==0)return h.slice(c.length);if(h==a)return""}return b};
n.remove=function(a,b,c){var e=this.get(a)!==void 0;this.set(a,"",{maxAge:0,path:b,domain:c});return e};
n.getKeys=function(){return oy(this).keys};
n.getValues=function(){return oy(this).values};
n.isEmpty=function(){return!this.o.cookie};
n.clear=function(){for(var a=oy(this).keys,b=a.length-1;b>=0;b--)this.remove(a[b])};
function oy(a){a=(a.o.cookie||"").split(";");for(var b=[],c=[],e,f,h=0;h<a.length;h++)f=tb(a[h]),e=f.indexOf("="),e==-1?(b.push(""),c.push(f)):(b.push(f.substring(0,e)),c.push(f.substring(e+1)));return{keys:b,values:c}}
;function Nsa(a,b,c,e){(a=Ya[a])||typeof document==="undefined"||(a=(new ny).get(b));return a?Ksa(a,c,e):null}
function py(a){var b=Isa(Ya==null?void 0:Ya.location.href),c=[],e;(e=Ya.__SAPISID||Ya.__APISID||Ya.__3PSAPISID||Ya.__1PSAPISID||Ya.__OVERRIDE_SID)?e=!0:(typeof document!=="undefined"&&(e=new ny,e=e.get("SAPISID")||e.get("APISID")||e.get("__Secure-3PAPISID")||e.get("__Secure-1PAPISID")),e=!!e);e&&(e=(b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0)?Ya.__SAPISID:Ya.__APISID,e||typeof document==="undefined"||
(e=new ny,e=e.get(b?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Ksa(e,b?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(e),b&&((b=Nsa("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=Nsa("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a)));return c.length==0?null:c.join(" ")}
;function Osa(){}
function Psa(a){var b,c,e,f;return Ra(function(h){switch(h.o){case 1:return b=new CompressionStream("gzip"),c=(new Response(b.readable)).arrayBuffer(),e=b.writable.getWriter(),h.yield(e.write((new TextEncoder).encode(a)),2);case 2:return h.yield(e.close(),3);case 3:return f=Uint8Array,h.yield(c,4);case 4:return h.return(new f(h.ma))}})}
Osa.prototype.isSupported=function(a){return a<1024?!1:typeof CompressionStream!=="undefined"};function qy(a,b){this.o=a;this.callback=b;this.enabled=!1;this.ma=function(){return gb()};
this.oa=this.ma()}
qy.prototype.setInterval=function(a){this.o=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
qy.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){Qsa(a)},this.o),this.oa=this.ma())};
qy.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
function Qsa(a){if(a.enabled){var b=Math.max(a.ma()-a.oa,0);b<a.o*.8?a.timer=setTimeout(function(){Qsa(a)},a.o-b):(a.timer&&(clearTimeout(a.timer),a.timer=void 0),a.callback(),a.enabled&&(a.stop(),a.start()))}else a.timer=void 0}
;function ry(a){this.Aa=se(a)}
u(ry,eh);ry.prototype.UD=function(){return Ef(this,1)};var Rsa=[0,pi,di,Zh,-2];ry.prototype.Ba=wi(Rsa);function sy(a){this.Aa=se(a)}
u(sy,eh);var Ssa=[0,x,-1];sy.prototype.Ba=wi(Ssa);function ty(a){this.Aa=se(a)}
u(ty,eh);function Tsa(a){pf(uy,1,a)}
ty.prototype.setMobile=function(a){return Wf(this,2,a)};
ty.prototype.Gb=function(){return Df(this,6)};
var Usa=yi(ty);var Vsa=[0,ji,Ssa,di,x,-5];ty.prototype.Ba=wi(Vsa);function vy(a){this.Aa=se(a)}
u(vy,eh);vy.prototype.getLocale=function(){return Df(this,5)};var Wsa=[0,x,-1,pi,x,-1,pi,x,-1,Vsa,Rsa];vy.prototype.Ba=wi(Wsa);var Xsa=["platform","platformVersion","architecture","model","uaFullVersion"],uy=new ty,wy=null;function Ysa(a,b){b=b===void 0?Xsa:b;if(!wy){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));Tsa((a.brands||[]).map(function(f){var h=new sy;h=ag(h,1,f.brand);return ag(h,2,f.version)}));
typeof a.mobile==="boolean"&&uy.setMobile(a.mobile);wy=a.getHighEntropyValues(b)}var e=new Set(b);return wy.then(function(f){var h=uy.clone();e.has("platform")&&ag(h,3,f.platform);e.has("platformVersion")&&ag(h,4,f.platformVersion);e.has("architecture")&&ag(h,5,f.architecture);e.has("model")&&ag(h,6,f.model);e.has("uaFullVersion")&&ag(h,7,f.uaFullVersion);return h.serialize()}).catch(function(){return uy.serialize()})}
;var Zsa=[0,x,pi,1,x,-1,pi,1,pi,1,Rh];var $sa=[0,pi,x,-1];var ata=[0,x,-3];var bta=[0,x,-6,Rh,Zh];var cta=[0,pi,x,-2];var dta=[0,x,pi];var eta=[0,x,pi];var fta=[0,x,-6,pi,x,1,x,di,pi,-1,di,x,-2,pi,x,pi,x];var gta=[0,x,-4];var hta=[0,x,-3,Rh,Zh,x];var ita=[0,di,-3];var jta=[0,[0,pi,x,-1,Rh,Zh,-1,x,-4,ji,[0,x,-4],-1,1,ita],[0,pi,x,-1,Rh,Zh,-1,x,-4,ita]];var kta=[0,x,pi,x,-1,Rh,pi,x,-1,pi];var lta=[0,x,pi,x,-2];var mta=[0,x,1,x,-5];var nta=[0,pi,x,-1,Rh,Zh,-1,x,-5,ji,[0,x,-4],-1,di,[0,di,-3],pi];var ota=[0,[1,2,3,4,5,6],ki,Zsa,ki,dta,ki,eta,ki,[0,pi],ki,nta,ki,cta];var pta=[0,pi];var qta=[0,pi,x,-8];var rta=[0,x,[0,Zh,-3],pi,-1];var sta=[0,x,-9];function xy(a){this.Aa=se(a)}
u(xy,eh);function tta(a){return cg(a,1,1)}
;var uta=[0,pi,1,bta,1,mta,x,-1,qta,ata,lta,Wsa,Rh,hta,$sa,sta,fta,1,pta,1,gta,1,Zsa,ota,dta,eta,nta,jta,cta,rta,4,kta];xy.prototype.Ba=wi(uta);var vta=[0,Ph,di,Rh];var wta=[0,di,-1,pi,di];var xta=[0,Rh,-1,x];function yy(a){this.Aa=se(a,19)}
u(yy,eh);yy.prototype.Zv=function(a){return cg(this,2,a)};yy.prototype.Ba=wi([-19,{},uta,pi,ji,Xra,Ph,mi,x,-1,Ph,pi,-1,wta,xta,vta,Rh,1,oi,1,Sx]);function zy(a,b){this.Dk=b=b===void 0?!1:b;this.oa=this.locale=null;this.ma=0;this.isFinal=!1;this.o=new yy;Number.isInteger(a)&&this.o.Zv(a);b||(this.locale=document.documentElement.getAttribute("lang"));Ay(this,new xy)}
zy.prototype.Zv=function(a){this.o.Zv(a);return this};
function Ay(a,b){nf(a.o,xy,1,b);Ef(b,1)||tta(b);a.Dk||(b=By(a),b.getLocale()||ag(b,5,a.locale));a.oa&&(b=By(a),jf(b,ty,9)||nf(b,ty,9,a.oa))}
function yta(a,b){a.ma=b}
function zta(a){var b=b===void 0?Xsa:b;var c=a.Dk?void 0:window;c?Ysa(c,b).then(function(e){a.oa=Usa(e!=null?e:"[]");e=By(a);nf(e,ty,9,a.oa);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function By(a){var b=jf(a.o,xy,1);b||(b=new xy,Ay(a,b));a=b;b=jf(a,vy,11);b||(b=new vy,nf(a,vy,11,b));return b}
zy.prototype.build=function(a,b,c,e,f,h){b=b===void 0?0:b;c=c===void 0?0:c;e=e===void 0?null:e;f=f===void 0?0:f;h=h===void 0?0:h;if(!this.Dk){var k=By(this);var l=new ry;l=cg(l,1,this.ma);l=Wf(l,2,this.isFinal);c=Yf(l,3,c>0?c:void 0);c=Yf(c,4,f>0?f:void 0);c=Yf(c,5,h>0?h:void 0);c=Rca(c);nf(k,ry,10,c)}k=this.o.clone();c=Date.now().toString();k=Ce(k,4,Hd(c));a=a.slice();a=pf(k,3,a);e&&(k=new Mx,e=Yf(k,13,e),k=new Nx,e=nf(k,Mx,2,e),k=new Ox,e=nf(k,Nx,1,e),e=cg(e,2,9),nf(a,Ox,18,e));b&&$f(a,14,b);return a};function Cy(a){this.o=this.ma=this.oa=a}
Cy.prototype.reset=function(){this.o=this.ma=this.oa};
Cy.prototype.getValue=function(){return this.ma};var Ata=[0,gi];var Bta=[0,Zh,pi];var Cta=[0,gi];var Dta=[0,Zh,x];var Eta=[0,ji,[0,x,pi,-1],Rh];var Fta=[0,x,-1];function Dy(a){this.Aa=se(a,8)}
u(Dy,eh);var Gta=yi(Dy),Hta={};Dy.prototype.Ba=wi([-8,Hta,Ph,Ata,Eta,Cta,ji,Bta,ji,Dta,ji,Fta]);function Ey(a){this.Aa=se(a)}
u(Ey,eh);var Ita=[0,Zh];Ey.prototype.Ba=wi(Ita);var Fy=new vi(175237375,Dy,Ey);Hta[175237375]=Ita;function Gy(a){yu.call(this);var b=this;this.componentId="";this.o=[];this.Db="";this.pageId=null;this.Ha=this.Ia=this.va=!1;this.Qb=this.tb=-1;this.Ra=this.experimentIds=null;this.ya=this.ua=0;this.Pa=null;this.Sa=this.Va=0;this.xc=1;this.DA=0;this.Hp=a.Hp;this.Qo=a.Qo||function(){};
this.oa=new zy(a.Hp,a.Dk);this.network=a.network||null;this.Tm=a.Tm||null;this.bufferSize=1E3;this.La=a.oW||null;this.hn=a.hn||null;this.Pt=a.Pt||!1;this.withCredentials=!a.WI;this.Dk=a.Dk||!1;this.Ma=!this.Dk&&!!window&&!!window.navigator&&window.navigator.sendBeacon!==void 0;this.ub=typeof URLSearchParams!=="undefined"&&!!(new URL(Hy())).searchParams&&!!(new URL(Hy())).searchParams.set;var c=tta(new xy);Ay(this.oa,c);this.qa=new Cy(1E4);a=Jta(this,a.vq);this.ma=new qy(this.qa.getValue(),a);this.mb=
new qy(6E5,a);this.Pt||this.mb.start();this.Dk||(document.addEventListener("visibilitychange",function(){if(document.visibilityState==="hidden"){Iy(b);var e;(e=b.Pa)==null||e.flush()}}),document.addEventListener("pagehide",function(){Iy(b);
var e;(e=b.Pa)==null||e.flush()}))}
u(Gy,yu);function Jta(a,b){return a.ub?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
Gy.prototype.fe=function(){Iy(this);this.ma.stop();this.mb.stop();yu.prototype.fe.call(this)};
function Kta(a){a.La||(a.La=Hy());try{return(new URL(a.La)).toString()}catch(b){return(new URL(a.La,window.location.origin)).toString()}}
Gy.prototype.dispatch=function(a){if(a instanceof Px)this.log(a);else try{var b=Qx(new Px,a.serialize());this.log(b)}catch(c){Jy(this,4,1)}};
function Ky(a,b){b?(a.experimentIds||(a.experimentIds=new Kx),a=a.experimentIds,b=b.serialize(),ag(a,4,b)):a.experimentIds&&Ce(a.experimentIds,4)}
function Jy(a,b,c){a.Pa&&a.Pa.increment(b,c)}
Gy.prototype.log=function(a){Jy(this,2,1);if(this.ub){a=a.clone();var b=this.xc++;a=$f(a,21,b);this.componentId&&ag(a,26,this.componentId);b=a;if(Md(Ae(b,1))==null){var c=Date.now();c=Number.isFinite(c)?c.toString():"0";Ce(b,1,Hd(c))}fg(b,15)||(c=(new Date).getTimezoneOffset()*60,$f(b,15,c));this.experimentIds&&(c=this.experimentIds.clone(),nf(b,Kx,16,c));Jy(this,1,1);b=this.o.length-this.bufferSize+1;b>0&&(this.o.splice(0,b),this.ua+=b,Jy(this,3,b));this.o.push(a);this.Pt||this.ma.enabled||this.ma.start()}};
Gy.prototype.flush=function(a,b){var c=this;if(this.o.length===0)a&&a();else{var e=Date.now();if(this.Qb>e&&this.tb<e)b&&b("throttled");else{this.network&&(typeof this.network.UD==="function"?yta(this.oa,this.network.UD()):this.oa.ma=0);var f=this.o.length,h=this.oa.build(this.o,this.ua,this.ya,this.Tm,this.Va,this.Sa),k=this.Qo();if(k&&this.Db===k)b&&b("stale-auth-token");else if(this.o=[],this.ma.enabled&&this.ma.stop(),this.ua=0,this.va)h.serialize(),a&&a();else{e=h.serialize();var l;this.Ra&&
this.Ra.isSupported(e.length)&&(l=Psa(e));var p=Lta(this,e,k),r=function(y){c.qa.reset();c.ma.setInterval(c.qa.getValue());if(y){var E=null;try{var oa=JSON.stringify(JSON.parse(y.replace(")]}'\n","")));E=Gta(oa)}catch(ra){}E&&(y=Number(Bf(E,1,Wc("-1"))),y>0&&(c.tb=Date.now(),c.Qb=c.tb+y),Eca(E.Aa,Fy.fieldIndex),Dca(E,Fy.fieldIndex),E=Fy.ctor?Fy.ma(E,Fy.ctor,Fy.fieldIndex,Fy.o):Fy.ma(E,Fy.fieldIndex,null,Fy.o),E=E===null?void 0:E)&&(E=Af(E,1,-1),E!==-1&&(c.qa=new Cy(E<1?1:E),c.ma.setInterval(c.qa.getValue())))}a&&
a();c.ya=0},t=function(y,E){var oa=lf(h,Px,3,Oe());
var ra=Number(Bf(h,14)),Aa=c.qa;Aa.o=Math.min(3E5,Aa.o*2);Aa.ma=Math.min(3E5,Aa.o+Math.round(.1*(Math.random()-.5)*2*Aa.o));c.ma.setInterval(c.qa.getValue());y===401&&k&&(c.Db=k);ra&&(c.ua+=ra);E===void 0&&(E=500<=y&&y<600||y===401||y===0);E&&(c.o=oa.concat(c.o),c.Pt||c.ma.enabled||c.ma.start());Jy(c,7,1);b&&b("net-send-failed",y);++c.ya},v=function(){c.network&&c.network.send(p,r,t)};
l?l.then(function(y){Jy(c,5,f);p.requestHeaders["Content-Encoding"]="gzip";p.requestHeaders["Content-Type"]="application/binary";p.body=y;p.qQ=2;v()},function(){Jy(c,6,f);
v()}):v()}}}};
function Lta(a,b,c){c=c===void 0?null:c;var e=e===void 0?a.withCredentials:e;var f={},h=new URL(Kta(a));c&&(f.Authorization=c);a.hn&&(f["X-Goog-AuthUser"]=a.hn,h.searchParams.set("authuser",a.hn));a.pageId&&(Object.defineProperty(f,"X-Goog-PageId",{value:a.pageId}),h.searchParams.set("pageId",a.pageId));f&&a.va&&JSON.stringify(f);return{url:h.toString(),body:b,qQ:1,requestHeaders:f,requestType:"POST",withCredentials:e,DA:a.DA}}
function Iy(a){a.va||(a.oa.isFinal=!0,a.Ia&&(a.oa.ma=3,Mta(a)),a.Ha&&(a.oa.ma=2,Nta(a)),a.flush(),a.oa.isFinal=!1)}
function Mta(a){Ota(a,32,10,function(b,c){b=new URL(b);b.searchParams.set("format","json");var e=!1;try{e=window.navigator.sendBeacon(b.toString(),c.serialize())}catch(f){}e||(a.Ma=!1);return e})}
function Nta(a){Ota(a,6,5,function(b,c){b=new URL(b);b.searchParams.set("format","base64json");b.searchParams.set("p",kc(c.serialize(),3));c=b.toString();if(c.length>15360)return!1;(new Image).src=c;return!0})}
function Ota(a,b,c,e){if(a.o.length!==0){var f=new URL(Kta(a));f.searchParams.delete("format");var h=a.Qo();h&&f.searchParams.set("auth",h);f.searchParams.set("authuser",a.hn||"0");for(h=0;h<c&&a.o.length;++h){var k=a.o.slice(0,b),l=a.oa.build(k,a.ua,a.ya,a.Tm,a.Va,a.Sa);if(!e(f.toString(),l)){++a.ya;break}a.ua=0;a.ya=0;a.Va=0;a.Sa=0;a.o=a.o.slice(k.length)}a.ma.enabled&&a.ma.stop()}}
function Hy(){return"https://play.google.com/log?format=json&hasfast=true"}
;function Ly(){this.TP=typeof AbortController!=="undefined"}
Ly.prototype.send=function(a,b,c){var e=this,f,h,k,l,p,r,t,v,y,E;return Ra(function(oa){switch(oa.o){case 1:return h=(f=e.TP?new AbortController:void 0)?setTimeout(function(){f.abort()},a.DA):void 0,Ja(oa,2,3),k=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.requestHeaders)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.DA&&f?f.signal:null}),oa.yield(fetch(a.url,k),5);case 5:l=oa.ma;if(l.status!==200){(p=c)==null||p(l.status);oa.Qa(3);break}if((r=b)==null){oa.Qa(7);break}return oa.yield(l.text(),8);case 8:r(oa.ma);case 7:case 3:Ma(oa);clearTimeout(h);Oa(oa,0);break;case 2:t=La(oa);switch((v=t)==null?void 0:v.name){case "AbortError":(y=c)==null||y(408);break;default:(E=c)==null||E(400)}oa.Qa(3)}})};
Ly.prototype.UD=function(){return 4};function My(a,b){b=b===void 0?"0":b;yu.call(this);this.Hp=a;this.hn=b;this.destinationUrl="https://play.google.com/log?format=json&hasfast=true";this.buildLabel=null;this.ua=!1;this.network=null;this.componentId="";this.o=this.Tm=null;this.ma=this.oa=!1;this.pageId=null;this.bufferSize=void 0}
u(My,yu);function Ny(a,b){a.o=b;return a}
function Pta(a,b){a.Qo=b}
function Oy(a){a.oa=!0;return a}
function Py(a){a.ma=!0;return a}
My.prototype.WI=function(){this.qa=!0;return this};
My.prototype.build=function(){this.network||(this.network=new Ly);var a=new Gy({Hp:this.Hp,Qo:this.Qo?this.Qo:py,hn:this.hn,oW:this.destinationUrl,Dk:this.ua,Pt:!1,WI:this.qa,vq:this.vq,network:this.network});zu(this,fb(xu,a));if(this.buildLabel){var b=this.buildLabel,c=By(a.oa);ag(c,7,b)}a.Ra=new Osa;this.componentId&&(a.componentId=this.componentId);this.Tm&&(a.Tm=this.Tm);this.pageId&&(a.pageId=this.pageId);this.o&&Ky(a,this.o);this.oa&&(a.Ia=this.oa&&a.Ma);this.ma&&(a.Ha=this.ma);zta(a.oa);this.bufferSize&&
(a.bufferSize=this.bufferSize);this.network.Zv&&this.network.Zv(this.Hp);this.network.tV&&this.network.tV(a);return a};function Qy(a,b,c,e,f,h,k,l,p,r,t,v,y){f=f===void 0?!1:f;p=p===void 0?!1:p;l||(b=new My(b,c),e&&(b.destinationUrl=e),h&&(b.vq=h),l=b.build());ly.call(this,a,k||null,l,{lJ:f,vq:h,OA:p},r,t,v);this.ma=l;this.ma.va=!1;a=this.ma;a.Ia=a.Ma;this.ma.Ha=!0;y&&(this.ma.Tm=y)}
u(Qy,ly);hb("help.common.helpapiservice.Environment.PROD","https://clients6.google.com");hb("help.common.helpapiservice.Environment.STAGING","https://content-googleapis-staging.sandbox.google.com");hb("help.common.helpapiservice.Environment.TEST","https://content-googleapis-test.sandbox.google.com");var Qta=XMLHttpRequest;var Rta=["localhost","support"],Sta=[".google.com",".youtube.com"];
function Ry(a){this.Ca=a.apiKey;this.Ra=a.requestSource;this.qa=a.environment||"https://support.google.com";this.ma=a.host;this.Va=a.serviceConfiguration;this.Fa=a.locale;this.Sa=a.sendEndUserCredentials!=void 0?a.sendEndUserCredentials:!0;this.ua=a.authToken;this.Ha=a.authUser;this.mb=a.visitId;this.ya=a.viewId;this.Pa=a.productSpecificData?JSON.stringify(a.productSpecificData):void 0;this.Ma=a.mendelIds;this.httpRequest=a.httpRequest||Qta;this.o=a.useSso||!1;this.va=!1;this.Ia=a.debugParam;this.tb=
a.userIp;this.La=a.Mpa}
Ry.prototype.Yc=function(a){this.ya=a};
Ry.prototype.load=function(a){var b=this,c=Tta(this,a);Uta(this,function(){return Vta(b,c,a)})};
function Vta(a,b,c){var e=new a.httpRequest;c=Wta(c);e.open(c?"POST":"GET",b.apiUrl);c&&e.setRequestHeader("Content-Type","application/json");if(a.Sa||a.o)e.withCredentials=!0,e.setRequestHeader("X-SupportContent-AllowApiCookieAuth","true");a.ua&&e.setRequestHeader("Authorization",a.ua);e.addEventListener("load",function(){Xta(a,b,e.responseText)});
e.addEventListener("error",function(){b.onError({type:1,message:e.responseText})});
e.send(c)}
function Wta(a){var b;a.workflowInitialParams&&(b={workflow_initial_params:a.workflowInitialParams});a.externalCid&&(b=b||{},b.external_cid=a.externalCid);a.workflowExtraParams&&(b=b||{},b.workflow_extra_params=a.workflowExtraParams);return b?JSON.stringify(b):""}
function Tta(a,b){var c="render_api"+(Math.random()*1E9>>>0);a={requestId:c,apiUrl:Yta(a,b,c),onLoad:b.onLoad,onError:b.onError||function(){},
lF:b.lF||function(){},
bU:b.bU||function(){},
dU:b.dU||function(){},
VB:b.VB,pR:b.pageType,responseMustMatchPageType:b.responseMustMatchPageType};b.injectInto&&(b.injectInto.nodeName=="IFRAME"?(a.window=b.injectInto.contentWindow,a.injectInto=a.window.document.body):(a.window=window,a.injectInto=b.injectInto));return a}
function Yta(a,b,c){var e=Zta(a)+"/apis/render?",f=a.Ca,h=a.Ra,k=b.helpcenter,l=b.originHelpcenter,p=a.Fa,r=a.Ha,t=a.mb,v=a.ya,y=a.Pa,E=b.pageType,oa=b.pageId,ra=b.url,Aa=b.includeComponents,Ba=b.excludeComponents;c=["js_request_id."+c];if(b.extraParams)for(var Ha in b.extraParams)c.push(Ha+"."+b.extraParams[Ha]);a={v:1,key:f,request_source:h,helpcenter:k,origin_ehc:l,hl:p,authuser:r,visit_id:t,view_id:v,psd:y,page_type:E,id:oa,url:ra,components:Aa,exclude_components:Ba,extra_params:c,mendel_ids:a.Ma,
service_configuration:a.Va,scdeb:a.Ia,instant_preview:b.instantPreview,symptom:b.symptom,scenario_id:b.testScenarioId,sjid:b.yn,user_ip:a.tb,js_fingerprint:a.La};b="";for(var Na in a)f=a[Na],f!=void 0&&(Array.isArray(f)&&(f=f.join()),b&&(b+="&"),b+=Na+"="+encodeURIComponent(f.toString()));return e+b}
function Xta(a,b,c){try{var e=JSON.parse(c)}catch(f){b.onError({type:1,message:c});return}if(e.application_error!=304||e.html)if(e.application_error!=404&&e.html){if(b.responseMustMatchPageType){if(!e.page_metadata||!e.page_metadata.page_type){b.onError({type:4});return}if(Tfa.get(e.page_metadata.page_type)!=b.pR){b.onError({type:3});return}}e.page_metadata&&b.lF(e.page_metadata);b.injectInto?$ta(a,b,e.html):b.VB(function(f){f.nodeName=="IFRAME"?(b.window=f.contentWindow,b.injectInto=b.window.document.body):
(b.window=window,b.injectInto=f);$ta(a,b,e.html)})}else b.onError({type:2});
else b.onError({type:5})}
function $ta(a,b,c){b.window.sc_scope=b.injectInto;b.onLoad&&(b.window[b.requestId]=function(e){b.onLoad(e.getChild(b.requestId))});
Ml(b.injectInto,ao(c));c=Array.from(b.injectInto.getElementsByTagName("script"));a.oa(b,c)}
Ry.prototype.oa=function(a,b){for(;b.length>0;){var c=b.shift();if(c.src){b=this.oa.bind(this,a,b);aua(a.injectInto,c.src,b);break}try{var e=a.window,f=Pha(c.textContent),h=hga(f),k=e.eval(h);k===h&&(k=e.eval(h.toString()))}catch(l){}}};
function Uta(a,b){!a.o||a.va?b():(window.sc_sso_callback=function(){a.va=!0},aua(document.body,Zta(a)+"/s/sso",b))}
function aua(a,b,c){var e=wn("SCRIPT");Kl(e,co(b));e.addEventListener("load",c);e.addEventListener("error",c);a.appendChild(e)}
function bua(a){var b=new URL(a);if(b.search!==""||b.hash!=="")throw Error("Invalid host value.");if(b.protocol!=="http:"&&b.protocol!=="https:")throw Error("Invalid host value.");if(b.hostname.endsWith(".prod.google.com"))return b.origin;if(!Sta.some(function(c){return b.hostname.endsWith(c)}))throw Error("Invalid host value.");
if(!Rta.some(function(c){return b.hostname.startsWith(c)}))throw Error("Invalid host value.");
return b.origin}
function Zta(a){a.ma?a=a.ma.replace(/\/+$/,""):a.o?(a=a.qa,a=a=="https://support.google.com"?a.replace("support","support.corp"):a.replace("sandbox","corp")):a=a.qa;return bua(a)}
;function cua(a){return"https://apis.google.com/js"+(a?a:"")}
;var dua;function Sy(a,b,c){c=c===void 0?2E3:c;var e=document.querySelector("."+(b===0?"sc-polite-live-region":"sc-assertive-live-region"));e&&(e.textContent=a,clearTimeout(dua),dua=setTimeout(function(){e.textContent=""},c))}
;var eua=[0,1,x,ji,Sj,ei,hi,ei,hi];function Ty(a){this.Aa=se(a)}
u(Ty,eh);Ty.prototype.getCaseId=function(){return Df(this,1)};
function Uy(a,b){return bg(a,1,b)}
Ty.prototype.getChatSupportRequestId=function(){return Df(this,2)};
function Vy(a,b){return bg(a,2,b)}
function Wy(a){return Xf(a,3,!0)}
;var fua=[0,hi,-1,ei,si];Ty.prototype.Ba=wi(fua);var gua=[0,hi,ei,hi];function Xy(a){this.Aa=se(a)}
u(Xy,eh);function Yy(a,b){return of(a,2,Zy,b)}
var hua=yi(Xy),Zy=[1,2,3,6,7];var iua=[0,Zy,ki,gua,ki,fua,ki,eua,2,ki,[0],ki,[0]];Xy.prototype.Ba=wi(iua);var jua=[0,x,-1];function $y(a){this.Aa=se(a)}
u($y,eh);$y.prototype.getValue=function(){return Df(this,1)};
$y.prototype.setValue=function(a){return ag(this,1,a)};
$y.prototype.Yb=function(){return hg(this,1)};function az(a){this.Aa=se(a)}
u(az,eh);az.prototype.getType=function(){return Ef(this,1)};
az.prototype.setType=function(a){return cg(this,1,a)};
az.prototype.getId=function(){return Df(this,2)};
az.prototype.setId=function(a){return ag(this,2,a)};function bz(a){this.Aa=se(a)}
u(bz,eh);bz.prototype.getUrl=function(){return Df(this,1)};
bz.prototype.setUrl=function(a){return ag(this,1,a)};
bz.prototype.getTitle=function(){return Df(this,2)};
bz.prototype.setTitle=function(a){return ag(this,2,a)};function cz(a){this.Aa=se(a)}
u(cz,eh);function kua(a){var b=new cz;return cg(b,1,a)}
;function dz(a){this.Aa=se(a)}
u(dz,eh);function ez(a){this.Aa=se(a)}
u(ez,eh);var fz=[2,3,4,5,6,7,8,9];function gz(a){this.Aa=se(a)}
u(gz,eh);function hz(a,b){return cg(a,1,b)}
function iz(a,b){return ag(a,2,b)}
;function jz(a){this.Aa=se(a)}
u(jz,eh);function lua(a){var b=(new $y).setValue(ym());nf(a,$y,9,b)}
jz.prototype.Tf=function(){return Df(this,1)};
function kz(a,b){return ag(a,1,b)}
jz.prototype.getTimestamp=function(){return jf(this,ij,2)};
jz.prototype.setTimestamp=function(a){return nf(this,ij,2,a)};
function lz(a,b){return ag(a,3,b)}
function mz(a,b){return cg(a,5,b)}
function nz(a,b){return nf(a,ez,6,b)}
function oz(a,b){return nf(a,bz,7,b)}
function pz(a,b){return nf(a,gz,8,b)}
;function qz(a){this.Aa=se(a)}
u(qz,eh);n=qz.prototype;n.getId=function(){return Af(this,1)};
n.setId=function(a){return Yf(this,1,a)};
n.Xl=la(19);n.getQuery=function(){return Df(this,9)};
n.setQuery=function(a){return ag(this,9,a)};
n.getUrl=function(){return Df(this,10)};
n.setUrl=function(a){return ag(this,10,a)};
n.xd=function(){return Af(this,45)};
n.Bg=function(){return Af(this,48)};
n.Yc=function(a){return Yf(this,48,a)};var mua=[0,x];$y.prototype.Ba=wi(mua);var nua=[0,pi,x];az.prototype.Ba=wi(nua);var oua=[0,x,-1,pi];bz.prototype.Ba=wi(oua);var pua=[0,pi,-2];var qua=[0,pi,x,-1];cz.prototype.Ba=wi(qua);var rua=[0,pi,x,pi];var sua=[0,x];var tua=[0,x];var uua=[0,pi];var vua=[0,pi];var wua=[0,Zh];dz.prototype.Ba=wi(wua);var xua=[0,fz,pi,ki,wua,ki,qua,ki,uua,ki,pua,ki,rua,ki,tua,ki,vua,ki,sua,di,-1];ez.prototype.Ba=wi(xua);var yua=[0,pi,x];gz.prototype.Ba=wi(yua);var rz=[0,x,mj,x,nua,pi,xua,oua,yua,mua];jz.prototype.Ba=wi(rz);qz.prototype.Ba=wi([0,Zh,x,-8,Zh,di,x,Rh,x,Zh,-1,x,Rh,-1,Zh,x,Zh,di,pi,-4,Zh,x,-2,Zh,-1,di,Rh,Zh,pi,1,ji,jua,x,rz,x,Zh,x,-1,Zh]);function sz(a,b){this.oa=a;this.ma=a.parentNode;this.o=b;this.o.counter&&zua(this,[{key:this.o.counter,value:((this.o.count||0)+1).toString()}]);this.oa.addEventListener("click",this.ua.bind(this))}
sz.prototype.ua=function(){this.o.id&&zua(this,[{key:this.o.id,value:(new Date).getTime().toString()}]);this.ma.parentNode.removeChild(this.ma)};
function zua(a,b){var c=z();(new Image).src=c.ehn+"/apis/prefinsert?pb="+encodeURIComponent(JSON.stringify({common_params:{context_params:{experiment_id:c.mendel_ids}},resource:{user_pref:b,helpcenter:c.hc,key_type:a.o.type}}))}
window.sc_initNotification=function(a,b){new sz(a,b)};function tz(a){this.Aa=se(a)}
u(tz,eh);tz.prototype.getContentType=function(){return Vf(this,1)};
tz.prototype.setContentType=function(a){return cg(this,1,a)};
tz.prototype.getId=function(a){return If(this,2,a)};
tz.prototype.setId=function(a,b){return $e(this,2,Sd,a,b,Ud)};function uz(a){this.Aa=se(a)}
u(uz,eh);uz.prototype.getStyle=function(){return Ef(this,1)};function vz(a){this.Aa=se(a)}
u(vz,eh);n=vz.prototype;n.yD=function(){return Ef(this,1)};
n.getType=function(){return Ef(this,2)};
n.setType=function(a){return cg(this,2,a)};
n.getId=function(){return Nf(this,4)};
n.setId=function(a){return ag(this,4,a)};
n.zG=function(a){Yf(this,5,a)};
n.gq=function(a){Yf(this,6,a)};
var Aua=xi(vz);function wz(a){this.Aa=se(a)}
u(wz,eh);n=wz.prototype;n.getType=function(){return Ef(this,1)};
n.setType=function(a){return cg(this,1,a)};
n.getId=function(){return Nf(this,3)};
n.setId=function(a){return ag(this,3,a)};
n.zG=function(a){Yf(this,4,a)};
n.gq=function(a){Yf(this,5,a)};
var Bua=xi(wz);function xz(a){this.Aa=se(a)}
u(xz,eh);xz.prototype.getType=function(){return Ef(this,3,1)};
xz.prototype.setType=function(a){return cg(this,3,a)};function yz(a){this.Aa=se(a)}
u(yz,eh);n=yz.prototype;n.getType=function(){return Ef(this,1)};
n.setType=function(a){return cg(this,1,a)};
n.getId=function(){return Nf(this,2)};
n.setId=function(a){return ag(this,2,a)};
n.zG=function(a){Yf(this,3,a)};
n.gq=function(a){Yf(this,4,a)};
var Cua=xi(yz);function zz(a){this.Aa=se(a)}
u(zz,eh);function Az(a){this.Aa=se(a)}
u(Az,eh);function Bz(a){this.Aa=se(a)}
u(Bz,eh);Bz.prototype.Bg=function(){return Rf(this,2)};
Bz.prototype.Yc=function(a){return Yf(this,2,a)};function Cz(a){this.Aa=se(a)}
u(Cz,eh);Cz.prototype.getTop=function(){return Rf(this,1)};
Cz.prototype.setTop=function(a){return Yf(this,1,a)};function Dz(a){this.Aa=se(a)}
u(Dz,eh);Dz.prototype.getType=function(){return Ef(this,1)};
Dz.prototype.setType=function(a){return cg(this,1,a)};
Dz.prototype.getTimestamp=function(){return Tf(this,9)};
Dz.prototype.setTimestamp=function(a){return $f(this,9,a)};function Ez(a){this.Aa=se(a)}
u(Ez,eh);n=Ez.prototype;n.getErrorCode=function(a){var b=Pe(this,8,Ad,3,!0);Qc(b,a);return b[a]};
n.getProjectId=function(){return Uf(this,10)};
n.setProjectId=function(a){return Ce(this,10,Od(a))};
n.getPageType=function(){return Vf(this,19)};
n.Bg=function(){return Rf(this,49)};
n.Yc=function(a){return Yf(this,49,a)};
n.setSupportJourneyId=function(a){return ag(this,59,a)};
n.setHost=function(a){return ag(this,63,a)};function Fz(a){this.Aa=se(a)}
u(Fz,eh);Fz.prototype.setHost=function(a){return ag(this,2,a)};
Fz.prototype.xd=function(){return Cf(this,4)};
var Dua=yi(Fz);var Eua=[0,Rh,x,Rh,-1,Zh,-2,x];var Fua=[0,[0,Nr,iq,[0,x,ji,Sj,hi,-1]],[0,ji,Kq,ji,[0,x,-1],ji,[0,x],ji,[0,si,ji,Kq,x,Eua,hi],Eua],kq];var Gz=[0,pi,gi];tz.prototype.Ba=wi(Gz);var Gua=[0,di,pi,-1,Zh,pi,-1,di];var Hua=[0,Gz,gi,ji,Gua,$h,Zh,Xh,pi,-2];var Iua=[0,x,-1];var Hz=[0,Rh,ji,Iua];var Jua=[0,x,di,x];var Kua=[0,pi,x,pi,-1];var Lua=[0,Zh,-2];var Mua=[0,x,-5,Zh,-1,di,pi,x,[0,di,Mh,x,pi]];var Nua=[0,pi,x,[0,x,-2,Zh,di],x,[0,x,Zh,-1,di,-1],[0,pi,Zh,-2,pi,Rh],[0,$h,x],[0,Zh,-2],[0,x,pi,-4,2,pi]];var Oua=[0,pi];uz.prototype.Ba=wi(Oua);var Pua=[0,pi,-2,x,Zh,-1,Oua];vz.prototype.Ba=wi(Pua);var Qua=[0,pi,-1,x,Zh,-1,Uka];wz.prototype.Ba=wi(Qua);var Rua=[0,Zh,-1,pi,Zh,-1];xz.prototype.Ba=wi(Rua);var Sua=[0,pi,x,Zh,-1];yz.prototype.Ba=wi(Sua);var Tua=[0,Zh,1,Zh];zz.prototype.Ba=wi(Tua);var Uua=[0,x,-1];Az.prototype.Ba=wi(Uua);var Vua=[0,x,Zh,pi,qi,Uua];Bz.prototype.Ba=wi(Vua);var Wua=[0,Zh,x];Cz.prototype.Ba=wi(Wua);var Xua=[0,pi,Vua,Tua,Rua,Pua,ji,Sua,ji,Qua,Wua,Rh];Dz.prototype.Ba=wi(Xua);var Iz=[0,x,-1,ji,Gz,ji,Nua,ji,Gua,x,-1,$h,Zh,Xh,x,-1,ji,Zk,pi,Zh,ji,Kua,pi,-2,$h,-1,Jua,1,x,Zh,-1,gi,Zh,-1,Rh,Zh,pi,ji,Xua,x,pi,Zh,Pfa,di,Wp,Hua,x,ji,[0,pi,Rh,-1,di],pi,Mua,pi,-2,[0,x,-1,pi,Zh,-1,pi],Zh,pi,Lua,pi,-3,$h,Hz,di,x,Fua,x,-2];Ez.prototype.Ba=wi(Iz);Fz.prototype.Ba=wi([0,Iz,x,-1,Xh]);function Jz(a){this.Aa=se(a)}
u(Jz,eh);Jz.prototype.hb=function(){return Tf(this,4)};Jz.prototype.Ba=wi([0,pi,Rh,di,Rh]);function Kz(a){this.Aa=se(a)}
u(Kz,eh);Kz.prototype.Ba=wi([0,ji,rz]);var Yua=[0,pi,-1,x,-1];function Lz(a){this.Aa=se(a)}
u(Lz,eh);Lz.prototype.getStatus=function(){return Ef(this,2)};
Lz.prototype.getErrorMessage=function(){return Df(this,3)};
Lz.prototype.setErrorMessage=function(a){return ag(this,3,a)};var Zua=[0,1,pi,x,Yua];Lz.prototype.Ba=wi(Zua);function Mz(a){this.Aa=se(a)}
u(Mz,eh);Mz.prototype.Hs=la(20);Mz.prototype.Ba=wi([0,1,ji,Zua]);var $ua=[0,x,di];function Nz(a){this.Aa=se(a)}
u(Nz,eh);Nz.prototype.Ba=wi([0,rz,2,$ua]);function Oz(a){a=a===void 0?{}:a;this.Nk=new (a.iV===void 0?$p:a.iV)({serverUrl:z().mld+"/v1",serviceName:"MoltronLoggingService"})}
function Pz(a,b,c,e){e=e===void 0?{}:e;var f=e.FQ;var h=e.jQ;var k,l,p;Ra(function(r){if(!b||!c)return r.return();k=new jz;kz(k,b);k.setTimestamp(kj());lz(k,c);mz(k,3);if(f||h){l=new ez;if(f){var t=kua(1);p=ag(t,2,f);of(l,3,fz,p)}h&&Wf(l,10,!0);nz(k,l)}return r.yield(Qz(a,k),0)})}
function Rz(a,b,c,e){var f=(e===void 0?{wK:!1}:e).wK;var h,k,l,p,r,t;Ra(function(v){if(!b)return v.return();h=[];k=w(c);for(l=k.next();!l.done;l=k.next())if(p=l.value)r=new jz,kz(r,b),r.setTimestamp(kj()),lz(r,p),mz(r,1),f&&(t=new ez,cg(t,1,3),nz(r,t)),lua(r),h.push(r);return v.yield(ava(a,h),0)})}
function bva(a,b){var c,e;Ra(function(f){if(!b)return f.return();c=new jz;kz(c,b);c.setTimestamp(kj());e=new az;e.setType(3);e.setId("other");nf(c,az,4,e);mz(c,3);return f.yield(Qz(a,c),0)})}
function Qz(a,b){var c=c===void 0?!1:c;var e,f,h,k;return Ra(function(l){if(l.o==1)return e=new Nz,lua(b),nf(e,jz,1,b),f={query:{key:z().mkey}},c&&z().li&&(h="",(k=(z().ge||"").toLowerCase())&&(h=py([{key:"e",value:k}])),!h&&z().auth_token&&(h=z().auth_token,(h.startsWith("OAuth")||h.startsWith("Bearer"))&&delete f.query.key),h&&(f.withCredentials=!0,f.headers={Authorization:h})),Ja(l,2),l.yield(a.Nk.post("log-moltron-interaction",e,Lz,f),4);if(l.o!=2)return Ka(l,0);La(l);Ia(l)})}
function ava(a,b){var c;return Ra(function(e){if(e.o==1)return c=new Kz,pf(c,1,b),Ja(e,2),e.yield(a.Nk.post("log-batch-moltron-interaction",c,Mz,{query:{key:z().mkey}}),4);if(e.o!=2)return Ka(e,0);La(e);Ia(e)})}
;var cva=new Map([["PROD",3],["STAGING",4],["DRAFT",2],["READY",4],["TEST",1],["DEV",1],["ALPHA",1],["GKMSSTAGING",4],["LOCAL",1]]),dva=new Map([[0,10],[1,2],[2,25],[4,6],[5,26],[6,13],[7,17],[8,15],[9,23],[10,16],[36,30],[13,8],[14,11],[15,28],[16,3],[17,4],[18,24],[20,14],[21,5],[24,22],[25,21],[26,20],[28,27],[29,29],[30,12],[31,19],[32,18],[33,9],[34,1],[100,0],[11,31],[12,36],[19,32],[23,33],[22,7],[27,34],[35,35],[38,37],[37,38],[39,39]]),eva=new Map([[0,0],[1,1],[2,2],[3,2],[4,3]]),fva=new Map([[0,
0],[1,30],[2,14],[3,6],[4,25],[5,15],[6,18],[7,22],[8,24],[9,10],[10,1],[11,23],[12,28],[13,5],[14,2],[15,7],[16,29],[17,17],[18,26],[19,12],[20,16],[21,13],[22,27],[23,3],[24,11],[25,21],[26,20],[27,4],[28,8],[29,9],[30,19],[31,31],[32,32],[33,33],[34,34],[35,35],[37,37],[36,36],[40,38],[41,39],[42,40],[43,41],[44,42],[45,43],[46,44],[47,45],[48,46],[50,47],[51,48],[52,49],[53,50]]),Sz=new Map([[0,0],[251,245],[260,254],[78,1],[35,2],[32,3],[20,4],[9,5],[8,6],[48,7],[28,8],[33,9],[14,10],[17,11],
[58,12],[15,13],[16,14],[47,15],[21,16],[52,17],[182,175],[29,18],[31,19],[30,20],[49,21],[83,22],[84,23],[85,86],[92,87],[120,111],[121,112],[122,113],[123,114],[125,116],[126,117],[127,118],[18,24],[51,25],[55,26],[56,27],[50,28],[89,77],[160,153],[74,29],[143,135],[75,30],[82,31],[104,95],[76,32],[94,79],[100,88],[101,89],[102,90],[103,94],[90,78],[81,33],[73,34],[40,35],[46,36],[53,37],[88,91],[1,38],[80,39],[27,40],[72,41],[7,42],[57,43],[41,44],[34,45],[23,46],[13,47],[36,48],[45,49],[5,50],
[22,51],[172,165],[37,52],[39,53],[10,54],[11,55],[3,56],[93,80],[130,121],[99,85],[117,108],[26,57],[69,58],[66,59],[61,60],[62,61],[68,62],[70,63],[71,64],[65,65],[67,66],[247,241],[248,242],[249,243],[257,251],[258,252],[259,253],[86,92],[63,67],[59,68],[60,69],[64,70],[87,93],[95,82],[96,84],[97,83],[98,81],[54,71],[24,72],[4,73],[25,74],[44,75],[2,76],[105,96],[151,144],[106,97],[107,98],[108,99],[109,100],[110,103],[111,101],[112,102],[113,104],[114,105],[115,106],[118,107],[116,109],[119,110],
[124,115],[128,119],[129,120],[131,122],[156,149],[132,123],[133,124],[134,125],[135,126],[159,152],[136,127],[19,128],[137,129],[138,130],[139,131],[140,132],[141,133],[142,134],[144,136],[145,138],[146,139],[147,140],[148,141],[149,142],[150,143],[152,145],[153,146],[154,147],[155,148],[157,150],[158,151],[161,154],[162,155],[163,156],[164,157],[165,158],[166,159],[167,160],[168,161],[169,162],[170,163],[171,164],[173,166],[174,167],[175,168],[176,169],[177,170],[178,171],[179,172],[188,181],[189,
182],[201,194],[180,173],[181,174],[242,235],[243,236],[252,246],[253,247],[254,248],[265,259],[268,262],[266,260],[267,261],[282,276],[279,273],[280,274],[250,244],[183,176],[184,177],[185,178],[186,179],[187,180],[190,183],[191,184],[192,185],[193,186],[194,187],[195,188],[196,189],[197,190],[198,191],[199,192],[200,193],[215,208],[216,209],[202,195],[203,196],[204,197],[205,198],[206,199],[207,200],[208,201],[209,202],[210,203],[211,204],[212,205],[213,206],[214,207],[217,210],[218,211],[219,212],
[220,213],[221,214],[222,215],[223,216],[224,217],[225,218],[226,219],[227,220],[228,221],[229,222],[230,223],[231,224],[232,225],[233,226],[255,249],[256,250],[234,227],[235,228],[236,229],[237,230],[238,231],[239,232],[240,233],[241,234],[244,237],[245,238],[246,239],[261,255],[262,256],[263,257],[264,258],[269,263],[270,264],[271,265],[272,266],[273,267],[274,268],[283,277],[284,278],[275,269],[276,270],[277,271],[278,272],[285,279],[286,280],[287,281],[288,282],[281,275],[289,283],[290,284],[291,
285],[292,286],[293,287],[294,288],[295,289],[296,290],[297,291],[298,292],[299,293],[300,294],[301,295],[302,296],[303,297],[304,298],[305,299]]),gva=new Map([[0,0],[1,11],[2,7],[3,3],[4,14],[5,5],[6,8],[7,2],[8,13],[9,4],[10,12],[11,10],[12,6],[13,15],[14,9],[15,1],[16,16],[17,17],[18,18],[19,19],[20,20],[21,21],[22,22],[23,23],[24,24],[25,25],[26,26],[27,27],[28,28],[29,29]]),hva=new Map([[1,1],[39,6],[83,7],[27,8],[3,2],[93,5],[18,10],[102,11],[90,12],[4,13],[8,3],[79,4],[2,4],[92,17],[113,18],
[12,19],[19,20],[87,21],[105,22],[112,23],[109,24],[6,25],[67,26],[75,27],[13,28],[30,29],[84,30],[63,31],[96,32],[97,33],[81,34],[23,35],[73,36],[98,37],[17,38],[115,39],[99,40],[29,41],[14,42],[76,43],[82,44],[24,45],[31,46],[46,47],[22,48],[101,49],[15,50],[25,51],[74,52],[26,53],[111,54],[69,55],[61,56],[91,57],[94,58],[104,59],[116,16],[118,61],[121,65],[65,60],[85,62],[119,63],[120,64],[122,66],[123,67],[124,68],[125,69],[126,70],[127,71],[128,72],[129,73],[130,74],[131,75],[132,76],[134,77],
[135,78],[136,79],[137,80],[138,81],[139,82],[140,83],[141,84],[142,85],[143,86],[144,87],[145,88],[146,89],[147,90],[148,91],[149,92],[150,93],[151,94],[152,95],[153,96],[154,97]]);function Tz(a){this.Aa=se(a)}
u(Tz,eh);Tz.prototype.getProjectId=function(){return Tf(this,1)};
Tz.prototype.setProjectId=function(a){return $f(this,1,a)};
Tz.prototype.getRole=function(){return Nf(this,3)};var iva=[0,Rh,pi,x,-1,di,-1];Tz.prototype.Ba=wi(iva);function Uz(a){this.Aa=se(a)}
u(Uz,eh);var jva=[0,pi,-1,Zh];Uz.prototype.Ba=wi(jva);function Vz(a){this.Aa=se(a)}
u(Vz,eh);Vz.prototype.xd=function(){return Gf(this,4)};var kva=[0,x,-2,Sh];Vz.prototype.Ba=wi(kva);var lva=[0,x,-12];function Wz(a){this.Aa=se(a)}
u(Wz,eh);Wz.prototype.getPageType=function(){return Vf(this,1)};
Wz.prototype.setHost=function(a){return ag(this,13,a)};var mva=[0,pi,x,-1,pi,di,x,Zh,1,lva,pi,x,-2];Wz.prototype.Ba=wi(mva);function Xz(a){this.Aa=se(a)}
u(Xz,eh);var nva=[0,x,-1];Xz.prototype.Ba=wi(nva);function Yz(a){this.Aa=se(a)}
u(Yz,eh);Yz.prototype.Bg=function(){return Nf(this,2)};
Yz.prototype.Yc=function(a){return ag(this,2,a)};
Yz.prototype.setSupportJourneyId=function(a){return ag(this,6,a)};var ova=[0,x,-2,di,Rh,x,-1];Yz.prototype.Ba=wi(ova);var pva=[0,pi,x];var qva=[0,x,-1];var Zz=[0,x];var rva=[0];var $z=[0,x,-1];var sva=[0];var tva=[0,$z];var aA=[0,x,mj,[0,[1,2],ki,[0,x],ki,[0,Zz],x,-1]];var bA=[0,x,-1,Rh,$da,[0,4,x,-2,Zh,x,-2],7,di];var cA=[0,[4],bA,ji,bA,pi,ki,[0,ji,[0,bA,Zh,ai]]];var dA=[0,[1,2],ki,sva,ki,rva];var uva=[0,ji,dA];var vva=[0,[2,3,4,5,6,7,8,9,10,11],aA,ki,[0,[2,3,4,5,6,7,9],[0,di,ji,[0,[2,3],pi,ki,$z,ki,tva]],ki,sva,ki,rva,ki,$z,ki,[0,Zh,-1,pi],ki,[0,ji,tva],ki,[0],[0,pi],ki,[0]],ki,[0,[1,2,3,4,5,6,7],ki,uva,ki,[0,[1,2],ki,dA,ki,[0]],ki,[0,x,-1,[0,gi,Zh,-1],pi],ki,[0],ki,[0,pi],ki,[0,ji,[0,x,di,x,-1],uva],ki,[0,ji,dA]],ki,[0],ki,[0],ki,[0,[1],ki,[0,x,pi,cA],2,[-1,{}]],ki,[0,x,-1,[-1,{}]],ki,[0,[1,2,3],ki,[0,cA],ki,[0,Zz],ki,[0,di]],ki,[0,[1],ki,Zz],ki,[0,[1,2,3],ki,[0,x,-1],ki,[0,x,-1],ki,[0,[2,3,4],x,ki,[0],
ki,[0],ki,[0,cA],x]],ki,[0,[0,di]]];var wva=[0,[0,[2,3,4,9],aA,ki,[0,di],ki,[0,aA,oi,dA],ki,[0,di,aA,dA],4,ki,[0,ji,[0,[2],x,ki,[0]]]],ji,vva];var xva=[0,[0,Zz,[0,x,[0,[0,[1,2,3,4,5,7,8,9,10,11,12],ki,[0,Zz],ki,[0,[2,3,4,5,6,7],x,ki,[0,x,-1],ki,[0],ki,[0,[1],ii],ki,[0],ki,[0],ki,[0]],ki,[0,[0,x,-1],[0,[1,2,3],ki,[0],ki,[0],ki,[0]]],ki,[0],ki,[0,[0,x,-2,pi,x]],[0,ai],ki,[0],ki,[0,x],ki,[0],ki,[0],ki,[0],ki,[0]],x,pi,mj],ji,wva],wva,[0,[0,qva,pva]]],ji,[0,vva]];var yva=[0,[20],pi,-1,x,pi,x,14,ki,[0,2,x,-1,1,x,-2,Zh,-1,di]];function eA(a){this.Aa=se(a)}
u(eA,eh);n=eA.prototype;n.getType=function(){return Ef(this,1)};
n.setType=function(a){return cg(this,1,a)};
n.getIndex=function(){return Rf(this,4)};
n.sB=function(a){Yf(this,4,a)};
n.gq=function(a){Yf(this,5,a)};function fA(a){this.Aa=se(a)}
u(fA,eh);n=fA.prototype;n.getType=function(){return Ef(this,1)};
n.setType=function(a){return cg(this,1,a)};
n.getIndex=function(){return Rf(this,4)};
n.sB=function(a){Yf(this,4,a)};
n.gq=function(a){Yf(this,5,a)};function gA(a){this.Aa=se(a)}
u(gA,eh);n=gA.prototype;n.getType=function(){return Ef(this,1)};
n.setType=function(a){return cg(this,1,a)};
n.getIndex=function(){return Rf(this,3)};
n.sB=function(a){Yf(this,3,a)};
n.gq=function(a){Yf(this,4,a)};function hA(a){this.Aa=se(a)}
u(hA,eh);hA.prototype.getType=function(){return Ef(this,1)};
hA.prototype.setType=function(a){return cg(this,1,a)};function iA(a){this.Aa=se(a)}
u(iA,eh);function jA(a){this.Aa=se(a)}
u(jA,eh);function kA(a){this.Aa=se(a)}
u(kA,eh);kA.prototype.getType=function(){return Ef(this,1)};
kA.prototype.setType=function(a){return cg(this,1,a)};
kA.prototype.getTimestamp=function(){return jf(this,ij,8)};
kA.prototype.setTimestamp=function(a){return nf(this,ij,8,a)};
var lA=[2,3,4,5,6,7];function mA(a){this.Aa=se(a)}
u(mA,eh);function nA(a){this.Aa=se(a)}
u(nA,eh);function oA(a){this.Aa=se(a,500)}
u(oA,eh);function pA(a,b){return sf(a,8,kA,b)}
var zva=yi(oA);var Ava=[0,pi,-1,x,Zh,-1];eA.prototype.Ba=wi(Ava);var Bva=[0,pi,-1,x,Zh,-1];fA.prototype.Ba=wi(Bva);var Cva=[0,pi,x,Zh,-1];gA.prototype.Ba=wi(Cva);var Dva=[0,pi,Zh,-3];hA.prototype.Ba=wi(Dva);var Eva=[0,Zh,-1,2,Zh];iA.prototype.Ba=wi(Eva);var Fva=[0,Zh,x];jA.prototype.Ba=wi(Fva);var Gva=[0,lA,pi,ki,Ava,ki,Bva,ki,Cva,ki,Dva,ki,Eva,ki,Fva,mj];kA.prototype.Ba=wi(Gva);var Hva=[0,x,pi,-1];var Iva=[0,[2,3],[0,x,-1,pi,x,-1],ki,[0,pi,-1,Rh,Zh,x,-2,pi,-1,[0,pi,Zh]],ki,[0,x,2,mj,x,[0,1,x,pi],1,[0,[2,3,4,6,7,8,9,10],1,ki,[0,Zh],ki,[0,1,x,pi,x],ki,[0,1,pi],pi,ki,[0,pi,-2],ki,[0,pi,x,pi],ki,[0,x],ki,[0,pi],ki,[0,x],di],pi,-2,Hva]];var Jva=[0,pi,-3,Zh];var Kva=[0,pi,x];var Lva=[0,gi,-17];var Mva=[0,x,-1];mA.prototype.Ba=wi(Mva);var Nva=[0,ji,Kva,pi,-1,ji,Mva,ji,Jva,ji,cl,Lva,Fua];nA.prototype.Ba=wi(Nva);var Ova=[0,pi,x,-1];var Pva=[0,pi,Kh];var qA=[0,ji,[0,pi,Kh,Zh,-1],Pva,ji,[0,pi,Kh,di],Kh,ri,x,ri,ji,Pva];var rA=[0,[2,3,4],qA,ki,[0,x,-1],ki,[0,x,-1],ki,[0,[1,2],ii,-1]];var sA=[0,pi,[0,x,-3,pi,-1],[0,pi,-3,x,1,x,-1,7,x],[0,Rh,x,-2],[0,x,-2,gi,[0,mj,-1,Rh,Kh],x,pi,x],[0,pi,di,-1,x],[0,x,-1,1,pi,[0,x,-1,[0,x,-1],x],x],[0,[0,x]],[0],qva,pva];var tA=[0,x,pi,-2];var uA=[0,gi];var Qva=[0,x,-2];var Rva=[0,[2],x,ki,Qva,qA];var vA=[0,[1,2,4],ki,[0,x,-3],ki,[0,pi,x],qA,ki,[0,x]];var Sva=[0,x,-1,qA,[0,x]];var Tva=[0,x,Qva];var Uva=[0,ji,vA,Zh,-1,uA];var Vva=[0,function(){return wA},
pi],wA=[0,qA,ji,[0,x,-1],ji,Tva,ji,vA,Uva,ji,function(){return wA},
ji,function(){return Vva},
x,-1,ji,Tva];var Wva=[0,[3,5,6,7,8,9],2,ki,Sva,1,ki,[0,pi,qA],ki,[0,x,qA,pi,1,ji,vA],ki,Uva,ki,[0,ji,Rva,ji,vA],ki,wA];var xA=[0,[3,4],mj,Zh,ki,[0,[1,2,3,4,5,6,7],ki,[0,x,-3],ki,[0,vA,pi],ki,[0,Rva,pi],ki,[0,Sva,pi,ji,[0,x,-1]],ki,[0,pi],ki,[0,wA,pi],ki,[0]],ki,[0,tA,Wva,uA]];var Xva=[0,x,pi,ri,x];var yA=[0,[6,7,8,9],x,-3,ji,function(){return yA},
ki,[0,x,-2],ki,[0,x,-3,ji,[0,x,-1]],ki,[0,x,-2],ki,[0,x,-1],x];var Yva=[0,yA,Kh,qA,di];var Zva=[0,x,Kh,qA];var $va=[0,pi,Kh,qA];var awa=[0,x,-2];var bwa=[0,[2,3],x,Vh,ii];var zA=[0,ji,[0,[1],ki,bwa],[0,x,-1],[0,[1],ki,bwa],[0,Zh,x,-1],2,[0,x],x,-1];var cwa=[0,x,Kh,zA];var AA=[0,qA,ji,function(){return AA},
pi,-2,Zh,x,-3,[0,[6,7,8],di,-4,fi,-2,Zh,-2,Rh,mj,di,Kh,x,-2],[0,[0,Kh,-4],-2],x,[0,x,-1,Rh,-1,[0,x,-4],rk,mj]];var BA=[0,si,hi,-1,ei,gi,function(){return BA},
Ah,[!0,x,function(){return BA}],
gi,Uh,-1,Kh,-1,Uh,-1,hi,Vj,ji,function(){return BA},
-2,function(){return BA},
Uh,-1,gi,hi,Vj];var dwa=[0,x,ji,[0,[1,3,4,5,7],ii,1,ki,[0,x,li],ki,[0,x,-1,Wj],ki,[0,x,-1,Wj],[0,di],ki,[0,x,-1]]];var CA=[0,[4,5,6],x,-1,li,fi,-1,ii,x];var ewa=[0,ji,[0,ai,Nh,ni,ai]];var fwa=[0,[0,ji,[0,hi,ji,[0,hi,Nh,[0,Oh,[0,si,Oh]],ji,[0,Oh,-1]]]],ewa];var DA=[0,ai,Nh];var EA=[0,[1,3],ii,1,aea,hi];var gwa=[0,[1],fi];var FA=[0,EA,DA,ewa,fwa];var hwa=[0,[9,13,14],[7],EA,rk,-1,si,1,[0,bi,ni],ki,[0],DA,ki,FA,FA,[0,Nh,-2,DA],gwa,ki,FA,-1,hi,3,fwa];var iwa=[0,si,ni,ai,hi,-1];var jwa=[0,[16],2,bi,-1,EA,[0,ni],iwa,DA,7,ki,[0],gwa,bi,1,ji,iwa];var lwa=[0,ji,function(){return kwa}],GA=[0,
ji,function(){return mwa}],kwa=[0,
[1,2,3,4,5,6,7,8,10],ti,Lh,ii,fi,ki,function(){return GA},
ki,function(){return lwa},
ki,jwa,ki,hwa,ei,ki,[0,[2,3],[0,hwa,ji,[0,jwa,rk]],ki,EA,ki,[0,hi,-1,Uh,hi],96,[0,[1,2],ki,[0,rk,-1],ki,rk,[0,1,Oh,Zh,hi,si],[0],[0]]]],mwa=[0,hi,function(){return kwa}];var HA=[0,pi,x,-1,di,gi,function(){return HA},
Ah,[!0,x,function(){return HA}],
gi,Rh,gi,Rh,Kh,-1,ji,function(){return HA},
x,function(){return HA},
ji,function(){return HA},
Vj,x,Ah,[!0,x,function(){return HA}],
Rh,-1,x];var owa=[0,ji,function(){return nwa}],nwa=[0,
[1,2,3,4,5,6,7,8,9,10,11],fi,ci,Vh,Lh,ii,ki,[0,x,li],ki,function(){return owa},
Wda,ki,[0,ji,[-4,{},x,ji,[-19,{},[3,4,8,9,11,12,14,15,16,17],2,ii,ki,[0,2,Zh,-1,CA],1,[0,ai,Nh,pi,ji,[0,ji,[0,Nh,ai],x,li,ai,pi,Th,[0,x]],1,ji,[0,ji,[0,Nh,Th]],ai,Nh,di,ji,[0,ai,Nh]],pi,ki,[0,CA,rk,-1,Zh],ki,[0,CA,rk,-1,Mh,Zh],pi,ki,[0,x],ki,[0],x,ki,[0,x,-1,HA,-1,[0,x,di,-3]],ki,[0,x,-1,Wj,GA,di],ki,[0,x,-1,Wj,GA],ki,[0,CA],[0,ri]],[-1,{}]],[-5,{},x,-1,ji,[0,pi,-2],mj]],ki,[0,ji,dwa],ki,BA];var pwa=[0,gi,x,-1,ji,[0,x,nwa],-1];var qwa=[0,ji,[0,[1,2,3],ki,[0,ji,[0,x,Mh,x],Th],ki,[0,ji,[0,Nh,x]],ki,[0,ji,[0,dwa,x]]],[0,Mh]];var rwa=[0,zA,ji,qwa,x];var IA=[0,x,-1];var JA=[0,Rh,Zh];var KA=[0,pi,oi,x];var swa=[0,x,li];var LA=[0,pi,x];var twa=[0,ji,[0,pi,oi,x,di,LA]];var MA=[-500,jva,iva,ova,mva,nva,kva,yva,ji,Gva,991,Nva,[0,ji,[0,Rh,-2],pi,-2,qi,pi,Rh,-1,Sh,di,pi],[0,1,$h,[0,[0,pi,[0,qi,-2,Zh,-3,ji,[0,x,gi,-2,x,pi],[0,pi],[0,x,Zh,-2],Zh,-2],x,-5,sA,x],[0,ji,AA,Zh,1,x,[0,ji,[0,pi,x],ji,[0,x,-1]],[0,di,-1,x],[0,ji,[0,gi,pi]],tA,x],1,[0,[0,Th,di,-2,x,Rh,-6,di,Rh,-1,x,-2,Rh,-5,Th,Rh,-3,di,-13,x,-3],[0,x,-5,di,x,-6],[0,x,-5,di,-32,x,-11],1,[0,[1,2,3],Vh,-2],[0,x,-25],x]],[0,[0,pi,x,-1],pi,rk,[0,zA,x,sA,pwa],[0,ji,qwa,x],[0,mj],x,[0,Rh,-2,Zh,-7,Ah,dea]],[0,[0,pi,sA,
x,-2,pi,x,-1,pi,x,[0,ji,[0,x,-1,pi]],di,x],[0,Hva,ji,[0,[3,4,5],qA,di,ki,awa,ki,[0,x],ki,[0,x,awa],gi],gi,x]],[0,tA,mj,x,[0,pi,x],pi,[0,[2,3,4,5,6,7,8,9],pi,ki,[0,Zh],ki,[0,pi,x,-1],ki,[0,pi],ki,[0,pi,-2],ki,[0,pi,x,pi],ki,[0,x],ki,[0,pi],ki,[0,x],di,-1]],[0,[0,[3,4],pi,sA,ki,[0,x],ki,[0,x,gi,x]],[0,[2,3],tA,ki,[0,qA,pi,-1],ki,[0,cwa,ji,cwa]]],[0,pi,[0,sA,x,-2,pi,x],[0,ji,AA]],[0,[0,pi,[0,sA,x,-4],[0,1,[0,x],gi],[0,1,[0,Zh]]],[0,tA,[0,7,ji,[0,[0,x,pi,x,di],IA],ji,[0,[0,x,-2,pi,x,di],IA],ji,[0,[0,
x,-1,pi,x,di],IA],ji,[0,[0,x,-2,pi,x],IA],ji,[0,[0,[0,ri],pi,di],IA],ji,[0,[0,gi,pi],IA]],[0,ji,[0,x,1,pi,Zh,ji,[0,1,x,1,x,-1],2,x,-3]]],[0,ji,[0,x,pi]]],[0,[0,x,Zh,sA,ji,xA,pi,ji,xA],[0,tA,Wva,pi,uA,ji,[0,x,-1,ji,[0,x,li,-1]]]],[0,x,ri],[0,[0,sA,ji,xA,-1,x,-1,[0,ri,Zh,di],x,-3,Rh,x,-1],[0,x,ji,[0,[1,2,3],ki,Yva,ki,Zva,ki,$va],tA,[0,ji,Yva],[0,ji,Zva],[0,di,ji,$va],[0,x,ji,yA,x,-1,1,x,-1,ji,Xva,ji,yA,ji,Xva]]],[0,[0,[0,[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],pi,ki,[0,x,-2],ki,
[0,x,-2],ki,[0,Rh,1,pi],ki,[0,x],ki,[0,x,-1,pi],ki,[0,x],ki,[0,x],ki,[0,x],ki,[0,x,pi],ki,[0,x],ki,[0,x],ki,[0],ki,[0,x,-1],ki,[0,x],ki,[0,x,-1],ki,[0,x,-1],ki,[0],ki,[0,pi],ki,[0,x],ki,[0,x],ki,[0,x,Rh],ki,[0,x,ji,[0,x,-1]],x,Ah,eea,x],1,pwa,x,sA],[0,x,rwa,ji,rwa]],[0,[0,sA,x,ai,x,Zh],[0,tA,ji,[0,Zh,Mh,qA]]],[0,[0,sA,[0,ji,[0,[1,2],ki,[0,x],ki,rA]],x],[0,tA,rA],ji,rA],[0,[0,pi,sA,[0,Rh,-2,x,-2,pi,x,-3],[0,x,mj]],[0,tA,[0,ji,[0,x,Kh,qA]],di,[0,x,gi]]],[0,[0,sA,x,-1,pi,x,ji,[0,pi],Zh,x,-1],[0,tA,ji,
[0,qA,di,x,Kh]]]],Iva,[0,[1],ki,[0,[0,[0,Uh,bi],JA,1,[0,x],[0,x,[0,Kh,-7,di,pi]],[0,x,-2,di],[0,[0,[0,x,-1,pi,x,-4],JA],[0,pi,x,qi,Zh],pi]],[0,[2,3],[4,5],x,ki,[0,[0,x,gi,di]],ki,[0,[0,[2,3,4,5,6],JA,ki,[0,pi],ki,[0,[0,[0,gi],x],[0,[0,[0,x,-1],[0,[0,x,-4],[0,ji,[0,x,-1]]]]]],ki,[0,di],ki,[0,[2,3,4,5],oi,ki,[0,KA],ki,[0,ji,KA],ki,[0,KA],ki,[0,x]],ki,[0]],swa],ki,[0,swa,[0,[0,di,x],[0,x,-2,qi],[0,[0,JA,-1],1,pi,qi],[0,di,-1],ji,[0,[4,5,6,7],oi,x,pi,ki,[0,twa,pi],ki,[0,twa],ki,[0,pi,oi,bea,x,-1,ji,[0,
ai,LA]],ki,[0,1,x,-1],di,x,ji,[0,[2],x,ki,[0,oi]],[0,x,LA]],1,qi,[0,x,-2]],x,qi,x],ki,[0]],[0,pi,-1],[0,[1,2,3,4,5,6],ki,[0,pi],ki,[0],ki,[0,x,Zh,di,-1],ki,[0,Zh,qi,pi,-1],ki,[0],ki,[0]]]],[0,[5,6,7,8],x,di,pi,x,ki,[0,x,-1],ki,[0,x,-1],ki,[0,x,-1],ki,[0,Rh,-1]],[0,x,[0,pi,-1,[0,x],pi,Ova,pi],[0,[1,2,3,4,5,6,7],ki,[0,Rh,pi],ki,[0],ki,[0,Rh],ki,[0],ki,[0,[1,2],ki,[0,x],ki,[0,x],pi,-1],ki,[0],ki,[0,di,-4,ri,-1,ji,[0,pi,x]]],x,[0,x,-3,[0,gi,x,-1,pi,ji,[0,x,di,pi,Ova,pi]]],x,[0,x,pi],x,[0,pi,-1],gi,x,
gi,1,x],xva];oA.prototype.Ba=wi(MA);function NA(a){var b=a.env;var c=a.cl;var e=a.visitId;var f=a.vid;var h=a.pt;var k=a.pid;var l=a.rl;var p=a.dt;var r=a.ii;var t=a.cc;var v=a.lang;var y=a.hc;var E=a.ehc;var oa=a.rs;var ra=a.Ke;var Aa=a.webHistoryEnabled;var Ba=a.supportJourneyId;a=a.productEscalationsId;var Ha=new oA;c=Number(c);var Na=new Uz;Na=cg(Na,1,2);b=cva.get(b);b=cg(Na,2,b);c=Number.isFinite(c)?c:null;b=Yf(b,3,c);Ha=nf(Ha,Uz,1,b);b=new Yz;e=ag(b,1,e);Aa=Wf(e,4,Aa);f&&Aa.Yc(f.toString());Aa.setSupportJourneyId(Ba);f=nf(Ha,
Yz,3,Aa);Ba=new Wz;h=dva.get(h);h=cg(Ba,1,h);k=ag(h,2,k);l=ag(k,3,l);p=eva.get(p);p=cg(l,4,p);r=Wf(p,5,r);t=ag(r,6,t);t=cg(t,10,1);t=nf(f,Wz,4,t);r=new Xz;v=ag(r,1,v);v=nf(t,Xz,5,v);t=new Vz;y=ag(t,1,y);E=ag(y,2,E);E=Ze(E,4,Dd,a,void 0,Ld);E=nf(v,Vz,6,E);a=new Tz;oa=hva.has(oa)?hva.get(oa):0;oa=cg(a,2,oa);oa=nf(E,Tz,2,oa);E=new nA;if(ra&&ra.exp)for(ra=w(ra.exp),a=ra.next();!a.done;a=ra.next())if((a=a.value)&&a.active_groups)for(a=a.active_groups.split(";"),a=w(a),y=a.next();!y.done;y=a.next())y=y.value.split("::"),
y.length===2&&(v=new mA,v=ag(v,1,y[0]),y=ag(v,2,y[1]),sf(E,4,mA,y));return nf(oa,nA,1E3,E)}
;function OA(a,b,c){Oz.call(this);this.o=a;this.dymTrackingId=b;this.sessionId=c;this.ma=new Map}
u(OA,Oz);function PA(a,b,c){c=c===void 0?!0:c;var e,f;Ra(function(h){e=mz(kz(QA(),b),1);c&&(f=iz(hz(new gz,a.o?3:1),a.sessionId),pz(e,f));return h.yield(Qz(a,e),0)})}
function RA(a,b,c,e,f){f=f===void 0?!0:f;Ra(function(h){return h.yield(a.bx("reportSearchResultClick",a.ZU,b,c,e,f),0)})}
n=OA.prototype;n.ZU=function(a,b,c,e){e=e===void 0?!0:e;var f=this,h,k,l;return Ra(function(p){h=mz(lz(kz(QA(),a),b),3);e&&(k=iz(hz(new gz,f.o?4:2),f.sessionId),pz(h,k));l=(new bz).setUrl(c);oz(h,l);return p.yield(Qz(f,h),0)})};
n.cM=la(21);n.dA=function(a,b,c){var e=this;return Ra(function(f){return f.yield(e.bx("reportSearchResultsFeatureClick",e.aV,a,b,c),0)})};
n.aV=function(a,b,c){var e=this,f;return Ra(function(h){f=uwa(e,a,b,4,c);return h.yield(Qz(e,f),0)})};
n.dM=la(22);function vwa(a,b,c){var e,f;return Ra(function(h){var k=new ez;var l=new dz;l=Yf(l,1,c);e=of(k,2,fz,l);f=nz(mz(kz(QA(),b),4),e);return h.yield(Qz(a,f),0)})}
function uwa(a,b,c,e,f){b=mz(lz(kz(QA(),b),c),3);f&&(f=(new bz).setUrl(f),oz(b,f));a=iz(hz(new gz,e),a.sessionId);pz(b,a);return b}
function QA(){return(new jz).setTimestamp(kj())}
n.bx=function(a,b){var c=Sa.apply(2,arguments),e=this.sQ.apply(this,[a].concat(ya(c))),f=this.ma.get(e);f||(f=bha(b.bind.apply(b,[this].concat(ya(c)))),this.ma.set(e,f));return f()};
n.sQ=function(a){return a+"("+Sa.apply(1,arguments).join(",")+")"};function SA(a){this.o=a;this.ua="";this.ma=[]}
SA.prototype.init=function(){wwa(this);xwa(this);!this.o.visit_id&&window.sc_visit_id&&(this.o.visit_id=window.sc_visit_id);if(!TA){var a=document.getElementsByTagName("body")[0],b=this.qa.bind(this);a.addEventListener("click",b);TA=!0;document.addEventListener("pjaxunload",function(){a.removeEventListener("click",b);TA=!1})}ywa();
zwa(this);Awa();Bwa();this.o.fragment&&(window.location.hash=this.o.fragment);!this.o.is_render_api&&this.o.esid&&(this.ua=Zga(),window.setInterval(Vga,5E3));Cwa()};
function Bwa(){function a(b,c){var e=js(b,c);e&&window.requestAnimationFrame(function(){var f=document.querySelector('[data-videoid="'+e+'"]');if(f){var h=Tm();window.scroll(0,window.pageYOffset+f.getBoundingClientRect().top-(h||0))}})}
window.addEventListener("load",function(){return a("",location.href)});
window.addEventListener("hashchange",function(b){return a(b.oldURL,b.newURL)})}
SA.prototype.Gb=function(){return this.o};
SA.prototype.oa=function(a){for(var b=0;b<a.length;b++)this.ma.push(a[b])};
SA.prototype.qa=function(a){var b=a.target;b=b.nodeType!==Node.ELEMENT_NODE?b.parentNode:b;for(var c=!1,e=!1,f="",h=!1,k=!1,l="";b&&b.getAttribute;)if(l=b.getAttribute("href"),b instanceof HTMLAnchorElement&&l){h=b.target=="_blank"||a.ctrlKey||a.shiftKey||a.metaKey||a.button==1;Om(b)?c=!0:b.getAttribute("href")[0]!="#"&&(e=!0,f=Qm(b));b.getAttribute("href").indexOf("authuser=")!=-1&&(k=!0);break}else if(Dwa(b))break;else b=b.parentNode;a={event:a,element:b,blank:h,external:c,hc_internal:e,href:l,
target_hc:f,authuser_related:k};window.sc_visitManagerProcessClick(a);for(b=0;b<this.ma.length;b++)this.ma[b](a)};
function ywa(){for(var a=(window.sc_scope||document).querySelectorAll("select"),b=0;b<a.length;b++){var c=a[b];c.addEventListener("mousedown",function(){$m(!0)});
c.addEventListener("change",function(){$m(!1)})}}
function Cwa(){window.addEventListener("pageshow",function(){Kw()})}
function xwa(a){var b=[];if(Fm())try{var c=window.localStorage;c.setItem("__storage_test__","__storage_test__");c.removeItem("__storage_test__")}catch(e){b.push(2)}else b.push(1);navigator.cookieEnabled||b.push(3);b.length>0&&(a.o.request_attributes=b)}
function zwa(a){a.oa([function(b){(b=b.href)&&b[0]==="#"&&UA(wm(b))}]);
window.addEventListener("hashchange",function(){UA(wm());var b=wm();(b=VA(b))&&b.scrollIntoView()});
window.addEventListener("load",function(){var b=wm();UA(b);(b=VA(b))&&b.scrollIntoView()})}
function Awa(){var a=document.querySelector(".main-content");a&&a.addEventListener("focusin",function(b){if(b.target instanceof Element){var c=Tm();c&&(b=b.target.getBoundingClientRect().top,c=Math.max(c-b,0),c>0&&window.scrollBy(0,-c))}})}
function wwa(a){var b=window.sc_scope||document;b instanceof HTMLDocument&&(b=b.documentElement);b.setAttribute("lang",a.o.lang);b.setAttribute("dir",a.o.rtl?"rtl":"ltr")}
function VA(a){return document.getElementById(a)||document.getElementsByName(a)[0]}
function UA(a){if(a=VA(a)){var b=Tm()||0;var c=(c=document.querySelector(".article-nav"))?c.offsetHeight:void 0;var e=(e=document.querySelector(".scDiscoveryGeniesticky"))?e.offsetHeight:void 0;b=b+(c||0)+(e||0);a.style.scrollMarginTop=b?b+16+"px":""}}
var TA=!1,WA={};function Dwa(a){switch(a.tagName){case "BUTTON":case "INPUT":case "OPTION":case "SELECT":return!0}return!1}
window.sc_initPage=function(a){var b=new SA(a);b.init();if(window.sc_refresh==1){var c;window.sc_pageModel&&(c=window.sc_pageModel.iro);window.sc_pageModel=b.Gb();window.sc_sid=b.ua;c&&(window.sc_pageModel.iro=c);window.sc_registerPageClickHandlers=b.oa.bind(b)}else window.sc_pageModel.html_title=a.html_title};
window.sc_initHelpcenterPageModelProto=function(a){window.sc_helpcenterPageModelProto=a};
hb("hcfe.Page",SA);hb("hcfe.Page.setString",function(a,b){WA[a]=b});
hb("hcfe.Page.getString",function(a){return WA[a]});function Ewa(){this.start=window.performance.now()}
Ewa.prototype.report=function(a){var b=window.performance.now();a={type:a,duration_ms:b-this.start};if(this.requestUrl)for(var c=w(window.performance.getEntriesByName(this.requestUrl)),e=c.next();!e.done;e=c.next())if(e=e.value,e.responseStart>=this.start){a.srt=e.responseStart-this.start;a.ol=a.prt=b-e.responseStart;break}var f;(f=jt)==null||f.cq(a)};
function XA(a,b,c,e){c=c===void 0?0:c;e=e===void 0?!0:e;var f=new Jz;b=cg(f,1,b);a=Math.trunc(window.performance.now()-a.start);a=$f(b,2,a);e=Wf(a,3,e);c!==0&&$f(e,4,c);zm({endpoint:"recordsla",httpMethod:"POST",params:{v:"1"},requestBody:e.serialize()})}
;function YA(a){this.Aa=se(a)}
u(YA,eh);YA.prototype.setHost=function(a){return ag(this,3,a)};
YA.prototype.xd=function(){return Cf(this,4)};YA.prototype.Ba=wi([0,MA,x,-1,Xh,-1,ai]);var Fwa=new Map([["PROD",1],["STAGING",2],["DRAFT",3],["READY",4],["TEST",5],["DEV",6],["ALPHA",7],["GKMSSTAGING",8],["LOCAL",9]]),Gwa=new Set;function Hwa(a){var b=this;this.Ke=a;this.nK=!1;this.currentFormId=this.pL=this.jV=this.JV=0;this.sN=Gwa;this.transport=this.Sj(1046,860);this.lM=this.Sj(1324,1323);this.Cb=new OA(!1,"","");jt=this;Iwa(this);window.sc_registerPageClickHandlers&&window.sc_registerPageClickHandlers([function(c){return void b.yd(c)}])}
n=Hwa.prototype;n.Sj=function(a,b){var c=z(),e=Vw(new Uw,c.mendel_ids);a=Ny(new My(c.env==="PROD"?b:a,String(c.au||"0")),e);c.auth_token?Pta(a,function(){return c.auth_token}):"about:blank"===location.href&&Pta(a,function(){return""});
a=a.build();a.Ia=a.Ma;a.Ha=!0;return a};
function Iwa(a){var b=Hm("StatsDeferredClearcut",!0);if(b){b=Dua(b);var c=jf(b,Ez,1);ag(c,34,z().visit_id);c=lf(c,Dz,33,Oe());if(c.length>0){a.transport.dispatch(b);a.transport.flush();try{Zm(document,"sc_statsEvent",{detail:c[0]})}catch(e){}}}if(b=Hm("ScaledStatsDeferredClearcut",!0))b=zva(b),c=jf(b,Yz,3),ag(c,1,z().visit_id),ZA(a,b)}
n.gW=function(){this.KA();if(window.sc_refresh){var a=$A(this,1);var b=new zz;b=Yf(b,1,Number(this.Ke.cl));var c=Number(Hm("refererViewId"));c>0&&Yf(b,3,c);nf(a,zz,3,b);aB(this,a)}};
function bB(a){for(var b=[],c=w(document.querySelectorAll("[data-stats-visible-imp]")),e=c.next();!e.done;e=c.next()){e=e.value;var f=cB(e,{type:0}),h=f.type+"-"+f.id+"-"+f.index,k;if(k=!a.sN.has(h))k=void 0,k=k===void 0?50:k,k=$ga(e)>=k;k&&(a.sN.add(h),b.push(f))}a.Dn(b,!0)}
function Jwa(a){if(!a.nK){a.nK=!0;bB(a);var b;window.addEventListener("scroll",function(){window.clearTimeout(b);b=window.setTimeout(function(){return void bB(a)},300)})}}
n.KA=function(a){var b=[];a=w((a||document).querySelectorAll("[data-stats-imp]"));for(var c=a.next();!c.done;c=a.next())b.push(cB(c.value,{type:0}));this.Dn(b)};
n.fW=function(a,b){a=cB(a,{type:0});a.type=b||a.type;this.Dn([a])};
n.Dn=function(a,b){b=b===void 0?!1:b;if(a.length!==0){var c=$A(this,b?7:3),e=NA(dB(this.Ke));b=b?7:3;a=w(a);for(var f=a.next();!f.done;f=a.next()){f=f.value;var h=(new yz).setType(f.type);f.id&&h.setId(f.id);eB(h,f.index);sf(c,6,yz,h);h=(new gA).setType(Sz.get(f.type));f.id&&ag(h,2,f.id);eB(h,f.index);f=(new kA).setType(b);f=of(f,4,lA,h);pA(e,f.setTimestamp((new ij).setSeconds(Date.now()/1E3)))}aB(this,c);ZA(this,e)}};
n.qb=function(a,b,c,e,f,h){Kwa(this,a,b,c,e,h);f instanceof Function&&f()};
n.rN=function(a,b,c,e,f,h,k){a&&(a=cB(a,{type:0,action:0},h),Kwa(this,b||a.type,c||a.action,e||a.id,f||a.index,k))};
function Kwa(a,b,c,e,f,h){var k=$A(a,5);var l=(new wz).setType(b);l=cg(l,2,c);b=(new fA).setType(Sz.get(b));c=fva.get(c);c=cg(b,2,c);e&&(l.setId(e),ag(c,3,e));h&&nf(l,ur,6,h);eB(l,f);eB(c,f);sf(k,7,wz,l);aB(a,k);e=NA(dB(a.Ke));f=(new kA).setType(2);f=of(f,3,lA,c);e=pA(e,f.setTimestamp((new ij).setSeconds(Date.now()/1E3)));ZA(a,e)}
n.yd=function(a){if(a.href!=="#"){var b=a.element;if(b){a:{var c=b;var e;if(e=c){b:{for(e=c;e;){if(e.hasAttribute&&e.hasAttribute("data-stats-ignore")){e=!0;break b}e=e.parentNode}e=!1}e=!e}if(e)for(;c;){if(c.hasAttribute&&c.hasAttribute("data-stats-action")||c.tagName==="A"||Dwa(c))break a;c=c.parentNode}c=null}if(c){e=b.href;var f=(f=b.getAttribute("data-stats-toggle-class"))?!nm(b,f):b instanceof HTMLInputElement&&(b.type==="checkbox"||b.type==="radio")&&!b.checked;e=cB(b,{type:0,id:e,action:f?
29:8});if(e.id!==void 0){a.hc_internal&&Gm("refererViewId",z().vid);b=this.yD(a);a:{f=w(fna);for(var h=f.next();!h.done;h=f.next()){var k=w(h.value);h=k.next().value;k=k.next().value;if(nm(c,h)){f=k;break a}}f=void 0}f=Lwa(this,e,b,f);e=Mwa(e);e=pA(NA(dB(this.Ke)),e);a=a.event;switch(b){case 2:fB(this,a,c,f,e);break;case 1:b=Nwa(this,f);b=Owa(this,b);Gm("StatsDeferredClearcut",b.serialize())||fB(this,a,c,f);Gm("ScaledStatsDeferredClearcut",e.serialize())||fB(this,a,c,void 0,e);break;default:case 3:aB(this,
f),ZA(this,e)}}}}}};
function fB(a,b,c,e,f){e&&aB(a,e);f&&ZA(a,f);if(!b.defaultPrevented){b.preventDefault();a=c.getAttribute&&c.getAttribute("data-stats-delay-url");if(!a&&c instanceof HTMLAnchorElement&&(a=c.href)&&c.target==="_blank"){Gl(window,a);return}a&&(c=bb(c)&&el(c)&&c.tagName.toUpperCase()==="A".toString()?c.target:"",b=window.sc_delayLocationHandler,b instanceof Function?b(a):Km(a,!0,c))}}
function gB(a,b,c,e,f){var h=Lwa(a,{type:b,action:c,id:e,index:f},3);b=Mwa({type:b,action:c,id:e,index:f});b=pA(NA(dB(a.Ke)),b);aB(a,h);ZA(a,b)}
function Lwa(a,b,c,e){a=$A(a,4);var f=new vz;c=cg(f,1,c).setType(b.type);c=cg(c,3,b.action).setId(b.id);eB(c,b.index);e&&(b=new uz,e=cg(b,1,e),nf(c,uz,7,e));nf(a,vz,5,c);return a}
function Mwa(a){var b=(new eA).setType(Sz.get(a.type));var c=fva.get(a.action);b=cg(b,2,c);b=ag(b,3,a.id);eB(b,a.index);a=(new kA).setType(1);return of(a,2,lA,b).setTimestamp((new ij).setSeconds(Date.now()/1E3))}
function cB(a,b,c){c=c===void 0?!1:c;return{id:hB({element:a,attr:"data-stats-id",defaultValue:b.id}),type:Pwa({element:a,attr:"data-stats-ve",defaultValue:b.type,ft:!0}),action:Pwa({element:a,attr:"data-stats-action",defaultValue:b.action,ft:c}),index:hB({element:a,attr:"data-stats-idx",defaultValue:b.index})}}
n.yD=function(a){var b=a.element.getAttribute("data-stats-method");if(b)switch(b.toUpperCase()){case "DELAY":return 2;case "DEFER":return 1;default:return 3}return a.blank||a.authuser_related?3:a.external?2:a.hc_internal?1:3};
n.cq=function(a){var b=$A(this,2),c=new xz;a.ol&&a.ol>=0&&Yf(c,1,Math.round(a.ol));a.prt&&a.prt>=0&&Yf(c,2,Math.round(a.prt));a.srt&&a.srt>=0&&Yf(c,5,Math.round(a.srt));if(a.type&&a.duration_ms){var e=c.setType(a.type);Yf(e,4,Math.round(a.duration_ms))}nf(b,xz,4,c);aB(this,b);var f=gva.get(a.type);e=a.duration_ms;b=a.ol;c=a.prt;a=a.srt;f=(new hA).setType(f);e=Yf(f,2,e);b>=0&&Yf(e,3,b);c>=0&&Yf(e,4,c);a>=0&&Yf(e,5,a);a=NA(dB(this.Ke));b=(new kA).setType(4);b=of(b,5,lA,e);a=pA(a,b.setTimestamp((new ij).setSeconds(Date.now()/
1E3)));ZA(this,a)};
n.hW=function(a){var b=new iA;a.ol>=0&&Yf(b,1,a.ol);a.prt>=0&&Yf(b,2,a.prt);a.srt>=0&&Yf(b,5,a.srt);a=NA(dB(this.Ke));var c=(new kA).setType(5);b=of(c,6,lA,b);b=pA(a,b.setTimestamp((new ij).setSeconds(Date.now()/1E3)));ZA(this,b)};
n.iW=function(a){var b=$A(this,6),c=new Cz;if(a.top!==void 0&&a.page_view_id!==void 0){var e=c.setTop(Math.trunc(Number(a.top||0)/1E3));ag(e,2,a.page_view_id||"");nf(b,Cz,8,c);aB(this,b);b=NA(dB(this.Ke));e=(new kA).setType(6);var f=new jA;f=Yf(f,1,a.top||0);a=ag(f,2,a.page_view_id||"");a=of(e,7,lA,a);a=pA(b,a.setTimestamp((new ij).setSeconds(Date.now()/1E3)));ZA(this,a);z().pt===10&&Vm("MoltronLoggingFeature__enable_view_duration_logs")==="true"&&vwa(this.Cb,this.Ke.mid||"",c.getTop()||0)}};
n.Md=function(){return new Ewa};
function $A(a,b){var c=z();var e=new Bz;e=cg(e,3,c.iro);e=ag(e,1,c.pid).Yc(c.vid);c.request_attributes&&We(e,4,c.request_attributes,vd);if(c=Vm("workflow__session-id")){var f=new Az;c=ag(f,1,c);a.currentFormId!==0&&ag(c,2,String(a.currentFormId));nf(e,Az,5,c)}a=new Dz;return nf(a,Bz,2,e).setType(b)}
function Nwa(a,b){var c=z();b.setTimestamp(a.pL===0?Date.now():a.pL);var e=new Ez;e=cg(e,35,c.ncc);a.Ke.cc&&ag(e,41,a.Ke.cc);var f=cg(e,17,c.dt);f=ag(f,24,c.ehc);f=ag(f,1,c.hc);f=Wf(f,38,c.ii);f=We(f,21,c.mendel_ids,yd);f=cg(f,46,3);f=cg(f,19,c.pt);f=cg(f,14,1);f=cg(f,32,c.rs);f=ag(f,2,c.rl);f=ag(f,12,c.lang);f=cg(f,45,22);f=Yf(f,15,17515);b=sf(f,33,Dz,b);b=cg(b,43,c.rt).Yc(c.vid);b=ag(b,34,c.visit_id);b=cg(b,55,2);b=Wf(b,58,c.web_history_enabled).setSupportJourneyId(c.support_journey_id);c=Fwa.get(c.env)||
0;cg(b,53,c);if(a.Ke.exp)for(a=w(a.Ke.exp),c=a.next();!c.done;c=a.next())if((c=c.value)&&c.active_groups)for(c=c.active_groups.split(";"),c=w(c),b=c.next();!b.done;b=c.next())b=b.value.split("::"),b.length===2&&(f=new Kk,f=ag(f,1,b[0]),b=ag(f,2,b[1]),sf(e,13,Kk,b));a=(new tz).setContentType(55);sf(e,3,tz,a);return e}
function Owa(a,b){var c=z(),e=new Fz;b=nf(e,Ez,1,b);c.ehn&&(c=sp(c.ehn.match(rp)[3]||null),b.setHost(c));a.Ke.ref&&ag(b,3,a.Ke.ref);return b}
function aB(a,b){if(go("workflow__kms")!=="true"&&!(++a.JV>1E3)){var c=Nwa(a,b);wf(c,1)===""?Am({Issue:"No helpcenter found when populating clearcut stats",Stats:b}):(c=Owa(a,c),a.transport.dispatch(c),a.transport.flush(),Zm(document,"sc_statsEvent",{detail:b}))}}
function ZA(a,b){if(go("workflow__kms")!=="true"){var c=jf(b,Vz,6);if(wf(c,1)==="")Am({Issue:"No helpcenter found when populating scaled clearcut",Extension:b});else if(!(++a.jV>1E3)){c=new YA;c=nf(c,oA,1,b);var e=z();e.ehn&&(e=sp(e.ehn.match(rp)[3]||null),c.setHost(e));a.Ke.ref&&ag(c,2,a.Ke.ref);(e=Vm("zwieback_id"))&&Number(e)>0&&Ce(c,5,Od(e));a.lM.dispatch(c);a.lM.flush();Zm(document,"sc_scaledStatsEvent",{details:b})}}}
function hB(a){var b=a.element;var c=a.attr;var e=a.defaultValue;a=a.ft===void 0?!1:a.ft;var f=b&&b.getAttribute&&b.getAttribute(c);if(a)for(;b&&!f;)f=b.getAttribute&&b.getAttribute(c),b=b.parentNode;return(f=f||e)?f.toLowerCase():void 0}
function Pwa(a){var b=a.element;var c=a.attr;var e=a.defaultValue;a=Number(hB({element:b,attr:c,ft:a.ft===void 0?!1:a.ft}));return isNaN(a)?e:a}
function eB(a,b){b&&(b=b.split(","),b[0]&&(Aua(a)||Bua(a)||Cua(a)?a.zG(Number(b[0])):a.sB(Number(b[0]))),b[1]&&a.gq(Number(b[1])))}
window.sc_initStats=function(a){window.sc_statsModel=a;if(!window.sc_refresh){var b=window.sc_trackStatsScopedImpressions;if(b){b(window.sc_scope);return}}a=new Hwa(a);Jwa(a);window.sc_trackStatsEvent=a.qb.bind(a);window.sc_trackStatsEventByElement=a.rN.bind(a);window.sc_trackStatsScopedImpressions=a.KA.bind(a);window.sc_trackStatsImpressions=a.Dn.bind(a);window.sc_trackStatsImpressionByElement=a.fW.bind(a);window.sc_trackStatsLatency=a.cq.bind(a);window.sc_trackStatsPageView=a.gW.bind(a);window.sc_trackStatsTimeOnPage=
a.iW.bind(a);window.sc_trackScaledSupportPageView=a.hW.bind(a)};
function dB(a){var b=z();return{env:b.env,cl:b.cl,visitId:b.visit_id,vid:b.vid,pt:b.pt,pid:b.pid,rl:b.rl,dt:b.dt,ii:b.ii,cc:b.cc,lang:b.lang,hc:b.hc,ehc:b.ehc,rs:b.rs,Ke:a,webHistoryEnabled:!!b.web_history_enabled,supportJourneyId:b.support_journey_id||"",productEscalationsId:Vm("productEscalationsId")?Number(Vm("productEscalationsId")):0}}
;var Qwa=za(["/s/renderframe2/"]);function iB(a){this.formId=a}
iB.prototype.load=function(){var a=this;if(this.o)return this.o;this.iframe=document.createElement("iframe");this.iframe.style.display="none";document.body.appendChild(this.iframe);this.o=new Promise(function(b,c){a.iframe.addEventListener("load",function(){var e;return Ra(function(f){if(f.o==1)return Ja(f,2),f.yield(a.Gp(),4);if(f.o!=2){a.form=f.ma;var h=a.form,k=Xm();Object.keys(k).length>0&&h.setProductSpecificData(k);a.iframe.contentWindow.sc_ensureSubscribed=window.sc_ensureSubscribed;b();return Ka(f,
0)}e=La(f);c(e);Ia(f)})})});
Fl(this.iframe,1,fm(Qwa));return this.o};
iB.prototype.Gp=function(){var a=this;return new Promise(function(b,c){(new Ry({apiKey:z().skey||"",requestSource:z().rs,locale:z().lang,sendEndUserCredentials:!0,authToken:z().auth_token,authUser:z().au,host:z().ehn,visitId:z().visit_id,viewId:z().vid})).load({helpcenter:z().hc,pageType:"CONTACT_FORM",pageId:a.formId,includeComponents:[],injectInto:a.iframe,onLoad:function(e){return void b(e)},
onError:c})})};
iB.prototype.getChatAvailability=function(){var a=this,b,c;return Ra(function(e){return e.return((c=(b=a.form)==null?void 0:b.getChatAvailability())!=null?c:!1)})};
iB.prototype.submitForm=function(){this.form.submitForm()};function jB(a){var b=ym();return b?Mo(a,new Map([["sjid",b]]),!0):a}
;function Rwa(){Swa(this)}
function Swa(a){window.sc_registerPageClickHandlers([function(b){b.hc_internal&&(b=b.element,b.href&&b.href.startsWith("http")&&(b.search=kB(b.search)))}.bind(a)]);
Xga(function(b){b.href&&b.href.startsWith("http")&&(b.search=kB(b.search))});
a.o();window.addEventListener("load",a.o.bind(a))}
Rwa.prototype.o=function(){for(var a=document.querySelectorAll(".gaiabar form, .non-one-bar form, #search-form"),b=0;b<a.length;b++)for(var c=a[b],e=0;e<xm.length;e++){var f=xm[e],h=om(f);if(h){var k=c.querySelector('[name="'+f+'"]');k||(k=document.createElement("input"),k.type="hidden",k.name=f,c.appendChild(k));k.value=h}}};
function kB(a){for(var b=w(xm),c=b.next();!c.done;c=b.next()){c=c.value;if(c in Uga){var e=Uga[c]();if(e){a=rm(c,e,a);continue}}om(c,a)||(e=om(c))&&(a=rm(c,e,a))}return a}
window.sc_initQueryParameterPreserver=function(){new Rwa};var Twa=za(["https://www.google.com/recaptcha/api.js?trustedtypes=true&onload=","&render=explicit&hl=",""]);function lB(a,b){this.ua=a;this.oa=b;this.ma=this.o=void 0;Uwa(this)}
function Uwa(a){window.sc_renderRecaptcha=function(){return Vwa(a)};
var b=document.createElement("script"),c=fm(Twa,"sc_renderRecaptcha",z().lang);Kl(b,c);document.head.appendChild(b)}
function Vwa(a){a.ma=grecaptcha.render(a.ua,{sitekey:"6LdZHQYTAAAAAFnofYfPjNlXpxWAqTwfLh9d0zL2",callback:function(){a.o&&a.o()},
size:z().dt===1?"normal":"compact",theme:Em()?"dark":"light"});a.oa&&a.oa()}
lB.prototype.Km=function(a){this.o=a;return this};
lB.prototype.getResponse=function(){return grecaptcha?grecaptcha.getResponse(this.ma):""};
lB.prototype.reset=function(){grecaptcha&&grecaptcha.reset(this.ma)};
lB.prototype.reset=lB.prototype.reset;lB.prototype.getResponse=lB.prototype.getResponse;lB.prototype.onResponse=lB.prototype.Km;function mB(a,b,c){this.o=a;this.ma=b;this.Cz=c;this.states=[];nB(this)}
function nB(a){var b=a.o();return a.states.length===0||a.states[a.states.length-1].value!==b?(a.states=[new Wwa(b)],!0):!1}
mB.prototype.set=function(a,b,c){var e=this,f;return Ra(function(h){nB(e);if(a===e.o())return h.return();f=new Wwa(a);e.states.push(f);e.ma(a);return h.return(b().then(function(){var k=e.states.indexOf(f);k!==-1&&e.states.splice(0,k)}).catch(function(k){var l=f;
if(!nB(e)&&(l=e.states.indexOf(l),l!==-1&&(e.states.splice(l,1),e.states[e.states.length-1].value!==e.o()))){e.ma(e.states[e.states.length-1].value);c==null||c();var p;(p=e.Cz)==null||p.call(e)}throw k;}))})};
function Wwa(a){this.value=a}
;function oB(a){var b=a.id;var c=a.languageCode===void 0?z().lang:a.languageCode;var e=a.defaultLanguage;a=a.url===void 0?"":a.url;xo.call(this);this.o=this.va=this.duration="";this.defaultThumbnail={};this.mediumThumbnail={};this.highThumbnail={};this.standardThumbnail={};this.oa={};this.channelTitle=this.channelId=this.defaultLanguage=this.ua=this.title="";this.viewCount=0;this.ma=!1;this.client=new gs;this.embedUrl="";this.state=0;this.id=b;this.qa=c!=null?c:"";this.languageCode=c?c.toLowerCase():
"";e&&(this.ua=e,this.defaultLanguage=e.toLowerCase());this.url=a}
u(oB,xo);
function pB(a){var b;return Ra(function(c){if(c.o==1){if(!a.id||a.state!==0)return c.Qa(0);a.state=1;Ja(c,3);return c.yield(wla(a.client,a.id,a.qa),5)}if(c.o!=3){b=c.ma;if(b.items&&b.items[0]){var e=b.items[0],f;if((f=e.contentDetails)==null?0:f.duration)f=e.contentDetails.duration,a.o=f,a.duration=Xwa(a,f);var h,k;if((h=e.snippet)==null?0:(k=h.thumbnails)==null?0:k.default){var l,p;h=(l=e.snippet)==null?void 0:(p=l.thumbnails)==null?void 0:p.default;a.defaultThumbnail=h}var r,t;if((r=e.snippet)==null?
0:(t=r.thumbnails)==null?0:t.medium)a.mediumThumbnail=e.snippet.thumbnails.medium;var v,y;if((v=e.snippet)==null?0:(y=v.thumbnails)==null?0:y.high)a.highThumbnail=e.snippet.thumbnails.high;var E,oa;if((E=e.snippet)==null?0:(oa=E.thumbnails)==null?0:oa.standard)a.standardThumbnail=e.snippet.thumbnails.standard;var ra,Aa;if((ra=e.snippet)==null?0:(Aa=ra.thumbnails)==null?0:Aa.maxres)a.oa=e.snippet.thumbnails.maxres;var Ba,Ha;((Ba=e.snippet)==null?0:(Ha=Ba.localized)==null?0:Ha.title)&&a.setTitle(e.snippet.localized.title);
var Na;if((Na=e.snippet)==null?0:Na.defaultLanguage)l=e.snippet.defaultLanguage,a.ua=l,a.defaultLanguage=l.toLowerCase();var Va;if((Va=e.snippet)==null?0:Va.channelId)a.channelId=e.snippet.channelId;var cb;if((cb=e.snippet)==null?0:cb.channelTitle)a.channelTitle=e.snippet.channelTitle;var sb;if((sb=e.snippet)==null?0:sb.publishedAt)a.publishedAt=new Date(e.snippet.publishedAt);var Cb;if((Cb=e.statistics)==null?0:Cb.viewCount)a.viewCount=Number(e.statistics.viewCount);cb=a.ua;Va=a.qa.split("-")[0].toLowerCase();
cb=cb.split("-")[0].toLowerCase();if(Va===cb||e.localizations&&e.localizations[a.qa])a.ma=!0;e="https://www.youtube.com/embed/"+encodeURIComponent(a.id);a.embedUrl=e}a.state=2;a.Da(0);Wm("youtube_video_model/load/success");return Ka(c,0)}La(c);a.state=3;a.Da(0);Wm("youtube_video_model/load/failure");Ia(c)})}
n=oB.prototype;n.getId=function(){return this.id};
function Ywa(a){var b=[];a.defaultThumbnail.url!=null&&b.push(a.defaultThumbnail.url);a.mediumThumbnail.url!=null&&b.push(a.mediumThumbnail.url);a.standardThumbnail.url!=null&&b.push(a.standardThumbnail.url);a.highThumbnail.url!=null&&b.push(a.highThumbnail.url);a.oa.url!=null&&b.push(a.oa.url);return b}
n.getTitle=function(){return this.title};
n.setTitle=function(a){this.title=a};
n.getLanguage=function(){return this.languageCode};
n.cj=function(){return this.viewCount};
n.getState=function(){return this.state};
function Xwa(a,b){b=b.replaceAll(/[PTS]/g,"").replaceAll(/[HM]/g,":");var c=b.indexOf("D");if(c!==-1){var e=Number(b.substring(0,c))*24,f=b.indexOf(":");b=""+(Number(b.substring(c+1,f))+e)+b.substring(f)}a.va=ena(b);b.split(":").length===1&&(b="0:"+b);return b.split(":").map(function(h,k){return k===0?h:h.padStart(2,"0")}).join(":")}
;var qB=void 0;function rB(){qB!==void 0||console.error("Settings must be initialized before being used.");return qB}
function sB(){var a;return(a=rB().JK)!=null?a:!1}
function tB(a){return(a=a===void 0?"":a)&&qB===void 0?a:rB().language}
;var Zwa=za(["//www.youtube.com/player_api"]),uB=4/3,$wa=16/9,vB={autoplay:1,cc_load_policy:1,controls:2,hl:"en",rel:0,playsinline:0};function wB(a){var b=a.Hb;var c=a.tm===void 0?!1:a.tm;a=a.playerVars===void 0?vB:a.playerVars;A.call(this,"sc.tailwind.shared.video.VideoPlayer");this.o=!1;this.ma=0;this.Hb=b;this.tm=c;this.id=this.Hb.getId();this.playerVars=a;b=this.Hb.mediumThumbnail.width;c=this.Hb.mediumThumbnail.height;this.aspectRatio=b&&c?b/c===uB?uB:$wa:uB;this.watch(this.Hb)}
u(wB,A);wB.prototype.content=function(){var a=this;this.root=this.element("div","class","root","tabindex","0","onkeydown",function(b){!a.player||!a.o||b.altKey||b.ctrlKey||b.metaKey||b.shiftKey||b.key!==" "&&b.key!=="Spacebar"||(a.player.getPlayerState()===1?a.player.pauseVideo():a.player.playVideo(),b.stopPropagation(),b.preventDefault())},function(){a.container=a.element("div","class","container","")});
this.playerVars.autoplay===1&&this.root.focus()};
function axa(a){a.player=new window.YT.Player(a.container,{height:String((a.tm?960:640)/a.aspectRatio),width:String(a.tm?960:640),videoId:a.id,playerVars:Object.assign({},a.playerVars,{hl:a.Hb.getLanguage(),enablejsapi:1}),events:{onReady:function(b){a.player=b.target;a.o=!0;var c,e,f;b=(f=(c=a.player)==null?void 0:(e=c.getCurrentTime)==null?void 0:e.call(c))!=null?f:0;var h,k,l;c=(l=(h=a.player)==null?void 0:(k=h.getDuration)==null?void 0:k.call(h))!=null?l:0;bxa(-1,a.id,b,c)},
onStateChange:function(b){b=b.data;var c,e,f,h=(f=(c=a.player)==null?void 0:(e=c.getCurrentTime)==null?void 0:e.call(c))!=null?f:0,k,l,p;c=(p=(k=a.player)==null?void 0:(l=k.getDuration)==null?void 0:l.call(k))!=null?p:0;bxa(b,a.id,h,c)}}});
a.o||setTimeout(function(){!a.o&&a.ma<5&&axa(a);a.ma++},1E3)}
wB.prototype.load=function(){var a=this;return Ra(function(b){if(b.o==1)return b.yield(cxa(),2);a.player||axa(a);Ia(b)})};
function bxa(a,b,c,e){switch(a){case -1:a=20;break;case 0:a=19;break;case 1:a=25;break;case 2:a=26;break;case 3:a=27;break;case 5:a=28;break;default:a=0}kp(a,b,44,c+","+e)}
wB.prototype.onDetach=function(){this.player=void 0;ro(this)};
var xB;function cxa(){var a,b;return Ra(function(c){if(typeof((a=window.YT)==null?void 0:a.Player)==="function")return c.return();xB||(b=document.createElement("script"),Kl(b,fm(Zwa)),document.body.appendChild(b),xB=new Promise(function(e){window.onYouTubeIframeAPIReady=e}));
return c.return(xB)})}
;function yB(a){a=a.player;A.call(this,"sc.tailwind.thread.popup_video.PopupVideo");var b=this;this.popup=new Ys({rc:7,tc:7,jl:!0,gp:!0,content:function(){b.element("div","class","root","tabindex","0",b.player)},
Qf:!0,onClose:function(){var c;(c=b.player.player)==null||c.stopVideo()}});
this.player=a}
u(yB,A);yB.prototype.open=function(a){this.popup.open(Object.assign({},{Nb:!0},a));this.player.load()};
yB.prototype.content=function(){this.popup.render()};function dxa(a,b){var c=b===void 0?{}:b;b=c.RI===void 0?!1:c.RI;var e=c.height;var f=c.tm===void 0?!1:c.tm;c=c.width;this.o=a;this.ma=this.o.getAttribute("data-videoid");this.ua=nm(this.o,"embedded-video")?"default":"medium";c&&e&&(this.oa=c/e==zB?zB:1.6);this.va=f;b||(exa(this),fxa(this))}
function exa(a){window.addEventListener("hashchange",function(b){js(b.oldURL,b.newURL)===a.ma&&AB(a)});
window.addEventListener("load",function(){js("",location.href)===a.ma&&AB(a)})}
function fxa(a){var b=new XMLHttpRequest;b.addEventListener("load",function(){try{var c=JSON.parse(b.responseText)}catch(e){}c&&gxa(this,c)}.bind(a));
b.open("GET","https://www.googleapis.com/youtube/v3/videos?part=snippet%2C+id&key=AIzaSyD-4tE5aKFZYIS_IrfpCDRsgQZbv5VCJZM&id="+a.ma);b.send()}
function gxa(a,b){if(b.items&&b.items[0]&&b.items[0].snippet){var c=b.items[0].snippet;b=function(f){for(var h=c,k=0;k<arguments.length&&h;k++)h=h[arguments[k]];return h};
a.qa=a.o.textContent||b("localized","title");a.Ca=b("localized","description");var e=Number(b("thumbnails",a.ua,"height"));a.oa=Number(b("thumbnails",a.ua,"width"))/e==zB?zB:1.6;a.ya=b("thumbnails",a.ua,"url");hxa(a)}}
function hxa(a){a.ya&&(a.o.style.backgroundImage="url("+a.ya.replace(/^https?:/,"")+")");a.o.setAttribute("data-tracking-method","NOW");a.o.setAttribute("data-stats-method","IMMEDIATE");a.o.addEventListener("click",function(e){e.preventDefault();AB(this)}.bind(a));
a.o.textContent="";var b=document.createElement("div");b.className=a.ua=="default"?"video-description":"video-custom";a.o.parentNode.replaceChild(b,a.o);b.appendChild(a.o);if(b.className=="video-custom"){var c=b.nextElementSibling;c&&!nm(c,"youtube-text")&&lm(b,"border-bottom",!0)}b=document.createElementNS("http://www.w3.org/2000/svg","svg");b.setAttribute("viewBox","0 0 48 48");c=document.createElementNS("http://www.w3.org/2000/svg","path");c.setAttribute("d","M40 8.8c-1.2-.4-8.6-.8-16-.8s-14.8.4-16 .8c-3.1 1-4 8-4 15.2s.9 14.2 4 15.2c1.2.4 8.6.8 16 .8s14.8-.4 16-.8c3.1-1 4-8 4-15.2s-.9-14.2-4-15.2zM20 33V15l12 9-12 9z");
b.appendChild(c);a.o.appendChild(b);b=document.createElement("div");b.className="title";b.textContent=a.qa;a.o.appendChild(b);b=document.createElement("div");b.className="description";b.textContent=a.Ca;a.o.appendChild(b)}
function BB(a){return a.va&&ixa(a,960)?960:ixa(a,640)?640:480}
function ixa(a,b){a=b/a.oa+100;return b+100<=window.innerWidth&&a<=window.innerHeight}
function AB(a){if(Dm())z().rs==2?window.YT&&window.YT.Player?CB(a,a.o):(ks(function(f){CB(this,f)}.bind(a,a.o)),is()):Km("//www.youtube.com/embed/"+a.ma+"/?rel=0&cc_load_policy=1&autoplay=1&hl="+window.sc_pageModel.lang);
else{var b=document.createElement("div"),c=document.createElement("h2");c.textContent=a.qa;b.appendChild(c);var e=document.createElement("div");e.className="video-popup";b.appendChild(e);c=document.createElement("div");c.style.height=BB(a)/a.oa+"px";e.appendChild(c);e=document.createElement("div");e.textContent="Press Tab to navigate to the Close button. Press Shift+Tab to control the YouTube video player.";e.className="lb-focus-guard";e.tabIndex=0;b.appendChild(e);window.YT&&window.YT.Player?CB(a,
c):(ks(function(f){CB(this,f)}.bind(a,c)),is());
window.sc_showLightbox(b,a.va)}}
function CB(a,b){var c=new window.YT.Player(b,{height:String(BB(a)/a.oa),width:String(BB(a)),videoId:a.ma,playerVars:{autoplay:1,cc_load_policy:1,controls:2,hl:window.sc_pageModel.lang,rel:0},events:{onReady:function(){var e=c.getCurrentTime(),f=c.getDuration();ls(-1,a.ma,e,f)},
onStateChange:function(e){e=e.data;var f=c.getCurrentTime(),h=c.getDuration();ls(e,this.ma,f,h)}.bind(a)}})}
var zB=4/3;window.sc_initPopupVideos=function(){var a=window.sc_scope;a=a||document;for(var b=a.querySelectorAll(".carousel-container .related-item--youtube"),c=0;c<b.length;c++){var e=b[c],f=e.getElementsByClassName("embedded-video")[0];f&&lm(f,"embedded-video",!1);f||(f=e.getElementsByClassName("embedded-video-large")[0])&&lm(f,"embedded-video-large",!1);f&&lm(f,"embedded-video-custom",!0)}a=a.querySelectorAll(".embedded-video, .embedded-video-custom");for(b=0;b<a.length;b++)new dxa(a[b])};function DB(a){var b=a.isDarkMode===void 0?z().dark:a.isDarkMode;var c=a.En===void 0?!1:a.En;var e=a.Hb;var f=a.Ig===void 0?function(){}:a.Ig;
var h=a.bE===void 0?!1:a.bE;var k=a.Dr===void 0?!1:a.Dr;var l=a.showTitle===void 0?!0:a.showTitle;a=a.Ju===void 0?!0:a.Ju;bs.call(this,"sc.recommended_resources.video_carousel.VideoCard");this.o=null;this.titleId=so();this.ma="duration-"+this.titleId;this.isDarkMode=b;this.En=c;this.Hb=e;this.Ig=f;this.En&&(this.va=new wB({Hb:this.Hb,tm:!0,playerVars:Object.assign({},vB,{hl:sB()?tB():this.Hb.getLanguage()})}),this.oa=new yB({player:this.va}));this.bE=h;this.Dr=k;this.showTitle=l;this.Ju=a;this.watch(this.Hb)}
u(DB,bs);
DB.prototype.content=function(){var a=this;jxa(this)&&(this.En&&this.oa.render(),this.o=this.element("button","class",{root:!0,light:!this.isDarkMode,dark:this.isDarkMode,"flexible-width":this.Dr,"fixed-width":!this.Dr,"hide-title":!this.showTitle},"data-videoid",this.Hb.getId(),"aria-labelledby",this.titleId+" "+this.ma,"aria-description","Play video","aria-haspopup",!this.En&&Dm()?null:"dialog","role",!this.En&&Dm()?"link":null,"onclick",function(){a.Ig();a.Ju&&(a.En?a.oa.open({anchor:a.o}):AB(new dxa(a.o,
{width:a.Hb.mediumThumbnail.width||4,height:a.Hb.mediumThumbnail.height||3,RI:!0,tm:!0})))},function(){var b;
a.element("div","class","image","style",{"background-image":"url("+((b=a.Hb.mediumThumbnail.url)!=null?b:"")+")"},"aria-hidden","true",function(){a.element("div","class","icon",function(){(new Co({icon:"gm/play_circle",size:50})).render()});
a.element("div","class","duration","id",a.ma,"aria-label","Takes "+a.Hb.va+" in total",a.Hb.duration)});
a.showTitle&&a.element("div","id",a.titleId,"class","title","aria-hidden","true",a.Hb.getTitle())}))};
DB.prototype.onDetach=function(){ro(this)};
DB.prototype.Gb=function(){return this.Hb};
function jxa(a){return a.Hb.duration.length>0&&(!a.bE||a.Hb.ma||a.Hb.defaultLanguage==="en")}
;function EB(a){this.Aa=se(a)}
u(EB,eh);n=EB.prototype;n.Bg=function(){return Af(this,4)};
n.Yc=function(a){return Yf(this,4,a)};
n.getUserAgent=function(){return Df(this,6)};
n.xd=function(){return Bf(this,8)};
n.setSupportJourneyId=function(a){return ag(this,9,a)};var FB=[0,Wp,Xh,x,Zh,x,-1,pi,Rh,x,di];EB.prototype.Ba=wi(FB);function GB(a){this.Aa=se(a)}
u(GB,eh);GB.prototype.hb=function(){return Bf(this,1)};
GB.prototype.yb=la(39);GB.prototype.getMessageId=function(){return Bf(this,3)};GB.prototype.Ba=wi([0,Rh,-2,1,x,4,FB]);function HB(a){this.Aa=se(a)}
u(HB,eh);HB.prototype.hb=function(){return Bf(this,1)};
HB.prototype.yb=la(38);HB.prototype.getMessageId=function(){return Bf(this,3)};HB.prototype.Ba=wi([0,Rh,-2,6,FB]);function IB(a){this.Aa=se(a)}
u(IB,eh);n=IB.prototype;n.hb=function(){return Bf(this,1)};
n.yb=la(37);n.getMessageId=function(){return Bf(this,3)};
n.getType=function(){return Ef(this,4)};
n.setType=function(a){return cg(this,4,a)};IB.prototype.Ba=wi([0,Rh,-2,pi,5,FB]);function JB(a){this.Aa=se(a)}
u(JB,eh);n=JB.prototype;n.hb=function(){return Bf(this,1)};
n.yb=la(36);n.getMessageId=function(){return Bf(this,3)};
n.He=la(43);n.fg=function(a){return cg(this,4,a)};JB.prototype.Ba=wi([0,Rh,-2,pi,di,4,FB]);function KB(a){this.Aa=se(a)}
u(KB,eh);KB.prototype.hb=function(){return Bf(this,1)};
KB.prototype.yb=la(34);KB.prototype.Ba=wi([0,Rh,-1,pi,6,FB]);function LB(a){this.Aa=se(a)}
u(LB,eh);LB.prototype.hb=function(){return Bf(this,1)};
LB.prototype.yb=la(33);LB.prototype.He=la(42);LB.prototype.fg=function(a){return cg(this,3,a)};LB.prototype.Ba=wi([0,Rh,-1,pi,6,FB]);function MB(a){this.Aa=se(a)}
u(MB,eh);n=MB.prototype;n.hb=function(){return Bf(this,1)};
n.yb=la(32);n.getValue=function(){return yf(this,3,!0)};
n.setValue=function(a){return Wf(this,3,a)};
n.Yb=function(){return td(Ae(this,3))!=null};MB.prototype.Ba=wi([0,Rh,-1,di,Rh,x,pi,3,FB]);function NB(a){this.Aa=se(a)}
u(NB,eh);NB.prototype.hb=function(){return Bf(this,1)};
NB.prototype.yb=la(30);NB.prototype.getMessageId=function(){return Bf(this,3)};NB.prototype.Ba=wi([0,Rh,-2,6,FB]);function OB(a){this.Aa=se(a)}
u(OB,eh);n=OB.prototype;n.hb=function(){return Bf(this,1)};
n.yb=la(29);n.getMessageId=function(){return Bf(this,3)};
n.He=la(41);n.fg=function(a){return cg(this,4,a)};OB.prototype.Ba=wi([0,Rh,-2,pi,5,FB]);var kxa=[0,pi,x];function et(a){this.Aa=se(a)}
u(et,eh);var lxa=[0,ji,kxa];et.prototype.Ba=wi(lxa);function PB(a){this.Aa=se(a)}
u(PB,eh);n=PB.prototype;n.To=function(){return Df(this,3)};
n.getMimeType=function(){return Df(this,5)};
n.setMimeType=function(a){return ag(this,5,a)};
n.getContent=function(){var a=Ae(this,6,void 0,void 0,Ue);return a==null?tc():a};
n.setContent=function(a){return Ce(this,6,Pc(a,!1,!0))};
n.clearContent=function(){return Ce(this,6)};function QB(a){this.Aa=se(a)}
u(QB,eh);QB.prototype.hb=function(){return Bf(this,1)};
QB.prototype.yb=la(28);QB.prototype.getMessage=function(){return jf(this,Mi,3)};var RB=[0,x,-2,di,x,li,Si,di];PB.prototype.Ba=wi(RB);QB.prototype.Ba=wi([0,Rh,-1,Ti,di,ji,RB,pi,3,FB]);function SB(a){this.Aa=se(a)}
u(SB,eh);SB.prototype.hb=function(){return Bf(this,1)};
SB.prototype.getThread=function(){return jf(this,Vi,2)};
SB.prototype.getIsDraft=function(){return yf(this,8)};
SB.prototype.setIsDraft=function(a){return Wf(this,8,a)};SB.prototype.Ba=wi([0,Rh,Xi,di,ji,RB,pi,x,-1,di,1,FB,x,-1]);function TB(a){this.Aa=se(a)}
u(TB,eh);TB.prototype.hb=function(){return Bf(this,1)};
TB.prototype.yb=la(27);TB.prototype.getMessageId=function(){return Bf(this,3)};TB.prototype.Ba=wi([0,Rh,-2,di,5,FB]);function UB(a){this.Aa=se(a)}
u(UB,eh);UB.prototype.hb=function(){return Bf(this,1)};
UB.prototype.yb=la(26);UB.prototype.Ba=wi([0,Rh,-1,di,6,FB]);function VB(a){this.Aa=se(a)}
u(VB,eh);VB.prototype.hb=function(){return Bf(this,1)};
VB.prototype.yb=la(25);VB.prototype.getMessageId=function(){return Bf(this,3)};
VB.prototype.getMessage=function(){return jf(this,Mi,4)};VB.prototype.Ba=wi([0,Rh,-2,Ti,ji,RB,pi,di,-1,1,FB]);function WB(a){this.Aa=se(a)}
u(WB,eh);n=WB.prototype;n.hb=function(){return Bf(this,1)};
n.yb=la(24);n.getThread=function(){return jf(this,Vi,3)};
n.getIsDraft=function(){return yf(this,6)};
n.setIsDraft=function(a){return Wf(this,6,a)};WB.prototype.Ba=wi([0,Rh,-1,Xi,ji,RB,pi,di,-1,2,FB]);function XB(a){this.Aa=se(a)}
u(XB,eh);XB.prototype.hb=function(){return Bf(this,1)};
function YB(a,b){return $f(a,1,b)}
XB.prototype.yb=la(23);XB.prototype.getMessageId=function(){return Bf(this,4)};
XB.prototype.clearOffTopic=function(){return Ce(this,7)};
function mxa(a){var b=new EB;return nf(a,EB,10,b)}
;XB.prototype.Ba=wi([0,Rh,x,Rh,-1,1,Rh,di,-1,1,FB]);function ZB(a){this.Aa=se(a)}
u(ZB,eh);ZB.prototype.Ba=wi([0,9,FB]);function $B(a){this.Aa=se(a)}
u($B,eh);$B.prototype.getInfo=function(){return jf(this,dj,1)};$B.prototype.Ba=wi([0,fj,di]);function aC(a){this.Aa=se(a)}
u(aC,eh);aC.prototype.hb=function(){return Bf(this,1)};
aC.prototype.getValue=function(){return Ef(this,2,2)};
aC.prototype.setValue=function(a){return cg(this,2,a)};
aC.prototype.Yb=function(){return xf(this,2)!=null};aC.prototype.Ba=wi([0,Rh,pi,Rh,x,5,FB]);function bC(a){this.Aa=se(a)}
u(bC,eh);bC.prototype.getInfo=function(){return jf(this,dj,2)};bC.prototype.Ba=wi([0,Rh,fj,di,RB,Rh,4,FB]);function cC(a){this.Aa=se(a)}
u(cC,eh);cC.prototype.getInfo=function(){return jf(this,dj,1)};
cC.prototype.hb=function(){return Bf(this,2)};cC.prototype.Ba=wi([0,fj,Rh,7,FB]);var nxa=0;function dC(a){this.options=a;this.id=""+nxa++}
function eC(a){var b=oxa(a);b&&pxa(a,b)}
dC.prototype.focus=function(a){var b;(b=a?this.getItem(a):oxa(this))==null||b.focus()};
function fC(a){var b='[data-focus-group="'+a.id+'"][data-focus-item]';a=a.options.scope;a=typeof a.nodeType==="number"?a:a.getElement();return(b=a==null?void 0:a.querySelectorAll(b))?Array.from(b):[]}
dC.prototype.getItem=function(a){return Rha(this.options.scope,'[data-focus-group="'+this.id+'"][data-focus-id="'+a+'"')};
function oxa(a){a=fC(a);if(a.length!==0){var b,c;return(c=(b=a.find(function(e){return e.tabIndex===0}))!=null?b:a.find(function(e){return e.dataset.focusInitial==="true"}))!=null?c:a[0]}}
function nu(a,b){b=b===void 0?{}:b;return new qxa(b,a.id,function(c){a.onFocus(c)},function(c){rxa(a,c,b)})}
dC.prototype.onFocus=function(a){pxa(this,a.target)};
function rxa(a,b,c){function e(h,k,l){if(h){var p;(p=a.getItem(h))==null||p.focus();b.preventDefault()}else{if(h=k)h=a.options.Gn,k=fC(a),p=k.indexOf(f),p===-1?h=!1:(l=p+l,l=h?(l+k.length)%k.length:Math.max(0,Math.min(k.length-1,l)),k[l].focus(),h=!0);h&&b.preventDefault()}}
var f=b.target;b.key==="ArrowUp"?e(c.up,a.options.Mj,-1):b.key==="ArrowDown"?e(c.jpa,a.options.Mj,1):b.key==="ArrowLeft"?e(c.left,a.options.yt,-1):b.key==="ArrowRight"&&e(c.right,a.options.yt,1)}
function pxa(a,b){a=w(fC(a));for(var c=a.next();!c.done;c=a.next())c=c.value,c.tabIndex=c===b?0:-1}
function qxa(a,b,c,e){this.options=a;this.groupId=b;this.Pq=c;this.Wu=e}
qxa.prototype.attributes=function(a){var b=a===void 0?{}:a;a=b.kq===void 0?!0:b.kq;b=b.wt===void 0?!0:b.wt;var c=["data-focus-item","true","data-focus-group",this.groupId,"tabindex","-1000"];this.options.id&&c.push("data-focus-id",this.options.id);this.options.initial&&c.push("data-focus-initial","true");a&&c.push("onfocus",this.Pq);b&&c.push("onkeydown",this.Wu);return c};function gC(a,b){if(c===void 0)var c=(c=window.gtag)&&typeof c==="function"?c:void 0;c&&(b?c("event",a,Object.assign({},b)):c("event",a))}
;function hC(a){this.Aa=se(a)}
u(hC,eh);hC.prototype.getCode=function(){return Ef(this,1)};
hC.prototype.getMessage=function(){return Df(this,4)};
var sxa=yi(hC);hC.prototype.Ba=wi([0,pi,-1,lxa,x]);function iC(a){this.Nk=new $p({serverUrl:function(){return rB().Qx+"/s/community/api"},
serviceName:a})}
iC.prototype.call=function(a,b,c){var e=this,f;return Ra(function(h){if(h.o==1){Ja(h,2);var k=h.yield,l=e.Nk,p=l.post,r={withCredentials:!0};rB().authuser&&(r.query={authuser:rB().authuser});rB().vI&&(r.headers={Authorization:rB().vI});return k.call(h,p.call(l,a,b,c,r),4)}if(h.o!=2)return h.return(h.ma);f=La(h);if(f instanceof Zp&&f.type==="application_error")throw new dt(sxa(f.responseText));throw f;})};function jC(a){this.Aa=se(a)}
u(jC,eh);jC.prototype.Ba=wi([0]);function kC(){var a={};var b=a.hh;var c=a.Vh;a=a.Ef;this.productId=0;this.hh=b!=null?b:new iC("SupportForums");this.Vh=c!=null?c:new iC("UserInfo");this.Ef=a!=null?a:new iC("Annotations")}
function lC(a,b){a.productId>0&&$f(b,8,a.productId);if(a=z())a.vid&&b.Yc(Number(a.vid)),a.visit_id&&ag(b,3,String(a.visit_id))}
n=kC.prototype;
n.updateGlobalUserInfo=function(a){var b=a.userId;var c=a.name;var e=a.headline;var f=a.bio;var h=a.sW;var k=a.youtube;var l=a.LG;var p=a.Yp;var r=a.avatar;var t=a.tT;var v=a.Bk;var y=a.generativeAnswerTosAcceptedTimeUsec;var E=this,oa,ra,Aa,Ba;return Ra(function(Ha){oa=new bj;ra=new aj;Aa=ej(new dj,oa).FG(ra);var Na=new bC;Ba=nf(Na,dj,2,Aa);b&&$f(Ba,1,b);c&&(oa.setName(c),Na=Wf(Aa,5,!1),Wf(Na,4,!1));e!==void 0&&ag(oa,4,e);f!==void 0&&ag(oa,5,f);h!==void 0&&ag(oa,6,h);k!==void 0&&ag(oa,7,k);l!==void 0&&
Wf(ra,3,l);p!==void 0&&Wf(ra,4,p);t!==void 0&&$f(ra,23,t);v!==void 0&&Wf(ra,24,v);y!==void 0&&$f(ra,28,y);r&&nf(Ba,PB,4,r);return Ha.return(E.Vh.call("UpdateGlobalUserInfo",Ba,dj))})};
n.validateUserInfo=function(a){var b=this,c;return Ra(function(e){var f=new cC,h=ej(new dj,(new bj).setName(a));c=nf(f,dj,1,h);return e.yield(b.Vh.call("ValidateUserInfo",c,jC),0)})};
n.subscribeToForum=function(a,b){var c=this,e;return Ra(function(f){var h=new aC;h=$f(h,1,a).setValue(b);var k=new EB;e=nf(h,EB,10,k);lC(c,jf(e,EB,10));return f.yield(c.Vh.call("SubscribeToForum",e,jC),0)})};
n.getDefaultUserInfo=function(){var a=this,b;return Ra(function(c){if(c.o==1)return c.yield(a.Vh.call("GetDefaultUserInfo",new ZB,$B),2);b=c.ma;return c.return(b.getInfo())})};
n.setThreadAttribute=function(a,b,c){var e=this,f;return Ra(function(h){var k=new KB;k=$f(k,1,a);k=$f(k,2,b);k=cg(k,3,c);var l=new EB;f=nf(k,EB,10,l);lC(e,jf(f,EB,10));return h.yield(e.Ef.call("SetThreadAttribute",f,jC),0)})};
n.createThread=function(a){var b=a.forumId;var c=a.title;var e=a.payload;var f=a.purpose;var h=a.category;var k=a.symptom;var l=a.details===void 0?new Map:a.details;var p=a.Df===void 0?[]:a.Df;var r=a.subscribe===void 0?!1:a.subscribe;var t=a.Lf===void 0?!0:a.Lf;var v=a.Kv;var y=a.articleId;var E=a.postMethod;var oa=this,ra,Aa,Ba,Ha,Na,Va,cb,sb,Cb,$b,Mb;return Ra(function(rb){var vb=(new Vi).setTitle(c);ra=ag(vb,13,e).setLanguage(tB());f!==void 0&&cg(ra,21,f);h&&ag(ra,22,h);k&&ag(ra,45,k);Aa=w(l);
for(Ba=Aa.next();!Ba.done;Ba=Aa.next()){Ha=Ba.value;Na=w(Ha);Va=Na.next().value;cb=Na.next().value;sb=Va;Cb=cb;vb=ra;var fc=(new Ui).setKey(sb).setValue(Cb);sf(vb,16,Ui,fc)}y&&($b=new Bi,vb=new Ai,fc=rB().internalHelpCenter,vb=ag(vb,1,fc),fc=$f(vb,2,Number(y)),vb=$b,fc=fc.setLanguage(tB()),of(vb,3,Ci,fc),nf(ra,Bi,43,$b));E&&cg(ra,28,E);vb=new SB;vb=$f(vb,1,b);vb=nf(vb,Vi,2,ra);fc=p.filter(mC).map(nC);vb=pf(vb,4,fc);vb=Wf(vb,3,r);vb=cg(vb,5,t?1:0);fc=new EB;Mb=nf(vb,EB,10,fc);lC(oa,jf(Mb,EB,10));v&&
ag(Mb,7,v);gC("create",{content_type:"forum_thread"});return rb.return(oa.hh.call("CreateThread",Mb,Vi))})};
n.updateThread=function(a,b,c,e,f){f=f===void 0?!0:f;var h=this,k;return Ra(function(l){var p=new WB;p=$f(p,1,a);p=$f(p,2,b);p=nf(p,Vi,3,c);var r=e.filter(mC).map(nC);p=pf(p,4,r);p=cg(p,5,f?1:0);r=new EB;k=nf(p,EB,10,r);lC(h,jf(k,EB,10));return l.return(h.hh.call("UpdateThread",k,Vi))})};
n.createMessage=function(a){var b=a.forumId;var c=a.threadId;var e=a.payload;var f=a.type===void 0?1:a.type;var h=a.subscribe===void 0?!1:a.subscribe;var k=a.Lf===void 0?!0:a.Lf;var l=a.Df===void 0?[]:a.Df;var p=a.parentMessageId===void 0?void 0:a.parentMessageId;var r=a.sourceMessage===void 0?void 0:a.sourceMessage;var t=this,v,y,E;return Ra(function(oa){v=(new Ii).setType(f);var ra=new Mi;ra=ag(ra,4,e);y=nf(ra,Ii,6,v);p&&$f(y,37,p);r&&nf(y,Fi,42,r);ra=new QB;ra=$f(ra,1,b);ra=$f(ra,2,c);ra=nf(ra,
Mi,3,y);ra=Wf(ra,4,h);ra=cg(ra,6,k?1:0);var Aa=l.filter(mC).map(nC);ra=pf(ra,5,Aa);Aa=new EB;E=nf(ra,EB,10,Aa);lC(t,jf(E,EB,10));return oa.return(t.hh.call("CreateMessage",E,Mi))})};
n.updateMessage=function(a){var b=a.forumId;var c=a.threadId;var e=a.messageId;var f=a.updates;var h=a.attachments;var k=a.eN===void 0?!1:a.eN;var l=this,p;return Ra(function(r){var t=new VB;t=$f(t,1,b);t=$f(t,2,c);t=$f(t,3,e);t=nf(t,Mi,4,f);t=cg(t,6,k?0:1);var v=h.filter(mC).map(nC);t=pf(t,5,v);v=new EB;p=nf(t,EB,10,v);lC(l,jf(p,EB,10));return r.return(l.hh.call("UpdateMessage",p,Mi))})};
n.setMessageVote=function(a){var b=a.forumId;var c=a.threadId;var e=a.messageId;var f=a.vote;var h=a.fk;var k=this,l;return Ra(function(p){var r=new JB;r=$f(r,1,b);r=$f(r,2,c);r=$f(r,3,e).fg(f);r=Wf(r,5,h);var t=new EB;l=nf(r,EB,10,t);lC(k,jf(l,EB,10));return p.yield(k.Ef.call("SetMessageVote",l,jC),0)})};
n.unsetMessageVote=function(a){var b=a.forumId;var c=a.threadId;var e=a.messageId;var f=a.vote;var h=this,k;return Ra(function(l){var p=new OB;p=$f(p,1,b);p=$f(p,2,c);p=$f(p,3,e).fg(f);var r=new EB;k=nf(p,EB,10,r);lC(h,jf(k,EB,10));return l.yield(h.Ef.call("UnsetMessageVote",k,jC),0)})};
n.reportAbuse=function(a,b,c){var e=this,f;return Ra(function(h){var k=YB(new XB,a);k=$f(k,3,b);f=mxa(k);lC(e,jf(f,EB,10));c!==void 0&&$f(f,4,c);return h.yield(e.hh.call("UserFlag",f,jC),0)})};
n.il=la(46);n.reportOffTopic=function(a,b,c){var e=this,f;return Ra(function(h){var k=new GB;k=$f(k,1,a);k=$f(k,2,b);var l=new EB;f=nf(k,EB,10,l);lC(e,jf(f,EB,10));c!==void 0&&$f(f,3,c);return h.yield(e.Ef.call("SetOffTopic",f,jC),0)})};
n.clearOffTopic=function(a,b,c){var e=this,f;return Ra(function(h){var k=new HB;k=$f(k,1,a);k=$f(k,2,b);var l=new EB;f=nf(k,EB,10,l);lC(e,jf(f,EB,10));c!==void 0&&$f(f,3,c);return h.yield(e.Ef.call("SetOnTopic",f,jC),0)})};
n.Bn=la(49);n.Em=la(52);n.setThreadVote=function(a,b,c){var e=this,f;return Ra(function(h){var k=new LB;k=$f(k,1,a);k=$f(k,2,b).fg(c);var l=new EB;f=nf(k,EB,10,l);lC(e,jf(f,EB,10));return h.yield(e.Ef.call("SetThreadVote",f,jC),0)})};
n.subscribeToThread=function(a,b,c){var e=this,f;return Ra(function(h){var k=new MB;k=$f(k,1,a);k=$f(k,2,b);k=cg(k,6,txa(c));var l=new EB;f=nf(k,EB,10,l);lC(e,jf(f,EB,10));return h.yield(e.Ef.call("SubscribeToThread",f,jC),0)})};
n.deleteThread=function(a,b){var c=this,e;return Ra(function(f){var h=new UB;h=$f(h,1,a);h=$f(h,2,b);var k=new EB;e=nf(h,EB,10,k);lC(c,jf(e,EB,10));return f.yield(c.hh.call("DeleteThread",e,jC),0)})};
n.deleteMessage=function(a,b,c){var e=this,f;return Ra(function(h){var k=new TB;k=$f(k,1,a);k=$f(k,2,b);k=$f(k,3,c);var l=new EB;f=nf(k,EB,10,l);lC(e,jf(f,EB,10));return h.yield(e.hh.call("DeleteMessage",f,jC),0)})};
n.setMessageType=function(a,b,c,e){var f=this,h;return Ra(function(k){var l=new IB;l=$f(l,1,a);l=$f(l,2,b);l=$f(l,3,c).setType(e);var p=new EB;h=nf(l,EB,10,p);lC(f,jf(h,EB,10));return k.yield(f.Ef.call("SetMessageType",h,jC),0)})};
n.unsetMessageType=function(a,b,c){var e=this,f;return Ra(function(h){var k=new NB;k=$f(k,1,a);k=$f(k,2,b);k=$f(k,3,c);var l=new EB;f=nf(k,EB,10,l);lC(e,jf(f,EB,10));return h.yield(e.Ef.call("UnsetMessageType",f,jC),0)})};
n.qn=la(55);function txa(a){switch(a){case 1:return 2;case 0:return 1;case 2:return 3;default:return 0}}
function nC(a){var b=new PB;b=ag(b,1,a.originalFilename);b=ag(b,3,a.documentId);a.ef&&ag(b,2,a.ef);a.deleted&&Wf(b,4,!0);return b}
function mC(a){return a.ef!==void 0&&!a.deleted||a.ef===void 0&&a.deleted}
;var oC=new Ul,uxa="Showing results for "+Vl(oC,"a")+"KEYWORD"+Xl(oC,"a"),vxa=oC.format(uxa),wxa="Search instead for "+Vl(oC,"a")+"KEYWORD"+Xl(oC,"a"),xxa=oC.format(wxa),yxa="Did you mean: "+Vl(oC,"a")+"KEYWORD"+Xl(oC,"a"),zxa=oC.format(yxa);function pC(a,b){b=b===void 0?0:b;xo.call(this);this.o=a;this.index=b;this.rank=b+1}
u(pC,xo);n=pC.prototype;n.getIndex=function(){return this.index};
n.getTitle=function(){var a;return ys((a=this.o.getTitle())!=null?a:"")};
n.Ud=function(){var a;return(a=this.o.Ud())!=null?a:""};
function Axa(a){var b;return(b=Nf(a.o,12))!=null?b:""}
n.getUrl=function(){var a;return(a=this.o.getUrl())!=null?a:""};
function qC(a){var b=a.getUrl();if(!b)return b;var c=rC(a);if(c===8||c===9){var e,f;a=(f=(e=Bk(a.o))==null?void 0:Nf(e,5))!=null?f:"";b=Qo(a,b)}return b}
n.Rb=function(){var a;return(a=this.o.Rb())!=null?a:""};
function Tw(a){var b;return(b=Nf(a.o,21))!=null?b:""}
function sC(a){var b,c;return(c=(b=Ak(a.o))==null?void 0:b.dr())!=null?c:0}
function tC(a){var b,c;return(c=(b=Ak(a.o))==null?void 0:Rf(b,3))!=null?c:0}
function Bxa(a){var b,c;return(c=(b=Ak(a.o))==null?void 0:xf(b,9))!=null?c:0}
function rC(a){var b;a=(b=xf(a.o,4))!=null?b:null;switch(a){case 81:return 0;case 72:return 1;case 62:case 63:case 65:return 2;case 70:return 3;case 21:return 4;case 99:return 7;case 102:return 8;case 103:return 9;default:return a?5:6}}
function uC(a,b){var c=rC(a),e="";switch(c){case 0:var f;e=(f=b==null?void 0:Nf(b,25))!=null?f:"";break;case 1:case 2:var h;e=(h=b==null?void 0:Nf(b,8))!=null?h:"";break;case 3:var k;e=(k=b==null?void 0:Nf(b,24))!=null?k:"";break;case 5:var l;e=(l=b==null?void 0:Nf(b,7))!=null?l:"";break;case 4:var p;e=(p=b==null?void 0:Nf(b,21))!=null?p:"";break;case 7:e="Guidebooks lesson";break;case 8:e="Community video";break;case 9:e="Help video";break;case 6:b=null;try{var r;b=new URL((r=a.getUrl())!=null?r:
"","https://support.google.com")}catch(t){}b!==null&&(e=b.host)}c!==6&&c!==7&&Axa(a)&&(e+=" - "+Axa(a));return e}
function vC(a){return lf(a.o,wk,27,Oe()).map(function(b){return new pC(b,a.index)})}
function Cxa(a){var b,c;return(c=Ro((b=Bk(a.o))==null?void 0:b.getTimestamp()))!=null?c:0}
function wC(a){var b,c;return(c=Ro((b=Bk(a.o))==null?void 0:b.getViews()))!=null?c:0}
function xC(a){var b,c;return(c=(b=Bk(a.o))==null?void 0:Rf(b,3))!=null?c:0}
function Dxa(a){var b,c;return(c=(b=Bk(a.o))==null?void 0:Nf(b,7))!=null?c:""}
;function yC(a){var b=a.parent;var c=a.result;a=a.Cb;A.call(this,"sc.search.search_results_list.search_result.YoutubePreview");this.ma=new Co({icon:"gm/event_available",size:18});this.qa=new Co({icon:"gm/visibility",size:18});this.o=new Co({icon:"gm/play_circle"});this.oa=Vm("YoutubeSearchResultsPreviewFeature__show_youtube_search_results_reduced")==="true";this.result=c;var e;if(b!=null){c=b.getUrl()+"#play=";var f=(e=Nf(this.result.o,5))!=null?e:"";e=c+f}else e=new Map([["autoplay","1"]]),e=Mo(this.result.getUrl(),
e,!0);this.url=e;var h;b=(h=b==null?void 0:b.getTitle())!=null?h:this.result.getTitle();h=zC(this);e=AC.format(wC(this.result))+" views";this.ariaLabel=b+" (video content) published on "+h+" with "+e;this.Cb=a}
u(yC,A);yC.prototype.content=function(){var a=this;this.element("a","aria-label",this.ariaLabel,"class","youtube-preview","href",this.url,"onclick",function(b){return ws(b,function(){a.yd(b.ctrlKey||b.shiftKey||b.metaKey)})},"onauxclick",function(b){return b.button===1?ws(b,function(){a.yd(!0)}):!0},"onkeydown",function(b){return xs(b,function(){a.yd()})},function(){z().rs===2?a.element("div","class","help-panel-container",function(){Exa(a)}):Exa(a)})};
yC.prototype.yd=function(a){a=a===void 0?!1:a;RA(this.Cb,this.result.Rb(),Tw(this.result),this.url);kp(8,"youtube_preview_click",136);var b=jB(this.url);es(b,{Cd:a})};
function Exa(a){Fxa(a);a.element("div","class","container",function(){a.element("div","class","title",a.result.getTitle());a.element("div","class","labels",function(){z().rs===2?a.element("span","class","label-container",AC.format(wC(a.result))+" views \u2022 "+zC(a)):a.oa||(Gxa(a),Hxa(a))})})}
function Fxa(a){a.element("div","class","thumbnail-container",function(){var b=a.element,c,e;var f=(e=(c=Bk(a.result.o))==null?void 0:c.getThumbnail())!=null?e:"";b.call(a,"img","class","thumbnail","role","none","alt","","src",f);b=a.element;f=xC(a.result);c=f%60;b.call(a,"span","class","duration",Math.floor(f/60)+":"+(c<10?"0":"")+c);z().rs===2&&a.element("span","class","preview-label","Preview");a.element("span","class","play",a.o)})}
function Hxa(a){a.element("span","class","label-container",function(){a.ma.render();a.element("span","class","label",zC(a))})}
function Gxa(a){a.element("span","class","label-container",function(){a.qa.render();a.element("span","class","label",AC.format(wC(a.result))+" views")})}
function zC(a){a=Cxa(a.result);return a===0?"":Ixa.format(new Date(a/1E3))}
var AC=new Xo(5),Ixa=new Ds(1);var Jxa=new Map([[0,"gm/public"],[1,"gm/supervised_user_circle"],[2,"gm/question_answer"],[4,"gm/email"],[5,"gm/drive_document"],[6,"gm/language"]]),Kxa=new Map([[5,"Help article"],[2,"Community Post"],[3,"Troubleshooter"]]),Lxa=new Map([[5,"Check status"],[3,"Get started"]]);function BC(a,b){b=b===void 0?0:b;xo.call(this);var c=this;this.o=a;this.jd=b;this.oa=[];var e=lf(this.o,wk,6,Oe()).length>0;a=lf(this.o,wk,1,Oe()).length>0;var f;this.nextPageToken=(f=Nf(this.o,7))!=null?f:"";this.ua=lf(this.o,wk,6,Oe()).map(function(h){return new pC(h,c.jd++)});
a?this.results=lf(this.o,wk,1,Oe()).map(function(h,k){h=new pC(h,c.jd++);e||k!==1?e&&k===0&&CC(c):CC(c);return h}):(CC(this),this.results=[]);
this.o.Rb()?this.ma=this.o.Rb():this.ma=this.ld().length>0?this.ld()[0].Rb():this.Rd().length>0?this.Rd()[0].Rb():this.oa.length>0?this.oa[0].Rb():""}
u(BC,xo);BC.prototype.ld=function(){return this.results};
BC.prototype.Rd=function(){return this.ua};
BC.prototype.Zi=function(){var a;return(a=this.o.Zi())!=null?a:""};
function Mxa(a){return a.results.filter(function(b){var c;return!((c=vC(b)[0])==null||!Bk(c.o))}).length}
function Nxa(a){var b;return((b=To(Sf(a.o,2)))!=null?b:0)>a.ld().length}
function CC(a){var b,c;a.oa=(c=(b=jf(a.o,Ck,15))==null?void 0:Dk(b).map(function(e){return new pC(e,a.jd++)}))!=null?c:[]}
;function DC(a){xo.call(this);this.metadata=a}
u(DC,xo);DC.prototype.getStartIndex=function(){var a,b;return(b=(a=this.metadata.searchQuery)==null?void 0:a.getStartIndex())!=null?b:0};
DC.prototype.getQuery=function(){var a,b;return(b=(a=this.metadata.searchQuery)==null?void 0:a.getQuery())!=null?b:""};function EC(a){return FC(a)>=Oxa}
function GC(a){return FC(a).getLabel()}
function HC(a,b,c,e,f,h,k,l){this.rank=a;this.oa=b;this.o=c;this.ua=e;this.ma=f;this.icon=h;this.label=k===void 0?"":k;this.description=l===void 0?"":l}
function FC(a){switch(a){case 0:return Pxa;case 30:return Qxa;case 1:return Rxa;case 2:return Oxa;case 3:return Sxa;case 4:return Txa;case 5:return IC;case 20:return JC;case 10:return Uxa;case 100:return Vxa;default:return Pxa}}
n=HC.prototype;n.valueOf=function(){return this.rank};
n.getColor=function(){return rB().Pc?this.o:this.oa};
n.Qc=function(){return this.icon};
n.getLabel=function(){return this.label};
n.getDescription=function(){return this.description};
var Pxa=new HC(0,"#F1F3F4","#F1F3F4"),Qxa=new HC(1,"#F1F3F4","#F1F3F4","#0b8043","#C4EED0",2,"Product Expert Alumni","Former Product Experts who are no longer members of the program"),Rxa=new HC(2,"#896E63","#896E63","#896E63","#B9ABA3",3,"Bronze Member","Community members with growing product knowledge who help other Google users by answers questions"),Oxa=new HC(3,"#9E9E9E","#9E9E9E","#5F6368","#C4C7C5",4,"Silver Product Expert","Community members with intermediate product knowledge who help other Google users by answering questions"),
Sxa=new HC(4,"#FFB300","#F9AB00","#B06000","#F09D00",5,"Gold Product Expert","Community members with in-depth product knowledge who help other Google users by answering questions"),Txa=new HC(5,"#77909D","#718792","#455A64","#E3E3E3",6,"Platinum Product Expert","Community members with advanced product knowledge who help other Google users and Product Experts "),IC=new HC(6,"#79A8FA","#79A8FA","#1A73E8","#A8C7FA",7,"Diamond Product Expert","Community members with product mastery who help other Google users and Product Experts"),
JC=new HC(7,"#4285F4","#669DF6","#1A73E8","#A8C7FA",9,"Community Specialist","Google partners who help ensure the quality of community content"),Uxa=new HC(8,"#4285F4","#669DF6","#1A73E8","#A8C7FA",10,"Community Manager"),Vxa=new HC(9,"#4285F4","#669DF6","#1A73E8","#A8C7FA",10,"Google Employee","Google product team members and community managers");function KC(a){var b=a.model;var c=a.Xf===void 0?!1:a.Xf;a=a.bz===void 0?!1:a.bz;A.call(this,"sc.search.searchResultsList.searchResult.VideoResult");this.model=b;this.Xf=c;this.bz=a;this.o=new Co({icon:"gm/play_circle",size:this.Xf?48:36})}
u(KC,A);KC.prototype.content=function(){var a=this;this.element("div","class",{root:!0,onebox:this.Xf,narrow:this.bz},function(){Wxa(a);Xxa(a)})};
function LC(a){return a===8||a===9||a==="CT_COMMUNITY_VIDEO"||a==="CT_VIDEO"}
function MC(a){return a===8||a==="CT_COMMUNITY_VIDEO"?"Community video":a===9||a==="CT_VIDEO"?"Help video":""}
function NC(a,b){kp(4,a,220,b===void 0?"":String(b))}
function Wxa(a){a.element("div","class","thumbnail-container",function(){var b=a.element;if(window.innerWidth<=600){var c,e,f,h;var k=(h=(c=Bk(a.model.o))==null?void 0:(e=jf(c,uk,8))==null?void 0:(f=jf(e,tk,4))==null?void 0:f.getUrl())!=null?h:""}else{var l,p,r,t;k=(t=(l=Bk(a.model.o))==null?void 0:(p=jf(l,uk,8))==null?void 0:(r=jf(p,tk,2))==null?void 0:r.getUrl())!=null?t:""}b.call(a,"img","class","thumbnail","aria-hidden","true","src",k);a.element("div","class","play-icon","aria-hidden","true",
a.o);b=xC(a.model);b=dna(b);b=b.hours>0?b.hours+":"+b.minutes.toString().padStart(2,"0")+":"+b.seconds.toString().padStart(2,"0"):b.minutes+":"+b.seconds.toString().padStart(2,"0");k=a.element;c=xC(a.model);c=dna(c);e="PT";c.hours>0&&(e+=c.hours+"H");c.minutes>0&&(e+=c.minutes+"M");c.seconds>0&&(e+=c.seconds+"S");k.call(a,"time","class","duration","datetime",e,"aria-label",ena(b),b)})}
function Xxa(a){a.element("div","class","text-content",function(){a.element("h2","class","title","aria-label",a.Xf?a.model.getTitle()+" ("+MC(rC(a.model))+")":a.model.getTitle(),a.model.getTitle());a.Xf||a.element("div","class","subtitle",uC(a.model,null));rC(a.model)===8&&(a.Xf||a.element("div","class","snippet",Yxa.Wd(a.model.Ud())),Zxa(a));$xa(a)})}
function Zxa(a){a.element("div","class","channel",function(){a.element("div","class","channel-title",Dxa(a.model));a.element("div","class","delimiter","aria-hidden","true","\u2022");var b=FC(Bxa(a.model));a.element("div","class","user-role",function(){b.Qc()&&a.element("div","class","role-icon","aria-hidden","true",new vt({icon:b.Qc(),isDarkMode:Em(),size:14,title:b.getLabel()}));a.element("div","class","role-name",b.getLabel())})})}
function $xa(a){a.element("div","class","video-metadata",function(){var b,c;(c=(b=Bk(a.model.o))==null?void 0:Qf(b,6))!=null&&c&&OC(a,"gm/verified","Verified",["verified-chip"]);OC(a,"gm/visibility",aya.format(wC(a.model))+" views");OC(a,"gm/event_available",it({jH:Cxa(a.model)/1E3,style:1}))})}
function OC(a,b,c,e){e=e===void 0?[]:e;e.push("metadata-chip");a.element("div","class",e.join(" "),function(){a.element("div","class","chip-icon","aria-hidden","true",new Co({icon:b,size:16}));a.element("div","class","chip-text",c)})}
var aya=new Xo(5),Yxa=(new em).build();function PC(a){var b=a.symptoms;var c=a.limit===void 0?8:a.limit;var e=a.helpcenterName===void 0?"":a.helpcenterName;var f=a.ww===void 0?new Map:a.ww;a=a.hv===void 0?0:a.hv;A.call(this,"sc.symptoms.Symptoms");this.ma=Vm("workflow__full-layout")==="true";this.isRendered=this.o=!1;this.symptoms=b;this.limit=c;this.helpcenterName=e;this.ww=f;this.hv=a}
u(PC,A);PC.prototype.getURL=function(a){var b;a=(b=Nf(a,1))!=null?b:"";return a!==""&&this.ww.has(a)&&(b=this.ww.get(a))?b:""};
PC.prototype.content=function(){var a=this,b=lf(this.symptoms,Fk,1,Oe()).filter(function(c){var e;return((e=Nf(c,2))==null?void 0:e.trim())!==""});
this.element("div","class","root",function(){a.element("div","class","container",function(){switch(a.hv){case 0:bya(a,b);break;case 1:for(var c=0;c<b.length;c++)cya(a,b[c]);break;default:bya(a,b)}})});
this.isRendered||(kp(4,this.helpcenterName+"_symptoms_show_list",95),this.isRendered=!0)};
function bya(a,b){for(var c=QC(a)?a.limit:b.length,e=0;e<c;e++)dya(a,b[e]);QC(a)&&(eya(a),a.o&&a.element("div","class","container",function(){for(var f=c;f<b.length;f++)dya(a,b[f])}))}
function dya(a,b){a.element("div","class",{"cards-item":!0,"full-layout":a.ma},function(){var c=vs(Nf(b,2));a.element("div","class","border");a.element("div","class","content-wrapper","tabindex","0","title",c,"aria-label",c,"role","button","onclick",function(){RC(a,b)},"onkeydown",function(e){e.key!==" "&&e.key!=="Enter"||RC(a,b)},function(){a.element("div","class","content",function(){a.element("span",c)})})})}
function cya(a,b){var c=Qf(b,3),e=vs(Nf(b,2));a.element("div","class",{"carousel-item":!0,active:c},function(){a.element("div","class","content-wrapper","tabindex","0","title",e,"aria-label",e,"role",c?"note":"buton","onclick",function(){RC(a,b)},"onkeydown",function(f){f.key!==" "&&f.key!=="Enter"||RC(a,b)},function(){a.element("div","class","content",function(){a.element("span",e)})})})}
function eya(a){a.element("a","class","view-more","role","button","tabindex","0","onclick",function(){fya(a)},"onkeydown",function(b){b.key!==" "&&b.key!=="Enter"||fya(a)},function(){a.element("span",a.o?"View less":"View more");
a.element("span","class",{arrow:!0,"arrow-up":a.o,"arrow-down":!a.o})})}
function QC(a){return lf(a.symptoms,Fk,1,Oe()).length>a.limit}
function fya(a){if(QC(a)){a.o=!a.o;a.Ja();var b=a.o;kp(b?2:3,a.helpcenterName+"_symptoms_view_"+(b?"more":"less"),b?96:97)}}
function RC(a,b){kp(35,a.helpcenterName+"_symptoms_click_"+Nf(b,1)+(b.getActive()?"_active":""),98);b.getActive()||(a=a.getURL(b).split("?"),b="?"+a[1],b=kB(b),es(""+a[0]+b))}
;var SC;pha("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));
function gya(a,b,c){Array.isArray(c)&&(c=c.join(" "));var e="aria-"+b;c===""||c==void 0?(SC||(c={},SC=(c.atomic=!1,c.autocomplete="none",c.dropeffect="none",c.haspopup=!1,c.live="off",c.multiline=!1,c.multiselectable=!1,c.orientation="vertical",c.readonly=!1,c.relevant="additions text",c.required=!1,c.sort="none",c.busy=!1,c.disabled=!1,c.hidden=!1,c.invalid="false",c)),c=SC,b in c?a.setAttribute(e,c[b]):a.removeAttribute(e)):a.setAttribute(e,c)}
;function TC(a){yu.call(this);this.o=a||sn();this.ma={};this.oa={}}
jb(TC,yu);TC.prototype.fe=function(){jn(this.ma,this.o.removeNode,this.o);this.oa=this.o=this.ma=null;TC.wh.fe.call(this)};
function UC(a,b,c){c=c||"polite";var e;(e=a.ma[c])?e.removeAttribute("aria-hidden"):(e=a.o.createElement("DIV"),e.id="goog-lr-"+qaa(e),e.style.position="absolute",e.style.top="-1000px",e.style.height="1px",e.style.overflow="hidden",gya(e,"live",c),gya(e,"atomic","true"),a.o.getDocument().body.appendChild(e),a.ma[c]=e);var f=a.oa[c];f=f&&f===b?b+"\u00a0":b;b&&(a.oa[c]=f);Bha(e,f)}
;function hya(a){return(a=a.match(/^\w{2,3}([-_]|$)/))?a[0].replace(/[_-]/g,""):""}
;function VC(a){this.o=a;this.oa=this.va=null;this.ma=[];this.ya=document.createElement("input");this.Fa=this.qa=-1;this.Ra=this.Lu.bind(this);this.Ma=an(this.JF.bind(this),150);this.Sa=this.Ha=this.Ia=0;this.Ca=!1;this.Pa=0;this.La=new zt;iya(this)}
function iya(a){a.ua=document.createElement("div");a.ua.className=a.o.className;lm(a.ua,"sc-select",!0);a.ua.style.cursor="pointer";a.ua.setAttribute("tabindex",0);a.ua.setAttribute("aria-expanded",!1);a.ua.setAttribute("aria-haspopup","listbox");a.ua.setAttribute("aria-required",a.o.getAttribute("aria-required")||"false");a.ua.setAttribute("role","listbox");a.ua.addEventListener("mousedown",function(e){nm(this.oa,"sc-select-show")?e.target==this.oa||this.oa.contains(e.target)||this.Lu():e.button==
0&&WC(this)}.bind(a));
a.ua.addEventListener("keydown",a.fO.bind(a));if(Vm("scselect__redesign")==="true"){var b=document.createElementNS("http://www.w3.org/2000/svg","svg");b.setAttribute("viewBox","0 0 24 24");b.setAttribute("class","globe-icon");b.setAttribute("aria-hidden","true");var c=document.createElementNS("http://www.w3.org/2000/svg","path");c.setAttribute("d","M12 22C10.6333 22 9.34167 21.7417 8.125 21.225C6.90833 20.6917 5.84167 19.975 4.925 19.075C4.025 18.1583 3.30833 17.0917 2.775 15.875C2.25833 14.6583 2 13.3667 2 12C2 10.6167 2.25833 9.325 2.775 8.125C3.30833 6.90833 4.025 5.85 4.925 4.95C5.84167 4.03333 6.90833 3.31667 8.125 2.8C9.34167 2.26667 10.6333 2 12 2C13.3833 2 14.675 2.26667 15.875 2.8C17.0917 3.31667 18.15 4.03333 19.05 4.95C19.9667 5.85 20.6833 6.90833 21.2 8.125C21.7333 9.325 22 10.6167 22 12C22 13.3667 21.7333 14.6583 21.2 15.875C20.6833 17.0917 19.9667 18.1583 19.05 19.075C18.15 19.975 17.0917 20.6917 15.875 21.225C14.675 21.7417 13.3833 22 12 22ZM12 19.95C12.4333 19.35 12.8083 18.725 13.125 18.075C13.4417 17.425 13.7 16.7333 13.9 16H10.1C10.3 16.7333 10.5583 17.425 10.875 18.075C11.1917 18.725 11.5667 19.35 12 19.95ZM9.4 19.55C9.1 19 8.83333 18.4333 8.6 17.85C8.38333 17.25 8.2 16.6333 8.05 16H5.1C5.58333 16.8333 6.18333 17.5583 6.9 18.175C7.63333 18.7917 8.46667 19.25 9.4 19.55ZM14.6 19.55C15.5333 19.25 16.3583 18.7917 17.075 18.175C17.8083 17.5583 18.4167 16.8333 18.9 16H15.95C15.8 16.6333 15.6083 17.25 15.375 17.85C15.1583 18.4333 14.9 19 14.6 19.55ZM4.25 14H7.65C7.6 13.6667 7.55833 13.3417 7.525 13.025C7.50833 12.6917 7.5 12.35 7.5 12C7.5 11.65 7.50833 11.3167 7.525 11C7.55833 10.6667 7.6 10.3333 7.65 10H4.25C4.16667 10.3333 4.1 10.6667 4.05 11C4.01667 11.3167 4 11.65 4 12C4 12.35 4.01667 12.6917 4.05 13.025C4.1 13.3417 4.16667 13.6667 4.25 14ZM9.65 14H14.35C14.4 13.6667 14.4333 13.3417 14.45 13.025C14.4833 12.6917 14.5 12.35 14.5 12C14.5 11.65 14.4833 11.3167 14.45 11C14.4333 10.6667 14.4 10.3333 14.35 10H9.65C9.6 10.3333 9.55833 10.6667 9.525 11C9.50833 11.3167 9.5 11.65 9.5 12C9.5 12.35 9.50833 12.6917 9.525 13.025C9.55833 13.3417 9.6 13.6667 9.65 14ZM16.35 14H19.75C19.8333 13.6667 19.8917 13.3417 19.925 13.025C19.975 12.6917 20 12.35 20 12C20 11.65 19.975 11.3167 19.925 11C19.8917 10.6667 19.8333 10.3333 19.75 10H16.35C16.4 10.3333 16.4333 10.6667 16.45 11C16.4833 11.3167 16.5 11.65 16.5 12C16.5 12.35 16.4833 12.6917 16.45 13.025C16.4333 13.3417 16.4 13.6667 16.35 14ZM15.95 8H18.9C18.4167 7.16667 17.8083 6.44167 17.075 5.825C16.3583 5.20833 15.5333 4.75 14.6 4.45C14.9 5 15.1583 5.575 15.375 6.175C15.6083 6.75833 15.8 7.36667 15.95 8ZM10.1 8H13.9C13.7 7.26667 13.4417 6.575 13.125 5.925C12.8083 5.275 12.4333 4.65 12 4.05C11.5667 4.65 11.1917 5.275 10.875 5.925C10.5583 6.575 10.3 7.26667 10.1 8ZM5.1 8H8.05C8.2 7.36667 8.38333 6.75833 8.6 6.175C8.83333 5.575 9.1 5 9.4 4.45C8.46667 4.75 7.63333 5.20833 6.9 5.825C6.18333 6.44167 5.58333 7.16667 5.1 8Z");
Em()?c.setAttribute("fill","#CCCDCF"):c.setAttribute("fill","#4C4D50");b.appendChild(c);a.ua.appendChild(b)}a.va=document.createElement("span");a.va.setAttribute("aria-hidden","true");a.ua.appendChild(a.va);b=document.createElementNS("http://www.w3.org/2000/svg","svg");b.setAttribute("viewBox","0 0 48 48");b.setAttribute("class","dropdown-icon");c=document.createElementNS("http://www.w3.org/2000/svg","path");c.setAttribute("d","M14 20l10 10 10-10z");b.appendChild(c);a.ua.appendChild(b);a.oa=document.createElement("ol");
a.oa.setAttribute("role","listbox");a.oa.addEventListener("mousemove",function(){this.Ca=!0}.bind(a));
Dm()||a.oa.addEventListener("scroll",function(){this.Pa>0?this.Pa--:this.JF()}.bind(a));
a.ua.appendChild(a.oa);jya(a);kya(a);a.o.addEventListener("optionschange",function(){return void kya(a)});
a.o.addEventListener("selecttoggledisabled",function(){a.ua.setAttribute("tabindex",a.o.disabled?-1:0)});
a.o.addEventListener("selectvrgupdate",function(){for(var e=0;e<a.o.options.length;e++)lm(a.ma[e],"sc-select-hidden-by-vrg",nm(a.o.options[e],"hidden-by-vrg"))});
a.o.addEventListener("change",function(){var e=a.o.selectedIndex;a.va.textContent=a.o.options[e].text;a.ua.setAttribute("aria-activedescendant",a.ma[e].id);a.Fa!==-1&&a.ma[e].setAttribute("aria-selected","false");a.Fa=e;a.ma[e].setAttribute("aria-selected","true")});
a.ua.id=a.o.id;a.o.removeAttribute("id");a.o.style.display="none";a.o.nextElementSibling?a.o.parentNode.insertBefore(a.ua,a.o.nextElementSibling):a.o.parentNode.appendChild(a.ua);a.La.init(a.ua,a.Lu.bind(a))}
function jya(a){a.o.dataset.searchboxPlaceholder&&(a.ya.type="text",a.ya.placeholder=a.o.dataset.searchboxPlaceholder,a.ya.onkeyup=function(){for(var b=a.ya.value.toUpperCase(),c=1;c<a.ma.length;c++)lm(a.ma[c],"hidden",a.ma[c].innerText.toUpperCase().indexOf(b)===-1)})}
function kya(a){a.oa.textContent="";a.oa.style.height="";a.Ha=0;a.ma=[];if(a.ya.placeholder&&a.o.options.length>=20&&z().rs===4){var b=document.createElement("li");b.appendChild(a.ya);a.oa.appendChild(b)}for(b=0;b<a.o.options.length;b++){var c=document.createElement("li");c.setAttribute("tabindex","0");c.id=":"+Yga++;c.textContent=a.o.options[b].text;var e=a.o.options[b].getAttribute("role")?a.o.options[b].getAttribute("role"):"option";c.setAttribute("role",e);a.o.options[b].lang&&(c.lang=a.o.options[b].lang);
a.o.options[b].getAttribute("aria-label")&&c.setAttribute("aria-label",a.o.options[b].getAttribute("aria-label"));a.o.options[b].hasAttribute("hidden")&&c.setAttribute("hidden",!0);c.addEventListener("mouseup",function(f){this.Ca&&this.vG(f)}.bind(a,b));
c.addEventListener("click",a.vG.bind(a,b));c.addEventListener("mouseenter",function(f){this.Ca&&XC(this,f)}.bind(a,b));
c.addEventListener("mouseleave",function(f){this.Ca&&this.qa==f&&(this.qa=-1,lm(this.ma[f],"sc-select-highlight",!1))}.bind(a,b));
c.addEventListener("focus",function(f){XC(this,f)}.bind(a,b));
a.ma.push(c);a.oa.appendChild(c)}a.o.selectedIndex!=-1&&(a.va.textContent=a.o.options[a.o.selectedIndex].text,a.ua.setAttribute("aria-activedescendant",a.ma[a.o.selectedIndex].id),a.Fa=a.o.selectedIndex,a.ma[a.o.selectedIndex].setAttribute("aria-selected","true"));lya(a)}
function WC(a){a.o.disabled||(a.ua.setAttribute("aria-expanded",!0),a.oa.setAttribute("aria-expanded","true"),a.Ca=!1,XC(a,a.o.selectedIndex),a.JF(),document.addEventListener("click",a.Ra),Dm()?nm(a.o,"sc-select-enable-background-scroll")||mya():(document.addEventListener("scroll",a.Ma),window.addEventListener("resize",a.Ma)),$m(!0),At(a.La,!0),Bt(a.La,".sc-select-highlight"))}
n=VC.prototype;n.Lu=function(a){if(!a||a.target!=this.ua&&!this.ua.contains(a.target)&&a.target!=this.o){this.ua.setAttribute("aria-expanded",!1);this.oa.setAttribute("aria-expanded","false");document.removeEventListener("click",this.Ra);Dm()?window.onscroll=function(){}:(document.removeEventListener("scroll",this.Ma),window.removeEventListener("resize",this.Ma));
lm(this.oa,"sc-select-show",!1);this.ya.value="";for(a=1;a<this.ma.length;a++)lm(this.ma[a],"hidden",!1);$m(!1);At(this.La,!1);this.ua.focus()}};
n.JF=function(){var a,b,c;if(nm(this.oa,"sc-select-show"))this.Ia=this.oa.offsetTop-this.oa.scrollTop;else{lm(this.oa,"sc-select-show",!0);this.oa.style.height="";for(c=a=this.Ha=0;c<this.o.selectedIndex;c++)nm(this.ma[c],"sc-select-hidden-by-vrg")&&a++;c=this.ma[0]?this.ma[0].offsetHeight:0;this.Ia=this.ua.offsetHeight/2-c/2-c*(this.o.selectedIndex-a)-(this.ma[0]?this.ma[0].offsetTop:0);this.Ha||(this.Ha=this.oa.offsetHeight,this.Sa=this.oa.offsetHeight-c*this.ma.length)}a=c=0;var e=this.oa.offsetParent;
for(b=!1;e;)c-=e.offsetLeft,a-=e.offsetTop,window.getComputedStyle(e).position=="fixed"&&(b=!0),e=e.offsetParent;b||(c+=window.pageXOffset,a+=window.pageYOffset);e=c;a+=12;b=document.documentElement.clientWidth;c=document.documentElement.clientHeight-24;e=Math.max(Math.min(z().rtl?this.ua.offsetWidth-this.oa.offsetWidth:0,e+b-this.oa.offsetWidth),e);b=Math.max(this.Ia,a);a=Math.min(this.Ia+this.Ha,a+c)-b;a<=this.Sa||(this.oa.style.left=e+"px",this.oa.style.top=b+"px",this.oa.style.height=a+"px",a=
b-this.Ia,this.oa.scrollTop!=a&&(this.Pa++,this.oa.scrollTop=a))};
function mya(){var a=window.pageXOffset,b=window.pageYOffset;window.onscroll=function(){window.scrollTo(a,b)}}
function nya(a,b){return!nm(a.ma[b],"hidden")&&!nm(a.ma[b],"sc-select-hidden-by-vrg")&&!a.ma[b].hasAttribute("hidden")}
n.vG=function(a){var b=this.o.options[a];b.selected||(b.selected=!0,this.Fa!==-1&&this.ma[this.Fa].setAttribute("aria-selected","false"),this.ma[a].setAttribute("aria-selected","true"),this.Fa=a,this.va.textContent=b.text,this.ua.setAttribute("aria-activedescendant",this.ma[a].id),lya(this),Zm(this.o,"change"));Zm(b,"click");this.Lu()};
function XC(a,b){a.qa!=-1&&lm(a.ma[a.qa],"sc-select-highlight",!1);a.ma[b]?(a.qa=b,lm(a.ma[a.qa],"sc-select-highlight",!0)):a.qa=-1}
n.fO=function(a){switch(a.which){case 13:case 32:a.preventDefault();nm(this.oa,"sc-select-show")?this.qa!=-1&&this.vG(this.qa):WC(this);break;case 27:this.Lu();this.ua.setAttribute("aria-activedescendant",this.ma[this.o.selectedIndex].id);break;case 38:a.preventDefault();nm(this.oa,"sc-select-show")||WC(this);a=this.qa;if(this.ma.length===0)a=-1;else{for(var b=a-1<0?this.ma.length-1:a-1;b!=a&&!nya(this,b);)b=b-1<0?this.ma.length-1:b-1;a=b}XC(this,a);this.ma[a].focus();this.ua.setAttribute("aria-activedescendant",
this.ma[a].id);oya(this);break;case 40:a.preventDefault();nm(this.oa,"sc-select-show")||WC(this);a=this.qa;if(this.ma.length===0)a=-1;else{for(b=(a+1)%this.ma.length;b!=a&&!nya(this,b);)b=(b+1)%this.ma.length;a=b}XC(this,a);this.ma[a].focus();this.ua.setAttribute("aria-activedescendant",this.ma[a].id);oya(this)}};
function oya(a){if(a.qa!=-1){var b=a.ma[a.qa];b.offsetTop<a.oa.scrollTop?(a.Ca=!1,a.oa.scrollTop=b.offsetTop):b.offsetTop+b.offsetHeight>a.oa.scrollTop+a.oa.offsetHeight&&(a.Ca=!1,a.oa.scrollTop=b.offsetTop+b.offsetHeight-a.oa.offsetHeight)}}
function lya(a){var b=a.o.getAttribute("aria-label")||"";b&&(a.o.selectedIndex!==-1&&(b+=" ("+a.o[a.o.selectedIndex].innerText+")"),a.ua.setAttribute("aria-label",b))}
n.dispose=function(){this.ua&&An(this.ua);this.oa=this.va=this.ua=null;this.ma=[]};
window.sc_initSelects=function(){for(var a=w((window.sc_scope||document).getElementsByTagName("select")),b=a.next();!b.done;b=a.next())b=b.value,b.dataset.exclude!=="true"&&new VC(b)};function YC(a){this.Aa=se(a)}
u(YC,eh);YC.prototype.setButton=function(a){return nf(this,fk,1,a)};
var pya=yi(YC);YC.prototype.Ba=wi([0,jk]);function ZC(a){this.Aa=se(a)}
u(ZC,eh);ZC.prototype.xt=function(a,b){sf(this,1,ck,a,b)};
ZC.prototype.Mf=function(a,b){return Me(this,1,ck,a,b)};ZC.prototype.Ba=wi([0,ji,ik]);function $C(a){this.Aa=se(a)}
u($C,eh);var qya=[0,pi,x,-1];$C.prototype.Ba=wi(qya);function aD(a){this.Aa=se(a)}
u(aD,eh);aD.prototype.getHeading=function(){return Df(this,2)};
aD.prototype.setHeading=function(a){return ag(this,2,a)};
var rya=yi(aD);aD.prototype.Ba=wi([0,ji,qya,x,pi,1,x]);var bD=new Map([[1,"smart_button_event_handshake"],[2,"smart_button_event_execute"],[3,"smart_button_event_state_update"],[4,"smart_button_event_initialized"],[5,"smart_button_event_describe_buttons"],[6,"smart_button_event_rendered"]]);function sya(){var a=this;this.o=function(){};
this.ma=function(b){if("detail"in b){b=pya(b.detail.action);var c,e;if((c=jf(b,fk,1))==null?0:(e=gk(c))==null?0:ig(e,10,ek)){var f,h,k=(f=jf(b,fk,1))==null?void 0:(h=gk(f))==null?void 0:Lf(h,10,ek);(f=k&&k!==null?k.startsWith("url:")?k.replace("url:",""):k:"")&&a.oa(f)}else{var l,p;if((l=jf(b,fk,1))==null?0:(p=gk(l))==null?0:Ge(p,bk,17,ek)){var r;if(f=(k=jf(b,fk,1))==null?void 0:(r=gk(k))==null?void 0:Of(r,bk,17,ek))h=Nf(f,2),f=Rf(f,1),h&&f&&a.oa("/"+h+"/workflow/"+f)}}}};
this.ua=function(){var b=bD.get(1);b=new CustomEvent(b,{bubbles:!0,cancelable:!0});window.document.body.dispatchEvent(b)};
this.oa=function(b){es(b,{Cd:!0})};
window.document.body.addEventListener(bD.get(6),this.ua);window.document.body.addEventListener(bD.get(5),this.o);window.document.body.addEventListener(bD.get(2),this.ma)}
var tya;function cD(){tya===void 0&&(tya=new sya)}
sya.prototype.dispose=function(){window.document.body.removeEventListener(bD.get(2),this.ma);window.document.body.removeEventListener(bD.get(6),this.ua);window.document.body.removeEventListener(bD.get(5),this.o)};
window.sc_initSmartButtonController=function(){cD()};function dD(a,b){a=a===void 0?95:a;b=b===void 0?133:b;A.call(this,"sc.shared.ErrorSvg");this.o=new st("error_computer.svg");this.height=a;this.width=b}
u(dD,A);dD.prototype.content=function(){var a=this;this.element("div","style",{width:this.width+"px",height:this.height+"px"},function(){a.o.render()})};function uya(a){this.ma=a;this.o=null}
uya.prototype.Md=function(a){var b=this;this.o===null&&(this.o=setTimeout(function(){b.o!==null&&(b.o=null,b.ma())},a))};function vya(){var a=this;this.oa=function(b){if(!("detail"in b))throw Error("Invalid event type received for state update. Expected CustomEvent.");if(a.ma===void 0)throw Error("No state update callback was provided.");b=rya(b.detail);a.ma(b)}}
n=vya.prototype;n.sendInitCompleteEvent=function(){console.log("[Smart Buttons] Broadcasting init");eD(4)};
n.sendButtonAction=function(a,b){a={action:a==null?void 0:a.serialize(),buttonClientRect:b};eD(2,a)};
n.sendDescribeEvent=function(a){var b=new ZC;a=w(a);for(var c=a.next();!c.done;c=a.next())b.xt(c.value);b={action:b.serialize(),buttonClientRect:void 0};eD(5,b)};
n.sendButtonsRenderedEvent=function(){eD(6)};
n.initHandshakeListener=function(a){this.o=a;window.document.body.addEventListener(bD.get(1),this.o)};
n.initStateUpdateListener=function(a){this.ma=a;window.document.body.addEventListener(bD.get(3),this.oa)};
n.dispose=function(){window.document.body.removeEventListener(bD.get(3),this.oa);this.o&&window.document.body.removeEventListener(bD.get(1),this.o)};
function eD(a,b){a=bD.get(a);var c=new CustomEvent(a,{bubbles:!0,cancelable:!0,detail:b});console.log("[Smart Buttons] Broadcasting event "+a);console.log(b);window.document.body.dispatchEvent(c)}
;Object.keys({cX:0,bX:1,VW:2,YW:3,WW:4,aX:5,XW:6});function fD(a,b){this.o=a;this.metadata=b}
fD.prototype.getMetadata=function(){return this.metadata};
fD.prototype.Nd=function(a){this.o(a)};
function gD(){var a=this;this.ma=new Map;this.oa=function(){a.o.sendButtonsRenderedEvent()};
this.o=new vya;wya(this)}
var hD;function xya(){if(hD&&!yya)return hD;hD=new gD;yya=!1;var a=hD;a.o.initHandshakeListener(a.qa.bind(a));a.o.initStateUpdateListener(a.ua.bind(a));a.o.sendInitCompleteEvent();return hD}
function zya(a,b,c,e){if(b==="")throw Error("Smart Button guid key is empty");a.ma.has(b)||a.ma.set(b,new fD(e,c))}
gD.prototype.ua=function(a){var b,c=(b=Df(a,5))!=null?b:"";if(!this.ma.has(c))throw Error("Smart Button guid key "+c+" does not exist. Cannot update state.");var e;(e=this.ma.get(c))==null||e.Nd(a)};
gD.prototype.qa=function(){console.log("[Smart Buttons] Received Handshake");var a=[];this.ma.forEach(function(b){a.push(b.getMetadata())});
this.o.sendDescribeEvent(a)};
gD.prototype.dispose=function(){this.o.dispose();this.ma.clear();var a;(a=eo().querySelector(".workflow"))==null||a.removeEventListener("dynamicFormRendered",this.oa)};
function wya(a){var b;(b=eo().querySelector(".workflow"))==null||b.addEventListener("dynamicFormRendered",a.oa)}
var yya=!1;function iD(a){var b=a.buttonTitle;var c=a.contentId;var e=a.helpcenterName;var f=a.Fi;a=a.kA===void 0?!0:a.kA;A.call(this,"sc.smart_button.FatalErrorButton");this.o=new dD;this.buttonTitle=b;this.contentId=c;this.helpcenterName=e;this.Fi=f;this.kA=a}
u(iD,A);iD.prototype.content=function(){var a=this;this.element("div","class","^no-margin root",function(){a.element("div","class","^no-margin content",function(){a.o.render()});
a.element("div","class","^no-margin content",function(){a.element("div","class","^no-margin title","Hmm... something went wrong.");a.element("div","class","^no-margin error","The smart button requested did not load. Please complete actions manually.");a.kA&&a.element("div","class","^no-margin feedback-link",a.Fi);a.element("div","class","^no-margin detail",function(){a.buttonTitle!==""&&a.element("div","class","^no-margin",(new fp("The button title is {buttonTitle}.")).format({buttonTitle:a.buttonTitle}));
a.element("div","class","^no-margin",(new fp("The content ID is {contentId}.")).format({contentId:a.contentId}));a.element("div","class","^no-margin",(new fp("The help center name is {helpcenterName}.")).format({helpcenterName:a.helpcenterName}))})})});
Aya(this)};
function Aya(a){var b,c;(c=(b=window).sc_trackStatsImpressions)==null||c.call(b,[{type:99,id:a.contentId+"_button_"+a.buttonTitle}],!0)}
;var Bya=new Map([[1,"good"],[2,"error"],[3,"in-progress"]]);function jD(){A.call(this,"sc.smart_button.Icon");this.o=!1}
u(jD,A);function kD(a,b,c,e){a.ma=b;a.state=c;a.o=e===void 0?!1:e}
jD.prototype.content=function(){var a=this;if(this.ma!==void 0&&this.state!==void 0&&this.o!==void 0&&this.state!==0){var b={"^no-margin":!0,icon:!0,state:!this.o,"heading-icon":this.o},c=Bya.get(this.state);Bya.has(this.state)&&(b[c]=!0);var e="";c==="good"?e="Success icon":c==="error"?e="Failure icon":c==="in-progress"&&(e="In progress icon");this.element("div","class",b,"aria-label",e!==""?e:null,function(){var f;(f=a.ma)==null||f.render()})}};function lD(a){A.call(this,"sc.smart_button.SendFeedbackLink");var b=this;this.buttonTitle=a;this.o=function(){Cya(b)};
this.ma=function(c){"key"in c&&(c.key===" "||c.key==="Enter")&&Cya(b)}}
u(lD,A);lD.prototype.content=function(){this.anchor=this.element("a","href","#","class","^no-margin link","Send feedback");var a;(a=this.anchor)==null||a.addEventListener("click",this.o);var b;(b=this.anchor)==null||b.addEventListener("keydown",this.ma)};
lD.prototype.dispose=function(){var a;(a=this.anchor)==null||a.removeEventListener("click",this.o);var b;(b=this.anchor)==null||b.removeEventListener("keydown",this.ma)};
function Cya(a){var b=Fv();b.set("smart_button_title",a.buttonTitle);Dv({payload:b,productId:Number(z().fbid)})}
;function mD(a){return(a==null?void 0:Vf(a,3))===2}
function Dya(a){return(a==null?void 0:Vf(a,3))===1}
function Eya(a){a=a==null?void 0:lf(a,$C,1,Oe());if(a===void 0)return!1;a=w(a);for(var b=a.next();!b.done;b=a.next())if(nD(b.value))return!0;return!1}
function Fya(a){a=oD(a);if(a.length===0)return!1;a=w(a);for(var b=a.next();!b.done;b=a.next())if(!nD(b.value))return!1;return!0}
function oD(a){return a===void 0?[]:(a==null?void 0:lf(a,$C,1,Oe(Sc)))||[]}
function nD(a){return a!==void 0&&xf(a,1)!=null&&Ef(a,1)!==0}
function Gya(a){return a!==void 0&&xf(a,1)!=null&&Ef(a,1)===1}
function Hya(a){return a!==void 0&&xf(a,1)!=null&&Ef(a,1)===2}
function Iya(a){return a.filter(function(b){return Hya(b)})}
;function pD(a,b){b=b===void 0?!1:b;A.call(this,"sc.smart_button.StateHeading");this.Fi=a;this.Ak=b;this.qa=[];this.headingState=0;this.icon=new jD}
u(pD,A);pD.prototype.content=function(){var a;!(mD(this.o)||Dya(this.o)||((a=this.o)==null?0:a.getHeading())||Fya(this.o))||Jya(this)};
pD.prototype.Nd=function(a){this.o=a;this.qa=oD(this.o);if(mD(this.o))this.headingState=2;else if(Dya(this.o))this.headingState=1;else if(Iya(oD(this.o)).length>0)this.headingState=2;else{a:if(a=oD(this.o),a.length===0)a=!1;else{a=w(a);for(var b=a.next();!b.done;b=a.next())if(!Gya(b.value)){a=!1;break a}a=!0}a?this.headingState=1:this.headingState=0}this.Ja()};
pD.prototype.heading=function(){var a=this.o;if(((a==null?void 0:a.getHeading())||"").trim()!==""){var b;return((b=this.o)==null?void 0:b.getHeading()).trim()}return this.headingState===1?"All actions successfully complete!":this.qa.length===0?mD(this.o)?"There was a problem while running actions. Please complete manually.":"":"There was a problem while running actions. Please review below."};
function Kya(a){var b;if(a.o&&((b=a.o)==null?0:xf(b,3)!=null)){var c;return(c=a.o)==null?void 0:Ef(c,3)}return a.headingState===2?2:a.headingState===1?1:0}
function Jya(a){a.element("div","class",{"^no-margin":!0,container:!0,error:a.headingState===2,good:a.headingState===1},"tabindex","0",function(){a.element("div","class","^no-margin content",function(){a.headingState===1&&(a.ma===void 0&&(a.ma=new Co({icon:"gm/check_circle_outline",size:24,re:["^no-margin"]})),kD(a.icon,a.ma,Kya(a),!0),a.icon.render());a.headingState===2&&(a.oa===void 0&&(a.oa=new Co({icon:"gm/error_outline",size:24,re:["^no-margin"]})),kD(a.icon,a.oa,Kya(a),!0),a.icon.render());
a.element("div","class","^no-margin heading","aria-live","polite",a.heading());a.headingState!==2||a.Ak||a.element("div","class","^no-margin feedback-link",a.Fi)})})}
;function qD(){A.call(this,"sc.smart_button.States");this.icon=new jD}
u(qD,A);qD.prototype.content=function(){var a=this,b=Eya(this.o);b||this.element("ul","class","^no-margin");var c,e;(c=this.o)==null||(e=lf(c,$C,1,Oe()))==null||e.forEach(function(f){Nf(f,2)!==""&&a.element("div","class","^no-margin state","tabindex","0",function(){b?(Lya(a,f),Mya(a,f,b),Nya(a,f)):a.element("ul","class","list",function(){a.element("li","class","list",function(){Mya(a,f,b)})})})})};
qD.prototype.Fe=function(){return oD(this.o).length>0};
qD.prototype.Nd=function(a){this.o=a;this.Ja()};
function Nya(a,b){if(Df(b,3)){a.qa===void 0&&(a.qa=new Co({icon:"gm/help_outline",size:16,re:["^no-margin"]}));var c=new Kv({content:function(){ko("div","style",{"max-width":"200px","max-height":"200px","overflow-x":"hidden","overflow-y":"auto"},function(){var f;lo((f=Df(b,3))!=null?f:"")})},
Th:!0,Gl:"placement-start",xq:"alignment-center",style:"style-normal",rc:4,tc:2});c.render();var e=a.element("div","role","button","tabindex",0,"class","detail text-pad ^no-margin","aria-label","Detailed state information tooltip",function(){var f;(f=a.qa)==null||f.render()});
e.addEventListener("mouseenter",function(){c.open({anchor:e})});
e.addEventListener("focus",function(){c.open({anchor:e})});
e.addEventListener("blur",function(){c.close()})}}
function Lya(a,b){nD(b)&&(Gya(b)&&(a.ma===void 0&&(a.ma=new Co({icon:"gm/check_circle_outline",size:16,re:["^no-margin"]})),kD(a.icon,a.ma,Vf(b,1))),Hya(b)&&(a.oa===void 0&&(a.oa=new Co({icon:"gm/error_outline",size:16,re:["^no-margin"]})),kD(a.icon,a.oa,Vf(b,1))),b!==void 0&&xf(b,1)!=null&&Ef(b,1)===3&&(a.inProgress===void 0&&(a.inProgress=new Co({icon:"gm/schedule",size:16,re:["^no-margin"]})),kD(a.icon,a.inProgress,Vf(b,1))),a.icon.render())}
function Mya(a,b,c){a.element("div","class",{"^no-margin":!0,text:!0,"text-pad":c},Nf(b,2))}
;function rD(a){A.call(this,"sc.smart_button.StandardButton");this.ma=this.oa=!1;this.ya=new np;this.states=new qD;this.Of=a.Of;this.title=a.title.trim();this.description=a.description.trim();this.value=a.value.trim();var b;this.va=new pD(a.Fi,(b=a.Ak)!=null?b:!1)}
u(rD,A);rD.prototype.Nd=function(a){this.states.Nd(a);this.va.Nd(a);this.ma=!1;this.Ja()};
rD.prototype.uh=function(a){this.ma=a;this.Ja()};
rD.prototype.content=function(){var a=this;this.o=this.element("div","class",{"^no-margin":!0,root:!0,"spinner-overlay":this.ma},"tabindex","0","aria-label",this.title===""?null:this.title,function(){Oya(a);a.va.render();a.element("div","class","^no-margin flex content",function(){a.element("div","class","^no-margin",function(){a.title!==""&&a.element("div","class","^no-margin title",a.title);a.description!==""&&a.element("div","class","^no-margin sub-heading description",a.description);a.states.Fe()&&
a.element("div","class","^no-margin states-container",function(){a.states.render()})});
a.element("div","class","^no-margin button-container",function(){a.qa=new Go({disabled:a.oa,text:a.value||"Do it for me",style:4,trigger:function(){a.oa=!0;if(a.Of&&a.o!==void 0){var b;(b=a.qa)==null||b.setDisabled(!0);a.Of(a.o.getBoundingClientRect())}}});
a.qa.render()})})})};
function Oya(a){if(a.o&&a.ma){var b=a.element("div","class","^no-margin spinner","style",{top:a.o.clientHeight/2-12+"px",left:a.o.clientWidth/2-12+"px"},"aria-label","Executing action",a.ya);requestAnimationFrame(function(){b.focus()})}}
;function sD(a){var b=a.title===void 0?"":a.title;var c=a.description===void 0?"":a.description;var e=a.value===void 0?"":a.value;a=a.Of===void 0?void 0:a.Of;A.call(this,"sc.smart_button.TakeMeThereButton");this.o=!1;this.Of=a;this.title=b;this.description=c;this.value=e}
u(sD,A);sD.prototype.content=function(){var a=this,b=this.title===""&&this.description==="";this.oa=this.element("div","class",{"^no-margin":!0,root:!b},"tabindex","0","aria-label",this.title===""?null:this.title,function(){a.element("div","class",{"^no-margin":!0,flex:!b},function(){a.element("div","class","^no-margin content",function(){a.title!==""&&a.element("div","class","^no-margin title",a.title);a.description!==""&&a.element("div","class","^no-margin sub-heading description",a.description)});
a.element("div","class","^no-margin button-container",function(){a.ma=new Go({disabled:a.o,text:a.value||"Do it for me",style:4,trigger:function(){a.o=!0;if(a.Of&&a.oa!==void 0){var c;(c=a.ma)==null||c.setDisabled(!0);a.Of(a.oa.getBoundingClientRect())}}});
a.ma.render()})})})};
sD.prototype.Nd=function(){};
sD.prototype.uh=function(){};function tD(a){var b=a.Pj;var c=a.button===void 0?void 0:a.button;var e=a.contentId;var f=a.Ak===void 0?!1:a.Ak;var h=a.helpcenterName;var k=a.oJ;var l=a.mqa;var p=a.zn===void 0?!1:a.zn;var r=a.Qy===void 0?!0:a.Qy;a=a.Of===void 0?void 0:a.Of;A.call(this,"sc.smart_button.SmartButton");var t=this;this.ma=this.va=!1;this.zn=p;this.smartButton=c===void 0&&b!==""?mfa(b||""):c||new fk;r&&Ee(this.smartButton,dk,1)?Ce(this.smartButton,2):Ee(this.smartButton,ak,2)&&Ce(this.smartButton,1);this.contentId=e;
this.helpcenterName=h;this.Ak=f;b=uD(this);this.Fi=new lD(b);var v;this.qa=(v=gk(this.smartButton))==null?void 0:Vf(v,1);this.button=Pya(this);this.qa!==3&&(this.oJ=k===void 0?new iD({Fi:this.Fi,buttonTitle:b,contentId:this.contentId,helpcenterName:h,kA:!this.Ak}):k,this.timer=l===void 0?new uya(function(){t.ma=!0;t.Ja()}):new l(function(){t.ma=!0;
t.Ja()}),a&&(this.Of=a))}
u(tD,A);function vD(a){a.o=xya();zya(a.o,Qya(a),Rya(a),function(b){a.Nd(b)})}
n=tD.prototype;n.content=function(){var a;var b;(b=gk(this.smartButton))!=null&&Ee(b,ck,19)?(b=(a=gk(this.smartButton))==null?void 0:jf(a,ck,19),a=yf(b,1,!0)):a=!0;if(a)if(this.ma){var c;(c=this.oJ)==null||c.render()}else if(this.button.render(),!this.zn){var e,f;(f=(e=window).sc_trackStatsImpressions)==null||f.call(e,[{type:93,id:wD(this)}],!0)}};
n.dispose=function(){if(this.smartButton){var a;if((a=this.o)!=null){var b=Qya(this);if(b===""||!a.ma.has(b))throw Error("Smart Button "+b+" does not exist, or the guid key is empty");a.ma.delete(b)}var c;(c=this.Fi)==null||c.dispose()}};
n.Nd=function(a){var b;(b=this.timer)!=null&&b.o!==null&&(clearTimeout(b.o),b.o=null);if(!Fya(a)){var c;(c=this.timer)==null||c.Md(6E4)}this.button.uh(!1);this.button.Nd(a);this.Ja();a=w(lf(a,$C,1,Oe()));for(b=a.next();!b.done;b=a.next()){var e=c=void 0,f=void 0,h=void 0,k=void 0,l=void 0,p=void 0,r=void 0;if(!this.zn)switch(Vf(b.value,1)){case 0:(p=(r=window).sc_trackStatsEvent)==null||p.call(r,130,0,wD(this));break;case 1:(k=(l=window).sc_trackStatsEvent)==null||k.call(l,130,10,wD(this));break;
case 2:(f=(h=window).sc_trackStatsEvent)==null||f.call(h,130,21,wD(this));break;default:(c=(e=window).sc_trackStatsEvent)==null||c.call(e,130,0,wD(this))}}};
function Pya(a){return a.qa===3?new sD({title:uD(a),description:a.getDescription(),value:a.getValue(),Of:function(b){a.yd(b)}}):new rD({title:uD(a),
description:a.getDescription(),value:a.getValue(),Ak:a.Ak,Fi:a.Fi,Of:function(b){a.yd(b)}})}
n.yd=function(a){this.va=!0;var b;(b=this.Of)==null||b.call(this);this.button.uh(!0);var c;(c=this.timer)==null||c.Md(6E4);(b=this.o)!=null&&(this.oa||(this.oa=new YC,this.oa.setButton(this.smartButton)),c=this.oa,b.o.sendButtonAction(c,a));this.Ja();if(!this.zn){var e,f;(f=(e=window).sc_trackStatsEvent)==null||f.call(e,93,35,wD(this))}};
function uD(a){if(Ee(a.smartButton,dk,1)){var b;return((b=gk(a.smartButton))==null?void 0:Df(b,2))||""}var c;return((c=jf(a.smartButton,ak,2))==null?void 0:c.getTitle())||""}
n.getDescription=function(){if(Ee(this.smartButton,dk,1)){var a;return((a=gk(this.smartButton))==null?void 0:a.getDescription())||""}var b;return((b=jf(this.smartButton,ak,2))==null?void 0:b.getDescription())||""};
n.getValue=function(){if(Ee(this.smartButton,dk,1)){var a;return((a=gk(this.smartButton))==null?void 0:a.getValue())||""}var b;return((b=jf(this.smartButton,ak,2))==null?void 0:b.getValue())||""};
function Qya(a){if(Ee(a.smartButton,dk,1)){var b,c,e;return(e=(b=gk(a.smartButton))==null?void 0:(c=jf(b,ck,19))==null?void 0:Df(c,3))!=null?e:""}var f;if((f=jf(a.smartButton,ak,2))==null?0:hg(f,20)){var h,k;return(k=(h=jf(a.smartButton,ak,2))==null?void 0:Df(h,20))!=null?k:""}throw Error("No smart button guid found.");}
function Rya(a){var b=new ck,c;if((c=gk(a.smartButton))==null||!Ee(c,ck,19))return b;var e;c=(e=gk(a.smartButton))==null?void 0:jf(e,ck,19);e=yf(c,1,!0);Wf(b,1,e);e=wf(c,2);ag(b,2,e);c=wf(c,3);ag(b,3,c);ag(b,4,a.contentId.toString());ag(b,5,a.helpcenterName);return b}
function wD(a){return a.contentId+"_button_"+uD(a)}
;function Sya(a){try{return(new URL(a)).pathname}catch(b){return a}}
hb("sc.smart_journey_survey.initialize",function(a,b){a=Sya(a);Ko("sj-recommendations-survey-pathname")===a&&(Ut(new Tt,{triggerId:b,productData:{customData:{triggerPoint:"Survey at SJ1 recommendation destination"}}}),Lo("sj-recommendations-survey-pathname"))});function xD(a){xo.call(this);this.ariaLabel=this.text="";this.checked=this.disabled=this.ariaHidden=!1;this.tabIndex=0;this.Cf(a)}
u(xD,xo);n=xD.prototype;n.Cf=function(a){var b=a.checked===void 0?!1:a.checked;var c=a.text===void 0?"":a.text;var e=a.ariaLabel===void 0?"":a.ariaLabel;var f=a.disabled===void 0?!1:a.disabled;var h=a.tabIndex===void 0?0:a.tabIndex;var k=a.ariaHidden===void 0?!1:a.ariaHidden;var l=a.content;a=a.ye;this.checked=b;this.text=c;this.ariaLabel=e;this.disabled=f;this.tabIndex=h;this.content=l;this.ye=a;this.ariaHidden=k};
n.getText=function(){return this.text};
n.getContent=function(){return this.content};
n.Jd=function(){return this.ariaLabel};
n.isChecked=function(){return this.checked};
function yD(a,b){if(a.isChecked()!==b){a.checked=b;var c;(c=a.ye)==null||c.call(a,b);a.Da(0)}}
n.RD=function(){return this.tabIndex};function zD(a){a=a===void 0?{}:a;A.call(this,"sc.shared.MaterialCheckbox");this.id=so();this.model=a instanceof xD?a:new xD(a);this.overlay=new Do({rq:!0});this.o=null;this.watch(this.model)}
u(zD,A);
zD.prototype.content=function(a){var b=this;a&&this.model.Cf(a);this.element("label","class",{root:!0,disabled:this.model.disabled},"aria-hidden",this.model.ariaHidden,function(){b.element("div","class","touch-target",function(){b.element("div","class","checkbox",function(){b.o=b.element("input","id",b.id,"class","native-control","type","checkbox","aria-label",b.model.Jd(),"tabindex",b.model.RD(),"disabled",b.model.disabled,"onchange",function(){b.onChange()},"onkeydown",function(f){b.o&&f.key===
"Enter"&&(b.o.click(),f.preventDefault())});
b.o.checked=b.model.isChecked()===!0;b.o.indeterminate=b.model.isChecked()===null;b.element("div","class","box",function(){b.element("svg","class","checkmark","aria-hidden","true","viewBox","0 0 24 24",function(){b.element("path","class","checkmark-path","d","M1.73,12.91 8.1,19.28 22.79,4.59")});
b.element("div","class","mixedmark")});
b.overlay.render()})});
var c=b.model.getText(),e=b.model.getContent();c?$n(c):e&&e()})};
zD.prototype.onChange=function(){this.o&&yD(this.model,this.o.checked)};
zD.prototype.isChecked=function(){return this.model.isChecked()};function AD(a){var b=a.forumId;var c=a.forumName;var e=a.Gj===void 0?0:a.Gj;var f=a.Ua===void 0?new kC:a.Ua;a=a.Ea===void 0?null:a.Ea;A.call(this,"sc.tailwind.thread_list.subscription_dialog.SubscriptionDialog");var h=this;this.oa=new gu;this.cancelButton=new Go({text:"Cancel",style:3,trigger:function(){h.xj();h.close()}});
this.qa=new Go({text:"Update preferences",style:4,trigger:function(){Tya(h);h.close()}});
this.ya=new Map;this.ma=new Map;this.Ua=f;this.forumId=b;this.forumName=c;this.Ea=a;this.o=e===2;this.dialog=new ju({content:function(){h.render()}});
this.va=[{subscription:2,text:"New announcements from the "+this.forumName+" team"}];this.ma=Uya(this);this.ya.set(2,3)}
u(AD,A);n=AD.prototype;n.content=function(){var a=this;this.element("div","class","root",function(){a.oa.render({title:"Manage your "+a.forumName+" community subscriptions",content:function(){a.element("div","class","sub-heading","Get notifications for the following:");for(var b=w(a.ma.values()),c=b.next(),e={};!c.done;e={gL:void 0},c=b.next())e.gL=c.value,a.element("div","class","radio-label",function(f){return function(){f.gL.render()}}(e))},
footer:function(){Vya(a)}})})};
n.open=function(){this.dialog.open()};
n.close=function(){this.dialog.close()};
n.Ta=function(){this.dialog.Ta()};
function Uya(a){for(var b=new Map,c=w(a.va),e=c.next();!e.done;e=c.next())e=e.value,b.set(e.subscription,new zD({text:e.text,checked:a.o}));return b}
function Vya(a){a.element("div","class","buttons",function(){a.cancelButton.render();a.qa.render()})}
function Tya(a){var b,c,e,f;Ra(function(h){if(h.o==1){b=a.ma.get(2);if(!b||b.isChecked()===a.o)return h.return();c=b.isChecked()?3:1;Ja(h,2);return h.yield(a.Ua.subscribeToForum(a.forumId,c),4)}if(h.o!=2)return a.o=(e=b.isChecked())!=null?e:!1,iu().open({message:"Notification preferences updated successfully"}),(f=a.Ea)==null||f.vN(b.isChecked()?2:0),Ka(h,0);La(h);iu().open({message:"Error: Notification preferences not updated"});Ia(h)})}
n.xj=function(){var a=this.ma.get(2);a&&a.isChecked()!==this.o&&yD(a.model,this.o)};function BD(a){this.Aa=se(a)}
u(BD,eh);BD.prototype.Ba=wi([0,gi,x]);function CD(a){this.Aa=se(a)}
u(CD,eh);n=CD.prototype;n.getId=function(){return Nf(this,1)};
n.setId=function(a){return ag(this,1,a)};
n.getName=function(){return Nf(this,2)};
n.Sf=function(){return Nf(this,2)};
n.setName=function(a){return ag(this,2,a)};
n.qf=la(7);n.getLanguage=function(){return Nf(this,3)};
n.setLanguage=function(a){return ag(this,3,a)};
n.getContent=function(){return Nf(this,4)};
function Wya(a){return Nf(a,4)}
n.setContent=function(a){return ag(this,4,a)};
n.clearContent=function(){return Ce(this,4)};var Xya=[0,x,-3];CD.prototype.Ba=wi(Xya);function DD(a){this.Aa=se(a)}
u(DD,eh);DD.prototype.Ba=wi([0,ji,Xya]);function ED(a){var b=a.mc===void 0?null:a.mc;var c=a.Hy;var e=a.Iy===void 0?rB().experimentIds.includes(46):a.Iy;var f=a.Jy===void 0?rB().experimentIds.includes(47):a.Jy;a=a.Zx===void 0?!0:a.Zx;A.call(this,"sc.tailwind.thread.hero.HeroAttachment");this.mc=null;this.qa=this.va.bind(this);this.Iy=e;this.Jy=f;this.Zx=a;this.Hy=c;this.Jy&&b?(this.mc=b,b=Oo("play")===this.mc.getId(),this.o=new wB({Hb:this.mc,playerVars:Object.assign({},vB,{hl:qB!==void 0&&sB()?tB():this.mc.getLanguage(),autoplay:b?1:0,
cc_load_policy:this.Zx?1:0})}),this.watch(this.mc),FD(this)&&window.addEventListener("resize",this.qa)):this.Iy&&this.Hy&&(this.oa=Nf(this.Hy,1))}
u(ED,A);ED.prototype.onDetach=function(){this.mc&&ro(this,this.mc);FD(this)&&window.removeEventListener("resize",this.qa)};
ED.prototype.content=function(){var a=this;this.o?(this.ya=this.element("div","class","root",function(){a.ma=a.element("div","class",{"video-player-container":!0,"youtube-shorts-player":FD(a)},function(){a.o.render();a.o.load()})}),FD(this)&&this.va()):this.oa&&this.element("img","class","hero-image","src",this.oa,"alt","")};
function FD(a){var b;return((b=a.mc)==null?void 0:b.url.indexOf("/shorts/")===-1?0:1)===1}
ED.prototype.va=function(){if(this.ya&&this.ma){var a=this.ya.getBoundingClientRect().width;a=Math.min(800,Math.round(a/9*16));this.ma.style.height=a+"px";this.ma.style.width=a/16*9+"px"}};var Yya=[0,x,-1];function GD(a){this.Aa=se(a)}
u(GD,eh);GD.prototype.getTitle=function(){return Df(this,1)};
GD.prototype.setTitle=function(a){return ag(this,1,a)};
GD.prototype.Xb=function(){return Df(this,2)};
GD.prototype.Nc=function(a){return ag(this,2,a)};var Zya=[0,x,-1,ji,Yya];GD.prototype.Ba=wi(Zya);function HD(a){this.Aa=se(a)}
u(HD,eh);HD.prototype.Ba=wi([0,x,pi,x]);function tf(a){this.Aa=se(a)}
u(tf,eh);var ID=[0,x,-1,di,x,di];tf.prototype.Ba=wi(ID);function JD(a){this.Aa=se(a)}
u(JD,eh);JD.prototype.removeNode=function(a){return Xca(this,a)};
var $ya=yi(JD);JD.prototype.Ba=wi([0,ji,ID]);function KD(a){this.Aa=se(a)}
u(KD,eh);KD.prototype.getQuery=function(){return Nf(this,1)};
KD.prototype.setQuery=function(a){return ag(this,1,a)};KD.prototype.Ba=wi([0,x,pi,x]);function LD(a){this.Aa=se(a)}
u(LD,eh);LD.prototype.removeNode=function(a){return Xca(this,a)};
var aza=yi(LD);LD.prototype.Ba=wi([0,ji,ID]);function MD(a){var b=a.items;var c=a.messages;var e=a.Ok===void 0?void 0:a.Ok;var f=a.rc===void 0?1:a.rc;var h=a.tc===void 0?4:a.tc;var k=a.onClose;var l=a.maxWidth===void 0?"18.75rem":a.maxWidth;a=a.Nj===void 0?!1:a.Nj;A.call(this,"hcfe.SearchSelect.Menu");var p=this;this.qa=this.ma=!1;this.Ok=e;this.items=b;this.messages=c;this.Uv=-Infinity;this.Tv=Infinity;this.maxWidth=l;this.Nj=a;this.popup=new Ys({content:function(){bza(p)},
Ki:4,rc:f,tc:h,mq:!0,onClose:k})}
u(MD,A);n=MD.prototype;n.content=function(){this.popup.render()};
function bza(a){a.element("div","class",{root:!0,"root-loading":a.ma},function(){a.messages.kL&&a.element("div","class","menu-label",a.messages.kL);a.qa&&a.element("div","class","search-container",function(){a.element("div","class","input-container",function(){a.oa=a.element("input","class","search-field","placeholder",a.messages.sG,"oninput",function(){var b;(b=a.Ok)==null||b.call(a)},"disabled",a.ma);
a.oa.style.width="calc("+a.maxWidth+" - 3.25rem)"});
a.element("div","class","icon","onclick",function(){var b;(b=a.oa)==null||b.focus()},function(){a.va!=null||(a.va=new Co({icon:"gm/search"}));
a.va.render()})});
a.element("div","class","scroll-container","style",{minHeight:a.Uv>-Infinity?a.Uv+"px":null,maxHeight:a.Tv<Infinity?a.Tv+"px":null,"--message-container-width":a.maxWidth},function(){a.ma&&a.element("div","class","loading-spinner",function(){(new np({size:"mspin-small"})).render()});
if(a.items.length>0)switch(a.items[0].state){case 4:cza(a);break;case 3:dza(a);break;case 5:eza(a);break;default:a.Vm(a.items,0)}})})}
function dza(a){a.element("div","class","search-message-container",function(){a.element("div","class","search-inner search-error",function(){a.o!=null||(a.o=ND());a.o.render();a.element("div","data-error-message","true","tabindex","0",function(){a.element("div","class","search-message-heading",a.messages.nG);a.element("div",a.messages.oG)})})})}
function eza(a){a.element("div","class","search-message-container",function(){a.element("div","class","search-inner",function(){a.element("div","class","search-no-results-icon",function(){a.o!=null||(a.o=ND());a.o.render()});
a.element("div","data-error-message","true","tabindex","0",function(){a.element("div","class","search-message-heading",a.messages.pG);a.element("div",a.messages.qG)})})})}
function cza(a){a.element("div","class","search-message-container",function(){a.element("div","class","search-inner",function(){a.element("div","class","search-no-results-icon",function(){a.o!=null||(a.o=ND());a.o.render()});
a.element("div","data-error-message","true","tabindex","0",function(){a.element("div","class","search-message-heading",a.messages.cF);a.element("div",a.messages.rG)})})})}
function ND(){return new Co({icon:"gm/error_outline"})}
n.uh=function(a){this.ma=a;this.Ja()};
n.Vm=function(a,b){var c=this;a=w(a);for(var e=a.next(),f={};!e.done;f={Kf:void 0},e=a.next()){f.Kf=e.value;var h=(e=fza(f.Kf))?"true":f.Kf.Jh?"false":null,k=void 0;this.element("button","type","button","role","option","class",{item:!0,highlight:!0,alternatingRowColor:this.Nj,unclickable:f.Kf.qH},"disabled",f.Kf.disabled,"data-index",(k=f.Kf.index)!=null?k:"","aria-expanded",h,"onclick",function(l){return function(){l.Kf.qH||l.Kf.trigger()}}(f),"onkeydown",function(l){return function(p){l.Kf.qH||
p.key!=="Space"&&p.key!=="Enter"||l.Kf.trigger()}}(f),function(l){return function(){gza(c,l.Kf.icon);
c.element("span","class","item-label",function(){typeof l.Kf.value==="string"?mo(l.Kf.value):typeof l.Kf.value==="function"&&l.Kf.value()})}}(f));
e&&this.Vm(f.Kf.items,++b)}};
function gza(a,b){b&&a.element("div","class","icon",new Co({icon:b,size:24}))}
function hza(a){var b,c;return(c=(b=a.oa)==null?void 0:b.value)!=null?c:null}
n.open=function(a){var b=a.anchor;var c=a.Le;var e=a.xe;var f=a.Nb;var h=a.Uv;a=a.Tv;h===void 0&&(h=-Infinity);a===void 0&&(a=Infinity);h>a&&a!==Infinity&&(a=h);this.Uv=h;this.Tv=a;this.Ja();this.popup.open({anchor:b,Le:c,xe:e,Nb:f})};
n.close=function(){this.popup.close()};
function fza(a){return!!a.Vm&&Array.isArray(a.items)&&a.items.length>0}
;function iza(a,b,c,e){var f,h;return Ra(function(k){f=new HD;ag(f,1,a);ag(f,3,b);c&&cg(f,2,c);h=f.serialize();return k.return(new Promise(function(l,p){zm({endpoint:"cidgettree",params:jza(),httpMethod:"POST",requestBody:h,onLoadCallback:function(r){var t=null;try{t=$ya(r.responseText),l(lf(t,tf,1,Oe()).map(function(v){return kza(v,!0)}).filter(function(v){return e||!v.isMcc}))}catch(v){p(v)}},
qd:function(){p()}})}))})}
function lza(a,b,c){var e,f;return Ra(function(h){e=new KD;e.setQuery(a);ag(e,3,b);c&&cg(e,2,c);f=e.serialize();return h.return(new Promise(function(k,l){zm({endpoint:"cidsearch",params:jza(),httpMethod:"POST",requestBody:f,onLoadCallback:function(p){var r=null;try{r=aza(p.responseText),k(lf(r,tf,1,Oe()).map(function(t){return kza(t,!1)}))}catch(t){l(t)}},
qd:function(){l()}})}))})}
function kza(a,b){return{Ed:Nf(a,1)||"",iR:Nf(a,4)||"",accountName:Nf(a,2)||"",isMcc:b?!!Qf(a,3):!1,state:0,isEligible:!!Qf(a,5)}}
function jza(){return{v:1,origin_page_type:z().pt}}
;function OD(a){var b=a.items;var c=a.Wv;var e=a.mz;var f=a.fA;var h=a.Ok;var k=a.selectedIndex===void 0?-1:a.selectedIndex;var l=a.ariaRequired===void 0?!1:a.ariaRequired;var p=a.maxWidth===void 0?"18.75rem":a.maxWidth;a=a.Nj===void 0?!1:a.Nj;A.call(this,"hcfe.SearchSelect.Select");var r=this;this.ma=this.focused=this.active=!1;this.oa=new Co({icon:"gm/arrow_drop_down",size:24,Bb:!0});this.selection=k>=0&&k<b.length?b[k].value:void 0;this.Wv=c;this.mz=e;this.fA=f;this.Ok=h;this.menu=mza(this,b);this.itemCount=
b.length;this.ariaRequired=l;this.maxWidth=p;this.Nj=a;this.o=new cu({zc:!0,filled:!1,Cj:function(){return!!r.selection}})}
u(OD,A);n=OD.prototype;
n.content=function(){var a=this,b=this.selection?this.selection:this.Wv.placeholder;this.container=this.element("div","class","container","tabindex",0,"aria-haspopup","true","role","listbox","aria-label",this.selection?this.qa:this.Wv.Nt,"aria-expanded",this.active?"true":"false","style",{"max-width":this.maxWidth},"onclick",function(){a.Ob()},"onkeydown",function(c){if(c.key==="Enter"||c.key==="Space"||c.key===" ")c.preventDefault(),a.open({Nb:!0})},"onfocus",function(){a.focused=!0;
a.active||a.Ja()},"onblur",function(){a.focused=!1;
a.active||a.Ja()},"aria-required",this.ariaRequired,function(){a.element("div","class","icon-container",function(){a.fA.render()});
a.element("div","class","content","style",{"max-width":"calc("+a.maxWidth+" - 5.75rem)"},b);a.element("div","class",{"icon-container":!0,arrow:!0,active:a.active},a.oa);a.o.render();a.focused||a.active?a.o.focus():a.o.blur()});
this.menu.render()};
function nza(a){a.ma=!0;a.menu.qa=!0}
n.uh=function(a){this.menu.uh(a);this.Ja()};
n.Ob=function(){this.open({Nb:!0})};
n.Hj=function(a){this.menu=mza(this,a);this.itemCount=a.length;this.menu.qa=this.ma;this.Ja()};
function mza(a,b){var c=oza(a,b);a.itemCount=b.length;return new MD({items:c,messages:a.mz,Ok:a.Ok,maxWidth:a.maxWidth,Nj:a.Nj,onClose:function(){a.active=!1;a.Ja();a.container&&a.container.focus()}})}
function oza(a,b){return b.map(function(c){var e=Object.assign({},c,{trigger:function(){if(c.selectable){a.selection=c.Ve?c.Ve:c.value;var f;a.qa=(f=c.ariaLabel)!=null?f:void 0;c.trigger&&c.trigger()}}});
Array.isArray(e.items)&&(e.items=oza(a,e.items));return e})}
n.open=function(a){a=a.Nb;if(this.container){this.active=!0;this.Ja();var b=this.menu,c=b.open,e=this.container,f,h,k=(f=this.getElement())==null?void 0:(h=f.firstElementChild)==null?void 0:h.getBoundingClientRect().height;f=k===null||k===void 0?-Infinity:this.itemCount>1?k*2:k;var l,p;h=(l=this.getElement())==null?void 0:(p=l.firstElementChild)==null?void 0:p.getBoundingClientRect().height;c.call(b,{anchor:e,Nb:a,Uv:f,Tv:h===null||h===void 0?Infinity:Math.min(window.innerHeight-h-175,250)})}};
n.close=function(){this.menu.close()};var PD=/[^0-9]/g,pza=ut()?200:264,qza={sG:"Search for accounts",cF:"No accounts found",nG:"Something went wrong",oG:"Can\u2019t find accounts. Try searching again.",pG:"Type at least 3 characters to get results",qG:"Search for account name or number",rG:"Try searching for a different name or number"},rza={sG:"Search for accounts",cF:"No accounts found",nG:"Something went wrong",oG:"Can\u2019t find accounts. Try searching again.",pG:"Type at least 3 characters to get results",qG:"Search for account name or number",
rG:"Try searching for a different name or number",kL:"EXPAND THE MANAGER ACCOUNT TO VIEW ANY ELIGIBLE SUB-ACCOUNTS"};
function QD(a){var b=a===void 0?{}:a;a=b.wR===void 0?void 0:b.wR;var c=b.search===void 0?void 0:b.search;var e=b.defaultValue===void 0?void 0:b.defaultValue;var f=b.ariaRequired===void 0?!1:b.ariaRequired;var h=b.eD===void 0?"Google Ads Customer ID":b.eD;var k=b.frdId===void 0?void 0:b.frdId;var l=b.pageId===void 0?"":b.pageId;var p=b.NK===void 0?!1:b.NK;var r=b.Nt===void 0?void 0:b.Nt;var t=b.Rp===void 0?void 0:b.Rp;b=b.QK===void 0?!0:b.QK;A.call(this,"sc.shared.CidSelector");var v=this;this.qa=
t;this.Kp=b;this.Ic=f;this.Ip=h;this.Pd=k;var y;this.Ha=p&&((y=z().show_eligibility_chip_in_cid_selector)!=null?y:!1);var E,oa;this.ma=((oa=(E=z())==null?void 0:E.enable_wide_cid_selector)!=null?oa:!1)||this.Ha;this.Rg=l;if(e){if(this.mb=e,a||c)throw Error("Cannot set defaultValue when fetchTree or search is set");}else this.ad=a||iza,this.xl=c||lza;this.oa=new Map;this.Pa=new Map;sza(this);this.va=null;this.La=this.Va=0;this.Ca=null;this.Ma=new Set;this.Ah=new Co({icon:"gm/arrow_drop_down"});this.wl=
new Co({icon:"gm/check"});this.Fr=Vr(function(){tza(v)},1E3);
this.Od=r;this.o=new OD({items:[],Wv:{placeholder:"Google Ads account",Nt:this.Od},maxWidth:this.ma?"var(--wide-cid-selector-width)":void 0,mz:this.Ha?rza:qza,fA:new Co({icon:"gm/account_circle"}),Ok:this.Fr,ariaRequired:this.Ic,Nj:this.ma&&ut()});this.xc=null;this.ub=!1;this.Db=this.Qb=this.Ra=this.Ia=null;this.Fa=!0;this.Sa=new Promise(function(ra,Aa){v.Qb=ra;v.Db=Aa});
this.ya="";this.mb&&(uza(this),this.ya=this.mb.replace(PD,""));this.lr=Vr(function(){v.Ia&&v.Ia()},300)}
u(QD,A);QD.prototype.content=function(){var a=this;if(!this.ub)if(this.Ra&&(this.Ra.remove(),this.Ra=null),this.va!==null){this.element("div","class",{root:!0,wide:this.ma},this.va);this.va.setText(this.ya);this.Fa&&RD(this);var b;(b=this.va.getElement())==null||b.setAttribute("data-help-center-field-element-id","fallback-textfield")}else this.xc?this.element("div","class",{root:!0,wide:this.ma},"onkeydown",function(c){c.key==="Enter"&&c.preventDefault()},function(){a.o.render();
a.o.Hj(a.xc);a.element("div","class","legal-label","Only you can see this info")}):(SD(this),this.Ra=this.element("div","class","loading-spinner",function(){(new np({size:"mspin-small"})).render()}))};
function RD(a){if(a.Qb){var b;if(a.La===1&&a.Va===0&&!a.mb&&a.oa.get((b=a.qa)!=null?b:"")[0].Ed!==void 0){var c;a.ya=a.oa.get((c=a.qa)!=null?c:"")[0].Ed.replace(PD,"");var e;a.Ca=a.oa.get((e=a.qa)!=null?e:"")[0]}b={dN:a.ya,cidCount:a.La,Ppa:a.Va};a.Fa&&(a.Fa=!1,a.Qb(b))}}
function SD(a){return Ra(function(b){if(b.o==1){if(!a.ad)return RD(a),b.return();a.ub=!0;return b.yield(TD(a),2)}a.xc=b.ma;a.ub=!1;RD(a);a.Ja();Ia(b)})}
function TD(a,b){b=b===void 0?!1:b;var c,e,f,h,k;return Ra(function(l){if(l.o==1)return c=vza(),f={Ed:(e=a.qa)!=null?e:""},a.oa.has((h=a.qa)!=null?h:"")?l.Qa(2):l.yield(wza(a,(k=a.qa)!=null?k:""),2);xza(a,f,c,0,b,0);return l.return(c.items)})}
function xza(a,b,c,e,f,h){var k=f?a.Pa:a.oa;if(!k.has(b.Ed))return e;b=w(k.get(b.Ed));for(var l=b.next(),p={};!l.done;p={Gf:void 0,sC:void 0},l=b.next()){p.Gf=l.value;p.sC=e++;p.Gf.isMcc?(a.Va++,nza(a.o)):a.La++;l=p.Gf.Ed!=="";var r=p.Gf.accountName,t="";r===void 0||r.trim()===""?(r="Google Ads account",t=a.Od):t=r+" "+p.Gf.Ed;r={value:function(v){return function(){return yza(a,v.Gf,h,v.sC)}}(p),
Ve:function(v){return function(){return zza(a,v.Gf)}}(p),
index:p.sC,trigger:Aza(a,p.Gf),items:[],selectable:l,Vm:a.Ma.has(p.Gf.Ed),Jh:p.Gf.isMcc,state:p.Gf.state,ariaLabel:t,disabled:a.Ha&&!p.Gf.isMcc&&!p.Gf.isEligible,qH:a.Ha&&p.Gf.isMcc};c.items.push(r);k.has(p.Gf.Ed)&&l&&(e=xza(a,p.Gf,r,e,f,h+1))}return e}
function yza(a,b,c,e){var f=b.state===0,h=a.ma?pza:104,k=a.ma?58:5,l=f?h-c*k+"px":"100%",p=b===a.Ca;return a.element("div","class",{container:!0,"container-menu":!0,wide:a.ma},"aria-selected",p?"true":"false",function(){var r=a.element("div","class","icon-container column check",function(){p&&a.wl.render()});
p&&r.setAttribute("aria-label","Account selected");r.setAttribute("role","img");var t=a.Ha&&!b.isMcc&&!b.isEligible;a.element("div","class","account-info",function(){a.element("div","class",{center:!0,column:!0,"full-width-column":!f,wide:a.ma},function(){Bza(a,0,c,b.accountName);if(f){var y=b.accountName;y.trim()===""&&(y="Google Ads account");var E=a.element("div","class",{account:!0,text:!0,wide:a.ma,"show-eligibility-chip":a.Ha,disabled:t},y);a.ma||(E.style.maxWidth=l);(new at({text:y,al:4,trigger:E})).render()}else a.element("div",
"class",{account:!0,text:!0,wide:a.ma},function(){Cza(a)}).style.width=a.ma?"19rem":l});
f&&(a.element("div","class",{value:!0,text:!0,disabled:t},b.Ed),a.ma&&a.Ha&&a.element("div","class","eligible-chip-container",function(){a.element("div","class","eligible-chip",function(){b.isEligible&&(new fu({disabled:!0,size:"mspin-small",selected:!0,style:1,text:"Eligible",Ws:"^scSharedCidselectoreligible-text"})).render()})}))});
r=a.Ma.has(b.Ed);var v=a.element("div","class",{"icon-container":!0,column:!0,active:r,"icon-present":b.isMcc,"expand-icon":!0},"role","button","aria-expanded",r?"true":"false","onclick",function(y){Dza(a,y,b,e)},"onkeydown",function(y){Dza(a,y,b,e)},function(){b.isMcc&&a.element("div",a.Ah)});
b.isMcc&&(v.tabIndex=0,v.setAttribute("aria-label",r?"Collapse account":"Expand account"))})}
function Cza(a){var b=new Co({icon:"gm/error_outline",size:20});a.element("div","class","expansion-error-container",function(){b.render();a.element("div","class","expansion-error-text","Can\u2019t find accounts. Please try again.")})}
function Dza(a,b,c,e){"key"in b&&b.key!==" "&&b.key!=="Enter"||(b.preventDefault(),b.stopPropagation(),c.isMcc&&Eza(a,c,e))}
function Bza(a,b,c,e){b!=c&&(a.element("div","class","account-track"),Bza(a,++b,c,e))}
function Eza(a,b,c){var e,f,h;Ra(function(k){if(k.o==1){(e=a.Ma.has(b.Ed))?a.Ma.delete(b.Ed):a.Ma.add(b.Ed);f=a.oa.has(b.Ed);!e&&f&&(h=a.oa.get(b.Ed),h.length===1&&h[0].state!==0&&(a.oa.delete(b.Ed),f=!1));if(e||f)return k.Qa(2);a.o.uh(!0);a.Ja();a.o.open({Nb:!0});return k.yield(wza(a,b.Ed),3)}k.o!=2&&a.o.uh(!1);Fza(a,c);Ia(k)})}
function Fza(a,b){var c,e,f;Ra(function(h){if(h.o==1)return c=a.o,e=c.Hj,h.yield(TD(a),2);e.call(c,h.ma);a.o.Ja();a.o.open({Nb:!0});(f=a.getElement().querySelector('button[data-index="'+b+'"]'))&&f.focus();Ia(h)})}
function zza(a,b){return a.element("div","class",{container:!0,"container-selected":!0,wide:a.ma},function(){a.element("div","class",{account:!0,text:!0,wide:a.ma},b.accountName);a.element("div","class","value text","style",{"padding-right":"8px"},b.Ed)})}
function tza(a){var b,c,e,f,h,k,l,p,r;Ra(function(t){switch(t.o){case 1:b=hza(a.o.menu);b=b===null?"":b.trim();if(b!==""){t.Qa(2);break}sza(a);c=a.o;e=c.Hj;return t.yield(TD(a,!1),3);case 3:return e.call(c,t.ma),a.o.Ja(),a.o.open({Nb:!0}),t.return();case 2:f=[];if(b.length<3){f=[{state:5}];a.Pa.set((h=a.qa)!=null?h:"",f);t.Qa(4);break}a.o.uh(!0);a.o.open({Nb:!0});Ja(t,5);return t.yield(a.xl(b.trim(),a.Rg,a.Pd),7);case 7:f=t.ma;f.length===0&&(f=[{state:4}]);a.o.uh(!1);Ka(t,4);break;case 5:k=La(t),
f=[{state:3}],a.o.uh(!1),a.o.open({Nb:!0}),Gza(k);case 4:return a.Pa.set((l=a.qa)!=null?l:"",f),p=a.o,r=p.Hj,t.yield(TD(a,!0),8);case 8:r.call(p,t.ma),a.o.Ja(),a.o.open({Nb:!0}),Ia(t)}})}
function Aza(a,b){return function(){a.Ca=b;a.o.close();a.Ia&&a.Ia()}}
QD.prototype.getValues=function(){for(var a=[],b=w(this.oa.keys()),c=b.next();!c.done;c=b.next()){(c=c.value)&&!a.includes(c)&&a.push(c);c=w(this.oa.get(c));for(var e=c.next();!e.done;e=c.next())(e=e.value.Ed)&&!a.includes(e)&&a.push(e)}return a};
function wza(a,b){var c,e;return Ra(function(f){if(f.o==1)return Ja(f,2),f.yield(a.ad(b,a.Rg,a.Pd,a.Kp),4);if(f.o!=2){c=f.ma;if(!c||c.length==0)return Hza(a,b,Error("No results")),f.return();a.oa.set(b,c);return Ka(f,0)}e=La(f);Hza(a,b,e);Ia(f)})}
function Hza(a,b,c){a.oa.set(b,[{state:2}]);a.Db&&a.Fa&&(a.Fa=!1,a.Db(c),a.qa||uza(a));Gza(c)}
function uza(a){a.va=new lu({placeholder:a.Ip,zc:!0,Bc:function(){a.ya=a.va.getText().replace(PD,"");a.lr()},
ariaRequired:a.Ic})}
function Gza(a){a=new CustomEvent("cid_selector_fetch_error",{detail:a});eo().dispatchEvent(a)}
function sza(a){a.Pa.clear();var b;a.Pa.set((b=a.qa)!=null?b:"",[vza()])}
function vza(){return{value:"",trigger:function(){},
items:[],state:0}}
;function UD(a){var b=a.items;var c=a.label===void 0?void 0:a.label;var e=a.placeholder===void 0?"":a.placeholder;var f=a.Qe===void 0?!0:a.Qe;var h=a.filled===void 0?!1:a.filled;var k=a.disabled===void 0?!1:a.disabled;var l=a.maxHeight===void 0?void 0:a.maxHeight;var p=a.minWidth===void 0?void 0:a.minWidth;var r=a.selectedIndex===void 0?-1:a.selectedIndex;var t=a.autoClose===void 0?!0:a.autoClose;var v=a.zc===void 0?!1:a.zc;var y=a.ariaRequired===void 0?!1:a.ariaRequired;var E=a.Uc===void 0?["self"]:
a.Uc;var oa=a.Gc===void 0?"rem":a.Gc;var ra=a.qF===void 0?function(){}:a.qF;
var Aa=a.ei===void 0?!1:a.ei;var Ba=a.nu===void 0?"":a.nu;var Ha=a.Ir===void 0?void 0:a.Ir;a=a.gt===void 0?void 0:a.gt;A.call(this,"sc.shared.MaterialSelect");var Na=this;this.Fa=function(){return void Iza(Na)};
this.Ha=function(){return void Iza(Na)};
this.active=!1;this.ma="";this.qa=!0;this.Ca=function(Va){Va.code==="Escape"&&(Va.stopPropagation(),Na.close())};
this.items=b;this.autoClose=t;this.label=c;this.labelId=so();this.Pn=so();this.minWidth=p;this.filled=h;this.disabled=k;this.zc=v;this.Gc=oa;this.Ia=new Co({icon:"gm/arrow_drop_down",size:24,Bb:!0,Gc:this.Gc});Jza(this,r);this.maxHeight=l;this.Ir=Ha;this.va=new cu({label:e,dk:f,Jr:48,disabled:k,filled:h,Cj:function(){return Na.Cj()},
zc:v});this.ariaRequired=y;this.Uc=E;this.qF=ra;this.ei=Aa&&!k;this.nu=Ba;this.gt=a;this.ei&&(this.o=new lu({Ff:!1,Yu:!1,onFocus:function(){var Va;(Va=Na.o)==null||Va.setPlaceholder(Na.nu);Na.open({Nb:!1})},
Bc:function(){var Va;Na.ma=((Va=Na.o)==null?void 0:Va.getText())||"";Na.open({Nb:!1})},
Dz:function(){Na.open({Nb:!0})}}));
this.menu=Kza(this,b)}
u(UD,A);n=UD.prototype;
n.content=function(){var a=this;this.label&&this.element("div","class","label","id",this.labelId,this.label);this.root=this.element("div","class",{container:!0,"container-with-filtering":this.ei},"style",{"min-width":this.minWidth?this.minWidth:null},function(){a.oa=a.element("div","class",{root:!0,dense:a.zc,disabled:a.disabled,active:a.active},"id",a.Pn,"tabindex",0,"aria-haspopup","listbox","aria-labelledby",Lza(a),"role","button","aria-expanded",a.menu.Eb().toString(),"onclick",function(){return void a.Ob()},
"onkeydown",function(c){a.disabled||c.code!=="Enter"&&c.code!=="Space"||(c.preventDefault(),a.open({Nb:!a.ei}))},"aria-required",a.ariaRequired,"data-filter-enabled",a.o?"true":void 0,function(){a.o&&(a.o.setText(a.ma),a.element("div","class",{"filter-input":!0,
selection:!0},a.o));a.va.render();a.o||a.element("div","class",{"filled-content":a.filled,"filled-selection":a.filled&&a.selection,selection:!0},a.displayText);a.element("div","class",{"filled-content":a.filled,"filled-selection":a.filled&&a.selection,arrow:!0},a.Ia)});
a.oa.addEventListener("focusin",a.Fa);a.oa.addEventListener("focusout",a.Ha)});
if(this.qa)this.menu.render(),this.ya=void 0;else{var b;((b=this.o)==null?0:b.focused)&&this.gt&&(this.ya=this.element("label","class","warning-label",this.gt))}};
n.onDetach=function(){var a;(a=this.oa)==null||a.removeEventListener("focusin",this.Fa);var b;(b=this.oa)==null||b.removeEventListener("focusout",this.Ha)};
function Mza(a,b){a.menu=Kza(a,b);a.Ja()}
n.open=function(a){var b=this;a=(a===void 0?{}:a).Nb;Mza(this,this.ma?this.items.filter(function(f){return typeof f.value==="string"?f.value.toLowerCase().includes(b.ma.toLowerCase()):typeof f.Ve==="string"?f.Ve.toLowerCase().includes(b.ma.toLowerCase()):!1}):this.items);
this.active=!0;this.o&&!a?this.o.focus():VD(this);if(this.root){var c=this.root.getBoundingClientRect().width;this.menu.setWidth(c)}this.qa&&this.menu.open({anchor:this,Nb:a});var e;(e=this.getElement())==null||e.addEventListener("keydown",this.Ca);this.Ja()};
n.close=function(){this.menu.close();var a;(a=this.getElement())==null||a.removeEventListener("keydown",this.Ca)};
function WD(a){switch(typeof a.selection){case "function":var b;return(b=a.selection().textContent)!=null?b:"";case "string":return a.selection;default:return""}}
function VD(a){var b;(b=a.oa)==null||b.focus()}
function Iza(a){setTimeout(function(){var b=to(),c,e;((c=a.oa)==null?0:c.contains(b))||((e=a.menu.getElement())==null?0:e.contains(b))?a.va.focus():(a.va.blur(),a.o&&(a.close(),a.ma=WD(a),a.o.setText(a.ma),a.o.setPlaceholder(""),a.ya&&a.ya.remove()))},0)}
function Lza(a){return a.Uc.map(function(b){return b==="self"?a.label?a.labelId+" "+a.Pn:a.Pn:b}).join(" ")}
n.Cj=function(){return!!this.selection};
n.Ob=function(){this.disabled||this.open({Nb:!1})};
function Kza(a,b){a.qa=!a.ei||!a.Ir||b.length<=a.Ir;if(!a.qa)return new ct({items:[]});b=Nza(a,b);return new ct({items:b,Fs:a.selection,Ki:4,rc:1,tc:4,onClose:function(){VD(a);a.active=!1;a.Ja()},
maxHeight:a.ei?"40vh":a.maxHeight,wz:a.filled,Dt:!1})}
function Nza(a,b){return b.map(function(c){var e=Object.assign({},c,{trigger:function(){a.selection=c.Ve?c.Ve:c.value;a.displayText=Oza(c);typeof a.selection==="string"&&a.qF(a.selection);c.trigger&&c.trigger();a.ei&&(a.ma=WD(a),a.close());a.autoClose&&a.close()}});
e.items&&Array.isArray(e.items)&&(e.items=Nza(a,e.items));return e})}
function Jza(a,b){a.selection=null;a.displayText=void 0;if(b>=0&&b<a.items.length){var c;a.selection=(c=a.items[b].Ve)!=null?c:a.items[b].value;a.displayText=Oza(a.items[b])}}
function Oza(a){var b;return(b=a.pV)!=null?b:a.value}
;function Pza(a,b,c){b=b===void 0?"":b;c=c===void 0?"":c;var e,f;return Ra(function(h){if(!b||!c)return h.return(Promise.resolve([]));e=Qza(c);f=new gw({experienceType:4,issueType:0,customerContext:Sk(z().customer_context),article:new Lk,Jo:!0,externalCid:a,Ts:b,requestSource:z().pt===33?1:void 0});return h.return(iw(f).then(function(){var k=[],l,p=((l=f)==null?void 0:l.genieData)||[];if(!p)return k;l=w(p);for(p=l.next();!p.done;p=l.next())if(p=p.value,Ee(p,qq,4)&&e.has(String(Ef(p,7)))){var r=rq(Dq(p))[0],
t=void 0,v=void 0;k.push({intent_id:r.getId(),intent_title:((t=jf(p,xq,1))==null?void 0:t.getTitle())||"",intent_description:((v=jf(p,sq,2))==null?void 0:v.getDescription())||"",symptom_id:e.get(String(Ef(p,7)))||""})}return k}))})}
function Qza(a){return new Map(a.split(",").map(function(b){return b.split(":")}).filter(function(b){return b.length===2&&!!b[0]&&!!b[1]}).map(function(b){return[b[0],
b[1]]}))}
hb("sc.discovery.genie.getGenieIntents",Pza);function XD(a,b){var c=window.sc_sjLog;c?c(a,b):b==null||b()}
;function YD(a,b){xo.call(this);this.Mt=a;this.Ca=b;this.dependencies=[]}
u(YD,xo);n=YD.prototype;n.isPending=function(){return!this.nc()};
n.Oh=la(56);n.Hg=la(57);n.onChange=function(a,b,c){if(typeof a==="function"){var e="Notifying "+(b!=null?b:"<unknown>");xo.prototype.onChange.call(this,function(){XD(e,a)})}else{var f="Notifying "+(c!=null?c:"<unknown>");
xo.prototype.onChange.call(this,a,function(){XD(f,b)})}};
n.Da=function(a){var b=this,c;XD(this.Mt+" sent "+((c=this.Ca[a])!=null?c:"UNKNOWN"),function(){return void xo.prototype.Da.call(b,a)})};var Rza=new Map([[5,"CHECKBOX"],[3,"CID_SELECTOR"],[4,"GMB_LISTING_SELECTOR"],[1,"HIDDEN"],[7,"SELECT_TABLE"],[2,"SELECT"],[8,"INPUT_TEXT"],[6,"SELECT_WITH_FILTERING"],[9,"SELECT_TABLE_WITH_FILTERING"]]);function Sza(a,b){var c=a.xu(),e=b.xu();if(c&&e)return Tza(c,e);c=a.Du();e=b.Du();if(c&&e)return c.nt()!==e.nt()?!1:!c.Cy()&&!c.jK()||!e.Cy()&&!e.jK()?!0:c.MJ()!==e.MJ()||c.iy()!==e.iy()?!1:!0;a=a.Eu();b=b.Eu();return a&&b?a.o()!==b.o()?!1:!0:!1}
function Tza(a,b){a=a.o();if(!a)return!1;var c=b.o();return c?a.some(function(e){return c.some(function(f){return e.qt()!==f.qt()?!1:!e.Hw()&&!e.lK()||!f.Hw()&&!f.lK()?!0:e.cI()!==f.cI()||e.py()!==f.py()?!1:!0})}):!1}
;var Uza=za(["https://www.google.com/recaptcha/api.js?trustedtypes=true&render=explicit&onload=",""]);function ZD(a,b,c){this.o=c;this.clientId=0;this.load(a,b===void 0?function(){}:b)}
ZD.prototype.load=function(a,b){var c=this;window.sc_renderRecaptcha=function(){window.grecaptcha&&a&&(c.clientId=window.grecaptcha.render(a,{sitekey:"6LcN-4saAAAAAGOz10SCh-KHThAjGiUum6B9HVft",badge:"inline",size:"invisible"}),b())};
var e=document.createElement("script");Kl(e,fm(Uza,"sc_renderRecaptcha"));document.head.appendChild(e)};
ZD.prototype.getResponse=function(){var a=this,b,c;return Ra(function(e){switch(e.o){case 1:if(!window.grecaptcha)return e.return("");b=window.grecaptcha;Ja(e,2);return e.yield(new Promise(function(f){b.ready(f)}),4);
case 4:return e.yield(b.execute(a.clientId,{action:a.o||"submit"}),5);case 5:return c=e.ma,e.return(c||"");case 2:return La(e),e.return("")}})};var $D={};var Vza={JX:0,NH:1,0:"FIELDS_CREATED",1:"FIELD_VALUES"};function aE(a){YD.call(this,a===void 0?"HelpcenterFields":a,Vza);this.complete=!1;this.Sd=""}
u(aE,YD);aE.prototype.nc=function(){return this.complete};
aE.prototype.Jc=function(a,b){function c(t){return a?!!t.getId():t.nc()}
function e(t){return t.kK()?t.XR():t.kd()}
var f=Wza(this,b);if(f==null||!f.length)return[];var h;b=(h=f.filter(function(t){return t.placements.some(function(v){return v.uS()})}).flatMap(e).filter(c))!=null?h:[];
var k;b=b.concat((k=f.filter(function(t){return t.placements.some(function(v){return v.FS()})}).flatMap(e).filter(c))!=null?k:[]);
var l;b=b.concat((l=f==null?void 0:f.filter(function(t){return t.placements.some(function(v){return v.HS()})}).flatMap(e).filter(c))!=null?l:[]);
h=new Map;b=w(b);for(k=b.next();!k.done;k=b.next())if(k=k.value,f=void 0,l=(f=k.getId())!=null?f:0,h.has(l)){var p=void 0,r=void 0;f=(r=(p=h.get(l))==null?void 0:p.getPriority())!=null?r:0;p=void 0;r=(p=k.getPriority())!=null?p:0;f>r&&h.set(l,k)}else f=l=void 0,h.set((f=(l=k)==null?void 0:l.getId())!=null?f:0,k);return Array.from(h.values())};
function Wza(a,b){var c;return(c=a.o)==null?void 0:c.filter(function(e){if(!e.isValid())return!1;var f=e.placements;return f.length?b!=null&&b.length?b.some(function(h){return f.some(function(k){return Sza(h,k)})}):!0:!1})}
aE.prototype.Fu=la(59);aE.prototype.getInjectedFrdValuesEventId=function(){return this.Sd};var Xza=new Map([["CT_ANSWER","gm/drive_document"],["CT_FORUM_CONTENT","gm/question_answer"],["CT_SUPPORT_FORUM_THREAD","gm/question_answer"],["CT_YOUTUBE","gm/video_youtube"],["CT_COMMUNITY_VIDEO","gm/play_circle_outline"],["CT_VIDEO","gm/play_circle_outline"],[void 0,"gm/language"]]);function bE(a){var b;return(b=Xza.get(a.type))!=null?b:"gm/drive_document"}
function cE(a,b){var c=bE(a);return a.type==="CT_WORKFLOW"?new vt({icon:0}):new Co({icon:c,size:b})}
function Yza(a){switch(a){case "ROLE_USER":return 0;case "ROLE_PRODUCT_EXPERT_LEVEL_1":return 1;case "ROLE_PRODUCT_EXPERT_LEVEL_2":return 2;case "ROLE_PRODUCT_EXPERT_LEVEL_3":return 3;case "ROLE_PRODUCT_EXPERT_LEVEL_4":return 4;case "ROLE_PRODUCT_EXPERT_LEVEL_5":return 5;case "ROLE_COMMUNITY_MANAGER":return 10;case "ROLE_COMMUNITY_SPECIALIST":return 20;case "ROLE_GOOGLE_EMPLOYEE":return 100;case "ROLE_ALUMNUS":return 30;default:return 0}}
function dE(a){return(new tk).setUrl(a.url)}
;function Zza(a,b,c){a=w(a.querySelectorAll("a"));for(var e=a.next();!e.done;e=a.next())if(e=e.value,e.hasAttribute("target")||b){var f=void 0,h=(f=e.getAttribute("aria-label"))!=null?f:"";h.includes(c)||e.setAttribute("aria-label",h+(" ("+c+")"));e.getAttribute("target")||e.setAttribute("target","_blank")}}
;function eE(a,b,c,e,f,h,k){A.call(this,"SmartJourney.Onebox");this.Na=a;this.oneboxResult=b;this.openInNewWindow=c;this.ma=e;this.oa=f;this.va=h;this.Ob=k;this.qa=new Co({icon:"gm/open_in_new"});this.ya=new Co({icon:"gm/open_in_new",size:18});if(LC(this.oneboxResult.type)){a=new wk;a=ag(a,5,b.id);a=xk(a.setTitle(b.title).setUrl(b.url),b.snippet);a:switch(b.type){case "CT_COMMUNITY_VIDEO":c=102;break a;case "CT_VIDEO":c=103;break a;default:c=1}a=cg(a,4,c);a=zk(yk(a,b.tracking_id),b.request_id);b.tailwind_data&&
(c=b.tailwind_data,e=new sk,c=cg(e,9,Yza(c.user_role)),nf(a,sk,26,c));b.youtube_data&&(c=b.youtube_data,b=new vk,b=$f(b,1,c.views),b=ag(b,2,c.thumbnail),b=Yf(b,3,c.duration).setTimestamp(c.timestamp),b=ag(b,5,c.youtube_id),b=Wf(b,6,c.is_verified),b=ag(b,7,c.channel_title),c.thumbnails&&(e=c.thumbnails,c=new uk,e.default_thumbnail&&(f=dE(e.default_thumbnail),nf(c,tk,1,f)),e.medium_thumbnail&&(f=dE(e.medium_thumbnail),nf(c,tk,2,f)),e.high_thumbnail&&(f=dE(e.high_thumbnail),nf(c,tk,3,f)),e.standard_thumbnail&&
(f=dE(e.standard_thumbnail),nf(c,tk,4,f)),e.maxres_thumbnail&&(e=dE(e.maxres_thumbnail),nf(c,tk,5,e)),nf(b,uk,8,c)),nf(a,vk,28,b));this.o=new pC(a)}}
u(eE,A);eE.prototype.content=function(){var a=this;this.element("div","class",{result:!0,separator:this.va},function(){var b=a.oneboxResult,c;(c=jt)==null||c.Dn([{type:a.ma,id:a.oneboxResult.id}]);b.type!=="CT_SNIPPET"&&$za(a);aAa(a);if(!a.o&&(bAa(a),b.type!=="CT_SNIPPET"))switch(a.oneboxResult.type){case "CT_WORKFLOW":$D.useHairlineButtonInWorkflowOnebox?cAa(a,a.Na.get("Onebox.GET_STARTED")):dAa(a,a.Na.get("Onebox.GET_STARTED"));break;default:dAa(a,a.Na.get("Onebox.READ_MORE"))}})};
function $za(a){a.element("div","class","content-header",function(){var b=bE(a.oneboxResult),c=cE(a.oneboxResult,16);a.element("span","class",{"content-icon":!0,"help-article":b==="gm/drive_document",language:b==="gm/language","question-answer":b==="gm/question_answer",youtube:b==="gm/video_youtube",video:b==="gm/play_circle_outline"},"aria-hidden","true",c);if(a.o)b=uC(a.o,null);else switch(b=a.Na.get("Onebox.HELP_ARTICLE"),a.oneboxResult.type){case "CT_WORKFLOW":b=a.Na.get("Onebox.TROUBLESHOOTER")}a.element("span",
"class","content-label",b)})}
function aAa(a){var b=a.oneboxResult.title;a.openInNewWindow&&(b+=" ("+a.Na.get("Onebox.OPENS_IN_A_NEW_WINDOW")+")");LC(a.oneboxResult.type)&&(b+=" ("+MC(a.oneboxResult.type)+")");var c,e;a.element("a","class","title","href",(e=(c=a.o)==null?void 0:qC(c))!=null?e:a.oneboxResult.url,"target","_blank","data-stats-ve",a.ma,"data-stats-action",8,"data-stats-id",a.oneboxResult.id,"aria-label",b,"onclick",a.Ob,function(){a.o?((new KC({model:a.o,Xf:!0,bz:!0})).render(),NC(a.o.getUrl())):a.element("div",
"class","title-wrapper","aria-hidden","true",function(){var f;a.element("span",vs((f=a.oneboxResult.title)!=null?f:""));a.openInNewWindow&&a.element("span","class","title-icon",a.ya)})})}
function bAa(a){var b=a.element("div","class","snippet",function(){var c;mo(vs((c=a.oneboxResult.snippet)!=null?c:""))});
Zza(b,a.openInNewWindow,a.Na.get("Onebox.OPENS_IN_A_NEW_WINDOW"))}
function dAa(a,b){var c=b;a.openInNewWindow&&(c+=" ("+a.Na.get("Onebox.OPENS_IN_A_NEW_WINDOW")+")");a.element("a","class","action-link","href",a.oneboxResult.url,"target",a.openInNewWindow?"_blank":"","data-stats-ve",a.oa,"data-stats-action",8,"data-stats-id",a.oneboxResult.id,"aria-label",c,"onclick",a.Ob,function(){a.element("span",b);a.openInNewWindow&&a.qa.render()})}
function cAa(a,b){var c=b;a.openInNewWindow&&(c+=" ("+a.Na.get("Onebox.OPENS_IN_A_NEW_WINDOW")+")");a.element("div","class","workflow-action-link","data-stats-ve",a.oa,"data-stats-action",8,"data-stats-id",a.oneboxResult.id,"onclick",a.Ob,new Go({ariaLabel:c,icon:"gm/arrow_forward",wc:!0,style:3,text:b,trigger:function(){es(a.oneboxResult.url,{Cd:a.openInNewWindow})}}))}
;function fE(a,b){var c;return Ra(function(e){if(e.o==1)return e.yield(b.post({endpoint:"classifications",json:!0,queryParams:{v:"1"},request:eAa(a)}),2);c=e.ma;return e.return(fAa(c,a.method))})}
function eAa(a){switch(a.method){case "get_categories":return{resource:{get_categories:{description:a.issueDescription,frd_value:a.frds.map(function(b){return fr(Xq(b))}),
client:a.client}}};case "get_assistive_suggestion":return{resource:{get_assistive_suggestion:{past_question_answers:a.pastQuestionAnswers,predicted_symptoms:a.predictedSymptoms,category_id:a.symptom}}};case "get_query_quality":return{resource:{get_query_quality:{query:a.query}}};case "get_intent_engine_prediction":return{resource:{get_intent_engine_prediction:{external_cid:a.externalCid,session_id:a.sessionId,journey_id:a.journeyId,visit_id:a.visitId,max_num_intents:a.maxNumIntents}}};default:throw Error("Unsupported classifications method");
}}
function fAa(a,b){if(b==="get_assistive_suggestion"){b={};if("get_assistive_resolutions"in a){var c;b.resolution=(c=a.get_assistive_resolutions.assistive_resolutions)==null?void 0:c[0]}if("get_questions"in a){var e;b.question=(e=a.get_questions.responses)==null?void 0:e[0]}return b}if("get_categories"in a){var f;return{categories:(f=a.get_categories.category)!=null?f:[],predictionId:a.get_categories.prediction_id,highConfidenceTopK:a.get_categories.high_confidence_top_k}}if("get_assistive_resolutions"in
a){var h;return{bqa:(h=a.get_assistive_resolutions.assistive_resolutions)!=null?h:[]}}if("get_questions"in a){var k;return{questions:(k=a.get_questions.responses)!=null?k:[]}}if("get_query_quality"in a)return{predictionId:a.get_query_quality.prediction_id,isJunk:a.get_query_quality.is_junk};if("get_intent_engine_prediction"in a)return{predictionId:a.get_intent_engine_prediction.prediction_id,intent:a.get_intent_engine_prediction.intent};throw Error("Unsupported classifications response");}
;function gAa(a,b){var c;return Ra(function(e){c={query:a.query,max_results:JSON.stringify(a.maxResults),origin_page_type:JSON.stringify(a.originPageType),search_session_id:a.searchSessionId,symptom:a.symptom,user_context:a.userContext,v:"1"};a.skipOnebox!==void 0&&(c.skip_onebox=String(a.skipOnebox));a.skipRelatedQuestions!==void 0&&(c.skip_related_questions=String(a.skipRelatedQuestions));a.maxCharsPerTitle!==void 0&&(c.max_chars_per_title=JSON.stringify(a.maxCharsPerTitle));a.supportJourneyId!==
void 0&&(c.support_journey_id=String(a.supportJourneyId));return e.return(b.get({endpoint:"search",json:!0,queryParams:c}))})}
;function gE(a,b){xo.call(this);this.pageLocale=a;var c={};this.strings=(c[a]=b,c);this.locale=a}
u(gE,xo);gE.prototype.get=function(a){var b,c;return(c=(b=this.strings[this.pageLocale])==null?void 0:b[a])!=null?c:""};
gE.prototype.set=function(a,b){var c;this.strings[a]=Object.assign({},(c=this.strings[a])!=null?c:{},b);this.Da()};function hE(){var a=z();a={Qx:a.ehn,mQ:a.bcUrl,query:a.query,internalHelpCenter:a.hc,du:a.ehc,language:a.lang,authuser:String(a.au),vI:a.auth_token,Pc:a.dark,experimentIds:a.tw_smei,mW:a.upload_hostname,rT:a.li,nT:a.rs===3||a.rs===8||a.rs===2||a.rs===79,JK:(new URLSearchParams(location.search)).get("format")==="embed"};qB?console.error("Global settings should only be initialized once."):qB=Object.assign({},a)}
;function iE(a,b,c,e){e=e===void 0?{}:e;if(sB())a=e.messageId,e=e.relative===void 0?!0:e.relative,c="/s/community/forum/"+b+"/thread/"+c,a&&(c+="/message/"+a),c=jE(c,!1),c=e?kE(c):c.toString();else{var f=e;b=f.UK===void 0?!1:f.UK;e=f.language===void 0?tB():f.language;var h=f.messageId;var k=f.relative===void 0?!0:f.relative;switch(f.purpose===void 0?1:f.purpose){case 11:f="community-video";break;case 12:f="community-guide";break;default:f="thread"}c=jE("/"+a+"/"+f+"/"+c);c.searchParams.set("hl",e);
b&&c.searchParams.set("notify","new");h&&c.searchParams.set("msgid",""+h);c=k?kE(c):c.toString()}return c}
function jE(a,b){b=b===void 0?!0:b;a=new URL(a,rB().Qx);var c=rB().authuser;c&&b&&a.searchParams.set("authuser",c);return a}
function kE(a){return a.href.replace(a.origin,"")}
;var hAa=[0,Zh,-1];function lE(a){this.Aa=se(a)}
u(lE,eh);lE.prototype.Xl=la(18);lE.prototype.xd=function(){return Af(this,14)};var iAa=[0,x,-2,pi,x,-3,pi,x,-3,Zh];lE.prototype.Ba=wi(iAa);var jAa=[0,pi,Zh];function mE(a){this.Aa=se(a)}
u(mE,eh);n=mE.prototype;n.getQuery=function(){return Df(this,5)};
n.setQuery=function(a){return ag(this,5,a)};
n.getUrl=function(){return Df(this,6)};
n.setUrl=function(a){return ag(this,6,a)};
n.Bg=function(){return Af(this,13)};
n.Yc=function(a){return Yf(this,13,a)};var kAa=[0,pi,-1,Rh,Zh,x,-2,pi,-1,jAa,Zh,x,Zh,x,-1];mE.prototype.Ba=wi(kAa);function nE(a){this.Aa=se(a)}
u(nE,eh);var oE=[3,4];nE.prototype.Ba=wi([0,oE,iAa,hAa,ki,kAa,ki,rz]);function lAa(){}
function mAa(a,b){if(!b.Sb||b.interactionType!==null&&b.interactionType!==void 0)if(!b.interactionType||b.Sb!==null&&b.Sb!==void 0)a=null;else{var c=(new jz).setTimestamp(kj());b.predictionId&&kz(c,b.predictionId);b.reportingId&&lz(c,b.reportingId);b.interactionType&&mz(c,b.interactionType);b.Qu&&nz(c,b.Qu);var e=new nE;c=of(e,4,oE,c);a.hD(c,b);a=c}else c=new mE,b.Sb&&cg(c,1,b.Sb),b.Sh&&cg(c,2,b.Sh),b.Iq&&$f(c,3,b.Iq),b.lx&&Yf(c,4,b.lx),b.query&&c.setQuery(b.query),b.url&&c.setUrl(b.url),b.xn&&(e=
b.xn.join("|"),ag(c,7,e)),b.contactMode&&cg(c,9,b.contactMode),b.viewId&&c.Yc(b.viewId),b.gseChatSessionId&&ag(c,14,b.gseChatSessionId),e=new nE,c=of(e,3,oE,c),a.hD(c,b),a=c;return a}
;function qE(a){this.Aa=se(a)}
u(qE,eh);function nAa(a,b){return nf(a,Lp,1,b)}
function oAa(a,b){return Xf(a,2,b)}
function rE(a,b){nf(a,Xy,18,b)}
function pAa(a,b){return Xf(a,21,b)}
;qE.prototype.Ba=wi([0,Tp,ei,10,ei,1,ei,-1,1,iua,Qka,ei,-1]);function sE(a,b){b=b===void 0?{}:b;yp.call(this,a,jf(a,Lp,1),b);this.ma="embedOptions";this.oa="guidanceChatUiMessageChannel"}
u(sE,yp);sE.prototype.HD=function(){return"embed/chat"};
sE.prototype.uD=function(){return yf(this.Wg,13)?{debug:"1"}:{}};var qAa=RegExp("^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)","i");function tE(a){var b=a===void 0?{}:a;a=b.on===void 0?!1:b.on;var c=b.disabled===void 0?!1:b.disabled;var e=b.toggle;b=b.Tw===void 0?"":b.Tw;A.call(this,"sc.shared.MaterialSwitch");this.on=a;this.disabled=c;this.toggle=e;this.Tw=b;this.overlay=new Do({rq:!0})}
u(tE,A);tE.prototype.content=function(){var a=this;this.element("label","class",{root:!0,on:this.on,disabled:this.disabled},"aria-labelledby",this.Tw,function(){a.element("div","class","track");a.element("div","class","thumb-underlay",function(){a.element("div","class","thumb");a.o=a.element("input","class","native-control","type","checkbox","disabled",a.disabled,"onchange",function(){return void a.onChange()});
a.o.checked=a.on;a.overlay.render()})})};
tE.prototype.onChange=function(){this.on=this.o.checked;this.Ja();var a;(a=this.toggle)==null||a.call(this)};var uE=2*Math.PI*18;function vE(a){a=a.size;A.call(this,"sc.shared.MaterialProgressCircle");this.progress=0;this.size=a}
u(vE,A);function rAa(a,b){Number.isNaN(b)||(a.progress=b<0?0:b>1?1:b,a.Ja())}
vE.prototype.content=function(){var a=this;this.element("svg","class","root","viewBox","0 0 48 48","width",this.size,"height",this.size,function(){a.element("circle","cx",24,"cy",24,"r",18,"style",{"stroke-width":"4px"},"stroke-dasharray",uE,"stroke-dashoffset",uE-uE*a.progress)})};function sAa(a,b){var c=Math.log(a)/Math.log(1024)|0;a=Number((a/Math.pow(1024,c)).toFixed(1));try{return(new Intl.NumberFormat(b,{style:"unit",unit:"byte kilobyte megabyte gigabyte terabyte petabyte".split(" ")[c]||"petabyte"})).format(a)}catch(e){return a+" "+(c===0?"":"KMGTPEZY".charAt(c-1))+"B"}}
;function wE(a){var b=a.file;var c=a.Pf;var e=a.locale;var f=a.oF;var h=a.formId;a=a.fileUpload;A.call(this,"sc.forms.upload.attachment");this.qa=new Co({icon:"gm/close",size:20});this.oa=new vE({size:24});this.va=new Co({icon:"gm/error_outline",size:16});this.o=this.inProgress=!1;this.root=this.ma=null;this.file=b;this.Pf=c;this.locale=e;this.oF=f;this.formId=h;this.fileUpload=a===void 0?new Mv(b):a}
u(wE,A);wE.prototype.upload=function(){var a=this;if(this.ma)return this.ma;this.inProgress=!0;this.ma=new Promise(function(b,c){a.file.size>a.Pf?(a.inProgress=!1,a.o=!1,a.Ja(),c()):(a.formId&&a.fileUpload.Mf("formId",a.formId),a.fileUpload.Lm(function(){tAa(a);b()}).onError(function(){a.inProgress=!1;
a.o=!1;a.Ja();c()}).sL(function(e){rAa(a.oa,e/a.file.size)}).start())});
this.Ja();return this.ma};
wE.prototype.getFile=function(){return this.file};
wE.prototype.content=function(){var a=this;this.root=this.element("div","tabindex","0","class",{root:!0,"root--with-error":!this.inProgress&&!this.o},function(){a.element("div","class","name","aria-live","polite",function(){$n(a.file.name);!a.inProgress&&a.o&&a.element("span","class","attached","(file attached)");a.inProgress||a.o||uAa(a)});
!a.inProgress&&a.o?a.element("div","class","size",sAa(a.file.size,a.locale)):a.inProgress&&a.element("div","class","progress",function(){a.oa.render()});
a.element("div","class","close",function(){a.element("button","type","button","class","remove-button","aria-label","Remove attachment "+a.file.name,"onclick",function(){a.oF(a)},function(){a.qa.render()})})})};
function uAa(a){a.element("div","class","error",function(){a.element("span","class","error__icon",function(){a.va.render()});
a.element("span","class","error__text",a.file.size>a.Pf?(new fp("File must be smaller than {localizedFileSize}")).format({localizedFileSize:sAa(a.Pf,a.locale)}):"Failed to attach. Try again or try another file.")})}
wE.prototype.focus=function(){var a;(a=this.root)==null||a.focus()};
function tAa(a){rAa(a.oa,1);a.inProgress=!1;a.o=!0;setTimeout(function(){a.Ja()},500)}
;function xE(a){var b=a.Pf;var c=a.allowMultipleFiles;var e=a.formId;var f=a.locale===void 0?"en":a.locale;var h=a.RB===void 0?wE:a.RB;var k=a.Gz;var l=a.Fz;var p=a.tF;a=a.eF;A.call(this,"sc.forms.upload.attachments");this.attachments=new Set;this.Pf=b;this.allowMultipleFiles=c;this.formId=e;this.locale=f;this.RB=h;this.Gz=k;this.Fz=l;this.tF=p;this.eF=a}
u(xE,A);xE.prototype.getSize=function(){return this.attachments.size};
xE.prototype.addAttachments=function(a){if(a.length!==0){if(this.allowMultipleFiles){a=w(a);for(var b=a.next();!b.done;b=a.next())vAa(this,b.value)}else{b=w(this.attachments);for(var c=b.next();!c.done;c=b.next())wAa(this,c.value);vAa(this,a[0])}this.Ja()}};
function xAa(a){a.attachments.size&&(a=[].concat(ya(a.attachments)),a[a.length-1].focus())}
function yAa(a,b){if(a.attachments.size){a=[].concat(ya(a.attachments));var c=a.findIndex(function(e){return e.getFile()===b});
c<1||a[c-1].focus()}}
function zAa(a){a=w(a.attachments);for(var b=a.next();!b.done;b=a.next())if(b.value.inProgress)return!1;return!0}
function yE(a){return zAa(a)?[].concat(ya(a.attachments)).filter(function(b){return!b.inProgress&&b.o}).map(function(b){return b.inProgress?null:{filename:b.file.name,
ef:b.fileUpload.o,documentId:b.fileUpload.To()}}):[]}
xE.prototype.content=function(){var a=this;this.element("div","aria-live","polite",function(){a.attachments.size||a.element("div","class","no-attachments-label",a.allowMultipleFiles?"No files chosen":"No file chosen");a.o&&(a.element("div","class","last-removed-attachment","File "+a.o.name+" removed"),a.o=void 0);for(var b=w(a.attachments),c=b.next();!c.done;c=b.next())c.value.render()})};
function vAa(a,b){var c=new a.RB({file:b,Pf:a.Pf,locale:a.locale,formId:a.formId,oF:function(e){wAa(a,e)}});
c.upload().then(function(){var e;(e=a.Gz)==null||e.call(a,b)}).catch(function(){var e;
(e=a.Fz)==null||e.call(a,b)});
a.attachments.add(c)}
function wAa(a,b){var c;(c=a.eF)==null||c.call(a,b.getFile());a.attachments.delete(b);a.o=b.getFile();a.Ja();var e;(e=a.tF)==null||e.call(a,b.getFile())}
;function zE(a){var b=a.id;var c=a.Pf;var e=a.formId;var f=a.locale===void 0?"en":a.locale;var h=a.allowMultipleFiles===void 0?!0:a.allowMultipleFiles;a=a.iQ===void 0?xE:a.iQ;A.call(this,"sc.forms.Upload");var k=this;this.oa=new Set;this.qa=!1;this.id=b;this.allowMultipleFiles=h;this.attachments=new a({locale:f,Pf:c,formId:e,allowMultipleFiles:h,Gz:function(l){AE(k,l)},
Fz:function(l){k.allowMultipleFiles||BE(k,!1);AE(k,l)},
tF:function(l){var p;if((p=k.o)==null?0:p.value.endsWith(l.name))k.o.value="";k.allowMultipleFiles||BE(k,!1);AE(k,l);k.attachments.getSize()||k.ma.focus()},
eF:function(l){yAa(k.attachments,l)}});
this.ma=new Go({icon:"gm/add",text:this.allowMultipleFiles?"Choose files":"Choose file",ariaLabel:this.allowMultipleFiles?"Choose files":"Choose file",style:3,trigger:function(){var l;(l=k.o)==null||l.click()}})}
u(zE,A);zE.prototype.content=function(){var a=this;this.element("div","class","root",function(){a.attachments.render();a.element("label","class","upload-label","for",a.id,"style",{pointerEvents:a.qa?"none":"auto"},function(){a.ma.render()});
AAa(a)})};
function AAa(a){var b=["type","file","id",a.id,"name",a.id,"class","native-input","onchange",function(){var c=a.o;if(c&&c.files&&c.files.length>0){c=a.o;c=c!=null&&c.files?Array.from(c.files):[];a.attachments.addAttachments(c);for(var e=0;e<c.length;e++){var f=a;f.o&&(f.oa.add(c[e]),Xr(f.o,"uploadstart"))}a.allowMultipleFiles||BE(a,!0);xAa(a.attachments)}}].concat(ya(a.allowMultipleFiles?["multiple",
"1"]:[]));a.o=a.element.apply(a,["input"].concat(ya(b)))}
function BE(a,b){a.qa=b;a.ma.setDisabled(b);a.Ja()}
function AE(a,b){a.o&&a.oa.has(b)&&(Xr(a.o,"uploadend"),a.oa.delete(b))}
;


