$(function() {
    var siteURL = "http://" + top.location.host.toString();
    var $internalLinks = $("a[href^='"+siteURL+"'], a[href^='/'], a[href^='./'], a[href^='../']");
    $internalLinks.click(function() {
        $('#loadhalaman').fadeIn(1500).delay(6000).fadeOut(1000);
    });

    // Hilangkan overlay saat diklik untuk mengatasi gangguan, terutama jika link internal diset dengan target='_blank'
    $('#loadhalaman').click(function() {
        $(this).hide();
    });
});