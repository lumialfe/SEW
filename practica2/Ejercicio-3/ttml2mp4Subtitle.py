import xml.etree.ElementTree as ET
import pyttsx3
import sys

tinicio = []
tfin = []
captions = []

def parseXML(archivoTTML):

    tinicio.clear
    tfin.clear
    captions.clear

    try:
        arbol = ET.parse(archivoTTML)
    except IOError:
        print ('No se encuentra el archivo ', archivoTTML)
        exit()
    except ET.ParseError:
        print("Error procesando en el archivo XML = ", archivoTTML)
        exit()

    raiz = arbol.getroot()
    
    # Recorrido de los elementos del árbol
    for hijo in raiz.findall('.//'): # Expresión Path
        if (hijo.tag == '{http://www.w3.org/ns/ttml}p'):
            tinicio.append(hijo.attrib['begin'])
            tfin.append(hijo.attrib['end'])
            captions.append(hijo.text)
    #print(captions)


def main():
    print("TTML to Speech Converter\n")
    print("Luis Miguel Alonso Ferreiro\n")
    print("Curso Académico 2020-21\n")
    print("Universidad de Oviedo, Grado en Infeniería Informática del Software\n")
    miArchivoTTML = input("Introduzca un archivo TTML: ")
    print("\n")
    parseXML(miArchivoTTML)
    engine = pyttsx3.init()
    for i in range (len(captions)):
        engine.say(captions[i])
        print(captions[i])
        engine.runAndWait()
    engine.stop
    
    input("\nPulsa cualquier tecla para salir.")
    sys.exit
if __name__ == "__main__":
    main()