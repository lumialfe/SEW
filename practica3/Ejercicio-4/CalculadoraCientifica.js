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

class CalculadoraCientifica extends CalculadoraBasica {
    constructor() {
        super();
    }

    open() {
        document.getElementById('inputwindow').value += "(";
    }

    close() {
        document.getElementById('inputwindow').value += ")";
    }

    pi() {
        document.getElementById('inputwindow').value += "Math.pi";
    }

    sin() {
        document.getElementById('inputwindow').value += "Math.sin(";
    }

    cos() {
        document.getElementById('inputwindow').value += "Math.cos(";
    }

    tan() {
        document.getElementById('inputwindow').value += "Math.tan(";
    }

    pow() {
        document.getElementById('inputwindow').value += "**";
    }

    pow2() {
        document.getElementById('inputwindow').value += "**2";
    }

    sqrt() {
        document.getElementById('inputwindow').value += "Math.sqrt(";
    }

    baseten() {
        document.getElementById('inputwindow').value += "Math.pow(10, ";
    }
    
    log() {
        document.getElementById('inputwindow').value += "Math.log(";
    }

    exp() {
        document.getElementById('inputwindow').value += "Math.exp(";
    }

    abs() {
        document.getElementById('inputwindow').value += "Math.abs(";
    }

    borrarUltimo() {
        var aux = document.getElementById('inputwindow').value;
        for (i = 0; i < length(aux) - 1; i++) {
            document.getElementById('inputwindow').value += aux[i];
        }
    }
}

var c = new CalculadoraCientifica();