/*EJERCICIO CAFE*/

//variables 
let tipoCafe = document.getElementById("tipoCafe");
let cantidad = document.getElementById("cantidad");
let paraLlevar = document.getElementById("paraLlevar");
let botonProcesarPedido= document.getElementById("procesarPedido");
let resultado = document.getElementById("resultado");

//EJERCICIO 

function Check (){
    return paraLlevar ? paraLlevar.checked : false;
}

botonProcesarPedido.onclick = function() {
    let precio = 0;

    switch(tipoCafe.value){
        case "solo":
            precio = 1.5;
            break;
        case "leche":
            precio = 2;
            break;
        case "capuchino":
            precio = 2.5;
            break;
        default:
            precio =0;
             break;
    }

    let descuento= 0;
    if(cantidad.value>5){
        descuento = 0.10;
    }else{
        descuento = 1;
    }

    if(Check())
        resultado.innerHTML = (((precio* cantidad.value)+(0.2*cantidad.value))*descuento);
    else
        resultado.innerHTML = precio * cantidad.value *descuento;

}

