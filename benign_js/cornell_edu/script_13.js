/* 元のURL: https://cornell.edu */
// 外部JS: https://www.cornell.edu/assets/js/cornelledu.js?ver=20230613a
// Avoid "console" errors in browsers that lack a console.
(function() {
	var method;
	var noop = function () {};
	var methods = [
			'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
			'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
			'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
			'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

function parseLocalistEventDetails(jsonEvent) {
	// Given a Localist event record, extract its details and return them in an object.
	var theEvent = {};
	theEvent.title = jsonEvent.event.title;
	theEvent.localist_URL = jsonEvent.event.localist_url;
	theEvent.description = jsonEvent.event.description_text;

	theEvent.starts = jsonEvent.event.event_instances[0].event_instance.start.replace("T", " ").replace(/\-0\d:00$/, "");
	theEvent.dateStarts = Date.parse(theEvent.starts);
	theEvent.startHour = (theEvent.dateStarts.getHours() > 12) ? theEvent.dateStarts.getHours() - 12 : theEvent.dateStarts.getHours();
	theEvent.startMin = theEvent.dateStarts.getMinutes();
	theEvent.eventTimeSpan = (theEvent.startHour + ":" + theEvent.startMin);

	theEvent.ends = jsonEvent.event.event_instances[0].event_instance.end;
	// Some events have null for their end, or have the same date/time as the start date/time so we need to check for those possibilities and handle them.
	if (theEvent.ends) {
		theEvent.ends = jsonEvent.event.event_instances[0].event_instance.end.replace("T", " ").replace(/\-0\d:00$/, "");
		theEvent.dateEnds = Date.parse(theEvent.ends);
		theEvent.endHour = (theEvent.dateEnds.getHours() > 12) ? theEvent.dateEnds.getHours() - 12 : theEvent.dateEnds.getHours();
		theEvent.endMin = theEvent.dateEnds.getMinutes();
		if ((theEvent.endHour != theEvent.startHour) && (theEvent.endMin != theEvent.endHour)) {
			theEvent.eventTimeSpan += ("-" + theEvent.endHour + ":" + theEvent.endMin);
		}
	}

	theEvent.monthName = theEvent.dateStarts.toString("MMM");
	theEvent.dayNum = theEvent.dateStarts.getDate();
	theEvent.eventTimeSpan = theEvent.eventTimeSpan.replace(/:0\-/, ":00-").replace(/:0$/, ":00");
	return theEvent;
}

function findGADataAttr(dataAttr, el) {
	// Traverse item's DOM ancestry until finding a defined data attribute or reaching the top. (We do this only when the item's attribute itself is undefined.)
	var notFound = "undefined";
	var dataAttrVal = $(el).data(dataAttr) || notFound;

	if (dataAttrVal == notFound) {
		$(el).parents().each(function() {
			dataAttrVal = $(this).data(dataAttr) || notFound;
			//console.debug("parent: ", dataAttr, $(this).data(dataAttr));
			if (dataAttrVal != notFound) {
				return false;
			}
		});
	}

	return dataAttrVal;
}

function logGA(el, elType, event) {
	// Log a Google Analytics action for a page element (link or menu selection choice).
	var section, linkText, altText, linkTitle, linkClass, itemClicked, dataCategory, dataAction, dataLabel;
	var notFound = "undefined";

	// Check the link for data attributes.

	dataCategory = $(el).data("click-category") || notFound;
	dataAction = $(el).data("click-action") || notFound;
	dataLabel = $(el).data("click-label") || notFound;
	if (event.shiftKey) {
		console.debug("THIS LINK: category: ", dataCategory, " -- action: ", dataAction, " -- label: ", dataLabel);
	}

	// Check the link's DOM ancestors data attributes.

	dataCategory = findGADataAttr("click-category", $(el));
	dataAction = findGADataAttr("click-action", $(el));
	dataLabel = findGADataAttr("click-label", $(el));
	if (event.shiftKey) {
		console.debug("A PARENT: category: ", dataCategory, " -- action: ", dataAction, " -- label: ", dataLabel);
	}

	if (dataLabel == notFound) {
		// Extract something from the link to identify it.
		linkText = $(el).text();
		linkTitle = $(el).attr("title");
		altText = $(el).attr("alt");
		linkClass = $(el).attr("class");

		if (elType == "option") {
			linkText = $(el).find("option:selected").text();
		}

		//console.debug("Did not find a label, so check link text, etc.")
		itemClicked = linkText;
		if ((itemClicked == "") || (typeof itemClicked == "undefined")) {
			itemClicked = linkTitle;
			if ((itemClicked == "") || (typeof itemClicked == "undefined")) {
				itemClicked = altText;
				if ((itemClicked == "") || (typeof itemClicked == "undefined")) {
					itemClicked = linkClass;
					if ((itemClicked == "") || (typeof itemClicked == "undefined")) {
						itemClicked = "link has no text, title, alt, or class";
					}
				}
			}
		}
		dataLabel = itemClicked.replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/g, " ");

		section = $(el).closest("div").attr("id");
		if (typeof section == "undefined") {
			section = notFound;
		}
	}

	// https://developers.google.com/analytics/devguides/collection/analyticsjs/events
	if (event.shiftKey) {
		console.log("GA gets dataCategory: " + dataCategory);
		console.log("GA gets dataAction: " + dataAction);
		console.log("GA gets dataLabel: " + dataLabel);
	}
	_gaq.push(['_trackEvent', dataCategory, dataAction, dataLabel]);
	//GA4 code
	gtag('event', dataAction, {
		'event_category': dataCategory,
		'event_label': dataLabel,
		'value': 1
		});


	if (event.shiftKey) {
		event.stopPropagation();
		return false;
	}
}

function bindSelectMenus() {
	// Some pages have pop-up menus whose use should result in going to a URL for the selected item.
	$(".gotoMenuURL").change(function() {
		var event = jQuery.Event("keydown");
		event.shiftKey = (window.location.href.indexOf("cornelleducf9t") > -1) ? true : false;
		logGA($(this), "option", event);

		var destURL = $(this).val();
		if ((destURL.toLowerCase().indexOf("ttp") >= 1) && (!event.shiftKey)) {
			window.location = destURL;
		}
	});
}

function searchHandling() {
	// Handle search-related tasks and bindings.

	// Execute in-page events search if on search-events page.
	if ($("#events-results").length) {
		$(document).ready(function() {
			getSearchEvents();
		});
	}

	// Set the focus to the search bar when relevant.
	if ($("#search-site").length) {
		$("#search-site").focus();
	}

	// Hack to allow the pressing enter in the search box to resubmit the search form, which it normally does not do.
	// (We add a space character to the search term, which apparently causes the onChange event to fire, thus unlocking something that otherwise prevents the enter-key event from triggering the form submission.)
	$(document).on("keydown", "#search-site", function(event) {
		if (event.keyCode == 13) {
			window.location.href = "/search/?q=" + $("#search-site").val() + " ";
		}
	});
}

function addTimeAgo() {
	// Convert timestamps to X time ago strings.
	$(".timeago").timeago();
}

function setVidSize(videoContainer,videoRatio,headline){
	//this function maintains the aspect ratio of the video during fluid resizing
	//get current height of video containter
	videoContainer.css('height','auto');
	//find the iframe element
	vid = videoContainer.find('iframe');
	//calculate the new height based on the original aspect ratio and current width
	newHeight = videoRatio * vid.width();
	//set the new height
	vid.css('height',newHeight);
	//make sure the parent element is tall enough to contain the resized iframe
	if (videoContainer.parent().height() < newHeight) {
		videoConatiner.parent.height(newHeight);  
	}
}

function handleMediaVideo() {
	$('.media-video:not(.no-player)').on('click',function(event) {
		var ios = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
		if (!ios) { 
			event.preventDefault();
			if ($(this).attr('data-target')) {
				var targetId = $(this).attr('data-target');
				var target = $(targetId);
			} else { 
				var target = $(this);
			}
			var posterImg = target.find('.media-img');
			// get ratio of video based on the width of the thumbnail
			var videoRatio = posterImg.height() / posterImg.width();
			$(this).fadeOut('fast',function(){  });
			target.css('height',posterImg.height()).append($(this).data('embed'));
			//bind resize handler to keep video aspect ratio on window resize     
			$( window ).resize(function(){ setVidSize(target,videoRatio) });
		} // if ios 
	}); //media-video click bind
}

function applySubnav() {
	// Special handling for the Apply button in the top nav bar.
	$(".applyParent").click(function(e) {
		if ($('.applyChild').css('display') == 'none') { 
			//$(this).css('background-color','#a10606');
			$(".applyChild").show(200,function(e){});
			$('.applyParent').animate({"paddingRight":"20px" },200,'easeInOutCubic');
			$(".applyParent").addClass('apply-nohover').css({'background-image':'url(/assets/images/apply-bg.png)', 'background-repeat' : 'no-repeat', 'background-position' : 'right center', 'background-color' : '#b31b1b' , 'color' : '#ffffff' });
		} 
		else {
			$(".applyChild").hide(200,function(e){ $(".applyParent").css('background-image','none').css('background-color','none'); });
			$('.applyParent').removeClass('apply-nohover').animate({"paddingRight":"10px" },200,'easeInOutCubic');
		}
		e.preventDefault();
		});
	return false;
}

function enableMeganavEsc() {
	// Allow the ESC key to close the meganav.
	$(document).keydown(function(e) {
		if (e.which == 27) {
			$("body").removeClass("cu-menu-visible");
			$("#cu-nav-main > li").removeClass("active");
			$("#cu-nav-main").find(".submenu").each(function() {
				$(this).hide();
			});
		}
	});
}

function bindAtUMenuTabbing() {
	// Handle the Around-the-University filter menu tabbing.
	// That is, enable the menu's items to be tabbed if the filter is active, else ensure they are not tabbable.
	$("#atuFilterActivator").click(function() {
		$("#atuFilterMenus a").attr("tabindex", 0);
	});

	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			$("#atuFilterMenus").removeClass("visible");
			$(".hc-dimmer").removeClass("visible");
			$("#atuFilterMenus a").attr("tabindex", -1);
		}
	});
}

