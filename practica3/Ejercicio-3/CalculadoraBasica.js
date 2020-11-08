class CalculadoraBasica {

    constructor() {
        this.memory = "";
    }

    digitos(x) {
        document.getElementById('inputwindow').value += x;
        this.digitos = digitos; 
    }

    punto() {
        document.getElementById('inputwindow').value += ".";
    }

    suma() {
        document.getElementById('inputwindow').value += "+";
    }

    resta() {
        document.getElementById('inputwindow').value += "-";
    }

    multiplicacion() {
        document.getElementById('inputwindow').value += "*";
    }

    division() {
        document.getElementById('inputwindow').value += "/";
    }

    mrc() {
        document.getElementById('inputwindow').value += this.memory;
    }

    mMenos() {
        this.memory -= document.getElementById('inputwindow').value;
    }

    mMas() {
        this.memory += document.getElementById('inputwindow').value;
    }

    borrar() {
        document.getElementById('inputwindow').value = "";
    }

    igual() {
        try {
            var toEval = document.getElementById('inputwindow').value;
            document.getElementById('inputwindow').value = eval(toEval);
        } catch (err) {
            document.getElementById('inputwindow').value = "Error.";
        }
        
    }

}

var c = new CalculadoraBasica();