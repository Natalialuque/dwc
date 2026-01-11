/**EJERCICIO 1 */
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let curso = document.getElementById("curso");
let nota1 = document.getElementById("nota1");
let nota2 = document.getElementById("nota2");
let notafinal = document.getElementById("notaFinal");
let boton = document.getElementById("Boton");
let informacion = document.getElementById("alumno");

boton.onclick = function (){
    let notas = [nota1.value,nota2.value,notafinal.value];
    let alumnos = [nombre.value,apellido.value,curso.value,notas];

    for(let i = 0;i<alumnos.length;i++){
        if (i === alumnos.length - 1) { 
            informacion.innerHTML += alumnos[i]; 
        } else { 
            informacion.innerHTML += alumnos[i] + "-"; 
        }
    }

      informacion.innerHTML+="<br>";
}


/**EJERCICIO 2 */
let a = document.getElementById("a");
let b = document.getElementById("b");
let respuesta2 = document.getElementById("respuesta");
let boton2 = document.getElementById("boton");

boton2.onclick = function(){
    if(a.value != b.value){
        respuesta2.innerHTML="1";
    }else{
        respuesta2.innerHTML="0";
    }
}


/**EJERCICIO 3 */
let numero = document.getElementById("numero");
let yenes = document.getElementById("yenes");
let dolares = document.getElementById("dolares");
let boton3 = document.getElementById("boton3");


boton3.onclick=function(){
    const tasaDolar = 1.06; 
    const tasaYen = 157.45;

    if(isNaN(numero.value) || numero.value<=0){
        alert("ERROR: no has introducido un numero o ha sido menor a 1")
    }else{
        yenes.innerHTML= (numero.value*tasaYen)+"Y";
        dolares.innerHTML= (numero.value*tasaDolar)+"$";
    }
}


/**EJERCICIO 4*/
let radio = document.getElementById("radio");
let boton4 = document.getElementById("boton4");
let area = document.getElementById("area");
let perimetro = document.getElementById("perimetro");

boton4.onclick=function(){
    area.innerHTML= 2 * Math.PI * Math.pow(radio.value,2);
    perimetro.innerHTML = 2 * Math.PI * radio.value;
}



/**EJERCICIO 5 */
let x = document.getElementById("x");
let y = document.getElementById("y");
let boton5 = document.getElementById("boton5");
let pares = document.getElementById("pares");

boton5.onclick = function(){

    let numeroPares = []; //para guardar los numeros pares del numero 

     if (isNaN(x.value) || isNaN(y.value) || x.value <= -100 || y.value <= -100 || x.value > 5000 || y.value > 5000) {
        alert(" Los valores deben ser números mayores a -100 y menores o iguales a 5000.");
    }

    let inicio = Math.min(x.value, y.value);
    let fin = Math.max(x.value, y.value);

       for (let i = Math.ceil(inicio); i <= Math.floor(fin); i++) {
        if (i % 2 === 0) {
          numeroPares.push(i);//añade al array de 1 en 1
        }
      }
      pares.innerHTML= numeroPares;

}

/**EJERCICIO 6 */
let num1 = document.getElementById("nume1");
let num2 = document.getElementById("nume2");
let boton6 = document.getElementById("boton6");
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multi = document.getElementById("multiplicacion");
let duvi = document.getElementById("division");
let resto = document.getElementById("resto");


boton6.onclick=function(){
    if(isNaN(num1.value)|| isNaN(num2.value) ){
        alert("los valores deben ser numeros")
    }

    if(num2.value==0){
        alert("el segundo valor no puede ser 0")
    }

    //recordar que la suma + no suma, concatena
    suma.innerHTML = Number(num1.value) + Number(num2.value);
    resta.innerHTML = num1.value -num2.value;
    multi.innerHTML = num1.value *num2.value;
    duvi.innerHTML = num1.value /num2.value;
    resto.innerHTML = num1.value %num2.value;


}

