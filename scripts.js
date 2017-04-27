var audio = document.getElementsByClassName("music")[0]

function Song (mp3,artist) {
	this.source = mp3;
	this.artist = artist;
}

function Jukebox (name) {
	this.name = name;
	this.songs = [];
	this.addSong = addSong;
	this.playSong = playSong;
	this.pauseSong = pauseSong;
	this.stopSong = stopSong;
	this.currentTrack = 0;
	this.audio = audio;
	this.resumeSong = resumeSong;
	this.nextSong = nextSong;

	function addSong (song) {
		this.songs.push(song);
	}

	function playSong (orderNum) {
		var currentSong = this.songs[orderNum];
		audio.src = currentSong.source;
		audio.play();
	}

	function pauseSong () {
		audio.pause();
	}

	function stopSong () {
		audio.src = "";
	}	
	function resumeSong () {
		audio.play();
	}
	function nextSong() {
		var nextTrack = this.currentTrack + 1;
		var currentSong = this.songs[nextTrack];
		audio.src = currentSong.source;
		audio.play();
	}
}

var roomJukebox = new Jukebox("classroom");

var song1 = new Song("starboy.mp3","The Weekend");
var song2 = new Song("partymonster.mp3","The Weekend");

roomJukebox.addSong(song1);
roomJukebox.addSong(song2);

document.getElementById("button1").addEventListener("click", function(){
	roomJukebox.playSong(roomJukebox.currentTrack)
	});

document.getElementById("button2").addEventListener("click", function(){
	roomJukebox.pauseSong(roomJukebox.currentTrack)
	});
document.getElementById("button3").addEventListener("click", function(){
	roomJukebox.stopSong(roomJukebox.currentTrack)
	});
document.getElementById("button4").addEventListener("click", function(){
	roomJukebox.resumeSong(roomJukebox.currentTrack)
	});
document.getElementById("button5").addEventListener("click", function(){
	roomJukebox.nextSong()
	});

