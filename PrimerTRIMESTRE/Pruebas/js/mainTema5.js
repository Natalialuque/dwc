
let info = document.getElementById("info");
//document.getElementById("lista").focus();
const f1 = document.getElementById("f1");
const progress1 = document.getElementById("progress1");
const meter1 = document.getElementById("meter1");


// info.innerHTML = document.forms[0].elements[0].value;


// document.getElementById("login").onchange = function () {
//     console.log("Change");
// }

// document.getElementById("login").onfocus = function () {
//     this.style.border = "1px solid red";
// }
// document.getElementById("login").onblur = function () {
//     this.style.border = "1px solid black";
// }

// document.getElementById("lista").onchange = function () {
//     console.log(this.value);
// }

// document.getElementById("lista").onfocus = function () {
//     this.style.border = "4px solid red";
// }
// document.getElementById("lista").onblur = function () {
//     this.style.border = "1px solid black";
// }

// for (elem of document.getElementsByName("turnos"))
//     if (elem.checked) {
//         info.innerText = elem.value;
//     }



// info.innerText = document.getElementById("lista").options[document.getElementById("lista").selectedIndex].value;
// info.innerText += " - " + document.getElementById("lista").options[document.getElementById("lista").selectedIndex].text;

// let interval = setInterval(function () {
//     if (progress1.value < progress1.max)
//         progress1.value ++;
//     else
//         clearInterval(interval);
// }, 50);


// meter1.value += 13;
// info.innerHTML = meter1.value; 

document.body.onresize= function(){
    info.innerHTML= window.innerWidth+" x "+window.innerHeight;
}

document.getElementById("main1").ondblclick = changeColor;
document.getElementById("main1").onmouseover = changeColor;
document.getElementById("main1").onmouseout = changeColor;

document.getElementById("aside1").ondblclick = changeColor;
document.getElementById("aside1").onmouseover = changeColor;
document.getElementById("aside1").onmouseout = changeColor;

let pMain = document.getElementById("pMain");
let pAside = document.getElementById("pAside");

function changeColor(ev) {
    if (this.id == "main1") 
        switch(ev.type) {
            case "dblclick":
                this.style.backgroundColor="#F2BDB3";
                pMain.innerText = "Doble click";
            break;
            case "mouseover":
                this.style.backgroundColor="#914E41";
                pMain.innerText = "Ratón dentro";
            break;
            case "mouseout":
                this.style.backgroundColor="#C92202";
                pMain.innerText = "Sale ratón";
            break;
        }
    else // aside
        switch(ev.type) {
            case "dblclick":
                this.style.backgroundColor="#B9DCEB";
                pAside.innerText = "Doble click";
            break;
            case "mouseover":
                this.style.backgroundColor="#3E7A94";
                pAside.innerText = "Ratón dentro";
            break;
            case "mouseout":
                this.style.backgroundColor="#044561";
                pAside.innerText = "Sale ratón";
            break;
        }
}


/**Viene muy bien porque asi no me recarga la pagina , ni me borra los datosintroducidos por formulario */
document.getElementById("bSend").addEventListener("click", function (ev) {
    ev.preventDefault();
    // ....
})