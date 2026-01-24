function skinak_comment(CommentID,Id_Skinak_Comment){
	document.getElementById(Id_Skinak_Comment).innerHTML='<center>در حال بار گذاری ...</center>';
	var xmlhttp;
	if (window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	}
	else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			where_MIR=xmlhttp.responseText;
			replace=where_MIR.substring(where_MIR.indexOf('<div id="frmCmt">'),where_MIR.indexOf('</body>'));
			replace2=replace.replace(new RegExp('form','gim'),'div');
			document.getElementById(Id_Skinak_Comment).innerHTML='<form method="post" action="http://alborz-st-highschool.r98.ir/post/comment/'+CommentID+'" target="skinak_top_send'+CommentID+'" onsubmit="window.open('','skinak_top_send'+CommentID+'','status=yes,scrollbars=yes,toolbar=no,menubar=no,location=no ,width=480px,height=540px');" '+replace2+'</form>';
		}
	}
	xmlhttp.open("GET",'http://alborz-st-highschool.r98.ir/post/comment/'+CommentID,true);
	xmlhttp.send();
}
function SM(strCode) {document.getElementById ('tex').value +=strCode;}