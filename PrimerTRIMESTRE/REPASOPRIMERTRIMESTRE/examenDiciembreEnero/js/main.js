// =========================
// VARIABLES GENERALES
// =========================
const temas = document.getElementsByName("tema");
const error = document.getElementById("er");
const barrita = document.getElementById("barrita");
const btnReset = document.getElementById("botonReseteo");
const btnRegistrar = document.getElementById("registrar");
const btnInforme = document.getElementById("btnInforme");
let currentTimeout = null;



//Movemos la barrita 
barrita.addEventListener("input", () => {
    document.documentElement.style.fontSize = barrita.value + "px";
});

// =========================
// LISTA DE VALIDACIÓN PASSWORD
// =========================
const passInput = document.getElementById("pass");

// Crear UL dinámica
const ul = document.createElement("ul");
ul.id = "listaPass";
ul.style.display = "none";

ul.innerHTML = `
    <li id="mayus">Debe contener mayúsculas</li>
    <li id="minus">Debe contener minúsculas</li>
    <li id="nums">Debe contener números</li>
    <li id="simb">Debe contener símbolos ($%&@#?!.,;:_-)</li>
    <li id="long">Debe tener al menos 8 caracteres</li>
`;

// Insertar UL justo encima del input pass
passInput.parentNode.insertBefore(ul, passInput);

// Validación dinámica
passInput.addEventListener("input", passValido);


