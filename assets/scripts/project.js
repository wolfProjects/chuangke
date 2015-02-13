/* Qianglong Mo (SukeBeta) 2015 */

var project = {
    comment: function (){
        if ($('.redactor-main')){
            $('.redactor-main').redactor();
        }
    },
    component: {
        editUnit: function (){
            // operate text
            var textArr = ['编辑', '取消'];

            // toggle edit status
            var unitModule = $('.project-unit');
            unitModule.find('.text').click(function (){
                $('.project-unit').toggleClass('status-edit');

                // change operate text
                var textElem = $(this);
                if (textElem.text() == textArr[0]){
                    textElem.text(textArr[1]);
                } else {
                    textElem.text(textArr[0]);
                    unitModule.find('.select-icon').removeClass('active');
                }
            });

            // select unit item
            unitModule.find('.select-icon').click(function (){
                $(this).toggleClass('active');
            });
        }
    },
    initUi: function (){
        project.comment();
        project.component.editUnit();
    }
};

$(function (){
    project.initUi();
});