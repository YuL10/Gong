$(document).ready(function() {
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

    // 动态加载内容
    $('.load-more').on('click', function() {
        $.ajax({
            url: 'data/more-content.json', // 替换为实际的内容文件
            method: 'GET',
            success: function(data) {
                $('#content').append(data);
            },
            error: function(error) {
                console.error('加载更多内容失败:', error);
            }
        });
    });
});