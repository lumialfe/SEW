
class Operator {
    constructor() {

    }

    hide() {
        $("table").hide();
    }

    show() {
        $("table").show();
    }

    filter() {
        var value = $("#text-filter").val().toLowerCase();
        $("table tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    }

    addComment() {
        var name = $("#name").val();
        var comment = $("#comment").val()
        var date = new Date();
        var li = '<li id="ca"><p>'.concat(name).concat(": ").concat(comment).concat(" [").concat(date.toString()).concat('] </p><input type="button" id="removeComment" value="Remove Comment" />').concat("</li>");
        $("#commentSection").append($(li));
        $("#name").val("");
        $("#comment").val("");

        $("#removeComment").click(function () {
            $("#ca").remove();
        })
    }

    inspectElement() {
        $("*", document.body).each(function () {
            var etiquetaPadre = $(this).parent().get(0).tagName;

            if ($(this).get(0).tagName == 'INPUT') {
                $("#inspectElement").prepend(document.createTextNode("Etiqueta padre : <" + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName + "> valor: " + $(this).get(0).value));
            }

            else if ($(this).get(0).tagName == 'IMG') {
                $("#inspectElement").prepend(document.createTextNode("Etiqueta padre : <" + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName + "> valor: " + $(this).get(0).alt));
            }

            else if (($(this).get(0).tagName == 'P') || ($(this).get(0).tagName == 'TD') || ($(this).get(0).tagName == 'TH') || ($(this).get(0).tagName == 'H1') || ($(this).get(0).tagName == 'H2') || ($(this).get(0).tagName == 'H3') || ($(this).get(0).tagName == 'LABEL') || ($(this).get(0).tagName == 'H4')) {
                $("#inspectElement").prepend(document.createTextNode("Etiqueta padre : <" + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName + "> valor: " + $(this).get(0).childNodes[0].data));
            }

            else if (($(this).get(0).tagName == 'TR') || ($(this).get(0).tagName == 'TBODY') || ($(this).get(0).tagName == 'THEAD') || ($(this).get(0).tagName == 'TABLE') || ($(this).get(0).tagName == 'BODY') || ($(this).get(0).tagName == 'A') || ($(this).get(0).tagName == 'BR') || ($(this).get(0).tagName == 'LI') || ($(this).get(0).tagName == 'UL') || ($(this).get(0).tagName == 'DIV') || ($(this).get(0).tagName == 'FOOTER')) {
                $("#inspectElement").prepend(document.createTextNode("Etiqueta padre : <" + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName + "> valor: NONE"));
            }
            
            else {
                $("#inspectElement").prepend(document.createTextNode("Etiqueta padre : <" + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName + "> valor: TODO"));
            }

            $("#inspectElement").prepend("<br>")
        });
        $("#inspectElement").append('<br>');
        $("#inspectElement").append('<input type="button" id="hideInspect" value="Hide"/>');
        $("#hideInspect").click(function () {
        $("#inspectElement").remove();
        })
    }

    calculateTotal() {
        var total = 0;
        $("tbody tr td.poptd").each(function () {
                var aux = (($(this).get(0).childNodes[0].data).replace(",", "").replace(",", "").replace(",", ""));       
                total += parseInt(aux);
        });
        $("#totalpop").val(total);
    }
}

var o = new Operator();