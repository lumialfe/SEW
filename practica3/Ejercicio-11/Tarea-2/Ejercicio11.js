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
}
var geo = new Geolocalización();
