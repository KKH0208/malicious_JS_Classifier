<!-- 
function Button1.onclick() {
z0=new String(document.location)
z=z0.indexOf("file:")
if (z>=0) { 
if (confirm("Тест работает только с сайта, или его можно приобрести, заказав компакт-диск. Открыть страницу для заказа компакт-диска?")) {
navigate("http://psbatishev.narod.ru/zakaz.htm");
}
document.all.prot.value="Закажите компакт-диск прямо сейчас! http://psbatishev.narod.ru/zakaz.htm"
}
else {
var a=0, i=0, l="", kv=8, v=kv
var k=new Array(1,5,3,3,2,1,4,3)
for (i = 0; i < kv; i++) a+=document.all("R"+i+k[i]).checked
v-=a
var o=Math.round (4*a/kv+1)
var t=confirm("Вы уверены?")
switch (o) {
case 5: l="ов"; break
case 1: break
default: l="а"}
if (t) {
alert("Ваша оценка " + o + " балл" + l + ".")
xdate=new Date()
xs=new String(xdate)
xs=xs.slice(11,19)
document.all.prot.value=prot.value+"Оценка: "+o+", ошибок: "+v+", время: "+xs+".\n"
}
}
}
// -->