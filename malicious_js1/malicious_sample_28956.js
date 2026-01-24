<!--
	function CheckLogin(){
	  var taget_obj = document.getElementById('_ajax_feedback');
	  myajax = new DedeAjax(taget_obj,false,false,'','','');
	  myajax.SendGet2("/member/ajax_feedback.php");
	  DedeXHTTP = null;
	}
	function postBadGood(ftype,fid)
	{
		var taget_obj = document.getElementById(ftype+fid);
		var saveid = GetCookie('badgoodid');
		if(saveid != null)
		{
			 var saveids = saveid.split(',');
			 var hasid = false;
			 saveid = '';
			 j = 1;
			 for(i=saveids.length-1;i>=0;i--)
			 {
			 	  if(saveids[i]==fid && hasid) continue;
			 	  else {
			 	  	if(saveids[i]==fid && !hasid) hasid = true;
			 	  	saveid += (saveid=='' ? saveids[i] : ','+saveids[i]);
			 	  	j++;
			 	  	if(j==10 && hasid) break;
			 	  	if(j==9 && !hasid) break;
			 	  }
			 }
	     if(hasid) { alert('您刚才已表决过了喔！'); return false;}
	     else saveid += ','+fid;
			 SetCookie('badgoodid',saveid,1);
		}
		else
		{
			SetCookie('badgoodid',fid,1);
		}
		//document.write("feedback.php?action="+ftype+"&fid="+fid);
		//return;
	  myajax = new DedeAjax(taget_obj,false,false,'','','');
	  myajax.SendGet2("/plus/feedback.php?aid="+fid+"&action="+ftype+"&fid="+fid);
	  DedeXHTTP = null;
	}
-->