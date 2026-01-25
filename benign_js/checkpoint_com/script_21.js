/* 元のURL: https://checkpoint.com */
// 外部JS: https://checkpoint.com/wp-content/themes/checkpoint-theme-v2/styles/animate-staging.js?v1.629788485
import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";
const lotties = document.querySelectorAll(".lottie-anim");
if (lotties.length) {
    for (let i = 0; i < lotties.length; i++) {
    const canvas = document.getElementById(lotties[i].getAttribute("id"));
    const src = lotties[i].getAttribute("data-src");
    let autoplay = true;
    let playOnHover = false;
    if (lotties[i].classList.contains('anim-hover')) {
        autoplay = false;
        playOnHover = true;
    }
    const lottiePlayer = new DotLottie({
        autoplay: autoplay,
        loop: true,
        speed: 1,
        canvas: canvas,
        src: src,
    }); 
    if (playOnHover) {
        let parent = canvas;
        if (canvas.closest('.card')) {
        parent = canvas.closest('.card');
        }
        parent.addEventListener('mouseenter', () => {
            lottiePlayer.play();
        });
        parent.addEventListener('mouseleave', () => {
            lottiePlayer.pause();
        });
    }
    }
}

AOS.init( {
duration: 3000,
once: true
});

