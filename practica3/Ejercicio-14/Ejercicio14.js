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

            console.log(event.clientX + "     " + event.clientY);

            var mx = event.clientX - rect.left;
            var my = event.clientY - rect.top;

            /// get index from mouse position
            var xIndex = Math.round((mx - tileWidth * 0.5) / tileWidth);
            var yIndex = Math.round((my - tileHeight * 0.5) / tileHeight);

            var x = xIndex * tileWidth;
            var y = yIndex * tileHeight;

            console.log(x + "      " + y);

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

    load() {
        var canvas = document.getElementById("canvas");
        $('#canvas').attr("onclick", "canvas.paint()");
        canvas.width = 500;
        canvas.height = 500;

        // var context = canvas.getContext('2d');
        // context.drawImage(localStorage.getItem("imgCanvas"), 0, 0, 500, 500);

        if (typeof (Storage) !== "undefined") {
            document.getElementById('color').value = localStorage.color;
        } else {
            document.getElementById('color').value = "#000000";
        }

        canvas.addEventListener('keyup', function (event) {
            if (event.key == "p") {

                const tileSize = document.getElementById('size').options[size.selectedIndex].value;

                var x = parseInt(prompt("Paint: X coordinate (0-" + 475/tileSize + "): "));
                var y = parseInt(prompt("Paint: Y coordinate (0-" + 475/tileSize + "): "));

                x = x * tileSize;
                y = y * tileSize;

                document.getElementById('size').disabled = true;
                document.getElementById('size').title = "No es posible cambiar el tamaño del pixel una vez se empieza a pintar."

                var canvas = document.getElementById("canvas");
                var context = canvas.getContext('2d');

                const color = document.getElementById('color').value;
                

                var tileWidth = tileSize;
                var tileHeight = tileSize;

                var xIndex = Math.round((x - tileWidth * 0.5) / tileWidth);
                var yIndex = Math.round((y - tileHeight * 0.5) / tileHeight);

                var px = xIndex * tileWidth;
                var py = yIndex * tileHeight;

                console.log(px + "      " + py);

                context.fillStyle = color;
                context.fillRect(px, py, tileWidth, tileHeight);
            }

            if (event.key == "d") {
                const tileSize = document.getElementById('size').options[size.selectedIndex].value;

                var x = parseInt(prompt("Delete: X coordinate (0-" + 475/tileSize + "): "));
                var y = parseInt(prompt("Delete: Y coordinate (0-" + 475/tileSize + "): "));

                x = x * tileSize;
                y = y * tileSize;

                document.getElementById('size').disabled = true;
                document.getElementById('size').title = "No es posible cambiar el tamaño del pixel una vez se empieza a pintar."

                var canvas = document.getElementById("canvas");
                var context = canvas.getContext('2d');

                var tileWidth = tileSize;
                var tileHeight = tileSize;

                var xIndex = Math.round((x - tileWidth * 0.5) / tileWidth);
                var yIndex = Math.round((y - tileHeight * 0.5) / tileHeight);

                var px = xIndex * tileWidth;
                var py = yIndex * tileHeight;

                console.log(px + "      " + py);

                context.clearRect(px, py, tileWidth, tileHeight);
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