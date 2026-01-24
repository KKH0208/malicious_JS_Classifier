//
// Uncomment desired date format.
//
var sFormat = 1; // January 1, 1970
//var sFormat = 2; // January 01, 1970; not implemented yet
//var sFormat = 3; // Jan. 1, 1970; not implemented yet
//var sFormat = 4; // Jan. 01, 1970; not implemented yet
//var sFormat = 5; // Friday, 29 April, 2005
//var sFormat = 6; // Friday, April 29, 2005
// ----- STOP EDITING -----
var aDayLongNames = new Array(
'Sunday',
'Monday',
'Tuesday',
'Wednesday',
'Thursday',
'Friday',
'Saturday'
);
var aMonthLongNames = new Array(
'January',
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December'
);
var oToday = new Date();
var iDay = oToday.getDay();
var iDate = oToday.getDate();
var iMonth = oToday.getMonth();
var iYear = oToday.getFullYear();
var sDate = null;
switch (sFormat) {
case 1:// January 1, 1970
sDate = aMonthLongNames[iMonth] + ' ' + iDate + ', ' + iYear;
break;
case 2:
break;
case 3:
break;
case 4:
break;
case 5: // Friday, 29 April, 2005
sDate = aDayLongNames[iDay] + ', ' + iDate + ' ' + aMonthLongNames[iMonth] + ', ' + iYear;
break;
case 6: // Friday, April 29, 2005
sDate = aDayLongNames[iDay] + ', ' + aMonthLongNames[iMonth] + ' ' + iDate + ', ' + iYear;
break;
default:
}
document.write(sDate);