// =========================
// FUNCIÓN VALIDAR PASSWORD
// =========================
function passValido() {
  let pass = document.getElementById("pass").value;

  ul.style.display = pass.length > 0 ? "block" : "none";

  let tieneMayus = /[A-Z]/.test(pass);
  let tieneMinus = /[a-z]/.test(pass);
  let tieneNum = /[0-9]/.test(pass);
  let tieneSym = /[$%&@#?!.,;:_\-]/.test(pass);
  let tieneLen = pass.length >= 8;

  actualizarRegla(document.getElementById("mayus"), tieneMayus);
  actualizarRegla(document.getElementById("minus"), tieneMinus);
  actualizarRegla(document.getElementById("nums"), tieneNum);
  actualizarRegla(document.getElementById("simb"), tieneSym);
  actualizarRegla(document.getElementById("long"), tieneLen);

  return tieneMayus && tieneMinus && tieneNum && tieneSym && tieneLen;
}

function actualizarRegla(li, cumple) {
  if (!li) return;
  li.style.color = cumple ? "green" : "red";
  li.style.textDecoration = cumple ? "line-through" : "none";
}


// =========================
// CAMBIO DE TEMA
// =========================
let temaActual = "claro";

for (const t of temas) {
    t.addEventListener("click", () => {
        try {
            if (t.id === temaActual) {
                throw new Error("Ese tema ya está aplicado");
            }

            error.textContent = "";
            temaActual = t.id;

            switch (t.id) {
                case "claro":
                    document.body.style.background = "white";
                    document.body.style.color = "black";
                    break;
                case "oscuro":
                    document.body.style.background = "black";
                    document.body.style.color = "white";
                    break;
                case "altoContraste":
                    document.body.style.background = "black";
                    document.body.style.color = "yellow";
                    break;
            }

        } catch (err) {
            mostrarError(err.message);
        }
    });
}


// =========================
// BOTÓN RESET
// =========================
btnReset.addEventListener("click", () => {

    temas.forEach(t => {
        if (t.id === "claro") t.checked = true;
    });

    document.body.style.background = "white";
    document.body.style.color = "black";

    barrita.value = 16;
    document.documentElement.style.fontSize = "16px";

    error.textContent = "";
    temaActual = "claro";
});


// =========================
// BOTÓN REGISTRAR EMPLEADO
// =========================
btnRegistrar.addEventListener("click", () => {

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("pass").value.trim();
    const pass2 = document.getElementById("confirmaPass").value.trim();
    const fechaContratacion = document.getElementById("fechaContratacion").value;
    const urlLinkedin = document.getElementById("urlLinkedin").value.trim();
    const habilidades = document.getElementsByName("habilidades")[0];

    // Campos vacíos
    if (!nombre || !email || !pass || !pass2) {
        alert("Todos los campos de texto son obligatorios.");
        return;
    }

    // Password seguro
    if (!passValido()) {
        alert("El password no cumple los requisitos.");
        return;
    }

    // Fecha vacía
    if (!fechaContratacion) {
        alert("La fecha de contratación es obligatoria.");
        return;
    }

    // Fecha futura
    const hoy = new Date();
    const fecha = new Date(fechaContratacion);
    if (fecha > hoy) {
        alert("La fecha de contratación no puede ser futura.");
        return;
    }

    // Habilidades
    if (habilidades.selectedOptions.length === 0) {
        alert("Debes seleccionar al menos una habilidad.");
        return;
    }

    // Contraseñas iguales
    if (pass !== pass2) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // LinkedIn
    const linkedinRegex = /^https:\/\/linkedin.com\/\S+$/;
    const linkedinRegex2 = /^https:\/\/www.linkedin.com\/\S+$/;
    if (!linkedinRegex.test(urlLinkedin) && !linkedinRegex2.test(urlLinkedin)) {
        mostrarError("URL de linkedin inválida");
        return;
    }

    // Antigüedad
    const now = new Date();
    const antiguedad = Math.floor((now - fecha) / (1000 * 60 * 60 * 24));


    // =========================
    // TARJETA DE EMPLEADO
    // =========================
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta-empleado");

    const cabecera = document.createElement("div");
    const h3 = document.createElement("h3");
    const small = document.createElement("small");

    h3.textContent = nombre;
    small.textContent = `${email} | Antigüedad: ${antiguedad} días`;

    cabecera.appendChild(h3);
    cabecera.appendChild(small);
    tarjeta.appendChild(cabecera);

    const labelRend = document.createElement("p");
    labelRend.textContent = "Rendimiento anual:";
    tarjeta.appendChild(labelRend);

    const progreso = document.createElement("progress");
    progreso.max = 100;
    progreso.value = Math.floor(Math.random() * 101);
    tarjeta.appendChild(progreso);

    const tituloHab = document.createElement("p");
    tituloHab.textContent = "Habilidades:";
    tarjeta.appendChild(tituloHab);

    const ulHab = document.createElement("ul");
    Array.from(habilidades.selectedOptions).forEach(opt => {
        const li = document.createElement("li");
        li.textContent = opt.textContent;
        ulHab.appendChild(li);
    });
    tarjeta.appendChild(ulHab);

    const btnClonar = document.createElement("button");
    btnClonar.textContent = "Clonar Ficha";
    btnClonar.addEventListener("click", () => {
        const clon = tarjeta.cloneNode(true);
        clon.style.opacity = "0.7";

        const btnClonarClon = clon.querySelector("button:nth-of-type(1)");
        const btnDespedirClon = clon.querySelector("button:nth-of-type(2)");

        btnClonarClon.addEventListener("click", () => {
            const clon2 = clon.cloneNode(true);
            clon2.style.opacity = "0.7";
            document.body.appendChild(clon2);
        });

        btnDespedirClon.addEventListener("click", () => clon.remove());

        document.body.appendChild(clon);
    });
    tarjeta.appendChild(btnClonar);

    const btnDespedir = document.createElement("button");
    btnDespedir.textContent = "Despedir";
    btnDespedir.addEventListener("click", () => tarjeta.remove());
    tarjeta.appendChild(btnDespedir);

    document.body.appendChild(tarjeta);
});


// =========================
// MOSTRAR ERROR 3 SEGUNDOS
// =========================
function mostrarError(message) {
    error.textContent = message;
    if (currentTimeout) clearTimeout(currentTimeout);
    currentTimeout = setTimeout(() => {
        error.textContent = "";
        currentTimeout = null;
    }, 3000);
}


// =========================
// BOTÓN INFORME
// =========================
btnInforme.addEventListener("click", () => {

    const win = window.open("src/informe.html", "informe", "width=500,height=400");

    win.onload = () => {

        const tarjetas = document.querySelectorAll("article.tarjeta-empleado");

        const total = tarjetas.length;
        win.document.getElementById("total").textContent = total;

        const fechaActual = new Date().toLocaleString();
        win.document.getElementById("fecha").textContent = "Fecha informe: " + fechaActual;

        const tbody = win.document.getElementById("empleados");
        tbody.innerHTML = "";

        tarjetas.forEach(tarjeta => {
            const nombre = tarjeta.querySelector("h3").textContent;
            const eficiencia = tarjeta.querySelector("progress").value;

            const fila = win.document.createElement("tr");

            const tdNombre = win.document.createElement("td");
            tdNombre.textContent = nombre;

            const tdEficiencia = win.document.createElement("td");
            tdEficiencia.textContent = eficiencia + "%";

            fila.appendChild(tdNombre);
            fila.appendChild(tdEficiencia);

            tbody.appendChild(fila);
        });
    };
});
