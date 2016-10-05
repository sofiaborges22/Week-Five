$(function() {

	var Spotify = function(){

	};

	Spotify.prototype.start = function() {
		var spoti = this;
		$('.submit').on('click', function (e){
			e.preventDefault();
			var artistSearched = $('input[name="artist"]').val();
			var url = "https://api.spotify.com/v1/search?type=artist&query=";
			var searchUrl = url + artistSearched;
			$.ajax({
				type: "GET",
				url: searchUrl,
				success: spoti.showArtists,
				error: spoti.handleError
			})

		})
	}

	Spotify.prototype.showArtists = function(response) {
		console.log(response)
		var artists = response.artists.items
		artists.forEach(function(artist){
			var artistName = $('<h4>').text(artist.name);
			$('.listArtist').append(artistName);
			
			if (artist.images[0]) {
				var artistImage = $('<img>').attr('src', artist.images[0].url);
			}
			$('.listArtist').append(artistImage)
		});
	}
	

	Spotify.prototype.handleError = function() {
		console.log("error")
		console.log(error.responseText);
	}

	var spotify = new Spotify()
	spotify.start();

});
	









