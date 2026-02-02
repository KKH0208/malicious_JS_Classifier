/* 元のURL: https://media.net */

  function textFlipAnimation() {
    document.querySelectorAll('[data-text-flip="true"]').forEach(function (wordsContainer) {
      let textFlipAnimation = gsap.timeline({
        repeat: -1,
        ease: "power4.inOut"
      });

      // Retrieve the words from the `data-text-flip-words` attribute and split them into an array
      let extraWords = wordsContainer.getAttribute('data-text-flip-words').split(',');

      // Grab the default word (plain text inside the div/span)
      let defaultWordText = wordsContainer.textContent.trim();

      // Create an array with all words (default + extra)
      let allWords = [defaultWordText, ...extraWords];

      // Clear existing content inside the words container
      wordsContainer.innerHTML = '';

      // Create a span for each word and apply styles
      allWords.forEach(function (word) {
        let span = document.createElement('span');
        span.textContent = word;

        // Apply inline styles to the span
        span.style.position = 'absolute';

        // Append the span to the words container
        wordsContainer.appendChild(span);
      });

      // Select the image container using the specified class
      let imageContainer = document.querySelector('.section-hero_visual-images-wrap');
      let imageElements = imageContainer ? Array.from(imageContainer.querySelectorAll('img')) : [];

      // Select all the span elements (which now includes the default and extra words)
      let targets = wordsContainer.querySelectorAll('span');
      let numberOfTargets = targets.length;
      let duration = 0.8;  // Adjust duration as needed
      let pause = 3;  // Adjust pause between each animation
      let stagger = duration + pause;
      let repeatDelay = stagger * (numberOfTargets - 1) + pause;

      function setContainerDimensions() {
        // Calculate container width dynamically
        let maxWordWidth = 0;
        targets.forEach(function(span) {
          maxWordWidth = Math.max(maxWordWidth, span.offsetWidth);
        });
        wordsContainer.style.width = maxWordWidth + 'px';

        // Set container height to the height of a single word (i.e., the first word's height)
        let firstWordHeight = targets[0].offsetHeight;
        wordsContainer.style.height = firstWordHeight + 'px';
      }

      setContainerDimensions();
      window.addEventListener("resize", setContainerDimensions);

      // Get the flip direction from the `data-text-flip-direction` attribute
      let flipDirection = wordsContainer.getAttribute('data-text-flip-direction') || "down";

      // Set initial state for animation
      gsap.set(wordsContainer, { autoAlpha: 1 });
      // gsap.set(imageElements, { opacity: 0 }); // Initially hide all images

      function setImagesVisibility() {
        const currentElement = this.targets()[0];
        const index = imageElements.indexOf(currentElement);

        // Hide all sibling images
        imageElements.forEach(function (sibling) {
          if (sibling !== currentElement) {
            gsap.set(sibling, { duration: duration, opacity: 0 });
          }
        });
      }

      // Text Animation
      textFlipAnimation
        .from(targets, {
        y: flipDirection === "down" ? 80 : -80, // From top to bottom if "down", or bottom to top if "up"
        opacity: 0,
        duration: duration,
        stagger: {
          each: stagger,
          repeat: -1,
          repeatDelay: repeatDelay
        }
      })
        .to(targets, {
        y: flipDirection === "down" ? -80 : 80, // To top if "down", or to bottom if "up"
        opacity: 0,
        duration: duration,
        stagger: {
          each: stagger,
          repeat: -1,
          repeatDelay: repeatDelay
        }
      }, stagger)
        .fromTo(imageElements, {
        opacity: 0, // Start opacity at 0 for all images
      }, {
        opacity: 1, // Fade in the current image
        duration: duration,
        stagger: {
          onStart: setImagesVisibility,
          onRepeat: setImagesVisibility,
          each: stagger,
          repeat: -1,
          repeatDelay: repeatDelay
        },
      }, 0); // Sync with text animation
    });
  }

  document.addEventListener("DOMContentLoaded", textFlipAnimation);


