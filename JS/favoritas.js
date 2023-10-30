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
        // const albumes=document.querySelectorAll(".nombre-album")
        const contenedorDatosAlbums=document.querySelector(".contenedor-datos-albums")
        listaAlbumsFav.forEach(element => {
           const etiquetaAlbumDOM=`<div class="nombre-album casilla"><img class="estrellaAmarilla fondo"
                                src="../assets/estrella1.png" alt="${element}">
                                <div class="nombre_album">${element}</div>
                                </div>`
            contenedorDatosAlbums.innerHTML+=etiquetaAlbumDOM


        });
        // agrega a la vista favoritos tadas las canciones que contenga el array de canciones que este dentro del objeto Album cuyo nombre coincida 
        const listaCancionesFav=usuario.cancionesFav 
        const contenedorIconos=document.querySelector(".contenedor-datos-icono") 
        const contenedorCanciones=document.querySelector(".contenedor-datos-nombre") 
        const contenedorTiempo=document.querySelector(".contenedor-datos-tiempo") 
        const contenedorReproduccion=document.querySelector(".contenedor-datos-reproduccion") 
        console.log(listaCancionesFav);
        listaCancionesFav.forEach(element => {
            const etiquetaCancionDOM=`<div class="nombre-cancion casilla"><img class="estrellaAmarilla fondo"
            src="../assets/estrella1.png" alt="${element}">
                <div class="nombre">${element}</div>
           </div>`
           const etiquetaIconoDOM=` <div class="icono casilla"><img class="img-reproducir" src="../assets/play.png" alt="">
           </div>`
           const etiquetaTiempo=`  <div class="tiempo-duracion casilla">4:23</div>`
           const etiquetareproduccion=`<div class="cantidad-reproducciones casilla">9854</div>`
            contenedorCanciones.innerHTML+=etiquetaCancionDOM
            contenedorIconos.innerHTML+=etiquetaIconoDOM
            contenedorTiempo.innerHTML+=etiquetaTiempo
            contenedorReproduccion.innerHTML+=etiquetareproduccion
    })

       
        break
    }
    localStorage.setItem("usuarios",JSON.stringify(usuariosRegistrados) )
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
        const listaCancionesFav=usuario.cancionesFav
        const valorestrella=this.alt
        console.log(listaAlbumsFav);
        console.log(valorestrella);
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
        listaCancionesFav.forEach(function (element,index) {
            console.log(index);
            if (element===valorestrella) {
                console.log(index);
                listaCancionesFav.splice(index,1)
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
// agrega la imagen al aside del album de la cancion  que tenga guardada en el localstoraje
const imgContainersonando = document.querySelector(".contenedorAlbumDescripcion")
const nombre_cancion = document.querySelectorAll(".nombre")

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

        // aca agregamos el evento click  cada cancion,y reemplaza la imagen del aside por la imagen del album que pertenece la cancion
        nombre_cancion.forEach(element => {
            element.addEventListener("click", function () {
                console.log("borrado");
                const musicaActual = element.textContent
                usuario.musicaActual=musicaActual
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
                localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));
            })
        });
        // aca al hacer click en la imagen,borrara todo el aside
        const imagenAside=document.querySelector(".albumSonando")
        
        imgContainersonando.addEventListener("click",function () {
            imgContainersonando.innerHTML=""
            usuario.musicaActual=""
            localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados))
        })
    }
}