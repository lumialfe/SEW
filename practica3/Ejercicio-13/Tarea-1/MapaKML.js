"use strict";
class KMLMap {
    constructor() {
        var map;
    }

    load(files) {

        var archivo = files[0];

        var fileReader = new FileReader();
        fileReader.onload = function (evento) {

            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(fileReader.result, "application/xml");
            var coordinates = [];
            var lines;

            if (xmlDoc.documentElement.nodeName == "kml") {

                for (const item of xmlDoc.getElementsByTagName('Placemark')) {
                    lines = item.getElementsByTagName('coordinates');
                    lines = lines[0].childNodes[0].data;
                    coordinates = lines.split("\n");
                }

                var path = [];
                for (var j = 1; j < coordinates.length; j++) {
                    // now split it into the lat and lng
                    var coords = coordinates[j].split(",");
                    // add the coords into the path
                    var c = { lat: parseFloat(coords[1]), lng: parseFloat(coords[0]) };
                    path.push(c);
                }
                console.log(path);

                var centro = path[2];

                const map = new google.maps.Map(
                    document.getElementById("map"),
                    {
                        zoom: 13,
                        center: centro,
                        mapTypeId: "satellite",
                    }
                );

                const cx = [
                    path[0],
                    path[1],
                    path[2],
                    path[3],
                    path[4],
                    path[5]
                ];

                const flightPath = new google.maps.Polyline({
                    path: cx,
                    geodesic: true,
                    strokeColor: "#FF0000",
                    strokeOpacity: 1.0,
                    strokeWeight: 2,
                });

                flightPath.setMap(map);

            } else {
                throw "error while parsing"
            }

            //Do something with result object here
            // console.log(result);

        }
        fileReader.readAsText(archivo);

    }
}
var fl = new KMLMap();
