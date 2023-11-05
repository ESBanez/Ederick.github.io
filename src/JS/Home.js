document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("myVideo");

    video.addEventListener("ended", function() {
      video.play();
    });
  });