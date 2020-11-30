"use strict";
class MapGame {
    constructor() {
        this.randomLat = 0;
        this.randomLon = 0;
    }

    guess() {
        var inputLat = document.getElementById('inLat').value;
        var inputLon = document.getElementById('inLon').value;

        var inputLat = parseFloat(inputLat);
        var inputLon = parseFloat(inputLon);

        if (inputLat == "" || inputLon == "") {
            alert("Please enter valid coordinates");
        }
        
        else if (isNaN(inputLat) || isNaN(inputLon)) {
            alert("Please enter valid coordinates");
        }
        else {
            var cell = document.getElementById("gaem");

            if (cell.hasChildNodes()) {
                while (cell.childNodes.length >= 1) {
                    cell.removeChild(cell.firstChild);
                }
            }

            var ubicacion = document.getElementById('gaem');
            ubicacion.innerHTML = '<p><b>RESULTADO: </b></p><p>Tu seleccion: Latitud: ' + inputLat + ', Longitud: ' + inputLon + '.</p><p>Solución: Latitud: ' + this.randomLat + ', Longitud: ' + this.randomLon + '.</p>';
        }

    }

    showMap() {
        var ubicacion = document.getElementById('map');

        var latR = 0;
        var lngR = 0;
        latR = parseFloat(Math.random() * (43.4054 - 42.4640) + 42.4650);
        latR = parseFloat(Math.round(latR * 10000) / 10000);
        lngR = parseFloat(Math.random() * (-4.3048 + 7.0305) - 7.0305);
        lngR = parseFloat(Math.round(lngR * 10000) / 10000);

        this.randomLat = latR;
        this.randomLon = lngR;

        var apiKey = "&key=AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU";
        //URL: obligatoriamente https
        var url = "https://maps.googleapis.com/maps/api/staticmap?";
        //Parámetros
        // centro del mapa (obligatorio si no hay marcadores)
        var centro = "center=" + latR + "," + lngR;
        //zoom (obligatorio si no hay marcadores)
        //zoom: 1 (el mundo), 5 (continentes), 10 (ciudad), 15 (calles), 20 (edificios)
        var zoom = "&zoom=10";
        //Tamaño del mapa en pixeles (obligatorio)
        var tamaño = "&size=1000x400";
        //Escala (opcional)
        //Formato (opcional): PNG,JPEG,GIF
        //Tipo de mapa (opcional)
        var mapType = "&mapType=satellite"
        //Idioma (opcional)
        //region (opcional)
        //marcadores (opcional)
        var marcador = "&markers=color:red%7Clabel:%7C" + latR + "," + lngR;
        //rutas. path (opcional)
        //visible (optional)
        //style (opcional)
        var sensor = "&sensor=false";

        this.imagenMapa = url + centro + zoom + tamaño + marcador + mapType + sensor + apiKey;
        ubicacion.innerHTML = "<img alt='Esta es la localización que debe adivinar' src='" + this.imagenMapa + "'/>";
    }
}

var geo = new MapGame();