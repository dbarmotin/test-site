$(document).ready(function(){
    
    var width = $(window).width();
    var center = width/2;
    var height = $(window).height();

    var socialOffsetX = width-100;
    var socialOffsetY = height-50;

    function passEventLower(e) {
      e.preventDefault();
      e.stopPropagation();
      var $el = $(document.elementFromPoint(e.pageX, e.pageY));
      var c = $el.css('cursor') || 'none';
      if (c == 'auto')
        c = 'none';
      $(e.target).css('cursor', c);
      $el.trigger(e.type);
    }
    $('.mySvg').on('mousedown mouseup click ', function(e) {
      var $a = $(this);
      $a.hide();
      passEventLower(e);
      $a.show();
      return false;
    });

    ns4 = (document.layers)? true:false
    ie4 = (document.all)? true:false

    function init() {
        if (ns4) {document.captureEvents(Event.MOUSEMOVE);}
        document.onmousemove=mousemove;
    }
    function mousemove(event) {
        var mouse_x = y = 0;
        if (document.attachEvent != null) {
            mouse_x = window.event.clientX;
            mouse_y = window.event.clientY;
        } else if (!document.attachEvent && document.addEventListener) {
            mouse_x = event.clientX;
            mouse_y = event.clientY;
        }

        if(mouse_x < 200 && mouse_y < 100){
            $('.mySvg').css('opacity','0');
            
        }else if(mouse_x > socialOffsetX && mouse_y > socialOffsetY){
            $('.mySvg').css('opacity','0');
        }else{
            $('.mySvg').css('opacity','1');
        }

        if (mouse_x > center){
            $('.mySvg__next').css('display','block');
            $('.mySvg__prev').css('display','none');
        }else{
            $('.mySvg__prev').css('display','block');
            $('.mySvg__next').css('display','none');
        }
    }
    init()

    
});