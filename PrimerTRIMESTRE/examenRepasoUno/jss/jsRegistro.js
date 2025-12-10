// variables
var inputs = document.getElementsByTagName("input");
var usuario = inputs[0];
var contraseña = inputs[1];
var boton = inputs[2]; // el botón "Aceptar"

boton.onclick = function() {
    // validaciones básicas
    if (usuario.value.trim() === "") {
        let errorUsuario = document.createElement("p");
        errorUsuario.style.color = "red";
        errorUsuario.textContent = "El usuario no puede estar vacío";
        document.body.appendChild(errorUsuario);
        usuario.style.border = "1px solid red";
        return; // no seguimos
    }

    if (contraseña.value.trim() === "") {
        let errorContraseña = document.createElement("p");
        errorContraseña.style.color = "red";
        errorContraseña.textContent = "La contraseña no puede estar vacía";
        document.body.appendChild(errorContraseña);
        contraseña.style.border = "1px solid red";
        return;
    }

    // nombre de usuario debe ser empleado o encargado
    let nombreUsuario = usuario.value.trim().toLowerCase();
    if (nombreUsuario !== "empleado" && nombreUsuario !== "encargado") {
        let errorTipo = document.createElement("p");
        errorTipo.style.color = "red";
        errorTipo.textContent = "El usuario solo puede ser 'encargado' o 'empleado'";
        document.body.appendChild(errorTipo);
        usuario.style.border = "1px solid red";
        return;
    }

    // si es válido, lo mandamos al padre y cerramos
    window.opener.postMessage({ tipo: "usuario", nombre: nombreUsuario }, "*");
    window.close();
};

