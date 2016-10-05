var phrases = ['sofia', 'matias', 'thor'];

function appendRandomPhrase() {
	var random = phrases[Math.floor(Math.random() * phrases.length)];
	$('.text').text(random)
}

appendRandomPhrase()


$('#button').on('click', function(e) {
	e.preventDefault();
	if ($('#add-phrase').val() === '') {
		console.log("please submit a phrase")
	} else {
		var phrase = $('#add-phrase').val();
		phrases.push(phrase);
		appendRandomPhrase();	
	}
});

