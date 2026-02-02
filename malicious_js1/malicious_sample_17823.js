var marqueeContent = new Array();

marqueeContent[0]='<b><font COLOR:#888;>最新公告 /</font></b> <A title="重庆靓丽义齿2018新年招聘" href="/content/?183.html" target="_blank">重庆靓丽义齿2018新年招聘</A> ';


marqueeContent[1]='<b><font COLOR:#888;>最新新闻 /</font></b> <A title="重庆靓丽义齿2018新年招聘" href="/content/?183.html" target="_blank">重庆靓丽义齿2018新年招聘</A> ';


marqueeContent[2]='<b><font COLOR:#888;>最新招聘 /</font></b> <A title="重庆靓丽义齿2018新年招聘" href="/content/?183.html" target="_blank">重庆靓丽义齿2018新年招聘</A> ';


marqueeContent[3]='<b><font COLOR:#888;>新闻动态 /</font></b> <A title="重庆靓丽义齿2018新年招聘" href="/content/?183.html" target="_blank">重庆靓丽义齿2018新年...</A>2018-03-17 ';


var marqueeInterval=new Array(); //定义一些常用而且要经常用到的变量
var marqueeId=0;
var marqueeDelay=2000;
var marqueeHeight=30;
//接下来的是定义一些要使用到的函数
function initMarquee() {
    var str=marqueeContent[0];
    document.write('<div id=marqueeBox style="overflow:hidden;height:'+marqueeHeight+'px" onmouseover="clearInterval(marqueeInterval[0])" onmouseout="marqueeInterval[0]=setInterval(\'startMarquee()\',marqueeDelay)"><div>'+str+'</div></div>');
    marqueeId++;
    marqueeInterval[0]=setInterval("startMarquee()",marqueeDelay);
    }
function startMarquee() {
    var str=marqueeContent[marqueeId];
        marqueeId++;
    if(marqueeId>=marqueeContent.length) marqueeId=0;
    if(marqueeBox.childNodes.length==1) {
        var nextLine=document.createElement('DIV');
        nextLine.innerHTML=str;
        marqueeBox.appendChild(nextLine);
        }
    else {
        marqueeBox.childNodes[0].innerHTML=str;
        marqueeBox.appendChild(marqueeBox.childNodes[0]);
        marqueeBox.scrollTop=0;
        }
    clearInterval(marqueeInterval[1]);
    marqueeInterval[1]=setInterval("scrollMarquee()",20);
    }
function scrollMarquee() {
    marqueeBox.scrollTop++;
    if(marqueeBox.scrollTop%marqueeHeight==(marqueeHeight-1)){
        clearInterval(marqueeInterval[1]);
        }
    }
initMarquee();