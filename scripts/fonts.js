var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg'];
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    document.body.style.background = 'url(images/' + images[Math.floor(Math.random() * images.length)] + ') center / cover no-repeat fixed';
} else document.body.style.background = 'url(images/' + images[Math.floor(Math.random() * images.length)] + ') center center / auto 100% no-repeat fixed';
