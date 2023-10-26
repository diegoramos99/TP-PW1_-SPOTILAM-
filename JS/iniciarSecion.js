const iniciarSecion=document.querySelector("#iniciarSecion");
const loginUsuario=document.querySelector(".Usuario");
const logincontracenia=document.querySelector("#loginContracenia");


function buscarUsuario() {
    const usuariosRegistrados=JSON.parse(localStorage.getItem("usuarios"))
    const usuarioValue=loginUsuario.value
    const contraceñaValue=logincontracenia.value
    const mitadContraceña=Math.floor(contraceñaValue.length/2)
    const segundaParte=contraceñaValue.slice(mitadContraceña)
    const primeraParte=contraceñaValue.slice(0,mitadContraceña)
    const nuevaContraceña=segundaParte+primeraParte
    


    // console.log(nuevaContraceña);

    for (const usuario of usuariosRegistrados) {

        if (usuario.usuario===usuarioValue&&usuario.nuevaContraceña===nuevaContraceña) {
            usuario.enLinea=true;

            window.location.href = "../index.html"
            break
            }
            alert("nombre o usuario incorrecto")
        }
            localStorage.setItem("usuarios",JSON.stringify( usuariosRegistrados));
}




iniciarSecion.addEventListener("click",buscarUsuario)
iniciarSecion.addEventListener("click",function(event){
    event.preventDefault()
})