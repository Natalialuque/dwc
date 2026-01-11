/**EL cafe solo cuesta 1.5, leche cuesta 2, 
capuchino 2.5, si hay mas de 5 cafes tiene un descuento del 10%, 
si el pedido es para llevar hay que sumarle un 20%  **/


//variables 
let tipoCafe  = document.getElementById("tipoCafe");
let cantidad  = document.getElementById("cantidad");
let paraLlevar  = document.getElementById("paraLlevar");
let procesarPedido  = document.getElementById("procesarPedido");
let resultado  = document.getElementById("resultado");



procesarPedido.onclick=function(){
 
    let precio=0;

    switch(tipoCafe.value){
        case "solo":
            precio = 1.5;
            break;
        case "leche":
            precio=2;
            break;
        case "capuchino":
            precio=2.5;
            break;
        default: 
            return "error";
    }

    //las cantidades 
    if(cantidad.value>=5){
        precio = (precio*cantidad.value) -(precio*0.10);
    }else{
        precio = precio *cantidad.value;
    }


    //si es para llevar o no es oara llevar 
    if(paraLlevar.checked){
        precio = precio +(precio*0.2);
    }else{
        precio= precio;
    }

    //resultado final 
    resultado.innerHTML=precio +"€";

}
