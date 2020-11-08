// InfoNavegador.js
// Informacion del navegador
// Version 1.0. 04/11/2020. Luis Miguel Alonso Ferreiro. Universidad de Oviedo
infoNavegador = new Object();
infoNavegador.nombre = navigator.appName;
infoNavegador.idioma = navigator.language;
infoNavegador.version = navigator.appVersion;
infoNavegador.plataforma = navigator.platform;
infoNavegador.vendedor = navigator.vendor;
infoNavegador.agente = navigator.userAgent;
infoNavegador.javaActivo = navigator.javaEnabled();