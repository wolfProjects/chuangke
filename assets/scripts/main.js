"use strict";

var app = {
    components: {
        kv: function(){
            jQuery(".m-kv").slide({titCell: '.m-kv-head ul', mainCell:".m-kv-body ul", delayTime: 450, autoPlay:true, autoPage: '<li></li>'});
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