$(document).ready(function(){
  // On load, make sure everything is laid correctly
  resizeStaff($(window).width());
  resizeContact($(window).width());
  resizeEvent($(window).width());
  fixContentMargins($(window).width());
  resizeTitle($(window).width());
  resizeCTA($(window).width());

  if(navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)){
    fontFallback();
  }

  // Scroll js should control nav at all times
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

$(window).resize(function(){
  var width = $(window).width();
  fixContentMargins(width);
  resizeStaff(width);
  resizeContact(width);
  resizeEvent(width);
  resizeTitle(width);
  resizeCTA(width);
})

// If mobile, seems font import doesn't work
function fontFallback() {
  $("html").css({"font-family":"Helvetica"});
}

function resizeCTA(width) {
  if(width <= 760) $("#banner a").css({"font-size":"10px"});
  else $("#banner a").css({"font-size":"26px"});
}

function resizeStaff(width) {
  $("#staff").height( (2200 - width)^2 * 3 );
}

function resizeTitle(width) {
  if(width < 1440) {$("#smdesc").height( 1800 - (2000 - width)^2 );}
}

function resizeEvent(width) {
  if(width < 1440) {$("#events").height( 1800 - (1440 - width) );}
}

function resizeContact(width) {
  if(width < 420){$("#contact").height(700);}
  else{$("#contact").height( (2200 - width)^2 * 8 );}
}

function fixContentMargins(width) {
  if(width < 800) {
    $(".content").css({"margin-left":"20px","width":"80%"});
  }
  else {
    $(".content").css({"margin-left":"100px"});
  }
}