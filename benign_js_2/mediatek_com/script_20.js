/* 元のURL: https://mediatek.com */


  const tabber = document.querySelector(".tabber_slider .tab_nav");

  // Lock to prevent rapid clicking issues
  let isLocked = false;

  tabber.addEventListener("click", (e) => {
    if (isLocked) return;
    if (e.target.classList.contains("tab-trigger")) {
      e.preventDefault();
      isLocked = true;

      const tab = e.target;
      const panels = e.target.closest('.tabber_slider').querySelectorAll(".slider_content");

      Array.from(tab.closest('ul').children)
        .filter((tabF) => tab !== tabF)
        .forEach((tab) => tab.classList.remove("active"));

      tab.parentElement.classList.add("active");

      panels.forEach((panel) =>
                     tab.href.split("#").pop() === panel.getAttribute("content-id")
                     ? panel.classList.add("active")
                     : panel.classList.remove("active")
                    );

      // Unlock after a brief period to allow for transitions
      setTimeout(() => {
        isLocked = false;
      }, 10); // Adjust this delay as needed
    }
  });





  $("._modulewidget_1713787212027 .main_tab_slider,  .slider_content.cont_right .main_tab_slider").slick({
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: false,
    speed: 400,
    draggable: false,
    slidesToShow: 1,
    adaptiveHeight:true,
    responsive: [
    {
    breakpoint: 1024,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots:true
    }
  },
    {
      breakpoint: 767,
        settings: {
          slidesToShow: 1,
            centerMode: true,
              centerPadding: '50px',
                dots:false
        }
    },
      ]
  });

  $('._modulewidget_1713787212027 .slider_tab_slide').click(function () {
    // Remove active-tab class from all slider_nav_slide elements
    $('._modulewidget_1713787212027 .slider_tab_slide').removeClass('active-tab');

    // Add active-tab class to the clicked element
    $(this).addClass('active-tab');

  // Get the index of the clicked tab
  var goToThisIndex = $(this).data("slide-index");

  // Go to the corresponding slide
  $('._modulewidget_1713787212027 .main_tab_slider').slick('slickGoTo', goToThisIndex, false);
    });

  $(".tabber_slider ul.tab_navigation li.tab_item").click(function(){
    var atr = $(this).children('a').attr("href");
    var atrhash = `${atr}`.replace("#", "");
    $('.slider_tab_slide').removeClass('active-tab');
    var element = $(`[content-id="${atrhash}"]`);
    var elementClass = element.attr("class").split(' ');
    var elem = elementClass[1];

    $(`.slider_content.${elem}`).find('.slider_tab_slide').first().addClass('active-tab');

    var goToThisIndex = $(`.slider_content.${elem}`).find('.slider_tab_slide').first().data("slide-index");

    $('.main_tab_slider').slick('slickGoTo', goToThisIndex, false);
  });



