document.getElementById('mostrarPlayer1').addEventListener('click', function() {
    var playerContainer = document.getElementById('playerContainer1');
    var spotifyPlayer = document.getElementById('spotifyPlayer1');
    spotifyPlayer.src = "https://open.spotify.com/embed/episode/5k7fyyBRWX9kXiuhzbDpFn?utm_source=generator";
    playerContainer.style.display = 'block';
 });

var spotifyAudio = document.getElementById('spotifyAudio');
var playPauseButton = document.getElementById('playPause');
var trackUrl = 'https://open.spotify.com/embed/episode/5k7fyyBRWX9kXiuhzbDpFn?utm_source=generator'; // URL da faixa do Spotify
playPauseButton.addEventListener('click', function() {
   if (spotifyAudio.paused) {
       spotifyAudio.src = trackUrl;
       spotifyAudio.play();
       playPauseButton.innerText = 'Pause';
   } else {
       spotifyAudio.pause();
       playPauseButton.innerText = 'Play';
   }
});