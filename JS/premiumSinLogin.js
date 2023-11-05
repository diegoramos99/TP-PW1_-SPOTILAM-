// inhabilitar el avanzar si no se selecciono un plan
const avanzar=document.querySelector("#avanzar")
const opcion1=document.querySelector("#opcion1")
const opcion2=document.querySelector("#opcion2")    
const opcion3=document.querySelector("#opcion3")  
const opciones=document.querySelectorAll("#opcion")

opciones.forEach(opcion => {
    opcion.addEventListener("click",function(){
        avanzar.removeAttribute("disabled");
        console.log("se habilito el boton 'avanzar'");
    })
});