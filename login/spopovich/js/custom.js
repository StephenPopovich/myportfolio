jQuery(document).ready(function($) {
  console.log("testing2");

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
  # Opens all external links in new tab
  --------------------------------------------------------------*/
  $.expr[':'].external = function(obj) {
      return !obj.href.match(/^mailto\:/) && (obj.hostname != location.hostname);
  };
  $('a:external').addClass('external');
 $(".external").attr("target","_blank");



  /*--------------------------------------------------------------
  # Accessibility Codes
  --------------------------------------------------------------*/
  $('.featured').attr('role', 'banner');
  $('#content').attr('role', 'banner');
  $('article').attr('role', 'article');

  $('.main-navigation').attr('aria-label', 'Main menu');

  $('#footer').attr('role', 'banner');
  $("li.active").addClass("current");
});
