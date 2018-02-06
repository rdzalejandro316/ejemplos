var l = document.getElementById("a");
var video = document.getElementById("video");
function cerrar() {
  l.classList = "cerrar";
    if (video.played){
      video.pause();
      video.currentTime=0;
    }else
    video.play();
}
function mostrar() {
  l.classList = "mostrar";
}
