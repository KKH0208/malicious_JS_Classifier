/* 元のURL: https://adriver.ru */
// 外部JS: https://www.adriver.ru/wp-content/themes/adriver_2025-10-13_18-15_18/js/tooltip.js
var tooltip = {
	hide_time: 1000,
	div: document.createElement('DIV'),
	init: function(){
		function addEvent(e, t, f) {
			if (e.addEventListener) {e.addEventListener(t, f, false)}
			if (e.attachEvent) {e.attachEvent('on' + t, f)}
		}
		
		var t = this;
		addEvent(window,'scroll',function(){t._h()})
		
		t.div.className = 'baloon';
		t.div.onmouseover = function(){
			if(t.timer)clearTimeout(t.timer);
		}
		t.div.onmouseout = function(){t.hide()}
		document.body.insertBefore(t.div, document.body.firstChild);
		
		function _(s){t.div.appendChild(document.createElement('B')).className=s}
		
		_('r4');_('r3');_('r2');_('r1');
		
		t.holder = t.div.appendChild(document.createElement('DIV'));
		t.holder.className = 'inner-box';
		
		_('r1');_('r2');_('r3');_('r4');
		
		var spans = document.getElementsByTagName('span');
		for(var i=0,l=spans.length;i<l;i++)
			if (spans[i].className=="tooltip"){
				spans[i].onmouseover = function(e){
					t.show(e,this)
				}
				spans[i].onmouseout = function(){
					t.hide()
				}
			}
	},
	show: function(e,span){
		if(this.timer)clearTimeout(this.timer);
		if(this.span!=span) this._h();
		
		this.span = span;
		
		e=e||event;
		
		var d = this.div;
		var D = document, db = D.body, de = D.documentElement, cm = D.compatMode == "CSS1Compat";
	
		var w = cm && de.clientWidth || self.innerWidth || db.clientWidth,
			h = cm && de.clientHeight || self.innerHeight || db.clientHeight,
			sl = self.pageXOffset || cm && de.scrollLeft || db.scrollLeft,
			st = self.pageYOffset || cm && de.scrollTop || db.scrollTop;

		d.style.left = e.clientX+sl+'px';
		d.style.top = e.clientY+st+'px';

		var id = span.getAttribute('term');

		var req;
		try{req = new ActiveXObject("Msxml2.XMLHTTP")}
		catch(ee){
			try{req = new ActiveXObject("Microsoft.XMLHTTP")}
			catch(EE){req = false}
		}
		if (!req && typeof XMLHttpRequest!='undefined') req = new XMLHttpRequest();
	 
		req.open('GET', '/getterm.php?term_id='+id, true);
		
		var t = this;
		
		req.onreadystatechange = function() {
			if (req.readyState==4&&req.status==200) {
				var o = eval('('+req.responseText+')');
				if (o['title']&&o['text']) {
					t.holder.innerHTML = o.title + '<br><br>' + o.text + ( o.fullExist ? '<br><br><div style="text-align:right;"><a href="/doc/terms/terms_'+id+'.html">Подробнее &gt;&gt;</a></div>' : '');
					d.style.display = 'block';
					
					if(d.offsetWidth>300)d.style.width = '300px';
					if(parseInt(d.style.left)-sl+d.offsetWidth>w)d.style.left=w-d.offsetWidth+sl+'px';
					if(parseInt(d.style.top)-st+d.offsetHeight>h)d.style.top=h-d.offsetHeight+st+'px';
				}
			}
		}
		req.send(null);
	},
	hide: function(){
		var t = this;
		this.timer = setTimeout(function(){t._h()},this.hide_time)
	},
	_h: function(){
		this.div.style.display = 'none';
	}
}

window.onload = function(){
	tooltip.init();
}

