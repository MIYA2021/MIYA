document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('overlay').classList.add('loaded');
    }, 2000);

    var audio = document.getElementById('audio');
    audio.addEventListener('timeupdate', function() {
        var currentTime = audio.currentTime;
        var duration = audio.duration;
        if (currentTime >= duration / 2) {
            document.getElementById('overlay').classList.add('loaded');
        }
    });

    setTimeout(function() {
        document.getElementById('welcome').style.display = 'block';
    }, 6000);
});
