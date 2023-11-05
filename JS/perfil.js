const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios"))
const cerarSecion = document.querySelector("#cerarSecion")


// ---cambiar el nombre de usuario por el del que inicio secion
for (const usuario of usuariosRegistrados) {
    if (usuario.enLinea == true) {
        const nombreUsuario = document.querySelector(".usuario")
        nombreUsuario.textContent = ""
        nombreUsuario.textContent = usuario.usuario
        // agregar los datos en los inputs desde el local starge

        const contraceñaUsuario=usuario.nuevaContraceña
    
        const nombre=document.querySelector("#nombre").setAttribute("placeholder",usuario.usuario)
        // const mitadContraceña=Math.floor(contraceñaUsuario.length/2)
        // const segundaParte=contraceñaUsuario.slice(mitadContraceña)
        // const primeraParte=contraceñaUsuario.slice(0,(mitadContraceña))
        // const contraceñaFinal=segundaParte+primeraParte
        // console.log(contraceñaFinal);
        const contraceña=document.querySelector("#contraceña").setAttribute("placeholder",usuario.repetirContraceña)
        const repetirContraceña=document.querySelector("#repetirContraceña").setAttribute("placeholder",usuario.repetirContraceña)
        const fechaNac=document.querySelector("#fechaNac").setAttribute("placeholder",usuario.fechaNac)
        const email=document.querySelector("#email").setAttribute("placeholder",usuario.email)
        
    }
}
// pasar a falso el estado de enLinea del usuario cuando cierra sesion 
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
guardar.addEventListener("click",function(  ){
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

        if (contraceña==repetirContraceña) {
            
            for (const usuario of usuariosRegistrados) {
                if (usuario.enLinea == true) {
                    console.log(usuario);
                    if (nombre!=''&&contraceñaFinal!=''&&repetirContraceña!=''&&email!=''&&fechaNac!='') {
                      if (repetirContraceña==contraceña) {
                        alert("se registraron los datos")
                        usuario.usuario=nombre
                        usuario.nuevaContraceña=contraceñaFinal
                        usuario.repetirContraceña=repetirContraceña
                        usuario.email=email
                        usuario.fechaNac=fechaNac
                      }else{
                        alert("las contraceñas no coinciden!,asegurate que las contraceñas sean identicas")
                      }
                    }else{
                        alert("¡es necesario completar todos los datos!")
                    }
                }
            }
            localStorage.setItem("usuarios",JSON.stringify(usuariosRegistrados))
        }else{
            alert("las contraceñas no son iguales")
        }

   
})

// mostrar modal y eliminacion del perfil----------------------------------
const eliminarUsuario=document.querySelector(".eliminarUsuario")
const dialogo = document.querySelector('.dialogo');
const botonAbrir = document.querySelector('.abrirDialogo');
const cancelarEliminacion=document.querySelector(".cancelarEliminacion")





botonAbrir.addEventListener('click', (event) => {
    console.log("asd");
    event.preventDefault()
    dialogo.showModal();
    dialogo.style.display="flex"
    
    
});
eliminarUsuario.addEventListener("click", ()=> {

    dialogo.close();
    for (const usuario of usuariosRegistrados) {
            if (usuario.enLinea===true) {
                    const indiceUsuarioAEliminar=usuariosRegistrados.indexOf(usuario)
                    console.log(usuario);
                    usuariosRegistrados.splice(indiceUsuarioAEliminar,1)
                    location.href="../index.html"
                }
            }
            localStorage.setItem("usuarios",JSON.stringify(usuariosRegistrados))
})
cancelarEliminacion.addEventListener("click",function(){
    dialogo.close()
    dialogo.style.display="none"
  
})


// si tiene premium elimina el buoton para comprarlo
const premium=document.querySelector("#premium")

for (const usuario of usuariosRegistrados) {
    if (usuario.enLinea==true) {
        if (usuario.tienePremium===true) {
            premium.style.display="none"
        }
    }
}