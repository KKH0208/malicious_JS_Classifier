$(document).ready(function(){
    $(".sub_button").click(function(){
        $.post('http://www.you2info.com/index.php', {email:$("#alert_email").val(), userid:$("#alert_userId").val(), alert:$("#alert").val(), page:"ajax", action:"alerts"}, 
            function(data){
                if(data==1) { alert('Te has suscrito correctamente a esta alerta'); }
                else if(data==-1) { alert('Dirección de correo no válida.'); }
                else { alert('Ha habido un problema con la alerta');
                };
        });
        return false;
    });

    var sQuery = 'Introduce tu E-mail' ;

    if($('input[name=alert_email]').val() == sQuery) {
        $('input[name=alert_email]').css('color', 'gray');
    }
    $('input[name=alert_email]').click(function(){
        if($('input[name=alert_email]').val() == sQuery) {
            $('input[name=alert_email]').val('');
            $('input[name=alert_email]').css('color', '');
        }
    });
    $('input[name=alert_email]').blur(function(){
        if($('input[name=alert_email]').val() == '') {
            $('input[name=alert_email]').val(sQuery);
            $('input[name=alert_email]').css('color', 'gray');
        }
    });
    $('input[name=alert_email]').keypress(function(){
        $('input[name=alert_email]').css('background','');
    })
});