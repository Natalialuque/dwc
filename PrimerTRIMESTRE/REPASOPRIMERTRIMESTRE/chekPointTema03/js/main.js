const datosUsuarios = [
    "Nombre:  Ana García, Email: ana.garcia@example.com, FechaNac: 1995-10-25",
    "Nombre: luis pérez, Email: luisperez@dominio.net, FechaNac: 2005-01-05",
    "Nombre:  MARTA FERNÁNDEZ, Email: marta.fdez-INVALID, FechaNac: 1980-03-15", // Inválido
    "Nombre: pepe lopez, Email: pepe.lopez@example.es, FechaNac: 1978/11/02" // Formato de fecha diferente
];

const regexEmail = /^\S+@\S+\.\S+$/; // \S --> todo lo que no sea un espacio, una @ algo sin espacios, un punto y algo sin espacios

/********************************************************************************* */
/**Completa la tabla con los datos de cada uno de los usuarios, rellenando la parte del valido o no valido si 
 * email es correcto comprobandolo con la expresion regular, y que todo esto suceda al clicar el boton de añadir datos
 * 
 * por otro lado, al clicar el boton de abrir pagina, debe abrirse una pagina con este enlace https://deveeloper.mozilla.org/es/docs/Web/JavaScript
 */

document.getElementById("bDatosusuarios").onclick=function(){

    //EL SPLIT PERMITE SEPARAR EL FUCKING ARRAY POR COMAS

    for ( let i = 0; i<=datosUsuarios.length;i++){

        //conseguimos ir dividiendo el array
        let usu = datosUsuarios[i].split(",");
       
        //para los indices
         document.getElementById("indice"+i).innerHTML=i;

        //obtener el nombre 
         let nombre= usu[0].split(":")[1].trim().toUpperCase();
        document.getElementById("nombre"+i).innerHTML=nombre;

        //obtener el email 
        let email= usu[1].split(":")[1].trim();
        document.getElementById("email"+i).innerHTML=email;

        if(email.match(regexEmail)){
            document.getElementById("valido"+i).innerHTML="valido ";
        }else{
            document.getElementById("valido"+i).innerHTML="No valido ";
        }

        //edad 
        let fechaAño = new Date(usu[2].split(":")[1].trim());
        let annoNow = new Date().getFullYear();
        
        if(fechaAño)
            document.getElementById("edad"+i).innerHTML=annoNow-fechaAño.getFullYear();
        else   
            document.getElementById("valido"+i).innerHTML="Fecha no admitida ";


            usu[0];

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
