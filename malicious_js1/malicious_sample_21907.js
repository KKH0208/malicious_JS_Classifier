//<![CDATA[

// <!-- Posts relacionados com Slide by JMiur -->
// <!-- http://vagabundia.blogspot.com/ -->

var reltitulosslider = new Array();
var relurlsslider = new Array();
var relresumenslider = new Array();
var relimagenslider = new Array();
var reltituloscantidadslider = 0;
var relmaxamostrarslider = 20; // establecer cantidad de entradas
var relmaxlenslider = 75; // longitud del texto del resumen
var relimagenpodefectoslider = "URL_IMAGENxDEFECTO";
var SRwidth = 144; // ancho de cada DIV
var SRmin = 0;
var SRmax = -2160; // longitud máxima = (SRwidth * relmaxamostrarslider) - (SRwidth * VISIBLES) - SRwidth (en este caso son 4 visibles)

function leerpostetiquetasslider(json) {
  var entry, postimg, postcontent, cat;
  for (var i = 0; i < json.feed.entry.length; i++) {
    if (i==json.feed.entry.length) { break; }
    entry = json.feed.entry[i];
    reltitulosslider[reltituloscantidadslider] = entry.title.$t;
    postcontent = "";
    if ("content" in entry) {
      postcontent = entry.content.$t;
    } else if ("summary" in entry) {
      postcontent = entry.summary.$t;
    }
    relresumenslider[reltituloscantidadslider] = eliminattagsslider(postcontent,relmaxlenslider);
    if ("media$thumbnail" in entry) {
      postimg = entry.media$thumbnail.url;
    } else {
      postimg = relimagenpodefectoslider;
    }
    relimagenslider[reltituloscantidadslider] = postimg;
    for (var k = 0; k < entry.link.length; k++) {
      if (entry.link[k].rel == 'alternate') {
        relurlsslider[reltituloscantidadslider] = entry.link[k].href;
        break;
      }
    }
    reltituloscantidadslider++;
  }
}
function mostrarrelacionadosslider() {
  var tmp = new Array(0);
  var tmp2 = new Array(0);
  var tmp3 = new Array(0);
  var tmp4 = new Array(0);
  for(var i = 0; i < relurlsslider.length; i++) {
    if(!containsslider(tmp, relurlsslider[i])) {
      tmp.length += 1; tmp[tmp.length - 1] = relurlsslider[i];
      tmp2.length += 1; tmp2[tmp2.length - 1] = reltitulosslider[i];
      tmp3.length += 1; tmp3[tmp3.length - 1] = relresumenslider[i];
      tmp4.length += 1; tmp4[tmp4.length - 1] = relimagenslider[i];
    }
  }
  reltitulosslider = tmp2; relurlsslider = tmp; relresumenslider = tmp3; relimagenslider = tmp4;
  for(var i = 0; i < reltitulosslider.length; i++){
    var indice = Math.floor((reltitulosslider.length - 1) * Math.random());
    var tempTitle = reltitulosslider[i]; var tempUrls = relurlsslider[i];
    var tempResumen = relresumenslider[i]; var tempImagen = relimagenslider[i];
    reltitulosslider[i] = reltitulosslider[indice]; relurlsslider[i] = relurlsslider[indice];
    relresumenslider[i] = relresumenslider[indice]; relimagenslider[i] = relimagenslider[indice];
    reltitulosslider[indice] = tempTitle; relurlsslider[indice] = tempUrls;
    relresumenslider[indice] = tempResumen; relimagenslider[indice] = tempImagen;
  }
  var cuantosPosts = 0;
  var r = Math.floor((reltitulosslider.length - 1) * Math.random());
  var rini = r;
  var salida;
  var dirURL = document.URL;
  while (cuantosPosts < relmaxamostrarslider) {
    if (relurlsslider[r] != dirURL) {
      salida = "<div class='relspostsslider'>";
      salida += "<a href='" + relurlsslider[r] + "' rel='nofollow'  target='_blank' title='" + reltitulosslider[r] + "'><img src='" + relimagenslider[r] + "' /></a>";
      salida += "<h6><a href='" + relurlsslider[r] + "' target='_blank'>" + reltitulosslider[r] + "</a></h6>";
      salida += "<p>" + relresumenslider[r] + " ... </p>";
      salida += "</div>";
      document.write(salida);
      cuantosPosts++;
      if (cuantosPosts == relmaxamostrarslider) { break; }
    }
    if (r < reltitulosslider.length - 1) {
      r++;
    } else {
      r = 0;
    }
    if(r==rini) { break; }
  }
}
function eliminattagsslider(cual,longitud){
  var resumen = cual.split("<");
  for(var i=0;i<resumen.length;i++){
    if(resumen[i].indexOf(">")!=-1){
      resumen[i] = resumen[i].substring(resumen[i].indexOf(">")+1,resumen[i].length);
    }
  }
  resumen = resumen.join("");
  resumen = resumen.substring(0,longitud-1);
  return resumen;
} 
function containsslider(a, e) {
  for(var j = 0; j < a.length; j++) if (a[j]==e) return true;
  return false;
}

function desplazarrels(direccion) {
  var div = document.getElementById("postsrelacionadoscontenedor");
  var pos = parseInt(div.style.left);
  pos = pos + (SRwidth * direccion);
  if(pos > SRmin) { return }
  if(pos < SRmax) { return }
  div.style.left = pos + "px";
}

//]]>