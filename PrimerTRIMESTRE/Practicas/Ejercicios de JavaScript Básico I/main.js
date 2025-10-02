/**EJERCICIO 1 */
//variables
let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellido");
let curso = document.getElementById("curso");
let nota1 = document.getElementById("nota1");
let nota2 = document.getElementById("nota2");
let nota3 = document.getElementById("nota3");
let añadir = document.getElementById("añadir");
let alumnos = document.getElementById("alumnos");

//ejercicio
let listaAlumnos = [];
listaNotas = [];

añadir.onclick = function () {
    listaNotas = [parseFloat(nota1.value), parseFloat(nota2.value), parseFloat(nota3.value)];
    listaAlumnos = [nombre.value, apellidos.value, curso.value, listaNotas];
}

alumnos.innerHTML = listaAlumnos;

/**EJERCICIO 2 */