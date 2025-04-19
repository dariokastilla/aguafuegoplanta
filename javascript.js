


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



function getHumanChoice(){
    let simbolo = prompt("Elige un símbolo. agua, planta o fuego");
    return simbolo.toLowerCase();
    }


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

let puntHumano = 0;
let puntMaquina = 0;



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




