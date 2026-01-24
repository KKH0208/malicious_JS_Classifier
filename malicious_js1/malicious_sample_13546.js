browserName = navigator.appName;
browserVer = parseInt(navigator.appVersion);
if(browserName == "Netscape" && browserVer >= 3){ init = "net"; }
else { init = "ie"; }


if(((init == "net")&&(browserVer >=3))||((init == "ie")&&(browserVer >= 4))){

 sn_on=new Image;
 sn_off=new Image;
 sn_on.src= "skin/nzeo_ver4_bbs/name_on.gif";
 sn_off.src= "skin/nzeo_ver4_bbs/name_off.gif";

 ss_on=new Image;
 ss_off=new Image;
 ss_on.src= "skin/nzeo_ver4_bbs/subject_on.gif";
 ss_off.src= "skin/nzeo_ver4_bbs/subject_off.gif";

 sc_on=new Image;
 sc_off=new Image;
 sc_on.src= "skin/nzeo_ver4_bbs/content_on.gif";
 sc_off.src= "skin/nzeo_ver4_bbs/content_off.gif";

}

function OnOff(name) {
if(((init == "net")&&(browserVer >=3))||((init == "ie")&&(browserVer >= 4))) {
  if(document.search[name].value=='on')
  {
   document.search[name].value='off';
   ImgSrc=eval(name+"_off.src");
   document[name].src=ImgSrc;
  }
  else
  {
   document.search[name].value='on';
   ImgSrc=eval(name+"_on.src");
   document[name].src=ImgSrc;
  }
 }
}