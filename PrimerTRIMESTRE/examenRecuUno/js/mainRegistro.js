//AQUI VAMOS A TENER EL CONTROL DE LA VENTANA REGISTRO

const pass = document.getElementById("pass");

//Si nos colocamos encima de las password debemos mostrar la contraseña 
function verContraseña(){
   // document.getElementById("pass").type = pass.value;

}

function ocualtarContraseña(){
  // document.getElementById("pass").value = pass;
}

//para cuando entras y cuando sales 
pass.onmouseover=verContraseña();
pass.onmouseout = ocualtarContraseña();


//////////////////////////////////////////////////////////////////////

//volvemos a usar la funcion para la creación
const body = document.body;

const div = document.createElement("div");
body.appendChild(div);

//crear campo
function crearCampo(tipo, id, textoLabel,required) {
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = textoLabel;

    const input = document.createElement("input");
    input.type = tipo;
    input.id = id;
    input.name = id;
    input.required=required;


    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(document.createElement("br"));

    return input;
}
//crear checkBox

function crearCheckBox(id, texto, checked = false) {
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = texto;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = id;
    input.name = "tema";
    if (checked) input.checked = true;

    div.appendChild(input);
    div.appendChild(label);
}


/**Si hemos tenemos cliado clientes aparece el siguiente formulario */
document.getElementsByName("tipoUsuario")[0].onchange = function(){
     div.innerHTML="";
     crearCampo("text","direccion","Direccion:",true);
     crearCampo("date","fecha","Fecha de Nacimiento:",true);
     crearCampo("text","telefono","Telefono:",true);

};

/**Si hemos tenemos chefs aparece el siguiente formulario */
document.getElementsByName("tipoUsuario")[1].onchange = function(){
    div.innerHTML="";
    crearCampo("text","nombreestablecimiento","Nombre Establecimiento:",true);
    crearCheckBox("check","Casera");
    crearCheckBox("check","Carnes");
    crearCheckBox("check","Pescados");
    crearCheckBox("check","Arroces");
    crearCheckBox("check","Internacional");
    crearCheckBox("check","Otras");



};

//////////////////////////////////////////////////////////////////////
/**Cuando clicamos el boton enviar debemos comprobar varias cosas */

let error = document.getElementById("error");
let botonenviar = document.getElementById("botonEnviar");

//comprobaciones generales para los dos
function comprobacionesGenerales(){
 const contraseña=document.getElementById("pass").value.trim();
    const cuentabancaria=document.getElementById("cuentabancaria").value.trim();
    const login=document.getElementById("login").value.trim();
    const email=document.getElementById("email").value.trim();
   

    error.innerHTML="";
    //login,Pasword, Email
    if(!login,!contraseña,!email){
            error.innerHTML="los campos login,contraseña y email deben estar rellenos"
    }

    //contraseña --> 
    const uppercases = /[A-Z]{2,}/;
    const lowercases = /[a-z]/;
    const number = /[0-9]{1,}/;

    if(!uppercases.test(contraseña)){
        error.innerHTML="la contra debe tener 2 mayusculas";
    }
     if(!lowercases.test(contraseña)){
        error.innerHTML="la contra debe tener minusculas";
    }
     if(!number.test(contraseña)){
        error.innerHTML="la contra debe tener numero";
    }
    if(contraseña.length<8){
        error.innerHTML="la contra debe tener minimo 8";
    }

    //cuenta bancaria --> 
    const iniciar= /^[a-zA-Z]{2}/;
    const medio =/[0-9]{23}/;
     if(!iniciar.test(cuentabancaria)){
         error.innerHTML="la cuenta bancaria debe empezar por dos letras";
     }
     if(!medio.test(cuentabancaria)){
         error.innerHTML="debe tener numeros";
     }
     if(cuentabancaria.length<24){
        error.innerHTML="debe tener 24 caracteres";
     }
}


let tipoUsuario = document.getElementsByName("tipoUsuario");

botonenviar.onclick=function(){
    
    error.innerHTML="";

    comprobacionesGenerales();

    //cuando clicamos cliente
    if(tipoUsuario[0].checked){
        const date5 = document.getElementById("fecha").value;

        const nacimiento = new Date(date5);
        const ahora = new Date();

       let edadAnios = ahora.getFullYear() - nacimiento.getFullYear();

        if(edadAnios <18){
         error.innerHTML="El usuario debe tener al menos 18 años";
     }
    }
   
    //cuando clicamos chef
    if(tipoUsuario[1].checked){
        const nombreestablecimiento = document.getElementById("nombreestablecimiento");
        const check = document.getElementById("check");

        //nombre
        if(nombreestablecimiento.length>20){
            error.innerHTML="error debe de tener menos de 20 campos";
        }

        // //Tipos de comidas-->
        if(!check.checked){
            error.innerHTML="debes marcar al menos uno";
        }

    }

     // si es válido, lo mandamos al padre y cerramos
    const nombreUsuario = document.getElementById("login").value.trim();
   

     // si es válido, lo mandamos al padre y cerramos
     window.opener.postMessage({ tipo: tipoUsuario.checked, nombre: nombreUsuario }, "*");
    // window.close();

}

