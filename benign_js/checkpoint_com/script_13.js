/* 元のURL: https://checkpoint.com */
// 外部JS: https://www.checkpoint.com/wp-content/themes/checkpoint-theme-v2/js/header.js?ver=3.80
// Cookies
jQuery(document).ready(function( $ ) {
    // Cookie creation functions
    function gdprCookie() {
        Cookies.set('gdpr', '1', { expires: 365 });
    }
    function chatCookie() {
        Cookies.set('chat', 'opened', { expires: 30 });
    }
    function firstVisitCookie() {
        Cookies.set('firstVisit', '1', { expires: 365 });
    }
    function websiteFeedbackCookie() {
        Cookies.set('websiteFeedback', '1', { expires: 30 });
    }
    // GDPR
    var gdpr_exists = Cookies.get('gdpr');
    if(!gdpr_exists) {
        function showGDPR() {
            jQuery('#notification').css('display', 'block');
        }
        jQuery('#gdpr-accept').click(function() {
            // event.preventDefault();
            jQuery('#notification').css('display', 'none');
            gdprCookie();
        });
        showGDPR();
    }
    function showChat() {
        jQuery('#ChatShare-container').addClass('slideout');
        jQuery('#chat-container .sidebar-slide').removeClass('sidebar-link');
        jQuery('#chat-container .sidebar-slide').addClass('slideout sidebar-link');
        // jQuery('#chat-container a.close').css('display','block');
        jQuery('#Sidebar-desk-chat-proactive-slide-open').click();
        jQuery('#chat-container a.sidebar-slide').attr('id','sidebar-desk-chat-proactive-open-link'); //changing ID value for analytics
    }
    function closeChat(){
        jQuery('#ChatShare-container').removeClass('slideout');
        jQuery('#chat-container .sidebar-slide').removeClass('slideout');
        // jQuery('#chat-container a.close').css('display','none');
        jQuery('#chat-container a.sidebar-slide').attr('id','sidebar-desk-chat-open-link'); //changing ID value for analytics
    }
    function special_pages() {
        var is_special_page = false; 
        //check for URL
        var myURL=window.location.href;
        var proactive_urls = ['/products/','/solutions/', '/products-solutions/', '/trials/'];
        //removed contact-us from the special pages
        for (var i = 0; i < proactive_urls.length; i++) {
            if (myURL.indexOf(proactive_urls[i]) > 0) {
                is_special_page = true; 
                return true; 
            }
         }
         return is_special_page;
    }
    function chat_cookie_url(){
        var chat_cookie_exists = Cookies.get('chat');
        if (chat_cookie_exists) {
            return false;
        } else {
            return special_pages();
        }
    }
    function chat_url () {
        // stores popup window URL in a variable 
        var chat_url;
        if(special_pages() ) {
            chat_url = "https://usercenter.checkpoint.com/usercenter/portal/role/usercenterUser/page/openChat.psml/media-type/html?action=portlets.ChatServiceRequestAction&eventSubmit_doSalescreate=createsales&sales_chat_go=true&salesLessFields=true&arriveFromCpSite=true";
        } else {
            chat_url = "https://usercenter.checkpoint.com/usercenter/portal/role/usercenterUser/page/openChat.psml/media-type/html?action=controls.Print&sales_chat=true";
        }
        return chat_url;        
    }
    var open_chat_bar = chat_cookie_url();
    if(open_chat_bar) {   
        setTimeout(showChat, 45000);
        jQuery('#chat-container a').click(function(){
            setTimeout(closeChat, 500);
        });
    }
    var chat_url = chat_url();
    jQuery('#chat-container a.sidebar-slide').attr("onClick","window.open('"+chat_url+"','archive','resizable,height=738,width=550,scrollbars=no'); return false;");
    jQuery('#chat-container a.close').click(function(){
        closeChat();
        chatCookie();
    });
    /*// Website Feedback after 90 seconds
    var websiteFeedback_exists = Cookies.get("websiteFeedback");
    if(!websiteFeedback_exists) {
        var websiteFeedbacktimer;
        var websiteFeedbacktimerStart;
        var timeSpentOnSite = getTimeSpentOnSite();

        function getTimeSpentOnSite() {
            timeSpentOnSite = parseInt(localStorage.getItem('timeSpentOnSite'));
            timeSpentOnSite = isNaN(timeSpentOnSite) ? 0 : timeSpentOnSite;
            return timeSpentOnSite;

        }

        function startCounting() {
            websiteFeedbacktimerStart = Date.now();
            websiteFeedbacktimer = setInterval(function() {
                timeSpentOnSite = getTimeSpentOnSite() + (Date.now() - websiteFeedbacktimerStart);
                localStorage.setItem('timeSpentOnSite', timeSpentOnSite);
                websiteFeedbacktimerStart = parseInt(Date.now());
                // Convert to seconds
                parseInt(timeSpentOnSite / 1000);
            }, 1000);
        }
        startCounting();

        function showFeedbackForm() {
            if (timeSpentOnSite > 90000) {
                feedbackOpen();
                websiteFeedbackCookie();
                localStorage.setItem('timeSpentOnSite', 0);
                clearInterval(showFormInterval);
            }
        }
        var showFormInterval = window.setInterval(function(){
            showFeedbackForm();
        },  1000);
    }*/

    /*// Website Feedback - First Visit
    var websiteFeedback = 'websiteFeedback'
    var websiteFeedback_exists = readCookie(websiteFeedback);
    if((firstVisit_exists)&&(!websiteFeedback_exists)) {
        function showWebsiteFeedback() {
            jQuery('#website-feedback').css('display', 'block');
        }
        jQuery('#website-feedback-iframe').click(function() {
            // event.preventDefault();
            websiteFeedbackCookie();
        });
        jQuery(window).blur(function () {
            // check focus
            if (jQuery('iframe').is(':focus')) {
                jQuery(document.activeElement).trigger("focus");// Could trigger click event instead
            }
        });
        jQuery('#website-feedback-iframe').on('focus', function(e){
            writeCookie();
            websiteFeedbackCookie();
        });
        showWebsiteFeedback();
    }*/

    // YouTube
    // YouTube Modal
    jQuery('a[href*="youtube"]').addClass('youtube');
    jQuery('a[href*="youtube.com/user/CPGlobal"]').removeClass('youtube').attr('target','_blank');
    jQuery(".youtube").YouTubeModal({
        width:640,
        height:480
    });
});

