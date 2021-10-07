import {leerTeclado} from "./util/entradaTeclado";
import {calculos} from "./util/calculos";
console.log(" ")
// Crearemos la función main que será la función principal de nuestro código al ser la que se ejecute
// al realizar el comando "Node dist"
let main = async () => {
    console.log(`Bienvenido al menú matemático!`)
    console.log(` `)
    // Aquí crearemos un bucle eterno en el que pediremos al usuario que elija una opción.
    while(1) {
        console.log(`Que opción prefieres!`)
        console.log(`0: Salir`)
        console.log(`1: Numero Primo`)
        console.log(`2: Factorización`)
        console.log(`3: Presupuesto Coche`)
        console.log(`4: Ordenador de números`)
        console.log(`5: Operadora de Fechas`)
        console.log(`6: Cumpleaños calculador`)
        console.log(`7: Calculadora Edad`)
        // Registraremos la opción del usuario y la enviaremos a la función calculos 
        // y registraremos el valor que nos retorne en la variable solución
        let entrada = parseInt(await leerTeclado (''))
        let solucion = await calculos(entrada)
        // En caso de que el valor que retorne no sea igual a "exit" comunicaremos 
        // la solución, en caso contrario detendremos la ejecución del programa
        if (solucion != "exit") {
            console.log(`La solución es: ${solucion}`)
        } else {
            break
        }
        // Aquí estableceremos una pequeña pausa entre la comunicación de la solución y
        // el despliegue del menú otra vez para ir a la siguiente función
        console.log(`Pulse enter para continuar`)
        await leerTeclado ('')
        console.log(` `)
    }
}
//Invocamos a la función
main()