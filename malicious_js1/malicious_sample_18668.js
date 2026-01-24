window.addEvent('load', function() {
				new JCaption('img.caption');
			});
JCEMediaBox.init({popup:{width:"",height:"",legacy:1,lightbox:1,shadowbox:1,resize:1,icons:1,overlay:1,overlayopacity:0.8,overlaycolor:"#000000",fadespeed:500,scalespeed:500,hideobjects:0,scrolling:"fixed",close:2,labels:{'close':'Close','next':'Next','previous':'Previous','cancel':'Cancel','numbers':'{$current} of {$total}'}},tooltip:{className:"tooltip",opacity:0.8,speed:150,position:"br",offsets:{x: 16, y: 16}},base:"/jm/",imgpath:"plugins/system/jcemediabox/img",theme:"squeeze",themecustom:"",themepath:"plugins/system/jcemediabox/themes"});
var rokboxPath = '/jm/plugins/system/rokbox/';
function keepAlive() {	var myAjax = new Request({method: "get", url: "index.php"}).send();} window.addEvent("domready", function(){ keepAlive.periodical(840000); });
		window.addEvent('domready', function() {

			SqueezeBox.initialize({});
			SqueezeBox.assign($$('a.flyermodal'), {
				parse: 'rel'
			});
		});
window.plg_system_topofthepage_options = {"spyposition":"200","visibleopacity":"100","displaydur":"250","slidein":"0","slideindir":"top","zindex":"0","topalways":false,"icon":false,"buttontext":"Torna su","styles":{"position":"fixed","opacity":0,"display":"block","bottom":"0px","right":"0px"},"smoothscroll":{"duration":"500","transition":"linear"}};