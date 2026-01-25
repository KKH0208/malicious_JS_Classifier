/* 元のURL: https://vimeo.com */

    const overlayColor = '#FFFFFF';
    const createOverlay = () => {
        const n = document.createElement('div');
        (n.id = 'eppo-loading-overlay'),
        (n.style.position = 'fixed'),
        (n.style.top = '0'),
        (n.style.left = '0'),
        (n.style.width = '100%'),
        (n.style.height = '100%'),
        (n.style.backgroundColor = overlayColor),
        (n.style.zIndex = ('2147483647')),
        (n.style.pointerEvents = 'none'),
        document.body.appendChild(n);
    }
    if(window && !window.EppoVisualEditor?.hideOverlay) { // this evaluates if the object does not exist or if the hideOverlay 
      createOverlay();
    }
    // If the script is not loaded within 2 seconds, remove the overlay
    // It's going slower than usual, we need to see why
    setTimeout(() => {
        document.getElementById('eppo-loading-overlay')?.remove();
    }, 2000);
    

