jQuery(document).ready(function($) {
  console.log("Hello and welcome to my portfolio. Thank you for taking the time to view it and consider me for your job position. I hope this messages helps show you I leave no stone unturned.");

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
 # Add class to menu options
 --------------------------------------------------------------*/
  $('a:mega-menu-link').addClass('wobble-horizontal');
  $('a.mega-menu-link').addClass('wobble-horizontal');
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

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;
  	const hoveringElements = Array.from(document.querySelectorAll(':hover'));
	if(hoveringElements.filter(element => element.classList.contains("featured")).length === 1){
		const hoveringElement = hoveringElements.filter(element => element.classList.contains("featured"))[0];
		cursorGlow.style.left = `${x - (cursorGlow.offsetWidth/2)}px`;
		cursorGlow.style.top = `${y - (cursorGlow.offsetWidth/2)}px`;
		hoveringElement.appendChild(cursorGlow);
		cursorGlow.style.display = "initial";
	}else {
		cursorGlow.style.display = "none";
	}
})

/*--------------------------------------------------------------
# Counter Animator
--------------------------------------------------------------*/

$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function testScroll() {
  if (isScrolledIntoView($(".counting")) && !viewed) {
      viewed = true;
      $('.count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
  }
}
});
