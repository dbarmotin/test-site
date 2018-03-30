$(document).ready(function(){
    
    var center = $(window).width()/2;
    var urlMain = 'file:///D:/workspace/photo/index.html';
    var currentUrl = document.location.href;
    setRowHeight();
    setGridWidth();

    $(window).resize(function() {
        setRowHeight();
        setGridWidth();
    });

    function setRowHeight(){
        var height = $(window).height();
        console.log(height);
        $('.mainPost').css('height', height);
        $('.slider').css('height', height);
        $('.postWrap').css('height', height);

    }

    function setGridWidth(){
        var sidebarWidth = $('.sidebar').width();
        if(sidebarWidth == null){
            sidebarWidth = 0;
        }
        var screenWidth = $(window).width() - sidebarWidth;
        var gridWidth = 0;

        if(screenWidth > 1200 ){
            gridWidth = screenWidth / 4;
        }else if(screenWidth <= 1200 && screenWidth > 768){
            gridWidth = screenWidth / 3;

        }else if(screenWidth <= 768 && screenWidth >568){
            gridWidth = screenWidth / 2;
        }else{
            gridWidth = screenWidth;
        }
        console.log('sidebar width = ' + sidebarWidth);
        console.log('screenWidth width = ' + screenWidth);
        console.log('gridWidth width = ' + gridWidth);

        $('.productWrap').css('width', gridWidth);
    

    }


    $(function(){
        $(window).scroll(function() {
            if($(this).scrollTop() >= 1) {
                $('header').addClass('stickMenu');
                $('header > .logo > img').src="../images/logo2.png";
            }
            else{
                $('header').removeClass('stickMenu');
            }
        });
    });

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

