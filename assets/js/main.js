// set Global Variables Object
var globalVars = {};
	globalVars.defaultPath = window.location.href;

$(document).ready(function() {
	$.when(
		// get CSS
		$.get( globalVars.defaultPath + 'assets/css/dynamic.css', function(cssData) {
			globalVars.css = cssData;
		}),
		// get HTML
		$.get( globalVars.defaultPath + 'assets/html/text.html', function(htmlData) {
			globalVars.html = htmlData;
		}),

		// Get the JS
		$.getScript( globalVars.defaultPath + "assets/js/dynamic.js", function( data, textStatus, jqxhr ) {
			console.log( data ); // Data returned
			console.log( textStatus ); // Success
			console.log( jqxhr.status ); // 200
			console.log( "Load was performed." );
		})


	).then(function() {

		// Append CSS
		$('<style />').html(globalVars.css).appendTo('head');

		// Append HTML
		$('.content').html(globalVars.html);

	});
});