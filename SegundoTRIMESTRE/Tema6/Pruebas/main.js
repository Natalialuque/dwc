let info = document.getElementById("info");

/**PRIMERA PROMESA */
//resolve--> cuando la promesa termina bien mete los datos ahi 
//reject --> cuando la promesa termina mal mete los errrores ahi 

let myPromise = new Promise(function(resolve,reject) {

    //ejecuto codigo asíncrono....

});

myPromise.then(function(){
    //se ejecuta  cuando la promesa ha termiando sin errores...
},function () {
    //se ejecuta cuando la promesa ha termiando con errores
});

/**
 * tener en encuenta que hay diferentes sintaxis, la que mas le gusta a joseluis es la siguiente -->
*/
console.log("iniciando"); //para ver funcionamiento del codigo

let myPromise2 = new Promise(function(resolve,reject) {

    //ejecuto codigo asíncrono....
   setTimeout(function(){
        
     console.log("Ejecutando Promesa");
    // resolve();//si creemos que va a terminar bien  
     reject(5);//si creemos que va a terminar mal, solo permite pasarle un dato

   },2000);




}).then(function(){

    //se ejecuta  cuando la promesa ha termiando sin errores...
    console.log("Promesa ha terminado bien");


}).catch(function (error) {

    //se ejecuta cuando la promesa ha termiando con errores
    console.log("Proemsa ha terminado mal con valor:"+error);

});

console.log("Sigo ejecutando codigo fuera de la promesa");
