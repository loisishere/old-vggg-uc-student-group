var hist=document.referrer;

  $(document).ready(function(){
//Buttons
  $('a:#homeBut').mousedown(function () {
      $(this).css('background-image','url(images/PNGs/homeDown.png)');
    });
      $('a:#memBut').mousedown(function () {
      $(this).css('background-image','url(images/PNGs/memberDown.png)');
    });
 $('a:#vidBut').mousedown(function () {
      $(this).css('background-image','url(images/PNGs/videoDown.png)');
    });
     $('a:#abouBut').mousedown(function () {
      $(this).css('background-image','url(images/PNGs/aboutDown.png)');
    });
         $('a:#contBut').mousedown(function () {
      $(this).css('background-image','url(images/PNGs/contactDown.png)');
    });
          $('a:#evenBut').mousedown(function () {
      $(this).css('background-image','url(images/PNGs/eventDown.png)');
    });
    
    var anime = 1000;
    var half=500;

  //history.previous
  $('a').live('click', function(){
       var href = $(this).attr('href');
  if($(this).is('#homeBut')){
  $('#logo').animate({top: '230px'}, half);
  $('#logo').animate({marginLeft: '165px'}, half);
  $('#content').fadeOut(anime);
$('#hand').fadeOut(half);
$('#geek').fadeOut(half);
}else if($(this).is('#contBut')){
   $('#logo').animate({top: '55px'}, half);
  $('#logo').animate({marginLeft: '105px'}, half);
$('#content').fadeOut(anime);
$('#hand').fadeOut(half);
$('#geek').fadeOut(half);
  /*  */
}else if($(this).is('#abouBut')){

   $('#logo').animate({top: '45px'}, half);
  $('#logo').animate({marginLeft: '200px'}, half);
$('#content').fadeOut(anime);
$('#hand').fadeOut(half);
$('#geek').fadeOut(half);
}else if($(this).is('#evenBut')){
   $('#logo').animate({top: '185px'}, half);
  $('#logo').animate({marginLeft: '185px'}, half);
$('#content').fadeOut(anime);
$('#hand').fadeOut(half);
$('#geek').fadeOut(half);
}else if($(this).is('#memBut')){
   $('#logo').animate({top: '25px'}, half);
  $('#logo').animate({marginLeft: '150px'}, half);
$('#content').fadeOut(anime);
$('#hand').fadeOut(half);
$('#geek').fadeOut(half);
}else if($(this).is('#vidBut')){
   $('#logo').animate({top: '55px'}, half);
  $('#logo').animate({marginLeft: '0px'}, half);
$('#content').fadeOut(anime);
$('#hand').fadeOut(half);
$('#geek').fadeOut(half);
}
setTimeout(function () {
    window.location = href;}, anime);
  return false;
  });
      $('button').click(function () {
      $('#contact').slideToggle('slow');
    });

});
     //513-362-0733
