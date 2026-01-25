/* 元のURL: https://amazon.de */
function getEventIds(widgets, suffix) {
var eventIds = [];
for (var i = 0; i < widgets.length; i++) {
eventIds.push(widgets[i] + suffix);
}
return eventIds;
}
window.P && P.when('atfWidgetComponent', 'cf').execute(function(atfWidgetComponent) {
var atfWidgets = atfWidgetComponent.getWidgets() || [],
atfEvents = window.atfEvents || getEventIds(atfWidgets, '-visible'),
unOccuredAfEventIds = GWI.getUnoccuredEvents(atfEvents),
counter = "missingAFInstrumentAtEndOfPageLayout";
if (unOccuredAfEventIds.length) {
var message = 'Missing AF at the end of Page Layout due to ' +
unOccuredAfEventIds.length +
' unoccurred ATF event IDs - ' +
JSON.stringify(unOccuredAfEventIds);
window.GWI && GWI.util && GWI.util.debugLog(message, false);
if (typeof ue == 'object' && typeof(ue.count) == 'function') {
ue.count(counter, (ue.count(counter) || 0) + 1);
}
}
});

