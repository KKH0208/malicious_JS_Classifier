var f = new autoLink();
f.add("Smartphone", "<script type='text/javascript'>
function autoLink(){
    this.keywdHref = new Object();
    this.add = function(keyword, href){
        if(keyword.substr(0,1) != " "){keyword = " " + keyword;}
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
                    var newstr = content.replace(keyword, "<a href='"+href+"'>"+keyword+"</a>", "gi");
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