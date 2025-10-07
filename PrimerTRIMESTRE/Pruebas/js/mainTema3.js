let info = document.getElementById("info");

let obj1={
    nombre:"Pepe",
    edad:34,
    email:"pepe@gamil.com"
}

//define objetos, el writable nos permite modificar obviando las protecciones 
Object.defineProperty(obj1,"color",{writable:true ,enumerable:true, value:"blue"});
obj1.color="yellow";


let obj2= new Object({
    nombre:"Maria",
    edad:24,
    email:"maria@gamil.com"
});

Object.defineProperties(obj2, {
    "color" : {writable: true, enumerable: false, value:"red"},
    "notas": {configurable:true,writable: true, enumerable:true, value: [6,7,8]}

});
obj2.colordeFondo ="green";
Object.preventExtensions(obj2); 

if(Object.isExtensible(obj2)){
    obj2.colordeFondo="green"
}
else alert("No es extensible")

Object.seal(obj2);
delete obj2.notas;

Object.freeze(obj2); //lo que haga despues de esto no lo realiza


//let tmpObj = obj2; //aunque hagamos una copia de un objeto congelado, no podemos realizar cambios. Para haccer esto tenemos que crear el nuevo objeto y pasarle las propiedades 

let tmpObj = new Object;
for(prop of Object.getOwnPropertyNames(obj2)){
    console.log("Propiedad"+prop+". value:"+obj2[prop]);
}

tmpObj.aprobado = true;
tmpObj.color="Broown";

console.log(tmpObj);


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