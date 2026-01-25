/* 元のURL: https://adriver.ru */

//Scroll to anchor
$("ol li, ol li a").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash.split(".").join("\\.")).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

window.onscroll = function() {scrollFunction()};
var xxx = document.documentElement.clientWidth;

function scrollFunction() {
    if (document.body.scrollTop > xxx || document.documentElement.scrollTop > xxx) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


