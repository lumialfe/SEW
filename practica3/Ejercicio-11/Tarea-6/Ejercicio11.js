"use strict";
class DyanamicMap {
    constructor() {
        this.randomLat = 0;
        this.randomLon = 0;
    }
    initMap() {
        var centro = { lat: 43.3672702, lng: -5.8502461 };
        var mapaGeoposicionado = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: centro,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        });

        var infoWindow = new google.maps.InfoWindow;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {

                var lat = 0;
                var lon = 0;
                lat = parseFloat(Math.random() * (180) - 90);
                lat = Math.round(lat * 10000) / 10000
                lon = parseFloat(Math.random() * (180) - 90);
                lon = Math.round(lat * 10000) / 10000
                
                var pos = new google.maps.LatLng({lat, lon});

                infoWindow.setPosition(pos);
                infoWindow.setContent('Localización encontrada');
                infoWindow.open(mapaGeoposicionado);
                mapaGeoposicionado.setCenter(pos);
            }, function () {
                handleLocationError(true, infoWindow, mapaGeoposicionado.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, mapaGeoposicionado.getCenter());
        }
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