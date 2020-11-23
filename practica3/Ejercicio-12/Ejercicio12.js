class FileLoader {
    contructor() {

    }

    load(files) {
        //Solamente toma un archivo
        //var archivo = document.getElementById("archivoTexto").files[0];
        var archivo = files[0];
        var nombre = document.getElementById("nombreArchivo");
        var tamaño = document.getElementById("tamañoArchivo");
        var tipo = document.getElementById("tipoArchivo");
        var ultima = document.getElementById("ultimaModificacion");
        var contenido = document.getElementById("contenidoArchivo");
        var areaVisualizacion = document.getElementById("areaTexto");
        var errorArchivo = document.getElementById("errorLectura");

        areaVisualizacion.innerText = "";
        errorArchivo.innerText = "";

        nombre.innerText = "Nombre del archivo: " + archivo.name;
        tamaño.innerText = "Tamaño del archivo: " + archivo.size + " bytes";
        tipo.innerText = "Formato del archivo: " + archivo.type;
        ultima.innerText = "Última vez modificado: " + archivo.lastModifiedDate;
        contenido.innerText = "Previsualización del archivo de texto:"

        //Solamente admite archivos de tipo texto
        if ((archivo.type.match("text/plain")) || (archivo.type.match("application/json")) || (archivo.type.match("text/xml"))) {
            var lector = new FileReader();
            lector.onload = function (evento) {
                //El evento "onload" se lleva a cabo cada vez que se completa con éxito una operación de lectura
                //La propiedad "result" es donde se almacena el contenido del archivo
                //Esta propiedad solamente es válida cuando se termina la operación de lectura
                areaVisualizacion.innerText = lector.result;
            }
            lector.readAsText(archivo);
        } else {
            errorArchivo.innerText = "Error : Formato de archivo no válido para la previsualización de texto.";
        }
        
    }
}

var fl = new FileLoader();