function xyz_lbx_settings()
{
var hadjust;
var wiadjust;
var posit=2 
var def_disp=9;
var lbxwid=346;
var lbxwiddim="px";
var lbxhe=290;
var lbxhedim="px";
var screenheight=jQuery(window).height(); 
/*var screenheight=window.innerHeight;*/
var screenwidth=jQuery(window).width(); 
var lbxbordwidth=5;



if(lbxhedim=="px")
{
hadjust=(screenheight-lbxhe)/2;
}
else
{
	hadjust=(100-lbxhe)/2;
}
if(lbxwiddim=="px")
{
wiadjust=(screenwidth-lbxwid)/2;
}
else
{
	wiadjust=(100-lbxwid)/2;
}

if(posit==2)
{
if(def_disp==2)
{
	document.getElementById("lbx_light").style.top=hadjust+lbxhedim;
	document.getElementById("lbx_light").style.left="0px";
}
if(def_disp==1)
{
	document.getElementById("lbx_light").style.top="0px";
	document.getElementById("lbx_light").style.left="0px";
}
if(def_disp==3)
{
	document.getElementById("lbx_light").style.bottom="0px";
	document.getElementById("lbx_light").style.left="0px";
}
if(def_disp==4)
{
	document.getElementById("lbx_light").style.bottom="0px";
	document.getElementById("lbx_light").style.left=wiadjust+lbxwiddim;
}
if(def_disp==5)
{
	document.getElementById("lbx_light").style.bottom="0px";
	document.getElementById("lbx_light").style.right="0px";
}
if(def_disp==6)
{
	document.getElementById("lbx_light").style.top=hadjust+lbxhedim;
	document.getElementById("lbx_light").style.right="0px";
}
if(def_disp==7)
{
	document.getElementById("lbx_light").style.top="0px";
	document.getElementById("lbx_light").style.right="0px";
}
if(def_disp==8)
{
	document.getElementById("lbx_light").style.top="0px";
	document.getElementById("lbx_light").style.left=wiadjust+lbxwiddim;
}
if(def_disp==9)
{
	document.getElementById("lbx_light").style.top=hadjust+lbxhedim;
	document.getElementById("lbx_light").style.left=wiadjust+lbxwiddim;
}
}
var bordwidth=5;
	var newheight;
	var newwidth;
	if(lbxhedim=="%")
	{
		var hadnjust=(screenheight*lbxhe)/100;
		 newheight=hadnjust-(2*bordwidth);

		if(newheight<0)
			 newheight=0;
		   
		 document.getElementById("lbx_light").style.height=newheight+'px';
	}	
	if(lbxwiddim=="%")
	{
				var wiadnjust=(screenwidth*lbxwid)/100;
		 newwidth=wiadnjust-(2*bordwidth);

		 if(newwidth<0)
			 newwidth=0;
		 
			document.getElementById("lbx_light").style.width=newwidth+'px';
	}	


	/*if(lbxhedim=="px")
	{
	hadjust=(screenheight-lbxhe)/2;
	document.getElementById("lbx_light").style.height=hadjust;
	}
	
	if(lbxwiddim=="px")
	{
	wiadjust=(screenwidth-lbxwid)/2;
	document.getElementById("lbx_light").style.width=wiadjust;
	}*/
}
     	
	
var xyz_lbx_tracking_cookie_name="_xyz_lbx_until";
var xyz_lbx_pc_cookie_name="_xyz_lbx_pc";
var xyz_lbx_tracking_cookie_val=xyz_lbx_get_cookie(xyz_lbx_tracking_cookie_name);
var xyz_lbx_pc_cookie_val=xyz_lbx_get_cookie(xyz_lbx_pc_cookie_name);
var xyz_lbx_today = new Date();
if(xyz_lbx_pc_cookie_val==null)
xyz_lbx_pc_cookie_val = 1;
else
xyz_lbx_pc_cookie_val = (xyz_lbx_pc_cookie_val % 1 ) +1;
expires_date = new Date( xyz_lbx_today.getTime() + (24 * 60 * 60 * 1000) );
document.cookie = xyz_lbx_pc_cookie_name + "=" + xyz_lbx_pc_cookie_val + ";expires=" + expires_date.toGMTString() + ";path=/";
function xyz_lbx_get_cookie( name )
{
var start = document.cookie.indexOf( name + "=" );
//alert(document.cookie);
var len = start + name.length + 1;
if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) )
{
return null;
}
if ( start == -1 ) return null;
var end = document.cookie.indexOf( ";", len );
if ( end == -1 ) end = document.cookie.length;
return unescape( document.cookie.substring( len, end ) );
}
function lbx_hide_lightbox()
{
document.getElementById("lbx_light").style.display="none";
document.getElementById("lbx_light").innerHTML="";
document.getElementById("lbx_fade").style.display="none";
}
function lbx_show_lightbox()
{
	xyz_lbx_settings();

	jQuery(window).resize(function(){
		xyz_lbx_settings();

 });
	
//alert(lbx_tracking_cookie_val);
if(xyz_lbx_tracking_cookie_val==1)
return;
if( "delay_only" == "page_count_only"  || "delay_only" == "both" )
{
if(xyz_lbx_pc_cookie_val != 1)
return;
}
document.getElementById("lbx_light").style.display="block";
document.getElementById("lbx_fade").style.display="block";
//expires_date = new Date( xyz_lbx_today.getTime() + (24 * 60 * 60 * 1000) );
//alert(xyz_lbx_today.toGMTString());
	expires_date = new Date(xyz_lbx_today.getTime() + (60 * 60 * 1000));
document.cookie = xyz_lbx_tracking_cookie_name + "=1;expires=" + expires_date.toGMTString() + ";path=/";
}
if("delay_only" == "page_count_only")
lbx_show_lightbox();
else
setTimeout("lbx_show_lightbox()",6000);