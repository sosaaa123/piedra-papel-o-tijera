///const tijereta = document.getElementById("tijereta")
///tijereta.src = "tijera.png"


const usuario = document.getElementById("usuario")
const maquina = document.getElementById("maquina")
let resultado ///valor del resultado

const usuarioP = document.getElementById("usuarioP")
const maquinaP = document.getElementById("maquinaP")
const resultadoP = document.getElementById("resultadoP") ///p del resultado

let opcionUser = prompt("piedra papel o tijera?");
let opcionMachine = Math.floor(Math.random() * (3 - 1) + 1);

console.log(opcionMachine)




if (opcionMachine == 3){
    opcionMachine = "piedra"
    
    if (opcionUser == "Piedra" || opcionUser == "piedra"){
        resultado = "Empate"
        maquinaP.textContent += opcionMachine
        usuarioP.textContent += opcionUser
        resultadoP.textContent += resultado

        usuario.src = "piedra.jpg"
        maquina.src = "piedra.jpg"

    } else if (opcionUser == "Papel" || opcionUser == "papel"){
        resultado = "Ganaste"
        maquinaP.textContent += opcionMachine
        usuarioP.textContent += opcionUser
        resultadoP.textContent += resultado

        usuario.src = "papel.png"
        maquina.src = "piedra.jpg"

    } else if (opcionUser == "Tijera" || opcionUser == "tijera"){
        resultado = "Perdiste"
        maquinaP.textContent += opcionMachine
        usuarioP.textContent += opcionUser
        resultadoP.textContent += resultado

        usuario.src = "tijera.png"
        maquina.src = "piedra.jpg"

    } else{
        alert("Porfavor ingrese una opcion valida")
        location.reload()
    }

    alert(`Resultado ${resultado}`)

    

} else if(opcionMachine == 2){
    opcionMachine = "papel"
    
    if (opcionUser == "Piedra" || opcionUser == "piedra"){
        resultado = "Perdiste"
        maquinaP.textContent += opcionMachine
        usuarioP.textContent += opcionUser
        resultadoP.textContent += resultado

        usuario.src = "piedra.jpg"
        maquina.src = "papel.png"

    } else if (opcionUser == "Papel" || opcionUser == "papel"){
        resultado = "empataste"
        maquinaP.textContent += opcionMachine
        usuarioP.textContent += opcionUser
        resultadoP.textContent += resultado

        usuario.src = "papel.png"
        maquina.src = "papel.png"

    } else if (opcionUser == "Tijera" || opcionUser == "tijera"){
        resultado = "Ganaste"
        maquinaP.textContent += opcionMachine
        usuarioP.textContent += opcionUser
        resultadoP.textContent += resultado

        usuario.src = "tijera.png"
        maquina.src = "papel.png"

    } else{
        alert("Porfavor ingrese una opcion valida")
        location.reload()
    }

    alert(`Resultado ${resultado}`)



} else if(opcionMachine == 1){
    opcionMachine = "tijera"
    
    if (opcionUser == "Piedra" || opcionUser == "piedra"){
        resultado = "Ganaste"
        maquinaP.textContent += opcionMachine
        usuarioP.textContent += opcionUser
        resultadoP.textContent += resultado

        usuario.src = "piedra.jpg"
        maquina.src = "tijera.png"

    } else if (opcionUser == "Papel" || opcionUser == "papel"){
        resultado = "Perdiste"
        maquinaP.textContent += opcionMachine
        usuarioP.textContent += opcionUser
        resultadoP.textContent += resultado

        usuario.src = "papel.png"
        maquina.src = "tijera.png"

    } else if (opcionUser == "Tijera" || opcionUser == "tijera"){
        resultado = "Empate"
        maquinaP.textContent += opcionMachine
        usuarioP.textContent += opcionUser
        resultadoP.textContent += resultado

        usuario.src = "tijera.png"
        maquina.src = "tijera.png"
    } else{
        alert("Porfavor ingrese una opcion valida")
        location.reload()
    }

    alert(`Resultado ${resultado}`)
}

    

