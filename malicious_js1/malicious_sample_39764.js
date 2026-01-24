//<![CDATA[
      function removeHtmlTag(strx,chop){ 
        if(strx.indexOf("<")!=-1)
        {
          var s = strx.split("<"); 
          for(var i=0;i<s.length;i++){ 
            if(s[i].indexOf(">")!=-1){ 
              s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length); 
            } 
          } 
          strx =  s.join(""); 
        }
        chop = (chop < strx.length-1) ? chop : strx.length-2; 
        while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++; 
        strx = strx.substring(0,chop-1); 
        return strx+'...'; 
      }
      function createSummaryAndThumb(pID){
        var div = document.getElementById(pID);
        var imgtag = "";
        var img = div.getElementsByTagName("img");
        var summ = summary_noimg;
        if(img.length>=1) {	
          imgtag = '<div class="post-thumbnail"><a><img style="width: 150px;height: 130px;" src="'+img[0].src+'" class="attachment-thumbnail" /></a></div>';
          summ = summary_img;
        }
        var summary = imgtag + '<div class="entry"><p>' + removeHtmlTag(div.innerHTML,summ) + '</p>';
        div.innerHTML = summary;
      }
      //]]>