$(document).ready(function() {
	$('form').submit(function() {
		$('.order-items').append('<li class="buying-item">' + $('#new-item').val() +'</li><br>');

		return false;
	});

});