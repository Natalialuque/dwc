// let info = document.getElementById("info");

// let obj1={
//     nombre:"Pepe",
//     edad:34,
//     email:"pepe@gamil.com"
// }

// //define objetos, el writable nos permite modificar obviando las protecciones 
// Object.defineProperty(obj1,"color",{writable:true ,enumerable:true, value:"blue"});
// obj1.color="yellow";


// let obj2= new Object({
//     nombre:"Maria",
//     edad:24,
//     email:"maria@gamil.com"
// });

// Object.defineProperties(obj2, {
//     "color" : {writable: true, enumerable: false, value:"red"},
//     "notas": {configurable:true,writable: true, enumerable:true, value: [6,7,8]}

// });
// obj2.colordeFondo ="green";
// Object.preventExtensions(obj2); 

// if(Object.isExtensible(obj2)){
//     obj2.colordeFondo="green"
// }
// else alert("No es extensible")

// Object.seal(obj2);
// delete obj2.notas;

// Object.freeze(obj2); //lo que haga despues de esto no lo realiza


//let tmpObj = obj2; //aunque hagamos una copia de un objeto congelado, no podemos realizar cambios. Para haccer esto tenemos que crear el nuevo objeto y pasarle las propiedades 

// let tmpObj = new Object;
// for(prop of Object.getOwnPropertyNames(obj2)){
//     console.log("Propiedad"+prop+". value:"+obj2[prop]);
// }

// tmpObj.aprobado = true;
// tmpObj.color="Broown";

// console.log(tmpObj);


//haz que estos objetos que vienen de una api de 3 no se le puedan añadir propiedades hasta que este en modo administrador (pregunta examen)

//info.innerHTML += "Datos pepe:"+obj1.nombre+" ,"+obj1.edad+" ,"+obj1.email+", "+obj1.color+"<br>";
//info.innerHTML += "Obj1.nombre es enumerable:"+obj1.nombre.enumerable+"<br></br>";

//info.innerHTML += "Datos maria:"+obj2.nombre+" ,"+obj2.edad+" ,"+obj2.email+", "+obj2.color+"<br>";
//info.innerHTML += "Obj2.nombre es enumerable:"+obj2.nombre.enumerable+"<br>";

// console.log("Recorriendo obj1:")
// for(prop in obj1){
//     console.log(obj1[prop])
// }

// console.log("Recorriendo obj2:")
// for(prop in obj2){
//     console.log(obj2[prop])
// }
/*for of no sirve para objetos*/

// console.log("Recorriendo obj2:")
// for(prop of Object.keys(obj2))
//     console.log("Propiedad"+prop+". value:"+obj2[prop]);

//////////////////////////////////////////////////////

//eval("document.open();document.write('<h1>web eliminada</h1>')");

//opes mates
let info = document.getElementById("info");
//info.innerHTML=Math.floor(4.1);

//String
let myString = "loren";
//info.innerHTML= myString.charAt(100);
//info.innerHTML = myString.indexOf("a");

// info.innerHTML = myString.charCodeAt("a");
// info.innerHTML = String.fromCharCode("0x0bf0");
// info.innerHTML=String.fromCodePoint("0x0bf0");

// for(let encontrado of myString.matchAll("en")){
//     console.log(encontrado.index);
// }

// let mySplice = myString.slice(100,150);
// console.log(mySplice); 


let myArray = new Array(1,true,{nombre:"pepe", apellidos:"Garcia perez"},45.687,Math.PI,false);

//myArray[10001]="Mery"; //esto no se suele hacer porque da errores

// myArray.push([1,2,3,4,5]); //añade al final
// myArray.push(2025);

// myArray.pop(); //solo elimina el ultimo

// myArray.unshift("hola"); //añade al principio
// myArray.shift();//borra al principio

//myArray.reverse();//gira el array
//let prueba = myArray.sort(); //ordena


myArray.splice(3,2,false,9999,"Pepe","pepe@mail.com"); //añade o borra en cualquier sitio

// for ( let i in myArray){
//     if(i == myArray.length -1){
//          info.innerHTML += myArray[i];
//     }else{
//             info.innerHTML += myArray[i]+" - ";
//     }
// }

