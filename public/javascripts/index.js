jQuery(function($) {
    $( document ).ready(function() {

        $('#home-name').on("mouseenter", function (e) {
            $("#home-header").hide().removeClass("invisible").addClass("animated bounceInRight");
        });

    });

})(jQuery);