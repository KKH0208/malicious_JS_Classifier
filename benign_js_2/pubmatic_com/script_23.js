/* 元のURL: https://pubmatic.com */
// 外部JS: https://pubmatic.com/wp-content/themes/pubmatic/js/home.js?ver=1750436472
function isSectionVisible(element) {
    let viewportTop = $(window).scrollTop(),
        viewportBottom = viewportTop + $(window).height(),
        sectionTop = element.offset().top,
        sectionBottom = sectionTop + element.outerHeight();

    return sectionTop <= viewportBottom && sectionBottom >= viewportTop;
}

jQuery(function($) {
    let partnersSlideTop = $('.partners-top-row img');
    if(partnersSlideTop.length > 0) {
        const imgLength = partnersSlideTop.length;
        const topLogos = new Splide('.partners-top-row', {
            type: 'loop',
            clones: imgLength * 2,
            drag: false,
            autoWidth: true,
            pagination: false,
            arrows: false,
            autoScroll: {
                speed: 0.4,
                pauseOnHover: false
            },
        });
        topLogos.mount(window.splide.Extensions);
    }

    let partnersSlideBottom = $('.partners-bottom-row img');
    if(partnersSlideBottom.length > 0) {
        const imgbLength = partnersSlideTop.length;
        const bottomLogos = new Splide('.partners-bottom-row', {
            type: 'loop',
            clones: imgbLength * 2,
            drag: false,
            autoWidth: true,
            pagination: false,
            arrows: false,
            autoScroll: {
                speed: -0.4,
                pauseOnHover: false
            },
        });
        bottomLogos.mount(window.splide.Extensions);
    }
});

