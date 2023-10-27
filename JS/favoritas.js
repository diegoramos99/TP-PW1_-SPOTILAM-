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
// agrega a la vista favoritos todos los albumes que esten en el localstorage
// function agregarAlbumes(){
for (const usuario of usuariosRegistrados) {
    if (usuario.enLinea == true) {
        const listaAlbumsFav=usuario.albumsFav
        const albumes=document.querySelectorAll(".nombre-album")
        const contenedorDatosAlbums=document.querySelector(".contenedor-datos-albums")
        listaAlbumsFav.forEach(element => {
           const etiquetaDOM=`<div class="nombre-album casilla"><img class="estrellaAmarilla fondo"
                                src="../assets/estrella1.png" alt="${element}">
                                <div class="nombre_album">${element}</div>
                                </div>`
            contenedorDatosAlbums.innerHTML+=etiquetaDOM
        })

       
        break
    }
}
// }
// agregarAlbumes()

// elimina los albumes si se hace click en la estrella
const estrelaBuscada=document.querySelectorAll(".estrellaAmarilla");
const usuariosRegistradoss = JSON.parse(localStorage.getItem("usuarios"))
estrelaBuscada.forEach(element => {
    element.addEventListener("click",function(){
        for (const usuario of usuariosRegistradoss) {
            if (usuario.enLinea == true) {
        const listaAlbumsFav=usuario.albumsFav
        const valorestrella=this.alt
        console.log(listaAlbumsFav);
        element.classList.remove("fondo")
        listaAlbumsFav.forEach(function (element,index) {
            console.log(index);
            if (element===valorestrella) {
                console.log(index);
                listaAlbumsFav.splice(index,1)
                localStorage.setItem("usuarios",JSON.stringify( usuariosRegistradoss));
                location.reload()
            }
        });
    }
}
    }
    )
}
)

// saca de favoritas si hse hace click en la estrella
// for (const usuario of usuariosRegistrados) {
//     if (usuario.enLinea == true) {
//         const albumsFav=usuario.albumsFav
       
//     }
// }
//agrega a la vista favoritos las canciones que tengo marcadas como favorito en el localstorage

