/* 元のURL: https://cloud.microsoft */

            // Log page loaded event when DOM is ready
            if (window.mcmPerformance) {
                window.mcmPerformance.logPageLoaded();
                
                // Set up automatic section visibility tracking using Intersection Observer
                if ('IntersectionObserver' in window) {
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                const sectionName = entry.target.getAttribute('data-section');
                                if (sectionName && window.mcmPerformance) {
                                    window.mcmPerformance.logSectionVisible(sectionName);
                                    // Only track once per section
                                    observer.unobserve(entry.target);
                                }
                            }
                        });
                    }, { 
                        threshold: 0.1, // Trigger when 10% of element is visible
                        rootMargin: '0px 0px -50px 0px' // Account for viewport positioning
                    });

                    // Start observing sections when DOM is ready
                    function startSectionTracking() {
                        document.querySelectorAll('[data-section]').forEach((element) => {
                            observer.observe(element);
                        });
                    }

                    if (document.readyState === 'loading') {
                        document.addEventListener('DOMContentLoaded', startSectionTracking);
                    } else {
                        startSectionTracking();
                    }
                }
            }
        