/**EJERCICIO 7 */
let not1 = document.getElementById("not1");
let not2 = document.getElementById("not2");
let not3 = document.getElementById("not3");
let boton7 = document.getElementById("boton7");
let calificacion = document.getElementById("calificacion");

boton7.onclick = function(){

      let nota1 = parseFloat(not1.value);
     let nota2 = parseFloat(not2.value);
     let nota3 = parseFloat(not3.value);

    let media = (nota1+nota2+nota3)/3;

    switch(true){
        case media<5 :
            calificacion.innerHTML= "suspenso";
            break;
         case media<7 :
            calificacion.innerHTML= "aprobado";
            break;
         case media<8.5 :
            calificacion.innerHTML= "notable";
            break;
         case media<=10 :
            calificacion.innerHTML= "sobresaliente";
            break;
        default:
            calificacion.innerHTML="Alguna nota introducida no es valida";

    }
};

/**EJERCICIO 8 */
let boton8 = document.getElementById("boton8");
let piramide = document.getElementById("piramide");

boton8.onclick=function(){

    for (let i = 1; i<50;i++){
      for(let j=0;j<i;j++){
            piramide.innerHTML+=i;
      }
          piramide.innerHTML+="\n";

    }

};

/**EJERCICIO 9 */
let boton9 = document.getElementById("boton9");
let piramide2 = document.getElementById("piramide2");

boton9.onclick=function(){

    for (let i = 1; i<50;i++){
      for(let j=1;j<i;j++){
            piramide2.innerHTML+=j;
      }
          piramide2.innerHTML+="\n";

    }

};

/**EJERCICIO 10 */
let boton10 = document.getElementById("boton10");
let num10 = document.getElementById("num10");
let parImpar = document.getElementById("parImpar");

boton10.onclick=()=>{
    if(num10.value%2==0){
        parImpar.innerHTML=num10.value+" es par";
    }else{
        parImpar.innerHTML=num10.value+" es impar";

    }

}

/**EJERCICIO 11 */
let boton11 = document.getElementById("boton11");
let numePum = document.getElementById("numePum");
  
boton11.onclick= function(){
    for(let i = 1; i<=100; i++){
        //para sacar multiplos y terminados en 7
        if(i % 7 === 0 || i % 10 === 7){
            numePum.innerHTML+="PUM\n";
        }else{
            numePum.innerHTML+=i+", ";

        }
    }
}

/**EJERCICIO 12 */
let boton12 = document.getElementById("boton12");
let numConteo = document.getElementById("numConteo");

boton12.onclick= function(){

    for(let i =1; i<=300;i++){
       
    const span = document.createElement("span");
    span.innerText = i + " ";

    // Estilo púrpura si es múltiplo de 4 y 9
    if (i % 4 === 0 && i % 9 === 0) {
      span.style.color = "purple";
      span.style.fontSize = "22px";
    }
    // Estilo verde si es múltiplo de 4
    else if (i % 4 === 0) {
      span.style.color = "green";
      span.style.fontSize = "20px";
    }
    // Estilo rojo si es múltiplo de 9
    else if (i % 9 === 0) {
      span.style.color = "red";
      span.style.fontSize = "18px";
    }

    numConteo.appendChild(span);

    // Salto de línea cada 10 números
    if (i % 10 === 0) {
      numConteo.appendChild(document.createElement("br"));
    }
    }



}

/**
 * EJERCICIO 13
 */
let boton13 = document.getElementById("boton13");
let dados = document.getElementById("dados");

boton13.onclick=function(){

      let array = Array(13).fill(0); // índices del 2 al 12


    for(let i=1; i<=36000;i++){
        let dado1 = Math.floor(Math.random()*6+1);
        let dado2 = Math.floor(Math.random()*6+1);
        let suma = dado1+dado2;
        array[suma]++;
    }
    dados.innerHTML = ""; // limpiar antes de mostrar

  for (let i = 2; i <= 12; i++) {
    dados.innerHTML += "Suma " + i + ": " + array[i] + " veces<br>";
  
  }
}

