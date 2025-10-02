// No es necesario crear la funcion main para JS 
// function main(){

// var name2 = "Jhon";

// console.log("Nombre es: " + name2)

// var name = 7;

// console.log("Nombre es: " + name2 + " .Tipo:"+typeof name2)

// var name = true;

// console.log("Nombre es: " + name2+ " .Tipo:"+typeof name2)

// var name = [5,6,7,8];

// console.log("Nombre es: " + name2+ " .Tipo:"+typeof name2)

// var name = -10/10;

// console.log("Nombre es: " + name2+ " .Tipo:"+typeof name2)

// document.getElementById("h11").style.backgroundColor = "red";
// document.getElementById("h11").style.color = "white";

// }

// main();

// Implementación de funciones
/************************* FUNCTIONS *******************/
//sintaxis correcta js
//hello("hello universe!");
/**
 * @param{string}s - Cadena para dar la bienvenida
 * @param {number}n - Edad del usuario
 */

// function hello(s,n){
//     bye(s);
// }

/*function bye (s){
        document.getElementById("h11").innerHTML=s;
    }*/


//MALLL       
/* function main (s, str){
        var a = "pepe";
        document.getElementById("h11").innerHTML=s;
} */


//////////
// var a ="Maria";
// hello();
// document.getElementById("h11").innerHTML += " - " + a;

// function hello(){
//      var a = "pepe";
//     document.getElementById("h11").innerHTML += a;
// }

// //
// function hello(){
//     //usar siempre let dentro de funciones 
//      let a = "pepe";
//     document.getElementById("h11").innerHTML += a;
// }


// let a = "Pepe";

// console.log("Valor de la variable a"+a+", Tipo: "+typeof a);

// a=5;

// console.log("Valor de a: "+a+" , tipo: "+typeof a);

/**SWICTH  */
// let b = 15;

// switch(typeof b){
//     case "number":
//             b = b +10;
//             break;
//     case "string":
//             b = "buenos dias"+b;
//             break;
//     case "boolean":
//             b = !b;
//             break;

// }

// console.log(b);


/**********VARIABLES***************** */
//PODEMOS DECLARARLAS DE 3 FORMAS 
//usar siempre let o var, para no ponerlas glorabales y escribir nombre de variables con sentido
// var a = 253;
// let b = "hello";
// let c = false;

// if(true){
//     let c = true;
//     var d ="Valor de d";

//     console.log("Valor de c dentro:"+c);

//     if(c){
//         console.log("valor de d: "+d);
//     }

// }

// let b = "HEllo";

// let myObj = {
//     name: "Pepe",
//     edad : 34
// }

// console.dir(myObj);
// //declaracion de la funcion y de sus valores independientemente de donde se encuentre dichos valores 

// console.log(typeof hello);
// /////
// function hello(){
//     console.log("hello");
// }

////////////////////////////////////////////////
// let nombre = "Pepe";
// let apellidos = " Garcia fernandezs";
// let edad= 34;
// //edad = String.toString();//puedo ahorrarmelo porque lko concatena bien 
// let login = nombre + edad ;

// console.log("Nombre completo: "+nombre+ apellidos);
// console.log("login: "+login);

//ARRAYYYYY
// let myArray = [1,true,"Pepe",{name:"marry",age:45},5,undefined,7,8];
// console.log(myArray);

// let myObj = {
//     name: "Pepe",
//     edad : 34,
//     email: "pepe@mail.com"
// }

// console.log("Email: "+myObj["email"]);

/**
 * CARACTERES
 */
// document.getElementById("h11").innerHTML="hola,<br>¿Cómo estas?";
// document.getElementById("pre1").innerHTML="hola,\n¿Cómo estas?"; //para que funcionen los separadoes basicos de java 
// document.getElementById("ta1").innerHTML="hola,\n¿Cómo estas?"; //para que funcionen los separadoes basicos de java 


/**
 * OPERADORES
 */
//let h11= document.getElementById("h11");

// let a = 5;
// // let b = "5";
// let b2= 10;