function bindSearchTabs() {
	// When a search tab is clicked, its q param should change to be what's in the search box.
	$("#search-tabs .tab").on("click mouseover", function() {
		if ($("#search-site").val().length > 2) {
			var href = $(this).attr("href").replace(/\?q=.*/, "?q=" + $("#search-site").val());
			$(this).attr("href", href);
		}
	});
}

function tweakHeaderImages() {
	// Dynamically adjust aspects of header images that BBC imager does not handle.
	// (We have to wait for the BBC imager to do its thing, then add the aria attr. we want.)
	var maxChecks = 25;
	var checkCounter = 0;

	//console.log($("#cu-nav-main img").length);
	var checkForNavImages = window.setInterval(function() {
		checkCounter++;
		if (checkCounter > maxChecks) {
			window.clearInterval(checkForNavImages);
		}
		//console.log($("#cu-nav-main img").length);
		if ($("#cu-nav-main img").length > 0) {
			window.clearInterval(checkForNavImages);
			$("#cu-nav-main img").each(function() {
				$(this).attr("aria-hidden", true);
				//console.log($(this).attr("src"));
			});
		}
	}, 200);
}

function bindQuicklinks() {
	// Handle elements that replace form/select/option/go-to-URL actions.
	$(".quicklinkTitle").keypress(function(e) {
		if ((e.which == 13) || (e.which == 32)) {
			$(this).trigger("click");
		}
	});

	$(".quicklinkTitle").keydown(function(e) {
		if (e.which == 27) {
			if ($(this).closest(".media-box").hasClass("activeMenu")) {
				$(this).trigger("click");
			}
		}
	});

	$(document).on("click", ".quicklinkTitle", function() {
		// Close all open quicklinks menus.
		var activeMenuID = $(this).closest(".quickLinks").attr("id");
		$(".quicklinkTitle").each(function() {
			var thisMenuID = $(this).closest(".quickLinks").attr("id");
			if (thisMenuID != activeMenuID) {
				$(this).closest(".media-box").removeClass("activeMenu").find(".quicklinkContainer").hide();
			}
		});

		// Toggle container display value.
		$(this).parent().find(".quicklinkContainer").each(function() {
			$(this).toggle();
		});

		// Toggle activeMenu class on media-box to force z-index.
		$(this).closest(".media-box").toggleClass("activeMenu");

		event.preventDefault();
		return false;
	});
}

