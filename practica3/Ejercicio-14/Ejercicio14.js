class Canvas {
    constructor() {
        // this.size = 25;
    }

    clean() {
        $("#canvas").css("background-image", "");
        document.getElementById('color').value = '#000000';
        localStorage.color = '#000000';
        var size = document.getElementById('size');
        size.selectedIndex = 1;
        document.getElementById('size').disabled = false;
        document.getElementById('size').title = "";
        var canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    save() {

        alert("Los datos de la imagen de referencia se perderán.");

        var canvas = document.getElementById('canvas');
        var image = canvas.toDataURL("image/png");

        $("#canvas").css("background-image", "");

        var filename = "myArt.png";

        var link = document.createElement('a');
        link.download = filename;
        link.href = image;
        link.click();
    }

    changeBG(files) {
        var file = files[0];
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);

        reader.onloadend = function () {
            var canvas = document.getElementById("canvas");
            canvas.width = 500;
            canvas.height = 500;
            $("#canvas").css("background-image", "url(" + this.result + ")");
            $("#canvas").css("background-size", canvas.width + "px " + canvas.height + "px");
            $("#canvas").css("background-repeat", "no-repeat");
        }
    }

    paint() {
        document.getElementById('size').disabled = true;
        document.getElementById('size').title = "No es posible cambiar el tamaño del pixel una vez se empieza a pintar."

        var canvas = document.getElementById("canvas");
        var context = canvas.getContext('2d');

        var elemLeft = canvas.offsetLeft + canvas.clientLeft;
        var elemTop = canvas.offsetTop + canvas.clientTop;

        const color = document.getElementById('color').value;
        const tileSize = document.getElementById('size').options[size.selectedIndex].value;

        canvas.addEventListener('click', function (event) {

            var tileWidth = tileSize;
            var tileHeight = tileSize;

            var rect = canvas.getBoundingClientRect();

            var mx = event.clientX - rect.left;
            var my = event.clientY - rect.top;

            /// get index from mouse position
            var xIndex = Math.round((mx - tileWidth * 0.5) / tileWidth);
            var yIndex = Math.round((my - tileHeight * 0.5) / tileHeight);

            var x = xIndex * tileWidth;
            var y = yIndex * tileHeight;

            context.fillStyle = color;
            context.fillRect(x, y, tileWidth, tileHeight);

        }, false);

        canvas.addEventListener('contextmenu', function (event) {
            event.preventDefault();

            var tileWidth = tileSize;
            var tileHeight = tileSize;

            var rect = canvas.getBoundingClientRect();

            var mx = event.clientX - rect.left;
            var my = event.clientY - rect.top;

            /// get index from mouse position
            var xIndex = Math.round((mx - tileWidth * 0.5) / tileWidth);
            var yIndex = Math.round((my - tileHeight * 0.5) / tileHeight);

            var x = xIndex * tileWidth;
            var y = yIndex * tileHeight;

            context.clearRect(x, y, tileWidth, tileHeight);

        }, false);
    }

    // saveInCache() {
    //     var imgCanvas = document.createElement("canvas"),
    //     imgContext = imgCanvas.getContext("2d");
    //     var imgAsDataURL = imgCanvas.toDataURL("image/png");
    //     try {
    //         localStorage.setItem("canvas", imgCanvas);
    //     }
    //     catch (e) {
    //         console.log("Storage failed: " + e);
    //     }
    // }

    load() {
        var canvas = document.getElementById("canvas");
        canvas.width = 500;
        canvas.height = 500;

        // var context = canvas.getContext('2d');
        // context.drawImage(localStorage.getItem("imgCanvas"), 0, 0, 500, 500);

        if (typeof (Storage) !== "undefined") {
            document.getElementById('color').value = localStorage.color;
        } else {
            document.getElementById('color').value = "#000000";
        }

        canvas.addEventListener('keyup', function (e) {
            if (e.key == "p") {
                var x = prompt("X coordinate (0-500): ");
                var y = prompt("Y coordinate (0-500): ");
            }

            if (e.key == "p") {
                var x = prompt();
                var y = prompt();
            }

        });
    }

    changecolor() {
        var color = document.getElementById('color').value;
        this.color = color;
        localStorage.color = color;
    }

    changepixelsize() {
        var size = document.getElementById('size');
        size = size.options[size.selectedIndex].value;
        this.size = parseInt(size);
    }

}

var canvas = new Canvas();