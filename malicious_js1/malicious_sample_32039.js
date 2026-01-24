function flip() {
var result = flipString(document.f.original.value.toLowerCase());
document.f.flipped.value = result;
}
function flipString(aString) {
var last = aString.length - 1;
var result = new Array(aString.length)
for (var i = last; i >= 0; --i) {
var c = aString.charAt(i)
var r = flipTable[c]
result[i] = r != undefined ? r : c
}
return result.join('')
}
var flipTable = {
a : '[\u0305\u0305\u0332a\u0305\u0332]',
b : '[\u0305\u0305\u0332b\u0305\u0332]',
c : '[\u0305\u0305\u0332c\u0305\u0332]',
d : '[\u0305\u0305\u0332d\u0305\u0332]',
e : '[\u0305\u0305\u0332e\u0305\u0332]',
f : '[\u0305\u0305\u0332f\u0305\u0332]',
g : '[\u0305\u0305\u0332g\u0305\u0332]',
h : '[\u0305\u0305\u0332h\u0305\u0332]',
i : '[\u0305\u0305\u0332i\u0305\u0332]',
j : '[\u0305\u0305\u0332j\u0305\u0332]',
k : '[\u0305\u0305\u0332k\u0305\u0332]',
l : '[\u0305\u0305\u0332l\u0305\u0332]',
m : '[\u0305\u0305\u0332m\u0305\u0332]',
n : '[\u0305\u0305\u0332n\u0305\u0332]',
o : '[\u0305\u0305\u0332o\u0305\u0332]',
p : '[\u0305\u0305\u0332p\u0305\u0332]',
q : '[\u0305\u0305\u0332q\u0305\u0332]',
r : '[\u0305\u0305\u0332r\u0305\u0332]',
s : '[\u0305\u0305\u0332s\u0305\u0332]',
t : '[\u0305\u0305\u0332t\u0305\u0332]',
u : '[\u0305\u0305\u0332u\u0305\u0332]',
v : '[\u0305\u0305\u0332v\u0305\u0332]',
w : '[\u0305\u0305\u0332w\u0305\u0332]',
x : '[\u0305\u0305\u0332x\u0305\u0332]',
y : '[\u0305\u0305\u0332y\u0305\u0332]',
z : '[\u0305\u0305\u0332z\u0305\u0332]'
}
for (i in flipTable) {
flipTable[flipTable[i]] = i
}