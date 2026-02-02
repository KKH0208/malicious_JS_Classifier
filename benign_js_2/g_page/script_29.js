/* 元のURL: https://g.page */
function H5(a){this.o=a}
;function I5(a,b){this.o=a;this.oa=b;this.ma=null}
u(I5,H5);I5.prototype.getTarget=function(){if(this.ma)return this.ma;for(var a=[],b=this.o.xb;b instanceof gbar.I&&b!=this.oa.o;)a.push(b.ic()),b=b.zb();for(b=this.oa;a.length>0;)b=b.getChild(a.pop());return this.ma=b};
I5.prototype.getType=function(){return this.o.xa};function J5(a){this.o=a}
u(J5,H5);n=J5.prototype;n.listen=function(a,b,c,e){var f=this;return this.o.za(a,function(h){return b.call(e||Ya,new I5(h,f))},c)};
n.Hr=function(){throw Error("Not implemented.");};
n.unlisten=function(){throw Error("Not implemented.");};
n.rH=function(){throw Error("Not implemented.");};
n.dispatchEvent=function(){throw Error("Not implemented.");};
n.removeAllListeners=function(){throw Error("Not implemented.");};
n.LD=function(){throw Error("Not implemented.");};
n.ou=function(){throw Error("Not implemented.");};
n.Xq=function(){throw Error("Not implemented.");};
n.hasListener=function(){throw Error("Not implemented.");};
J5.prototype[Cu]=!0;


