/**APUNTES TEMA 2 */

//No tenemos que indicar el tipo de las variables
//No tenemos que temrinar cada sentencia con ;
//Los script de aqui no pueden comunicarse con nada de fuera
//Tenemos un html donde vamos a poder visualizar y un main.js donde vamos a crear los ejercicios esto lo conectamod mediante un <script></script> eb el html


/**VARIABLES*/
//tenemos 3 tipos diferentes de declaracion de variables 
//const = varaiables constantes 
const num =100;

//let = la que usamos siempre, no puede redeclararse ni tener el mismo nombre varias 
let edad = 25;

//var = muy antigua no se usa 
var xxx;

/*CONSOLA*/
//es muy util ya que podemos depurar codigo, visualizar valores,poner mensajes... y cuando el visual no nos da un error en la consola si sale -> f12

/*let persona = {
  nombre: "Juan",
  edad: 30,
  direccion: {
  calle: "Calle Falsa",
  numero: 123
  }
};*/

//.log(persona); // muestra el objeto de forma normal
//console.dir(persona); // muestra el objeto como árbol de propiedades
//console.info(persona);




/**TIPOS DE DATOS BASICOS */
//las variables en javaScript pueden contener cualquier tipo de dato 

let saludo = "Hola Mundo";
console.log(saludo); // Hola Mundo

let decimal = 9.45;
let entero = 123_345.45; // usando _ para separar miles
console.log(decimal, entero); // 9.45 123345.45


const otraForma = BigInt("123456789012345678901234567890");
console.log(otraForma);

let verdadero = true;
let falso = false;
console.log(verdadero, falso); 

let persona = {
  nombre: "Pepe",
  edad: 25,
  superaCurso: true
};
console.log(persona);

function suma(a, b) {
  return a + b;
}

// Usando la función
console.log("Resultado: " + suma(7, 8)); // Resultado: 15