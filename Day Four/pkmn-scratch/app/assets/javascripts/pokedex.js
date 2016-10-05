(function () {

	var Pokedex = function() {};

	Pokedex.prototype.start = function () {
		$('.js-show-pokemon').on('click', function (event) {
	      var clickeEl = $(event.currentTarget);
	      var path = clickeEl.attr('data-pokemon-uri');
		      $.ajax({
		        type: 'GET',
		        url: path,
			        success: handleSuccess,
			        error: handleError
		      })

		      function handleSuccess(response) {
		      	  $('#name').text(response.name);
		          $('#heigth').text(response.height);
		          $('#weight').text(response.weight);
		          $('#national_id').text(`#${response.national_id}`);
		          $('.modal').modal('show')
		      };

		      function handleError() {
		      	console.log('in da error');
			      console.log(err);
		      }

	    }); 
	};

	if (typeof window.PokeApp === 'undefined') {
		window.PokeApp = {};
	};

	window.PokeApp.Pokedex = Pokedex;

})();