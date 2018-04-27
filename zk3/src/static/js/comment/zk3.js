define(['jquery', 'swiper'], function($, Swiper) {
    function ks() {
        new Swiper('.lbt')
    }
    var wid = $("body").width();
    $('.lbt img').width(wid);

    $('.footer>p').click(function() {
        $(this).addClass('show').siblings().removeClass('show')
    })
    return {
        ks: ks
    }
})