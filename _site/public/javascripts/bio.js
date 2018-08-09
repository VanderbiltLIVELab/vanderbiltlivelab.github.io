jQuery(function($) {
    $( document ).ready(function() {
        $('.left').on("mouseenter", function (e) {
            $(this).removeClass("bounceInLeft").addClass("bounce");
        });

        $('.left').on("mouseleave", function (e) {
            $(this).removeClass("bounce");
        });

        $('.right').on("mouseenter", function (e) {
            $(this).removeClass("bounceInRight").addClass("bounce");
        });

        $('.right').on("mouseleave", function (e) {
            $(this).removeClass("bounce");
        });

        $('.colors').on("mouseenter", function (e) {
            $(this).removeClass("bounceInLeft").addClass("tada");
        });

        $('.colors').on("mouseleave", function (e) {
            $(this).removeClass("tada");
        });

        $('#bio-nav').on("mouseenter", function (e) {
            $(".nav").removeClass("invisible").addClass("animated bounceInUp");
        });

        $('#bio-nav').on("mouseleave", function (e) {
            $(".nav").addClass("invisible").removeClass("animated bounceInUp");
        });

    });


})(jQuery);