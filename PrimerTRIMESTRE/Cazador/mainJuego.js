// Obtener palabra compartida desde la ventana principal
const palabra = window.opener.palabraCompartida.toLowerCase();

// Definimos el estado del juego como un objeto (apuntes: objetos definidos por el usuario)
let juego = {
    letrasAcertadas: Array(palabra.length).fill("_"), // uso de Array.fill()
    fallosRestantes: 7,
    tiempoPorLetra: 5, // cada letra tiene 5 segundos
    tiempoRestante: 5,
    temporizador: null
};

// Elementos del DOM
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

// Métodos del objeto juego (apuntes: métodos y propiedades)
juego.actualizarPalabraMostrada = function () {
    mostrarPalabra.textContent = this.letrasAcertadas.join(" ");
};

juego.actualizarFallos = function () {
    contadorFallos.textContent = this.fallosRestantes;
};

juego.actualizarTiempoTexto = function () {
    tiempoTexto.textContent = `Tiempo restante: ${this.tiempoRestante} segundos`;
};

juego.iniciarTemporizador = function () {
    clearInterval(this.temporizador);
    this.tiempoRestante = this.tiempoPorLetra;
    this.actualizarTiempoTexto();

    this.temporizador = setInterval(() => {
        this.tiempoRestante--;
        this.actualizarTiempoTexto();

        if (this.tiempoRestante <= 0) {
            clearInterval(this.temporizador);

            // Contamos como fallo automático
            this.fallosRestantes--;
            this.actualizarFallos();
            fallosUsuario.innerHTML += `<br> Tiempo agotado`;

            // Reiniciamos el temporizador para la siguiente letra
            this.iniciarTemporizador();

            // Verificar derrota
            if (this.fallosRestantes <= 0) {
                alert("¡Has perdido!");
                clearInterval(this.temporizador);
            }
        }
    }, 1000);
};

juego.comprobarLetra = function () {
    const letra = letrasEscribir.value.toLowerCase();
    letrasEscribir.value = "";

    // Validación con expresión regular (apuntes: RegExp)
    if (!letra || letra.length !== 1 || !/^[a-zñ]$/i.test(letra)) return;

    let acierto = false;

    // Uso de forEach para recorrer la palabra (apuntes: Array.forEach)
    palabra.split("").forEach((char, i) => {
        if (char === letra && this.letrasAcertadas[i] === "_") {
            this.letrasAcertadas[i] = letra;
            acierto = true;
        }
    });

    if (acierto) {
        this.actualizarPalabraMostrada();
    } else {
        this.fallosRestantes--;
        this.actualizarFallos();
        fallosUsuario.innerHTML += `<br> La letra "${letra}" no es correcta.`;
    }

    this.iniciarTemporizador(); // Reinicia el tiempo para la siguiente letra

    // Verificar victoria con Array.includes (apuntes: Array.includes)
    if (!this.letrasAcertadas.includes("_")) {
        clearInterval(this.temporizador);
        alert(" ¡Has ganado!");
        botonComprobar.disabled = true;
        letrasEscribir.disabled = true;
    }

    // Verificar derrota
    if (this.fallosRestantes <= 0) {
        clearInterval(this.temporizador);
        alert("¡Has perdido!");
        botonComprobar.disabled = true;
        letrasEscribir.disabled = true;
    }
};

// Iniciar juego
botonInicio.addEventListener("click", () => {
    juego.letrasAcertadas = Array(palabra.length).fill("_");
    juego.fallosRestantes = 7;
    botonComprobar.disabled = false;
    letrasEscribir.disabled = false;
    fallosUsuario.textContent = "";
    juego.actualizarPalabraMostrada();
    juego.actualizarFallos();
    juego.iniciarTemporizador();
});

// Comprobar letra al hacer clic
botonComprobar.addEventListener("click", () => juego.comprobarLetra());

