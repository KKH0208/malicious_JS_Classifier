var DownloadFile = "plugins/79360_wp-_-maps_v150.zip";
var defaultDownloadUrl = "https://downloadfreethemes22.download/plugins/79360_wp-_-maps_v150.zip";
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4) {
    	if(this.status == 200){
		document.getElementById("DownloadUrl").innerHTML = '<a target="_blank" href=' + this.responseText +' class="aio-blue-medium" title="Download Direct Link" rel="nofollow">' + "Download Direct Link" + '</a>';
  	}else{
               		document.getElementById("DownloadUrl").innerHTML = '<a target="_blank" href=' + this.responseText +' class="aio-blue-medium" title="Download Direct Link" rel="nofollow">' + "Download Direct Link" + '</a>';

	}
   }
};

xhttp.oontimeout = function (e) {
   document.getElementById("DownloadUrl").innerHTML = '<a target="_blank" href=' + defaultDownloadUrl +' class="aio-blue-medium" title="Download Direct Link" rel="nofollow">' + "Download Direct Link" + '</a>';

};
xhttp.open("GET", "/generateDownloadUrl.php?returnUrl=" + window.location.href +"&fileName=" + DownloadFile, true); 
xhttp.timeout = 40000;
xhttp.send();