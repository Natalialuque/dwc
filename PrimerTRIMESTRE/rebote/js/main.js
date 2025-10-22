let pelota = document.getElementById("pelota"); // pelota
let pelotaLeft = 0; // Posición left inicial de la pelota
let pelotaCSS = window.getComputedStyle(pelota);
/* Centrar vertialmente la pelota */

/*
 1 - obener el alto útil de la ventana
 2 - Dividirlo por la mitad menos la mitad del alto de la pelota
 3 - aplicar el nuevo alto a la pelota
*/

let wHeight = window.innerHeight;
console.log ("Alto: " + wHeight);

wHeight = wHeight / 2;

let pelotaHeight = pelotaCSS.getPropertyValue("height");

pelotaHeight = quitaPX (pelotaHeight);

let positionHeight = wHeight - (pelotaHeight / 2);

pelota.style.top = positionHeight + "px";


rebota();

/***********************Funciones ****************************************/
// Elimina px
function quitaPX(cad) {
    cad = parseFloat(cad.slice(0,cad.length-2));
    return cad;
}

// Función que aumenta el left de la pelota hasta el final de la ventana
function leftPlus() {
    let leftCSS = pelotaCSS.getPropertyValue("left");
    leftCSS = quitaPX(leftCSS);
    console.log(leftCSS)

    pelota.style.left = (leftCSS + 1) + "px";
}


function rebota() {
//     let wWidth = window.innerWidth;
//     let leftCSS = pelotaCSS.getPropertyValue("left");
//     leftCSS = quitaPX(leftCSS);

//     let widthPelota = pelotaCSS.getPropertyValue("width");
//     widthPelota = quitaPX(widthPelota);


//   let intervalo= setInterval (function(){

//     if (leftCSS < (wWidth - widthPelota)) {
//             leftPlus();
//             leftCSS ++;
//         }
//     else{
//         clearInterval(intervalo);
//     }
//     },10); //ejecuta cada x tiempo

    let wWidth = window.innerWidth;
    let widthPelota = quitaPX(pelotaCSS.getPropertyValue("width"));
    let direccion = 1; // 1 = derecha, -1 = izquierda

    let intervalo = setInterval(function () {
        // Actualiza el valor de left en cada iteración
        let leftCSS = quitaPX(pelotaCSS.getPropertyValue("left"));

        // Cambia de dirección si llega a los bordes
        if (leftCSS >= (wWidth - widthPelota)) {
            direccion = -1; // Cambia a izquierda
        } else if (leftCSS <= 0) {
            direccion = 1; // Cambia a derecha
        }

        // Mueve la pelota en la dirección actual
        pelota.style.left = (leftCSS + direccion) + "px";
    }, 5); // velocidad del movimiento
   
}



