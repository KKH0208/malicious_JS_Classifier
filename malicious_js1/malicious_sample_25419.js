aikanMouseOver();
    //右侧推荐产品Js
    function aikanMouseOver(){
     KK(".rightAikanTab dt").each(function (obj, index) {
           
            obj.find("a").bind("mouseover", function (KEvent) {
                obj.parent(1).addClass("hover");
                KEvent.stopPropagation();
            });
            obj.parent(1).bind("mouseover", function () {
                obj.parent(2).find("dl").removeClass("selected");
                obj.parent().addClass("selected hover");
            });
            obj.parent(1).bind("mouseout", function () {
                obj.parent(1).removeClass("hover");
            });
        });

        /*
        KK(".rightAikanTab dl").bind("mouseover",function(){
        K(this).parent().find("dl").removeClass("selected");
        K(this).addClass("selected");
        });
        KK(".rightAikanTab dl").bind("mouseover",function(){
        if(K(this).hasClass("selected")){
        K(this).addClass("hover");
        }
        });
        KK(".rightAikanTab dl").bind("mouseout",function(){
        if(K(this).hasClass("hover")){
        K(this).removeClass("hover");
        }
        });*/
       
    }
    
    $(function () {
        document.getElementById("bdshell_js").src = "http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=" + Math.ceil(new Date() / 3600000);
    });