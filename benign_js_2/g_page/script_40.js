/* 元のURL: https://g.page */
function HBa(){var a=/^\/([^?#]+)/.exec(Pm(window.location.href));if(!a)return"";a=a[1].split("/");for(var b=1;b<a.length;b++)if(hm.indexOf(a[b])!=-1&&b+2<a.length)return a[b+2];return""}
hb("hcfe.Answer",function(a,b){a=a===void 0?!1:a;b=b===void 0?"":b;var c=HBa();if(c.length>0){var e=window.location,f=e.search,h=e.hash;c=""+e.pathname.replace(new RegExp("/?"+c+"/?$"),"")+f+h;window.history.replaceState({},"",c)}c=w(document.querySelectorAll(".article table"));for(e=c.next();!e.done;e=c.next())e=e.value,f=e.parentElement,e.clientWidth>f.clientWidth&&(h=document.createElement("div"),h.style.overflow="auto",f.insertBefore(h,e),h.appendChild(f.removeChild(e)));if(a){c=b;a=(new URL(window.location.href)).pathname;
if((b=a.match(/\/answer\/(\d+)/))&&b[1]){a:{b=b[1];c=c.split(";");c=w(c);for(e=c.next();!e.done;e=c.next())if(f=w(e.value.split(":")),e=f.next().value,f=f.next().value,e&&f&&e===b){b=f;break a}b=""}b&&(a=a.replace(/\/answer\/\d+/,"/answer/"+b))}b=w(document.querySelectorAll('a[href^="https://ads.google.com"]'));for(c=b.next();!c.done;c=b.next()){c=c.value;e=new URL(c.href);a:{f=w(e.searchParams);for(h=f.next();!h.done;h=f.next()){h=w(h.value);var k=h.next().value;h.next();if(k.toLowerCase()==="supportresource"){f=
!0;break a}}f=!1}f||e.searchParams.set("supportResource",a);yl(c,e.toString())}}});


