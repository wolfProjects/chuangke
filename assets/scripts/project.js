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
        },

        logicTab: function (){
            $('.logic-hd span').click(function (){
                $(this).parents('li').addClass('active')
                    .siblings('li').removeClass('active');

                $('.logic-bd .item').eq($(this).parents('li').index()).fadeIn()
                    .siblings('.item').hide();
            });
        },
        editLogicUnit: function (){
            // operate text
            var textArr = ['更改项目套件', '完成编辑'];
            var isEditing = false;

            // switch editing status
            $('.changeUnit').click(function (){
                $('.logic-item-unit').addClass('editing');

                var textElem = $(this);
                // toggle edit status
                if (textElem.text() == textArr[0]){
                    // editing....
                    textElem.text(textArr[1]);
                    isEditing = true;
                    $('.unitSelect').show();
                } else {
                    // editing complete..
                    textElem.text(textArr[0]);
                    isEditing = false;
                    $('.unitSelect').hide();
                    resetSelect();
                }
            });

            // bind select
            $('.project-unit-list .thumb').click(function (){
                // check isEditing status
                if (isEditing) {
                    if ($(this).parent('.item').hasClass('selected')) {
                        $(this).parent('.item').removeClass('selected');
                    } else {
                        $(this).parent('.item').addClass('selected');
                    }
                }
            });

            // reset select
            function resetSelect (){
                $('.project-unit-list .item').removeClass('selected');
            }
        }
    },
    initUi: function (){
        project.comment();
        project.component.editUnit();
        project.component.logicTab();
        project.component.logicTab();
        project.component.editLogicUnit();
    }
};

$(function (){
    project.initUi();
});