function bindMenuTabbing() {
	// When a submenu's tab receives the focus (via tabbing), show the submenu's items, e.g. About/Locations. We do this by applying a class via jQuery because the display/hiding of the submenu's items is handled by :hover, which cannot be triggered by .js. Reverse this when the tab loses focus.
	$(".secondary-menu-submenu").on("focusin", function(event) {
		var itemText = $(this).text().toLowerCase();
		if (itemText.indexOf("locations") > -1) {
			$(this).addClass("secondary-menu-submenu-tabbedInto");
		}
	});
	$(".secondary-menu-submenu").on("focusout", function(event) {
		var itemText = $(this).text().toLowerCase();
		if (itemText.indexOf("locations") > -1) {
			$(this).removeClass("secondary-menu-submenu-tabbedInto");
		}
	});
}

function bindApplyButton() {
	// Special handling for Apply button to make it toggle visibility of two other buttons.
	function checkApplyButtonLabel(button) {
		var ariaLabel = $(button).attr("aria-label");
		if (ariaLabel == "Expand Apply Menu") {
			$(button).attr("aria-label", "Collapse Apply Menu");
		}
		else {
			$(button).attr("aria-label", "Expand Apply Menu");
		}
	}

	$(document).on("click", "#applyButton", function() {
		checkApplyButtonLabel(this);
	});
	$(document).on("keydown", "#applyButton", function(e) {
		if (e.keyCode == 32) { // space-bar
			$(this).trigger("click");
			e.preventDefault();
		}
	});
}

