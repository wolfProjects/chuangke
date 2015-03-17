/* Qianglong Mo (SukeBeta) 2015 */
$(function (){
    // 表单 团队专长
    $('.goodIn').change(function (){
        $(this).val() == 'another' ?  $('.anotherText').removeClass('hide') : $('.anotherText').addClass('hide');
    });
});