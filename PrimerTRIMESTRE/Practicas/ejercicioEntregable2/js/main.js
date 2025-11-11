const datosUsuarios = [
    "Nombre:  Ana García, Email: ana.garcia@example.com, FechaNac: 1995-10-25",
    "Nombre: luis pérez, Email: luisperez@dominio.net, FechaNac: 2005-01-05",
    "Nombre:  MARTA FERNÁNDEZ, Email: marta.fdez-INVALID, FechaNac: 1980-03-15", // Inválido
    "Nombre: pepe lopez, Email: pepe.lopez@example.es, FechaNac: 1978/11/02" // Formato de fecha diferente
];

const regexEmail = /^\S+@\S+\.\S+$/; // \S --> todo lo que no sea un espacio, una @ algo sin espacios, un punto y algo sin espacios

/********************************************************************************* */

document.getElementById("bDatosusuarios").onclick=function(){

  for(let usuario = 0; usuario< datosUsuarios.length; usuario++){
   

    //mostrar indices
     let datosUsuario = datosUsuarios[usuario].split(",");
    document.getElementById("indice"+usuario).innerHTML=usuario;

    //obtener el nombre 
    let nombre= datosUsuario[0].split(":")[1].trim().toUpperCase();
    document.getElementById("nombre"+usuario).innerHTML=nombre;

    //obtener el email 
    let email= datosUsuario[1].split(":")[1].trim();
    document.getElementById("email"+usuario).innerHTML=email;

    if(email.match(regexEmail)){
          document.getElementById("valido"+usuario).innerHTML="valido ";
    }else{
        document.getElementById("valido"+usuario).innerHTML="No valido ";
    }

    //obtener años 
    let fechaAño = new Date(datosUsuario[2].split(":")[1].trim());
    //alert(fechaAño.getFullYear());
    
    let annoNow = new Date().getFullYear();
    
   if(fechaAño)
     document.getElementById("edad"+usuario).innerHTML=annoNow-fechaAño.getFullYear();
   else   
      document.getElementById("valido"+usuario).innerHTML="Fecha no admitida ";


    datosUsuario[0];
  }

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
