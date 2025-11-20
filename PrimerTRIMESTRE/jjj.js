
// Obtener palabra 
let palabra = document.getElementById("palabraOculta").value;
let ComprobarPalabra= document.getElementById("ComprobarPalabra");

// Variables de estado del juego
let caracteresLetra = palabra.length;
//console.log(caracteresLetra);
let letrasAcertadas = Array(palabra.length).fill("_"); 
let fallosRestantes = (caracteresLetra/2)+1; 
let tiempoPorLetra = (caracteresLetra*10)/3;  //Parece tonto esto, pero si no lo pongo el tiempo restante no funciona bien
let tiempoRestante = (caracteresLetra*10)/3; 
let temporizador = null;

// Elementos del DOM
let contadorFallos = document.getElementById("contadorFallos");
let mostrarPalabra = document.getElementById("mostrarPalabra");
let mostrarPalabraOculta = document.getElementById("mostrarPalabraOculta");
let tiempoTexto = document.getElementById("tiempoRestanteTexto");
let fallosUsuario = document.getElementById("FallosDelUsuario");
let letrasEscribir = document.getElementById("escribir");
let botonComprobar = document.getElementById("comprobarLetra");
let botonInicio = document.getElementById("inicioJuego");
let RecuentoJuegos= document.getElementById("RecuentoJuegos");
let volverJUGAR = document.getElementById("volverJUGAR");


ComprobarPalabra.onclick = function(){
  let palabra = document.getElementById("palabraOculta").value;
  const regex = /["-]?\d{1,3}(?:,\d{3})*(?:\.\d+)?["-]?/g;

  // Verificamos si la palabra contiene algún patrón prohibido
  if (regex.test(palabra)) {
    alert("La palabra no puede contener números ni caracteres especiales como comillas, guiones, comas o puntos. Por favor, introduce otra.");
    return; // Detiene la ejecución si hay coincidencia
  }

  //verificamos que la palabra no este vacia 
 else if(palabra.length == 0){
    alert("La palabra no puede estar vacia");
    return;
  }

else{
  alert("la palabra es correcta, puede iniciar")

}

};


// Mostrar palabra oculta al pulsar el boton
document.getElementById("verPalabraOculta").onclick = () => {
    mostrarPalabraOculta.innerHTML = palabra;
};

/** 
 * Funciones independientes
 * */ 
function actualizarPalabraMostrada() { //actualiza la palabra que se esta mostrando al ir cambiando _ por letras
    mostrarPalabra.innerHTML = letrasAcertadas.join(" ");
}

function actualizarFallos() { //Actualiza el contador de fallos
    contadorFallos.innerHTML = fallosRestantes;
}

function actualizarTiempoTexto() { //actualiza el tiempo restante por letra
    tiempoTexto.innerHTML = "Tiempo restante:"+tiempoRestante+"segundos";
}

//Fnccion neceesaria para ir controlando el temporizador

function iniciarTemporizador() {
    let fallosRestantes = ((palabra.length/2)+1); 

    clearInterval(temporizador);
    tiempoRestante = tiempoPorLetra;
    actualizarTiempoTexto();

    temporizador = setInterval(() => {
        tiempoRestante--;
        actualizarTiempoTexto();

        if (tiempoRestante <= 0) {
            clearInterval(temporizador);

            // Contamos como fallo automático y quitamos un fallor
            fallosRestantes--;
            actualizarFallos();
            fallosUsuario.innerHTML += "<br> Tiempo agotado";

            // Reiniciamos el temporizador para la siguiente letra
            iniciarTemporizador();

            // Verificar derrota, si no quedan fallos directamente se ha perdido 
            if (fallosRestantes <= 0) {
                alert("¡Has perdido!, tu palabra era:" + palabra);
                clearInterval(temporizador);
            }
        }
    }, 1000);
}

let ganar;

//Funcion para ir comprobando las letras que se introducen 
function comprobarLetra() {
    let letra = letrasEscribir.value.toLowerCase();
    letrasEscribir.value = "";

    // Validamos la letra con una expresion regular
    if (!letra || letra.length !== 1 || !/^[a-zñ]$/i.test(letra)) return;

    let acierto = false;

    

    // Recorremos la palabra para ir cambiando _ por la letra
    palabra.split("").forEach((char, i) => {
        if (char === letra && letrasAcertadas[i] === "_") {
            letrasAcertadas[i] = letra;
            acierto = true;
        }
    });

    if (acierto) { //correcta, se actualiza el campo de los _
        actualizarPalabraMostrada();
    } else { //Incorrecta, quitamos un fallo y lo actualizamos
        fallosRestantes--;
        actualizarFallos();
        fallosUsuario.innerHTML += "<br> La letra "+letra+" no es correcta.";
    }

    iniciarTemporizador(); // Reinicia el tiempo para la siguiente letra

    // Verificar victoria
    if (!letrasAcertadas.includes("_")) {
        clearInterval(temporizador);
        alert("¡Has ganado!");
        ganar="has ganado";
        botonComprobar.disabled = true;
        letrasEscribir.disabled = true;
    }

    // Verificar derrota
    if (fallosRestantes <= 0) {
        clearInterval(temporizador);
        alert("¡Has perdido!, la palabra era:" + palabra);
        ganar="has perdidio";
        botonComprobar.disabled = true;
        letrasEscribir.disabled = true;
    }
}




// Para que empiece a funcionar todo despues de darle al boton de inicio 
botonInicio.onclick=function(){
   letrasAcertadas = Array(palabra.length).fill("_");
    fallosRestantes = (caracteresLetra/2)+1; ;
    botonComprobar.disabled = false;
    letrasEscribir.disabled = false;
    fallosUsuario.textContent = "";
    actualizarPalabraMostrada();
    actualizarFallos();
    iniciarTemporizador();

    RecuentoJuegos.innerHTML="Partida:"+",Palabra"+palabra+","+ganar;
}

volverJUGAR.onclick=function(){
     window.open("index.html");
}

// Comprobar letra al hacer clic
botonComprobar.addEventListener("click", comprobarLetra);