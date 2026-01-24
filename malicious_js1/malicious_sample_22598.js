//<![CDATA[

var message = new Array() // leave this as is

message[0] = "Anonymous";

var reps = 2

var speed = 100

var p=message.length;
var T="";
var C=0;
var mC=0;
var s=0;
var sT=null;
if(reps<1)reps=1;
function doTheThing(){
T=message[mC];
A();}
function A(){
s++
if(s>9){s=1}

if(s==1){document.title='[H=====] '+T+' [=====H]'}
if(s==2){document.title='[=A====] '+T+' [====A=]'}
if(s==3){document.title='[==C===] '+T+' [===C==]'}
if(s==4){document.title='[===K==] '+T+' [==K===]'}
if(s==5){document.title='[====E=] '+T+' [=E====]'}
if(s==6){document.title='[=====R] '+T+' [R=====]'}
if(s==7){document.title='[====E=] '+T+' [=E====]'}
if(s==8){document.title='[===K==] '+T+' [==K===]'}
if(s==9){document.title='[==C===] '+T+' [===C==]'}
if(s==10){document.title='[=A====] '+T+' [====A=]'}
if(s==11){document.title='[H=====] '+T+' [=====H]'}
if(C<(15*reps)){
sT=setTimeout("A()",speed=100);
C++
}else{
C=0;
s=0;
mC++
if(mC>p-1)mC=0;
sT=null;
doTheThing();}}
doTheThing();
//]]>