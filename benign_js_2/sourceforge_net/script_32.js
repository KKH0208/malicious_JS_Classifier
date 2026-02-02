/* 元のURL: https://sourceforge.net */

    $(function() {
        bizx.cmp.ifConsent({ purposes: 'all' , vendors: 'narrative'}, function() {
            var current_time = (new Date()).getTime();
            let imageUrl = "https://io.narrative.io/?companyId=2440&id=first_party%3A85a8e1e0-276f-4b56-acd3-1e198fab0fc8&id=site_name%3Asourceforge.net&id=url%3A%2F&id=pagetitle%3ACompare+B2B+Software%2C+Download%2C+%26+Develop+Open+Source+%26+Business+Software+-+SourceForge&id=vertical%3AB2B+Software";
            imageUrl = imageUrl.replace(encodeURIComponent("$PAGE_TITLE"), document.title);  

            imageUrl = URL.parse(imageUrl);
            let hem = bizx.uids.getHem();
            if (hem) {
                imageUrl.searchParams.append('id', 'hem:' + hem);
            }
            imageUrl.searchParams.append('rand', current_time);

            var image = new Image();
            image.src = imageUrl.toString();
            image.style.display = "none";
            image.style.height = 0;
            image.style.width = 0;
            document.body.appendChild(image);
        });
    });


