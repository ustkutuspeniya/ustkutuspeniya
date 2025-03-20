'use strict';
$(document).ready(function () {

    /*Фон при прокрутке*/
    const Layout = function () {


        // handle on page scroll
        let handleHeaderOnScroll = function () {
            if ($(window).scrollTop() > 60) {
                $("._anim-items").addClass("_active");
            } else {
                $("._anim-items").removeClass("_active");
            }
        }

        return {
            init: function () {
                // initial setup for fixed header
                handleHeaderOnScroll();

                // handle minimized header on page scroll
                $(window).scroll(function () {
                    handleHeaderOnScroll();
                });
            },


        };
    }();
    Layout.init();
    /*----------------------------*/




    $(".NavbarCollaps").click(function () {
        $(".NavbarCollaps, .menu, .navbar").toggleClass("collaps");
        $("body").toggleClass("lock");
    });



    /*Субменю - сократить код*/
    $(".menu-link._index").hover(function () {
        $(".view").addClass("submenu_1");
        $(".view").removeClass("submenu_2 submenu_3 submenu_4 submenu_5");

        /*Классы отвечающие за смену изображения*/
        $(".view").removeClass("promo_2 promo_3");

    }
    );
    $(".menu-link._timetable").hover(function () {
        $(".view").addClass("submenu_2");
        $(".view").removeClass("submenu_1 submenu_3 submenu_4 submenu_5");

        /*Классы отвечающие за смену изображения*/
        $(".view").addClass("promo_2");
        $(".view").removeClass("promo_1 promo_3");
    }
    );
    $(".menu-link._live-cerch").hover(function () {
        $(".view").addClass("submenu_3");
        $(".view").removeClass("submenu_2 submenu_1 submenu_4 submenu_5");

        /*Классы отвечающие за смену изображения*/
        $(".view").addClass("promo_3");
        $(".view").removeClass("promo_1 promo_2");
    }
    );
    $(".menu-link._contacts").hover(function () {
        $(".view").addClass("submenu_4");
        $(".view").removeClass("submenu_5 submenu_1 submenu_2 submenu_3");

        /*Классы отвечающие за смену изображения*/
        $(".view").addClass("promo_1");
        $(".view").removeClass("promo_3");
        $(".view").removeClass("promo_2");
    }
    );
    $(".menu-link._charity").hover(function () {
        $(".view").addClass("submenu_5");
        $(".view").removeClass("submenu_2 submenu_1 submenu_4 submenu_3");

        /*Классы отвечающие за смену изображения*/
        $(".view").addClass("promo_1");
        $(".view").removeClass("promo_2 promo_3");
    }
    );

    $(".logo-link").hover(function () {
        $(".view").removeClass("submenu_1 submenu_2 submenu_3 submenu_4 submenu_5");
    });


    /*-----------------------------------------------*/
    // Функция для предзагрузки изображений
    function preloadImages(images) {
        var i, j, img;
        for (i = 0; i < images.length; i++) {
            img = new Image();
            img.src = images[i];
            // Добавляем обработчик события загрузки изображения
            img.onload = function () {
                // Изображение загружено, можно добавить его в DOM или использовать
                // в других частях приложения
                console.log('Изображение ' + this.src + ' загружено');
            };
            // Добавляем обработчик события ошибки загрузки изображения
            img.onerror = function () {
                console.error('Ошибка загрузки изображения ' + this.src);
            };
        }
    }

    // Предзагружаем изображения
    var imagesToPreload = [
        '/HramUspeniaUstkut/img/background-live-cerch.jpg',
        '/HramUspeniaUstkut/img/background-timetable.jpg',
    ];
    preloadImages(imagesToPreload);
    /*----------------------------------------------*/


    function init() {
        let map = new ymaps.Map('map', {
            center: [56.77762191889459, 105.70279464664783],
            zoom: 16,
        });

    }
    ymaps.ready(init);

});

