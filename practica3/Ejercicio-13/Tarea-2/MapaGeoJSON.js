"use strict";
class GeoJSONMap {
    constructor() {
        var map;
    }

    load(files) {

        const map = new google.maps.Map(
            document.getElementById("map"),
            {
                zoom: 12,
                center: { lat: 43.55651037504758, lng: -6.328125 },
                mapTypeId: "satellite",
            }
        );

        var archivo = files[0];

        var json;

        var fl = new FileReader();
        fl.onload = function (evento) {
            json = fl.result;
            json = JSON.parse(json);
            // console.log(json);

            var feats = [];
            feats = json.features;

            // console.log(feats);

            for (var i = 0; i < feats.length; i++) {
                var coords = [];
                coords = feats[i].geometry.coordinates;
                console.log(coords);
                var c = [];
                for (var j = 0; j < coords.length; j++) {
                    var coo = coords[j];
                    c.push({lat: coo[1], lng:coo[0]})
                }
                const flightPath = new google.maps.Polyline({
                    path: c,
                    geodesic: true,
                    strokeColor: "#FF0000",
                    strokeOpacity: 1.0,
                    strokeWeight: 2,
                });
                flightPath.setMap(map);
            }
        }
        fl.readAsText(archivo);

        

        // var parser = JSON.parse(archivo);

        // console.log(parser);

        // parser.parse();

        // map.addLayer(reader.getLayer());

        // var xmlDoc = parser.parseFromString(fileReader.result, "application/xml");
        // var coordinates = [];
        // var lines;

        // if (xmlDoc.documentElement.nodeName == "kml") {

        //     for (const item of xmlDoc.getElementsByTagName('Placemark')) {
        //         lines = item.getElementsByTagName('coordinates');
        //         lines = lines[0].childNodes[0].data;
        //         coordinates = lines.split("\n");
        //     }

        //     var path = [];
        //     for (var j = 1; j < coordinates.length; j++) {
        //         // now split it into the lat and lng
        //         var coords = coordinates[j].split(",");
        //         // add the coords into the path
        //         var c = { lat: parseFloat(coords[1]), lng: parseFloat(coords[0]) };
        //         path.push(c);
        //     }
        //     console.log(path);

        //     var centro = path[2];

        //     const map = new google.maps.Map(
        //         document.getElementById("map"),
        //         {
        //             zoom: 13,
        //             center: centro,
        //             mapTypeId: "satellite",
        //         }
        //     );

        // const cx = [
        //     path[0],
        //     path[1],
        //     path[2],
        //     path[3],
        //     path[4],
        //     path[5]
        // ];

        // const flightPath = new google.maps.Polyline({
        //     path: cx,
        //     geodesic: true,
        //     strokeColor: "#FF0000",
        //     strokeOpacity: 1.0,
        //     strokeWeight: 2,
        // });

        // flightPath.setMap(map);

        // } else {
        //     throw "error while parsing"
        // }

        //Do something with result object here
        // console.log(result);

        // }
        // fileReader.readAsText(archivo);

    }
}
var fl = new GeoJSONMap();
