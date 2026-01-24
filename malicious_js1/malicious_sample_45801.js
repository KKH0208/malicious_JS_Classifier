window.onload = function() {
    imagens = new Image();
    imagens.src="http://3.bp.blogspot.com/-URFO5RtdpdY/UWwfxbxKmoI/AAAAAAAAAlo/JcQK38f8eMo/s1600/GhostIRLSniperRifleRender.png";
    imagens.src="02.PNG";
    imagens.src="03.PNG";
    imagens.src="04.PNG";
    imagens.src="05.PNG";
    }
    function changeOpac(opacity, id) {
    var object = document.getElementById(id).style;
    object.opacity = (opacity / 100);
    object.MozOpacity = (opacity / 100);
    object.KhtmlOpacity = (opacity / 100);
    object.filter = "alpha(opacity=" + opacity + ")";
    }
    function blendimage(divid, imageid, imagefile, millisec) {
    var speed = Math.round (millisec / 100);
    var timer = 0;
    document.getElementById (divid).style.backgroundImage = "url(" + document.getElementById(imageid).src + ")";
    changeOpac(0, imageid);
    document.getElementById(imageid).src = imagefile;
    for(i = 0; i <= 100; i++) {
    setTimeout("changeOpac(" + i + ",'" + imageid + "')",(timer * speed));
    timer++;
    }
    }