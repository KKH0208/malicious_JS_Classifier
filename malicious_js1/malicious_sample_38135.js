jQuery("#fontzoom img").each(function(){
	var img=jQuery(this); img.hide();
	var imgInt=setInterval( function(){
		if(img.width()>0){
			clearInterval(imgInt);
			if(img.width()>650){ img.width(650).css({cursor:"pointer",height:"auto"}).click(function(){window.open(img.attr('src'), "_blank")});}
			img.show();
		}
	},50 );
 });
//更改字体大小
var status0='';
var curfontsize=10;
var curlineheight=18;
function fontZoomA(){
  if(curfontsize>8){
    document.getElementById('fontzoom').style.fontSize=(--curfontsize)+'pt';
	document.getElementById('fontzoom').style.lineHeight=(--curlineheight)+'pt';
  }
}
function fontZoomB(){
  if(curfontsize<64){
    document.getElementById('fontzoom').style.fontSize=(++curfontsize)+'pt';
	document.getElementById('fontzoom').style.lineHeight=(++curlineheight)+'pt';
  }
}