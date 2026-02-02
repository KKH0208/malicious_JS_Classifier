//<![CDATA[
    var originalTitle = document.title;
    var cm_config = {
      home_page: 'pesagennn.blogspot.com',
        max_result: 18,
        t_w: 50,
        t_h: 50,
        summary: 9999,
        new_tab_link: false,
        ct_id: "comments-container",
        new_cm: " Komentar Baru!",
        interval: 30000,
        alert: true,
        alert: function(total) {
            document.getElementById("show-total").innerHTML = '<strong class=\'total-show\'>'+total+'</strong>';
            document.title = '(' + total + ') ' + originalTitle;
        }
    };
    $('#notif').click(function(){$("#cm-wrapper").css({right: "0px"});$("#bg, #notif2").show();$("#notif").hide();});$('#notif2').click(function(){$("#cm-wrapper").css({right: "-381px"});$("#bg, #notif2").hide();$("#notif").show();});$('#bg').click(function(){$("#cm-wrapper").css({right: "-381px"});$("#bg, #notif2").hide();$("#notif").show();});document.getElementById('notif').onclick = function() {document.title = originalTitle;$('#show-total').hide();};document.getElementById('show-total').onclick = function() {document.title = originalTitle;$('#show-total').hide();$("#cm-wrapper").css({right: "0px"});$("#bg").show();};setTimeout(function() {$('.myframe').each(function() {$(this).replaceWith('<iframe class="myframe" src="' + $(this).data('src') + '" allowfullscreen="allowfullscreen"></iframe>');});}, 5000);
    setTimeout(function() {
            $('.jsfiddle-demo').each(function() {
            $(this).replaceWith('<iframe class="jsfiddle-demo loader" src="' + $(this).data('src') + '" allowfullscreen="allowfullscreen"></iframe>');
        });
    }, 5000);
    //]]>