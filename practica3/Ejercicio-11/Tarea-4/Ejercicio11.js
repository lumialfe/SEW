"use strict";
class DyanamicMap {
    constructor() {

    }

    initMap() {
        var centro = { lat: 46.3729, lng: 14.0916 };
        var mapaGeoposicionado = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: centro,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infoWindow = new google.maps.InfoWindow;

        var pos = {
            lat: 46.3729,
            lng: 14.0916
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Localización encontrada');
        infoWindow.open(mapaGeoposicionado);
        mapaGeoposicionado.setCenter(pos);
    }

    handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: Ha fallado la geolocalización' :
            'Error: Su navegador no soporta geolocalización');
        infoWindow.open(mapaGeoposicionado);
    }
}

var geo = new DyanamicMap();