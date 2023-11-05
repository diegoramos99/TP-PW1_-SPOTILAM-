// ---cambiar el nombr dde usuario por el del que inicio sesion
const usuariosRegistrados=JSON.parse(localStorage.getItem("usuarios"))
for (const usuario of usuariosRegistrados) {
    if (usuario.enLinea == true) {
        const nombreUsuario = document.querySelector(".usuario")
        nombreUsuario.textContent = ""
        nombreUsuario.textContent = usuario.usuario
    }
}
// pasar a falso el estado de enLinea del usuario cuando cierra sesion 
const cerarSecion=document.querySelector("#cerarSecion")
cerarSecion.addEventListener("click", function () {
    for (const usuario of usuariosRegistrados) {
        if (usuario.enLinea == true) {
            usuario.enLinea = false;
            break
        }
    }
    localStorage.setItem("usuarios",JSON.stringify(usuariosRegistrados))
    }
)
// cancelar vuelve a home

const cancelar=document.querySelector("#cancelar")
cancelar.addEventListener("click",function(){
    window.location.href="../views/inicio.html"
})


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
