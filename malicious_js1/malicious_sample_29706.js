function sbtFrmMC991(f) {
		document.querySelector('#mchatBtn').style.display = 'none';
		document.querySelector('#mchatAjax').style.display = '';
		_uPostForm('MCaddFrm', {type:'POST', url:'/mchat/?123549259.832561', } );
	}

	function countMessLength() {
		var message = document.querySelector('#MCaddFrm').mcmessage.value;
		var rst = 300 - message.length;
		if (rst < 0) {
			rst = 0;
			message = message.substr(0, 300);
		}
		document.querySelector('#jeuwu28').innerHTML = rst;
	}

	var tID7174 = -1;
	var tAct7174 = false;

	function setT7174(s) {
		var v = parseInt(s.options[s.selectedIndex].value);
		document.cookie = "mcrtd=" + s.selectedIndex + "; path=/";
		if (tAct7174) {
			clearInterval(tID7174);
			tAct7174 = false;
		}
		if (v > 0) {
			tID7174 = setInterval("document.getElementById('mchatIfm2').src='/mchat/?' + Date.now();", v*1000 );
			tAct7174 = true;
		}
	}

	function initSel7174() {
		var res = document.cookie.match(/(\W|^)mcrtd=([0-9]+)/);
		var s = $("#mchatRSel")[0];
		if (res && !!s) {
			s.selectedIndex = parseInt(res[2]);
			setT7174(s);
		}
		$("#mchatMsgF").on('keydown', function(e) {
			if (e.keyCode == 13 && e.ctrlKey && !e.shiftKey) {
				e.preventDefault();
				sbtFrmMC991();
			}
		});
	}