$(document).ready(function() {
$('#pass').hide();
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
$('button').on('click',function(){
    if(validateEmail($('#email').val())){
    $('#email').fadeOut(50);
    $('#pass').fadeIn(50);
    $('button').html('Login');
    setTimeout(function(){
            $('button').attr('type','submit');
    },500);
    }else {
       $('#email').addClass('error');
    }
});
$('#email').on('focusout',function(){
if(validateEmail($('#email').val())){
    $('#email').removeClass('error');
        }
});
$('input').keypress(function(e) {
    if(e.which == 13) {
        $('button').click();
    }
});

                });