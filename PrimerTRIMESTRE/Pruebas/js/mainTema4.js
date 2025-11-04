let info = document.getElementById("info");
let parrafos = document.getElementsByName("saludo");
//let parrafos = document.getElementById("main").getElementsByTagName("");

//Da error por que no se puede meter dos id igaules pa diferentes cosas
// console.log(info.innerHTML);

// //aaaa
// console.log(parrafos);
// parrafos[0].style.backgroundColor = "pink"

const opciones = document.getElementsByName("opciones");
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

////////////////////////////////////////////////////
let pie = document.createElement("footer");
let pPie = document.createElement("p");
let pPieText = document.createTextNode("Contacto: 654 654 654");

pPie.appendChild(pPieText);

pie.appendChild(pPie);

document.body.appendChild(pie);


document.getElementById("check").onclick = () => {
    let op = document.getElementById("opcionLista").value;
    let lista = null;
    
    if ((document.getElementsByTagName("ul").length > 0) && (op != "")) {
        lista = document.getElementsByTagName("ul")[0];

        let opElement = document.createElement("li");
        let opElementText = document.createTextNode(op);

        opElement.appendChild(opElementText);
        lista.appendChild(opElement);
    }

    document.getElementById("opcionLista").value = "";
}

/*************************************************** */
function createNode(tipoNodo,tipoTexto){
    let nodo;
}