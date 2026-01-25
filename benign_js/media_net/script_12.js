/* 元のURL: https://media.net */

  let touchCount = 0;
  const initInfiniteScroll = () => {
    const marquees = document.querySelectorAll('[data-gsap-infinite-scroll]');

    marquees.forEach(marquee => {
      const isHorizontal = marquee.getAttribute("data-gsap-infinite-scroll") === "horizontal";
      const direction = marquee.getAttribute("data-gsap-infinite-scroll-direction") || "default";
      const isReverse = direction === "reverse";
      const duration = parseInt(marquee.getAttribute("data-gsap-infinite-scroll-duration"), 10) || 5;
      const marqueeContent = marquee.firstChild;
      if (!marqueeContent) {
        return;
      }

      const cloneCount = parseInt(marquee.getAttribute("data-gsap-infinite-scroll-clone-count"), 10) || 1;
      for (let i = 0; i < cloneCount; i++) {
        const marqueeContentClone = marqueeContent.cloneNode(true);
        marquee.append(marqueeContentClone);
      }

      let tween;

      const playMarquee = () => {
        let progress = tween ? tween.progress() : 0;
        tween && tween.progress(0).kill();

        if (isHorizontal) {
          // Horizontal scroll
          const width = parseInt(getComputedStyle(marqueeContent).getPropertyValue("width"), 10);
          const gap = parseInt(getComputedStyle(marqueeContent).getPropertyValue("column-gap"), 10);
          const distanceToTranslate = -1 * (gap + width);

          tween = gsap.fromTo(
            marquee.children,
            { x: isReverse ? distanceToTranslate : 0 },
            { x: isReverse ? 0 : distanceToTranslate, duration, ease: "none", repeat: -1 }
          );
        } else {
          // Vertical scroll
          const height = parseInt(getComputedStyle(marqueeContent).getPropertyValue("height"), 10);
          const gap = parseInt(getComputedStyle(marqueeContent).getPropertyValue("row-gap"), 10);
          const distanceToTranslate = -1 * (gap + height);

          tween = gsap.fromTo(
            marquee.children,
            { y: isReverse ? distanceToTranslate : 0 },
            { y: isReverse ? 0 : distanceToTranslate, duration, ease: "none", repeat: -1 }
          );
        }

        tween.progress(progress);
      };

      // Pause the marquee on hover if the data attribute is set
      
      if (marquee.getAttribute("data-gsap-infinite-scroll-pause") === "hover") {
        const addEvents = (element, events, handler) => {
          events.forEach(event => element.addEventListener(event, handler));
        };

        addEvents(marquee, ["mouseenter"], () => {
          if (tween) tween.pause();
        });

        addEvents(marquee, ["mouseleave"], () => {
          if (tween) tween.resume();
        });
        
        addEvents(marquee, ["touchstart"], () => {
          if(touchCount%2 === 0){
            if (tween) tween.pause();
          }else{
            if (tween) tween.resume();
          }
          touchCount++;
        });
        
         
      }


      playMarquee();

      // Debounce for resizing
      function debounce(func) {
        let timer;
        return function (event) {
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => func(event), 500);
        };
      }

      window.addEventListener("resize", debounce(playMarquee));
    });
  };

  document.addEventListener("DOMContentLoaded", initInfiniteScroll);


