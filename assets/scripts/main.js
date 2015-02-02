/* Qianglong Mo (SukeBeta) 2015 */

var index = {
    activity: {
        timer: null,
        core: function (){
            //$('.chuangke-activity .item').mouseover(function (){
            //    var that = $(this);
            //    $(this).addClass('active')
            //        .siblings('.item').removeClass('active');
            //    $('.chuangke-activity .item .txt').hide();
            //
            //    clearTimeout(index.activity.timer);
            //    index.activity.timer = setTimeout(function (){
            //        if (!that.find('.txt').is(':visible')) {
            //            that.find('.txt').fadeIn();
            //        }
            //    });
            //});
        }
    }
};

$(function (){
    index.activity.core();
});