/**
 * EJERCICIO 14
 */

let boton14_1 = document.getElementById("boton14_1");
let boton14_2 = document.getElementById("boton14_2");
let numeroInput = document.getElementById("numeroInput");
let resultado = document.getElementById("resultado");

let numeros = [];
let entradaFinalizada=false;

boton14_1.onclick = () => {
    if (parseInt(numeroInput.value) === 0) {
        entradaFinalizada = true;
        alert("no puedes introducir mas numeros, pulsa el siguiente boton");
        boton14_1.disabled = true;
    } else {
        numeros.push(parseInt(numeroInput.value));
        numeroInput.value = "";   
        numeroInput.focus();      //para poder escribir el siguiente numero directamente
    }
}

boton14_2.onclick=()=>{
    //para tener el mayor y el menor
    const mayor = Math.max(...numeros);
    const menor = Math.min(...numeros);

      // Ocurrencias
        let ocurrencias = {};
        for (let i = 0; i < numeros.length; i++) {
            let num = numeros[i];
            ocurrencias[num] = (ocurrencias[num] || 0) + 1;
        }

    resultado.innerHTML += "Orden normal: " + numeros.join(", ") + "<br>";
    resultado.innerHTML+="Orden descentende: "+ numeros.sort((a, b) => b - a)+"<br>";
    resultado.innerHTML+= "numero mayor: "+mayor+ " (" + ocurrencias[mayor] + " veces)<br>";;
    resultado.innerHTML+= "numero menor: "+menor+ " (" + ocurrencias[menor] + " veces)<br>";;

}


/**EJERCICIO 15 */
let boton15 = document.getElementById("boton15");
let boton15_2 = document.getElementById("boton15_2");
let cadena = document.getElementById("cadena");
let resultado15 = document.getElementById("resultado15");

let array=[];
boton15.onclick=function(){
    let dato;
   if (!isNaN(cadena.value)) {
    dato = parseFloat(cadena.value); // número
  } else if (cadena.value.toLowerCase() === "true" || cadena.value.toLowerCase() === "false") {
    dato = cadena.value.toLowerCase() === "true"; // booleano
  } else {
    dato = cadena.value; // texto
  }

  array.push(dato);
  cadena.value="";
}


boton15_2.onclick=function(){
    // Invertir manualmente con bucle
  let invertido = [];
  for (let i = array.length - 1; i >= 0; i--) {
    invertido.push(array[i]);
  }

resultado15.innerHTML = invertido.join(", ") + "</p>";
}

/**EJERCICIO 16 */
let boton16 = document.getElementById("boton16");
let longitud16 = document.getElementById("longitud16");
let contraseñas = document.getElementById("contraseña");


boton16.onclick=function(){
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}<>?/|";
  let contraseña = "";

  for (let i = 0; i < longitud16.value; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    contraseña += caracteres[indice];
  }

  contraseñas.innerHTML = contraseña;
}

/**EJERCICIO 17 */
let boton17 = document.getElementById("boton17");
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let resultado16 = document.getElementById("resultado16");

function calcularMenor(a, b) {
  return a < b ? a : b;
}

boton17.onclick = function () {
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

  resultado16.innerHTML = " Menor: "+menor+"Mayor: "+mayor+"Números entre ellos: "+lista.join(" ,");
}

/**EJERCICIO 18 */
let boton18 = document.getElementById("boton18");
let num18 = document.getElementById("num18");
let opcion = document.getElementById("opcion");
let resultado18 = document.getElementById("resultado18");

function multiplo2(n){
    return n%2===0;
}

function multiplo5(n){
    return n%5===0;
}

function multiplo3(n){
    return n%3===0;
}

