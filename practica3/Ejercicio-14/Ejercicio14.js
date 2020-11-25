class Canvas {
    constructor() {
        this.color = '#000000';
        this.size = 25;
    }

    clean() {
        $("#canvas").css("background-image", "");
        document.getElementById('color').value = '#000000';
        var size = document.getElementById('size');
        size.selectedIndex = 1;
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


        // var myWindow = window.open("Save", "Save", "width=500,height=500");
        // myWindow.document.write('<img src="' + image + '"/>');
        // document.write('<img src="' + image + '"/>');
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
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext('2d');

        var elemLeft = canvas.offsetLeft + canvas.clientLeft;
        var elemTop = canvas.offsetTop + canvas.clientTop;

        const color = this.color;
        var tileSize = this.size;

        document.addEventListener('offline', function (e) { alert('Connection Lost.'); });
        document.addEventListener('online', function (e) { alert('Back Online.') });

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

            // console.log('x: ' + x);
            // console.log('y: ' + y);

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
        canvas.width = 500;
        canvas.height = 500;
        // this.paint;
        document.addEventListener('offline', function (e) { alert('Connection Lost.'); });
        document.addEventListener('online', function (e) { alert('Back Online.') });
    }

    changecolor() {
        var color = document.getElementById('color').value;
        // console.log(color);
        this.color = color;
        // console.log(this.color);
        // this.paint;
    }

    changepixelsize() {
        var d = this.size;
        var size = document.getElementById('size');
        size = size.options[size.selectedIndex].value;
        this.size = parseInt(size);
        // this.paint;
    }

}

var canvas = new Canvas();