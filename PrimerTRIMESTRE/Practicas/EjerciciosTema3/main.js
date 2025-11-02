/**EJERCICIO 1 */
//variables 
let botonEstudiantes = document.getElementById("verEstudiante");
let botonProfesor = document.getElementById("verProfesor");
let resultadoEstudiante = document.getElementById("resultadoEstudiante");
let resultadoProfesor = document.getElementById("resultadoProfesor");

//HOLA
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



//ejercicio 
calcpendiente.onclick=function(){
  // Calcular la pendiente (tangente del ángulo)
  let pendiente = (y2.value - y1.value) / (x2.value- x1.value);

  // Calcular el ángulo en radianes y luego convertirlo a grados
  let anguloRad = Math.atan(pendiente);
  let anguloGrados = anguloRad * (180 / Math.PI);

  resul2.innerHTML=anguloGrados;
}


//variables 
let ascendidos = document.getElementById("ascendidos");
let recorridos = document.getElementById("recorridos");
let calcPendiente2 = document.getElementById("calcPendiente2");
let resul13 = document.getElementById("resul13");

//ejercicio 
calcPendiente2.onclick=function(){

  resul13.innerHTML=(ascendidos.value/recorridos.value)*100;
}



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
let fechaNaciiento = document.getElementById("fechaNacimiento");
let calculaDias=document.getElementById("calculaDias");
let resultadoDias=document.getElementById("resultadoDias");
//ejercicio 
calculaDias.onclick=function(){
      const nacimiento = new Date(fechaNaciiento.value);
      const hoy = new Date();

      // Calcular diferencia en milisegundos
      const diferenciaMs = hoy - nacimiento;

      // Convertir a días
      resultadoDias.innerHTML ="Llevas vivo:"+ Math.floor(diferenciaMs / (1000 * 60 * 60 * 24))+" dias";
}


/**EJERCICIO 5 */
//variables 
let fechaNacimiento = document.getElementById("fechaNacimiento2");
let calcularEdad = document.getElementById("calcularEdad");
let resultadoEdad = document.getElementById("resultadoEdad");

//ejercicio 
calcularEdad.onclick=function(){
      const nacimiento = new Date(fechaNacimiento.value);
      const ahora = new Date();

      // Diferencia total en milisegundos
      const diferenciaMs = ahora - nacimiento;

      // Calcular años completos
      let edadAnios = ahora.getFullYear() - nacimiento.getFullYear();
      const cumpleEsteAnio = new Date(ahora.getFullYear(), nacimiento.getMonth(), nacimiento.getDate());

      if (ahora < cumpleEsteAnio) {
        edadAnios--; // Aún no ha cumplido años este año
      }

      // Calcular días, horas y minutos totales vividos
      const diasTotales = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
      const horasTotales = Math.floor(diferenciaMs / (1000 * 60 * 60));
      const minutosTotales = Math.floor(diferenciaMs / (1000 * 60));

      resultadoEdad.innerHTML="Edad años:"+edadAnios+"<br>Dias: "+diasTotales+"<br>Horas:"+horasTotales+"<br>Minutos:"+minutosTotales;
}


/**EJERCICIO 6 */
//variables 
let hora = document.getElementById("hora");
let texto = document.getElementById("texto");
let recordar = document.getElementById("recordar");
let lista = document.getElementById("listaEventos");

//ejercicio 

// recordar.onclick=function(){
//   let mensaje = texto.value;
//   let tiempo = new Date(hora.value);

//   let fechaNow = new Date(); //fecha actual

//   tiempo =Math.abs( fechaNow -tiempo);

//   setTimeout(function(){
//     alert(mensaje);
//   },tiempo)
// }
  let eventos = [];


recordar.onclick=function(){
  
  let mensaje = texto.value;
  let tiempo = hora.value;

  if (!mensaje || !tiempo) {
      alert("Por favor, escribe un recordatorio y selecciona una fecha.");
      return;
    }

    eventos.push({ mensaje, tiempo });

    // Ordenar por fecha ascendente
    eventos.sort((a, b) => new Date(a.tiempo) - new Date(b.tiempo)); 

    lista.innerHTML = ""; // ← Esto evita duplicados
    eventos.forEach(evento => {
      const fechaFormateada = new Date(evento.tiempo).toLocaleString();
      lista.innerHTML += `<p><strong>${fechaFormateada}</strong>: ${evento.mensaje}</p>`;
    });


}




/**EJERCICIO 7 */
//variables 
let texto2 = document.getElementById("textoguion");
let cantidad = document.getElementById("cantidad");
let cantidadPosicion = document.getElementById("cantidadPosicion");

//ejercicio  
cantidad.onclick = function() {
  let cont = 0;
  let posiciones=[];
  for (let i = 0; i < texto2.value.length; i++) {
    if (texto2.value[i] === '-') {
      cont++;
      posiciones.push(i);
    }
  }

  cantidadPosicion.innerHTML = "Hay " + cont + " guiones (-), en las posiciones:"+posiciones;
};


/**EJERCICIO 8 */
//variables 
let resultado = document.getElementById("resultado");
//ejercicio 
let array = [];

    function mostrar() {
      resultado.innerHTML=array;
    }

    function insertarFinal() {
      const valor = document.getElementById("valor").value;
      if (valor) array.push(valor);
      mostrar();
    }

    function insertarInicio() {
      const valor = document.getElementById("valor").value;
      if (valor) array.unshift(valor);
      mostrar();
    }
    function borrarPrimero() {
      array.shift();
      mostrar();
    }

    function borrarUltimo() {
      array.pop();
      mostrar();
    }

    function insertarEnPosicion() {
      const valor = document.getElementById("valor").value;
      const pos = parseInt(document.getElementById("posicion").value);
      if (!isNaN(pos) && valor) array.splice(pos, 0, valor);
      mostrar();
    }

    function eliminarEnPosicion() {
      const pos = parseInt(document.getElementById("posicion").value);
      if (!isNaN(pos)) array.splice(pos, 1);
      mostrar();
    }
    function ordenarAsc() {
      array.sort((a, b) => a.localeCompare(b, 'es', { numeric: true }));
      mostrar();
    }

    function ordenarDesc() {
      array.sort((a, b) => b.localeCompare(a, 'es', { numeric: true }));
      mostrar();
    }

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