// Assignment:

// You will build a music player that will end up playing any mp3 you can find online. Think about what functionality you might need for this to work. Encapsulate all of this functionality in a JavaScript object so that starting a song is as simple as calling Jukebox.play() You need an array of song objects and the ability to play, stop and pause a song. How would you switch songs? Can you shuffle songs? Focus on getting the JavaScript to work and keep the HTML/CSS minimal, make it work before you make it look good!

// Hint: The next project you will be able to continue styling this Jukebox and API integration.

// Display at least one song on the page when the page loads
// Give the user the ability to play that song, without using the "built-in" play button. This could be through a different button, through clicking or mousing over an image on the page, or any other device of your choosing.
// Give the user the ability to stop that song without using the "built-in" stop button. Once again, this could be through a different button, through clicking or mousing over an image on the page, or any other device of your choosing.
// Give the user the ability to load at least one different song into the Jukebox besides the one that is loaded when the page initially renders
// The whole Jukebox should be backed by an object called Jukebox with methods to play, stop, and load songs.
// Extra Challenge:

// Playlist of songs, allows the user to queue up the next song
// Feature to request a random song
// Grading Criteria:

// JS throws no errors
// Pause, Play, and Stop functions work (and do not use built in functionality)
// JukeBox is object-oriented
// Page has at least one song on load and can play a different song based on title
// Allow a user to load one of their own songs

var player = document.getElementsByClassName("player")[0];
var stop = document.getElementsByClassName("stop")[0];
var play = document.getElementsByClassName("play")[0];
var playIndicator = document.getElementsByClassName("play-indicator")[0];
var pause = document.getElementsByClassName("pause")[0];
var songList = document.getElementsByClassName("song-list")[0];
var songTitle = document.getElementsByClassName("song-title")[0];
var songTime = 0;

var jukebox = {
	addSong: addSong,
	songs: [],
	playAudio: playAudio,
	pauseAudio: pauseAudio,
	stopAudio: stopAudio
};

function addSong(){
	// add songs to next up?
}

function Song(name, filePath, imgPath){
	this.name = name;
	this.filePath = filePath;
	this.imgPath = imgPath;
	jukebox.songs.push(this);
}

function playAudio(num){
	var nextSong = jukebox.songs[num].filePath;
	currentSong = num;
	songTitle.innerHTML = "the current song is " + jukebox.songs[num];
	player.src = nextSong;
	player.currentTime = songTime;
	player.play();
	playIndicator.innerHTML = "<img width='300' height='250' src='img/play.png'>";
}

function pauseAudio(){
	player.pause();
	songTitle.innerHTML = "the song is currently paused";
	playIndicator.innerHTML = "<img width='300' height='250' src='img/pause.svg'>";
	songTime = player.currentTime;
}
function stopAudio(){
	player.pause();
	player.currentTime = 0;

}

function listSongs(){
	for(let i = 0; i < jukebox.songs.length; i++){
		songList.innerHTML += "<div class='song" + i + "'>" + jukebox.songs[i].name + "</div>";
	}

}

function addButtons(){
		for(let i = 0; i < jukebox.songs.length; i++){
		document.getElementsByClassName("song" + i)[0].addEventListener("click", 
			function(event){
				currentSong = parseInt(event.target.innerHTML.split("").pop());
				jukebox.playAudio(currentSong);
			}
		);
	}
}


new Song("Carlos 00", "songs/01.mp3","img/merengue.jpg");
new Song("Carlos 01", "songs/02.mp3","img/merengue.jpg");
new Song("Now To Him2", "songs/NowToHim4.mp3","img/merengue.jpg");
new Song("Shenandoah3", "songs/Shenandoah3.mp3","img/merengue.jpg");


listSongs();
addButtons();

play.addEventListener("click", function(){jukebox.playAudio(currentSong)});
stop.addEventListener("click", jukebox.stopAudio);
pause.addEventListener("click", jukebox.pauseAudio);


jukebox.playAudio(0);