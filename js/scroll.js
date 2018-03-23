$(document).ready(function(){
    
    var height = $(window).height()/2;
    var albumHeight1 = $('.albums').height()/2;
    var top1 = height - albumHeight1;
    var top2 = height - 325;

    var albumsWidth = 0;

    $(".album").each(function(){
        albumsWidth+=$(this).outerWidth(true);
        console.log(albumsWidth);
    });


    $('.albums').css('top', top1);
    $('.albums-2').css('top', top2);

    (function ($) {
    $.fn.Hscroll = function (speed,scroll) {
        scroll = scroll === undefined ? 1 : scroll;
        speed = speed === undefined ? 1 : speed;
        $parent = $(this);
        if ($parent.data('Hscroll') !== undefined) return $parent;
        $parent.data('Hscroll', 1);
        var pass = $('<div>').css({
            position: "fixed",
            top: "0",
            width: "3px",
            cursor: "pointer",
            height: "3px",
                "margin-top": "-1px",
                "margin-left": "-1px",
            background: "black",
            opacity: "0",
                "overflow-x": "scroll",
                "z-index": "10000"
        });
        pass.append($('<div>').height(get_max_width($parent)*3 / speed));

        $('body').append(pass);
        if (scroll !== 0) {
            $parent.css('overflow-x', "scroll");
        } else {
            $parent.css('overflow-x', "hidden");
        }

        pass.mousedown(function (e) {
            $this = $(this);
            $this.css('z-index', '-1000');
            $parent.trigger(e);
            $parent.mouseup(function (e) {
                $this.css('z-index', '1000');
            });
        });
        $parent.children().bind('mousemove', function (e, d) {
            pass.css('top', e.clientY);
            pass.css('left', e.clientX);
        });
        $(document).on('scroll',function (e) {            
            pass.css({
                'top': -10,
                'left': -10
            });

        });

        var prevScroll = 0;
        
        var isTop = false;

        pass.scroll(function () {
            var currentScroll = $parent.scrollLeft();
            if(currentScroll > prevScroll){
                isTop = true;
                prevScroll = currentScroll;
            }else{
                isTop = false;
                prevScroll = currentScroll;
            }

            var scrollOffset = $parent.scrollLeft() + speed;
            var w = albumsWidth - $parent.width() - 15;
            if(scrollOffset >= w && isTop){
                $parent.scrollLeft(w);
            }else{
                $parent.scrollLeft(pass.scrollTop() * speed);
            }
        });

        $parent.scroll(function () {
            pass.scrollTop($parent.scrollLeft() / speed);
        });
    };

    function get_max_width(element) {
        return Math.max.apply(null, element.children().map(function (a) {
            return $(this).outerWidth()
        }));
    }
})(jQuery);
$('#parent').Hscroll(151);


});

