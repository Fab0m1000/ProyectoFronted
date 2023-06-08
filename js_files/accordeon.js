$(document).ready(function(){
    $('.item1,.item2,.item3').hide();


    $('.title1').on('click', function(){
        $('.item1').slideToggle();
    });
    $('.title2').on('click', function(){
      $('.item2').slideToggle();
    });
  $('.title3').on('click', function(){
    $('.item3').slideToggle();
  });
});