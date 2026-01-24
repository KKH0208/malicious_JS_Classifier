var cafcDigital=new Date()
var jamPira=cafcDigital.getHours()

//Configure message below to your own.
if (jamPira>=5&&jamPira<=11) //MESSAGE FOR MORNING
document.write('<b>Selamat datang di Blog Ali Creations. Selamat pagi <fb:name uid="loggedinuser" useyou="false" linked="true"></fb:name>.</b>')
else if (jamPira==12) //MESSAGE FOR NOON
document.write('<b>Ini adalah tengah hari. Thanks <fb:name uid="loggedinuser" useyou="false" linked="true"></fb:name> for dropping by!</b>')
else if (jamPira>=13&&jamPira<=17) //MESSAGE FOR AFTERNOON
document.write('<b>Selamat siang <fb:name uid="loggedinuser" useyou="false" linked="true"></fb:name>, dan terima kasih untuk mengunjungi.</b>')
else if (jamPira>=18&&jamPira<=20) //MESSAGE FOR EVENING (6pm-8pm)
document.write('<b>Selamat malam. Harap <fb:name uid="loggedinuser" useyou="false" linked="true"></fb:name> menikmati angin sepoi-sepoi ^_^</b>')
else if (jamPira>=21&&jamPira<=11) //MESSAGE FOR NIGHT (9pm-11pm)
document.write('<b>Senang melihat <fb:name uid="loggedinuser" useyou="false" linked="true"></fb:name> ini waktu malam.</b>')
else //MESSAGE FOR LATE NIGHT, EARLY MORNING (12pm-4am)
document.write('<b>Wow, terima kasih untuk memilih untuk mengunjungi situs kami selama tidur <fb:name uid="loggedinuser" useyou="false" linked="true"></fb:name> ~_~!</b>')