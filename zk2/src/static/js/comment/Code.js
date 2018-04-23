define(['jquery', 'hand'], function($, hand) {
    function ajaxCode() {
        $.ajax({
            url: "../../../data/data.json",
            success: function(data) {
                Rendering(data)
            }
        })

        function Rendering(data) {
            var tp1 = $('#tp1').html();
            var template = hand.compile(tp1);
            var html = template(data);
            $('body').html(html)

            $('.btn').click(function() {
                if ($(this).children().eq(0).html() == "-") {
                    $(this).next().addClass('show');
                    $(this).children().eq(0).html("+")
                    console.log($(this).find('p'))
                    $(this).find('p').removeClass('show')
                } else {
                    $(this).next().removeClass('show');
                    $(this).children().eq(0).html("-"