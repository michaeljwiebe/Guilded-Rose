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


var Jukebox = {
	AddSong: AddSong,
	songs: [],
	play: play,
	pause: pause,
	stop: stop
}


function AddSong(name, filePath, imgPath){
	this.name = name;
	this.filePath = filePath;
	this.imgPath = imgPath;
	Jukebox.songs.push(this);
}

function play(){
	player.src = this.songs[0].filePath;
}
function pause(){}
function stop(){}

var song1 = Jukebox.AddSong("Mi Fracaso", "songs/01-Mi-Fracaso.m4a","img/merengue.jpg");


Jukebox.play()