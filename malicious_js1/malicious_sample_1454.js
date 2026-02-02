$(window).ready(function(){
        var i = 1;
        var n = $('.ser-icon .process .item').length;
        var len = $('.ser-icon .process').width()/n;
        var pos = new WebKitCSSMatrix($('.ser-icon .process').css('transform'));
        //console.log('len: '+len+' pos: '+pos.m41);
        $('.ser-icon').removeClass('unsee');
        function nextFrame() {
            if(i < n) {
                i++;
                var pos2=new WebKitCSSMatrix($('.ser-icon .process').css('transform'));
                $('.ser-icon .process').css('transform','translateX('+(pos2.m41-len)+'px)');
                // Continue the loop in 1s
                setTimeout(nextFrame, 800);
            }
            else{
                $('.ser-icon').addClass('unsee');
                i=1;
                $('.ser-icon .process').css('transform','translateX('+(pos.m41)+'px)');
                setTimeout(beginFrame, 2000);
            }
        }
        // Start the loop
        $(".form-callback .close i").click(function(event) {
            $(".form-callback").slideUp('400');
        });
        $(".form-callback .content input").keydown(function(e) {
            /* Act on the event */
            var code = e.keyCode || e.which;
            if(($(this).val().length > 10 || !(code>=48 && code <=57)) && $.inArray(code, [8,37,38,39,40,46])==-1) event.preventDefault();
        });
        $(".form-callback .content button").click(function(event) {
            if($(this).siblings('input').val().length < 10) {alert("Vui lòng điền số điện thoại hợp lệ!"); return;}
            $(this).parents(".form-callback").find(".close i").trigger('click');
            $.post('/ajx/ajx.php', {act: 'CALLING_BACK',phone: $(this).siblings('input').val()}, function(data, textStatus, xhr) {
                //console.log(data);
                alert("Gửi yêu cầu thành công!");
            });
        });
        function beginFrame(){
            $('.ser-icon').removeClass('unsee');
            setTimeout(nextFrame, 900);
        }
        setTimeout(beginFrame, 2000);
        $('.close-icon').click(function(event) {
            /* Act on the event */
            $('.element').toggleClass('unsee');
        });
        $('.main-widget').removeClass('hide');
    });