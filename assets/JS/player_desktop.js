document.addEventListener('DOMContentLoaded', function () {
    let playerSlider = document.getElementById('playerSlider');
    let currentTime = document.getElementById('currentTime');
    let totalTime = document.getElementById('totalTime');
    let pauseButton = document.getElementById('pauseButton');
    let isPlaying = false;
    let duration = 60; // La durata totale della tua canzone in secondi
    let startTime;
    let intervalId; // Identificatore per l'intervallo di aggiornamento della barra

    pauseButton.addEventListener('click', function () {
        isPlaying = !isPlaying;

        if (isPlaying) {
            pauseButton.innerHTML = '<img src="assets/imgLogos/Pause.svg" alt="">';
            startTime = Date.now() - (playerSlider.value * duration * 1000 / 100);
            requestAnimationFrame(updatePlayerTime);
            intervalId = requestAnimationFrame(playSong);
        } else {
            pauseButton.innerHTML = '<img src="assets/imgLogos/Play.svg" alt="">';
            cancelAnimationFrame(intervalId);
        }
    });

    function playSong() {
        if (isPlaying) {
            var elapsed = Date.now() - startTime;
            var elapsedSeconds = Math.floor(elapsed / 1000);
    
            if (elapsedSeconds <= duration) {
                playerSlider.value = (elapsedSeconds / duration) * 100;
                updatePlayerTime(elapsedSeconds);
    
                // Aggiorna il tempo totale in tempo reale
                var remainingSeconds = duration - elapsedSeconds;
                var totalMinutes = Math.floor(remainingSeconds / 60);
                var totalSeconds = remainingSeconds % 60;
                totalTime.innerText = pad(totalMinutes) + ':' + pad(totalSeconds);
    
                intervalId = requestAnimationFrame(playSong);
            } else {
                // Se la canzone è terminata, ferma la riproduzione
                isPlaying = false;
                pauseButton.innerHTML = '<img src="assets/imgLogos/Play.svg" alt="">';
            }
        }
    }

    function updatePlayerTime(elapsedSeconds) {
        var minutes = Math.floor(elapsedSeconds / 60);
        var seconds = elapsedSeconds % 60;

        currentTime.innerText = pad(minutes) + ':' + pad(seconds);
    }

    function pad(number) {
        return number < 10 ? '0' + number : number;
    }

    playerSlider.addEventListener('input', function () {
        updatePlayerTime(playerSlider.value / 100 * duration);
    });

    // Aggiorna il tempo totale
    var totalMinutes = Math.floor(duration / 60);
    var totalSeconds = Math.floor(duration % 60);
    totalTime.innerText = pad(totalMinutes) + ':' + pad(totalSeconds);
});