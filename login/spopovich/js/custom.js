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
  $('article').attr('role', 'article');

  $('.main-navigation').attr('aria-label', 'Main menu');

  $('#footer').attr('role', 'banner');
  $("li.active").addClass("current");

  /*--------------------------------------------------------------
  # Typerwritter effect
  --------------------------------------------------------------*/

(function($) {

  function typeString($target, str, cursor, delay, cb) {
    $target.html(function(_, html) {
      return html + str[cursor];
    });

    if (cursor < str.length - 1) {
      setTimeout(function() {
        typeString($target, str, cursor + 1, delay, cb);
      }, delay);
    } else {
      cb();
    }
  }

  function deleteString($target, delay, cb) {
    var length;

    $target.html(function(_, html) {
      length = html.length;
      return html.substr(0, length - 1);
    });

    if (length > 1) {
      setTimeout(function() {
        deleteString($target, delay, cb);
      }, delay);
    } else {
      cb();
    }
  }

  // jQuery hook
  $.fn.extend({
    teletype: function(opts) {
      var settings = $.extend({}, $.teletype.defaults, opts);

      return $(this).each(function() {
        (function loop($tar, idx) {
          // type
          typeString($tar, settings.text[idx], 0, settings.delay, function() {
            // delete
            setTimeout(function() {
              deleteString($tar, settings.delay, function() {
                loop($tar, (idx + 1) % settings.text.length);
              });
            }, settings.pause);
          });

        }($(this), 0));
      });
    }
  });

  // plugin defaults
  $.extend({
    teletype: {
      defaults: {
        delay: 100,
        pause: 5000,
        text: []
      }
    }
  });
}(jQuery));


/*** init ***/

$('#target').teletype({
  text: [
    'a developer.',
    'a manager.',
    'an engineer.',
    'a businessman.'
  ]
});

$('#cursor').teletype({
  text: ['_', ' '],
  delay: 0,
  pause: 500
});
});