function pausePlayAmbientVideos(){
	// Pause/Play ambient videos
	//console.log('PausePlayAmbientVideos');
	var buttons =  document.querySelectorAll('.video_pause_play');

	[].forEach.call(buttons, function(button) {
		var target = button.getAttribute('data-target');
		
		button.addEventListener("click",function(e){
		var video = document.querySelector(this.getAttribute('data-target'));
	
		// If paused
		if(video.paused){
			video.play();
			this.classList.remove("play");
			this.setAttribute('aria-label','Pause video');
		// If playing
		} else{
			video.pause();
			this.classList.add("play");
			this.setAttribute('aria-label','Play video');
		}
		})
	});
}

function bindMegaNav() {
	// Set behavior of keys used within meganav menu. These control visibility and tab indexing of various elements.
	var mainNavLastFocused = null;
	var esc = $.Event("keydown", {keyCode: 27});

	// Force-show the down-arrow button after tabbing into its parent, in case we had hidden it earlier.
	$(document).on("focus", ".arrow_button", function(e) {
		$(this).find("span.arrow_down").show();
	});

	// Set the down-arrow buttons next to each main menu item show the submenu when they are enter- or space-pressed and hide them when exiting via tab press; the down-arrow key moves focus to first item in submenu.
	$(document).on("keydown", ".arrow_button", function(e) {
		if ((e.keyCode == 13) || (e.keyCode == 32)) { // enter or space
			// If sub-nav is visible then hide it, otherwise show it.
			if (!$("body").hasClass("cu-menu-visible")) {
				$("#cu-nav-main .submenu").hide();
				$(this).closest("li").find(".submenu").show().attr("aria-expanded", true);
				$("body").addClass("cu-menu-visible");
				mainNavLastFocused = this;
				// Change focus to first item in newly revealed submenu.
				var firstLink = $(this).closest("li").find(".sub-nav-group a").first();
				$(firstLink).addClass("focus").focus();
			}
			else {
				$("#cu-nav-main .submenu").hide();
				$(this).closest("li").find(".submenu").hide().attr("aria-expanded", false);;
				$("body").removeClass("cu-menu-visible");
			}
			e.preventDefault();
		}
		else if (e.keyCode == 9) { // tab
			// If sub-nav is visible then move down into it, otherwise hide it and move to next main-nav item.
			if (!$("body").hasClass("cu-menu-visible")) {
				$("#cu-nav-main .submenu").hide();
				$("body").removeClass("cu-menu-visible");

				// Force-hide the arrow after tabbing out of its parent.
				$(this).find("span.arrow_down").hide();
			}
		}
	});

	// Set ESC to close the meganav and return focus to parent's down-arrow button.
	$(document).on("keydown", "body.cu-menu-visible #cu-nav", function(e) {
		var focused = $(':focus');
		if (e.keyCode == 27) {
			$("body").removeClass("cu-menu-visible");
			$("#cu-nav-main .submenu").hide();
			$(focused).closest(".nav-item").find(".arrow_button").focus();
		}
	});

	// Replace mouse behavior from core.js.
	$(document).on("mouseout", "#cu-nav", function() {
		var focused = $(':focus');
		$("body").removeClass("cu-menu-visible");
		$("#cu-nav-main .submenu").hide();
		$(".focus").removeClass("focus");
	});
	$(document).on("mouseover", "#cu-nav-main > li", function() {
		$(this).find(".submenu").show();
		$("body").addClass("cu-menu-visible");
		$(".focus").removeClass("focus");
	});

	// Set tabbing on last link in each sub-nav to close menu and go to next item in main nav.
	$("#cu-nav-main .sub-nav").each(function() {
		var lastLink = $(this).find(".last a").last();
		$(lastLink).on("keydown", function(e) {
			if (e.keyCode == 9) { // tab
				if (!e.shiftKey) {
					$("#cu-nav").trigger(esc);
					$(".focus").removeClass("focus");
				}
			}
		});
	});

	// Set shift-tabbing on first link in each sub-nav to close the sub-menu and go to its parent's down-arrow button.
	$("#cu-nav-main .submenu-overview").each(function() {
		var firstLink = $(this).find("a").first();
		$(firstLink).on("keydown", function(e) {
			if (e.keyCode == 9) { // tab
				if (e.shiftKey) {
					$("body").removeClass("cu-menu-visible");
					$("#cu-nav-main .submenu").hide();
					$(firstLink).closest(".nav-item").find(".arrow_button");
					$(".focus").removeClass("focus");
				}
			}
		});
	});
}

