/**AQUI VAMOS A CREAR LOS NODOS DE LOGIN,PASSWORD,EMAIL,CUENTA BANCARIA 
 * QUE SON OBLIGATORIOS
*/



const body = document.body;

//vamos a meterlo todo dentro de un div 
const div = document.createElement("div");
body.appendChild(div);

//Creamos esta funcion para ir creando los input
//si da error hacerlo de la otra forma
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

crearCampo("text","login","Login",true);
crearCampo("password","pass","Password",true);
crearCampo("text","email","Email",true);
crearCampo("text","cuentabancaria","CuentaBancaria",true);



//  Botón enviar 
    const btnEnviar = document.createElement("input");
    btnEnviar.type = "button";
    btnEnviar.value = "Enviar";
    btnEnviar.id = "botonEnviar";
    div.appendChild(btnEnviar);

