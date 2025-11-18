//const { createElement, createContext } = require("react");

//let info = document.getElementById("info");
//let parrafos = document.getElementsByName("saludo");
//let parrafos = document.getElementById("main").getElementsByTagName("");

//Da error por que no se puede meter dos id igaules pa diferentes cosas
// console.log(info.innerHTML);

// //aaaa
// console.log(parrafos);
// parrafos[0].style.backgroundColor = "pink"

//const opciones = document.getElementsByName("opciones");
// console.log(opciones[0].checked);


// document.getElementById("check").onclick = () => {
//     for (op of document.getElementsByName("opciones"))
//         if (op.checked) {
//             info.innerHTML = "Opción seleccionada: " + op.value;
//             break;
//         }
// }

// document.getElementById("check").onclick = () => {
//     let op = document.getElementById("opcionLista").value;
//     let lista = null;
    
//     if ((document.getElementsByTagName("ul").length > 0) && (op != "")) {
//         lista = document.getElementsByTagName("ul")[0];

//         let opElement = document.createElement("li");
//         let opElementText = document.createTextNode(op);

//         opElement.appendChild(opElementText);
//         lista.appendChild(opElement);
//     }


// }
//hola
////////////////////////////////////////////////////
 let pie = document.createElement("footer");
 let pPie = document.createElement("p");
 let pPieText = document.createTextNode("Contacto: 654 654 654");

//  pPie.appendChild(pPieText);

//  pie.appendChild(pPie);


 // document.body.appendChild(pie);
// document.body.innerHTML += "<label>Has ganado un coche. Pincha en este enlace: </label><a href='estafa.com'>Premio!!</a>"


// document.getElementById("opcionLista").setAttribute("placeholder", "Inserta opción de la lista");

// document.getElementById("opcionLista").removeAttribute("placeholder");

//  document.getElementById("check").onclick = () => {
//     let op = document.getElementById("opcionLista").value;
//     //lista = document.getElementsByTagName("ul")[0].innerHTML += "<li style='color:red'>"+ op +"</li>";

//     let lista = null;
    
//      if ((document.getElementsByTagName("ul").length > 0) && (op != "")) {
//          lista = document.getElementsByTagName("ul")[0];
// //  //  let opElement = document.createElement("li");
// //         //  let opElementText = document.createTextNode(op);

// //         //  opElement.appendChild(opElementText);
// //         //  lista.appendChild(opElement);
//          lista.appendChild(createNode("li", op));
//      }

//     document.getElementById("opcionLista").value = "";
// }

// document.getElementById("bDelete").onclick = () => {
//      let lista = document.getElementById("lista");
//     let lastChild;

//     if (lista.getElementsByTagName("li").length > 0) {
//        lastChild = lista.getElementsByTagName("li")[lista.getElementsByTagName("li").length-1];
//        let nodoBorrado = lastChild.parentNode.removeChild(lastChild);
//        console.log(nodoBorrado);

// }
// }

/*************************************************** */
function createNode(tipoNodo, tipoTexto) {
    let nodo;
    let nodoText;

    switch(arguments.length) {
        case 0: 
            throw "Se necesita al menos el tipo de elemento a crear.";
            break;
        case 1:
            nodo = document.createElement(tipoNodo);
            nodo.onclick = changeColor;
            nodo.id = "nuevoNodo"
            break;
        case 2:
            nodo = document.createElement(tipoNodo);
            nodo.onclick = changeColor;
            nodoText = document.createTextNode(tipoTexto);
            nodo.appendChild(nodoText);
            break;
    }

    return nodo;
}

// function changeColor() {
//     this.style.color = "red";
// }

/********************************* 
*/

// document.getElementById("verPassword").onclick = () => {
//     if (document.getElementById("verPassword").type == "password") {
//         document.getElementById("verPassword").type = "text"
//         this.innerHTML = "Ocultar password";
//     }
//     else {
//         document.getElementById("verPassword").type = "password"
//         this.innerHTML = "Ver password";
//     }
// }

