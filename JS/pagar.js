// agrega el nombre del plan elegido
const titulo=document.querySelector(".titulo")
const planSeleccionado=document.querySelector(".planSeleccionado")

const URLbuscada=new URL(window.location.href)
const nombrePlan=URLbuscada.searchParams.get("plan")

const img=`<img src="../assets/LogosPremium/${nombrePlan}.png" alt="planAPagar">`
console.log(nombrePlan);
titulo.textContent+=nombrePlan
planSeleccionado.innerHTML=img


// calidacion de pagar


const CVC=document.querySelector("#CVC")
const numeroTargeta=document.querySelector("#NumeroTargeta")
const pagar=document.querySelector("#pagar")
const nombre=document.querySelector("#Nombre")
const VTO=document.querySelector("#VTO")
const errorTargeta=document.querySelector("#errorNumeroTargeta")
const errorNombre=document.querySelector("#errorNombre")
const errorVTO=document.querySelector("#errorVTO")
const errorCVC=document.querySelector("#errorCVC")

pagar.addEventListener("click",function(e){

  
    if (numeroTargeta.value.length!=16) {
   
        e.preventDefault()
        errorTargeta.innerText=''
        errorVTO.innerText=''
        errorNombre.innerText=''
        errorCVC.innerText=''
        errorTargeta.innerText="el numero de la targeta debe ser de 16 digitos"
    }else{
        if(nombre.value.length==0){
           
            errorTargeta.innerText=''
            errorVTO.innerText=''
            errorNombre.innerText=''
            errorCVC.innerText=''
            errorNombre.innerText="debe completar este campo con su nombre y apellido"

        }else{
            if (VTO.value.length==0) {
                errorTargeta.innerText=''
                errorVTO.innerText=''
                errorNombre.innerText=''
                errorCVC.innerText=''
                errorVTO.innerText="debe completar este campo con la fecha de vencimiento"
            }else{

                if (CVC.value>999|| CVC.value<1) {
                    errorTargeta.innerText=''
                errorVTO.innerText=''
                errorNombre.innerText=''
                errorCVC.innerText=''
                    errorCVC.innerText="el valor del CVC no debe ser mayor a 999 ni menor a 1"
                    e.preventDefault()
                }
                   else{
                    if (CVC.value.length!=3) {
                        errorTargeta.innerText=''
                        errorVTO.innerText=''
                        errorNombre.innerText=''
                        errorCVC.innerText=''
                        errorCVC.innerText="el CVC debe tener 3 digitos SI o SI"
                        e.preventDefault()
                    }
                        else{
                            for (const usuario of usuariosRegistrados) {
                                if (usuario.enLinea===true) {
                                    usuario.tienePremium=true
                                    alert("compra exitosa,registrese y disfrute disfrute de: "+nombrePlan)
                                }
                             }
        
                             localStorage.setItem("usuarios",JSON.stringify(usuariosRegistrados))
                    
                     }
                }
            }
        }
    }
})