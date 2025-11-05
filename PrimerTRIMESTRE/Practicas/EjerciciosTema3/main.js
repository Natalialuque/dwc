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
      const hoy = new Date(); //

      console.log("hoy:"+hoy);

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
respuesta = document.getElementById("resRes");
respuesta.innerText = "Ancho: "+window.innerWidth+", Alto:"+window.innerHeight;
//ejercicio 
window.addEventListener("resize",()=>{
  respuesta.innerText = "Ancho: "+window.innerWidth+", Alto:"+window.innerHeight;

  if(parseInt(window.innerWidth)<768)
    respuesta.innerText+=" Movil";
  else if(parseInt(window.innerWidth)<1024)
    respuesta.innerText+=", tablet";
  else
    respuesta.innerText+=", Desktop";
});

/**EJERCICIO 10 */
//variables 
//ejercicio 
document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("abrir-posicionada");

  boton.addEventListener("click", () => {
    const anchoPantalla = window.innerWidth;
    const altoPantalla = window.innerHeight;

    const posicionX = anchoPantalla - 40;
    const posicionY = altoPantalla - 20;

    const nuevaVentana = window.open(
      '',
      '',
      `width=300,height=200,left=${posicionX},top=${posicionY}`
    );

    if (nuevaVentana) {
      nuevaVentana.document.write('<h2 style="font-family:Arial;">Ventana posicionada</h2>');
    } else {
      alert(" El navegador ha bloqueado la apertura de la ventana. Activa los pop-ups.");
    }
  });
});



/**EJERCICIO 11 */
//variables 
//ejercicio 
document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("abrir-ventana");

  boton.addEventListener("click", () => {
    const nuevaVentana = window.open('', '', 'width=300,height=300');
    if (nuevaVentana) {
      nuevaVentana.resizeTo(600, 500);
    } else {
      alert("El navegador ha bloqueado la apertura de la ventana. Activa los pop-ups.");
    }
  });
});



/**EJERCICIO 12 */
//variables 
//ejercicio 
// document.addEventListener("DOMContentLoaded", () => {
//   const iframe = document.getElementById("visor");
//   const urlActual = document.getElementById("url-actual");
//   const btnAtras = document.getElementById("btn-atras");
//   const btnAdelante = document.getElementById("btn-adelante");

//   const historial = ["https://www.example.com"];
//   let posicion = 0;

//   function actualizarIframe() {
//     iframe.src = historial[posicion];
//     urlActual.innerText = "URL actual: " + historial[posicion];
//   }

//   btnAtras.addEventListener("click", () => {
//     if (posicion > 0) {
//       posicion--;
//       actualizarIframe();
//     }
//   });

//   btnAdelante.addEventListener("click", () => {
//     if (posicion < historial.length - 1) {
//       posicion++;
//       actualizarIframe();
//     }
//   });

//   // Ejemplo: añadir nuevas páginas al historial cada 5 segundos
//   // Puedes quitar esto y usar tus propios botones para navegar
//   setInterval(() => {
//     const nuevasUrls = [
//       "https://www.wikipedia.org",
//       "https://www.mozilla.org",
//       "https://www.w3schools.com"
//     ];
//     if (posicion === historial.length - 1 && historial.length < 4) {
//       historial.push(nuevasUrls[historial.length - 1]);
//       posicion++;
//       actualizarIframe();
//     }
//   }, 5000);

//   actualizarIframe();
// });
document.getElementById("atras").onclick = () => {
    history.back();
}

document.getElementById("adelante").onclick = () => {
    history.forward();
}


/**EJERCICIO 13 */
//variables 
//ejercicio 
document.getElementById("enviarArea1").onclick = () => {
if ((aux)&&(!aux.closed)) {
    aux.document.getElementById("loginText").value = document.getElementById("texto").value;
    aux.focus();
  } else {

  }
}


/**EJERCICIO 14 */
//variables 
//ejercicio 
let er1 = new RegExp("l","ig");
document.getElementById("compExpr").onclick = () => {
    let res = document.getElementById("resExp");
    let texto = document.getElementById("probarExp").value;

    // que ha encontrado y cuantas veces lo ha encontrado en un array
    let coincidencias = texto.match(er1);

    // true si existe
    let existe = er1.test(texto);

    // reemplaza el texto encontrado a rojo y negrita
    let resaltado = texto.replace(er1, match => `<strong style='color:red'><u>${match}</u></strong>`);

    res.innerHTML = `
        ${existe ? "Existe la letra L" : "No existe la letra L"}<br>
        Número de coincidencias: ${coincidencias ? coincidencias.length : 0}<br>
        Texto resaltado: ${resaltado}
    `;
}

/**EJERCICIO 15 */
//variables 
let fecha = document.getElementById("fecha");
let resultadoFecha = document.getElementById("resultadoFecha");
let validaFecha = document.getElementById("validaFecha");

//ejercicio 
validaFecha.onclick=function(){
    const expre = /\b\d{1,2}\/\d{1,2}\/\d{4}\b/;

    if(fecha.value.match (expre)){
        resultadoFecha.innerHTML="La fecha es correcta";
    }else{
        resultadoFecha.innerHTML="La fecha no es correcta";
    }

}



/**EJERCICIO 16 */
//variables 
let email = document.getElementById("email");
let resultadoemail = document.getElementById("resultadoemail");
let validaemail = document.getElementById("validaemail");
//ejercicio 
validaemail.onclick=function(){
    const expre = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/; 

    if(email.value.match (expre)){
        resultadoemail.innerHTML="El email es correcto";
    }else{
        resultadoemail.innerHTML="El email no es correcto";
    }

}

/**EJERCICIO 17 */
//variables 
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let resultadoInvertir = document.getElementById("resultadoInvertir");
let inivierte = document.getElementById("inivierte");

//ejercicio 
// las comillas inversas (``)Son las únicas que permiten interpolación de variables y múltiples líneas fácilmente.

inivierte.onclick = function () {
  // Obtener los valores de los campos
  const entrada = `${nombre.value.trim()} ${apellido.value.trim()}`;

  // Expresión regular para capturar nombre y apellido
  const expre = /^(\w+)\s+(\w+)$/;

  const match = entrada.match(expre);

  if (match) {
    const invertido = `${match[2]}, ${match[1]}`;
    resultadoInvertir.textContent = invertido;
  } else {
    resultadoInvertir.textContent = "Formato no válido. Usa solo letras sin símbolos.";
  }
};

/**EJERCICIO 18 */
//variables 
//ejercicio 
document.getElementById("limpiar").onclick = function () {
  const entrada = document.getElementById("htmlInput").value;

  // Expresión regular para eliminar <script>...</script> y su contenido
  const limpio = entrada.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');

  document.getElementById("resultadohtml").textContent = limpio;
};
