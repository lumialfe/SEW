"""
Procesamiento genérico de archivos XML
"""
import xml.etree.ElementTree as ET

htmlBody = '<!DOCTYPE HTML><html lang="es"><head><link rel="stylesheet" type="text/css" href="estilo.css" /><meta charset="UTF-8"/> <meta name="author" content="Luis Miguel Alonso"/><meta name="keywords" content="rutas a caballo, asturias, ruta, rutas"/><title>Rutas a Caballo</title></head><body>'

def verXML(archivoXML):
    try:
        arbol = ET.parse(archivoXML)
    except IOError:
        print ('No se encuentra el archivo ', archivoXML)
        exit()
    except ET.ParseError:
        print("Error procesando en el archivo XML = ", archivoXML)
        exit()

    raiz = arbol.getroot()
    print("\nElemento raiz = ", raiz.tag)
    if raiz.text != None:
        print("Contenido = " , raiz.text.strip('\n')) #strip() elimina los '\n' del string
    else:
        print("Contenido = " , raiz.text)
    print("Atributos = " , raiz.attrib)

    # Recorrido de los elementos del árbol
    for hijo in raiz.findall('.//'): # Expresión Path
        print("\nElemento = " , hijo.tag)
        if hijo.text != None:
            print("Contenido = ", hijo.text.strip('\n')) #strip() elimina los '\n' del string
        else:
            print("Contenido = ", hijo.text)
        print("Atributos = ", hijo.attrib)

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
    f.write(htmlBody)

    raiz = arbol.getroot()
    f.write("<h1>") 
    f.write(str(raiz.tag))
    f.write("</h1>")
    

    # Recorrido de los elementos del árbol
    for hijo in raiz.findall('.//'): # Expresión Path

        tw = hijo.tag
        #titulo
        if (tw == "ruta"):
            f.write("<hr/>")
            f.write("<h2>")
            f.write(str(hijo.tag))
            f.write("</h2>")
            f.write("<h4>")
            f.write(str(hijo.attrib).replace("{", " ").replace("}", " "))
            f.write("</h4>")
        #solo contenido
        elif (tw == "duracion" or tw == "dificultad" or tw == "fecha" or tw == "agencia" or tw == "inicio" or tw == "direccion_inicio" or tw == "valoracion" or tw == "hora"):
            f.write("<h3>")
            f.write(str(hijo.tag))
            f.write("</h3>")
            f.write("<p>")
            f.write(str(hijo.text))
            print((str)(hijo.text))
            f.write("</p>")
        elif (tw == "restriccion"):
            f.write("<h4>")
            f.write(str(hijo.tag))
            f.write("</h4>")
            f.write("<p>")
            f.write(str(hijo.attrib).replace("{", " ").replace("}", " "))
            f.write(str(hijo.text))
            f.write("</p>")
        #solo titulo
        elif (tw == "restricciones" or tw == "hitos" or tw == "referencias"):
            f.write("<h3>")
            f.write(str(hijo.tag))
            f.write("</h3>")
        #hito 
        elif (tw == "hito"):
            f.write("<h4>")
            f.write(str(hijo.tag))
            f.write("</h4>")
            f.write("<p>")
            f.write((str)(hijo.attrib).replace("{", " ").replace("}", " "))
            f.write("</p>")
        #solo titulo en hito
        elif (tw == "galeria" or tw == "fotos" or tw =="videos" or tw =="coordenadas" ):
            f.write("<h4>")
            f.write(str(hijo.tag))
            f.write("</h4>")
        #solo contenido
        elif (tw == "descripcion"):
            f.write("<h4>")
            f.write(str(hijo.tag))
            f.write("</h4>")
            f.write("<p>")
            f.write(str(hijo.text))
            f.write("</p>")
        #coordenadas
        elif (tw == "latitud" or tw == "longitud" or tw == "altitud"):
            f.write("<h5>")
            f.write(str(hijo.tag))
            f.write("</h5>")
            f.write("<p>")
            f.write(str(hijo.text))
            f.write("</p>")
        #links
        elif (tw == "referencia" or tw == "video"):
            f.write("<h4>")
            f.write(str(hijo.tag))
            f.write("</h4>")
            f.write('<a href="')
            f.write(str(hijo.text))
            f.write('">')
            f.write(str(hijo.text))
            f.write("</a>")
        #fotos
        elif (tw == "foto"):
            f.write("<h5>")
            f.write(str(hijo.tag))
            f.write("</h5>")
            f.write('<img src="')
            f.write(str(hijo.text))
            f.write('" alt = "foto de internet"/>')
        #en hito con contenido
        elif (tw == "descripcion" or tw == "tiempo_desde_anterior"):
            f.write("<h4>")
            f.write(str(hijo.tag))
            f.write("</h4>")
            f.write("<p>")
            f.write(str(hijo.text))
            f.write("</p>")
        #en hito con contenido y atributos
        elif (tw == "distancia_desde_anterior"):
            f.write("<h4>")
            f.write(str(hijo.tag))
            f.write("</h4>")
            f.write("<p>")
            f.write(str(hijo.text))
            f.write(str(hijo.attrib).replace("{", " ").replace("}", " "))
            f.write("</p>")
        else :
            f.write("<h5>")
            f.write(str(hijo.tag))
            f.write("</h5>")
            if hijo.text != None:
                f.write("Contenido = ") 
                f.write(str(hijo.text.strip('\n'))) #strip() elimina los '\n' del string
            else:
                f.write("Contenido = ") 
                f.write(str(hijo.text))
            f.write("Atributos = ") 
            f.write(str(hijo.attrib).replace("{", " ").replace("}", " "))


        
    f.write('</body></html>')
    f.close

def main():
    """Prueba de la función verXML()"""
    #print(verXML.__doc__)
    miArchivoXML = input('Introduzca un archivo XML = ')
    miArchivoHTML = input('Introduzca un archivo HTML = ')
    #miArchivoXML = "rutas.xml"
    #miArchivoHTML = "index.html"
    writeXML(miArchivoXML, miArchivoHTML)
if __name__ == "__main__":
    main()