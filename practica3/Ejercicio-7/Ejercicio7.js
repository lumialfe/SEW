
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
}

var o = new Operator();