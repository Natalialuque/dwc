
const forumalrio =new Promise((resolve, reject) => {


    const tarjeta = document.createElement("div");

    const nombreP = document.createElement("p");
    nombreP.textContent="name ->"+nombre;
    const apellidosP = document.createElement("p");
    apellidosP.textContent="surname ->"+apellidos;
    const edadP = document.createElement("p");
    edadP.textContent="age ->"+edad;
    const telefonoP = document.createElement("p");
    telefonoP.textContent="Phone ->"+telefono;
    const emailP = document.createElement("p");
    emailP.textContent="email ->"+email;
    const trabajoP = document.createElement("p");
    trabajoP.textContent="Job ->"+trabajo;
   
    const botonAñadir = document.createElement("button");
    botonAñadir.textContent="añadir";

    const botonMostrar = document.createElement("button");
    botonMostrar.textContent="mostrar";

    tarjeta.appendChild(nombreP);
    tarjeta.appendChild(apellidosP); 
    tarjeta.appendChild(edadP); 
    tarjeta.appendChild(telefonoP); 
    tarjeta.appendChild(emailP); 
    tarjeta.appendChild(trabajoP);
    tarjeta.appendChild(botonAñadir); 
    tarjeta.appendChild(botonMostrar); 
    // Insertar la tarjeta en la interfaz 
    document.body.appendChild(tarjeta);

    // 5. Validar:
    if (nombre === "" || email === "") {
        reject("Faltan datos");
    } else {
        resolve("OK");
    }

}).then(function(){

}).catch(function(){

});

