//<![CDATA[
/*------------------------------------------------------------
	Document Text Sizer- Copyright 2003 - Taewook Kang.  All rights reserved.
	Coded by: Taewook Kang (txkang.REMOVETHIS@hotmail.com)
	Web Site: http://txkang.com
	Script featured on Dynamic Drive (http://www.dynamicdrive.com)
	Please retain this copyright notice in the script.
	License is granted to user to reuse this code on 
	their own website if, and only if, 
	this entire copyright notice is included.
--------------------------------------------------------------*/
function ts(f,g){if(document.getElementById){var b=document,c=null,a=startSz,d,e,a=a+g;0>a&&(a=0);6<a&&(a=6);startSz=a;(c=b.getElementById(f))||(c=b.getElementsByTagName(f)[0]);c.style.fontSize=szs[a];for(b=0;b<tgs.length;b++)for(e=c.getElementsByTagName(tgs[b]),d=0;d<e.length;d++)e[d].style.fontSize=szs[a]}}var tgs=["div","td","tr"],szs="xx-small x-small small medium large x-large".split(" "),startSz=2;
//]]>