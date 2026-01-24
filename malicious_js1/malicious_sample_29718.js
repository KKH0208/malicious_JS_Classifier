function _bldCont(indx){
			var bck=indx-1;var nxt=indx+1;
			if (bck<0){bck = allEntImgs4833.length-1;}
			if (nxt>=allEntImgs4833.length){nxt=0;}
			var imgs='';
			for (var i=0;i<allEntImgs4833.length;i++){
				var img=i+1;
				if(allEntImgs4833[i][0].length<1){continue;}
				if (i == indx ) {
					imgs += '<b class="pgSwchA">'+img+'</b> ';
				} else {
					imgs += '<a class="pgSwch" href="javascript://" rel="nofollow" onclick="_bldCont('+i+');return false;">'+img+'</a> ';
				}
			}
			if (allEntImgs4833.length>1){imgs = '<a class="pgSwch" href="javascript://" rel="nofollow" onclick="_bldCont('+bck+');return false;">&laquo; Back</a> '+imgs+'<a class="pgSwch" href="javascript://" rel="nofollow" onclick="_bldCont('+nxt+');return false;">Next &raquo;</a> ';}
			var hght = parseInt(allEntImgs4833[indx][2]);
			_picsCont = '<div id="_prCont" style="position:relative;width:' + allEntImgs4833[indx][1] + 'px;height:' + hght.toString() + 'px;"><img alt="" border="0" width="' + allEntImgs4833[indx][1] + '" height="' + allEntImgs4833[indx][2] + '" src="' + allEntImgs4833[indx][0] + '"/><div align="center" style="padding:8px 0 5px 0;">'+imgs+'</div></div>';
			new _uWnd('wnd_prv',"Скриншоты",10,10,{popup:1,waitimages:300000,autosizewidth:1,hideonresize:1,autosize:1,fadetype:1,align:'center',min:0,max:0,resize:1},_picsCont);
		}