const { createElement } = require("react");

//para aumentar el tamaño
let barra = document.getElementById("barrita");



//para el cambio de color
let oscuro = document.getElementById("oscuro");
let claro = document.getElementById("claro");
let altoContraste = document.getElementById("AltoContraste");
let boton1 = document.getElementById("RegistrarEmpleados");
let boton2 =document.getElementById("botonGenerar");


window.onload = function CambioColor(){
    if(oscuro.checked){
        document.body.style.backgroundColor = "black"; 
        document.body.style.color="white"
    }

   else if(claro.checked){
        document.body.style.backgroundColor = "white"; 
        document.body.style.color="black"
    }

   else if(altoContraste.checked){
        document.body.style.backgroundColor = "black"; 
        document.body.style.color="yellow"
    }

    boton1.style.backgroundColor="#007bff";
    boton1.style.color="#white";
    boton1.style.width="100%";
    boton1.style.marginTop="15px";
    boton1.style.padding="10px";
    boton1.style.border="none";
    boton1.style.cursor="pointer";


    boton2.style.backgroundColor="#007bff";
    boton2.style.color="#white";
    boton2.style.width="100%";
    boton2.style.marginTop="15px";
    boton2.style.padding="10px";
    boton2.style.border="none";
    boton2.style.cursor="pointer";





}

//Logica de negocio y validación
let linkedin = document.getElementById("url");
let contraseña = document.getElementById("contraseña"); 
let Confircontraseña = document.getElementById("Confircontraseña"); 
let fecha = document.getElementById("fecha"); 
let error = document.getElementById("error");
let dia=0; //variable que nos va a hacer falta en la otra pantalla

document.getElementById("RegistrarEmpleados").onclick = function () {
    insertarTarjeta();
    
    //expresion regular del likedin
    let reg1 = '^[https://www.linkedin.com]$';
    let reg2 = '^[https://linkedin.com]$';

    if(linkedin.value != reg1 || !linkedin.value!=reg2){
        error.innerHTML="El enlace del linkedin esta mal";
    }

    //El cofnirmar contraseña y el contraseña no son iguales
    if(Confircontraseña.value!=contraseña.value){
        error.innerHTML="Las contraseñas no son iguales";
    }

    //Guardamos en una variable el calculo de dias
    let diaHoy = new Date;

    dia = diaHoy.value - fecha.value;
    console.log(dia);

   
}

//funcion de validar contraseña
function ValidarContraseña(){
    const caracteres = /{8,}/;
    const letrasMayus = /[A-Z]/;
    const letrasMinusculas = /[a-z]/;
    const caracteresEspe = /[$,?,¿,@]/;
    let errorContraseña = document.createElement("p");

  if(contraseña.value!=caracteres){
        errorUsuario.style.color = "red";
        errorContraseña.textContent = "La contraseña debe tener 8 caracteres";
        document.body.appendChild(errorUsuario);
        errorContraseña.style.border = "1px solid red";
    }
    if(contraseña.value!=letrasMayus){
        errorUsuario.style.color = "red";
        errorContraseña.textContent = "La contraseña debe tener mayusuculas";
        document.body.appendChild(errorUsuario);
        errorContraseña.style.border = "1px solid red";
     }
    if(contraseña.value!=letrasMinusculas){
        errorUsuario.style.color = "red";
        errorContraseña.textContent = "La contraseña debe tener minusculas";
        document.body.appendChild(errorUsuario);
        errorContraseña.style.border = "1px solid red";
    }
    if(contraseña.value!=caracteresEspe){
        errorUsuario.style.color = "red";
        errorContraseña.textContent = "La contraseña debe tener caracteres especiales";
        document.body.appendChild(errorUsuario);
        errorContraseña.style.border = "1px solid red";
    }
}


//La fabrica de las tarjetas
function insertarTarjeta(){
    let tarjetas=createElement("article");
    let nombre = createElement("<h3></h3>");
    nombre = nombre.value;
    tarjetas.appendChild(nombre);
    tarjetas.appendChild(createElement("br"));
    let email = createElement("p");
    email = email.value;
    tarjetas.appendChild(email);
    tarjetas.appendChild(createElement("<label>antiguedad:</label>"))
    let antiguedad = createElement("p");
    tarjetas.appendChild(antiguedad);
    tarjetas.appendChild(createElement("br"));
    tarjetas.appendChild(createElement("<label>Rendimiento Anual:</label>"))
    let rendi = createElement("progress");
    rendi.setAttribute("min",0);
    rendi.setAttribute("max",100)
    tarjetas.appendChild(createElement("br"));
    tarjetas.appendChild(createElement("<label> Habilidades:</label>"))
    let habilidades = createElement("select");
    tarjetas.appendChild(habilidades);
    let botonClonar = createElement("button");
    tarjetas.appendChild(botonClonar);
    let botonDespedir = createElement("button");
    tarjetas.appendChild(botonDespedir);

}

//ventana de informe
boton2.onclick=function(){
        //ventana que vamos a abrir al pulsar el boton
        window.open("informe.html",
        "informe",
        "width=500,height=400"
        );

}