/* Qianglong Mo (SukeBeta) 2015 */

var search = {
    autoFixedNav: function (){
        if ($('.search-list-bd').length) {
            scrollMonitor();
        }

        function scrollMonitor (){
            var navToTop = $('.search-list-hd').offset().top;
            $(window).scroll(function (){
                var domToTop = $(document).scrollTop(),
                    nav = $('.search-list-hd');

                console.log(domToTop,navToTop);
                if (domToTop >= navToTop){
                    nav.addClass('fixed');
                } else {
                    nav.removeClass('fixed');
                }
            });
        }
    },
    init: function (){
        this.autoFixedNav();
    }
};

$(function (){
    search.init();
});