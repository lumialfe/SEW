"use strict";
class DyanamicMap {
    constructor() {

    }
    initMap() {
        var centro = { lat: 43.3672702, lng: -5.8502461 };
        const mapaGeoposicionado = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: centro,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var marker = new google.maps.Marker;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                marker.setPosition(pos);
                // infoWindow.setContent('Localización encontrada');
                // infoWindow.open(mapaGeoposicionado);
                mapaGeoposicionado.setCenter(pos);
                marker.setMap(mapaGeoposicionado);
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