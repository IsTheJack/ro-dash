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

	$('.ro-group-container-menu').RoDashMenu();
});