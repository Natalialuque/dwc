//variables 
let info = document.getElementById("info");//variable para mostrar el nombre de los planetas
let boton = document.getElementById("botonInsertar");//boton para subir los planetas
let color = document.getElementById("color");//para tener la variable de color 
let x = document.getElementById("textoX"); //variable x
let y = document.getElementById("textoY"); //variable y
let planeta = document.getElementById("planeta");//marcado planeta
let satelite = document.getElementById("satelite");//marcado satelite
let diametro = document.getElementById("diametro"); //coger el diametro
let nombre = document.getElementById("nombre"); //nombre del planeta
let informacion = document.getElementById("info"); //para mostrar las cosas 
let contenedorDerecha = document.getElementById("contenedorDerecha"); //donde mostramos los planetas

//cuando pulsamos el boton ...
boton.onclick=function(){
    
    //para mostrar el nombre de los planetas o satelites
    let nombrePlaneSate = document.createElement("p");
    nombrePlaneSate.textContent = nombre.value;
    info.appendChild(nombrePlaneSate);


    //crear un nuevo planeta con la información que se necesita
    let nuevoPlaneSate = document.createElement("div");
    
    //caracteristicas que tiene que tener el planeta
    nuevoPlaneSate.style.backgroundColor=color.value;
    nuevoPlaneSate.style.width=diametro.value + "px";
    nuevoPlaneSate.style.height=diametro.value + "px";
    nuevoPlaneSate.style.borderRadius = "50%";

    //posicionamiento del planetita con las cordenadas cordenadas
    nuevoPlaneSate.style.position="absolute";
    nuevoPlaneSate.style.left=x.value +"px";
    nuevoPlaneSate.style.right=y.value +"px";


    //añadir al contenedor 
    contenedorDerecha.appendChild(nuevoPlaneSate);




}

/**Funcion para la creacción de nodos */
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