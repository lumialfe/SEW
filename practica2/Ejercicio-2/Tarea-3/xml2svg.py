"""
Procesamiento genérico de archivos XML
"""
import xml.etree.ElementTree as ET

kmlBody = '<?xml version="1.0" encoding="utf-8"?><svg viewBox="-100 -100 1000 1000" width="auto" height="920" style="overflow:visible " version="1.1" xmlns="http://www.w3.org/2000/svg">'
footerKML = '</svg>'

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
        if (tw == "ruta"):
            flag = False
        if (tw == "hito"):
            flag = True
            f.write((str)(hijo.attrib).replace("{'nombre': '","").replace("'}",","))
        if (tw == "distancia_desde_anterior"):
            f.write((str)(hijo.text))
            f.write("POINTTOKEN")
            i = i + 1
        if (tw == "altitud" and flag):
            f.write((str)(hijo.text))
            f.write(",")
        if (i == 3):
            #f.write(footerKML)
            f.write("SPLITTOKEN")
            i = 0
    #f.write(footerKML)
    f.close

def fileSeparator(filename):
    f = open("ruta.txt", "r", encoding='utf-8')
    line = f.read(-1)
    lines = line.split("SPLITTOKEN")
    for x in range (len(lines) - 1):
        outfile = "ruta" + (str)(x) + ".svg"
        w = open(outfile, "w", encoding='utf-8')
        w.write(kmlBody)
        w.write('<text x="50" y="50" font-family="monospace" font-size="30" style="fill:black">Perfil Altimétrico de la Ruta a Caballo</text>')
        points = lines[x].split("POINTTOKEN")

        names = []
        xcoord = []
        ycoord = []
        newy = []

        names.clear
        xcoord.clear
        ycoord.clear
        newy.clear

        for y in range (len(points) - 1):
            comps = points[y].split(",")
            names.append(comps[0])
            ycoord.append((int)(comps[1]))
            xcoord.append((int)(comps[2]))
        

        print(names)
        print(xcoord)
        print(ycoord)
        print(max(ycoord))


        w.write('<polygon style="fill:olivedrab;stroke:darkolivegreen;stroke-width:3" transform="translate(200,100)" fill="none" points="0,')

        xcoord[0] = ((int)(xcoord[0]))
        for r in range (1, len(xcoord)):
            xcoord[r] = ((int)(xcoord[r])) + ((int)(xcoord[r - 1]) + 200)

        for z in range (len(names)):
            if (z == 0):
                w.write((str)(ycoord[0] + 150))
                w.write(" ")
            xc = ((int)(xcoord[z]))
            xc = xc/10
            w.write((str)(xc))
            w.write(",")
            nep = (abs(((int)(ycoord[z])) - ((int)(max(ycoord)))))
            newy.append(nep)
            w.write((str)(nep))
            w.write(" ")
            if (z == 2):
                w.write((str)(xcoord[z]/10))
                w.write(",")
                w.write((str)(ycoord[0] + 150))
        w.write('"/>')

        for z in range (len(names)):
            w.write('<text font-family="monospace" transform="translate(180, 150)" x="')
            w.write((str)(xcoord[z]/10))
            w.write('" y="')
            w.write((str)(newy[z]))
            w.write('" font-size="15" style="fill:black" font-weight="bold">')
            w.write(names[z])
            w.write('</text>')

        w.write(footerKML)    
        w.close
    f.close



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