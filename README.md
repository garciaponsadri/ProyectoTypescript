# Adrià García Pons : Práctica Typescript
_Fecha: 08/10/2021_

### Información General 📋
* Primera práctica Typescript
* Las explicaciones del código están documentadas en el mismo código pero también las encontraremos dentro del PDF 📖   
* Las capturas de cada función (desde la vista del usuario que las usa), están también en el PDF.
* En el PDF vienen descripciones más detalladas acerca de cada elemento del proyecto.

### Advertencia ⚠️
* En esta práctica habrá cosas que demos por hecho de las explicadas en la anterior práctica [Anterior Práctica](https://github.com/garciaponsadri/PrimerProyecto)

### Estructura de archivos 🛠️:

     -> doc:
           > Práctica_Typescript.pdf
      
     -> src:
           -> util                    // Este directorio contiene los archivos typescript que forman el proyecto excepto el index
                > calculos.ts         // Este archivo contiene gran parte del código y funciones que utilizaremos en el proyecto
                > entradaTeclado.ts   // Este archivo contiene la función de "leerTeclado" que utilizamos a lo largo de todo el proyecto
            > index.ts                // Este archivo Typescript es el principal ya que su código será lo que primero se inicie al ejecutar el proyecto (Una vez esté compilado a .js)
            
      > .gitignore                    // Archivo que permite que se ignoren los directorios/archivos que estén escritos en él al subirse el repositorio.
      > package-lock.json             // Archivo de configuración de Typescript
      > package.json                  // Archivo de configuración de Typescript 
      > tsconfig.json                 // Archivo de configuración de Typescript
      
      x Node-Modules                  // Este directorio no ha sido subido por estar incluido en el .gitignore
      x dist                          // Este directorio no ha sido subido por estar incluido en el .gitignore
          
      > README.md
