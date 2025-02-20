function obtenerValores(){
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)

    return{num1, num2}
} 

function mostrarResultado(valor){
    document.getElementById("resultado").innerText = "Resultado: " + valor
}

function sumar(){
   let{num1, num2} = obtenerValores()
   mostrarResultado(num1+num2) 

} 

function restar(){
    let{num1, num2} = obtenerValores()
 
    mostrarResultado(num1-num2) 
} 

function multiplicar(){
    let{num1, num2} = obtenerValores()

    mostrarResultado(num1*num2) 
} 

function dividir(){
        
    let{num1, num2} = obtenerValores()

    if(num2 ==0){
        mostrarResultado("Error: Dividir por 0")

    }else{
        mostrarResultado(num1/num2) 
    }
    
}