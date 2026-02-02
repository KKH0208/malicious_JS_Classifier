/* 元のURL: https://netflix.net */
  // Customization: Background
      /* Gradient animation */
      var index = 0;
      const layers = ["gradient-red", "gradient-yellow", "gradient-green", "gradient-purple"];
      setInterval(() => {
        index = (index + 1) % layers.length;
        for (var i = 0; i < layers.length; i++) {
          let name = layers[i];
          let elem = document.getElementById(name);
          let opacity = i === index ? 1 : 0;
          elem.style.opacity = opacity;
        }
        /*
          Important:

          This 3000ms must be greater than the ease period on the CSS transtision
          to allow the previous transition to finish. Otherwise Firefox will make the
          adjustment without animation.
        */
      }, 5000);
      /* end gradient animation */
    