mayExitTabList = false;
tabEntered = "";
function bindTabLists() {
	// ARIA specification states that tabs must be given focus as a group, and arrow keys are used to switch to the preferred tab.  Moving focus should navigate out of the entire tablist (i.e., pressing the tab key after selecting the desired tab with arrow keys will navigate into the content of the tab).

	// We need to keep state on using the tablist, its tabs, and tab key in order to show a tab's material only when tabbing into it, in order to be able to exit the tablist, and in order to be able to back out of material to the proper tab.

	$(document).on("keydown", ".cu-tabs .tab", function(e) {
		if (e.keyCode == 39) { // right arrow
			if ($(this).next(".tab").length > 0) {
				$(this).removeClass("current").attr("aria-selected", false);
				var nextTab = $(this).next(".tab");
				$(nextTab).focus().addClass("current").attr("aria-selected", true);
				mayExitTabList = false;
			}
			else {
				mayExitTabList = true;
			}
		}
		else if (e.keyCode == 37) { // left arrow
			if ($(this).prev(".tab").length > 0) {
				$(this).removeClass("current").attr("aria-selected", false);
				var prevTab = $(this).prev(".tab");
				$(prevTab).focus().addClass("current").attr("aria-selected", true);
			}
			else {
				mayExitTabList = true;
			}
		}

		// Enter tab's content and set focus to first link; record active tab for possible later backing out of content.
		if ((e.keyCode == 9) && (!mayExitTabList) && (!e.shiftKey)) { // tab
			$(this).trigger("click");
			tabEntered = $(this).attr("id");
			$(document).find(".tab-panel").each(function() {
				if ($(this).attr("aria-labelledby") == tabEntered) {
					$(this).attr("aria-hidden", false);
					var firstLink = $(this).find("a").first();
					// Prevent scrolling, which is a problem on the fields-of-study page.
					var x = window.scrollX, y = window.scrollY;
					$(firstLink).focus();
					window.scrollTo(x, y);
				}
				else {
					$(this).attr("aria-hidden", true);
				}
			});
			e.preventDefault();
		}

		// If we leave the tablist via tab, reset the state.
		if ((e.keyCode == 9) && (mayExitTabList)) { // tab
			mayExitTabList = false;
		}
	});

	// Make first link of a tag's content handle shift-tab to restore active tab in tablist.
	$(".tab-panel").each(function() {
		var firstLink = $(this).find("a:first");
		$(firstLink).on("keydown", function(e) {
			if ((e.keyCode == 9) && (e.shiftKey)) { // shift-tab
				$(document).find(".tab").each(function() {
					if ($(this).attr("id") == tabEntered) {
						$(this).focus();
					}
				});
				e.preventDefault();
			}
		});
	});
}

