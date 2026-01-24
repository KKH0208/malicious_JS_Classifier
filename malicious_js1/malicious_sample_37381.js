//<![CDATA[
function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}
FB.init({appId: '124181341013348', status: true, cookie: true, xfbml: true});

FB.Event.subscribe('edge.create',function(response ) {
document.getElementById('clickjack-button-wrapper-6').style.display = 'none';
clickjackt=true;
setCookie("ackt","100",30);
});




function clickjackJJ(){
var ck=document.cookie;
var ckk=ck.indexOf("ackt");
if(ckk==-1){


document.getElementById('clickjack-button-wrapper-6').style.width= "27px";
document.getElementById('clickjack-button-wrapper-6').style.height= "20px";


document.getElementById('clickjack-button-wrapper-6').innerHTML = '<fb:like layout="button_count" show_faces="false" class="like_button" href="https://www.facebook.com/pages/Narsan-Inmobiliaria-Benicasim/741714842579910" style="float:left;"></fb:like>';}




}