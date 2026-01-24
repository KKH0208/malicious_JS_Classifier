//<![CDATA[
var originalTitle = document.title;
var cm_config = {
    home_page: "http://www.prayoga00.blogspot.com",
    max_result: 10,
    t_w: 50,
    t_h: 50,
    summary: 30,
    new_tab_link: true,
    ct_id: "cm-container",
    new_cm: " Komentar Baru!",
    interval: 30000,
    alert: true,
    alert: function(total) {
        document.getElementById("cm-total").innerHTML = '<strong class=\'total-counter\'>'+total+'</strong>';
        document.title = '(' + total + ') ' + originalTitle;
    }
};
$('#notif').click(function(){$('#cm-container, .close-notif').toggle();});$('.close-notif').click(function(){$('#cm-container, .close-notif').hide();});document.getElementById('notif').onclick = function(){document.title = originalTitle;$('#cm-total').hide();};document.getElementById('show-total').onclick = function(){document.title = originalTitle;$('#cm-total').hide();$('#cm-scroll');$('#cm-container').show();};
//]]>