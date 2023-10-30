// ---cambiar el nombr dde usuario por el del que inicio sesion
const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios"))
const cerarSecion = document.querySelector("#cerarSecion")

for (const usuario of usuariosRegistrados) {
    if (usuario.enLinea == true) {
        const nombreUsuario = document.querySelector(".usuario")
        nombreUsuario.textContent = ""
        nombreUsuario.textContent = usuario.usuario
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

// agrega la imagen al aside del album de la cancion  que tenga guardada en el localstoraje

// agrega la imagen al aside del album de la cancion  que tenga guardada en el localstoraje
const imgContainersonando = document.querySelector(".contenedorAlbumDescripcion")
const nombre_cancion = document.querySelectorAll(".nombre_cancion")

// aca si ya existe una musica sonando actualemte en el aside se agrega la imagen del album al que pertenece la cancion
for (const usuario of usuariosRegistrados) {

    if (usuario.enLinea == true) {
        const musicaActual = usuario.musicaActual

        if (usuario.musicaActual === "") {
            console.log("Asd");
        } else {
            const arrayDescopuesto = musicaActual.split(":")
            const etiquetaAlbumSonando = `<div class="imgContainerSonando">
            <img src="../assets/${arrayDescopuesto[0]}.jpg" alt="" class="albumSonando">
            <img src="../../assets/estrellaAmarilla.png" alt="" class="favAlbumSonando">
        </div>
        <div>
            <p class="albumText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit omnis quaerat, eum
                asperiores
                nesciunt excepturi quae necessitatibus perspiciatis, voluptatibus veritatis amet, optio eos!
                Reprehenderit a
                ipsum fugit, vero expedita maiores.</p>
        </div>`
            imgContainersonando.innerHTML = etiquetaAlbumSonando
        }

       
        // aca al hacer click en la imagen,borrara todo el aside
        const imagenAside=document.querySelector(".albumSonando")
        
        imgContainersonando.addEventListener("click",function () {
            imgContainersonando.innerHTML=""
            usuario.musicaActual=""
            localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados))
        })
    }
}


