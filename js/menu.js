$(document).ready(function(){
    
    var center = $(window).width()/2;
    var urlMain = 'file:///D:/workspace/photo/index.html';
    var currentUrl = document.location.href;
    setRowHeight();

    $(window).resize(function() {
        setRowHeight();
    });

    function setRowHeight(){
        var height = $(window).height();
        console.log(height);
        $('.mainPost').css('height', height);
        $('.slider').css('height', height);
        $('.postWrap').css('height', height);

    }
   /* $('.menu').fadeOut('300', function() {});

    $(".toggleMenu").click(function(e) {
            e.preventDefault();
            $(this).toggleClass("active");
            $(this).toggleClass('close-nav');
            if(currentUrl == urlMain){ 
                $('.logo').toggleClass('logo_black');
            }
            if($(this).hasClass('close-nav')){
                $('.sidebar').animate({ left: '0px' }, 400);
                $('.menu').fadeIn(1500, function() {});
            }else{
                $('.menu').fadeOut('300', function() {});
                $('.sidebar').animate({ left: '-300px' }, 400);
                
            }
    });

    $('.submenu').click(function(e) {
        e.preventDefault();
        $(this).parent().find('ul').slideToggle(300);
        $(this).toggleClass('menu_active');
    });

*/

});

