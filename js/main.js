(function ($) {
    "use strict";

    // Smooth scrolling on the navbar links with no delay
    $(".offcanvas a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').scrollTop($(this.hash).offset().top - 45);
            
            if ($(this).parents('.offcanvas').length) {
                $('.offcanvas .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('.back-to-top').fadeIn('fast');
        } else {
            $('.back-to-top').fadeOut('fast');
        }
    });
    
    $('.back-to-top').click(function () {
        $('html, body').scrollTop(0);
        return false;
    });

    // Code highlight
    $('pre code').each(function () {
        var that = $(this);
        var html = that.html().trim();
        that.empty();
        that.text(html);
    });
    hljs.highlightAll();
    
})(jQuery);

// Show/Hide the back-to-top button on scroll
window.addEventListener('scroll', function () {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to top on button click without delay
document.querySelector('.back-to-top').addEventListener('click', function () {
    window.scrollTo({ top: 0 });
});
