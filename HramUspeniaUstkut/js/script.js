"use strict";$(document).ready((function(){(function(){let e=function(){$(window).scrollTop()>60?$("._anim-items").addClass("_active"):$("._anim-items").removeClass("_active")};return{init:function(){e(),$(window).scroll((function(){e()}))}}})().init(),$(".NavbarCollaps").click((function(){$(".NavbarCollaps, .menu, .navbar").toggleClass("collaps"),$("body").toggleClass("lock")})),$(".menu-link._index").hover((function(){$(".view").addClass("submenu_1"),$(".view").removeClass("submenu_2"),$(".view").removeClass("submenu_3"),$(".view").removeClass("submenu_4"),$(".view").removeClass("submenu_5"),$(".view").removeClass("promo_2"),$(".view").removeClass("promo_3")})),$(".menu-link._timetable").hover((function(){$(".view").addClass("submenu_2"),$(".view").removeClass("submenu_1"),$(".view").removeClass("submenu_3"),$(".view").removeClass("submenu_4"),$(".view").removeClass("submenu_5"),$(".view").addClass("promo_2"),$(".view").removeClass("promo_1"),$(".view").removeClass("promo_3")})),$(".menu-link._live-cerch").hover((function(){$(".view").addClass("submenu_3"),$(".view").removeClass("submenu_2"),$(".view").removeClass("submenu_1"),$(".view").removeClass("submenu_4"),$(".view").removeClass("submenu_5"),$(".view").addClass("promo_3"),$(".view").removeClass("promo_1"),$(".view").removeClass("promo_2")})),$(".menu-link._contacts").hover((function(){$(".view").addClass("submenu_4"),$(".view").removeClass("submenu_5"),$(".view").removeClass("submenu_1"),$(".view").removeClass("submenu_2"),$(".view").removeClass("submenu_3"),$(".view").addClass("promo_1"),$(".view").removeClass("promo_3"),$(".view").removeClass("promo_2")})),$(".menu-link._charity").hover((function(){$(".view").addClass("submenu_5"),$(".view").removeClass("submenu_2"),$(".view").removeClass("submenu_1"),$(".view").removeClass("submenu_4"),$(".view").removeClass("submenu_3"),$(".view").addClass("promo_1"),$(".view").removeClass("promo_2"),$(".view").removeClass("promo_3")})),$(".logo-link").hover((function(){$(".view").removeClass("submenu_3"),$(".view").removeClass("submenu_2"),$(".view").removeClass("submenu_1")})),ymaps.ready((function(){new ymaps.Map("map",{center:[56.77762191889459,105.70279464664783],zoom:16})}))}));