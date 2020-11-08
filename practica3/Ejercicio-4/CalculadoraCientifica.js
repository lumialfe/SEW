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
            toEval = eval(toEval);
            document.getElementById('inputwindow').value = toEval;
        } catch (err) {
            document.getElementById('inputwindow').value = "Error: " + err;
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
        document.getElementById('inputwindow').value += "Math.PI";
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
        document.getElementById('inputwindow').value += "Math.log10(";
    }

    exp() {
        document.getElementById('inputwindow').value += "Math.exp(";
    }

    abs() {
        document.getElementById('inputwindow').value += "Math.abs(";
    }

    borrarUltimo() {
        var aux = document.getElementById('inputwindow').value;
        document.getElementById('inputwindow').value = aux.slice(0, -1);
    }

    e() {
        document.getElementById('inputwindow').value += "Math.E";
    }

    ln() {
        document.getElementById('inputwindow').value += "Math.log(";
    }

    fact() {
            var aux;
            try {
                aux = eval(document.getElementById('inputwindow').value);
                var total = 1; 
            
                for (var i = 1; i <= aux; i++) {
                    total = total * i; 
                } 
                
                document.getElementById('inputwindow').value = total;
            }
            catch (err) {
                document.getElementById('inputwindow').value = "Error: " + err;
            }    
    }
}

var c = new CalculadoraCientifica();