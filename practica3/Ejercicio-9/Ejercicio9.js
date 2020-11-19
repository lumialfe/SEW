"use strict";
class Meteo {
    constructor(ciudad) {
        this.apikey = "61a706e38c26af6f82b085ab691292a9";
        this.ciudad = ciudad;
        this.tipo = "&mode=xml";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + this.tipo + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.correcto = "¡Todo correcto! XML recibido de <a href='http://openweathermap.org/'>OpenWeatherMap</a>"
    }
    load() {
        $.ajax({
            dataType: "xml",
            url: this.url,
            method: 'GET',
            success: function (datos) {

                //Presentación del archivo XML en modo texto
                $("h5").text((new XMLSerializer()).serializeToString(datos));

                //Extracción de los datos contenidos en el XML
                var totalNodos = $('*', datos).length; // cuenta los elementos de XML: son los nodos del árbol DOM de XML
                var ciudad = $('city', datos).attr("name");
                var longitud = $('coord', datos).attr("lon");
                var latitud = $('coord', datos).attr("lat");
                var pais = $('country', datos).text();
                var amanecer = $('sun', datos).attr("rise");
                var weatherIcon = $('weather', datos).attr("icon");
                var minutosZonaHoraria = new Date().getTimezoneOffset();
                var amanecerMiliSeg1970 = Date.parse(amanecer);
                amanecerMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                var amanecerLocal = (new Date(amanecerMiliSeg1970)).toLocaleTimeString("es-ES");
                var oscurecer = $('sun', datos).attr("set");
                var oscurecerMiliSeg1970 = Date.parse(oscurecer);
                oscurecerMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                var oscurecerLocal = (new Date(oscurecerMiliSeg1970)).toLocaleTimeString("es-ES");
                var temperatura = $('temperature', datos).attr("value");
                var temperaturaMin = $('temperature', datos).attr("min");
                var temperaturaMax = $('temperature', datos).attr("max");
                var temperaturaUnit = $('temperature', datos).attr("unit");
                var humedad = $('humidity', datos).attr("value");
                var humedadUnit = $('humidity', datos).attr("unit");
                var presion = $('pressure', datos).attr("value");
                var presionUnit = $('pressure', datos).attr("unit");
                var velocidadViento = $('speed', datos).attr("value");
                var nombreViento = $('speed', datos).attr("name");
                var direccionViento = $('direction', datos).attr("value");
                var codigoViento = $('direction', datos).attr("code");
                var nombreDireccionViento = $('direction', datos).attr("name");
                var nubosidad = $('clouds', datos).attr("value");
                var nombreNubosidad = $('clouds', datos).attr("name");
                var visibilidad = $('visibility', datos).attr("value");
                var precipitacionValue = $('precipitation', datos).attr("value");
                var precipitacionMode = $('precipitation', datos).attr("mode");
                var descripcion = $('weather', datos).attr("value");
                var horaMedida = $('lastupdate', datos).attr("value");
                var horaMedidaMiliSeg1970 = Date.parse(horaMedida);
                horaMedidaMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                var horaMedidaLocal = (new Date(horaMedidaMiliSeg1970)).toLocaleTimeString("es-ES");
                var fechaMedidaLocal = (new Date(horaMedidaMiliSeg1970)).toLocaleDateString("es-ES");
                

                 $("#weather").append("<hr/>");
                //  $("#weather").append("<p>Número de elementos del XML: " + totalNodos + "</p>");
                 $("#weather").append("<h2>El Tiempo en " + ciudad + ", " + pais + " [" + longitud + ", " + latitud + " ]</h2>");

                 $("#weather").append('<img src="http://openweathermap.org/img/wn/' + weatherIcon + '@2x.png" alt ="icono del tiempo"/>');

                 $("#weather").append('<p id="temp">' + temperatura + "ºC</p>");
                 $("#weather").append('<p id="tempmin">' + temperaturaMin + "ºC</p>");
                 $("#weather").append('<p id="tempmax">' + temperaturaMax + "ºC</p>");

                 $("#weather").append("<h3>" + descripcion + "</h3>");

                 $("#weather").append("<br/>");

                 $("#weather").append("<p>Amanece a las: " + amanecerLocal + "</p>");
                 $("#weather").append("<p>Oscurece a las: " + oscurecerLocal + "</p>");
                
                 $("#weather").append("<p>Temperatura (unidades): " + temperaturaUnit + "</p>");
                 $("#weather").append("<p>Humedad: " + humedad + " " + humedadUnit + "</p>");
                 $("#weather").append("<p>Presión: " + presion + " " + presionUnit + "</p>");
                 $("#weather").append("<p>Velocidad del viento: " + velocidadViento + " metros/segundo </p>");
                 $("#weather").append("<p>Nombre del viento: " + nombreViento + "</p>");
                 $("#weather").append("<p>Dirección del viento: " + direccionViento + " grados </p>");
                 $("#weather").append("<p>Código del viento: " + codigoViento + "</p>");
                 $("#weather").append("<p>Nombre del viento: " + nombreDireccionViento + "</p>");
                 $("#weather").append("<p>Nubosidad: " + nubosidad + "</p>");
                 $("#weather").append("<p>Nombre nubosidad: " + nombreNubosidad + "</p>");
                 $("#weather").append("<p>Visibilidad: " + visibilidad + " metros </p>");
                 $("#weather").append("<p>Precipitación valor: " + precipitacionValue + "</p>");
                 $("#weather").append("<p>Precipitación modo: " + precipitacionMode + "</p>");
                
                 $("#weather").append("<p>Hora de la medida: " + horaMedidaLocal + "</p>");
                 $("#weather").append("<p>Fecha de la medida: " + fechaMedidaLocal + "</p>");
            },
            error: function () {
                $("h3").html("¡Tenemos problemas! No puedo obtener XML de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
                $("h4").remove();
                $("h5").remove();
                $("p").remove();
            }
        });
    }
    crearElemento(tipoElemento, texto, insertarAntesDe) {
        // Crea un nuevo elemento modificando el árbol DOM
        // El elemnto creado es de 'tipoElemento' con un 'texto' 
        // El elemnto se coloca antes del elemnto 'insertarAntesDe'
        var elemento = document.createElement(tipoElemento);
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }
    verXML() {
        //Muestra el archivo JSON recibido
        this.crearElemento("h2", "Datos en XML desde <a href='http://openweathermap.org'>OpenWeatherMap</a>", "footer");
        this.crearElemento("h3", this.correcto, "footer"); // Crea un elemento con DOM 
        this.crearElemento("h4", "XML", "footer"); // Crea un elemento con DOM        
        this.crearElemento("h5", "", "footer"); // Crea un elemento con DOM para el string con XML
        this.crearElemento("h4", "Datos", "footer"); // Crea un elemento con DOM 
        this.crearElemento("p", "", "footer"); // Crea un elemento con DOM para los datos obtenidos con XML
        this.cargarDatos();
        $("button").attr("disabled", "disabled");
    }
}
var cudillero = new Meteo("Cudillero,es");
var muros = new Meteo("Muros,es");
var coviella = new Meteo("Coviella,es");