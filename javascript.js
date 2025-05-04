


function getComputerChoice() {
    let numeroazar = Math.random()

    if (numeroazar >= 0 && numeroazar <= 0.33){
        return "agua";
    }
    else if (numeroazar > 0.33 && numeroazar <= 0.66){
        return "fuego";
    }
    else if (numeroazar > 0.66 && numeroazar <= 1){
        return "planta";
    }
    
}


/* Ahora el usuario ya no selecciona por prompt, sino boton
function getHumanChoice(){
    let simbolo = prompt("Elige un símbolo. agua, planta o fuego");
    return simbolo.toLowerCase();
    }
*/


const agua = document.querySelector("#agua");
const planta = document.querySelector("#planta");
const fuego = document.querySelector("#fuego");

const result = document.querySelector("#resultado");
const marcador = document.querySelector("#marcador");


agua.addEventListener("click", () => {
    playRound("agua")
});
planta.addEventListener("click", () => {
    playRound("planta")
} );
fuego.addEventListener("click", () => {
    playRound("fuego")
});


function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    console.log("Tu elección: ", humanChoice);
    console.log("Elección de la máquina: ", computerChoice);

    let resultado = ""

    if (humanChoice === "agua"){
        if (computerChoice === "agua"){
            resultado = "EMPATE";
        }
        else if (computerChoice === "planta"){
            resultado = "PIERDES";
            puntMaquina++;
        }
        else if (computerChoice === "fuego"){
            resultado = "GANAS";
            puntHumano++;
        }
        else {
            resultado = "ALGO HA SALIDO MAL";
        }
    }
    else if (humanChoice === "planta"){
        if(computerChoice === "agua"){
            resultado = "GANAS";
            puntHumano++;
        }
        else if (computerChoice === "planta"){
            resultado = "EMPATAS";
        }
        else if (computerChoice === "fuego"){
            resultado = "PIERDES";
            puntMaquina++;
        }
        else {
            resultado = "ALGO HA SALIDO MAL";
        }
    }
    else if (humanChoice === "fuego"){
        if (computerChoice === "agua"){
            resultado = "PIERDES";
            puntMaquina++;
        }
        else if (computerChoice === "fuego"){
            resultado = "EMPATE";
        }
        else if (computerChoice === "planta"){
            resultado = "GANAS";
            puntHumano++;
        }
        else {
            resultado = "ALGO HA SALIDO MAL";
        }
    }
    else {
        resultado = "ALGO HA SALIDO MAL";
    }

    result.textContent = "Resultado: " + resultado;
    marcador.textContent = "Tus puntos: " + puntHumano + " | Máquina: " + puntMaquina;

    if(puntHumano === 5){
        alert("Has ganado la partida!");
        location.reload();
    }
    else if(puntMaquina === 5){
        alert("Has perdido la partida!");
        location.reload();
    }


}


let puntHumano = 0;
let puntMaquina = 0;








/* Voy a crear otra funcion de cero
function ganador(){

    const humano = getHumanChoice();
    const maquina = getComputerChoice();

    console.log("Tu elección: ", humano);
    console.log("Su elección: ", maquina);

    if (humano === "agua"){
        if (maquina === "agua"){
            return "EMPATE";
        }
        else if (maquina === "planta"){
            return "PIERDES";
        }
        else if (maquina === "fuego"){
            return "GANAS";
        }
        else {
            return "ALGO HA SALIDO MAL";
        }
    }
    else if (humano === "planta"){
        if(maquina === "agua"){
            return "GANAS";
        }
        else if (maquina === "planta"){
            return "EMPATAS";
        }
        else if (maquina === "fuego"){
            return "PIERDES";
        }
        else {
            return "ALGO HA SALIDO MAL";
        }
    }
    else if (humano === "fuego"){
        if (maquina === "agua"){
            return "PIERDES";
        }
        else if (maquina === "fuego"){
            return "EMPATE";
        }
        else if (maquina === "planta"){
            return "GANAS";
        }
        else {
            return "ALGO HA SALIDO MAL";
        }
    }
    else {
        return "ALGO HA SALIDO MAL";
    }
    
}
*/







/* DESACTIVO LO QUE HACE QUE LLEGUE A 5 RONDAS
for (let i = 0; i < 5; i++){
    console.log("Ronda " + (i+1));
    const resultado = ganador();
    console.log("El resultado es: " + resultado)

    if (resultado === "GANAS"){
        puntHumano++;
    }
    else if (resultado === "PIERDES"){
        puntMaquina++;
    }
}

if (puntHumano > puntMaquina){
    console.log("HAS GANADO LA PARTIDA")
}
else if (puntHumano === puntMaquina){
    console.log("HAS EMPATADO LA PARTIDA")
}
else if (puntHumano < puntMaquina){
    console.log("HAS PERDIDO LA PARTIDA")
}
*/





