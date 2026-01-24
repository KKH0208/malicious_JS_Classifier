function startGallery() {
	if (null != $('featured')) {
		var myGallery = new gallery($('featured'), {
			timed: true
		});
	}
}

function hookSearchInput() {
	var input = $('s');
	input.addEvents({
		'focus': function () {
			if (input.value == 'Search') { input.value = ''; }
		},
		'blur': function () {
			if (input.value == '') { input.value = 'Search'; }
		}
	});
}

function generateTabs() {
	var mtabs = new mootabs('box-tabs');
}

function wrapAnchors(box) {
	var anchors = $$(box + ' ul li a');
	if (null != anchors) {
		anchors.each(function(alpha) {
			spanIn = new Element('span');
			spanIn.wraps(alpha);
			spanEx = new Element('span');
			spanEx.wraps(spanIn);
		});
	}
}

function wrapListItems(box) {
	var listItems = $$(box + ' ul li');
	if (null != listItems) {
		listItems.each(function(li) {
			spanIn = new Element('span');
			spanIn.set('html',li.get('html'));
			spanEx = new Element('span');
			spanEx.adopt(spanIn);
			li.set('html','');
			li.adopt(spanEx);
		});
	}
}

window.addEvent('domready',function () {
	hookSearchInput();
	startGallery();
	generateTabs();
	wrapAnchors('div.box-widget_meta');
	wrapAnchors('div.box-widget_recent_entries');
	wrapListItems('div.box-widget_recent_comments');
});