//=== sirve para que compare mediante si el tipo de variable es igual y si lo de dentro corresponde
// if(a=== b){
//     h11.innerHTML = "son iguales";
// }
// else{
//     h11.innerHTML = "No son iguales";
// }

// let c = ++b2; //esto suma 1
// h11.innerHTML += "<br>valor de c:"+c;

// let d = b2++;//estop suma 2
// h11.innerHTML += "<br>valor de b:"+d;

// let a =null;
// let b = 5;

// h11.innerHTML = "valor de a "+a;

// a ??= b;

// h11.innerHTML += "<br> Nuevo valor de a "+a;

// if(!a){
//     h11.innerHTML += "VERDADERO";
// }
// else{
//     h11.innerHTML += "FALSO";
// 

/**
 * Cambia a bit anteior o posterior del numero indicado 
 */
// let a = 7;
// let b = a<<1;

// h11.innerHTML = b;

//////////////
// let a ={
//     nombre : "PEPE",
//     edad : 34,
//     email: "pepe@hotmial.es"
// }

// a.email;
// h11.innerHTML=a.email;

//operador para llamar algo dentro de un objeto independientemente donde borremos
// delete a.email;
// h11.innerHTML = a.email;

// console.dir(a);
// a.notas = [5,6,7,8];

//Muestra el resultado de h11 falso si esta vacio 


////////////////////////
//  let b1 = document.getElementById("b1");
//  let idt1 = document.getElementById("idt1");

// h11.innerHTML = this;
// b1.onclick = pressButtonb1;

// /************ */
// function pressButtonb1() {
//     h11.innerHTML= this;
//     h11.innerHTML += " - "+ globalThis;
// }

/**
 * 
 */
// if(h11.innerHTML == " ")
//     h11.innerHTML = "vacio";
// else 
//     h11.innerHTML += " ---------";

// (h11.innerHTML = "")?h11.innerHTML= "vacio":h11.innerHTML+=" ----------";

/**
 * SUMARLE 10 AL VALOR DE CAMPO DE TEXTO 
 */
// b1.onclick = sumaNumero;

// function sumaNumero(){
//     h11.innerHTML = "resultado: ";

//     switch(idt1.value){
//         case"NaN":
//             alert("Debe introducir un valor numerico");
//             break;
//         case "10":
//             h11.innerHTML = "valor es 10";
//             break;
//         case "20":
//             h11.innerHTML = "valor es 20";
//             break;
//         case "30":
//             h11.innerHTML = "valor es 30";
//             break;
//         default :
//             h11.innerHTML += parseFloat(idt1.value)+10 ;
//     }


// }


//  BUCLES FOR
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*for(let i=0; i<myArray.length;i++){
    h11.innerHTML += myArray[i]+", ";
}*/

// let myObj = {
//     nombre:"Pepe",
//     edad:34,
//     email:"pepe@mail.com"
// }

// for (i in myObj){
//     h11.innerHTML += "<br>"+i+" : "+myObj[i];
// }

// for (elem of myObj){
//     h11.innerHTML +=elem+" , ";
// }


//ejemplo de continue y break
//continue te los va mostrando todos los numeros impares y el break corta el bucle en el primer numero par
// for(let i=0; i<myArray.length;i++){
//     if((myArray[i]%2)==0) 
//         break; //salta a la siguiente iteracion
//     else
//          h11.innerHTML += myArray[i]+", ";
// }

/*************************** */
// let result = multiplica(5,6);
// h11.innerHTML += "<br>Resultado de la multiplicacion: "+result;

// // function multiplica(a,b){
// //     return a*b;
// // }

// /*let b1= document.getElementById("b1");*/
// b1.onclick = pressButtonb1;

// function pressButtonb1() {
//     let a = document.getElementById("idt1").value;
//     let b = document.getElementById("idt2").value;
//     let result2 = realizaMultiplicacion(parseFloat(idt1),parseFloat(idt2));

//     document.getElementById("idt3").value = result2;
// }

// function realizaMultiplicacion(a,b){
//     return a*b;
// }


///////////////////////



