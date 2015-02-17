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
        },

        formValidation: {
            init: function (){
                // get validation code
                (function (){
                    var btnValidationAbleFlag = true;
                    $('.getValidationCode').click(function (){
                        var time = 45;

                        if (btnValidationAbleFlag == true){
                            // TODO: ajax get validation code here;

                            btnValidationAbleFlag = false;
                            $(this).addClass('btn-disabled');
                            $('.getValidationCode').text('再次获取验(' + (time--) +')');

                            var timer = setInterval(function (){
                                if (time == -1){
                                    clearInterval(timer);
                                    $('.getValidationCode').text('获取验证码').removeClass('btn-disabled');
                                    btnValidationAbleFlag = true;
                                } else {
                                    $('.getValidationCode').text('再次获取(' + (time--) +')');
                                }
                            }, 1000);
                        } else {
                        }
                    });
                })()
            }
        },

        floatPanel: {
            successMessage: function (floatPanel){
                $(floatPanel).find('.m-form').addClass('vh');
                $(floatPanel).find('.m-floatpanel-success').fadeIn();
            },
            init: function (){
                $('.m-floatpanel-close').click(function (){
                    $(this).parents('.m-floatpanel').fadeOut();
                });
            }
        },

        log: {
            logIn: function (){
                $('.m-floatpanel').fadeOut();
                $('.logInPanel').fadeIn();
            },
            registration: function (){
                $('.m-floatpanel').fadeOut();
                $('.registrationPanel').fadeIn();
            },
            init: function (){
                // to login
                $('.toLogIn').click(function (){
                    $('.m-floatpanel').hide();
                    $('.logInPanel').show();
                });

                // to registration
                $('.toRegistration').click(function (){
                    $('.m-floatpanel').hide();
                    $('.registrationPanel').show();
                });

                // to reset password
                $('.toForgotPassword').click(function (){
                    $('.m-floatpanel').hide();
                    $('.resetPasswordPanel').show();
                });

                // reset password step
                $('.resetPasswordNextStep').click(function (){
                    // ajax below
                    if (true) {
                        app.components.floatPanel.successMessage('.resetPasswordPanel');
                    } else {
                        // do some tips for user
                    }
                });
            }
        }
    },
    initApp: function (){
        app.components.kv();
        app.components.formValidation.init();
        app.components.floatPanel.init();
        app.components.log.init();
    }
};

$(function (){
    // init app
    app.initApp();

    // log & registration
    $('.header-logInBtn').click(function (){
        app.components.log.logIn();
    });

    $('.header-registerBtn').click(function (){
        app.components.log.registration();
    });
});