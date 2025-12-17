let info = document.getElementById("info");

/**PRIMERA PROMESA */
//resolve--> cuando la promesa termina bien mete los datos ahi 
//reject --> cuando la promesa termina mal mete los errrores ahi 

            // let myPromise = new Promise(function(resolve,reject) {

            //     //ejecuto codigo asíncrono....

            // });

            // myPromise.then(function(){
            //     //se ejecuta  cuando la promesa ha termiando sin errores...
            // },function () {
            //     //se ejecuta cuando la promesa ha termiando con errores
            // });

/**
 * tener en encuenta que hay diferentes sintaxis, la que mas le gusta a joseluis es la siguiente -->
*/
            //console.log("iniciando"); //para ver funcionamiento del codigo

            // let myPromise2 = new Promise(function(resolve,reject) {

            //     //ejecuto codigo asíncrono....
            //    setTimeout(function(){
                    
            //      console.log("Ejecutando Promesa");
            //     // resolve();//si creemos que va a terminar bien  
            //      reject(5);//si creemos que va a terminar mal, solo permite pasarle un dato

            //    },2000);

            // }).then(function(){

            //     //se ejecuta  cuando la promesa ha termiando sin errores...
            //     console.log("Promesa ha terminado bien");


            // }).catch(function (error) {

            //     //se ejecuta cuando la promesa ha termiando con errores
            //     console.log("Proemsa ha terminado mal con valor:"+error);

            // });

            // s


/**EJEMPLO DOS */

//Si el dato metido es mayor de 100--> fallo // si el dato es menor 100--> devolver bien 
//Podria haber metido el onclick dentro como tenia hecho, porque el onclick es Asíncrono 
        // let input = document.getElementById("num");
        // let boton = document.getElementById("boton");

        // boton.onclick=function(){
        // let myPromise3 = new Promise(function(resolve,reject) {

        //         if(input.value>100){
        //             throw Error("Cantidad mayor de 100");
        //         }else{
        //         resolve(input.value)
        //         }
            

        // }).then(function(resultado){

        //         info.innerText="Cantidad"+resultado;

        // }).catch(function (error) {

        //     info.innerHTML="<span style='color:red;'>"+error+"</span>";

        // });

        // }




/**VAMOS A PROBAR VARIOS TIPOS DE PROMESAS  */
        // let myPromise4 = new Array();

        // myPromise4.push(Promise.resolve(true));
        // myPromise4.push(Promise.resolve(5));
        // myPromise4.push(Promise.resolve("pepe"));
        // myPromise4.push(Promise.resolve(45));
        // myPromise4.push(Promise.reject(-1));
        // myPromise4.push(Promise.reject(false));

        // //podemos ponerle a Promise.all(myPromise4) el .then y conectarlo directamente

        // //el punto all funciona si todas las promesas del array son correctas
        // let resultados = Promise.all(myPromise4);  

        // resultados.then(function(okvalue){
        //     info.innerHTML=okvalue;

        // }).catch(function(err){
        //         info.innerHTML=err;
        // })


//ANY-->la primera promesa que se resuelva correctamente.
        // let myPromise5 = new Array();

        // myPromise5.push(Promise.reject(true));
        // myPromise5.push(Promise.reject(5));
        // myPromise5.push(Promise.reject("pepe"));
        // myPromise5.push(Promise.reject(45));
        // myPromise5.push(Promise.reject(-1));
        // myPromise5.push(Promise.reject(false));


        // let resultados2 = Promise.any(myPromise5);  

        // resultados2.then(function(okvalue){
        //     info.innerHTML=okvalue;

        // }).catch(function(err){
        //         info.innerHTML=err;
        // })

//RACE -->devolver el resultado de la primera promesa que termine, sea éxito o error.
    // let myPromise5 = new Array();

    // myPromise5.push(Promise.reject(true));
    // myPromise5.push(Promise.resolve(5));
    // myPromise5.push(Promise.reject("pepe"));
    // myPromise5.push(Promise.resolve(45));
    // myPromise5.push(Promise.reject(-1));
    // myPromise5.push(Promise.resolve(false));


    // let resultados2 = Promise.race(myPromise5);  

    // resultados2.then(function(okvalue){
    //     info.innerHTML=okvalue;

    // }).catch(function(err){
    //         info.innerHTML=err;
    // })

//ALLSETTLED -->esperar a que todas las promesas terminen, sin importar si se cumplen o fallan.
    let myPromise5 = new Array();

    myPromise5.push(Promise.reject(true));
    myPromise5.push(Promise.resolve(5));
    myPromise5.push(Promise.reject("pepe"));
    myPromise5.push(Promise.resolve(45));
    myPromise5.push(Promise.reject(-1));
    myPromise5.push(Promise.resolve(false));


    let resultados2 = Promise.allSettled(myPromise5);  

    resultados2.then(function(okvalue){
        info.innerHTML=okvalue;

    }).catch(function(err){
            info.innerHTML=err;
    })