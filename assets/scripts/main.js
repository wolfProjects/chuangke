"use strict";

var app = {
    components: {
        kv: function(){
            jQuery(".m-kv").slide({titCell: '.m-kv-head ul', mainCell:".m-kv-body ul", delayTime: 450, autoPlay:true, autoPage: '<li></li>'});
        },
        waterfall: {
            data:  [
                {
                    'title': '凹凸曼刀削面',
                    'url': 'http://www.kuaibo.com',
                    'desc': '凹凸曼刀削面，好看，更好吃！',
                    'imgSrc': ''
                },
                {
                    'title': '凹凸曼刀削面',
                    'url': 'http://www.kuaibo.com',
                    'desc': '凹凸曼刀削面，好看，更好吃！',
                    'imgSrc': ''
                }
            ]
        }
    },
    initApp: function (){
        app.components.kv();
    }
};

$(function (){
    // init app
    app.initApp();
});