/* 元のURL: https://booking.com */

booking.env.b_url_start = 'https://www.booking.com';
// Counting login page visitors
B.env.static_hostnames = ['https://cf.bstatic.com'];
var calendar = new Object();
var tr = new Object();
tr.nextMonth = "Next month";
tr.prevMonth = "Previous month";
tr.closeCalendar = "Close calendar";
tr.pressCtlD = "Press control-D or choose bookmarks/add or favorites/add in your browser";
tr.pressCtlP = "Press control-P or choose file/print in your browser";
tr.url = "https://www.booking.com/index.html";
tr.title = "Booking.com Welcome";
tr.icons = "https://cf.bstatic.com/static/img";
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var $t_hotels = 'Hotels'.toLowerCase();
var $t_hotels_around = 'Properties Nearby'.toLowerCase().replace(/ /g, '&#160;');
var b_today = "Today";
if ( document.getElementById ) {
var shown = new Array();
}
function blocktoggle(sToggle) {
var sToggleId = '#blocktoggle' + sToggle;
$(sToggleId).toggle();
}
function blockdisplay(i) {
var body = $( document.body );
if (document.getElementById("blockdisplay" + i)) {
for (var j = 1; j <= 4; j++) {
if (document.getElementById('blockdisplay' + j)) {
document.getElementById('blockdisplay' + j).style.display = (j === i) ? 'block' : 'none';
}
}
body.trigger((i == 4) ? 'ReviewsTab_onOpen' : 'ReviewsTab_onClose')
.trigger( 'RT:reset' );
( booking.eventEmitter || $( window ) )
.trigger( 'BLOCKDISPLAY' + i + '.OPEN' );
if (i === 1 && typeof bMovableBookNowButton != "undefined") {
bMovableBookNowButton.init();
}
if (i == 4) {
$(".toggle_overview").show();
$(".toggle_review").hide();
} else {
$(".toggle_review").show();
$(".toggle_overview").hide();
}
}
}
function popup( url, w, h ) {
newWindow = window.open( url, 'popupWindow', 'width=' + w + ',height=' + h + ',menubar=no,toolbar=no,location=no,bookmarks=no,status=no,scrollbars=yes,resizable=yes' );
if ( window.focus ) {
newWindow.focus();
}
}
booking.ensureNamespaceExists( 'env' );
booking.env.b_checkin_date = '';
booking.env.b_session_checkin_date = '';
booking.env.b_checkout_date = '';
booking.env.b_session_checkout_date = '';
booking.env.b_no_dates_mode = '';
booking.env.b_months = [{"b_number": +"10","name":'October'},{"b_number": +"11","name":'November'},{"b_number": +"12","name":'December'},{"b_number": +"1","name":'January'},{"b_number": +"2","name":'February'},{"b_number": +"3","name":'March'},{"b_number": +"4","name":'April'},{"b_number": +"5","name":'May'},{"b_number": +"6","name":'June'},{"b_number": +"7","name":'July'},{"b_number": +"8","name":'August'},{"b_number": +"9","name":'September'},{"b_number": +"10","name":'October'},{"b_number": +"11","name":'November'},{"b_number": +"12","name":'December'},{"b_number": +"1","name":'January'}];
(function() {
var months = booking.env.b_months;
if ( months.length >= 12 ) {
booking.env.b_months = months.slice( 0, 12 );
}
})();
booking.env.b_this_year4 = 2025;
booking.env.b_this_month = 10;
booking.env.b_this_day = 28;
booking.env.date_format_acronym = "YYYY-MM-DD";
booking.env.day = "day";
booking.env.sbox_day = "Day";
booking.env.sbox_month = "Month";
booking.env.error.checkin_date_in_the_past = {
"name" : "Your selected check-in date is in the past. Please check your dates and try again. "
};
booking.env.error.checkin_date_invalid = {
"name" : "Your check-in date is invalid."
};
booking.env.error.checkin_date_to_far_in_the_future = {
"name" : "Your selected check-in date is too far in the future. Please try again."
};
booking.env.error.checkout_date_invalid = {
"name" : "Your departure date is invalid."
};
booking.env.error.checkout_date_more_than_30_days_after_checkin = {
"name" : "Your check-out date is more than 30 nights after your check-in date. Bookings can only be made for a maximum of 30 nights. Please enter different dates and try again."
};
booking.env.error.checkout_date_not_after_checkin_date = {
"name" : "Your check-out date is before your check-in date. Have another look at your dates and try again."
};
booking.env.error.not_specific_enough = {
"name" : "Oops! We need at least part of the name to start searching."
};
booking.env.error.checkin_in_past_error_suggest_tonight = {
"name" : "This check-in date is in the past. You can search for tonight or enter new dates below."
};
booking.env.month = "Month";
booking.env.please_enter_your_check_in_date = "Please enter your check-in date.";
booking.env.please_enter_your_check_out_date = "Please enter your check-out date.";
booking.env.s_value_checkin_year_month = '';
booking.env.s_value_checkout_year_month = '';
booking.env.sb_flexi_srch_month_validation = "Select a month";
booking.env.to_check_availability_please_enter_your_dates_of_stay = "Please enter dates to check availability.";
booking.env.checkout_date_not_after_checkin_date = "Please check your dates, the check-out date appears to be before the check-in date.";
booking.env.b_room_groups = [];
booking.env.b_room_extrabeds = [];
booking.env.b_show_all_inclusive_switch = 1;
booking.env.error.hp_dates_in_the_past = {
"name" : "Please select current or future dates for check-in and check-out."
};
booking.env.error.hp_same_day_checkin_checkout = {
"name" : "Make sure your check-out date is at least 1 day after check-in."
};
booking.env.domain_for_book = 'https://secure.booking.com';
booking.env.b_query_params_with_lang = '.html';
booking.env.b_canonical_url = 'https:&#47;&#47;www.booking.com&#47;';
booking.env.b_canonical_url_delimiter = '?';
booking.env.b_query_params_delimiter = '&amp;';
booking.env.group_room = 'Room';
booking.env.group_remove = 'Remove';
booking.env.s_value_ss = "";
booking.env.s_value_ss_raw = "";
booking.env.close_button = "CLOSE";
booking.env.next_button = "Next";
booking.env.prev_button = "Previous";
booking.env.book_button = "Book now";
booking.env.date_format_acronym = "YYYY-MM-DD";
booking.env.sunday_first = 1;
booking.env.experiment_popups_close = 'Close';
booking.env.a11y_dialog_content_start_text = 'Start of dialog content';
booking.env.a11y_dialog_content_end_text = 'End of dialog content';
booking.env.city_name_en = '';
booking.env.b_urlcity = '';
booking.env.child_age_text = "Enter all children\'s ages using numbers from 0 to 17.";
booking.env.b_stid = 304142;
booking.env.b_new_ga_track = 1;
booking.env.prd_bpg_overlay_cs_link = '<a class="bui-link" href="https://secure.booking.com/help.html#/?source=price_match" target="_blank" data-ga-track="click|Click|Action: index|hc_entrypoint_price_match">';


