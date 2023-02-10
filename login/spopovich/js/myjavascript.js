
var $=jQuery.noConflict();

$(document).ready(function(){

  function setAlt()
  {
      var div = document.querySelector(".imp-wrap");
          var image = div.querySelector("img");
              image.setAttribute("alt", "something");
  }
  /*--------------------------------------------------------------
    # Fade in elements
  --------------------------------------------------------------*/
   $("h1").fadeIn(500);
   $("h2").fadeIn(500);
   $("h3").fadeIn(500);
   $("h4").fadeIn(500);
   $("p").fadeIn(500);
   $("a").fadeIn(500);
   $("li").fadeIn(500);


  /*--------------------------------------------------------------
  # Removed Powered
  --------------------------------------------------------------*/
  $( "li:contains('more')" ).css( "list-style", "none" );

  /*--------------------------------------------------------------
  # Opens all PDF in new tab
  --------------------------------------------------------------*/
  $("a[target!='_blank'][href$='.pdf']").attr("target", "_blank");


  /*--------------------------------------------------------------
  # Accessibility Codes
  --------------------------------------------------------------*/
  $('.featured-image').attr('role', 'banner');
  $('#content').attr('role', 'banner');
  $('article').attr('role', 'article');

  $('.main-navigation').attr('aria-label', 'Main menu');


  $('.imp-wrap>img').attr('alt', 'Timeline Image');

  $('.imp-wrap>img').attr('alt', 'Timeline Image');

  $('#footer').attr('role', 'banner');
  $("li.active").addClass("current");

});
