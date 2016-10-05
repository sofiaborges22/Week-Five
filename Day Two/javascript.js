var phrases = []

var userPhrase = $('#add-phrase');


$('#button').on('click', function(e) {
	e.preventDefault();
	if ($('#add-phrase').val() === '') {
		console.log("please submit a phrase")
	} else {
		var phrase = $('#add-phrase').val();
		phrases.push(phrase);
		console.log(phrase);
		return true;
		
	}
});

