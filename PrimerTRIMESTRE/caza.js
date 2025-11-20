// Obtener palabra compartida desde la ventana principal
let palabra = window.opener.palabraCompartida.toLowerCase();

// Definimos el estado del juego como un objeto 
let juego = {
    letrasAcertadas: Array(palabra.length).fill("_"), // rellenamos con __
    fallosRestantes: 7, //Fallos permitidos
    tiempoPorLetra: 5, //Parece tonto esto, pero si no lo pongo el tiempo restante no funciona bien
    tiempoRestante: 5, //tiempo restante
    temporizador: null
};

// Elementos del DOM
let contadorFallos = document.getElementById("contadorFallos");
let mostrarPalabra = document.getElementById("mostrarPalabra");
let mostrarPalabraOculta = document.getElementById("mostrarPalabraOculta");
let tiempoTexto = document.getElementById("tiempoRestanteTexto");
let fallosUsuario = document.getElementById("FallosDelUsuario");
let letrasEscribir = document.getElementById("escribir");
let botonComprobar = document.getElementById("comprobarLetra");
let botonInicio = document.getElementById("inicioJuego");

// Mostrar palabra oculta real solo si se pulsa el botón
document.getElementById("verPalabraOculta").onclick = () => {
    mostrarPalabraOculta.innerHTML = palabra;
};

//Metodo que va actualizando la letra
juego.actualizarPalabraMostrada = function () {
    mostrarPalabra.innerHTML = this.letrasAcertadas.join(" ");
};

//Metodo que actualiza la caja de fallos
juego.actualizarFallos = function () {
    contadorFallos.innerHTML = this.fallosRestantes;
};

//Metodo que actualiza el tiempo restante por letra
juego.actualizarTiempoTexto = function () {
    tiempoTexto.innerHTML = "Tiempo restante: ${this.tiempoRestante} segundos";
};


//Metodo para el temporizador de las letras 
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
                alert("¡Has perdido!, tu palabra era:"+palabra);
                clearInterval(this.temporizador);
            }
        }
    }, 1000);
};

//Metodo que se encarga de comprobar la letra 

juego.comprobarLetra = function () {
    let letra = letrasEscribir.value.toLowerCase();
    letrasEscribir.value = "";

    // Validamos la letra 
    if (!letra || letra.length !== 1 || !/^[a-zñ]$/i.test(letra)) return;

    let acierto = false;

    // Recorremos la palabra para ir cambiando _ por la letra
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
        alert("¡Has perdido!, la palabra era:"+palabra);
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

