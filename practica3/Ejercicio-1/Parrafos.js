// 73-Parrafos.js
// Version 1.0. 29/10/2020. Luis Miguel Alonso Ferreiro (UO270139). Universidad de Oviedo

document.write("<p><b>Informe de la asignatura:</b> ");
document.write(asignatura.nombre);
document.write("</p>");
document.write("<p><b>Titulación:</b> ");
document.write(asignatura.titulacion);
document.write("</p>");
document.write("<p><b>Centro:</b> ");
document.write(asignatura.centro);
document.write("</p>");
document.write("<p><b>Universidad:</b> ");
document.write(asignatura.universidad);
document.write("</p>");
document.write("<p><b>Curso actual:</b> ");
document.write(asignatura.curso);
document.write("</p>");

var i;
for (i = 0; i < 3; i++) {
    document.write("<p><b>Profesor:</b> ");
    document.write(asignatura.profesores[i]);
    document.write(". <b>E-mail:</b> ");
    document.write(asignatura.emails[i]);
    document.write("</p>");
}
