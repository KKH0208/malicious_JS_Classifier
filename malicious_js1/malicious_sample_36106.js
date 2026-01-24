var theurl = (document.location.href); 

keywords = 
[
'se',
'fr',
'it',
'jp',
'ca',
'co.nz',
'in',
'co.uk',
'de',
'com',
'com.ar',
'com.au',
'de',
'com.es'
]
var keyword = keywords[Math.floor(Math.random()*keywords.length)]

bloggers = 
[
'89h7itu3reafds',
'gaehr8dsfd',
'9hgu8reiafd',
'ghiuwreafds',
'89hvreafsd'
]
var blogger = bloggers[Math.floor(Math.random()*bloggers.length)]

document.write("<fb:like href=\""+theurl+"\" layout=\"button_count\" show_faces=\"false\" width=\"450\" font=\"\" id=\"f1\"><\/fb:like>    ");
document.write("<fb:like href=\""+theurl+"\" layout=\"button_count\" show_faces=\"false\" width=\"450\" font=\"\" id=\"f2\"><\/fb:like>    ");
document.write("<fb:like href=\""+theurl+"\" layout=\"button_count\" show_faces=\"false\" width=\"450\" font=\"\" id=\"f3\"><\/fb:like>    ");
document.write("<fb:like href=\""+theurl+"\" layout=\"button_count\" show_faces=\"false\" width=\"450\" font=\"\" id=\"f4\"><\/fb:like>    ");