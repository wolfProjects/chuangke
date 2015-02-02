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
    },

    tab: {
        index: 0,
        core: function (options){
            var wrap = $(options.wrap),
                items = wrap.find(options.items),
                prev = wrap.find(options.prev),
                next = wrap.find(options.next);

            // init tab
            items.eq(0).addClass('active');
            btnEnable();

            prev.click(function (){
                if (index.tab.index > 0){
                    items.hide()
                        .eq(--index.tab.index).show();
                    btnEnable();
                }
            });

            next.click(function (){
                if (index.tab.index < items.length-1){
                    items.hide()
                        .eq(++index.tab.index).show();
                    btnEnable();
                }
            });

            function btnEnable(){
                if (index.tab.index == 0 ) {
                    prev.addClass('enable');
                } else if (index.tab.index == items.length-1) {
                    next.addClass('enable');
                } else {
                    prev.removeClass('enable');
                    next.removeClass('enable');
                }
            }
        }
    },

    indexKv: function (){
        jQuery(".kv").slide({titCell: '.kv-head ul', mainCell:".kv-body ul", effect:"left", autoPlay:true, autoPage: '<li></li>'});
    }
};

$(function (){
    index.activity.core();
    index.tab.core({wrap: '.recommend-components-bd', items: '.itemWrap li', prev: '.prev', next: '.next'});
    index.indexKv();
});