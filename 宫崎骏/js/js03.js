$(document).ready(function() {
    // 表单提交事件处理
    $('#contact-form').on('submit', function(event) {
        event.preventDefault(); // 阻止默认提交行为

        // 获取表单数据
        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        };

        // 模拟AJAX请求
        $.ajax({
            url: 'https://example.com/api/contact', // 替换为实际的API端点
            method: 'POST',
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function(response) {
                // 处理成功响应
                $('#response').html('<p>感谢您的留言！我们将在24小时内回复您。</p>');
                $('#contact-form')[0].reset(); // 重置表单
            },
            error: function(error) {
                // 处理错误响应
                $('#response').html('<p>提交失败，请稍后再试。</p>');
            }
        });
    });
});