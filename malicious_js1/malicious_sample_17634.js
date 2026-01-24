function rssticker(t){for(var a=0;a<numeroposts;a++){entradas=t.feed.entry[a],titulosposts[a]=entradas.title.$t;for(var e=0;e<entradas.link.length;e++)if("alternate"==entradas.link[e].rel){enlaceposts[a]=entradas.link[e].href;break}}startrssticker()}function startrssticker(){postactual=-1,largoactual=0,enlaces=document.getElementById("enlace"),runticker()}function runticker(){var t;0==largoactual&&(postactual++,postactual%=numeroposts,titulo=titulosposts[postactual].replace(/&quot;/g,'"'),enlace=enlaceposts[postactual],enlaces.href=enlace),enlaces.innerHTML=titulo.substring(0,largoactual),largoactual!=titulo.length?(largoactual++,t=retardocaracter):(largoactual=0,t=retardopost),setTimeout("runticker()",t)}
var numeroposts = 6; //عدد المواضيع المرغوب ظهورها في الشريط
var retardocaracter = 30; //عدد الأحرف
var retardopost = 4000; //التحكم بالسرعة
var titulosposts = new Array();
var enlaceposts = new Array();
var entradas = "";