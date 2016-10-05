$(function(){
	var spotify = new window.SpotifyApp.SpotifySearch();
	spotify.start();
	spotify.renderAlbum();
	spotify.renderTracks();
});
