$(document).ready(function(){
    var height = $(window).height();
    var $slider1 = $("#slider1");
    $slider1.on('init', function () {
        mouseWheel($slider1);
    }).slick({
        dots: true,
        arrows: false,
        vertical: true,
       // infinite: true
    });
    var $slider2 = $("#slider2");
    $slider2.on('init', function () {
        mouseWheel($slider2);
    }).slick({
        dots: false,
        arrows: false,
        vertical: true,
       // infinite: true
    });
    var $slider = $("#slider");
    function mouseWheel($slider) {
        $(window).on('wheel', { $slider: $slider }, mouseWheelHandler);
    }
    function mouseWheelHandler(event) {
        event.preventDefault();
        var $slider = event.data.$slider;
        var delta = event.originalEvent.deltaY;
        if (delta < 0) {
            $slider1.slick('slickPrev');
             $slider2.slick('slickNext');
        } else {
            $slider2.slick('slickPrev');
            $slider1.slick('slickNext');
        }
    }
});
