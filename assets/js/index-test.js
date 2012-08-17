$('.carousel').carousel({
	interval : 2000
});

function execute(val) {
	$('body').append("<script type=\"text/javascript\">" + val + "<\/script>");
}

function setupDebugAutocomplete() {
	var debugShortcuts = [ "$('.carousel').carousel('cycle');",
			"$('.carousel').carousel('pause');",
			"$('.carousel').carousel('next');",
			"$('.carousel').carousel('prev');",
			"$('#iphoneDisplay').draggable('enable');",
			"$('#iphoneDisplay').draggable('disable');" ];
	$("#debugConsole input").autocomplete({
		source : debugShortcuts
	});
}