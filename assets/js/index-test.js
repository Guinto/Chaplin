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

function movingBoxes() {
	$('#slider').movingBoxes({
		/* width and panelWidth options deprecated, but still work to keep the plugin backwards compatible
		width: 500,
		panelWidth: 0.5,
		*/
		startPanel   : 1,      // start with this panel
		wrap         : false,   // if true, the panel will "wrap" (it really rewinds/fast forwards) at the ends
		buildNav     : true,   // if true, navigation links will be added
		navFormatter : function(){ return "&#9679;"; } // function which returns the navigation text for each panel
	});
}