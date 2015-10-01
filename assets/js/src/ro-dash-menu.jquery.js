"use restrict";
(function($) {
	$.fn.RoDashMenu = function(callback) {
		var menuContainer = $(this);

		$('<div class = "ro-dash-autoheight-menu" style="float: left;"></div>').insertBefore(menuContainer);

		$(window).resize(function() {
			$(".ro-dash-autoheight-menu").height(0);
			$(".ro-dash-autoheight-menu").height($(".ro-menu-container").height() - 60);
		});

		return this.each (function() {	
		});
	}
})(jQuery)