
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



info.innerText = document.getElementById("lista").options[document.getElementById("lista").selectedIndex].value;
info.innerText += " - " + document.getElementById("lista").options[document.getElementById("lista").selectedIndex].text;

let interval = setInterval(function () {
    if (progress1.value < progress1.max)
        progress1.value ++;
    else
        clearInterval(interval);
}, 50);

meter1.value += 13;
info.innerHTML = meter1.value; 