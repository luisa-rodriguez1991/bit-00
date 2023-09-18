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
"use strict"
var nombre = prompt("Porfavor ingrese su nombre");
document.write("Hola, " + nombre +". Tu nombre a sido registrado");

