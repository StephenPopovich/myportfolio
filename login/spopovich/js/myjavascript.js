
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
   $("h1").fadeIn();
   $("h2").fadeIn();
   $("h3").fadeIn();
   $("h4").fadeIn();
   $("p").fadeIn();
   $("a").fadeIn();
   $("li").fadeIn();


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
