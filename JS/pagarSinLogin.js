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
const cerarSecion=document.getElementById("cerrarSecion")
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

// agrega el nombre del plan elegido
const titulo=document.querySelector(".titulo")

const URLbuscada=new URL(window.location.href)
const nombrePlan=URLbuscada.searchParams.get("plan")
console.log(nombrePlan);
titulo.textContent+=nombrePlan

// calidacion de pagar
const CVC=document.querySelector("#CVC")
const numeroTargeta=document.querySelector("#NumeroTargeta")
const pagar=document.querySelector("#pagar")
pagar.addEventListener("click",function(){
    console.log(numeroTargeta.value.length);
        if (CVC.value>999||CVC.value<1 || numeroTargeta.value.length!=16) {
            alert("algun valor es incorrecto,verifique que los detos hayan sido los correctos")
        }else{
         for (const usuario of usuariosRegistrados) {
            if (usuario.enLinea===true) {
                usuario.tienePremium=true
            }
         }
         localStorage.setItem("usuarios",JSON.stringify(usuariosRegistrados))

        }
})