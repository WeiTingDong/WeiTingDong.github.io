$(document).ready(function() {
	$('#fullpage').fullpage({
		verticalCentered: false,

		//to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
		css3:false,
		navigation: true,
		navigationPosition: 'left',
		navigationTooltips: ['Info', 'Project', 'Skills', 'Education', 'Current']
	});

});