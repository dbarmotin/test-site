$(document).ready(function(){
    
    var count = 0;
    document.getElementById('sum').innerHTML = count;
    var moreBtn = $('#more');
    var lessBtn = $('#less');

    setGalerySize();
    moreBtn.click(function(event) {
        count+=1;
        document.getElementById('sum').innerHTML = count;

    });
    lessBtn.click(function(event) {
        if(count > 0){
            count-=1;
            document.getElementById('sum').innerHTML = count;
        }
    });

    $(window).resize(function() {
        setGalerySize();
    });

    function setGalerySize(){
        var galeryWidth = $('#galery').width();
        var thumbWidth = galeryWidth / 4;
        $('.slider-nav').css('width', galeryWidth);
        $('.slider-for').css('width', galeryWidth);
        $('.slider-for').css('height', galeryWidth);
        $('.slider-for  img').css('height', galeryWidth);
        $('.slider-nav  img').css('width', thumbWidth);
        $('.slider-nav  img').css('height', thumbWidth);

    }

    

});

