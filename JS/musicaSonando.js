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
    localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados))
}
)



// creo el array de albumes con sus canciones

const coleccionDeAlbumes = [
    album1 = {
        nombre: "los ramones",
        canciones: ["los ramones:cancion1", "los ramones:cancion2", "los ramones:cancion3", "los ramones:cancion4", "los ramones:cancion5", "los ramones:cancion6", "los ramones:cancion7", "los ramones:cancion8", "los ramones:cancion9"]
    },

    album2 = {
        nombre: "los beatles",
        canciones: ["los beatles:cancion1", "los beatles:cancion2", "los beatles:cancion3", "los beatles:cancion4", "los beatles:cancion5", "los beatles:cancion6", "los beatles:cancion7", "los beatles:cancion8", "los beatles:cancion9"]
    },

    album3 = {
        nombre: "redhotChilliePappers",
        canciones: ["redhotChilliePappers:cancion1", "redhotChilliePappers:cancion2", "redhotChilliePappers:cancion3", "redhotChilliePappers:cancion4", "redhotChilliePappers:cancion5", "redhotChilliePappers:cancion6", "redhotChilliePappers:cancion7", "redhotChilliePappers:cancion8", "redhotChilliePappers:cancion9"]
    },
    album4 = {
        nombre: "fooFighters",
        canciones: ["fooFighters:cancion1", "fooFighters:cancion2", "fooFighters:cancion3", "fooFighters:cancion4", "fooFighters:cancion5", "fooFighters:cancion6", "fooFighters:cancion7", "fooFighters:cancion8", "fooFighters:cancion9"]
    },
    album5 = {
        nombre: "pinkFloyd",
        canciones: ["pinkFloyd:cancion1", "pinkFloyd:cancion2", "pinkFloyd:cancion3", "pinkFloyd:cancion4", "pinkFloyd:cancion5", "pinkFloyd:cancion6", "pinkFloyd:cancion7", "pinkFloyd:cancion8", "pinkFloyd:cancion9"]
    },
    album6 = {
        nombre: "AC_DC",
        canciones: ["AC_DC:cancion1", "AC_DC:cancion2", "AC_DC:cancion3", "AC_DC:cancion4", "AC_DC:cancion5", "AC_DC:cancion6", "AC_DC:cancion7", "AC_DC:cancion8", "AC_DC:cancion9"]
    },
    album7 = {
        nombre: "molotov",
        canciones: ["molotov:cancion1", "molotov:cancion2", "molotov:cancion3", "molotov:cancion4", "molotov:cancion5", "molotov:cancion6", "molotov:cancion7", "molotov:cancion8", "molotov:cancion9"]
    },
    album8 = {
        nombre: "catupecu",
        canciones: ["catupecu:cancion1", "catupecu:cancion2", "catupecu:cancion3", "catupecu:cancion4", "catupecu:cancion5", "catupecu:cancion6", "catupecu:cancion7", "catupecu:cancion8", "catupecu:cancion9"]
    },
    album9 = {
        nombre: "queen",
        canciones: ["queen:cancion1", "queen:cancion2", "queen:cancion3", "queen:cancion4", "queen:cancion5", "queen:cancion6", "queen:cancion7", "queen:cancion8", "queen:cancion9"]
    }
]

// agrega a musica sonando el album del que fue cliqueado en la pestaña anterior

const nombreAlbum = document.querySelectorAll(".nombre_album");
const nombreCancionContainer = document.querySelector(".contenedor-datos-nombre");

const url = new URL(window.location.href)
const valorAlbumBuscado = url.searchParams.get("album")
console.log(url.searchParams.get("album") + " este es el album");


nombreAlbum.forEach(element => {
    element.innerHTML = valorAlbumBuscado
})
coleccionDeAlbumes.forEach(element => {
    if (element.nombre === valorAlbumBuscado) {
        const cancionesDeAlbum = element.canciones
        cancionesDeAlbum.forEach(element => {
            const etiquetaCancionDOM = `<div class="nombre-cancion casilla"><img class="estrellaAmarilla"
        src="../assets/estrella1.png" alt="${element}">
    <div class="nombre_cancion">${element}</div>
</div>`
            nombreCancionContainer.innerHTML += etiquetaCancionDOM



        });
    }
});
// evita que se vaya los estilos a la estrellitas cuando se sale del archivo index.html

const estrella = document.querySelectorAll(".estrellaAmarilla")
for (const usuario of usuariosRegistrados) {

    if (usuario.enLinea == true) {


        const cancionesFav = usuario.cancionesFav

        estrella.forEach(element => {

            if (cancionesFav.includes(element.alt)) {

                element.classList.add("fondo")
            }
        });
    }
}


// // al hacer click en una estrella agrega la cancion a favoritas


estrella.forEach(function (estrella) {
    estrella.addEventListener("click", function () {

        estrella.classList.toggle("fondo")

        for (const usuario of usuariosRegistrados) {

            if (usuario.enLinea == true) {
                const Cancion = this.alt
                let cancionesFav = usuario.cancionesFav
                const contieneCancion = cancionesFav.some((cancionbuscada) => cancionbuscada === Cancion)

                if (contieneCancion) {
                    const indiceCancion = cancionesFav.indexOf(Cancion)
                    cancionesFav.splice(indiceCancion, 1)
                } else {
                    cancionesFav.push(Cancion);
                }
            }
        }
        localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));


    })

})


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