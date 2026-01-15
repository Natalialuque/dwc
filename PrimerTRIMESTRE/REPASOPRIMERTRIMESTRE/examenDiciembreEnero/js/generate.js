// Selecciono body
const body = document.body;

//  ASIDE 
const aside = document.createElement("aside");
body.appendChild(aside);

//  FIELDSET CONFIGURACIÓN VISUAL 
const fsConfig = document.createElement("fieldset");
aside.appendChild(fsConfig);

const legendConfig = document.createElement("legend");
legendConfig.textContent = "Configuración Visual";
fsConfig.appendChild(legendConfig);

//  H4 Tema 
const h4Tema = document.createElement("h4");
h4Tema.textContent = "Tema de interfaz";
fsConfig.appendChild(h4Tema);

//  Radios 
const divRadios = document.createElement("div");
fsConfig.appendChild(divRadios);

function crearRadio(id, texto, checked = false) {
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = texto;

    const input = document.createElement("input");
    input.type = "radio";
    input.id = id;
    input.name = "tema";
    if (checked) input.checked = true;

    divRadios.appendChild(input);
    divRadios.appendChild(label);
}

crearRadio("claro", "Claro", true);
crearRadio("oscuro", "Oscuro");
crearRadio("altoContraste", "Alto Contraste");

//  H4 Fuente 
const h4Fuente = document.createElement("h4");
h4Fuente.textContent = "Cambio fuente";
fsConfig.appendChild(h4Fuente);

//  Range 
const range = document.createElement("input");
range.type = "range";
range.min = "10";
range.max = "24";
range.value = "16";
range.id = "barrita";
fsConfig.appendChild(range);

//  Botón Reset 
const btnReset = document.createElement("input");
btnReset.type = "button";
btnReset.value = "Resetear Configuración";
btnReset.id = "botonReseteo";
fsConfig.appendChild(btnReset);


/////SEGUNDO FIELDSET

//FIELDSET ALTA EMPLEADO 
const fsEmpleado = document.createElement("fieldset");
aside.appendChild(fsEmpleado);

// Legend
const legendEmpleado = document.createElement("legend");
legendEmpleado.textContent = "Alta de Empleado";
fsEmpleado.appendChild(legendEmpleado);

// Función para crear label + input
function crearCampo(tipo, id, textoLabel) {
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = textoLabel;

    const input = document.createElement("input");
    input.type = tipo;
    input.id = id;
    input.name = id;

    fsEmpleado.appendChild(label);
    fsEmpleado.appendChild(input);
    fsEmpleado.appendChild(document.createElement("br"));

    return input;
}

// Campos básicos
crearCampo("text", "nombre", "Nombre");
crearCampo("text", "email", "Email");
crearCampo("password", "pass", "Pass");
crearCampo("password", "confirmaPass", "Confirmar Pass");

// Fecha de contratación
crearCampo("date", "fechaContratacion", "Fecha de contratación");

// URL LinkedIn
// URL LinkedIn
const inputLinkedin = crearCampo("url", "urlLinkedin", "Perfil LinkedIn");
inputLinkedin.placeholder = "https://linkedin.com/...";


// Checkbox aceptar términos
const labelCheck = document.createElement("label");
labelCheck.setAttribute("for", "aceptar");
labelCheck.textContent = "Acepto términos";

const check = document.createElement("input");
check.type = "checkbox";
check.id = "aceptar";
check.name = "aceptar";

fsEmpleado.appendChild(labelCheck);
fsEmpleado.appendChild(check);
fsEmpleado.appendChild(document.createElement("br"));

// Select múltiple habilidades
const labelHab = document.createElement("label");
labelHab.textContent = "Habilidades";
fsEmpleado.appendChild(labelHab);
fsEmpleado.appendChild(document.createElement("br"));

const select = document.createElement("select");
select.name = "habilidades";
select.multiple = true;

["JS", "CSS", "HTML", "Python", "SQL"].forEach(hab => {
    const option = document.createElement("option");
    option.textContent = hab;
    select.appendChild(option);
});

fsEmpleado.appendChild(select);
fsEmpleado.appendChild(document.createElement("br"));

// Botón registrar empleado
const btnRegistrar = document.createElement("input");
btnRegistrar.type = "button";
btnRegistrar.id = "registrar";
btnRegistrar.value = "Registrar empleado";

// Estilos obligatorios desde JS
btnRegistrar.style.marginTop = "15px";
btnRegistrar.style.width = "100%";
btnRegistrar.style.background = "#007bff";
btnRegistrar.style.color = "white";
btnRegistrar.style.padding = "10px";
btnRegistrar.style.border = "none";
btnRegistrar.style.cursor = "pointer";

fsEmpleado.appendChild(btnRegistrar);

// Botón Generar Informe
const btnInforme = document.createElement("button");
btnInforme.id = "btnInforme";
btnInforme.textContent = "Generar Informe";

// Estilos desde JS (obligatorio)
btnInforme.style.padding = "10px";
btnInforme.style.width = "fit-content";
btnInforme.style.marginLeft = "auto";
btnInforme.style.backgroundColor = "lightblue";
btnInforme.style.border = "none";
btnInforme.style.cursor = "pointer";

// Añadirlo donde quieras (por ejemplo, debajo del formulario)
document.body.appendChild(btnInforme);
