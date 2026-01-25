/* 元のURL: https://apache.org */

    // Parallax scrolling effect for the logos on the right side of the hero section
    if (window.innerWidth > 600) {
        // disable parallax on mobile
        const parallax = document.getElementById('parallax');
        const para1 = document.getElementById('para-1');
        const para2 = document.getElementById('para-2');
        const para3 = document.getElementById('para-3');
        const para4 = document.getElementById('para-4');
        const para5 = document.getElementById('para-5');
        const para6 = document.getElementById('para-6');
        const para7 = document.getElementById('para-7');
        const para8 = document.getElementById('para-8');
        window.addEventListener('scroll', () => {
            // Check if parallax element is in viewport
            const rect = parallax.getBoundingClientRect();
            const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
            if (isInViewport) {
                let scrollPosition = window.scrollY;
                para1.style.transform = `translateY(${scrollPosition * -0.5}px)`;
                para2.style.transform = `translateY(${scrollPosition * -0.1}px)`;
                para3.style.transform = `translateY(${scrollPosition * -0.2}px)`;
                para4.style.transform = `translateY(${scrollPosition * -0.5}px)`;
                para5.style.transform = `translateY(${scrollPosition * -0.4}px)`;
                para6.style.transform = `translateY(${scrollPosition * -.7}px)`;
                para7.style.transform = `translateY(${scrollPosition * -0.2}px)`;
                para8.style.transform = `translateY(${scrollPosition * -0.1}px)`;
            }
        });  
    }


