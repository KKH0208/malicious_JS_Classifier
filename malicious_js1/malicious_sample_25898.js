spnoConflict(function($){

					function mainmenu() {
						$('.sp-menu').spmenu({
							startLevel: 0,
							direction: 'ltr',
							initOffset: {
								x: 0,
								y: 29
							},
							subOffset: {
								x: 0,
								y: 0
							},
							center: 0
						});
			}

			mainmenu();

			$(window).on('resize',function(){
				mainmenu();
			});


			});


var jQ = false;
function initJQ() {
	if (typeof(jQuery) == 'undefined') {
		if (!jQ) {
			jQ = true;
			document.write('<scr' + 'ipt type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></scr' + 'ipt>');
		}
		setTimeout('initJQ()', 50);
	}
}
initJQ(); 
 
 if (jQuery) jQuery.noConflict();    
  
  
 

		jQuery(function($) {
			SqueezeBox.initialize({});
			SqueezeBox.assign($('a.modal').get(), {
				parse: 'rel'
			});
		});
<!--

	function hikashopModifyQuantity(id,obj,add,form,type,moduleid){
		var d = document, cart_type="cart", addStr="", qty=1, e = null;
		if(type) cart_type = type;
		if(add) addStr = "&add=1";

		if(moduleid === undefined) moduleid = 0;

		if(obj){
			qty = parseInt(obj.value);
		}else if(document.getElementById("hikashop_product_quantity_field_"+id) && document.getElementById("hikashop_product_quantity_field_"+id).value){
			qty = document.getElementById("hikashop_product_quantity_field_"+id).value;
		}
		if(form && document[form]){
			var varform = document[form];
			e = d.getElementById("hikashop_cart_type_"+id+"_"+moduleid);

			if(!e)
				e = d.getElementById("hikashop_cart_type_"+id);
			if(cart_type == "wishlist"){
				if(e) e.value = "wishlist";
				if(varform.cid) varform.cid.value = id;
				f = d.getElementById("type");
				if(f) f.value = "wishlist";
			}else{
				if(e) e.value = "cart";
				if(varform.cid) varform.cid.value = id;
			}
			if(varform.task) {
				varform.task.value = "updatecart";
			}

			var input = document.createElement("input");
			input.type = "hidden";
			input.name = "from_form";
			input.value = "true";
			varform.appendChild(input);

			varform.submit();
		}else{
			if(qty){
				
							if(cart_type == "wishlist"){
								SqueezeBox.fromElement("hikashop_notice_wishlist_box_trigger_link",{parse: "rel"});
							} else {
								SqueezeBox.fromElement("hikashop_notice_box_trigger_link",{parse: "rel"});
							}
						
			}
			var url = "/demo/index.php/component/hikashop/product/updatecart/tmpl-component?from=module&product_id="+id+"&cart_type="+cart_type+"&hikashop_ajax=1&quantity="+qty+addStr+"&return_url=aHR0cDovL3d3dy5sZWFybi1vbmxpbmUuYmUvZGVtby9pbmRleC5waHAvaW5mb3JtYXRpb24tdGVjaG5vbG9neS9pdGVtbGlzdC90YWcvQyUyMFNoYXJw";
			var completeFct = function(result) {
				var hikaModule = false;
				var checkmodule = false;
				if(result == "notLogged"){ // if the customer is not logged and use add to wishlist, display a popup for the notice
					SqueezeBox.fromElement("hikashop_notice_wishlist_box_trigger_link",{parse: "rel"});
				}else if(result.indexOf("URL|") != "-1"){ // id the option is set to redirect, do the redirection
					result = result.replace("URL|","");
					window.location = result;
					return false;
				}else if(result != ""){ // if the result is not empty check for the module
					checkmodule = true;
				}
				if(checkmodule){
					if(cart_type != "wishlist") {
						hikaModule = window.document.getElementById("hikashop_cart_module");
					}else{
						hikaModule = window.document.getElementById("hikashop_wishlist_module");
					}
				}
				if(hikaModule) hikaModule.innerHTML = result;
				if(window.jQuery && typeof(jQuery.noConflict) == "function" && !window.hkjQuery) {
					window.hkjQuery = jQuery.noConflict();
				}
				if(window.hkjQuery && typeof(hkjQuery().chosen) == "function") {
					hkjQuery( ".tochosen:not(.chzn-done)" ).removeClass('chzn-done').removeClass('tochosen').chosen();
				}
			};
			try{
				new Ajax(url, {method: "get", onComplete: completeFct}).request();
			}catch(err){
				new Request({url: url, method: "get", onComplete: completeFct}).send();
			}
		}
		return false;
	}

//-->

				jQuery(document).ready(function (){
					jQuery('select').chosen({"disable_search_threshold":10,"allow_single_deselect":true,"placeholder_text_multiple":"Select some options","placeholder_text_single":"Select an option","no_results_text":"No results match"});
				});