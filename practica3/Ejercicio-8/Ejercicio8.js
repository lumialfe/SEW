class Meteo {

    constructor(apikey, ciudad, unidades, idioma) {
        this.apikey = apikey;
        this.ciudad = ciudad;
        this.unidades = unidades;
        this.idioma = idioma;
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.error = "<p>¡problemas! No puedo obtener información de <a href='http://openweathermap.org'>OpenWeatherMap</a></p>";
    }

    load() {
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function (data) {
                this.datos = data;

                $("#weather").append("<hr/>");

                $("#weather").append("<h2>El Tiempo en " + this.datos.name + " (" + this.datos.sys.country + ") [" + this.datos.coord.lat + ", " + this.datos.coord.lon + "] </h2>");
                $("#weather").append('<img src="http://openweathermap.org/img/wn/' + this.datos.weather[0].icon + '@2x.png" alt ="icono del tiempo"/>');

                $("#weather").append('<p class="temp">' + this.datos.main.temp + 'ºC</p>');
                $("#weather").append('<p class="tempmin"> ↓ ' + this.datos.main.temp_min + 'ºC</p>');
                $("#weather").append('<p class="tempmax"> ↑' + this.datos.main.temp_max + 'ºC</p>');

                $("#weather").append("<h3>" + this.datos.weather[0].description + "</h3>");

                $("#weather").append("<br/>");
               
                $("#weather").append("<p>Presión: " + this.datos.main.pressure + " milímetros</p>");
                $("#weather").append("<p>Humedad: " + this.datos.main.humidity + "%</p>");
                $("#weather").append("<p>Amanece a las: " + new Date(this.datos.sys.sunrise * 1000).toLocaleTimeString() + "</p>");
                $("#weather").append("<p>Oscurece a las: " + new Date(this.datos.sys.sunset * 1000).toLocaleTimeString() + "</p>");
                $("#weather").append("<p>Dirección del viento: " + this.datos.wind.deg + "  grados</p>");
                $("#weather").append("<p>Velocidad del viento: " + this.datos.wind.speed + " metros/segundo</p>");
                $("#weather").append("<p>Hora de la medida: " + new Date(this.datos.dt * 1000).toLocaleTimeString() + "</p>");
                $("#weather").append("<p>Fecha de la medida: " + new Date(this.datos.dt * 1000).toLocaleDateString() + "</p>");
                
                $("#weather").append("<p>Visibilidad: " + this.datos.visibility + " metros</p>");
                $("#weather").append("<p>Nubosidad: " + this.datos.clouds.all + " %</p>");
            },
            error: function () {
                $("#weather").append(this.error);
            }
        });
    }

}

var cudillero = new Meteo("61a706e38c26af6f82b085ab691292a9", "Cudillero,es", "&units=metric", "&lang=es");

var muros = new Meteo("61a706e38c26af6f82b085ab691292a9", "Muros de Nalon,es", "&units=metric", "&lang=es");

var coviella = new Meteo("61a706e38c26af6f82b085ab691292a9", "Coviella,es", "&units=metric", "&lang=es");