$(document).ready(function() {
    function checkPopupSchedule() {
        const pageWrap = $('.new-landing');
        const hpPopup = $('.hp-popup-block');
        let startDate = pageWrap.attr('data-popup-start'),
            endDate = pageWrap.attr('data-popup-end');

        $.ajax({
            url: ajaxurl,
            type: 'POST',
            data: {
                action: 'pubm_check_date_range',
                start_date: startDate,
                end_date: endDate
            },
            success: (response) => {
                hpPopup.toggle(response.in_range);
                if(response.in_range) {
                    hpPopup.addClass('active');
                }
            }
        });

        if(hpPopup.length > 0) {
            $('.hp-popup-close').on('click', function() {
                hpPopup.removeClass('active');
            });
        }
    }
    checkPopupSchedule();

    $('.prlx-img:not(.sol-prlx)').addClass('appear');

    let hpCarousel = $('.hp-cs-carousel');
    if(hpCarousel.length > 0) {
        hpCarousel.slick({
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: false,
            arrows: false,
            cssEase: 'ease-out'
        });
    }

    let hpAboutCarousel = $('.hp-about-carousel');
    if(hpAboutCarousel.length > 0) {
        hpAboutCarousel.slick({
            dots: false,
            fade: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: false,
            arrows: false,
            cssEase: 'ease-out'
        });
    }

    gsap.registerPlugin(ScrollTrigger);

    function animateFrom(elem, direction) {
        direction = direction || 1;
        if($(window).width() < 768) {
            var x = 0,
                y = direction * 1;
        }
        else {
            var x = 0,
                y = direction * 100;
        }
        elem.style.transform = "translate(" + x + "px, " + y + "px)";
        elem.style.opacity = "0";
        gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
            duration: 1.25,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: "expo",
            overwrite: "auto"
        });
    }

    function hide(elem) {
        gsap.set(elem, {autoAlpha: 0});
    }

    let solBlocks = document.querySelectorAll('.text-block-sol'),
        sectionsWrap = document.querySelector('.solution-section');

    const singleDuration = 1;

    let numOfTransitions = solBlocks.length,
        totalDuration = singleDuration * numOfTransitions;

    let solBg = $('.sol-img-bg');

    function switchActive(block) {
        solBg.removeClass('active');
        $(block).addClass('active').find('.text-block-sol-inner').slideDown();
        $(block).siblings().removeClass('active').find('.text-block-sol-inner').slideUp();

        let current = $(block).attr('data-current');
        $('[data-active="'+current+'"]').addClass('active');
    }
    function toggleSolutions() {
        $('.text-block-sol').on('click', function () {
            switchActive(this);
        });
    }
    toggleSolutions();

    ScrollTrigger.matchMedia({
        "(min-width: 768px)": function() {
            let tl = gsap.timeline({
                scrollTrigger: {
                    pin: sectionsWrap,
                    start: "top 70px",
                    end: `+=${totalDuration * 600}s`,
                    pinSpacing: true,
                    scrub: 1
                }
            });

            solBlocks.forEach((section, i) => {
                let stl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        toggleActions: 'play reverse play reverse',
                        start: `+=${(singleDuration + 500) * i}s`,
                        end: `+=${(singleDuration + 500)}s`,
                        onEnter: () => {
                            switchActive(solBlocks[i]);
                        },
                        onEnterBack: () => {
                            switchActive(solBlocks[i]);
                        }
                    }
                });
            });

            ScrollTrigger.refresh();
        }
    });

    gsap.utils.toArray('.gs_reveal').forEach(function(elem) {
        hide(elem);

        ScrollTrigger.create({
            trigger: elem,
            onEnter: function() { animateFrom(elem) },
            onEnterBack: function() { animateFrom(elem, -1) },
            onLeave: function() { hide(elem) }
        });
    });

    let sectionVideo = $('.video-section'),
        sectionEvents = $('.events-section'),
        sectionNumbers = $('.about-section');

    if(sectionVideo.length > 0) {
        const videoIframe = document.getElementById('the-video');
        const playBtn = $('.play-hp-video');
        const videoPlayer = new Vimeo.Player(videoIframe);

        playBtn.on('click', function () {
            videoPlayer.play().then(() => {
                playBtn.addClass('hidden');
            }).catch(error => {
                console.error('Error playing the video:', error);
            });
        });

        videoPlayer.on('play', function() {
            playBtn.addClass('hidden');
        });

        videoPlayer.on('pause', function() {
            playBtn.removeClass('hidden');
        });

        const handlePlayPause = (entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    videoPlayer.pause().then(() => {
                        console.log('Video is paused');
                    }).catch(error => {
                        console.error('Error pausing the video:', error);
                    });
                }
            });
        };
        const videoObserver = new IntersectionObserver(handlePlayPause, {
            threshold: 0.5
        });
        videoObserver.observe(videoIframe);
    }

    function animateCountingNumbers() {
        let countingNumbers = $('.stats-item-number span');

        countingNumbers.each(function() {
            let target = parseFloat($(this).text()),
                isFloat = !Number.isInteger(target);

            $(this)
                .prop("Counter", 0)
                .animate(
                    {
                        Counter: target,
                    },
                    {
                        duration: 1000,
                        easing: "swing",
                        step: function(now) {
                            if (isFloat) {
                                now = now.toFixed(1);
                            } else {
                                now = Math.ceil(now);
                            }
                            if (now >= target) {
                                now = target;
                            }
                            $(this).text(Number(now).toLocaleString("en"));
                        },
                    }
                );
        });
    }

    function prlxImg(section) {
        if (isSectionVisible(section)) {
            let sectionTop = section.offset().top,
                viewportTop = $(window).scrollTop(),
                scrollPosition = viewportTop - sectionTop;

            section.find('.prlx-img').each(function() {
                let speed = parseFloat($(this).data('speed'));
                $(this).css('transform', 'translateY(' + scrollPosition * speed + 'px)');
            });
        }
    }

    let btnSkip = $('.sol-skip-section');
    if(btnSkip.length > 0) {
        btnSkip.on('click', function() {
            $("html, body").animate({ scrollTop: $('#cs-section').offset().top }, 1100);
        });
    }

    if(sectionVideo.length > 0) prlxImg(sectionVideo);
    prlxImg(sectionEvents);
    prlxImg(sectionNumbers);

    let alreadyScrolled = false;

    $(window).on('scroll', function() {
        if(sectionVideo.length > 0) prlxImg(sectionVideo);
        prlxImg(sectionEvents);
        prlxImg(sectionNumbers);

        if (isSectionVisible(sectionNumbers)) {
            if(!alreadyScrolled) {
                animateCountingNumbers();
                alreadyScrolled = true;
            }
        }
    });
});

