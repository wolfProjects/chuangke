"use strict";

var app = {
    components: {
        kv: function(){
            jQuery(".m-kv").slide({titCell: '.m-kv-head ul', mainCell:".m-kv-body ul", delayTime: 450, effect:'left', autoPlay:true, autoPage: '<li></li>'});
        },

        headerFloatPanel: {
            headerWechat: function (){
                $('.header-search').hide();
                $('.header-tips').slideDown(function (){
                    $('.header-wechat').fadeIn();
                });
            },

            headerSearch: function (){
                $('.header-wechat').hide();
                $('.header-tips').slideDown(function (){
                    $('.header-search').fadeIn();
                });
            },

            init: function (){
                var that = this;

                $('.header-float .item02').click(function (){
                    that.headerSearch();
                });

                $('.header-float .item03').click(function (){
                    that.headerWechat();
                });

                // set tips auto hide
                var headerTipsTimer = null;

                $('.header-tips, .header-float .item').mouseout(function (){
                    headerTipsTimer = setTimeout(function (){
                        // hide tips
                        $('.header-tips').fadeOut(function (){
                            $('.header-wechat, .header-search').hide();
                        });
                    }, 200);
                });

                $('.header-tips, .header-float .item').mouseover(function (){
                    // cancel auto hide
                    clearTimeout(headerTipsTimer);
                });
            }
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

        imageFilePreview: function (){
            function upLoadImg (){
                function change(obj, img) {
                    var pic = $(img);
                    var file = $(obj);
                    var isCreatedImg = false;
                    var ext=file.val().substring(file.val().lastIndexOf(".")+1).toLowerCase();
                    // gif在IE浏览器暂时无法显示
                    if(ext!='png'&&ext!='jpg'&&ext!='jpeg'){
                        alert("文件必须为图片！"); return;
                    }
                    // IE浏览器
                    if (document.all) {
                        file.select();
                        file.blur();
                        var reallocalpath = document.selection.createRange().text;
                        var ie6 = /msie 6/i.test(navigator.userAgent);
                        // IE6浏览器设置img的src为本地路径可以直接显示图片
                        if (ie6) pic.src = reallocalpath;
                        else {
                            /*这种方式不能控制大小*/
                            // 非IE6版本的IE由于安全问题直接设置img的src无法显示本地图片，但是可以通过滤镜来实现
                            //pic[0].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src=\"" + reallocalpath + "\")";
                            // 设置img的src为base64编码的透明图片 取消显示浏览器默认图片
                            // pic[0].src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
                            pic = pic.parent('div');
                            pic.html('');
                            pic[0].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
                            pic[0].filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = reallocalpath;
                            pic[0].style.width = "580px";
                            pic[0].style.height = "340px";
                        }

                        isCreatedImg = true;
                    }else{
                        html5Reader(file, img);
                        isCreatedImg = true;
                    }

                    return isCreatedImg;
                }

                function html5Reader(file, img){
                    var file = file[0].files[0];
                    var reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = function(e){
                        var pic = $(img);
                        pic.attr("src", this.result);

                    }
                }

                // call
                $('.chooseFile').change(function (){
                    var changeResult = change($(this), '#img');

                    if (changeResult) {
                        $('.uploadImg-before').hide();
                        $('.uploadImg-after').show();
                    } else {
                        $('.uploadImg-before').show();
                        $('.uploadImg-after').hide();
                    }
                });

                // reset upload;
                $('.cancelSelect').click(function (){
                    $('.uploadImg-before').show();
                    $('.uploadImg-after').hide();
                });
            }
            upLoadImg();
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
        app.components.headerFloatPanel.init();
        app.components.formValidation.init();
        app.components.floatPanel.init();
        app.components.log.init();
        app.components.imageFilePreview();


        // log & registration
        $('.header-logInBtn').click(function (){
            app.components.log.logIn();
        });

        $('.header-registerBtn').click(function (){
            app.components.log.registration();
        });

        // header logo animate
        $('.header-logo').mouseover(function (){
            $(this).addClass('animation');
        }).mouseout(function (){
            $(this).removeClass('animation');
        });
    }
};

$(function (){
    // init app
    app.initApp();
});