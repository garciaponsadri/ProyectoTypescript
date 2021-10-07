/*
    En este archivo de calculos.ts realizaremos todas las funciones del proyecto.
    He decidido hacerlo en único documento ya que al ser programas más bien cortos creo que es más favorable.
    
    Realizaremos un switch a la variable entrada que nos enviará el archivo index.ts (Será la opción elegida por el usuario)
    Y según el valor de la misma cargaremos una función u otra.
*/


import {leerTeclado} from "./entradaTeclado"

export let calculos = async (entrada: number) => {
    console.log(" ")
    let solucion: number
    switch(entrada) {

        // Establecemos un default para que todo lo que no sea un número del 1-7 provoque que salgamos del proyecto.
        default: {
            console.log("Hasta otra!")
            return "exit"
        }
    
        //    La primera función será calcular los números primos entre dos números que servirán de delimitadores.
        case 1: {
            console.log("| Números primos |")
            console.log(" ")
            console.log("Aquí calcularemos los números primos!")
            console.log("Puede insertar dos números que sirvan de delimitadores")
            console.log("Devolverá el numero de numeros primos (y cada numero primo)")

            // Pediremos los dos numeros que utilizaremos como delimitadores.

            let numero1 = parseInt(await(leerTeclado(' ')))
            let numero2 = parseInt(await(leerTeclado(' ')))

            // Haremos una comprobación para ordenarlos de menor (numero1) a mayor (numero2)
            if(numero1>numero2) {
                var temp=numero1
                numero1=numero2
                numero2=temp
            }

            // Declararemos el array primos donde guardaremos los números primos.
            // Recorreremos un bucle for utilizando numero1 y numero2 como delimitadores.
            // Partiremos de que el número es primo, y tras dividirlo por todos los números 
            //      entre el 2 y el mismo (mediante el segundo bucle for) le asignaremos el valor "false", 
            //      es decir, que no es primo en caso de que haya sido divisible por alguno de estos números.
            var primos = []
            for (var i=numero1; i<numero2+1; i++) {
                var primo=true
                for (var e=2; e<i-1; e++) {
                    if (i%e == 0) {
                        primo=false
                    }
                }
                // Aquí en caso de que el número no haya sido divisible por 
                // ningún numero se agregará al array de números primos.
                if (primo==true) {
                    primos.push(i)
                }
            }
            // Devolveremos el Array de los numeros primos como solución.
            return primos
            break;
        }

        // En esta función factorizaremos un número que aporte el usuario.
        case 2: {
            console.log("| FACTORIZACIÓN |")
            console.log(" ")
            // Declararemos los arrays, la variable "pos" y pediremos el número al usuario.
            var divisores = []
            var calculados = []
            var pos=0
            console.log("Inserte el número a factorizar")
            var numero1 = parseInt(await(leerTeclado(' ')))
            // Mediante dos bucles for listaremos los números primos que utilizaremos como divisores.
            // Parecido a lo que hicimos en la anterior función.
            for (var i=2; i<numero1+1; i++) {
                var primo=true
                for (var e=2; e<i; e++) {
                    if (i%e==0) {
                        primo=false
                    }
                }
                if (primo==true) {
                    divisores[pos]=i
                    pos++
                }
            }
            // Finalmente, listaremos la lista de divisores y mediante un bucle doWhile(), iremos diviendo
            // el numero que nos dió el usuario por esta lista de divisores.
            console.log("Lista de numeros primos: ")
            console.log(divisores)
            var o=0;
            do {
                if(numero1%divisores[o]==0) {
                    console.log(numero1+"   |   "+divisores[o])
                    numero1=numero1/divisores[o]
                    calculados.push(divisores[o])
                } else {
                    o++
                }
            } while(numero1>1);

            return(calculados)
            break;
        }
        // En esta función crearemos un objeto coche al cual le crearemos un método para calcular su precio.
        // El usuario irá insertando las características que quiera 
        // para el coche y el método calculará el respectivo precio.
        case 3: {
            console.log("| CosteCoche |")
            console.log(" ")
            class Coche {
                Ruedas: Number;
                Marca: Number;
                Cristales: Number;
            
                constructor( Ruedas: Number, Marca: Number, Cristales: Number) {
                    this.Ruedas=Ruedas;
                    this.Marca=Marca;
                    this.Cristales=Cristales;
                }
            
                decirCoche() {
                    console.log(this.Ruedas, this.Marca, this.Cristales)
                }
                // Aquí calcularíamos el precio, básicamente el usuario introducirá para cada una de las variables
                // del objeto un número del 1 al 3 que corresponderá a la característica que quiera el usuario para
                // cada una de esas variables. Aquí simplemente iremos sumando los precios de lo elegido por el usuario
                // y devolveremos la solución mediante un return.
                calculadoraPrecio() {
                    var Presupuesto=0
                    if (this.Ruedas==1) {
                        Presupuesto=10
                    } else if (this.Ruedas==2) {
                        Presupuesto=5
                    } else if (this.Ruedas==3) {
                        Presupuesto=20
                    }

                    if (this.Marca==1) {
                        Presupuesto=Presupuesto + 15
                    } else if (this.Marca==2) {
                        Presupuesto=Presupuesto + 25
                    } else if (this.Marca==3) {
                        Presupuesto=Presupuesto + 20
                    }

                    if (this.Cristales==1) {
                        Presupuesto=Presupuesto + 15
                    } else if (this.Cristales==2) {
                        Presupuesto=Presupuesto + 25
                    } else if (this.Cristales==3) {
                        Presupuesto=Presupuesto + 5
                    }

                    return Presupuesto
                }
            }
            console.log("Bienvenido! Aquí podrá indicar que tipo de coche quiere")
            console.log("En función de lo que elija el precio variará")
            console.log("Introduzca el número en función de lo que quiera")
            console.log(" ")
            // Aquí comenzaremos con la selección de las características.
            console.log("Neumáticos:")
            console.log("1: Robustos (10$) | 2: Ligeros (5$) | 3: TodoTerrenno (20$)")
            let Ruedas = parseInt(await(leerTeclado(' ')))
            console.log("1: Mazda (15$) | 2: Tesla (25$) | 3: BMW (20$)")
            let Marca = parseInt(await(leerTeclado(' ')))
            console.log("1: Tintados (15$) | 2: Antibalas (25$) | 3: Normales (5$)")
            let Cristales = parseInt(await(leerTeclado(' ')))

            // Aquí instanciaremos la clase coche y tras esto calcularemos el precio llamando al método correspondiente.
            let MiCoche = new Coche(Ruedas, Marca, Cristales)
            solucion=await(MiCoche.calculadoraPrecio())
            break;
        }

        // En esta función ordenaremos todos los números que quiera el usuario de menor a mayor.
        case 4: {
            console.log("| ORDENATOR |")
            console.log (" ")
            console.log ("Todos los numeros que quieras los ordenare")
            // Primero pediremos al usuario que nos diga cuantos números querrá introducir para ordenarlos.
            console.log ("Primero indicame el numero de numeros a introducir")
            let numeroNum = parseInt(await(leerTeclado(' ')))
            var Numeros = []
            console.log ("Perfecto! Ahora a introducir los números")
            // Tras esto, mediante un bucle for iremos pidiendo al usuario que los ingrese de forma ordenada
            // y lo iremos guardando en un array Numeros
            for (i=0; i<numeroNum; i++) {
                console.log("Numero "+(i+1)+"/"+numeroNum+": ")
                Numeros[i]= parseInt(await(leerTeclado(' ')))
            }
            var Temp
            // Printearemos la lista de números insertada de forma desordenada.
            console.log("Lista de numeros desordenada:")
            console.log(Numeros)
            // Para ordenar el Array utilizaremos el ordenamiento burbuja, el cual se basa en crear
            // dos bucles for, el primer bucle for irá recorriendo uno a uno los números del array, el segundo
            // partirá desde la posición 0 del array e irá avanzando hasta la casilla donde se haya quedado el for principal.
            // tras esto, realizará la simple comprobación de ver que elemento es mayor, el actual en el que se situa el 
            // array secundario o el elemento siguiente
            for (i=0; i<numeroNum-1; i++) {
                for (e=0; e<(numeroNum-i); e++) {
                    if(Numeros[e]>Numeros[e+1]) {
                        Temp=Numeros[e]
                        Numeros[e]=Numeros[e+1]
                        Numeros[e+1]=Temp
                    }
                }
            }
            // Devolveremos el array Numeros que será el array ordenado.
            return(Numeros)
        }
        
        // En este ejercicio pediremos 2 fechas y mediante estas fechas calcularemos cuantos años, meses 
        // y dias hay de diferencia entre ambas.
        case 5: {
            console.log("| FECHAS |")
            console.log(" ")
            console.log("Inserte dos fechas para saber los dias que hay entre ambas")
            console.log("aaaa-mm-dd")
            // Pediremos las fechas las cuales deberán respetar cierto formato.
            let numero1 = await(leerTeclado(' '))
            let numero2 = await(leerTeclado(' '))
            // Recibiremos las fechas como String asi que ahora almacenaremos en dos variables las 
            // fechas obtenidas a partir de los strings originales mediante la función new Date()
            let fecha1 = new Date(numero1)
            let fecha2 = new Date(numero2)
            // Ahora nos dispondremos a realizar los cálculos, en concreto calcularemos la diferencia entre las fechas.
            // Nos devolverá un valor extremadamente grande el cual pasaremos de milisegundos a días totales.
            var diff = Math.abs(fecha1.getTime() - fecha2.getTime());
            solucion = Math.ceil(diff / (1000 * 3600 * 24)); 
            // Tras esto, a partir de los días calcularemos los años, meses y días restantes y lo mandaremos mediante return.
            var años= Math.trunc(solucion/365)
            var meses= Math.trunc((solucion-años*365)/30)
            var dias=Math.trunc(solucion-meses*30-años*365)
            return "Hay entre ambas fechas "+años+" años "+meses+" meses y "+dias +" días"
            break;
        }

        // En esta función pediremos cuantos meses y días quedan para el cumpleaños del usuario.
        case 6: {
            console.log("| CUMPLECALCULADOR |")
            console.log (" ")
            console.log ("Inserte la fecha de su cumpleaños")
            console.log ("Automáticamente le dirá cuantos días quedan")
            console.log ("mes-dia")
            // Aquí pediremos que el usuario inserte su cumpleaños pero tan solo mes y día.
            let numero1 = await(leerTeclado(' '))
            // Declararemos la fecha de hoy mediante "new Date()" sin parámetro y en caso de que hoy sea
            // mayor que la fecha de cumpleaños le asignaremos el valor "2022" al año en lugar de "2021"
            // que hemos dejado por defecto en un origen.
            let numeroedit="2021-"+numero1
            let fechaCumple = new Date(numeroedit)
            let hoy = new Date()
            if (hoy.getTime() > fechaCumple.getTime()) {
                let numeroedit="2022-"+numero1
                fechaCumple = new Date(numeroedit)
            }
            // Ahora como en el ejercicio anterior calcularemos la diferencia, la pasaremos a años, meses y dias
            // Y como detalle, en caso de que hoy sea su cumpleaños le felicitaremos :).
            var diff = Math.abs(fechaCumple.getTime() - hoy.getTime());
            var calculo = Math.ceil(diff / (1000 * 3600 * 24)); 
            if (calculo==1 || calculo==365) {
                console.log("Feliz cumpleaños! :)")
            }
            var meses= Math.trunc(calculo/30)
            var dias=Math.trunc(calculo-(meses*30))
            return "Quedan todavía "+meses+" meses y "+dias+" dias" 
            break
        }

        // En esta última función calcularemos la edad del usuario a partir de su cumpleaños.
        case 7: {
            console.log("| CALCULADORA EDAD |")
            console.log (" ")
            console.log ("Inserte la fecha de su cumpleaños")
            console.log ("aaaa-mm-dd")
            // Lo primero será pedirle que inserte su fecha de cumpleaños la cual pasaremos a fecha.
            let numero1 = await(leerTeclado(' '))
            let fechaNacimiento = new Date(numero1)
            let hoy=new Date()
            // Esta vez calcularemos la diferencia del día de hoy con su día de nacimiento y lo pasaremos a
            // años, meses y días para saber cuanto ha vivido exactamente.
            var diff = Math.abs(fechaNacimiento.getTime() - hoy.getTime());
            var calculo = Math.ceil(diff / (1000 * 3600 * 24));
            var años= Math.trunc(calculo/365)
            var meses= Math.trunc((calculo-años*365)/30)
            var dias=Math.trunc(calculo-meses*30-años*365)
            return "Has vivido "+años+" años, "+meses+" meses y "+dias+" dias"

        }
    }
    return solucion
}