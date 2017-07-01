 $(document).ready(function(){ 
    var touch   = $('#touch-menu');
    var menu    = $('.menu');
 
    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle(400);
    });
    
    $(window).resize(function(){
        var w = $(window).width();
        if(w > 767 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});