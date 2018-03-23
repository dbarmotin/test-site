$(document).ready(function(){
    
    var introText = $('.fullscr__intro').offset().top;
    
    //===== липкое меню =====//

    $(window).scroll(function(){

        if( $(window).scrollTop() > introText ) {
           $('.fullscr__intro').fadeOut('400', function() {});
           $('#header').removeClass('fixed_post');
           $('.fullscr img').addClass('fullscr__blur');
        }else {
          $('.fullscr__intro').fadeIn('400', function() {});
          $('#header').addClass('fixed_post');
          $('.fullscr img').removeClass('fullscr__blur');
        }
        
    });
});