class CalculadoraAgua {

    constructor() {
        this.constDuchaPerMinute = 9;
        this.constGrifoAbiertoPerMinute = 2;
        this.constCisterna = 6;
        this.constLavadora = 50;
        this.constLavavajillas = 10;
        this.constLavarAMano = 20;
    }

    inputDuchasPorSemana(valor) {
        this.duchasxsemana = valor;
    }

    inputTiempoDuchas(valor) {
        this.tiempoducha = valor;
    }

    inputdientesdia(valor) {
        this.dientesdia = valor;
    }

    inputcisternadia(valor) {
        this.cisternadia = valor;
    }

    inputmanosdia(valor) {
        this.manosdia = valor;
    }

    inputcaradia(valor) {
        this.caradia = valor;
    }

    inputbebedia(valor) {
        this.bebedia = valor;
    }

    inputlavadorasemana(valor) {
        this.lavadorasemana = valor;
    }

    inputlavavajillassemana(valor) {
        this.lavavajillassemana = valor;
    }

    inputlavadoamanosemana(valor) {
        this.lavadoamanosemana = valor;
    }

    calculate() {

        this.inputDuchasPorSemana(parseInt(document.getElementById('duchassemana').value));
        this.inputTiempoDuchas(parseInt(document.getElementById('tiempoducha').value));
        this.inputdientesdia(parseInt(document.getElementById('dientesdia').value));
        this.inputmanosdia(parseInt(document.getElementById('manosdia').value));
        this.inputcaradia(parseInt(document.getElementById('caradia').value));
        this.inputcisternadia(parseInt(document.getElementById('cisternadia').value));
        this.inputbebedia(parseInt(document.getElementById('bebedia').value));
        this.inputlavadorasemana(parseInt(document.getElementById('lavadorasemana').value));
        this.inputlavavajillassemana(parseInt(document.getElementById('lavavajillassemana').value));
        this.inputlavadoamanosemana(parseInt(document.getElementById('lavadoamanosemana').value));

        var ret = ((this.duchasxsemana*this.tiempoducha*this.constDuchaPerMinute)/7) + ((this.dientesdia + this.manosdia + this.caradia)*this.constGrifoAbiertoPerMinute) + (this.cisternadia*this.constCisterna) + (this.bebedia) + ((this.lavadorasemana*this.constLavadora)/7) + ((this.lavavajillassemana*this.constLavavajillas)/7) + ((this.lavadoamanosemana*this.constLavarAMano)/7);
        ret = Math.round(ret);
        this.showResult(ret);
    }

    showResult(l) {
        var aux = document.getElementById('preguntas');
        while(aux.firstChild) {
            document.getElementById('preguntas').removeChild(document.getElementById('preguntas').lastChild);
        }

        var node = document.createElement("h2");
        node.textContent = "Este es tu resultado:";
        document.getElementById('preguntas').append(node);

        node = document.createElement("h3");
        node.textContent = "Consumes una media de ";
        document.getElementById('preguntas').append(node);

        node = document.createElement("h4");
        node.textContent = l;
        document.getElementById('preguntas').append(node);

        node = document.createElement("h3");
        node.textContent = "litros de agua al día";
        document.getElementById('preguntas').append(node);

        if (l <= 100) {
            node = document.createElement("p");
            node.textContent = "Enhorabuena, tu consumo de agua al día se sitúa por debajo de la media. Aún así deberías intentar seguir estas recomendaciones:";
            document.getElementById('preguntas').append(node);
        }

        if (l > 100) {
            node = document.createElement("p");
            node.textContent = "Cuidado, tu consumo de agua al día se sitúa por encima de la media. Intenta seguir estas recomendaciones para reducir tu consumo y así ahorrar agua:";
            document.getElementById('preguntas').append(node);
        }

        node = document.createElement("br");
        document.getElementById('preguntas').append(node);

        node = document.createElement("ul");
        var child = document.createElement("li");
        child.textContent = "Dúchate en vez de bañarte";
        node.appendChild(child);
        child = document.createElement("li");
        child.textContent = "No dejes el grifo abierto al lavarte los dientes o afeitarte";
        node.appendChild(child);
        child = document.createElement("li");
        child.textContent = "No mantengas el grifo abierto al fregar los platos";
        node.appendChild(child);
        child = document.createElement("li");
        child.textContent = "Reutiliza el agua";
        node.appendChild(child);
        child = document.createElement("li");
        child.textContent = "Racionaliza el riego";
        node.appendChild(child);
        child = document.createElement("li");
        child.textContent = "Ten cuidado con las fugas en el baño y la cocina";
        node.appendChild(child);
        child = document.createElement("li");
        child.textContent = "Cambia tus electrodomésticos tradicionales por los que tengan la etiqueta A+, A++ o A+++";
        node.appendChild(child);
        child = document.createElement("li");
        child.textContent = "Instala grifería termostática o electrónica en la cocina y el baño";
        node.appendChild(child);
        child = document.createElement("li");
        child.textContent = "Coloca aireadores o reductores del caudal en los grifos";
        node.appendChild(child);

        document.getElementById('preguntas').append(node);

        node = document.createElement("a");
        node.setAttribute("href", "Preguntas.html");
        node.setAttribute("type", "button");
        child = document.createElement("div");
        child.setAttribute("id", "button");
        child.textContent = "Volver a Calcular";
        node.appendChild(child);
        document.getElementById('preguntas').append(node);
    }

}

var c = new CalculadoraAgua();