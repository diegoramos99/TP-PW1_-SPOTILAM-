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
        nombre: "AC/DC",
        canciones: ["AC/DC:cancion1", "AC/DC:cancion2", "AC/DC:cancion3", "AC/DC:cancion4", "AC/DC:cancion5", "AC/DC:cancion6", "AC/DC:cancion7", "AC/DC:cancion8", "AC/DC:cancion9"]
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
console.log(coleccionDeAlbumes[0].canciones[0]);

// agrega a musica sonando el album del que fue cliqueado en la pestaña anterior

const nombreAlbum = document.querySelectorAll(".nombre_album");
const nombreCancionContainer = document.querySelector(".contenedor-datos-nombre");

const url = new URL(window.location.href)
const valorAlbumBuscado = url.searchParams.get("album")
console.log(url.searchParams.get("album"));


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

const estrella=document.querySelectorAll(".estrellaAmarilla")
for (const usuario of usuariosRegistrados) {

    if (usuario.enLinea == true) {
        
        
        const cancionesFav = usuario.cancionesFav
    
        estrella.forEach(element => {
            console.log(cancionesFav.includes(element.alt));
        if (cancionesFav.includes(element.alt)) {

            element.classList.add("fondo")
            console.log("despues");
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
// no pierde el estilo la estrella al recargar la pagina


