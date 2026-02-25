var songs = [
    {
      name: "Why This Kolaveri Di",
      file: "./audio-files/Why This Kolaveri Di.mp3"
    },
  {
    name: "Aaya Sher - The Paradise",
    file: "./audio-files/Aaya Sher - The Paradise.mp3"
  },
  {
    name: "Surya So Krishnan - Athey Nanne",
    file: "./audio-files/Surya So Krishnan - Athey Nanne.mp3"
  }
];

let currentSong = 0;
let audio = new Audio();
audio.src = songs[currentSong].file;

var prev = document.getElementById("prev");
var play = document.getElementById("play");
var next = document.getElementById("next");
var title = document.getElementById("song-title");

var progressContainer = document.querySelector(".progress-container");
var progress = document.querySelector(".progress");

function loadSong(index) {
  audio.src = songs[index].file;
  title.textContent = songs[index].name;
}
loadSong(currentSong);


play.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    play.textContent = "⏸";
  } else {
    audio.pause();
    play.textContent = "▶";
  }
});


next.addEventListener("click", function () {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  audio.play();
  play.textContent = "⏸";
});


prev.addEventListener("click", function () {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  audio.play();
  play.textContent = "⏸";
});


audio.addEventListener("timeupdate", function () {
  let progressPercent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = progressPercent + "%";
});


progressContainer.addEventListener("click", function (e) {
  let width = this.clientWidth;
  let clickX = e.offsetX;
  let duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
});


audio.addEventListener("ended", function () {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  audio.play();
});