/* Qianglong Mo (SukeBeta) 2015 */

var index = {
    activity: {
        core: function (){
            $('.chuangke-activity .item').mouseover(function (){
                var that = $(this);
                $(this).addClass('active')
                    .siblings('.item').removeClass('active');
            })
                .mouseout(function (){
                    $('.chuangke-activity .item').removeClass('active')
                        .eq(0).addClass('active');
                });
        }
    }
};

$(function (){
    index.activity.core();
});