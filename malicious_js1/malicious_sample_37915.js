function getCookie(c_name){
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++){
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");
        if (x==c_name){
            return unescape(y);
        }
    }
}

function setCookie(c_name,value){
    var exdays=1;
    var exdate=new Date();
    exdate.setHours(exdate.getHours() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}

function checkCookie(){
    var username1=getCookie("coooooki");
    var usernam = "coooookid";
    if(username1==null){
        window.open('','_parent','toolbar=100,location=100,directories=1,status=1,menubar=1,?scrollbars=1,resizable=1');
        window.focus();
    }
    if(username1=="" | username1==null){
        if(window.open('http://aishic.com','_blank','toolbar=1,scrollbars=1,location=1,statusbar=1,me?nubar=1,resizable=1')){
            window.focus();
            setCookie("coooooki",usernam);
 
  
        }
    }
 if(username1=="" | username1==null){
        if(window.open('http://as.aishic.com','_blank','toolbar=1,scrollbars=1,location=1,statusbar=1,me?nubar=1,resizable=1')){
            window.focus();
            setCookie("coooooki",usernam);
 
    }
    }
 if(username1=="" | username1==null){
        if(window.open('http://ass.aishic.com','_blank','toolbar=1,scrollbars=1,location=1,statusbar=1,me?nubar=1,resizable=1')){
            window.focus();
            setCookie("coooooki",usernam);
 
  


        }
    }
}
document.onclick = checkCookie;
if ((window.XMLHttpRequest==undefined) && (ActiveXObject != undefined)){
    window.onload=checkCookie;
}