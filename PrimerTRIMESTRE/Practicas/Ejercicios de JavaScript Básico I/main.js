;/**EJERCICIO 1 */

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

    //Necesitamos aplicarle esto a la suma ya que el operador + tambien se usa para concatenacion, para que lo interprete como numero
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

/**EJERCICIO 7 */
//variables
//variables
let not1 = document.getElementById("not1");
let not2 = document.getElementById("not2");
let not3 = document.getElementById("not3");
let cal = document.getElementById("cal");
let calificacion = document.getElementById("calificacion");

//ejercicio
cal.onclick = function () {
  let nota1 = parseFloat(not1.value);
  let nota2 = parseFloat(not2.value);
  let nota3 = parseFloat(not3.value);

  // Validación
  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    calificacion.innerHTML = "Introduce las tres notas numéricas.";
    return;
  }

  let notamedia = (nota1 + nota2 + nota3) / 3;

  switch (true) {
    case notamedia < 5:
      calificacion.innerHTML = "Suspenso";
      break;
    case notamedia < 7:
      calificacion.innerHTML = "Aprobado";
      break;
    case notamedia < 8.5:
      calificacion.innerHTML = "Notable";
      break;
    case notamedia <= 10:
      calificacion.innerHTML = "Sobresaliente";
      break;
    default:
      calificacion.innerHTML = "Alguna nota introducida no es válida";
  }
};


/**EJERCICIO 8*/
//variables 
let piramide1 = document.getElementById("piramide1");
let piramidee = document.getElementById("piramidee");

piramidee.onclick = function (){
    for (let i = 1; i <= 50; i++) {
  for (let j = 0; j < i; j++) {
    piramide1.innerHTML += i; 
  }
  piramide1.innerHTML += "\n";
}
};

/**EJERCICIO 9*/
//variables 
let piramide2 = document.getElementById("piramide2");
let piramidee2 = document.getElementById("piramidee2");

piramidee2.onclick = function (){
    for (let i = 1; i <= 50; i++) {
  for (let j = 1; j <= i; j++) {
    piramide2.innerHTML += j; 
  }
  piramide2.innerHTML += "\n";
}
};

/**EJERCICIO 10 */
//variables
let valornormal = document.getElementById("arrow");
let botonArrow = document.getElementById("arrowresul");
let result = document.getElementById("arrowResultado");

//ejercicio 
botonArrow.onclick = () => {
  if (!isNaN(valornormal.value)) {
    result.innerHTML = valornormal.value % 2 === 0 ? "El número es par" : "El número es impar";
  } else {
    result.innerHTML = "Por favor, introduce un número válido.";
  }
};


/**EJERCICIO 11 */
//variables 
let botonPum = document.getElementById("pum");
let resulPum = document.getElementById("Pum");

//ejercicio 
botonPum.onclick = function(){
  for(let i=1; i<=100;i++){
    if (i % 7 === 0 || i % 10 === 7) {
      resulPum.innerHTML+= "PUM\n"; 
    } else {
      resulPum.innerHTML += i + ", ";
    }
  }
};

/**EJERCICIO 12 */
//variables 
let botonConteo = document.getElementById("conteo");
let resulConteo= document.getElementById("Conteo");

botonConteo.onclick = function(){
 
}


/**EJERCICIO 13*/
//variables 
let botonDados = document.getElementById("lanzar");
let resulDados = document.getElementById("resultadoLanzar");

botonDados.onclick = function () {
  let array = Array(13).fill(0); // índices del 2 al 12

  for (let i = 1; i <= 36000; i++) {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let suma = dado1 + dado2;
    array[suma]++;
  }

  resulDados.innerHTML = ""; // limpiar antes de mostrar

  for (let i = 2; i <= 12; i++) {
    resulDados.innerHTML += "Suma " + i + ": " + array[i] + " veces<br>";
  }
};


/**EJERCICIO  14 */
//variables 
let numero = document.getElementById("numeroInput");
let botonAgregar = document.getElementById("agregar");
let botonFin = document.getElementById("finalizar");
let resultadoLista = document.getElementById("resultado");

