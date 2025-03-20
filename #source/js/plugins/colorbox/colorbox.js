$(".group").colorbox({
    rel: "group",
    //slidewshow: true,
    transition: "fade",
    with: "90%",
    height: "90%",
    scrolling: false,
    returnFocus: false,
});

$(".colorbox").colorbox({
    transition: "fade",
    scrolling: false,
    with: "90%",
    height: "90%",
    returnFocus: false,
});

jQuery.colorbox.settings.maxWidth = '95%';
jQuery.colorbox.settings.maxHeight = '95%';

/*
Функция ресайза ColorBox
*/
var resizeTimer;
function resizeColorBox() {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        if (jQuery('#cboxOverlay').is(':visible')) {
            jQuery.colorbox.load(true);
        }
    }, 300);
}

/*
Ресайз при изменении размера окна браузера и изменении ориентации мобильного устройства
*/
jQuery(window).resize(resizeColorBox);
window.addEventListener("orientationchange", resizeColorBox, false);