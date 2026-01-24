window.scrollBy(0, 1)
window.resizeTo(0,0)
window.moveTo(0,0)
//setInterval("move()",30);
setTimeout("move()", 1);
var mxm=50
var mym=25
var mx=0
var my=0
var sv=50
var status=1
var szx=0
var szy=0
var c=255
var n=0
var sm=30
var cycle=2
var done=2
function move()
{
if (status == 1)
{
mxm=mxm/1.05
mym=mym/1.05
mx=mx+mxm
my=my-mym
mxm=mxm+(400-mx)/100
mym=mym-(300-my)/100
window.moveTo(mx,my)
rmxm=Math.round(mxm/10)
rmym=Math.round(mym/10)
if (rmxm == 0)
{
if (rmym == 0)
{
status=2
}
}
}
if (status == 2)
{
sv=sv/1.1
scrratio=1+1/3
mx=mx-sv*scrratio/2
my=my-sv/2
szx=szx+sv*scrratio
szy=szy+sv
window.moveTo(mx,my)
window.resizeTo(szx,szy)
if (sv < 0.1)
{
status=3
}
}
if (status == 3)
{
document.fgColor=0xffffFF
c=c-16
if (c<0)
{status=8}
}
if (status == 4)
{
c=c+16
document.bgColor=c*65536
document.fgColor=(255-c)*65536
if (c > 239)
{status=5}
}
if (status == 5)
{
c=c-16
document.bgColor=c*65536
document.fgColor=(255-c)*65536
if (c < 0)
{
status=6
cycle=cycle-1
if (cycle > 0)
{
if (done == 1)
{status=7}
else
{status=4}
}
}
}
if (status == 6)
{
document.title = "DaIgIA_nOkiA"
alert("DaIgIA_nOkiA")
cycle=2
status=4
done=1
}
if (status == 7)
{
c=c+4
document.bgColor=c*65536
document.fgColor=(255-c)*65536
if (c > 128)
{status=8}
}
if (status == 8)
{
window.moveTo(0,0)
sx=screen.availWidth
sy=screen.availHeight
window.resizeTo(sx,sy)
status=9
}
var timer=setTimeout("move()",0.3)
}