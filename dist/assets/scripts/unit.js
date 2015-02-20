/* Qianglong Mo (SukeBeta) 2015 */

var unit = {
    component: {
        thumbList: function (){
            $('.summary .thumbList-hd img').eq(0).fadeIn();
            $('.summary .thumbList-bd li').eq(0).addClass('active');
            var old = 0;

            $('.summary .thumbList-bd li').click(function (){
                var currentIndex = $(this).index();
                if (currentIndex != old && currentIndex >=0) {
                    $('.summary .thumbList-hd img').hide().removeClass('active');
                    $('.summary .thumbList-hd img').eq(currentIndex).fadeIn();
                    $(this).addClass('active')
                        .siblings('li').removeClass('active');
                    old = currentIndex;
                } else {
                }
            });
        }
    },
    initUi: function (){
        unit.component.thumbList();
    }
};

$(function (){
    unit.initUi();
});