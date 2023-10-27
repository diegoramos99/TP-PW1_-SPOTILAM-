const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios"))
const cerarSecion = document.querySelector("#cerarSecion")


// ---cambiar el nombr dde usuario por el del que inicio secion
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




// borra los elementos que contiene la seccion de albumnes y agrega los albums que esten guardados en el localstorage

const contenedorAlbums = document.querySelector("#albumes-container");
const albumesDelDom = document.querySelectorAll(".albumes-container_container");
const albumes = Array.from(albumesDelDom)



function borrarAlbums() {

    if (contenedorAlbums) {
        console.log("entro al if");
        while (contenedorAlbums.firstChild) {
            contenedorAlbums.removeChild(contenedorAlbums.firstChild)
            console.log("entro al while");
        }
    }
}
borrarAlbums()
for (const usuario of usuariosRegistrados) {
    if (usuario.enLinea == true) {
      const albumesFavoritos=usuario.albumsFav
        albumes.forEach(element => {
            if (albumesFavoritos.includes(element.getAttribute("data-alt"))) {
                
                contenedorAlbums.appendChild(element)
            }
        });
      break
    }
}
// evita que se vaya los estilos a la estrellitas cuando se sale del archivo index.html

    
    document.addEventListener("DOMContentLoaded", function() {
        const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios"))
        const estrella=document.querySelectorAll(".favAlbumSonando")
        const albumesDelDom = document.querySelectorAll(".albumes-container_container");
        const albumes = Array.from(albumesDelDom)
        for (const usuario of usuariosRegistrados) {
        if (usuario.enLinea == true) {
            const albumesFavoritos=usuario.albumsFav    
            albumes.forEach(element => {
                console.log(albumesFavoritos.includes(element.getAttribute("data-alt")));
                if (albumesFavoritos.includes(element.getAttribute("data-alt"))) {   
                    const estrelaBuscada=element.querySelector(".favAlbumSonando")
                    estrelaBuscada.classList.add("fondo")
                }
            });    
          break
        }
    }
})



// agregar albumes a favoritos al hacer click en la estrella

const estrella=document.querySelectorAll(".favAlbumSonando")

estrella.forEach(function(estrella){

    estrella.addEventListener("click",function () {
            location.reload()
        estrella.classList.toggle("fondo")

        for (const usuario of usuariosRegistrados) {
            
            if (usuario.enLinea==true) {
                const album=this.alt
                let albumFav=usuario.albumsFav
                const contieneAlbum=albumFav.some((albumbuscado)=>albumbuscado===album)
               
                if (contieneAlbum) {
                    const indiceAlbum=albumFav.indexOf(album)
                    albumFav.splice(indiceAlbum,1)
                }else{
                    albumFav.push(album);
                }
                }
            }
                localStorage.setItem("usuarios",JSON.stringify( usuariosRegistrados));
                
    })

})