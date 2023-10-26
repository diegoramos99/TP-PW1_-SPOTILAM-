
// ----------registro de usuarios----------------
const registrarme=document.querySelector("#registrarme")

const listaDeUsuariosLocalStorage=JSON.parse(localStorage.getItem("usuarios"))|| [];

function almacenarUsuarioNuevo() {
    const usuario=document.querySelector("#usuario").value;
    const contraceña=document.querySelector("#contraceña").value;
    const mitadContraceña=Math.floor(contraceña.length/2)
    const segundaParte=contraceña.slice(mitadContraceña)
    const primeraParte=contraceña.slice(0,mitadContraceña)
    const nuevaContraceña=segundaParte+primeraParte


const repetirContraceña=document.querySelector("#repetirContraceña").value;
const email=document.querySelector("#email").value;
const fechaNac=document.querySelector("#fechaNac").value;
const cancionesFav=["asd",];
const albumsFav=[];
const enLinea=false
const usuarioNuevo={
    usuario:usuario,
    nuevaContraceña:nuevaContraceña,
    repetirContraceña:repetirContraceña,
    email:email,
    fechaNac:fechaNac,
    cancionesFav:cancionesFav,
    albumsFav:albumsFav,
    enLinea:enLinea
}
listaDeUsuariosLocalStorage.push(usuarioNuevo)

localStorage.setItem("usuarios",JSON.stringify(listaDeUsuariosLocalStorage));
}


registrarme.addEventListener('click',almacenarUsuarioNuevo)

// localStorage.clear();