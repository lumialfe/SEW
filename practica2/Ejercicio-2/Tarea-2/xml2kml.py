"""
Procesamiento genérico de archivos XML
"""
import xml.etree.ElementTree as ET

kmlBody = '<?xml version="1.0" encoding="UTF-8"?><kml xmlns="http://www.opengis.net/kml/2.2"><Document><Placemark><name>Ruta A Caballo</name><LineString><extrude>1</extrude><tessellate>1</tessellate><coordinates>'
footerKML = "</coordinates><altitudeMode>relativeToGround</altitudeMode></LineString><Style> id='lineaRoja'><LineStyle><color>#ff0000ff</color><width>5</width></LineStyle></Style></Placemark></Document></kml>"

def writeXML(archivoXML, outFileName):
    try:
        arbol = ET.parse(archivoXML)
    except IOError:
        print ('No se encuentra el archivo ', archivoXML)
        exit()
    except ET.ParseError:
        print("Error procesando en el archivo XML = ", archivoXML)
        exit()

    f = open(outFileName, "w", encoding='utf-8')

    #f.write(kmlBody)

    raiz = arbol.getroot()

    i = 0
    
    # Recorrido de los elementos del árbol
    for hijo in raiz.findall('.//'): # Expresión Path
        tw = hijo.tag
        if (tw == "coordenadas" and i == 0):
            f.write(kmlBody)
        if (tw == "latitud"):
            f.write((str)(hijo.text))
            f.write(",")
        if (tw == "longitud"):
            f.write((str)(hijo.text))
            f.write(",")
        if (tw == "altitud"):
            f.write("0")
            f.write("\n")
            i = i + 1
        if (i == 4):
            f.write(footerKML)
            f.write("\n")
            f.write("SPLITTOKEN")
            i = 0
    f.close

def fileSeparator(filename):
    f = open("ruta.txt", "r", encoding='utf-8')
    line = f.read(-1)
    lines = line.split("SPLITTOKEN")
    for x in range (3):
        outfile = "ruta" + (str)(x) + ".kml"
        w = open(outfile, "w", encoding='utf-8')
        w.write((str)(lines[x]))
        w.close



def main():
    """Prueba de la función verXML()"""
    #print(verXML.__doc__)
    #miArchivoXML = input('Introduzca un archivo XML = ')
    #miArchivoHTML = input('Introduzca un archivo HTML = ')
    miArchivoXML = "rutas.xml"
    miArchivoKML = "ruta.txt"
    writeXML(miArchivoXML, miArchivoKML)
    fileSeparator(miArchivoKML)
if __name__ == "__main__":
    main()