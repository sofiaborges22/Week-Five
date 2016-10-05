// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .


//Document ready listener
$(function () {

function SpotifyController () {}

	SpotifyController.prototype.searchArtist = function() {
		//saving the 'this' in a variable before losing it in the event listener
		var that = this;
		var url;
		$('#btn-submit').on('click', function (e) {
		e.preventDefault();
		$('#result').empty();
		var artist = $('#artist').val();
		that.url = "https://api.spotify.com/v1/search?type=artist&query=" + artist	

		//ajax call needs to be made
		that.makeAjax();
	})
	}

	SpotifyController.prototype.makeAjax = function() {
		$.ajax({
			type: "GET",
			url: this.url,
			success: this.handleResponse,
			error: this.error
		});
	}


	SpotifyController.prototype.handleResponse = function(response) {
		artists_list = response.artists.items;
		artists_list.forEach(function(artist){
			//if artist has an image do all of the following
			if (artist.images[0] != 'undefined') {

				//create a div for every artist
				var artistDiv = $('#result').append($('<div>').attr('id', artist.id).attr('class', 'artist-div'));
				
				//fetch name and put it inside of the artistDiv as h5
				var artistName = artist.name;
				$('#' + artist.id).append($('<h5>').text(artistName));

				//src and append img in the artistDiv
				var imgSrc = artist.images[0].url;
				$('#' + artist.id).append($('<img>').attr('src', imgSrc));
			}
		})
		
	}

	SpotifyController.prototype.error = function() {
		console.log("Error:" + err);
	}
	
	SpotifyController.prototype.getUrlAlbums = function() {
		var that = this;
		var url;
		$(document).on('click', '.artist-div', function (){
			$('#album').empty();
			var id = ($(this).attr('id'));
			that.url = "https://api.spotify.com/v1/artists/" + id + "/albums"

		// make ajax call
		that.getAlbumAjax();
	})
	}

	SpotifyController.prototype.getAlbumAjax = function() {
		$.ajax({
			type: "GET",
			url: this.url,
			success: this.getAlbums,
			error: this.error
		})
	}

	SpotifyController.prototype.getAlbums = function(response) {
		var listAlbums = response.items
		listAlbums.forEach(function(album){
			var albumDiv = $('#album').append($('<div>').attr('id', album.id).attr('class', 'album-div'));
			var albumName = album.name
			$('#' + album.id).append($('<h5>').text(albumName));
		})
	}

	var spotifyController = new SpotifyController();
	spotifyController.searchArtist();
	spotifyController.getUrlAlbums();

});









