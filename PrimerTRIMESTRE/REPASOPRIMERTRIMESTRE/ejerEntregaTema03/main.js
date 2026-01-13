/**EJERCICIO 1 */
//voy a hacerlo mediante herencia de clases 
let personas = document.getElementById("persona");
let estudiantes = document.getElementById("estudiantes");
let profesores = document.getElementById("profesores");

class persona {
     constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
}

function obPersona(persona){
    personas.innerHTML+="Nombre:"+persona.nombre+", Edad:"+persona.edad+", Genero:"+persona.genero;
}

const persona1= new persona("natalia",15,"mujer");
obPersona(persona1);



class estudiante extends persona{
    constructor(nombre,edad,genero,curso,grupo){
        super(nombre,edad,genero);
        this.curso=curso;
        this.grupo=grupo;
    }
}

function registrar(estudiante){
    estudiantes.innerHTML+="Estudiante:"+estudiante.nombre+", esta en el curso"+estudiante.curso+" y el grupo "+estudiante.grupo;

}
const estudiante1 = new estudiante("natalia",15,"Mujer",2,"a");
registrar(estudiante1);



class profesor extends persona{
    constructor(nombre,edad,genero,asignatura,nivel){
        super(nombre,edad,genero);
        this.asignatura=asignatura;
        this.nivel=nivel;
    }
}

function mostrarp(profesor){
    profesores.innerHTML+="Profesor: "+profesor.nombre+", imparte "+profesor.asignatura+" al nivel "+profesor.nivel;

}
const profesor1 = new profesor("natalia",15,"Mujer","matematicas",5);
mostrarp(profesor1);

/**EJERCICIO 2 */
let longitud = document.getElementById("longitud");
let altura = document.getElementById("altura");
let calcLongitud = document.getElementById("calcLongitud");
let resul1 = document.getElementById("resul1");

calcLongitud.onclick=function(){
    const long = Math.pow(longitud.value,2);
    const alt = Math.pow(altura.value,2);

    resul1.innerHTML= Math.sqrt(long+alt);
}

let x1 = document.getElementById("x1");
let y1 = document.getElementById("y1");
let x2 = document.getElementById("x2");
let y2 = document.getElementById("y2");
let calcpendiente = document.getElementById("calcpendiente");
let resul2 = document.getElementById("resul2");

calcpendiente.onclick=function(){

    const angulo= Math.atan2(Number(y2.value) - Number(y1.value), Number(x2.value) - Number(x1.value));

    resul2.innerHTML= angulo * 180 / Math.PI

}

let ascendidos = document.getElementById("ascendidos");
let recorridos = document.getElementById("recorridos");
let calcPendiente2 = document.getElementById("calcPendiente2");
let resul3 = document.getElementById("resul3");

//ejercicio 
calcPendiente2.onclick=function(){

  resul3.innerHTML=(ascendidos.value/recorridos.value)*100;
}


/**EJERCICIO 3 */
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");

result1.innerHTML= Math.PI.toFixed(4);
result2.innerHTML=Math.round(Math.PI * 10000) / 10000;

/**EJERCICIO 4 */
let date4 = document.getElementById("date4");
let boton4 = document.getElementById("boton4");
let resultado4 = document.getElementById("resultado4");

boton4.onclick=function(){
    const fechaHoy = new Date();
    const fechaNaci = new Date(date4.value);
    console.log(fechaHoy);

    const diferencia = fechaHoy - fechaNaci;

    resultado4.innerHTML= Math.floor(diferencia / (1000 * 60 * 60 * 24));

}

/**EJERCICIO 5 */
let date5 = document.getElementById("date5");
let boton5 = document.getElementById("boton5");
let resultado5 = document.getElementById("resultado5");

boton5.onclick=function(){
       const nacimiento = new Date(date5.value);
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

      resultado5.innerHTML="Edad años:"+edadAnios+"<br>Dias: "+diasTotales+"<br>Horas:"+horasTotales+"<br>Minutos:"+minutosTotales;
}


/**EJERCICIO 6 */
let texto6 = document.getElementById("texto6");
let date6 = document.getElementById("date6");
let boton6 = document.getElementById("boton6");
let resultado6 = document.getElementById("resultado6");

let recordatorio=[];

boton6.onclick=function(){
    const texto= texto6.value;
    const tiempo = date6.value;

     recordatorio.push({ texto, tiempo });

    // Ordenar por fecha ascendente
<<<<<<< HEAD
    eventos.sort((a, b) => new Date(a.tiempo) - new Date(b.tiempo)); 
    
=======
    recordatorio.sort((a, b) => new Date(a.tiempo) - new Date(b.tiempo)); 

    resultado6.innerHTML = ""; // ← Esto evita duplicados
    recordatorio.forEach(evento => {
      const fechaFormateada = new Date(evento.tiempo).toLocaleString();
      resultado6.innerHTML += `<p><strong>${fechaFormateada}</strong>: ${evento.texto6}</p>`;
    });
>>>>>>> 5765cef845fa3524a461286f2cfd979b57d38c5b

}

/**EJERCICIO 7 */
let texto7 = document.getElementById("texto7");
let boton7 = document.getElementById("boton7");
let resultado7 = document.getElementById("resultado7");

boton7.onclick=function(){
    let caracteres = 0;
    let posiciones = [];

    for(let i=0; i<texto7.value.length;i++){
        if(texto7.value[i]=== "-"){
            caracteres++;
            posiciones.push(i);
        }
    }

    resultado7.innerHTML="Hay "+caracteres+" en total, y en las posiciones: "+posiciones;
}

/**EJERCICIO 8 */
let resultado8 = document.getElementById("resultado");
//ejercicio 
let array = [];

    function mostrar() {
      resultado8.innerHTML=array;
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
let resultado9 = document.getElementById("resultado9");
const ancho = window.innerWidth;
const alto = window.innerHeight;

resultado9.innerHTML="Ancho: "+ancho+" Alto: "+alto;
window.addEventListener("resize",()=>{
  resultado9.innerText = "Ancho: "+window.innerWidth+", Alto:"+window.innerHeight;

  if(parseInt(window.innerWidth)<768)
    resultado9.innerText+=" Movil";
  else if(parseInt(window.innerWidth)<1024)
    resultado9.innerText+=", tablet";
  else
    resultado9.innerText+=", Desktop";
});
/**EJERCICIO 10 */
let ancho10 = (window.innerWidth-40);
let alto10 = (window.innerHeight-20);
let aux= undefined;
document.getElementById("abrirVentana").onclick = function() {
    aux = window.open(
      "../Pruebas/src/usuers.html",
     "NuevaVenta",
     "Width="+ancho10+",height="+alto10);
}

/**EJERCICIO 11 */
document.getElementById("boton11").onclick = function ()  {
    aux.resizeTo(600,500);
}

/**EJERCICIO 12 */
document.getElementById("atras").onclick = () => {
    history.back();
}

document.getElementById("adelante").onclick = () => {
    history.forward();
}

/**EJERCICIO 13 */

document.getElementById("enviarArea1").onclick = () => {
if ((aux)&&(!aux.closed)) {
    aux.document.getElementById("loginText").value = document.getElementById("texto13").value;
    aux.focus();
  } else {

  }
}
/**EJERCICIO 14 */


/**EJERCICIO 15 */


/**EJERCICIO 16 */


/**EJERCICIO 17 */
