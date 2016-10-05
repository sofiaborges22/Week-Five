$(function() {

	function handleError(error){
			console.log("error")
			console.log(error.responseText);
	};

	$('.submit').on('click', function (e){
		e.preventDefault();
		var artistSearched = $('input[name="artist"]').val();
		var url = "https://api.spotify.com/v1/search?type=artist&query=";
		var searchUrl = url + artistSearched;
		$.ajax({
			type: "GET",
			url: searchUrl,
			success: showArtists,
			error: handleError
		});

		function showArtists (response){
			console.log(response)
			listArtist = response.artists.items
			$('.listArtist').append('<h2> List of artists: </h2>');
			listArtist.forEach( function(artist) {
				if (artist.images[0]){
					var artistName = $('<h4>').text(artist.name);
					$('.listArtist').append(artistName);
					var artistImage = $('<img class="image">').attr('src', artist.images[0].url).attr('id', artist.id);
					$('.listArtist').append(artistImage)
				} else {

				}
			});
		}	
	})

	$('body').on('click', '.image', function(){
		var id = $(this).attr('id')
		var url = "https://api.spotify.com/v1/artists/" + id + "/albums"
		$.ajax({
			type: "GET",
			url: url,
			success: showAlbums,
			error: handleError
		})
	})

	function showAlbums(response){
		console.log(response.items)
		$('.listAlbum').empty();
		listAlbum=response.items
		$('.listAlbum').append('<h2> List of albums: </h2>');
		listAlbum.forEach( function(album){
			var albumName = $('<h4 class="album">').text(album.name);
			$('.listAlbum').append(albumName);
			$('.listAlbum').append('<button class="getTracks" value=' + album.id + '>Get Tracks</button>');
		})
	}

	$('body').on('click', '.getTracks', function(){
		console.log(this)
		var id = $(this).attr('value')
		console.log(id)
		var url = "https://api.spotify.com/v1/albums/" + id + "/tracks"
		$.ajax({
			type: "GET",
			url: url,
			success: showTracks,
			error: handleError
		})
	})

	function showTracks(response){
		console.log(response.items)
		$('.listTracks').empty();
		listTracks=response.items
		$('.listTracks').append('<h2> List of tracks: </h2>');
		listTracks.forEach( function(track){
			var trackName = $('<a target=”_blank” href=' + track.preview_url + ' class="track"></a><br>').text(track.name);
			$('.listTracks').append(trackName);
		})

	}

});
	
		







