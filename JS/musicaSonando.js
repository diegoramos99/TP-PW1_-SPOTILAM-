// ---cambiar el nombr dde usuario por el del que inicio secion
const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios"))
const cerarSecion = document.querySelector("#cerarSecion")


for (const usuario of usuariosRegistrados) {
    if (usuario.enLinea == true) {
        const nombreUsuario = document.querySelector(".usuario")
        nombreUsuario.textContent = ""
        nombreUsuario.textContent = usuario.usuario
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
// agrega a musica sonando el album del que fue cliqueado en la pestaña anterior

const nombreAlbum=document.querySelectorAll(".nombre_album");
const url= new URL(window.location.href)
const valorAlbumBuscado=url.searchParams.get("album")
console.log( url.searchParams.get("album"));


nombreAlbum.forEach(element => { 
  element.innerHTML=valorAlbumBuscado
});

// // al hacer click en una estrella agrega la cancion a favoritas
const estrella=document.querySelectorAll(".estrellaAmarilla")

estrella.forEach(function(estrella){
    estrella.addEventListener("click",function () {
        
        estrella.classList.toggle("fondo")

        for (const usuario of usuariosRegistrados) {
            
            if (usuario.enLinea==true) {
                const album=this.alt
                let cancionesFav=usuario.cancionesFav
                const contieneAlbum=cancionesFav.some((cancionbuscada)=>cancionbuscada===album)
               
                if (contieneAlbum) {
                    const indiceAlbum=cancionesFav.indexOf(album)
                    cancionesFav.splice(indiceAlbum,1)
                }else{
                    cancionesFav.push(album);
                }
                }
            }
                localStorage.setItem("usuarios",JSON.stringify( usuariosRegistrados));
                
           
    })

})
