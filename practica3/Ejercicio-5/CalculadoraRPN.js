class LIFOStack {
    constructor() {
        this.stack = new Array();
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        return this.stack.pop();
    }
}

class CalculadoraRPN {
    constructor() {
        this.stack = new LIFOStack();
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        return this.stack.pop();
    }

    addition() {
        if (this.stack.stack.length >= 2) {
            var aux1 = parseFloat(this.stack.pop());
            var aux2 = parseFloat(this.stack.pop());
            this.push(aux1 + aux2);
            this.updateStack();
        }
    }

    substraction() {
        if (this.stack.stack.length >= 2) {
            var aux = parseFloat(this.stack.pop());
            this.push(parseFloat(this.stack.pop()) - aux);
            this.updateStack();
        }
    }

    division() {
        if (this.stack.stack.length >= 2) {
            var aux = parseFloat(this.stack.pop());
            this.push(parseFloat(this.stack.pop()) / aux);
            this.updateStack();
        }
    }

    multiplication() {
        if (this.stack.stack.length >= 2) {
            this.push(parseFloat(this.stack.pop()) * parseFloat(this.stack.pop()));
            this.updateStack();
        }
    }

    power() {
        if (this.stack.stack.length >= 2) {
            var aux = parseFloat(this.stack.pop());
            this.push(parseFloat(this.stack.pop()) ** aux);
            this.updateStack();
        }
    }

    sin() {
        if (this.stack.stack.length >= 1) {
            var aux = parseFloat(this.stack.pop());
            this.push(Math.sin(aux));
            this.updateStack();
        }
    }

    cos() {
        if (this.stack.stack.length >= 1) {
            var aux = parseFloat(this.stack.pop());
            this.push(Math.cos(aux));
            this.updateStack();
        }
    }

    tan() {
        if (this.stack.stack.length >= 1) {
            var aux = parseFloat(this.stack.pop());
            this.push(Math.tan(aux));
            this.updateStack();
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
        if (this.stack.stack.length >= 1) {
            var aux = parseFloat(this.stack.pop());
            this.push(Math.asin(aux));
            this.updateStack();
        }
    }

    acos() {
        if (this.stack.stack.length >= 1) {
            var aux = parseFloat(this.stack.pop());
            this.push(Math.acos(aux));
            this.updateStack();
        }
    }

    atan() {
        if (this.stack.stack.length >= 1) {
            var aux = parseFloat(this.stack.pop());
            this.push(Math.atan(aux));
            this.updateStack();
        }
    }

    pi() {
        document.getElementById('inputwindow').value = Math.PI; 
    }

    factorial() {
        if (this.stack.stack.length >= 1) {
            var aux = parseFloat(this.stack.pop());
            
            var total = 1; 
            
            for (var i = 1; i <= aux; i++) {
                total = total * i; 
            }

            this.push(total);
            this.updateStack();
        }   
    }

    exp() {
        if (this.stack.stack.length >= 1) {
            var aux = parseFloat(this.stack.pop());
            this.push(Math.exp(aux));
            this.updateStack();
        }
    }
    
    log() {
        if (this.stack.stack.length >= 1) {
            var aux = parseFloat(this.stack.pop());
            this.push(Math.log10(aux));
            this.updateStack();
        }
    }

    abs() {
        if (this.stack.stack.length >= 1) {
            var aux = parseFloat(this.stack.pop());
            this.push(Math.abs(aux));
            this.updateStack();
        }
    }

    baseten() {
        if (this.stack.stack.length >= 1) {
            var aux = parseFloat(this.stack.pop());
            this.push(10**(aux));
            this.updateStack();
        }
    }

    sqrt() {
        if (this.stack.stack.length >= 1) {
            var aux = parseFloat(this.stack.pop());
            this.push(Math.sqrt(aux));
            this.updateStack();
        }
    }

    enter() {
        if (document.getElementById('inputwindow').value != "") {
            this.push(document.getElementById('inputwindow').value);
            document.getElementById('inputwindow').value = "";
            this.updateStack();
        }
    }

    digit(n) {
        document.getElementById('inputwindow').value += n;
    }

    dot() {
        document.getElementById('inputwindow').value += "."; 
    }

    delete() {
        document.getElementById('inputwindow').value = ""; 
    }
    
    deleteLast() {
        var aux = document.getElementById('inputwindow').value;
        document.getElementById('inputwindow').value = aux.slice(0, -1);
    }

    clearStack() {
        this.stack = new LIFOStack();
        this.updateStack();
    }

    updateStack() {
        var aux = document.getElementById('stack');
        while(aux.firstChild) {
            document.getElementById('stack').removeChild(document.getElementById('stack').lastChild);
        }

        for (var i = 0; i < this.stack.stack.length; i++) {
            var node = document.createElement("p");
            node.textContent = this.stack.stack[i] + "  ";
            document.getElementById('stack').append(node);
            var node = document.createElement("hr");
            document.getElementById('stack').append(node);
        }

        console.log(document.getElementById('stack').childNodes);
    }
}

var c = new CalculadoraRPN();