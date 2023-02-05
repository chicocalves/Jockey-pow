let jogadorEscolha = 0
let computadorEscolha = 0
let jogadorPontuacao = 0
let computadorPontuacao = 0
let totalPartidas = 0
let resultado = 0

const jogar = (escolhido) => {
    jogadorEscolha = escolhido
    computadorEscolha = Math.floor(Math.random() * (3 - 1 + 1)) + 1

    const elements = document.querySelectorAll(".selecionado")
    if (elements.length > 0) {
        elements[0].classList.remove("selecionado")
        elements[1].classList.remove("selecionado")
    }

    if (jogadorEscolha === computadorEscolha) {
        resultado = 0
    } else if (
        jogadorEscolha > computadorEscolha &&
        computadorEscolha === 1 &&
        jogadorEscolha === 2
    ) {
        resultado = 1
    } else if (
        jogadorEscolha > computadorEscolha &&
        computadorEscolha === 1 &&
        jogadorEscolha === 3
    ) {
        resultado = 2
    } else if (
        jogadorEscolha > computadorEscolha &&
        computadorEscolha === 2 &&
        jogadorEscolha === 3
    ) {
        resultado = 1
    } else if (
        jogadorEscolha < computadorEscolha &&
        computadorEscolha === 2 &&
        jogadorEscolha === 1
    ) {
        resultado = 2
    } else if (
        jogadorEscolha < computadorEscolha &&
        computadorEscolha === 3 &&
        jogadorEscolha === 2
    ) {
        resultado = 2
    } else if (
        jogadorEscolha < computadorEscolha &&
        computadorEscolha === 3 &&
        jogadorEscolha === 1
    ) {
        resultado = 1
    }

    document
        .getElementById("jogador-escolha-" + jogadorEscolha)
        .classList.add("selecionado")
    document
        .getElementById("computador-escolha-" + computadorEscolha)
        .classList.add("selecionado")

    totalPartidas++
    verificarGanhador()
}

const verificarGanhador = () => {
    if (resultado == 1) {
        document.getElementById("mensagens").innerHTML = "Jogador ganhou!"
        jogadorPontuacao++
        document.getElementById("jogador-pontos").innerHTML = jogadorPontuacao
    } else if (resultado == 2) {
        document.getElementById("mensagens").innerHTML = "Computador ganhou!"
        computadorPontuacao++
        document.getElementById("computador-pontos").innerHTML =
            computadorPontuacao
    } else {
        document.getElementById("mensagens").innerHTML = "Jogo empatado!"
    }
    document.getElementById("total").innerHTML = totalPartidas
}
