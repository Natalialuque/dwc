/**EJERCICIO 1 */

    //variables 
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("ape");
    let curso = document.getElementById("cur");
    let nota1 = document.getElementById("nota1");
    let nota2 = document.getElementById("nota2");
    let nota3 = document.getElementById("nota3");
    let parrafoAlum = document.getElementById("alum");

    let añadir = document.getElementById("añadir");

//ejecicio
añadir.onclick = function() {

    let notas = [nota1.value,nota2.value,nota3.value];
    let alumnos = [nombre.value, apellidos.value, curso.value, notas];

    for(let i=0;i<alumnos.length-1;i++){
        parrafoAlum.innerHTML += alumnos[i] + " - ";
    }

     for(let i=0;i<alumnos.length-1;i++){
        if(i==alumnos.length-2)
            parrafoAlum.innerHTML += alumnos[3][i];
        else
            parrafoAlum.innerHTML += alumnos[3][i] + ", ";
    }
    parrafoAlum.innerHTML += "<br>"
}

/**EJERCICIO 2 */