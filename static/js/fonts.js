document.body.style.margin = '0';
document.body.style.backgroundColor = 'rgb(253,245,220)';
var images = ['1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.JPG', '6.JPG', '7.JPG', '8.JPG', '9.JPG', '10.JPG', '11.JPG', '12.JPG', '13.JPG', '14.JPG', '15.JPG', '16.JPG', '17.JPG', '18.JPG', '19.JPG'];
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    document.body.style.background = 'url(../images/' + images[Math.floor(Math.random() * images.length)] + ') center / cover no-repeat fixed';
} else document.body.style.background = 'url(../images/' + images[Math.floor(Math.random() * images.length)] + ') center center / auto 100% no-repeat fixed';
