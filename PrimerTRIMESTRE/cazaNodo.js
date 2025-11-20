// Obtener palabra compartida desde la ventana principal
let palabra = window.opener.palabraCompartida.toLowerCase();

// Variables de estado del juego
let letrasAcertadas = Array(palabra.length).fill("_"); 
let fallosRestantes = 7; 
let tiempoPorLetra = 5;  
let tiempoRestante = 5; 
let temporizador = null;

// ================== FUNCION CREATE NODE ==================
/**
 * Funcion para crear Nodos que nos servira para crear nodos al empezar el juego
 * @param {*} tipoNodo
 * @param {*} tipoTexto
 * @returns
 */
function createNode(tipoNodo, tipoTexto) {
  let nodo;
  let nodoText;

  switch (arguments.length) {
    case 0:
      throw "Se necesita al menos el tipo de elemento a crear.";
    case 1:
      nodo = document.createElement(tipoNodo);
      nodo.id = "nuevoNodo";
      break;
    case 2:
      nodo = document.createElement(tipoNodo);
      nodoText = document.createTextNode(tipoTexto);
      nodo.appendChild(nodoText);
  }

  return nodo;
}

// ================== CREACION DE ELEMENTOS CON createNode ==================
//TENDRIAMOS QUE QUITAR LOS ELEMENTOS HTML DEL INDEX QUE CORRESPONDIESEN CON ESTOO


// Contador de fallos
let contadorFallos = createNode("p", "Fallos restantes: " + fallosRestantes);
document.body.appendChild(contadorFallos);

// Palabra mostrada
let mostrarPalabra = createNode("p", letrasAcertadas.join(" "));
document.body.appendChild(mostrarPalabra);

// Palabra oculta
let mostrarPalabraOculta = createNode("p", "");
document.body.appendChild(mostrarPalabraOculta);

// Tiempo restante
let tiempoTexto = createNode("p", "Tiempo restante: " + tiempoRestante + " segundos");
document.body.appendChild(tiempoTexto);

// Fallos del usuario
let fallosUsuario = createNode("div", "");
document.body.appendChild(fallosUsuario);

// Input para letras
let letrasEscribir = createNode("input");
letrasEscribir.type = "text";
document.body.appendChild(letrasEscribir);

// Botón comprobar
let botonComprobar = createNode("button", "Comprobar Letra");
document.body.appendChild(botonComprobar);

// Botón inicio
let botonInicio = createNode("button", "Iniciar Juego");
document.body.appendChild(botonInicio);

// Botón ver palabra oculta
let botonVerPalabra = createNode("button", "Ver Palabra Oculta");
document.body.appendChild(botonVerPalabra);

// ================== LÓGICA DEL JUEGO ==================

// Mostrar palabra oculta al pulsar el botón
botonVerPalabra.onclick = () => {
    mostrarPalabraOculta.innerHTML = palabra;
};

function actualizarPalabraMostrada() {
    mostrarPalabra.innerHTML = letrasAcertadas.join(" ");
}

function actualizarFallos() {
    contadorFallos.innerHTML = "Fallos restantes: " + fallosRestantes;
}

function actualizarTiempoTexto() {
    tiempoTexto.innerHTML = "Tiempo restante: " + tiempoRestante + " segundos";
}

function iniciarTemporizador() {
    clearInterval(temporizador);
    tiempoRestante = tiempoPorLetra;
    actualizarTiempoTexto();

    temporizador = setInterval(() => {
        tiempoRestante--;
        actualizarTiempoTexto();

        if (tiempoRestante <= 0) {
            clearInterval(temporizador);

            fallosRestantes--;
            actualizarFallos();
            fallosUsuario.innerHTML += "<br> Tiempo agotado";

            iniciarTemporizador();

            if (fallosRestantes <= 0) {
                alert("¡Has perdido!, tu palabra era:" + palabra);
                clearInterval(temporizador);
            }
        }
    }, 1000);
}

function comprobarLetra() {
    let letra = letrasEscribir.value.toLowerCase();
    letrasEscribir.value = "";

    if (!letra || letra.length !== 1 || !/^[a-zñ]$/i.test(letra)) return;

    let acierto = false;

    palabra.split("").forEach((char, i) => {
        if (char === letra && letrasAcertadas[i] === "_") {
            letrasAcertadas[i] = letra;
            acierto = true;
        }
    });

    if (acierto) {
        actualizarPalabraMostrada();
    } else {
        fallosRestantes--;
        actualizarFallos();
        fallosUsuario.innerHTML += "<br> La letra " + letra + " no es correcta.";
    }

    iniciarTemporizador();

    if (!letrasAcertadas.includes("_")) {
        clearInterval(temporizador);
        alert("¡Has ganado!");
        botonComprobar.disabled = true;
        letrasEscribir.disabled = true;
    }

    if (fallosRestantes <= 0) {
        clearInterval(temporizador);
        alert("¡Has perdido!, la palabra era:" + palabra);
        botonComprobar.disabled = true;
        letrasEscribir.disabled = true;
    }
}

