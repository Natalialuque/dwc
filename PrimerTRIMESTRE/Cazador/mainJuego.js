//palabra compartida
const palabra = window.opener.palabraCompartida;


//ESTO ES DE JUEGO
/**Mostrar la palabra al clickar el boton de mostrar palabra oculta */
document.getElementById("verPalabraOculta").onclick = () => {
        document.getElementById("mostrarPalabra").innerHTML = palabra;
};
