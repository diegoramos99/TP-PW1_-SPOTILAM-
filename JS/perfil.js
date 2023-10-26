const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios"))
const cerarSecion = document.querySelector("#cerarSecion")


// ---cambiar el nombr dde usuario por el del que inicio secion
for (const usuario of usuariosRegistrados) {
    if (usuario.enLinea == true) {
        const nombreUsuario = document.querySelector(".usuario")
        nombreUsuario.textContent = ""
        nombreUsuario.textContent = usuario.usuario
        // agregar los datos en los inputs desde el local starge

    
        const nombre=document.querySelector("#nombre").setAttribute("placeholder",usuario.usuario)
        const contraceña=document.querySelector("#contraceña").setAttribute("placeholder",usuario.nuevaContraceña)
        const repetirContraceña=document.querySelector("#repetirContraceña").setAttribute("placeholder",usuario.repetirContraceña)
        const fechaNac=document.querySelector("#fechaNac").setAttribute("placeholder",usuario.fechaNac)
        const email=document.querySelector("#email").setAttribute("placeholder",usuario.email)
        
    }
}
// pasar a falso el estado de enLinea del usuario cuando cierra secion 
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
// guardar los datos ingrresados en los inputs de perfil

const guardar=document.querySelector("#guardar")
guardar.addEventListener("click",function(e){
    // e.preventDefault()
    const nombre=document.querySelector("#nombre").value
        const contraceña=document.querySelector("#contraceña").value
        const mitadContraceña=Math.floor(contraceña.length/2)
        const segundaParte=contraceña.slice(mitadContraceña)
        const primeraParte=contraceña.slice(0,mitadContraceña)
        const contraceñaFinal=segundaParte+primeraParte
        console.log(contraceñaFinal);
        const repetirContraceña=document.querySelector("#repetirContraceña").value
        const email=document.querySelector("#email").value
        const fechaNac=document.querySelector("#fechaNac").value
        for (const usuario of usuariosRegistrados) {
            if (usuario.enLinea == true) {
                usuario.usuario=nombre
                usuario.nuevaContraceña=contraceñaFinal
                usuario.repetirContraceña=repetirContraceña
                usuario.email=email
                usuario.fechaNac=fechaNac
            }
        }
        localStorage.setItem("usuarios",JSON.stringify(usuariosRegistrados))
   
})



