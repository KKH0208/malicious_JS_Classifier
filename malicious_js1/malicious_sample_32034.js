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
a : '\u24D0',
b : '\u24D1',
c : '\u24D2',
d : '\u24D3',
e : '\u24D4',
f : '\u24D5',
g : '\u24D6',
h : '\u24D7',
i : '\u24D8',
j : '\u24D9',
k : '\u24DA',
l : '\u24DB',
m : '\u24DC',
n: '\u24DD',
o : '\u24DE',
p : '\u24DF',
q : '\u24E0',
r : '\u24E1',
s : '\u24E2',
t : '\u24E3',
u : '\u24E4',
v : '\u24E5',
w : '\u24E6',
x: '\u24E7',
y : '\u24E8',
z : '\u24E9',
1 : '\u2776',
2 : '\u2777',
3 : '\u2778',
4 : '\u2779',
5 : '\u277A',
6 : '\u277B',
7 : '\u277C',
8 : '\u277D',
9 : '\u277E',
0 : '\u24FF',
}
for (i in flipTable) {
flipTable[flipTable[i]] = i
}