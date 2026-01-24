var isLogin = 0;
var anonymousHistoryFavorite =  3;

function get_sort_storage_history(histories) {
    var obj = {};
    var arr = [];
    var entries = Object.entries(histories || {} );
    entries.forEach( function(entry) {
        var nameTime = entry[1].split(',');
        entry[2] = nameTime[2] || 0;
        arr.push(entry);
    } );
    arr.sort( function(a, b){ return b[2] - a[2];});
    arr = arr.slice(0, anonymousHistoryFavorite - 1);
    arr.forEach( function(item) {
        obj[item[0]] = item[1]
    })
    return obj;
}
// function browsing_history_set
function get_storage_history() {
    var browsing_history_on = localStorage.getItem('browsing_history_on');
	if ( !browsing_history_on ) {
		var browsing_history = {};
		localStorage.setItem("browsing_history", JSON.stringify(browsing_history));
	}
    browsing_history = JSON.parse(localStorage.getItem("browsing_history"));
    var keys = Object.keys( browsing_history || {} );
    if( isLogin || keys.length < anonymousHistoryFavorite ) {
        return browsing_history;
    }
    browsing_history = get_sort_storage_history( browsing_history );
    return browsing_history;
}