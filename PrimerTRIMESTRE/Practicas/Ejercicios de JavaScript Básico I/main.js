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
//holaa
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
//variables
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let botonRes = document.getElementById("botonRespu");
let respuesta = document.getElementById("respuesta");

//ejercicio
botonRes.onclick = function(){
    if(valor1.value!=0 && valor1.value!=1 && valor2.value!=0 && valor2.value!=1 ){
        alert("error, debe introducir binarios")
    }
    else if (valor1.value != valor2.value){
        respuesta.innerHTML = "1";
    }
    else {
        respuesta.innerHTML = "0";
    }
}


/**EJERCICIO 3 */
//variables 
let euros = document.getElementById("euros");
let conversor = document.getElementById("conversor");
let dolares = document.getElementById("dolares");
let yenes = document.getElementById("yenes");


//Ejercicio 
conversor.onclick = function(){

    const tasaDolar = 1.06; 
    const tasaYen = 157.45;

    if (isNaN(euros.value) || euros.value <= 0) {
        alert("Error: Introduce un número válido mayor que cero");
    }else{
        dolares.innerHTML = (tasaDolar*euros.value) +"€";
        yenes.innerHTML = (tasaYen * euros.value)+"Y";
    }

}



/**EJERCICIO 4 */
//varibales 
let radio = document.getElementById("radio");
let click = document.getElementById("calcula");
let perimetro = document.getElementById("perimetro");
let area = document.getElementById("area");

let pi = Math.PI;

click.onclick = function(){

    if(radio.value <= 0){
        alert("El radio no puede ser negativo")
    }
    else {
        perimetro.innerHTML = 2 * pi * radio.value;

        area.innerHTML = 2 * pi * Math.pow(radio.value,2);
    }
}

/** EJERCICIO 5 */
//variable 
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let mostrar = document.getElementById("mostrar");
let pares = document.getElementById("pares");


mostrar.onclick = function(){
    let numePares= [];

    if (isNaN(num1.value) || isNaN(num2.value) || num1.value <= -100 || num2.value <= -100 || num1.value > 5000 || num2.value > 5000) {
        alert(" Los valores deben ser números mayores a -100 y menores o iguales a 5000.");
    }
  
      let inicio = Math.min(num1.value, num2.value);
      let fin = Math.max(num1.value, num2.value);

       for (let i = Math.ceil(inicio); i <= Math.floor(fin); i++) {
        if (i % 2 === 0) {
          numePares.push(i);//añade al array de 1 en 1
        }
      }
      pares.innerHTML= numePares;

}

/**EJERCICIO 6 */
//variables 
let nume1 = document.getElementById("nume1");
let nume2 = document.getElementById("nume2");
let calcula = document.getElementById("calculos");
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let division = document.getElementById("division");
let multiplicacion = document.getElementById("multiplicacion");
let resto = document.getElementById("resto");



calcula.onclick = function(){
    if(isNaN(nume1.value) || isNaN(nume2.value)){
        alert ("los valores deben ser numeros");
    }

    //Necesitamos aplicarle esto a la suma ya que el operador + tambien se usa para concatenacion
    suma.innerHTML= Number(nume1.value)+Number(nume2.value);
    resta.innerHTML=nume1.value-nume2.value;
    multiplicacion.innerHTML=nume1.value*nume2.value;

    if(nume1.value == 0 || nume2.value == 0){
        division.innerHTML="no se puede dividir por cero";
        resto.innerHTML = "--";
    }
    else{
        division.innerHTML = nume1.value / nume2.value;

        resto.innerHTML = nume1.value % nume2.value;
    }

    
}



