$(document).ready(function() {
    // 轮播图自动播放
    var $carouselItems = $('section ul li');
    var currentIndex = 0;
    var interval;

    function showNextItem() {
        $carouselItems.eq(currentIndex).fadeOut(500);
        currentIndex = (currentIndex + 1) % $carouselItems.length;
        $carouselItems.eq(currentIndex).fadeIn(500);
    }

    function startCarousel() {
        interval = setInterval(showNextItem, 3000);
    }

    function stopCarousel() {
        clearInterval(interval);
    }

    // 初始化轮播图
    startCarousel();

    // 鼠标悬停时停止轮播
    $('section').hover(stopCarousel, startCarousel);

    // 点击图片切换
    $carouselItems.click(function() {
        var index = $(this).index();
        if (index !== currentIndex) {
            $carouselItems.eq(currentIndex).fadeOut(500);
            $carouselItems.eq(index).fadeIn(500);
            currentIndex = index;
        }
    });

    // 平滑滚动到顶部
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});