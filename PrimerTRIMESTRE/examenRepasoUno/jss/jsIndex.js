// =========================
// 0. ABRIR VENTANA EMERGENTE
// =========================
window.onload = function () {
    setTimeout(() => {
        window.open(
            "registro.html",
            "Registro",
            "width=500,height=400,top=100,left=100"
        );
    }, 200);
};

// =========================
// 1. RECIBIR USUARIO DEL POPUP
// =========================
window.addEventListener("message", function (e) {
    if (e.data.tipo === "usuario") {
        let label = document.getElementsByTagName("label")[0];
        label.textContent = "Usuario registrado: " + e.data.nombre;
        comprobarEnviar();
    }
});

// =========================
// 2. CAMPOS DINÁMICOS SEGÚN CARGO
// =========================
let selectCargo = document.getElementsByTagName("select")[0];
selectCargo.onchange = crearCampos;

function crearCampos() {
    let filas = document.getElementsByTagName("tr");
    let ultima = filas[filas.length - 1];
    ultima.innerHTML = ""; // limpiar

    if (selectCargo.value === "empleado") {
        // Nº incidencia
        let td1 = crear("td", "Nº de Incidencia");
        let td2 = crear("td");
        let nInc = crear("input");
        nInc.type = "text";
        nInc.onblur = validar;
        td2.appendChild(nInc);

        // Incidencia
        let td3 = crear("td", "Incidencia");
        let td4 = crear("td");
        let area = crear("textarea");
        td4.appendChild(area);

        ultima.append(td1, td2, td3, td4);

    } else {
        // Departamento
        let td1 = crear("td", "Departamento");
        let td2 = crear("td");
        let sel = crear("select");
        sel.appendChild(crear("option", "Contabilidad"));
        sel.appendChild(crear("option", "Dirección"));
        td2.appendChild(sel);

        // Asunto
        let td3 = crear("td", "Asunto");
        let td4 = crear("td");
        let area = crear("textarea");
        td4.appendChild(area);

        ultima.append(td1, td2, td3, td4);
    }

    comprobarEnviar();
}

function crear(tag, text) {
    let el = document.createElement(tag);
    if (text) el.appendChild(document.createTextNode(text));
    return el;
}

// =========================
// 3. MENSAJES DE ERROR
// =========================
let pDni = msg("DNI inválido");
let pEmail = msg("Email inválido");
let pInc = msg("Nº incidencia debe ser numérico");

function msg(t) {
    let p = document.createElement("p");
    p.textContent = t;
    p.style.color = "red";
    p.style.display = "none";
    document.body.appendChild(p);
    return p;
}

// =========================
// 4. VALIDACIÓN ÚNICA PARA LOS 3 CAMPOS
// =========================
let inputs = document.getElementsByTagName("input");
let dni = inputs[4];
let email = inputs[5];
let btnEnviar = inputs[0];

dni.onblur = validar;
email.onblur = validar;

function validar(e) {
    let campo = e.target;
    let valor = campo.value;

    if (campo === dni) {
        let ok = /^[0-9]{8}[A-Z]$/.test(valor);
        pDni.style.display = ok ? "none" : "block";
        campo.style.border = ok ? "1px solid black" : "2px solid red";
    }

    if (campo === email) {
        let ok = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(valor);
        pEmail.style.display = ok ? "none" : "block";
        campo.style.border = ok ? "1px solid black" : "2px solid red";
    }

    // Campo dinámico Nº incidencia (solo si empleado)
    let nInc = document.querySelector("tr:last-child input");
    if (campo === nInc && selectCargo.value === "empleado") {
        let ok = /^[0-9]+$/.test(valor);
        pInc.style.display = ok ? "none" : "block";
        campo.style.border = ok ? "1px solid black" : "2px solid red";
    }

    comprobarEnviar();
}

// =========================
// 5. ACTIVAR BOTÓN ENVIAR
// =========================
btnEnviar.disabled = true;

function comprobarEnviar() {
    let label = document.getElementsByTagName("label")[0];

    let okDni = /^[0-9]{8}[A-Z]$/.test(dni.value);
    let okEmail = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email.value);

    let nInc = document.querySelector("tr:last-child input");
    let okInc = true;

    if (selectCargo.value === "empleado") {
        okInc = /^[0-9]+$/.test(nInc?.value || "");
    }

    let registrado = label.textContent.includes("Usuario registrado");

    btnEnviar.disabled = !(okDni && okEmail && okInc && registrado);
}

// =========================
// 6. ONSUBMIT
// =========================
document.getElementsByTagName("form")[0].onsubmit = function (e) {
    e.preventDefault();

    let radios = document.getElementsByTagName("input");
    let si = null;

    for (let r of radios) {
        if (r.type === "radio" && r.value === "si") si = r;
    }

    if (si && si.checked) {
        alert("Enviando formulario ...");
    } else {
        alert("Debes marcar 'SI Acepto'");
    }
};
