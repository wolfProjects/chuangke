/* Qianglong Mo (SukeBeta) 2015 */

var activity = {
    component: {
        pubuliu: function (){
            //blocksit define
            $('.m-project-list-waterfall').BlocksIt({
                numOfCol: 3,
                offsetX: 18,
                offsetY: 18
            });

            //window resize
            var currentWidth = 1215;
            $(window).resize(function() {
                var winWidth = $(window).width(),
                    conWidth,
                    col = 3;

                if(conWidth != currentWidth) {
                    currentWidth = conWidth;
                    $('.m-project-list-waterfall').width(conWidth);
                    $('.m-project-list-waterfall').BlocksIt({
                        numOfCol: col,
                        offsetX: 8,
                        offsetY: 8
                    });
                }
            });
        }
    },
    initUi: function (){
        activity.component.pubuliu();
    }
};

$(function (){
    activity.initUi();
});