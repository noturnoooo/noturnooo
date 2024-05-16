const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T6:50:20");
const tempoObjetivo2 = new Date("2024-12-05T5:40:65");
const tempoObjetivo3 = new Date("2024-12-30T3:30:45");
const tempoObjetivo4 = new Date("2024-02-01T1:20:30");

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];


function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0){
        return [dias,horas,minutos,segundos];
    } else {
        return [0,0,0,0];
    }
}

function atualizaCronometro(){
    for (let i=0; i<contadores.length;i++){
    document.getElementById("dias"+i).textContent = calculaTempo(tempos[0])[0];
    document.getElementById("horas"+i).textContent = calculaTempo(tempos[0])[1];
    document.getElementById("min"+i).textContent = calculaTempo(tempos[0])[2];
    document.getElementById("seg"+i).textContent = calculaTempo(tempos[0])[3];

 
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();