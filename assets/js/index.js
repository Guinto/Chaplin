$('.carousel').carousel({
	interval : 2000
});

function execute(val) {
	$('body').append("<script type=\"text/javascript\">" + val + "<\/script>");
}

function setup() {
	displayDefaultTheme();
	setupDragFloofies();
	setupSelectionEvents();
	setupClickEvents();
	// setupDebugAutocomplete();
}

function displayDefaultTheme() {
	$("#chosenTheme img").first().show();
}

function setupDragFloofies() {
	$('#dragFloofies img').draggable();
}

function setupSelectionEvents() {
	$('#pickATheme img').on('click', function() {
		var src = $(this).attr('src');
		src = src.substring(0, src.length - 4);

		$("#chosenTheme img").hide();
		$("#addFloofies img[src^='" + src + "']").show();
		$("#addFloofies img").css("top", 0);
		$("#addFloofies img").css("left", 0);
	});
}

function setupClickEvents() {
	$('#theme').on('click', function() {
		$("html, body").animate({
			scrollTop : $('#pickATheme').offset().top
		}, 1000);
	});
	$('#photo').on('click', function() {
		$("html, body").animate({
			scrollTop : $('#takeAPhoto').offset().top
		}, 1000);
	});
	$('#floofies').on('click', function() {
		$("html, body").animate({
			scrollTop : $('#addFloofies').offset().top
		}, 1000);
	});
	$('#takeAPhoto img').on('click', function() {
		var originalColor = $('body').css("background-color");
		$('body').css("background-color", "white");
		$('body').fadeTo(0, 0);
		$('body').animate({
			backgroundColor : originalColor,
			opacity: 1
		}, 1000);
	});
	;
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
		/*
		 * width and panelWidth options deprecated, but still work to keep the
		 * plugin backwards compatible width: 500, panelWidth: 0.5,
		 */
		startPanel : 1, // start with this panel
		wrap : false, // if true, the panel will "wrap" (it really
						// rewinds/fast forwards) at the ends
		buildNav : true, // if true, navigation links will be added
		navFormatter : function() {
			return "&#9679;";
		} // function which returns the navigation text for each panel
	});
}