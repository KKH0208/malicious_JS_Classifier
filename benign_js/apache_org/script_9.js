/* 元のURL: https://apache.org */

                var imgArray = ['images/welcome-bg/image-1.webp', 'images/welcome-bg/image-2.webp', 'images/welcome-bg/image-3.webp', 'images/welcome-bg/image-4.webp', 'images/welcome-bg/image-5.webp', 'images/welcome-bg/image-6.webp', 'images/welcome-bg/image-7.webp', 'images/welcome-bg/image-8.webp', 'images/welcome-bg/image-9.webp', 'images/welcome-bg/image-10.webp'];
                var randomImage = imgArray[Math.floor(Math.random() * imgArray.length)];
                var welcomeImage = document.getElementById('welcome-image');
                welcomeImage.src = randomImage;
            