/*** ************************************************/
// for (let elem of document.querySelectorAll("#lista li")) {
//     elem.style.color = "blue";
// }

// let primerosLI = document.querySelectorAll("li:first-child");
// for (elem of primerosLI)
//     console.log(elem.style.backgroundColor);

// let primerLI = document.querySelector("li:first-child");
// let cssPrimerLI = window.getComputedStyle(primerLI);
// cssPrimerLI.backgroundColor = "red";

/******************************************************** */

///

// for (let sec of document.getElementsByTagName("section"))
//     sec.onclick = changeColorComputed;

// function changeColorComputed () {

//     if (this.className == "rojo")
//         this.className = "azul";
//     else 
//         this.className = "rojo";
// }

//amplio texto, cambio color de fondo, caambio color de letras 

// for (let sec of document.getElementsByTagName("p")) {
//     sec.onmouseover = function () {
//         this.className = "ampliarcontraste";
//     };

//     sec.onmouseout = function () {
//         this.className = "reducircontraste";
//     };
// }

//el texto no se ve, pero cuando me coloco encima si 

// document.getElementById("inserta").onclick = function () {
//     const newNode = document.createElement("li");
//     const newNodeText = document.createTextNode(document.getElementById("animal").value);
//     const listaAnimales = document.getElementById("listaAnimales");
//     newNode.appendChild(newNodeText);
//     newNode.style.color = "red";

//     // document.getElementById("listaAnimales").appendChild(newNode);

//     let numAnimales = listaAnimales.querySelectorAll("li").length;
//     console.log(numAnimales);

//     // listaAnimales.insertBefore(newNode, listaAnimales.querySelectorAll("li")[3]);

//     // listaAnimales.querySelectorAll("li")[0].before(newNode);

//     let nodoEliminado = listaAnimales.replaceChild(newNode, listaAnimales.querySelectorAll("li")[3]);
//     listaAnimales.appendChild(nodoEliminado);

//}

// document.getElementById("inserta").onclick = function () {

//     const arrayAnimales = new Array ("León", "Jirafa", "Foca", "Perro", "Gato", "Lagartija", "Águila", "Avestruz", "Elefante");
   

//     const newNode = document.createElement("li");
//     newNode.innerText = arrayAnimales[0];
//     newNode.style.color = "red";
//     newNode.style.backgroundColor = "blue";
//     newNode.style.border = "1px solid black";
//     newNode.style.borderRadius = "15px";
//     newNode.style.paddingLeft = "2%";
//     newNode.style.boxShadow = "5px 5px lightblue";

//     let listaAnimales = document.getElementById("listaAnimales");

//     listaAnimales.appendChild(newNode);

//     for (let animal = 1; animal < arrayAnimales.length; animal++) {
//         let newNodeCloned = newNode.cloneNode(false);
//         newNodeCloned.innerText = arrayAnimales[animal];
//         listaAnimales.appendChild(newNodeCloned);
//     }

// }

//////////////////////////////////
document.getElementById("inserta").onclick = function () {

    const arrayAnimales = new Array ("León", "Jirafa", "Foca", "Perro", "Gato", "Lagartija", "Águila", "Avestruz", "Elefante");
   
    document.getElementById("animal").disabled = true;


    const newNode = document.createElement("li");
    newNode.innerText = arrayAnimales[0];
    newNode.style.color = "#ffaa00";
    newNode.style.backgroundColor = "blue";
    newNode.style.border = "1px solid black";
    newNode.style.borderRadius = "15px";
    newNode.style.paddingLeft = "2%";
    newNode.style.boxShadow = "5px 5px lightblue";

    let listaAnimales = document.getElementById("listaAnimales");

    listaAnimales.appendChild(newNode);

    for (let animal = 1; animal < arrayAnimales.length; animal++) {
        let newNodeCloned = newNode.cloneNode(false);
        newNodeCloned.innerText = arrayAnimales[animal];
        listaAnimales.appendChild(newNodeCloned);
    }

    console.log(document.getElementById("listaAnimales").childNodes)
    console.log("------------------------------------------------")
    console.log(document.getElementById("listaAnimales").children)



}
