$(document).ready(function() {
    $(window).on('scroll',function(){
      if($(window).scrollTop() > 500){
          $('#btnBackToTop').addClass('show');
        /*  $('#btnBackToTop').fadeIn(); */
      }else{
        $('#btnBackToTop').removeClass('show');
         /* $('#btnBackToTop').fadeOut(); */
      }
    });

    $('#btnBackToTop').click(function(e){
        e.preventDefault();
        $("html,body").animate({
            scrollTop:0
        },500);
    })
});

