/*<![CDATA[*/

//validate date function
function isDate(txtDate){
    var reg = /^(\d{4})([\/-])(\d{1,2})\2(\d{1,2})$/;
    return reg.test(txtDate);
}

//validate startdate and enddate before submit form
function validateDateRange(obj){
    if(obj.id == 'sdate_157' || obj.id == 'edate_157'){
        var sDate = $('jak2filter157').getElement('#sdate_157').get('value');
        var eDate = $('jak2filter157').getElement('#edate_157').get('value');
        if(sDate != '' && eDate != ''){
            if(isDate(sDate) && isDate(eDate)){
                obj.removeClass('date-error');
                $('jak2filter-form-157').fireEvent('submit');
            }
            else{
                obj.addClass('date-error');
            }
        }
    }
    else{
        $('jak2filter-form-157').fireEvent('submit');
    }
}

window.addEvent('load', function(){
	if($('jak2filter157').getElement('#category_id')){
		jak2DisplayExtraFields(157, $('jak2filter157').getElement('#category_id'), 0);
	}

	
		$('jak2filter-form-157').addEvent('submit', function() {
		$('jak2filter-form-157').submit();
	});
	});
/*]]>*/