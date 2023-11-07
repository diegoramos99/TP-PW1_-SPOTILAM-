
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
const cancionesFav=[];
const albumsFav=[];
const enLinea=false


if (usuario.length<5) {
    alert("necesitas ingresar un nombre de usuario de al menos 5 letras")
}else{
    if (contraceña!=repetirContraceña || contraceña.length<10) {
        alert("la contraceña debe ser mayor a 10 caracteres y debe ser igual a 'REPETIR CONTRACEÑA'")

    }else{
        if (!email.includes("@")) {
            alert("tu email debe contener '@'")

        }else{
            if (fechaNac==0) {
                alert("debes completar el ultimo compo con tu fecha de nacimiento")

            }else{
                const usuarioNuevo={
                    usuario:usuario,
                    nuevaContraceña:nuevaContraceña,
                    repetirContraceña:repetirContraceña,
                    email:email,
                    fechaNac:fechaNac,
                    cancionesFav:cancionesFav,
                    albumsFav:albumsFav,
                    enLinea:enLinea,
                    musicaActual:"",
                    tienePremium:true
                }
                listaDeUsuariosLocalStorage.push(usuarioNuevo)
                alert(usuario+" tu registro fue exitoso ya te puedes loguear!")
                localStorage.setItem("usuarios",JSON.stringify(listaDeUsuariosLocalStorage));
                location.href="../index.html"
            }
        }
    }
}
}


registrarme.addEventListener('click',almacenarUsuarioNuevo)