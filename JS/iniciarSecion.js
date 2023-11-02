const iniciarSecion=document.querySelector("#iniciarSecion");
const loginUsuario=document.querySelector(".Usuario");
const logincontracenia=document.querySelector("#loginContracenia");

const listaDeUsuariosLocalStorage=JSON.parse(localStorage.getItem("usuarios"))


function buscarUsuario() {
    const usuariosRegistrados=JSON.parse(localStorage.getItem("usuarios"))
    const usuarioValue=loginUsuario.value
    const contraceñaValue=logincontracenia.value
    const mitadContraceña=Math.floor(contraceñaValue.length/2)
    const segundaParte=contraceñaValue.slice(mitadContraceña)
    const primeraParte=contraceñaValue.slice(0,mitadContraceña)
    const nuevaContraceña=segundaParte+primeraParte
    


    // console.log(nuevaContraceña);

    var numero=0;
    for (const usuario of usuariosRegistrados) {
        if (usuario.usuario===usuarioValue&&usuario.nuevaContraceña===nuevaContraceña) {
            usuario.enLinea=true;
            console.log("usuario correcto");
            window.location.href = "../index.html"
            break
            }else{
                numero++
            }
           
        }
        if (numero==usuariosRegistrados.length) {
            alert("el nombre de usuario o la contraceña es conincorrecta")
        }
            localStorage.setItem("usuarios",JSON.stringify( usuariosRegistrados));
}





iniciarSecion.addEventListener("click",function(){
    if(listaDeUsuariosLocalStorage==null){
        alert("debes registrarte primero")
     }else{
        iniciarSecion.addEventListener("click",buscarUsuario)

     }
   
})