// function multiplicaButon() {
//     let result = 0;
//     if ((idt1.value) == "")
//         result = multiplica(parseFloat(idt2.value));
//     else if ((idt2.value) == "")
//         result = multiplica(parseFloat(idt1.value));
//     else ((idt1.value) == "" && (idt2.value) == "")
//     result = multiplica(idt1.value * idt2.value);

//     document.getElementById("idt3").value = result;
// }

// function multiplica(op1,op2){
// if((!op1)&&(!op2))
//     alert("Debe introducir algun valor");
// else{
//     let op1_dentero = op1 || 1;
//     let op2_dentero = op2 || 1;

//     result= op1_dentero * op2_dentero;
// }
// return result;
// }


//multiplica(2,3,4,5,6);

// function multiplica(){
//     let result = 1;

//     for(op in arguments){
//         result *= op;
//     }
//     h11.innerHTML =result;
// }

//parametro resto
// function multiplica(op1,op2, ...resto){
//     let result = op1 * op2;

//     console.log(resto);

//     for (op of resto){
//         result *= op;
//     }
//     h11.innerHTML =result;
// }



/**
 * Devuelve  la media de las notas si el primer parametro
 * es un booleano a true. En caso contrario, devuelve suspenso
 */


// let myArray2 = [true, 5, 7, 9];

// function calculaMedia() {
//     let result = 0;
//     if ((typeof arguments[0]) == "boolean" && arguments[0]) {
//         for (let i = 1; i < arguments.length; i++)
//             if ((typeof arguments[i]) == "number")
//                 result += arguments[i];

//         result /= (arguments.length - 1);

//         h11.innerHTML = "Media: " + result;
//     }
//     else {
//         h11.innerHTML = "suspenso";
//     }

// }


//GENERADORES (NO CAEN) CONTADOR QUE DEVUELVE LOS BOOLEANOS
// let myArray4 = [1, true, 3, "pepe", 5, false, false, 8, 9, 10];

// let counter = contadorFuction();
// let data = counter.next();

// while (!data.done){

//     h11.innerHTML += "<br>"+data.value + ", ";
//     data = counter.next();
// }


// function* contadorFuction() {
//     let i = 0;
//     while(i <myArray4.length){
//         if(typeof myArray4[i] === "boolean")
//             yield myArray4[i];

//         i++;
//     }
// }


//FUNCUCIONES ANONIMAS
//b1.onclick = multiplicaButon;
let h11 = document.getElementById("h11");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
var idt1 = document.getElementById("idt1");
var idt2 = document.getElementById("idt2");

b1.onclick =function() {
    idt3.value= parseFloat(idt2.value) * parseFloat(idt1.value);
}

//function main 
// document.body.onload = function() {
//     alert("EMPEZANDO.....");
// }

//operador arrow 
// a = "pepe";
// b="garcia";
// document.body.onload = () => {
//     alert("EMPEZANDO....."+a+b);
// }

// //Cada uno manda un tipo de dato por el tipo de llamada que hace 
// b1.onclick=() => {
//         alert("EMPEZANDO....."+this);
//         console.log("arguments en => es : "+arguments);
// }

// b1.onclick= function() {
//     idt3.value=this;
// }

myArray2=[true, false, 1,4,"pepe"];

// for ( i in myArray2){
//     h11.innerHTML += myArray[i]+", ";
// }

//VALIDAR PASSDOWORD DE CUAER LADP.
let login = document.getElementById("login");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let error2 = document.getElementById("h11");
b1.onclick= function(){
try{

    if(login.value == "")throw "El campo login no puede estar vacio";
    else if(password.value == "")throw "El campo password no puede estar vacio";
    else if(password2.value == "")throw "Repite la contraseña ";
    else if(password.value != password2.value)throw "la contraseñas no coinciden";
    else alert("Usuario registrado correctamente");
    

}catch (err){
    let error = document.getElementById("error");
    error.innerHTML = "error: " + err;
}
finally{
    login.value = "";
    password.value = "";
    password2.value = "";
    error2.value = "register";
}

 }


