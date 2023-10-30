// agrega el nombre del plan elegido
const titulo=document.querySelector(".titulo")

const URLbuscada=new URL(window.location.href)
const nombrePlan=URLbuscada.searchParams.get("plan")
console.log(nombrePlan);
titulo.textContent+=nombrePlan

// calidacion de pagar
const CVC=document.querySelector("#CVC")
const numeroTargeta=document.querySelector("#NumeroTargeta")
const pagar=document.querySelector("#pagar")
pagar.addEventListener("click",function(){
    console.log(numeroTargeta.value.length);
        if (CVC.value>999||CVC.value<1 || numeroTargeta.value.length!=16) {
            alert("algun valor es incorrecto,verifique que los detos hayan sido los correctos")
        }else{
         
        }
})