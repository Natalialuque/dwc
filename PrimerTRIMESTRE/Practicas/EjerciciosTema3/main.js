/**EJERCICIO 1 */
//variables 
let botonEstudiantes = document.getElementById("verEstudiante");
let botonProfesor = document.getElementById("verProfesor");
let resultadoEstudiante = document.getElementById("resultadoEstudiante");
let resultadoProfesor = document.getElementById("resultadoProfesor");

//ejercicio 
// Clase base Persona
class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }

  obtDetalles() {
    return "nombre:"+this.nombre+"<br>Edad:"+this.edad+"<br>Género:"+this.genero;
  }
}

// Clase Estudiante
class Estudiante extends Persona {
  constructor(nombre, edad, genero, curso, grupo) {
    super(nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
  }

  registrar() {
    return this.obtDetalles()+"<br>Curso:" +this.curso+"<br>Grupo:"+this.grupo;
  }
}

// Clase Profesor
class Profesor extends Persona {
  constructor(nombre, edad, genero, asignatura, nivel) {
    super(nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }

  asignar() {
    return this.obtDetalles()+"<br>Asignatura:"+this.asignatura+"<br>Nivel:"+ this.nivel;
  }
}

// Crear instancias
const persona = new Persona("Natalia",21,"Femenino");
const persona2= new Persona ("Joselu",45,"Masculino");
const estudiante = new Estudiante(persona.nombre, persona.edad, persona.genero, "2º Bachillerato", "B");
const profesor = new Profesor(persona2.nombre, persona2.edad, persona2.genero, "Matemáticas", "Secundaria");

// Eventos de los botones
botonEstudiantes.onclick= function(){
    resultadoEstudiante.innerHTML=estudiante.registrar();

}

botonProfesor.onclick= function(){
    resultadoProfesor.innerHTML=profesor.asignar();

}


/**EJERCICIO 2 */
//POR PARTES 
//variables 
let longitud = document.getElementById("longitud");
let altura = document.getElementById("altura");
let calcLongitud = document.getElementById("calcLongitud");
let resul1 = document.getElementById("resul1");

//ejercicio 
calcLongitud.onclick=function(){
  resul1.innerHTML=Math.sqrt((longitud.value **2 )+(altura.value**2));
}

//variables 
let x1=document.getElementById("x1");
let y1=document.getElementById("y1"); 
let x2=document.getElementById("x2");
let y2=document.getElementById("y2");
let calcpendiente= document.getElementById("calcpendiente");
let resul2=document.getElementById("resul2"); 





/**EJERCICIO 3 */
//variables 
let pi1= document.getElementById("pi1");
let pi2= document.getElementById("pi2");

//constante 
const PI = Math.PI;

//ejercicio 

   // Método 1: toFixed()
  pi1.innerHTML = PI.toFixed(4); // Devuelve "3.1416"

  // Método 2: Math.round con multiplicación
  pi2.innerHTML = Math.round(PI * 10000) / 10000; // Devuelve 3.1416



/**EJERCICIO 4 */
//variables 
//ejercicio 


/**EJERCICIO 5 */
//variables 
//ejercicio 



/**EJERCICIO 6 */
//variables 
let hora = document.getElementById("hora");
let texto = document.getElementById("texto");
let recordar = document.getElementById("recordar");

//ejercicio 

recordar.onclick=function(){
  let mensaje = texto.value;
  let tiempo = new Date(hora.value);

  let fechaNow = new Date(); //fecha actual

  tiempo =Math.abs( fechaNow -tiempo);

  setTimeout(function(){
    alert(mensaje);
  },tiempo)
}


/**EJERCICIO 7 */
//variables 
//ejercicio 


/**EJERCICIO 8 */
//variables 
//ejercicio 


/**EJERCICIO 9 */
//variables 
//ejercicio 


/**EJERCICIO 10 */
//variables 
//ejercicio 


/**EJERCICIO 11 */
//variables 
//ejercicio 


/**EJERCICIO 12 */
//variables 
//ejercicio 


/**EJERCICIO 13 */
//variables 
//ejercicio 



/**EJERCICIO 14 */
//variables 
//ejercicio 


/**EJERCICIO 15 */
//variables 
//ejercicio 


/**EJERCICIO 16 */
//variables 
//ejercicio 



/**EJERCICIO 17 */
//variables 
//ejercicio 



/**EJERCICIO 18 */
//variables 
//ejercicio 