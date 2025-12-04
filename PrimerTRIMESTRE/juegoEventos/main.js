/**JUEGO JOSELUIS */

//comodo porque nos ahorramos hacer el create node para generarlos y podemos meterle los stilos directamente
const Divs = [{elem:"div", id:"div1", style:"display:inline-block;width:50%;height:50%;"},
    {elem:"div", id:"div2", style:"display:inline-block;width:50%;height:50%;"},
    {elem:"div", id:"div3", style:"display:inline-block;width:50%;height:50%;"},
    {elem:"div", id:"div4", style:"display:inline-block;width:50%;height:50%;"}
];

//para ir recorriendo e ir aplicando
for (div of Divs) {
    let d = document.createElement(div.elem);
    d.style = div.style;
    d.id = div.id;
    document.body.appendChild(d);
    d.addEventListener("mousemove", getCoord);
}

function getCoord(event) {

    const x = event.pageX;
    const y = event.pageY;
    const widthPage = window.innerWidth;
    const heightPage = window.innerHeight;

    // Div superior - izquierdo: amarillo
    if ((x < (widthPage /2)) && (y < (heightPage/2))) {
        document.getElementById("div1").style.backgroundColor = "yellow";

        // Apago...
        document.getElementById("div2").style.backgroundColor = "white";
        document.getElementById("div3").style.backgroundColor = "white";
        document.getElementById("div4").style.backgroundColor = "white";
    }
    // Div superior - derecho: rojo
    else if ((x >= (widthPage /2)) && (y < (heightPage/2))) {
        document.getElementById("div2").style.backgroundColor = "red";

        // Apago...
        document.getElementById("div1").style.backgroundColor = "white";
        document.getElementById("div3").style.backgroundColor = "white";
        document.getElementById("div4").style.backgroundColor = "white";
    }
    // Div inferior - izquierdo: azul
    else if ((x < (widthPage /2)) && (y >= (heightPage/2))) {
        document.getElementById("div3").style.backgroundColor = "blue";

        // Apago...
        document.getElementById("div1").style.backgroundColor = "white";
        document.getElementById("div2").style.backgroundColor = "white";
        document.getElementById("div4").style.backgroundColor = "white";
    }
    // Div inferior - derecho: verde
    else if ((x > (widthPage /2)) && (y >= (heightPage/2))) {
        document.getElementById("div4").style.backgroundColor = "green";

        // Apago...
        document.getElementById("div1").style.backgroundColor = "white";
        document.getElementById("div2").style.backgroundColor = "white";
        document.getElementById("div3").style.backgroundColor = "white";
    }
}

 


   