boton18.onclick=function(){
  
    switch(opcion.value){
        case "1" :
            resultado18.innerHTML=multiplo2(num18.value)
                ? num18.value+ " es multiplo"
                : num18.value+ " no es multiplo";
            break;
        case "2" :
            resultado18.innerHTML=multiplo3(num18.value)
                ? num18.value+ " es multiplo"
                : num18.value+ " no es multiplo";
            break;
        case "3" :
            resultado18.innerHTML=multiplo5(num18.value)
                ? num18.value+ " es multiplo"
                : num18.value+ " no es multiplo";
            break;
        case "0":
            resultado18.innerHTML="fin programa";
            break;
        default :
            resultado18.innerHTML="error";
    }

}

/**EJERCICIO 19 */
let nombre19 = document.getElementById("nombre19");
let apellidos19 = document.getElementById("apellidos19");
let horas19 = document.getElementById("horas19");
let turnoRadios = document.getElementsByName("turno"); 
let agregar19 = document.getElementById("agregar19");
let finalizar19 = document.getElementById("finalizar19");
let resultado19 = document.getElementById("resultado19");
let totalBruto = document.getElementById("totalBruto");

// Array para guardar todos los trabajadores 
let trabajadores = [];

// Función para obtener el turno seleccionado
function obtenerTurnoSeleccionado() {
    for (let i = 0; i < turnoRadios.length; i++) {
        if (turnoRadios[i].checked) return turnoRadios[i].value;
    }
    return null;
}

// Función para calcular salario bruto
function calcularSalarioBruto(horas, turno) {
    let tarifa = 0;
    if (turno === "m") tarifa = 25;
    else if (turno === "t") tarifa = 30;
    else if (turno === "n") tarifa = 35;

    return horas * tarifa;
}

// Función para calcular salario neto
function calcularSalarioNeto(bruto) {
    if (bruto < 600) return bruto * 0.92;
    else if (bruto <= 1000) return bruto * 0.90;
    else return bruto * 0.88;
}

// Evento para agregar trabajador
agregar19.onclick = function () {
    const nombre = nombre19.value.trim();
    const apellido = apellidos19.value.trim();
    const horas = parseFloat(horas19.value);
    const turno = obtenerTurnoSeleccionado();

    if (!nombre || !apellido || isNaN(horas) || !turno) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const bruto = calcularSalarioBruto(horas, turno);
    const neto = calcularSalarioNeto(bruto);

    trabajadores.push({ nombre, apellido, bruto, neto });

    resultado19.innerHTML += 
        `<p><strong>${nombre} ${apellido}</strong> → Bruto: ${bruto.toFixed(2)} €, Neto: ${neto.toFixed(2)} €</p>`;

    // Limpiar campos
    nombre19.value = "";
    apellidos19.value = "";
    horas19.value = "";

    for (let i = 0; i < turnoRadios.length; i++) {
        turnoRadios[i].checked = false;
    }

    nombre19.focus();
};

// Evento para finalizar y mostrar total
finalizar19.onclick = function () {
    const total = trabajadores.reduce((sum, t) => sum + t.bruto, 0);
    totalBruto.innerHTML = 
        `<h4>Total de salarios brutos abonados: ${total.toFixed(2)} €</h4>`;
};

/**EJERCICIO 20 */
let num20 = document.getElementById("num20");
let boton20 = document.getElementById("boton20");
let resultado20 = document.getElementById("resultado20");

let numaletorio = Math.floor(Math.random() * 100) + 1;
let intentos =  0;

boton20.onclick = function () {
  const num = parseInt(num20.value);

  if (isNaN(num) || num < 1 || num > 100) {
    alert("Introduce un número válido entre 1 y 100.");
    return;
  }

  intentos++;

  if (num === numaletorio) {
    resultado20.innerHTML = `<p> ¡Correcto! El número secreto era ${numaletorio}. Lo has adivinado en ${intentos} intento(s).</p>`;
    boton20.disabled = true;
    num20.disabled = true;
  } else if (num < numaletorio) {
    resultado20.innerHTML = `<p>Mi número es mayor que ${num}.</p>`;
  } else {
    resultado20.innerHTML = `<p>Mi número es menor que ${num}.</p>`;
  }

  num20.value = "";
  num20.focus();
};