// INTERACCIONES
// console.log("hola desde JS");
// alert("hola soy un alert");
// confirm ("escoge perro");
// document.write("hola desde la web");


//DECLARACION VARIABLES,CONTANTES
// La variable es un espacion en memoria donde guardamos datos

// nombre = "luisa"  
// asi no le anteponga var JS va a tomarlo como una variable de tipo var

// var apellido = "Rodriguez"
// let signo = "Capricornio"
// este tipo de variable puede como var se modificada durente la ejecucion a diferencia de const

// const sexo = "Femenino"
// este tipo de variable tiene un valor fijo el cual no puede ser cambiado en ninguna instacia

// HAMBITO DE LAS VARIABLES,SCOPE
// cuando las variables de tipo local se encontrarse en un hambito globa pueden ser llamadas desde el local
// pero desde el locas no es posible llamas al global.

// var es de hambito o scope global
// let es de hambito o scope local
// const es de hambito o scope local

// HABILITAR MODO ESTRICTO
// esto evita que JS haga sus propias conjeturas cuando no escribirmos bien el codigo
// esto deberia hacerse siempre que se trabaje con lenguaje plano vanilla JS
//  "use strict"


// Ejersicio # 1 recibir un nombre y saludar por el nombre
// "use strict"
// var nombre = prompt("Porfavor ingrese su nombre");
// document.write("Hola, " + nombre +". Tu nombre a sido registrado");

// Ejersicio #2 Leer nombre y apellido, saludar por nombre y apellido.
// var variable1 = prompt("Ingresa tu nombre");
// var variable2 = prompt("Ingresa tu apellido");
// var resultado = variable1 + variable2;
// document.write("Hola, " + resultado)

// Ejersicio #3 Pregunte al usuario si desea continuar, responder con hola o adiós.
// var variable1 = confirm("Desea continuar");
// var resultado = variable1 === true ? "Hola Bienvenida." : " Adios."  ---------operadores ternarios
// console.log(resultado)

// Ejersicio #4 Leer nombre y edad, Mostrar si es o no mayor de edad.

// var nombre = prompt("Ingrese su nombre");
// var edad = prompt ("Ingrese su edad");

// if (edad >= 18) {
//     document.write (nombre + " es mayor de edad")
// }else {
//     document.write (nombre + " es menor de edad")
// }

// Ejersicio #6 Leer un número, mostrar el doble de n.

// var numero = prompt("Ingrese un numero");
// numero = parseInt(numero)
// var numerodoblado = numero + numero 
// document.write ("El doble de numero ingresado es " + numerodoblado)

//Ejersicio #7 Leer un número, mostrar la mitad de n.

// var numero = prompt("Ingrese un numero");
// numero = parseInt(numero)
// var halfnumero = numero / 2
// document.write ("La mitas del numero es " + halfnumero)

// Ejersicio #8 Leer un número, mostrar si es positivo, negativo o cero.

// var numero = prompt("Ingrese un numero");

// if (numero < 0) {
//     document.write ("El numero ungresado es negativo")
// } else {
//     document.write ("El numero ungresado es positivo")
// }