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
    "color" : {writable: true, enumerable: true, value:"red"},
    "notas": {writable: true, enumerable:true, value: [6,7,8]}

});


info.innerHTML += "Datos pepe:"+obj1.nombre+" ,"+obj1.edad+" ,"+obj1.email+", "+obj1.color+"<br>";
//info.innerHTML += "Obj1.nombre es enumerable:"+obj1.nombre.enumerable+"<br></br>";



info.innerHTML += "Datos maria:"+obj2.nombre+" ,"+obj2.edad+" ,"+obj2.email+", "+obj2.color+"<br>";
//info.innerHTML += "Obj2.nombre es enumerable:"+obj2.nombre.enumerable+"<br>";

console.log("Recorriendo obj1:")
for(prop in obj1){
    console.log(obj1[prop])
}

console.log("Recorriendo obj2:")
for(prop in obj2){
    console.log(obj2[prop])
}