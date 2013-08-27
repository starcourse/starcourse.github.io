$(document).ready(function(){
 $(window).scroll(function(){
  if( $(window).scrollTop() > 69 ){
  $("#nav").css({"margin-top":"0","position":"fixed","top":"0px"});
  $("#nav h3").css({"top":"-10px"});
  $("#socialul").css({"position":"fixed","top":"-10px"});
  } else {
  $('#nav').css({"position":"static","margin-top":"69px"});
  $("#nav h3").css({"top":"8px"});
  $('#socialul').css({"position":"relative","top":"-50px","right":"0"});
  }
 });
})
