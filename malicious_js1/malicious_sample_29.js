//<![CDATA[
var ultimaFecha;
function remplaza_fecha(d){
if (d == "") {
    d = ultimaFecha;
 }
var da = d.split(' ');
dia = "<span>"+da[0]+"</span>";
mes = da[1].slice(0,3)+" ";
anio = da[2];
document.write(dia+mes+anio);
 ultimaFecha = d;
}
//]]>
<script type='text/javascript'>

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-23493751-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();