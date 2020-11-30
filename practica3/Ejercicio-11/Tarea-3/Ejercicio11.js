"use strict";
class Geolocalización {
    constructor (){
        navigator.geolocation.getCurrentPosition(this.success.bind(this), this.failure.bind(this));
    }
    success(posicion){
        this.mensaje = "Se ha realizado correctamente la petición de geolocalización";
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.precision        = posicion.coords.accuracy;
        this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo            = posicion.coords.heading;
        this.velocidad        = posicion.coords.speed;       
    }
    failure(error){
        switch(error.code) {
        case error.PERMISSION_DENIED:
            this.mensaje = "ERROR: El usuario no permite la petición de geolocalización"
            break;
        case error.POSITION_UNAVAILABLE:
            this.mensaje = "ERROR: Información de geolocalización no disponible"
            break;
        case error.TIMEOUT:
            this.mensaje = "ERROR: La petición de geolocalización ha caducado"
            break;
        case error.UNKNOWN_ERROR:
            this.mensaje = "ERROR: Se ha producido un error desconocido"
            break;
        }
    }

    show(){
        var ubicacion=document.getElementById('map');
        var datos='<p><b>'+ this.mensaje + '</b></p>'; 
        datos+='<p>Longitud: '+this.longitud +'º</p>'; 
        datos+='<p>Latitud: '+this.latitud +'º</p>';
        datos+='<p>Precisión: '+ this.precision +' m</p>';
        datos+='<p>Altitud: '+ this.altitude +' m</p>';
        datos+='<p>Precisión de la altitud: '+ this.precisionAltitud +' m</p>'; 
        datos+='<p>Rumbo: '+ this.rumbo +' º</p>'; 
        datos+='<p>Velocidad: '+ this.velocidad +' m/s</p>';
        ubicacion.innerHTML = datos;
    }

    showMap(dondeVerlo){
        var ubicacion=document.getElementById('map');
        
        var apiKey = "&key=AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU";
        //URL: obligatoriamente https
        var url = "https://maps.googleapis.com/maps/api/staticmap?";
        //Parámetros
        // centro del mapa (obligatorio si no hay marcadores)
        var centro = "center=" + this.latitud + "," + this.longitud;
        //zoom (obligatorio si no hay marcadores)
        //zoom: 1 (el mundo), 5 (continentes), 10 (ciudad), 15 (calles), 20 (edificios)
        var zoom ="&zoom=15";
        //Tamaño del mapa en pixeles (obligatorio)
        var tamaño= "&size=1000x400";
        //Escala (opcional)
        //Formato (opcional): PNG,JPEG,GIF
        //Tipo de mapa (opcional)
        //Idioma (opcional)
        //region (opcional)
        //marcadores (opcional)
        var marcador = "&markers=color:red%7Clabel:%7C" + this.latitud + "," + this.longitud;
        //rutas. path (opcional)
        //visible (optional)
        //style (opcional)
        var sensor = "&sensor=false"; 
        
        this.imagenMapa = url + centro + zoom + tamaño + marcador + sensor + apiKey;
        ubicacion.innerHTML = "<img alt='tu localización' src='"+this.imagenMapa+"'/>";
    }
}
var geo = new Geolocalización();