let numeros =[];
let entradaFinalizada=false;
//ejercicio 
botonAgregar.onclick = function(){
   if (entradaFinalizada) {
    alert("Ya se han introducido todos los números. Pulsa 'Finalizar entrada'.");
    return;
  }

  if (parseInt(numero.value) === 0) {
    entradaFinalizada = true;
    alert("Entrada finalizada. Pulsa 'Finalizar entrada' para ver resultados.");
  } else {
    numeros.push(parseInt(numero.value));
    numero.value = "";
    numero.focus();
  }

}

botonFin.onclick = function(){

  //Mayor y menor con métodos
    const mayor = Math.max(...numeros);
    const menor = Math.min(...numeros);
   
   // Ocurrencias
  let ocurrencias = {};
  for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];
    ocurrencias[num] = (ocurrencias[num] || 0) + 1;
  }
    
    
    resultadoLista.innerHTML += "Orden normal: " + numeros.join(", ") + "<br>";
    resultadoLista.innerHTML+="Orden descentende: "+ numeros.sort((a, b) => b - a)+"<br>";
    resultadoLista.innerHTML+= "numero mayor: "+mayor+ " (" + ocurrencias[mayor] + " veces)<br>";;
    resultadoLista.innerHTML+= "numero menor: "+menor+ " (" + ocurrencias[menor] + " veces)<br>";;

}

/**EJERCICIO  15 */
//variables 
let valores = document.getElementById("valores");
let elementos = document.getElementById("elementos");
let invertir = document.getElementById("invierte");
let resul = document.getElementById("resu");
let botonAgregar2 = document.getElementById("agregar2");


let array = [];
//ejercicio 

botonAgregar2.onclick = function(){
  let dato;

  if (!isNaN(elementos.value)) {
    dato = parseFloat(elementos.value); // número
  } else if (elementos.value.toLowerCase() === "true" || elementos.value.toLowerCase() === "false") {
    dato = elementos.value.toLowerCase() === "true"; // booleano
  } else {
    dato = elementos.value; // texto
  }

  array.push(dato);
  elementos.value="";
}



invertir.onclick = function(){
  // Invertir manualmente con bucle
  let invertido = [];
  for (let i = array.length - 1; i >= 0; i--) {
    invertido.push(array[i]);
  }

resul.innerHTML = invertido.join(", ") + "</p>";
}





/**EJERCICIO  16*/
//variables 
let lon = document.getElementById("longitud");
let longitud = document.getElementById("longi");
let botonGenerar = document.getElementById("generar");
let resultadoContraseñas = document.getElementById("resultadoContras");

//ejercicio 
botonGenerar.onclick = function () {

  if (isNaN(longitud.value) || longitud.value <= 0) {
    alert("Por favor, introduce una longitud válida mayor que 0.");
    return;
  }

  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}<>?/|";
  let contraseña = "";

  for (let i = 0; i < longitud.value; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    contraseña += caracteres[indice];
  }

  resultadoContraseñas.innerHTML = contraseña;
}

/**EJERCICIO  17 */
//variables 
let n1= document.getElementById("number1");
let n2 = document.getElementById("number2");
let bot = document.getElementById("comparar");
let re = document.getElementById("resultado5");
//ejercicio 
function calcularMenor(a, b) {
  return a < b ? a : b;
}

bot.onclick = function () {
  let valor1 = parseInt(n1.value);
  let valor2 = parseInt(n2.value);

  if (isNaN(valor1) || isNaN(valor2)) {
    alert("Por favor, introduce dos números válidos.");
    return;
  }

  let menor = calcularMenor(valor1, valor2);
  let mayor = valor1 === menor ? valor2 : valor1;

  let lista = [];
  for (let i = menor + 1; i < mayor; i++) {
    lista.push(i);
  }

  re.innerHTML = " Menor: "+menor+"Mayor: "+mayor+"Números entre ellos: "+lista.join(" ,");
}


/**EJERCICIO  18 */
//variables 

//ejercicio 



/**EJERCICIO  19*/
//variables 

//ejercicio 



/**EJERCICIO  20 */
//variables 

//ejercicio 