function handleSlideShows() {
	// Implement a way for a user to pause and resume automatic image changes, i.e., to toggle a slideshow for accessibility concerns. See Issue #297 for notes and details about this solution.
	$(document).on("click", ".toggleSlideShowButton", function() {
		var button = $(this);
		var action = ($(button).text() == "Pause Slides") ? "pause" : "resume";
		if (action == "pause") {
			$(button).text("Resume Slides");
		}
		else {
			$(button).text("Pause Slides");
		}

		var delay = 0;
		$("#about-locations").find(".cu-location-slideshow").each(function() {
			if (action == "pause") {
				$(this).scrollface("destroy");
			}
			else {
				location.reload();
			}
		});
	});
}

function bindMobileNav() {
	// Handle certain actions on mobile-only UI elements.
	$(document).find(".submenu-trigger").each(function() {
		$(this).on("click", function() {
			if ($(this).attr("aria-expanded") == "false") {
				$(this).attr("aria-expanded", "true");
			}
			else if ($(this).attr("aria-expanded") == "true") {
				$(this).attr("aria-expanded", "false");
			}
		});
	});

	// If the mobile menu is open, ESC must close it (see CUinfo Issue #89).
	$(document).on("keyup", function(e) {
		if (e.keyCode == 27) {
			if ($("body").hasClass("mobile-menu-visible")) {
				$("#mobile-trigger").trigger("click");
			}
		}
	});

	// If the mobile menu is open and it loses focus it must close (see CUinfo Issue #89).
	// We do this by listening for tab presses on its first and last links for shift-tab and tab respectively.
	$("#cu-nav-main .menu-item").first().on("keydown", function(e) {
		if (e.shiftKey) {
			if (e.keyCode == 9) {
				if (window.innerWidth < 640) {
					$("#mobile-trigger").trigger("click");
				}
			}
		}
	});

	$("#cu-nav-main .menu-item").last().on("keydown", function(e) {
		if (e.keyCode == 9) {
			if (window.innerWidth < 640) {
				$("#mobile-trigger").trigger("click");
			}
		}
	});

	// Close mobile search box when exited via tab press.
	$(document).on("keydown", "#search-query", function(e) {
		if (e.keyCode == 9) {
			$("#search-trigger").trigger("click");
			$("#mobile-toggle").focus();
		}
	});

	// Close mobile search box when exited via ESC key.
	$(document).on("keyup", "#search-query", function(e) {
		if (e.keyCode == 27) {
			$("#search-trigger").trigger("click");
			$("#search-trigger").focus();
		}
	});
}

$(document).ready(function() {
	// Bind Google Analytics clicks, except if on a Localist / events page.
	var localistPage = false;
	if ((window.location.href.indexOf("events.cornell.edu") > -1) || (window.location.href.indexOf("localist.com") > -1)) {
		localistPage = true;
	}
	if (!localistPage) {
		$("body").on("click", "a", function(event) {
			logGA(event.target, "link", event);
		});
		$("body").on("click", "input", function(event) {
			logGA(event.target, "link", event);
		});
		$("body").on("click", "button", function(event) {
			logGA(event.target, "button", event);
		});
	}

	bindSelectMenus();
	searchHandling();
	addTimeAgo();
	handleMediaVideo();
	applySubnav();
	bindAtUMenuTabbing();
	bindSearchTabs();
	tweakHeaderImages();
	bindQuicklinks();
	bindMenuTabbing();
	bindApplyButton();
	pausePlayAmbientVideos();
	bindMegaNav();
	enableMeganavEsc();
	bindTabLists();
	handleSlideShows();
	bindMobileNav();

	$(document).on("click", ".tip-link", function() {
		window.location = $(this).attr("href");
	});

	// Adjust certain elements' styling for small screens.
	if (window.innerWidth <= 500) {
		// Remove excess bottom white space on homepage spotlights.
		$(".home-block.spotlight .slide-mask").css("height", "320px");
		// Make font smaller on the pano so it does not cover too much of the image.
		$(".marquee-heading").css("font-size", "20px");
	}

});


