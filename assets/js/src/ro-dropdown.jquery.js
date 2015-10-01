"use restrict";
(function($) {
	$.fn.RoDropdown = function (callback) {
		this.on("click", function() {
			var dropDown = $(this);
			var item = dropDown.next();
			if (item.is( ":hidden" )) {
				if (callback)
					callback();	
				item.slideDown("medium");
				dropDown.addClass("active");
				dropDown.children('.fa-caret-right').removeClass('fa-caret-right').addClass('fa-caret-down');
			}
			else {
			    item.slideUp("medium");
			    dropDown.removeClass("active");
				dropDown.children('.fa-caret-down').removeClass('fa-caret-down').addClass('fa-caret-right');
			}
		});

		return this.each (function() {
			if(!$(this).hasClass("active"))
				$(this).next().css("display","none");
		});
	};
})(jQuery);