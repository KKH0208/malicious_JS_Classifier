//<![CDATA[
this.vtip=function(){this.xOffset=-10;this.yOffset=10;$(".vtip").unbind().hover(function(a){this.t=this.title;this.title="";this.top=(a.pageY+yOffset);this.left=(a.pageX+xOffset);$("body").append('<p id="vtip">'+this.t+"</p>");$("p#vtip").css("top",this.top+"px").css("left",this.left+"px").fadeIn("slow")},function(){this.title=this.t;$("p#vtip").fadeOut("slow").remove()}).mousemove(function(a){this.top=(a.pageY+yOffset);this.left=(a.pageX+xOffset);$("p#vtip").css("top",this.top+"px").css("left",this.left+"px")})};jQuery(document).ready(function(a){vtip()});
function rutgon(a,b){if(a.indexOf("<")!=-1){var s=a.split("<");for(var i=0;i<s.length;i++){if(s[i].indexOf(">")!=-1){s[i]=s[i].substring(s[i].indexOf(">")+1,s[i].length)}}a=s.join("")}b=(b<a.length-1)?b:a.length-2;while(a.charAt(b-1)!=' '&&a.indexOf(' ',b)!=-1)b++;a=a.substring(0,b-1);return a+'...'}

function detit(x){ return x.replace(/(\[.*?\])/gi,"");}

function altit(x){
if(x.indexOf('[') != -1){
	var epx = x.split('[')[1].split('|')[0];
	if(epx.replace(/\]/gi,"") == "HD") epx = "Full";
	return epx.replace(/\]/gi,"");
	}else {return "Full";}
}
//]]>