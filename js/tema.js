(function($) {
    'use strict';

    // Tilføjer plugin til fn så det kan bruges normalt
    $.fn.tema = function (options) {

        // Options
        // Sætter default options, hvis der ikke sendes noget med
        const defaultOptions = {
            dimension:{
                width: '400px',
                height: '150px',
                fontSize: '16px',
                lineHeight: '20px',
                padding: '20px',
                bgColor: '#FEFEFE',
                textc: 'black'
            }


        };

        let opts = $.extend(true, {}, defaultOptions, options);

        // Går gennem alle elementer der matcher selector = idx=index, el=element
        return this.each(function (idx, el) {
            $(el).css({
                "width": opts.dimension.width,
                "height": opts.dimension.height,
                "font-size": opts.dimension.fontSize,
                "line-height": opts.dimension.lineHeight,
                "padding": opts.dimension.padding,
                "background-color": opts.dimension.bgColor,
                "color": opts.dimension.textc
            });

            $(".tema1").click(function() {
                $(el).animate({
                    "width": "400px",
                    "height": "150px",
                    "font-size": "16px",
                    "line-height": "20px"
                }).css({
                    "background-color": "#FEFEFE",
                    "color": "black"
                });
            });

            $(".tema2").click(function() {
                $(el).animate({
                    "width": "600px",
                    "height": "250px",
                    "font-size": "20px",
                    "line-height": "35px"
                }).css({
                    "background-color": "#FEFEFE",
                    "color": "black"
                });
            });

            $(".tema3").click(function() {
                $(el).animate({
                    "width": "1300px",
                    "height": "800px",
                    "font-size": "80px",
                    "line-height": "65px",
                }).css({
                    "background-color": "#6e6612",
                    "color": "#ff0000"
                });
            });
        });
    };

})(jQuery);