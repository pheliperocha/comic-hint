(function ( $ ) {

	$.fn.comicHint = function( options ) {
		
		// Get the original object
		var oriObj = $(this);
		var oriPosit = $(this).css('position');
		var oriZIndex = $(this).css('zIndex');

		// Position and size of the element
		var eleTop = $(this).offset().top;
		var eleLeft = $(this).offset().left;
		var eleWidth = parseInt($(this).css("width"));
		var eleHeigth = parseInt($(this).css("height"));
		
		// Visible window's size
		var winWidth = $(window).width()
		var winHeight = $(window).height();
		
		// Get the size of the text
		var carct = options.text.length;

		// Define the size of balloon according the text
		if (carct < 65) {
			var comicSize = "small";
			var comicHeight = 131;
			var comicWidth = 250;
		} else if (carct >= 65 && carct < 120) {
			var comicSize = "medium";
			var comicHeight = 180;
			var comicWidth = 330;
		} else if (carct >= 120 && carct < 170) {
			var comicSize = "large";
			var comicHeight = 225;
			var comicWidth = 400;
		} else if (carct >= 170) {
			var comicSize = "xlarge";
			var comicHeight = 270;
			var comicWidth = 500;
		}
		
		// Define the orientation of the balloon and position
		if (eleTop > comicHeight) {
			var comicYorientation = "top";
			var comicTop = eleTop - comicHeight;
		} else {
			var comicYorientation = "bottom";
			var comicTop = eleTop + eleHeigth;
		}
		if ( (winWidth - (eleWidth+eleLeft)) > comicWidth) {
			var comicXorientation = "left";
			var comicLeft = eleLeft + eleWidth;
		} else {
			var comicXorientation = "right";
			var comicLeft = eleLeft - comicWidth;
		}

		// Scroll to the element
		if (comicYorientation == "top") {
			$('html, body').animate({ scrollTop: eleTop-(comicHeight+10) }, 'slow');
		} else if (comicYorientation == "bottom") {
			$('html, body').animate({ scrollTop: eleTop-10 }, 'slow');			
		}

		// 	Append the comic-hint elements
		$("body").prepend("<div class='comic-opacity'></div>");
		$("body").prepend("<div class='comic-hint "+comicYorientation+" "+comicXorientation+" "+comicSize+"'><span class=\"comic-text\"><p>"+options.text+"</p></span><span class=\"comic-btn-hint\">Ok</span></div>");

		// Force the element to be showing on screen
		$(this).css('position', 'relative');
		$(this).css('zIndex', '999999');

		// Set the position of balloon
		$(".comic-hint").css('top', comicTop);
		$(".comic-hint").css('left', comicLeft);

		// Set the action of the button
		$(document).on("click", ".comic-btn-hint", function() {
			// Reset the element to original
			oriObj.css('position', oriPosit);
			oriObj.css('zIndex', oriZIndex);
			
			// Remove the comic-hint elements
			$(".comic-opacity").remove();
			$(".comic-hint").remove();
			$(this).remove();
		});
	};

}( jQuery ));