/* Qianglong Mo (SukeBeta) 2015 */

var project = {
    comment: function (){
        if ($('.redactor-main')){
            $('.redactor-main').redactor();
        }
    },
    initUi: function (){
        project.comment();
    }
};

$(function (){
    project.initUi();
});