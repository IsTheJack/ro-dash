"use restrict";
(function($) {
	$.fn.RoDropdown = function (callback) {
		this.on("click", function(e) {
			e.preventDefault();
			e.stopImmediatePropagation();
			var dropDown = $(this);
			var item = dropDown.next();
			if (item.is( ":hidden" )) {
				if (callback)
					callback(this);	
				item.slideDown("medium");
				dropDown.addClass("active");
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