/**
 * numeros que sean negativos true y false 
 * y viceversa. Los string se le antepongo Nombre
 */

let myArray1 = new Array(1,true,"pepe",45.58,"maria",false);

// let myArrayResult = myArray1.map(function (elem){ //el break no es necesario como tal pero nos sirve por si hacemos alguna modificacion ya tenerlo

//     switch(typeof elem){
//          case "number":
//              return(elem * -1);
//              break;
//          case "boolean":
//             return !elem;     
//             break;        
//          case "string":
//             return "Nombre: " + elem;
//             break;
//     }
// })

// info.innerHTML=myArrayResult;


// let myArrayResult = new Array();

// for(let i in myArray1){
//     switch(typeof myArray1[i]){
//         case "number":
//             myArrayResult.push(myArray1[i]+ -1);
//             break;
//         case "boolean":
//             myArrayResult.push(!myArray1[i]);
//             break;
//         case "string":
//             myArrayResult.push("Nombre: "+myArray1[i])
//             break;
//     }
// }

// info.innerHTML= myArrayResult;

/**FOREACH */
// myArray1.forEach(function(elem,indice,arrayActual){    

//     console.log("Array completo:"+arrayActual);

//     info.innerHTML +="<br>Elemento actual es: "+elem+" , situado en la posicion: "+indice;
// });


/**HORAS */
//let fecha = document.getElementById("fecha");

    let dateNow = new Date();
    let myDate = new Date(0);


    //info.innerHTML = myDate;

    //info.innerHTML = "La hora en tu ciudad es " + dateNow.toUTCString() + " añadiendo un offset de " + dateNow.getTimezoneOffset();

    //si mas de las 8 de la tarde que pongo colores de la web mas oscuros 
        // let dateOscuro = new Date();
         let main = document.getElementById("main");

        // if((dateOscuro.getHours()>=20)  && ( dateOscuro.getMonth()>=9 || dateOscuro.getMonth()<= 2) ){
        //     main.style.backgroundColor= "black";
        // }else{
        //     main.style.backgroundColor="white";
        // }

        // let fecha = document.getElementById("fecha");

        // let bCalcula = document.getElementById("bCalcula").onclick=function(){

        //     let dateNow = new Date();
        //     let datebirth = new Date(fecha.value);
        //     let result = dateNow - datebirth/1000;

        //     info.innerHTML="Llevas vivo "+(result) +" segundos";

        // };


/*NAVEGADORES*/
//info.innerHTML= "Numero de nucleos: "+navigator.hardwareConcurrency;
// info.innerHTML= "Numero de memoria: "+navigator.devicesMemory;
// info.innerHTML= "Numero de nucleos: "+screen.orientation.angle;


/*WINDOWS*/
    // document.body.addEventListener("resize",()=>{
    //     info.innerHTML = window.innerWidth +"-"+window.innerHeight;
    // });



    //Cambia el color del main cuando hayan paado 3 segundos 

        // setTimeout(function() {
        //     main.style.backgroundColor= "rgb(128, 13, 13)";
        // }, 3000);

    //ejecuta la funcion de arriba que cambie cada 5 segundos de color NO FUNCIONA BIEN MIRAR FINDE 

        // let backgroundColorMain = "rgb(167,154,17)";
        // let backgroundColorMain2 = "rgb(128, 13, 13)";
        // //setInterval ejecuta cada 5 segundos
        //  let intervalo =setInterval(function(){
        //     if(main.style.backgroundColor== backgroundColorMain){
        //         main.style.backgroundColor = backgroundColorMain2;
        //     }else{
        //          main.style.backgroundColor = backgroundColorMain;

        //     }
        // },2000)

        // document.getElementById("paraIntervalo").onclick = function(){
        //     clearInterval(intervalo);
        // }

         let wAux=undefined;

//          document.getElementById("bAbrir").onclick = function (){
//               wAux = window.open("./src/users.html","_blank_","width=300,height=400,left=400px,top=100px");
//          }

//        document.getElementById("bMoverTo").onclick = function () {
//     if ((wAux) && (!wAux.closed)) {
//         wAux.moveTo(200, 200);
//         wAux.focus();
//     }
// }

