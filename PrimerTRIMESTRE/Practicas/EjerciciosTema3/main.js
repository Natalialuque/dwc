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
//variables 
//ejercicio 


/**EJERCICIO 3 */
//variables 
//ejercicio 


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