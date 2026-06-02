/**
 * Cuando abramos esta pagina debe salir cargada la pagina de registro 
 */
window.onload=function(){
        window.open(
            "registro.html",
            "registro",
            "width=500,height=400,top=100,left=100"
        );
};

/**
 * Recibimos el usuario y lo metemos 
 */
window.addEventListener("message", function (e) {
    if (e.data.tipo === "usuario") {
        let label = document.getElementsByTagName("label")[0];
        label.textContent = "Usuario registrado: " + e.data.nombre;
    }
});


/**
 * Dependiendo de la opcion que elijamos se amplian los formularios
 */
const select = document.querySelector("select");
const body = document.body;
//nos permite ver cual selecionamos
select.addEventListener("change", () => {
    if(select.value.trim()=="empleado"){
        let div = document.createElement("div");
        let labelNumeIncidencia = document.createElement("label");
        labelNumeIncidencia.textContent ="numero incidencia";
        div.appendChild(labelNumeIncidencia);
        let textNumIncidencia = document.createElement("text");
        div.appendChild(textNumIncidencia);
        
        body.appendChild(div);

    }
});