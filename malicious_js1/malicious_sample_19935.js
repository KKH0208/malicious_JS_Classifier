var ucoz_rndid = 'cqkIHKYA';
		function uOnDomOrLater(f){
			if(document.readyState == 'loading') {
				if(document.addEventListener) {
					document.addEventListener('DOMContentLoaded',f);
				} else {
					window.attachEvent('onload',f);
				}
			} else {
				setTimeout(f,0);
			}
		}
	document.write('<div style="width:0px;height:0px;position:fixed;right:0px;top:0px;display:none;overflow:hidden;z-index:2147483640;margin:0;padding:0;background:none;" id="dVcqkIHKYA"></div>');
			var mscript=document.createElement('script');
			mscript.src="//"+location.hostname+"/?8QJBMJW%3BvwwxqnC03f2iulTZc5kiu9GziIYPgm6h1CLG9%5EQKOKDG4ZJU6bhaHA%3BwBPbpr99yORXvtkTWaVek7fPXCKC%3BEe0%21Qia0uzY3zK6njdvnJhZzrU2EqGNcNM%3BH8dUZFrjJEjg0TD2rKPTKxhhKc4LeSFNrv2Km8Ob55woo";
			document.getElementsByTagName('head')[0].appendChild(mscript);
		    function resizeDiv(islasttry){
		        var WX,WY,BX,BY;
		        var o=document.getElementById("dVcqkIHKYA"),t,d;
		        if (!o) return;
		        if(typeof window.self_getsizes == 'function'){
		            var s=self_getsizes();
		            if(s.err==1 && !islasttry) return;
		            if(isNaN(s.BX)) s.BX==0;
		            if(isNaN(s.BY)) s.BY==0;
		            if(s.err==1){
		                if (!(t=document.getElementById("bannerXcqkIHKYA"))) return;
		                else s.BX=t.value;
		                if (!(t=document.getElementById("bannerYcqkIHKYA"))) return;
		                else s.BY=t.value;
		            }
		            BX=s.BX;
		            BY=s.BY;
		        }else{
		            if (!(t=document.getElementById("bannerXcqkIHKYA"))) return;
		            else BX=t.value;
		            if (!(t=document.getElementById("bannerYcqkIHKYA"))) return;
		            else BY=t.value;
		        }
		        if (!(t=document.getElementById("wrapperXcqkIHKYA"))) WX=0;
		        else WX=t.value;
		        if (!(t=document.getElementById("wrapperYcqkIHKYA"))) WY=0;
		        else WY=t.value;
		        d=document.getElementById("mainadsdvcqkIHKYA");
		        if(d){
		            if (BX<0) d.style.width="100%";
		            else if (BX>0) d.style.width=BX+"px";
		            if (BY<0) d.style.height="100%";
		            else if (BY>0) d.style.height=BY+"px";
		        }
		        BX=parseInt(BX)+parseInt(WX);
		        BY=parseInt(BY)+parseInt(WY);
		        if (BX<0) o.style.width="100%";
		        else if (BX>0) o.style.width=BX+"px";
		        if (BY<0) o.style.height="100%";
		        else if (BY>0) o.style.height=BY+"px";
		        o.style.display='';
		        return true;
		    }