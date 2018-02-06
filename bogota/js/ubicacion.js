function findMe(){
  var output = document.getElementById('map');
  //vreificar si soporta geolocalisacion
  if (navigator.geolocation) {

  }else{
    output.innerHTML = "<p>tu navegador no soporta el API de geolocalisacion</p>"
  }
  //obtenemos longitud y latitud
  function localizacion(posicion) {
    var latitude = posicion.coords.latitude;
    var longitude = posicion.coords.longitude;

    var imgURL = "https://maps.googleapis.com/maps/api/staticmap?maptype=HYBRID&center="+latitude+
    ","+longitude+"&zoom=19&size=600x300&markers=color:red%7C"+latitude+","+longitude+"&key=AIzaSyApxR_k3IlZM5aGacfO9qZsbEh_vpBki6E";


    output.innerHTML = "<img src='"+imgURL+"' class=mapa-imagen >";
  }
  function error() {
    output.innerHTML = "<p>no se pudo obtener la ubicacion</p>";
  }
  navigator.geolocation.getCurrentPosition(localizacion,error);
}
