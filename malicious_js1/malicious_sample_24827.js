//<![CDATA[
    i=0;
    var recipCount  = 1;
    var maxRecip    = 5;
    function remove_recipient(i){
        $('recipients_name'+i).up(2).remove();
        recipCount--;
        if(recipCount<maxRecip && maxRecip != 0) {
            $('add_recipient_button').show();
            $('max_recipient_message').hide();
        }
        return false;
    }

    function add_recipient(){
        ul = $('recipients_options');
        var li_mail = Element.extend(document.createElement("LI"));
        li_mail.addClassName('fields additional-row');
        li_mail.innerHTML = '<p><a href="delete_email" title="Remove Email" onclick="remove_recipient('+i+'); return false" class="btn-remove">Remove Email"<\/a><\/p>'
        li_mail.innerHTML += '<div class="field"><label for="recipients_name'+i+'" class="required"><em>*<\/em>Name:<\/label><div class="input-box"><input name="recipients[name][]" type="text" class="input-text required-entry" id="recipients_name'+i+'" /><\/div>';
        li_mail.innerHTML += '<div class="field"><label for="recipients_email'+i+'" class="required"><em>*<\/em>Email Address:<\/label><div class="input-box"><input name="recipients[email][]" value="" title="Email Address" id="recipients_email'+i+'" type="text" class="input-text required-entry validate-email" /><\/div><\/div>';
        i++;
        recipCount++;
        if(recipCount>=maxRecip && maxRecip != 0) {
            $('add_recipient_button').hide();
            $('max_recipient_message').show();
        }

        ul.appendChild(li_mail);
    }
//]]>