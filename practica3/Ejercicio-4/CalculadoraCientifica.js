class CalculadoraBasica {

    constructor() {
        this.memory = "";
        this.ans = "";
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
        this.memory = "";
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
            this.ans = toEval;
            document.getElementById('inputwindow').value = toEval;
        } catch (err) {
            document.getElementById('inputwindow').value = "SyntaxError";
        }
    }
}

class CalculadoraCientifica extends CalculadoraBasica {
    constructor() {
        super();
        this.isShifted = false;
        this.lit = true;
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
                
                this.ans = total;
                document.getElementById('inputwindow').value = total;
            }
            catch (err) {
                document.getElementById('inputwindow').value =  "SyntaxError";
            }    
    }

    shift() {
        if (!this.isShifted) {
            document.getElementById('sin').value = "sin⁻¹";
            document.getElementById('sin').setAttribute("onclick", "c.asin()");

            document.getElementById('cos').value = "cos⁻¹";
            document.getElementById('cos').setAttribute("onclick", "c.acos()");

            document.getElementById('tan').value = "tan⁻¹";
            document.getElementById('tan').setAttribute("onclick", "c.atan()");

            this.isShifted = true;
        }
        else if (this.isShifted) {
            document.getElementById('sin').value = "sin";
            document.getElementById('sin').setAttribute("onclick", "c.sin()");

            document.getElementById('cos').value = "cos";
            document.getElementById('cos').setAttribute("onclick", "c.cos()");

            document.getElementById('tan').value = "tan";
            document.getElementById('tan').setAttribute("onclick", "c.tan()");
            this.isShifted = false;
        }
    }

    asin() {
        document.getElementById('inputwindow').value += "Math.asin(";
    }

    acos() {
        document.getElementById('inputwindow').value += "Math.acos(";
    }

    atan() {
        document.getElementById('inputwindow').value += "Math.atan(";
    }

    backlight() {
        if (this.lit) {
            document.getElementById('inputwindow').style.backgroundColor="#013220";
            document.getElementById('inputwindow').style.color="#00ff00";
            this.lit = false;
        }
        else {
            document.getElementById('inputwindow').style.backgroundColor="#ffffff";
            document.getElementById('inputwindow').style.color="#000000";
            this.lit = true;
        }
    }

    prevanswer() {
        document.getElementById('inputwindow').value += this.ans;
    }
}

var c = new CalculadoraCientifica();