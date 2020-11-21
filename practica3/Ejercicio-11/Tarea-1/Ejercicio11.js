"use strict";
class GeoLocalizacion {
    constructor() {
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this));
    }
    getPosicion(posicion) {
        this.longitud = posicion.coords.longitude;
        this.latitud = posicion.coords.latitude;
        this.precision = posicion.coords.accuracy;
        this.altitud = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo = posicion.coords.heading;
        this.velocidad = posicion.coords.speed;
    }
    getLongitud() {
        return this.longitud;
    }
    getLatitud() {
        return this.latitud;
    }
    getAltitud() {
        return this.altitud;
    }
    show() {
        var ubicacion = document.getElementById('map');
        var datos = '';
        datos += '<p>Longitud: ' + this.longitud + 'º</p>';
        datos += '<p>Latitud: ' + this.latitud + 'º</p>';
        datos += '<p>Precisión: ' + this.precision + ' m</p>';
        datos += '<p>Altitud: ' + this.altitude + ' m</p>';
        datos += '<p>Precisión de la altitud: ' + this.precisionAltitud + ' m</p>';
        datos += '<p>Rumbo: ' + this.rumbo + ' º</p>';
        datos += '<p>Velocidad: ' + this.velocidad + ' m/s</p>';

        ubicacion.innerHTML = datos;
    }
}
var geo = new GeoLocalizacion();
