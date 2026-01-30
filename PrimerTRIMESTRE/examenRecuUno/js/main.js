// Array con las comidas del menú principal:
var comidas = new Array();

var entrantes = [
    {entrante: "Turrón salada de queso y frutos secos"},
    {entrante: "Piruletas crujientes de parmesano"},
    {entrante: "Hummus con remolacha"},
    {entrante: "Mejillones a la cerveza con bacon"},
    {entrante: "Croquetas de atún"},
    {entrante: "Quesadilla de chorizo criollo con aguacate"},
    {entrante: "Ensalada de endivias, surimi y salsa roquefort"},
    {entrante: "Guacamole"},
    {entrante: "Pan casero con aceite de oliva y sal negra en escamas"},
    {entrante: "Verduras rellenas de arroz"}
];

comidas.push(entrantes);

var comidaCasera = [
    {casera: "Sopa de pollo"},
    {casera: "Sopa de verdura"},
    {casera: "Crema de calabaza"},
    {casera: "Arroz con pollo"},
    {casera: "Paella de mariscos"},
    {casera: "Arroz caldoso de pescado"},
    {casera: "Pollo al horno"},
    {casera: "Conejo al ajillo"},
    {casera: "Potaje de lentejas o abichuelas"},
    {casera: "Pescado al horno"}
];

comidas.push(comidaCasera);

var comidaOriental = [
    {oriental: "Ramen"},
    {oriental: "Rollitos de primavera vegetales"},
    {oriental: "Atún con arroz"},
    {oriental: "Wok de verduras y fideos chinos"},
    {oriental: "Arroz al estilo oriental"},
    {oriental: "Nishime de verduras"},
    {oriental: "Solomillo de cerdo agridulce"},
    {oriental: "Noodles de arroz con gambas"},
    {oriental: "Rollitos de alga nori con con verduras en tempura"}
];

comidas.push(comidaOriental);

var mediterranea = [
    {medi: "Judías verdes estofadas"},
    {medi: "Gazpacho"},
    {medi: "Magro de cerdo con champiñón"},
    {medi: "Salteado de garbanzos con cebolla, guisantes y tomate"},
    {medi: "Lasaña de espinacas"},
    {medi: "Berenjena al horno"},
    {medi: "Dorada a la plancha"},
    {medi: "Pizza mediterránea"},
    {medi: "Tortilla de pimiento y cebolla"}
];

comidas.push(mediterranea);


/** PUNTO 1:
 * abrir pestaña de registro al clickar el boton
 * */
const botonRegistro = document.getElementById("registro");

botonRegistro.onclick=function(){

    const ventana = window.outerWidth
    console.log(ventana/2); //esto saca 683

    window.open(
        "./registro.html", 
        "registro", 
        "width=400,height=400,left=683,top=100");

}


/**PUNTO 4:
 * mostrar el nombre del usuario logeado
 */
// Obtener usuario compartido desde la ventana principal
window.addEventListener("message", function (e) {
    if (e.data.tipo === "login") {
        let label = document.getElementsByTagName("label")[0];
        label.textContent = e.data.tipo+":" + e.data.login;
        comprobarEnviar();
    }
});

/**PUNTO 5:
 * mostrar los paneles
 */
let menus = document.getElementsByClassName("menu");
let tipoComida = document.getElementById("tipoComida");
let comidaSelecionada=document.getElementById("comidaSeleccionada");

menus[0].onclick=function(){
    tipoComida.innerHTML="ENTRANTRES";

    for(let i=0;i<comidas.length;i++){
        console.log(mediterranea[i])
        comidaSelecionada.innerHTML=mediterranea[i];
        i++;
    }
   
}


/**PUNTO6:
 * 
 */
//hacer lo del logo 
