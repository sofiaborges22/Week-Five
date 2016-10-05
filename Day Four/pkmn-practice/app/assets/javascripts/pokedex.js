(function () {
	
	var Pokedex = function() {};

	Pokedex.prototype.start = function () {
		var pokedex = this;
		$('.js-show-pokemon').on('click', function (event) {
			var clickedEl = $(event.currentTarget)
			var path = clickedEl.attr('data-pokemon-uri');
			var pokemon = new window.Pokeapp.Pokemon(path);
			pokemon.fetch(pokedex.render);
		});	
	}

	Pokedex.prototype.render = function (pokemon) {
		$('#name').text(pokemon.name);
		$('#height').text(pokemon.height);
		$('#weight').text(pokemon.weight);
		$('#national_id').text('#' + pokemon.nationalId);
		$('.modal').modal('show')
	}	

	if (typeof window.Pokeapp === 'undefined') {
		window.Pokeapp = {};
	}
	window.Pokeapp.Pokedex = Pokedex;
})();