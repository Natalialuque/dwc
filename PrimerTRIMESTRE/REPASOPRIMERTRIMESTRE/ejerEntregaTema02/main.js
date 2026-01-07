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



