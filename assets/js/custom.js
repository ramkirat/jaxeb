"use strict";

// Window Ready
$(document).ready(function(){
	FullBlockHeight(); // FullSectionHeight function call
	$("#countdown").countdown({ // Counter timer
		date: "05 March 2018 12:00:00", // Enter new date here
		format: "on"
	},
	function() {
	});
	
	$('input, textarea').placeholder(); // For placeholder
	$.validate(); // Form validate
	
	// Scroll next
	$('a.scroll-next').on('click', function(event) {
		var $anchor = $(this);
		$($anchor.attr('href')).removeClass("full-top")
	
		event.preventDefault();
	});
	
	// Close event for section
	$(".close-section").on('click', function(event) {
		$(this).closest(".section-block").addClass("full-top");
	});
	
	// Add class count opacity
	$(".banner-scroll-next").on('click', function(event) {
		$(".content-one").addClass("count-opacity");
	});
	
	// Remove class count opacity
	$(".feedback-section .close-section").on('click', function(event) {
		$(".content-one").removeClass("count-opacity");
	});
		
});

// Window Resize
$(window).resize(function(){
	FullBlockHeight(); // FullSectionHeight function call
});

// Function Full Block Height
function FullBlockHeight(){
	var winHeight=$(window).height();
	$(".section-overlay,body").css('height',winHeight +'px');
}