/* 元のURL: https://apache.org */

                // Array of images to randomly show on page load
                var imgArray = [
                    'images/asf-public-good-airflow.webp',
                    'images/asf-public-good-IoTDB.webp',
                    'images/asf-public-good-storm.webp',
                    'images/asf-public-good-superset.webp',
                ];
                // select a random image from the array.
                var randomImage = imgArray[Math.floor(Math.random() * imgArray.length)];
                var publicGoodImage = document.getElementById('public-good-image');
                publicGoodImage.src = randomImage;
            