// Iniciar juego
botonInicio.onclick = function() {
    letrasAcertadas = Array(palabra.length).fill("_");
    fallosRestantes = 7;
    botonComprobar.disabled = false;
    letrasEscribir.disabled = false;
    fallosUsuario.textContent = "";
    actualizarPalabraMostrada();
    actualizarFallos();
    iniciarTemporizador();
}

// Comprobar letra al hacer clic
botonComprobar.addEventListener("click", comprobarLetra);

// ================== OPCIONES EXTRA PARA EL JUEGO ==================

// 1. Impedir que se repita la misma letra
// let letrasUsadas = [];
// function comprobarLetra() {
//     let letra = letrasEscribir.value.toLowerCase();
//     letrasEscribir.value = "";

//     if (!letra || letra.length !== 1 || !/^[a-zñ]$/i.test(letra)) return;

//     // 🚫 Evitar repetir letras
//     if (letrasUsadas.includes(letra)) {
//         fallosUsuario.innerHTML += "<br> Ya has probado la letra " + letra;
//         return;
//     }
//     letrasUsadas.push(letra);

//     // ... resto de la función comprobarLetra ...
// }


// 2. Crear un botón de reinicio con createNode
// let bReset = createNode("button", "Reiniciar");
// bReset.onclick = () => location.reload();
// document.body.appendChild(bReset);


// 4. Pedir una pista con penalización
// function pedirPista() {
//     let indicesOcultos = [];
//     for (let i = 0; i < letrasAcertadas.length; i++) {
//         if (letrasAcertadas[i] === "_") {
//             indicesOcultos.push(i);
//         }
//     }
//     if (indicesOcultos.length === 0) return;

//     const i = indicesOcultos[Math.floor(Math.random() * indicesOcultos.length)];
//     letrasAcertadas[i] = palabra[i];
//     actualizarPalabraMostrada();

//     fallosRestantes = Math.max(0, fallosRestantes - 1);
//     tiempoRestante = Math.max(0, tiempoRestante - 2);
//     actualizarFallos();
//     actualizarTiempoTexto();

//     if (!letrasAcertadas.includes("_")) {
//         clearInterval(temporizador);
//         alert("¡Has adivinado la palabra con ayuda de una pista!");
//         botonComprobar.disabled = true;
//         letrasEscribir.disabled = true;
//     }
// }

// 5. Crear botón de pista con createNode
// let bPista = createNode("button", "Pedir Pista");
// bPista.onclick = () => pedirPista();
// document.body.appendChild(bPista);


// 6. Mostrar todas las letras que el usuario ya ha probado
// let letrasUsadasTexto = createNode("p", "Letras usadas: ");
// document.body.appendChild(letrasUsadasTexto);

// // Dentro de comprobarLetra():
// letrasUsadas.push(letra);
// letrasUsadasTexto.innerText = "Letras usadas: " + letrasUsadas.join(", ");


// 7. Cambiar color del contador de fallos según el número restante
// function actualizarFallos() {
//     contadorFallos.innerHTML = fallosRestantes;
//     if (fallosRestantes <= 2) {
//         contadorFallos.style.color = "red";
//     } else if (fallosRestantes <= 4) {
//         contadorFallos.style.color = "orange";
//     } else {
//         contadorFallos.style.color = "green";
//     }
// }


// 8. Botón parar temporizador con createNode
// let bPause = createNode("button", "Pausar");
// bPause.onclick = () => clearInterval(temporizador);
// document.body.appendChild(bPause);


// 9. Guardar resultado en LocalStorage y mostrar última partida
// if (!letrasAcertadas.includes("_")) {
//     localStorage.setItem("resultado", "Ganaste");
// }
// if (fallosRestantes <= 0) {
//     localStorage.setItem("resultado", "Perdiste");
// }

// let ultima = localStorage.getItem("resultado");
// if (ultima) {
//     let nodoUltima = createNode("p", "Última partida: " + ultima);
//     document.body.appendChild(nodoUltima);
// }
