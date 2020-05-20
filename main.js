$(function() {
  $('.side_wrapper').find('li').on('click',function(){
    $('.side_wrapper li').css('background-color','#F5B4B3');
    $(this).css('background-color','red');
  });
  $('.top_menu').find('li').on('mouseenter',function () {
    $('.top_menu li').css('background-color','#F5B4B3');
    $(this).css('background-color','red');
  })
  .on('mouseout',function() {
    $('.top_menu li').css('background-color','#F5B4B3');
  });
  let clicked = true
  $('.text_emerge p').on('click',function(){
    clicked = !clicked
    if (clicked == true) {
      $(this).next('span').addClass('hidden');
    } else {
      $(this).next('span').removeClass('hidden');
    }
  });
});
