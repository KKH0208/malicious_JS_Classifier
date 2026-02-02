var Hongru={};
function H$(id){return document.getElementById(id)}
function H$$(c,p){return p.getElementsByTagName(c)}
Hongru.shutter = function(){
	function init(anchor,options){this.anchor=anchor; this.init(options);}
	init.prototype = {
		init:function(options){ //optionsidѡͼƬбǩidautoѡԶʱ䣻indexѡʼеͼƬ
			var wp = H$(options.id), // ȡͼƬбԪ
			ul = H$$('ul',wp)[0], // ȡ
			li = this.li = H$$('li',ul);
			this.a = options.auto?options.auto:4; //Զм
			this.index = options.position?options.position:0; //ʼеͼƬţ0ʼ
			this.l = li.length;
			this.cur = 0; //ǰʾͼƬ&&z-index
			this.stN = options.shutterNum?options.shutterNum:5;
			this.dir = options.shutterDir?options.shutterDir:'H';
			this.W = wp.offsetWidth;
			this.H = wp.offsetHeight;
			this.aw = 0;
			this.mask = [];
			this.nav = [];
			ul.style.display = 'none';
			var container = this.container = document.createElement('div'),
				con_a = this._a = document.createElement('a');
			con_a.target = '_blank';
			container.style.cssText = con_a.style.cssText = 'position:absolute;width:'+this.W+'px;height:'+this.H+'px;left:0;top:0';
			container.appendChild(con_a);
			for (var x=0; x<this.stN; x++) {
				var mask = document.createElement('span');
				mask.style.cssText = this.dir == 'H'?'position:absolute;width:'+this.W/this.stN+'px;height:'+this.H+'px;left:'+x*this.W/this.stN+'px;top:0' : 'position:absolute;width:'+this.W+'px;height:'+this.H/this.stN+'px;left:0px;top:'+x*this.H/this.stN+'px';
				this.mask.push(mask);
				con_a.appendChild(mask);
			}
			wp.appendChild(container);
			this.nav_wp = document.createElement('div'); //ȽһdivΪǩҲ<ul><ol>ܻãҾͲ
			this.nav_wp.style.cssText = 'position:absolute;right:0;bottom:0;padding:8px 0;'; //Ϊʽ
			for(var i=0;i<this.l;i++){
				/* == ƿ == */
				var nav = document.createElement('a'); //ҾֱaǩĻҲli
				nav.className = options.navClass?options.navClass:'shutter-nav'; //classĬΪ'shutter-nav'
				this.nav.push[nav];
				nav.innerHTML = i+1;
				nav.onclick = new Function(this.anchor+'.pos('+i+')'); //onclick¼ֱӵ֮ǰдõpos()
				this.nav_wp.appendChild(nav);
			}
			wp.appendChild(this.nav_wp);
			this.curC = options.curNavClass?options.curNavClass:'shutter-cur-nav';
			this.pos(this.index); //任
		},
		auto:function(){
			this.li.a = setInterval(new Function(this.anchor+'.move(1)'),this.a*1000); 
		},
		move:function(i){//iѡ1-1,1еһţ-1еһ
			var n = this.cur+i; 
			var m = i==1?n==this.l?0:n:n<0?this.l-1:n; //һŻһŵţעԪѡã
			this.pos(m); //任һŻһ
		},
		pos:function(i){
			clearInterval(this.li.a);
			clearInterval(this.li[i].a);
			this.aw = this.dir == 'H'?this.H : this.W;
			var src = H$$('img',this.li[i])[0].src;
			var _n = i+1>=this.l?0:i+1;
			var src_n = H$$('img',this.li[_n])[0].src;
			this.container.style.backgroundImage = 'url('+src_n+')';
			for(var n=0;n<this.stN;n++){
				this.mask[n].style.cssText = this.dir == 'H'?'position:absolute;width:'+this.W/this.stN+'px;height:'+this.H+'px;left:'+n*this.W/this.stN+'px;top:0' : 'position:absolute;width:'+this.W+'px;height:'+this.H/this.stN+'px;left:0px;top:'+n*this.H/this.stN+'px';
				this.mask[n].style.background = this.dir == 'H' ? 'url('+src+') no-repeat -'+n*this.W/this.stN+'px 0' : 'url('+src+') no-repeat 0 -'+n*this.H/this.stN+'px';
			}
			this.cur = i; //󶨵ǰʾͼƬȷ
			this.li.a = false;
			for(var x=0;x<this.l;x++){
				H$$('a',this.nav_wp)[x].className = x==i?this.curC:'shutter-nav'; //󶨵ǰʽ
				}
			this._a.href = H$$('a',this.li[i])[0].href;
			//this.auto(); //Զ
			this.li[i].a = setInterval(new Function(this.anchor+'.anim('+i+')'), 6*this.stN);
		},
		anim: function (i) {
			var tt = this.dir == 'H' ? Math.abs(parseInt(this.mask[this.stN-1].style.top)) : Math.abs(parseInt(this.mask[this.stN-1].style.left));
			if(this.aw-tt<=5){
				clearInterval(this.li[i].a);
				for(var n=0;n<this.stN;n++){
					var d = n%2 == 0 ? 1 : -1;
					this.dir == 'H' ? this.mask[n].style.top = this.aw*d + 'px' : this.mask[n].style.left = this.aw*d + 'px';
				}
				if(!this.li.a) {this.auto()}
			}else {
				for(var n=0;n<this.stN;n++){
					var d = n%2 == 0 ? 1 : -1;
					var ts = (this.aw-Math.ceil(Math.abs(this.aw-tt)*.75))*d;
					this.dir == 'H' ? this.mask[n].style.top = ts + 'px' : this.mask[n].style.left = ts +'px';
				}
			}
		}
	}
	return {init:init}
}();