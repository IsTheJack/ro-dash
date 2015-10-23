"use restrict";
// Dropdown of main menu level one
$(document).ready(function() {
	var mainMenu = $('.ro-dropdown');
	mainMenu.RoDropdown(function(that) {
		if(!mainMenu.is( ":hidden" )) {
			mainMenu.next().slideUp("medium");
			mainMenu.removeClass("active");
			var icon = mainMenu.children('.fa-caret-down');
			icon.removeClass('fa-caret-down').addClass('fa-caret-right');
			$(that).children('.fa-caret-right').removeClass('fa-caret-right').addClass('fa-caret-down');
		}
	});

	var optionMenu = $('.ro-menu-button-link');
	optionMenu.RoDropdown(function(that) {
		$(document).mouseup(function (e) {
			var drop = optionMenu.next()
			if (!drop.is(e.target) && drop.has(e.target).length === 0) {
				drop.slideUp('medium');
			}
		});
	});

	$('.ro-btn-toggle-main-menu').click(function(e) {
		e.preventDefault();
		e.stopImmediatePropagation();
		var mainMenu = $('.ro-menu-container');
		if(!mainMenu.is( ":hidden" )) {
			mainMenu.slideUp('medium');
		}
		else {
			mainMenu.slideDown('medium');
		}
	});

	CKEDITOR.replace( 'editor1' );
});