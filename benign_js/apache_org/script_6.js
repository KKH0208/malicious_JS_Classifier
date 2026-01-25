/* 元のURL: https://apache.org */

        document.addEventListener('DOMContentLoaded', function () {
            // Using Bootstrap's event system for dropdowns
            $(document).on('shown.bs.dropdown', '.dropdown', function () {
                // Check if this is the search dropdown
                if ($(this).find('.glyphicon-search').length > 0) {
                    // Find and focus the search input
                    setTimeout(function() {
                        $('.pagefind-ui__search-input').focus();
                    }, 50); // Small delay to ensure input is ready
                }
            });
        });
    

