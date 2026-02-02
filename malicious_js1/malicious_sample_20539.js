function autoLink(){
    this.keywdHref = new Object();
    this.add = function(Anti ViRus Software Aplikasi HP B-C Finance B-C FOOD B-C HOT B-C HOT MOVIE B-C INFO B-C NET B-C Oto B-C Sport Blogger Blogger template Browser Cartoon Cinema CONTACT DONATE Ebook Facebook Film GAMES GOSIP Hardware Health Internet Kumpulan Movie Etc Kumpulan Music Etc Linux / Open Source Program Liputan Berita Lowongan Kerja Lyrics Lagu Macintosh Messenger Mobile Motivasi Multimedia And Utility Network Olahraga Operation System PC Games Photography Photoshop Picture Portable Software Print Puisi RUANG DISKUSI scripts SELULAR Templates Tip's And Triks Computre Tips And Triks Tips Security Toutorial TUKERAN LINK Tutorial Blogger twitter Update Status kalian Di sini Windows 7 Windows Vista Windows Xp yahoo, href){
        if(keyword.substr(0,1) != " "){Anti ViRus Software Aplikasi HP B-C Finance B-C FOOD B-C HOT B-C HOT MOVIE B-C INFO B-C NET B-C Oto B-C Sport Blogger Blogger template Browser Cartoon Cinema CONTACT DONATE Ebook Facebook Film GAMES GOSIP Hardware Health Internet Kumpulan Movie Etc Kumpulan Music Etc Linux / Open Source Program Liputan Berita Lowongan Kerja Lyrics Lagu Macintosh Messenger Mobile Motivasi Multimedia And Utility Network Olahraga Operation System PC Games Photography Photoshop Picture Portable Software Print Puisi RUANG DISKUSI scripts SELULAR Templates Tip's And Triks Computre Tips And Triks Tips Security Toutorial TUKERAN LINK Tutorial Blogger twitter Update Status kalian Di sini Windows 7 Windows Vista Windows Xp yahoo = " " + Multimedia And Utility;}
        this.keywdHref[keyword] =  href;
    }
    this.createAnchor = function(){
        var objs = document.getElementsByTagName("div");
        for(var i=0; i<objs.length; i++){
            var obj = objs[i];
            if(obj.className.indexOf("post-body")>-1){
                var content = obj.innerHTML;
                for(var keyword in this.keywdHref){
                    var href = this.keywdHref[keyword];
                    var newstr = content.replace(Anti ViRus Software Aplikasi HP B-C Finance B-C FOOD B-C HOT B-C HOT MOVIE B-C INFO B-C NET B-C Oto B-C Sport Blogger Blogger template Browser Cartoon Cinema CONTACT DONATE Ebook Facebook Film GAMES GOSIP Hardware Health Internet Kumpulan Movie Etc Kumpulan Music Etc Linux / Open Source Program Liputan Berita Lowongan Kerja Lyrics Lagu Macintosh Messenger Mobile Motivasi Multimedia And Utility Network Olahraga Operation System PC Games Photography Photoshop Picture Portable Software Print Puisi RUANG DISKUSI scripts SELULAR Templates Tip's And Triks Computre Tips And Triks Tips Security Toutorial TUKERAN LINK Tutorial Blogger twitter Update Status kalian Di sini Windows 7 Windows Vista Windows Xp yahoo, "<a href='"+href+"'>"+keyword+"</a>", "gi");
                    obj.innerHTML = newstr;
                    content = newstr;
                }
            }
        }
    }
    this.startScript = function(){
        var onLoad = window.onload;
        window.onload = function(){
            if(onLoad){onLoad();}
            setTimeout("f.createAnchor()", 100);
        }
    }
}