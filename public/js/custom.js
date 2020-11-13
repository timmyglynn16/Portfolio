window.onload = fadeIn;

function fadeIn() {	
	var fade = document.getElementById("zoom-box"); 
	var line1= document.getElementById("line1")
	var line2 = document.getElementById("line2")
	var line3 = document.getElementById("line3")
	var opacity = 0; 
	var intervalID = setInterval(function() { 

		if (opacity < 1) { 
			opacity = opacity + 0.1
			fade.style.opacity = opacity; 
			line1.style.display = "none";
			line2.style.display = "none";
			line3.style.display = "none";
		} else { 
			clearInterval(intervalID); 
		} 
	}, 100); 

	setTimeout(function() {			
		$('.content').css('display', 'none');
		$('.content').fadeIn(2000)
	}, 1500);

	setTimeout(function() {			
		$('#line3').css('display', 'none');
		$('#line3').fadeIn(1000) 
	}, 3500);

}

$(document).ready(function () {
	var breakpoint = 840;

	// If the screen is smaller then 840px wide remove all classes.
	if ($(window).width() < breakpoint) {
		$('#js-slidein').removeClass('js-slidein');
	}

	// Check which of the elements with this class is visible on the page
	$('#js-slidein').each(function (i) {
		var bottomObject = $(this).offset().top;
		var bottomWindow = $(window).scrollTop() + $(window).height();

		if (bottomWindow > 1300) {
			$(this).removeClass('js-slidein');
		}
	});

	// Trigger the slide-in effect on scroll
	$(window).scroll(function () {
		$('#js-slidein').each(function (i) {
			var bottomObject = $(this).offset().top + $(this).outerHeight() / 3;
			var bottomWindow = $(window).scrollTop() + $(window).height();

			if (bottomWindow > 1300) {
				$(this).addClass('js-slidein-visible');
			}
		});
	});
});

$(document).ready(function () {
	var breakpoint = 840;

	// If the screen is smaller then 840px wide remove all classes.
	if ($(window).width() < breakpoint) {
		$('#js-slidein2').removeClass('js-slidein2');
	}

	// Check which of the elements with this class is visible on the page
	$('#js-slidein2').each(function (i) {
		var bottomObject = $(this).offset().top;
		var bottomWindow = $(window).scrollTop() + $(window).height();

		if (bottomWindow > 2000) {
			$(this).removeClass('js-slidein2');
		}
	});

	// Trigger the slide-in effect on scroll
	$(window).scroll(function () {
		$('#js-slidein2').each(function (i) {
			var bottomObject = $(this).offset().top + $(this).outerHeight() / 3;
			var bottomWindow = $(window).scrollTop() + $(window).height();

			if (bottomWindow > 2000) {
				$(this).addClass('js-slidein2-visible');
			}
		});
	});
});

$(document).ready(function () {
	var breakpoint = 840;

	// If the screen is smaller then 840px wide remove all classes.
	if ($(window).width() < breakpoint) {
		$('#js-slidein-content').removeClass('js-slidein-content');
	}

	// Check which of the elements with this class is visible on the page
	$('#js-slidein-content').each(function (i) {
		var bottomObject = $(this).offset().top;
		var bottomWindow = $(window).scrollTop() + $(window).height();

		if (bottomWindow > bottomObject) {
			$(this).removeClass('js-slidein-content');
		}
	});

	// Trigger the slide-in effect on scroll
	$(window).scroll(function () {
		$('#js-slidein-content').each(function (i) {
			var bottomObject = $(this).offset().top + $(this).outerHeight() / 3;
			var bottomWindow = $(window).scrollTop() + $(window).height();

			if (bottomWindow > bottomObject) {
				$(this).addClass('js-slidein-content-visible');
			}
		});
	});
});

$(document).ready(function () {
	var breakpoint = 840;

	// If the screen is smaller then 840px wide remove all classes.
	if ($(window).width() < breakpoint) {
		$('#js-slidein-content2').removeClass('js-slidein-content2');
	}

	// Check which of the elements with this class is visible on the page
	$('#js-slidein-content2').each(function (i) {
		var bottomObject = $(this).offset().top;
		var bottomWindow = $(window).scrollTop() + $(window).height();

		if (bottomWindow > 1300) {
			$(this).removeClass('js-slidein-content2');
		}
	});

	// Trigger the slide-in effect on scroll
	$(window).scroll(function () {
		$('#js-slidein-content2').each(function (i) {
			var bottomObject = $(this).offset().top + $(this).outerHeight() / 3;
			var bottomWindow = $(window).scrollTop() + $(window).height();

			if (bottomWindow > 1300) {
				$(this).addClass('js-slidein-content2-visible');
			}
		});
	});
});

