const datosUsuarios = [
    "Nombre:  Ana García, Email: ana.garcia@example.com, FechaNac: 1995-10-25",
    "Nombre: luis pérez, Email: luisperez@dominio.net, FechaNac: 2005-01-05",
    "Nombre:  MARTA FERNÁNDEZ, Email: marta.fdez-INVALID, FechaNac: 1980-03-15", // Inválido
    "Nombre: pepe lopez, Email: pepe.lopez@example.es, FechaNac: 1978/11/02" // Formato de fecha diferente
];

const regexEmail = /^\S+@\S+\.\S+$/; // \S --> todo lo que no sea un espacio, una @ algo sin espacios, un punto y algo sin espacios

/********************************************************************************* */

//ARREGLAR
const usuarios = datosUsuarios.map((linea) => {
  const nombreMatch = linea.match(/Nombre:\s*(.*?),/);
  const emailMatch = linea.match(/Email:\s*(.*?),/);
  const fechaMatch = linea.match(/FechaNac:\s*(.*)$/);

  return {
    nombre: nombreMatch ? nombreMatch[1].trim() : null,
    email: emailMatch ? emailMatch[1].trim() : null,
    fechaNacimiento: fechaMatch ? fechaMatch[1].trim() : null
  };
});

console.log(usuarios);

/**Nombre completo sin epacios en los ectremos, y el nombre debe aparecer en mayusucula */

//Para eliminar espacios y poner en mayuscula
function nombre(){

}




 
//Para sacar la edad del usuario
function edad(){
      const nacimiento = new Date(/*datosUsuarios[""]=""*/);
      const hoy = new Date(); //

      let edadAnios = ahora.getFullYear() - nacimiento.getFullYear();

     if (ahora < cumpleEsteAnio) {
        edadAnios--; // Aún no ha cumplido años este año
      }

      return edadAnios;
}



//Para validar el email
 function validaEmail(email){
    
     if(email.match(regexEmail)){
       return "si";
    }else{
         return "no";     
    }

 }

//variables
let botonDatos = document.getElementById("bDatosusuarios");

let nombre0=document.getElementById("nombre0")
let nombre1=document.getElementById("nombre0")
let nombre2=document.getElementById("nombre0")
let nombre3=document.getElementById("nombre0")

let email0=document.getElementById("email0");
let email1=document.getElementById("email1");
let email2=document.getElementById("email2");
let email3=document.getElementById("email3");

let edad0=document.getElementById("edad0");
let edad1=document.getElementById("edad1");
let edad2=document.getElementById("edad2");
let edad3=document.getElementById("edad3");

let valido0 = document.getElementById("valido0");
let valido1 = document.getElementById("valido1");
let valido2 = document.getElementById("valido2");
let valido3 = document.getElementById("valido3");


botonDatos.onclick=function(){

    //nombre

    //edad
    edad0.innerHTML=edad();
    edad1.innerHTML=edad();
    edad2.innerHTML=edad();
    edad3.innerHTML=edad();

    //email
        email0.innerHTML=datosUsuarios["Email"]=" ana.garcia@example.com";
        email1.innerHTML=datosUsuarios["Email"]=" luisperez@dominio.net";
        email2.innerHTML=datosUsuarios["Email"]=" marta.fdez-INVALID";
        email3.innerHTML=datosUsuarios["Email"]="  pepe.lopez@example.es";


    //validar
         valido0.innerHTML=validaEmail(email0);
         valido1.innerHTML=validaEmail(email1);
         valido2.innerHTML=validaEmail(email1);
         valido3.innerHTML=validaEmail(email2);
         valido4.innerHTML=validaEmail(email3);


}



//ventana abre
let ancho = (window.innerWidth-50);
let alto = (window.innerHeight-10);
let aux= undefined;
document.getElementById("bDoc").onclick = function() {
    aux = window.open(
      "https://deveeloper.mozilla.org/es/docs/Web/JavaScript",
     "NuevaVenta",
     "Width="+ancho+",height="+alto);
}