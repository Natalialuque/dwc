let boton = document.getElementById("comenzar");

boton.onclick = function(){
  const palabra = document.getElementById("palabraOculta").value;
  const regex = /["-]?\d{1,3}(?:,\d{3})*(?:\.\d+)?["-]?/g;

  // Verificamos si la palabra contiene algún patrón prohibido
  if (regex.test(palabra)) {
    alert("La palabra no puede contener números ni caracteres especiales como comillas, guiones, comas o puntos. Por favor, introduce otra.");
    return; // Detiene la ejecución si hay coincidencia
  }

  // Guardamos la palabra como propiedad del objeto window
  window.palabraCompartida = palabra;

  // Abrimos la ventana del juego
  window.open("juego.html");
};