// document.getElementById("bMoverBy").onclick = function () {
//     if ((wAux) && (!wAux.closed)) {
//         wAux.moveBy(200, 200);
//         wAux.focus();
//     }
// }

// document.getElementById("bResizeTo").onclick = function () {
//     if ((wAux) && (!wAux.closed)) {
//         wAux.resizeTo(400, 400);
//         wAux.focus();
//     }
// }

// document.getElementById("bResizeBy").onclick = function () {
//     if ((wAux) && (!wAux.closed)) {
//         wAux.resizeBy(400, 400);
//         wAux.focus();
//     }
// }

// document.getElementById("bPrint").onclick = function () {
//     if ((wAux) && (!wAux.closed)) {
//         wAux.print();
//         wAux.focus();
//     }
// }

// document.getElementById("aEnviarLogin").onclick = function () {
//     if (!wAux.closed) {

//         wAux.document.getElementById("loginTregulart").value = document.getElementById("login").value;

//         wAux.focus();
//     }
//}

//cockies (mas importante 2º)
//document.cookie="name=pepe; max-age=2000000";

//numeros de formularios que hay 
//alert(document.forms.length);

//
// let opt = document.createElement("option");
// opt.innerHTML = "Alemania"
// document.getElementById("lista").appendChild(opt);

// document.forms[0].style.backgroundColor = "pink"
// document.forms[1].style.backgroundColor = "black"


// info.innerHTML="URL:"+document.location+"Referencia datos:"+document.referrer;


//HISTORY
// info.innerHTML="Numero de paginas visitadas:"+history.length;
// info.innerHTML +="<br>Pagina actual en el historial:"+history.state;
// info.innerHTML +="<br>Url actual:"+document.location;
// info.innerHTML +="<br>Despues de ir una pagina atras Url actual:"+document.location;


// info.innerHTML="Numero de webs visitadas:"+history;

// document.getElementById("forward").onclick=function(){
//     history.forward();
// }

// document.getElementById("back").onclick=function(){
//     history.back();
// }



///EXPRESIONES REGULARES 
let text = document.getElementById("texto");

// let er1 = new RegExp("[0-9]{1,2}", "i");
// let er2 = /\d{1,2}/g;

// let tmpIndex = er2.lastIndex;

// while (er2.test(text.innerText)) {
//     console.info("LastIndex después de test: " + er2.lastIndex);
    
//     er2.lastIndex = tmpIndex;

//     let result = er2.exec(text.innerText);
//     console.info("LastIndex después de exec: " + er2.lastIndex);

//     console.log(result);
//     info.innerHTML += "Encontrado " + result["0"] + " en la posición " + result.index + "<br>";
    
//     tmpIndex = er2.lastIndex;
// }

// let er1 = new RegExp("[0-9]{1,2}", "i");
// let er2 = /\d{1,2}/;

// if(text.match(er2)) 
//     info.innerHTML = "Encontrado";
// else 
//     info.innerHTML = "No Encontrado";


// let er1 = new RegExp("\d{1,2}", "g");
// let er2 = /\d{1,2}/g;

// if (text.innerText.match(er2)) 
//     text.innerText = text.innerText.replaceAll(er2,"<strong style='color:red'><u>REF</u></strong>");



//PASWORD 
    //Login--> EMPIECE POR MAYUSCULA(al menos una), entre D-R
    //Contraseña -->CONTENGA al menos 2 SIMBOLOS (-,_,$,(,))

    let login = document.getElementById("login");
    let password = document.getElementById("password");
    
    document.getElementById("bLogin").onclick = function(){
        let erLogin = /^[D-R][a-zA-Z0-9]+$/        
        //empieza entre D-R y le sigue cualer caracter o nuemero (minimo dos caracteres)

        let erContrasena = /^(?=(?:.*[-_$()]){2,})[a-zA-Z0-9\-_$()]+$/;

        if(!erLogin.test(login.value)){
            alert("Login incorrecto, debe tener al menos una mayuscula y empezar entre D-R");
        }

        if(!erContrasena.test(password.value)){
            alert("Contraseña incorrecta, debe tener al menos dos simbolos (-,_,$,(,))");
        }

    }
