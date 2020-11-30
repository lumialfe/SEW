// 73-Parrafos.js
// Version 1.0. 29/10/2020. Luis Miguel Alonso Ferreiro (UO270139). Universidad de Oviedo

document.write("<p><strong>Informe de la asignatura:</strong> ");
document.write(asignatura.nombre);
document.write("</p>");
document.write("<p><strong>Titulación:</strong> ");
document.write(asignatura.titulacion);
document.write("</p>");
document.write("<p><strong>Centro:</strong> ");
document.write(asignatura.centro);
document.write("</p>");
document.write("<p><strong>Universidad:</strong> ");
document.write(asignatura.universidad);
document.write("</p>");
document.write("<p><strong>Curso actual:</strong> ");
document.write(asignatura.curso);
document.write("</p>");

var i;
for (i = 0; i < 3; i++) {
    document.write("<p><strong>Profesor:</strong> ");
    document.write(asignatura.profesores[i]);
    document.write(". <strong>E-mail:</strong> ");
    document.write(asignatura.emails[i]);
    document.write("</p>");
}
