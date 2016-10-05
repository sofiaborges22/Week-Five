// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
(function () {
	var Pokemon = function(path){
		this.path = path;
	};	

	Pokemon.prototype.fetch = function(doThisOnSuccess) {
		var pokemon = this;
		$.ajax({
			type: 'GET',
			url: this.path,
			success: function(response) {
				pokemon.name = response.name;
				pokemon.height = response.height;
				pokemon.weight = response.weight;
				pokemon.nationalId = response.national_id;
				doThisOnSuccess(pokemon);
			},
			error: function(err) {
				console.log("error");
				console.log(err);
			}
		});
	}; 

	if (typeof window.Pokeapp === 'undefined') {
		window.Pokeapp = {};
	}
	window.Pokeapp.Pokemon = Pokemon;
})();