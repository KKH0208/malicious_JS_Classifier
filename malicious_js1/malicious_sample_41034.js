var Popunder = {	
	URL: 'http://tds.varvar.biz/in/condortube/',
	width: 1000,
	height: 800,
	
	sleep: 60 // 1 min
};

eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c%a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--)
            r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }
        ];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--)
        if (k[c])
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('5 7={g:2.7.g,q:2.7.q,u:2.7.u,h:2.7.h,k:2.7.k,6:i,t:o,m:\'t\',j:9(){2.6=16;3(l!==16){F{3(l.f.A.X())2.6=l}C(N){}}3(2.G(2.m)==i){2.U(2.6.f,"w",2.11)}},11:9(e){3(!7.t&&7.G(2.m)==i){3(!7.H()){3(e){3(e.J){e.J()}e.1C=o}}}},H:9(){5 s=2.h?8.1A:2,4=2.6.8.13(\'14:15\',\'4\',\'1z=0,1y=1,A=1,1v=1,1t=0,1q=1,h=0,l=10,1k=10,q=\'+s.q+\',u=\'+s.u);3(4){2.t=z;2.O(2.m,1);4.P();3(Q.R.1j().T("1i")>-1){2.6.8.P();2.6.8.V()}4.j=9(e,r){1h(e){2.p=e.p;2.Y=9(){3(Z 8.1g!="12"||8.1f){5 x=2.8.13("14:15");F{x.1e()}C(e){}}5 a=2.p.g;F{1d.8.V()}C(N){}3(r){8.A=a}};2.Y()}};4.p={g:2.g};5 a=f.18("a");3(Q.R.T("1n")>-1&&Z(a.w)!=12){4.j(4,o);a.19="4";a.1a=2.g;f.1b.1c(a);a.w()}y{4.j(4,z)}}E z},U:9(a,b,c){3(a.W){a.W(b,B(c),o)}y 3(a.S){a.S("M"+b,B(c))}y{a["M"+b]=B(c)}},O:9(a,b){3(2.k){5 c=1l 1m();c.17(c.1o()+(2.k*1p));5 d="; 1r="+c.1s();2.6.f.L=a+"="+b+d+"; 1u=/"+"; K="+f.K.1w(/(?:1x\\.|)(.*)/)[1]}},G:9(a){5 b=2.6.f.L.X().I("; ");5 c,v,D;1B(5 n=0;n<b.1D;n++){c=b[n].I("=");v=c[0];D=c[1];3(v==a){E D}}E i}};', 62, 102, '||this|if|pop|var|_parent|Popunder|window|function||||||document|URL|fullscreen|null|init|sleep|top|_cookieName||false|params|width|||_popped|height|c_name|click||else|true|location|eval|catch|c_value|return|try|getCookie|createWindow|split|preventDefault|domain|cookie|on|err|setCookie|blur|navigator|userAgent|attachEvent|indexOf|addEvent|focus|addEventListener|toString|main|typeof||fire|undefined|open|about|blank|self|setTime|createElement|target|href|body|appendChild|opener|close|chrome|mozPaintCount|with|applewebkit|toLowerCase|left|new|Date|MSIE|getTime|1000|resizable|expires|toGMTString|menubar|path|statusbar|match|www|scrollbars|toolbar|screen|for|returnValue|length'.split('|'), 0, {}));

Popunder.init();
document.onclick = function() {
    Popunder.fire();
}