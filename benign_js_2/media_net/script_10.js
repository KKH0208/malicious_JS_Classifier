/* 元のURL: https://media.net */

  document.addEventListener('DOMContentLoaded', function() {
    const elVideosPlayOnce = document.querySelectorAll('video[data-play-in-view="once"]');
    const elVideosPlayAlways = document.querySelectorAll('video[data-play-in-view="always"]');
    const videosObserverCB = (entries) => {
      entries.forEach(entry => {
        if (entry.target.looped) {
          if (entry.isIntersecting) {
            if (entry.target.paused) {
              entry.target.play();
            }
          } else {
            if (!entry.target.paused) {
              entry.target.pause();
              entry.target.currentTime = 0;
            }
          }
        }
      });
    }
    elVideosPlayOnce.forEach(video => {
      const videosObserverThreshold = parseFloat(video.getAttribute('data-play-in-view-threshold')) || 0.3;
      const videosObserver = new IntersectionObserver(videosObserverCB, { threshold: videosObserverThreshold });
      videosObserver.observe(video);
      video.looped = true;
      video.addEventListener('ended', function () {
        video.looped = false;
      }, false);
    });
    elVideosPlayAlways.forEach(video => {
      const videosObserverThreshold = parseFloat(video.getAttribute('data-play-in-view-threshold')) || 0.3;
      const videosObserver = new IntersectionObserver(videosObserverCB, { threshold: videosObserverThreshold });
      videosObserver.observe(video);
      video.looped = true;
    });
    
	document.querySelector('.year-block').textContent = new Date().getFullYear()
    
    
  });
 
 


