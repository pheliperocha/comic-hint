(function ( $ ) {

	$.fn.comicHint = function( options ) {
		
		$top = $(this).offset().top;
		$left = $(this).offset().left;
		$width = parseInt($(this).css("width"));
		
		$carct = options.text.length;
		
		if ($carct < 35) {
			$comicHeight = "205";
			$comicWidth = "250";
		} else if ($carct >= 36 && $carct >= 96) {
			$comicHeight = "265";
			$comicWidth = "330";
		} else {
			$comicHeight = "265";
			$comicWidth = "330";
		}
		
		$('html, body').animate({ scrollTop: $top-200 }, 'slow');

		$("body").prepend("<div class='comic-opacity'></div>");

		$("body").prepend("<div class='comic-hint'>"+options.text+"<span class=\"comic-btn-hint\">Ok</span></div>");

		$(".comic-hint").css('width', $comicWidth);
		$(".comic-hint").css('height', $comicHeight);
		
		
		$hintHeight = parseInt($(".comic-hint").css("height"));
		$(".comic-hint").css('marginTop', $top-$hintHeight);
		$(".comic-hint").css('marginLeft', $left+$width);

		$(this).css('position', 'relative');
		$(this).css('zIndex', '999999');
		
		$(document).on("click", ".comic-btn-hint", function() {
			$(".comic-opacity").remove();
			$(".comic-hint").remove();
			$(this).remove();
		});
	};

}( jQuery ))