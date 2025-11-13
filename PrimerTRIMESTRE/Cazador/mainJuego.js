//obtener palabra 
const palabra = window.opener.palabraCompartida.toLowerCase();

// Variables 
let letrasAcertadas = Array(palabra.length).fill("_");
let fallosRestantes = 7;
let tiempoPorLetra = 15;
let tiempoRestante = tiempoPorLetra;
let temporizador;

//elementos Index
const contadorFallos = document.getElementById("contadorFallos");
const mostrarPalabra = document.getElementById("mostrarPalabra");
const mostrarPalabraOculta = document.getElementById("mostrarPalabraOculta");
const tiempoTexto = document.getElementById("tiempoRestanteTexto");
const fallosUsuario = document.getElementById("FallosDelUsuario");
const letrasEscribir = document.getElementById("escribir");
const botonComprobar = document.getElementById("comprobarLetra");
const botonInicio = document.getElementById("inicioJuego");

// Mostrar palabra oculta real solo si se pulsa el botón
document.getElementById("verPalabraOculta").onclick = () => {
    mostrarPalabraOculta.innerHTML = palabra;
};

// Mostrar guiones y letras acertadas
function actualizarPalabraMostrada() {
    mostrarPalabra.textContent = letrasAcertadas.join(" ");
}

// Actualizar contador de fallos
function actualizarFallos() {
    contadorFallos.textContent = fallosRestantes;
}

// Actualizar tiempo visible
function actualizarTiempoTexto() {
    tiempoTexto.textContent = ` Tiempo restante: ${tiempoRestante} segundos`;
}

// Temporizador de 5 segundos por letra
function iniciarTemporizador() {
    clearInterval(temporizador);
    tiempoRestante = tiempoPorLetra;
    actualizarTiempoTexto();

    temporizador = setInterval(() => {
        tiempoRestante--;
        actualizarTiempoTexto();

        if (tiempoRestante <= 0) {
            clearInterval(temporizador);
            alert("¡Se acabó el tiempo para escribir la letra!");
            botonComprobar.disabled = true;
            letrasEscribir.disabled = true;
        }
    }, 1000);
}

// Comprobar letra
function comprobarLetra() {
    const letra = letrasEscribir.value.toLowerCase();
    letrasEscribir.value = "";

    if (!letra || letra.length !== 1 || !/^[a-zñ]$/i.test(letra)) return;

    let acierto = false;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === letra && letrasAcertadas[i] === "_") {
            letrasAcertadas[i] = letra;
            acierto = true;
        }
    }

    if (acierto) {
        actualizarPalabraMostrada();
    } else {
        fallosRestantes--;
        actualizarFallos();
        fallosUsuario.innerHTML += `<br> La letra "${letra}" no es correcta.`;
    }

    iniciarTemporizador(); // Reinicia el tiempo para la siguiente letra

    // Verificar victoria
    if (!letrasAcertadas.includes("_")) {
        clearInterval(temporizador);
        alert("¡Has ganado!");
        botonComprobar.disabled = true;
        letrasEscribir.disabled = true;
    }

    // Verificar derrota
    if (fallosRestantes <= 0) {
        clearInterval(temporizador);
        alert("¡Has perdido!");
        botonComprobar.disabled = true;
        letrasEscribir.disabled = true;
    }
}

// Iniciar juego
botonInicio.addEventListener("click", () => {
    letrasAcertadas = Array(palabra.length).fill("_");
    fallosRestantes = 7;
    botonComprobar.disabled = false;
    letrasEscribir.disabled = false;
    fallosUsuario.textContent = "";
    actualizarPalabraMostrada();
    actualizarFallos();
    iniciarTemporizador();
});

// Comprobar letra al hacer clic
botonComprobar.addEventListener("click", comprobarLetra);