$(document).ready(function () {
	var breakpoint = 840;

	// If the screen is smaller then 840px wide remove all classes.
	if ($(window).width() < breakpoint) {
		$('#js-slidein-content3').removeClass('js-slidein-content3');
	}

	// Check which of the elements with this class is visible on the page
	$('#js-slidein-content3').each(function (i) {
		var bottomObject = $(this).offset().top;
		var bottomWindow = $(window).scrollTop() + $(window).height();

		if (bottomWindow > bottomObject) {
			$(this).removeClass('js-slidein-content3');
		}
	});

	// Trigger the slide-in effect on scroll
	$(window).scroll(function () {
		$('#js-slidein-content3').each(function (i) {
			var bottomObject = $(this).offset().top + $(this).outerHeight() / 3;
			var bottomWindow = $(window).scrollTop() + $(window).height();

			if (bottomWindow > bottomObject) {
				$(this).addClass('js-slidein-content3-visible');
			}
		});
	});
});

$(document).ready(function () {
	var breakpoint = 840;

	// If the screen is smaller then 840px wide remove all classes.
	if ($(window).width() < breakpoint) {
		$('#js-slidein-content4').removeClass('js-slidein-content4');
	}

	// Check which of the elements with this class is visible on the page
	$('#js-slidein-content4').each(function (i) {
		var bottomObject = $(this).offset().top;
		var bottomWindow = $(window).scrollTop() + $(window).height();

		if (bottomWindow > bottomObject) {
			$(this).removeClass('js-slidein-content4');
		}
	});

	// Trigger the slide-in effect on scroll
	$(window).scroll(function () {
		$('#js-slidein-content4').each(function (i) {
			var bottomObject = $(this).offset().top + $(this).outerHeight() / 3;
			var bottomWindow = $(window).scrollTop() + $(window).height();

			if (bottomWindow > bottomObject) {
				$(this).addClass('js-slidein-content4-visible');
			}
		});
	});
});

$(document).ready(function () {
	var breakpoint = 840;

	// If the screen is smaller then 840px wide remove all classes.
	if ($(window).width() < breakpoint) {
		$('#js-slidein-content2-a').removeClass('js-slidein-content2-a');
	}

	// Check which of the elements with this class is visible on the page
	$('#js-slidein-content2-a').each(function (i) {
		var bottomObject = $(this).offset().top;
		var bottomWindow = $(window).scrollTop() + $(window).height();

		if (bottomWindow > bottomObject) {
			$(this).removeClass('js-slidein-content2-a');
		}
	});

	// Trigger the slide-in effect on scroll
	$(window).scroll(function () {
		$('#js-slidein-content2-a').each(function (i) {
			var bottomObject = $(this).offset().top + $(this).outerHeight() / 3;
			var bottomWindow = $(window).scrollTop() + $(window).height();

			if (bottomWindow > bottomObject) {
				$(this).addClass('js-slidein-content2-a-visible');
			}
		});
	});
});

$(document).ready(function () {
	var breakpoint = 840;

	// If the screen is smaller then 840px wide remove all classes.
	if ($(window).width() < breakpoint) {
		$('#js-slidein-content3-a').removeClass('js-slidein-content3-a');
	}

	// Check which of the elements with this class is visible on the page
	$('#js-slidein-content3-a').each(function (i) {
		var bottomObject = $(this).offset().top;
		var bottomWindow = $(window).scrollTop() + $(window).height();

		if (bottomWindow > bottomObject) {
			$(this).removeClass('js-slidein-content3-a');
		}
	});

	// Trigger the slide-in effect on scroll
	$(window).scroll(function () {
		$('#js-slidein-content3-a').each(function (i) {
			var bottomObject = $(this).offset().top + $(this).outerHeight() / 3;
			var bottomWindow = $(window).scrollTop() + $(window).height();

			if (bottomWindow > bottomObject) {
				$(this).addClass('js-slidein-content3-a-visible');
			}
		});
	});
});

$(document).ready(function () {
	var breakpoint = 840;

	// If the screen is smaller then 840px wide remove all classes.
	if ($(window).width() < breakpoint) {
		$('#js-slidein-content4-a').removeClass('js-slidein-content4-a');
	}

	// Check which of the elements with this class is visible on the page
	$('#js-slidein-content4-a').each(function (i) {
		var bottomObject = $(this).offset().top;
		var bottomWindow = $(window).scrollTop() + $(window).height();

		if (bottomWindow > bottomObject) {
			$(this).removeClass('js-slidein-content4-a');
		}
	});

	// Trigger the slide-in effect on scroll
	$(window).scroll(function () {
		$('#js-slidein-content4-a').each(function (i) {
			var bottomObject = $(this).offset().top + $(this).outerHeight() / 3;
			var bottomWindow = $(window).scrollTop() + $(window).height();

			if (bottomWindow > bottomObject) {
				$(this).addClass('js-slidein-content4-a-visible');
			}
		});
	});
});

(function ($) {
$(document).ready(function(){	
	// hide .navbar first
	$(".navbar").hide();
		
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
			// set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 725) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});	
	});
});
}(jQuery));

$(function () {
	var currentHash = "#home"
	$(document).scroll(function () {
		$('.hash').each(function () {
			var top = window.pageYOffset;
			var distance = top - $(this).offset().top;
			var hash = $(this).attr('href');
			// 30 is an arbitrary padding choice, 
			// if you want a precise check then use distance===0
			if (distance < 30 && distance > -30 && currentHash != hash) {
				window.location.hash = (hash);
				currentHash = hash;
			}
		});
	});
});
