$('.carousel').carousel({
	interval : 2000
});

function execute(val) {
	$('body').append("<script type=\"text/javascript\">" + val + "<\/script>");
}

function setup() {
	setupDragFloofies();
	setupSelectionEvents();
	setupClickEvents();
	//setupDebugAutocomplete();
}

function setupDragFloofies() {
	$('#dragFloofies img').draggable();
}

function setupSelectionEvents() {
	$('#pickATheme img').on('click', function() {
		var src = $(this).attr('src');
		src = src.substring(0, src.length - 4);
		
		$("#addFloofies button").hide();
		$("#chosenTheme img").hide();
		$("#addFloofies img[src^='" + src + "']").show();
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
		$('body').fadeTo(0, 0);
		$('body').fadeTo(1000, 1);
	});
	$('#addFloofies button').on('click', function() {
		$("html, body").animate({
			scrollTop : $('#pickATheme').offset().top
		}, 1000);	
	});
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