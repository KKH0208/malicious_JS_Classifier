function loadPrice(url){
			document.getElementById("infoPrice").innerHTML='<p>&nbsp;</p><p style="text-align:center"><img src="includes/templates/shop/images/lightbox-ico-loading.gif" alt="Loading Reviews" title="Loading Reviews"></p>';
			var xmlhttp;
			var txt,x,xx,i;
			if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp=new XMLHttpRequest();
			}else{// code for IE6, IE5
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange=function(){
				if (xmlhttp.readyState==4 && xmlhttp.status==200){
					document.getElementById("infoPrice").innerHTML=xmlhttp.responseText;
				}
			}
			xmlhttp.open("GET",url,true);
			xmlhttp.send();
		}
		//loadPrice('http://maskgift.com/index.php?main_page=ajax_info_price&products_id=721&zenid=r7bo9engl9qna4kqjngqivema1');
		$("#productAttributes select").change(function(){
			var qty=$("input[name='cart_quantity']").val();
			var temp='';
			var n=cart_quantity.elements.length;
            for (var i=0; i<n; i++) {
		var el = cart_quantity.elements[i];
		switch (el.type) { 			
			case 'select-one':
				temp += el.name+':'+escape(el.value)+',';
				break;
		}
        	}
		   // loadPrice('http://maskgift.com/index.php?main_page=ajax_info_price&products_id=721&attr=&zenid=r7bo9engl9qna4kqjngqivema1'+temp+'&qty='+qty);
		});
		$("input[name='cart_quantity']").keyup(function(){
			var qty=$("input[name='cart_quantity']").val();
			var temp='';
			var n=cart_quantity.elements.length;
            for (var i=0; i<n; i++) {
		var el = cart_quantity.elements[i];
		switch (el.type) { 			
			case 'select-one':
				temp += el.name+':'+escape(el.value)+',';
				break;
		}
        	}
		  //  loadPrice('http://maskgift.com/index.php?main_page=ajax_info_price&products_id=721&attr=&zenid=r7bo9engl9qna4kqjngqivema1'+temp+'&qty='+qty);
		});

$(document).ready(function(){
    $(".plus").click(function(){if($(this).next().val()>0) $(this).next().val($(this).next().val()-1);});
	$(".add").click(function(){$(this).prev().val(parseInt($(this).prev().val())+1);});
   
	$(".plus").click(function(){
	  var qty=$("input[name='cart_quantity']").val();
			var temp='';
			var n=cart_quantity.elements.length;
            for (var i=0; i<n; i++) {
		var el = cart_quantity.elements[i];
		switch (el.type) { 			
			case 'select-one':
				temp += el.name+':'+escape(el.value)+',';
				break;
		}
        	}
		  //  loadPrice('http://maskgift.com/index.php?main_page=ajax_info_price&products_id=721&attr=&zenid=r7bo9engl9qna4kqjngqivema1'+temp+'&qty='+qty);
	});
	$(".add").click(function(){
	  var qty=$("input[name='cart_quantity']").val();
			var temp='';
			var n=cart_quantity.elements.length;
            for (var i=0; i<n; i++) {
		var el = cart_quantity.elements[i];
		switch (el.type) { 			
			case 'select-one':
				temp += el.name+':'+escape(el.value)+',';
				break;
		}
        	}
		  //  loadPrice('http://maskgift.com/index.php?main_page=ajax_info_price&products_id=721&attr=&zenid=r7bo9engl9qna4kqjngqivema1'+temp+'&qty='+qty);
	});
});