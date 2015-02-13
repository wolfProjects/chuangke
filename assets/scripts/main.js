"use strict";

var app = {
    components: {
        kv: function(){
            jQuery(".kv").slide({titCell: '.kv-head ul', mainCell:".kv-body ul", delayTime: 450, autoPlay:true, autoPage: '<li></li>'});
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