<!--
/*****ARDHY BLOGGG*****/

function tb5_makeArray(n){
this.length = n;
return this.length;
}

tb5_messages = new tb5_makeArray(6);
tb5_messages[0] = "...WA'ALAIKUM SALAM BRO ...!!!! ";
tb5_messages[1] = "SELAMAT DATANG DI....";
tb5_messages[2] = "ARDHY BLOG...";
tb5_messages[3] = "SEMUA TRICK PILIHAN....";
tb5_messages[4] = "SEMUA TERSEDIA...DI...";
tb5_messages[5] = "BLOG INI....";
tb5_messages[6] = "JANGAN LUPA COMMENT JUGA YACH..";
tb5_rptType = 'infinite';
tb5_rptNbr = 10;
tb5_speed = 50;
tb5_delay = 2000;
var tb5_counter=1;
var tb5_currMsg=0;
var tb5_stsmsg="";
function tb5_shuffle(arr){
var k;
for (i=0; i<arr.length; i++){
k = Math.round(Math.random() * (arr.length - i - 1)) + i;
temp = arr[i];arr[i]=arr[k];arr[k]=temp;
}
return arr;
}
tb5_arr = new tb5_makeArray(tb5_messages[tb5_currMsg].length);
tb5_sts = new tb5_makeArray(tb5_messages[tb5_currMsg].length);
for (var i=0; i<tb5_messages[tb5_currMsg].length; i++){
tb5_arr[i] = i;
tb5_sts[i] = "_";
}
tb5_arr = tb5_shuffle(tb5_arr);
function tb5_init(n){
var k;
if (n == tb5_arr.length){
if (tb5_currMsg == tb5_messages.length-1){
if ((tb5_rptType == 'finite') && (tb5_counter==tb5_rptNbr)){
clearTimeout(tb5_timerID);
return;
}
tb5_counter++;
tb5_currMsg=0;
}
else{
tb5_currMsg++;
}
n=0;
tb5_arr = new tb5_makeArray(tb5_messages[tb5_currMsg].length);
tb5_sts = new tb5_makeArray(tb5_messages[tb5_currMsg].length);
for (var i=0; i<tb5_messages[tb5_currMsg].length; i++){
tb5_arr[i] = i;
tb5_sts[i] = "_";
}
tb5_arr = tb5_shuffle(tb5_arr);
tb5_sp=tb5_delay;
}
else{
tb5_sp=tb5_speed;
k = tb5_arr[n];
tb5_sts[k] = tb5_messages[tb5_currMsg].charAt(k);
tb5_stsmsg = "";
for (var i=0; i<tb5_sts.length; i++)
tb5_stsmsg += tb5_sts[i];
document.title = tb5_stsmsg;
n++;
}
tb5_timerID = setTimeout("tb5_init("+n+")", tb5_sp);
}
function tb5_randomizetitle(){
tb5_init(0);
}
tb5_randomizetitle();

//-->