let listaNumerosSorteados = []
let numeroLimite = 10;
let numeroSecreto = gerarUmNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do Número Secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10:");
  
}

mensagemInicial();
function verificarChute() {
  let chute = document.querySelector("input").value;
  if (numeroSecreto == chute) {
    exibirTextoNaTela("h1", "Acertou!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Este é o Número Secreto, você o descobriu com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (numeroSecreto <= chute) {
    exibirTextoNaTela("h1", "Errou!");
    exibirTextoNaTela("p", "Número secreto é menor.");
  } else {
    exibirTextoNaTela("h1", "Errou!");
    exibirTextoNaTela("p", "Número secreto é maior.");
  }
  tentativas++;
  limparCampo();
}

function gerarUmNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaNumerosSorteados.length;
  if(quantidadeDeElementosNaLista == numeroLimite){
    listaNumerosSorteados = [];
  }
  if (listaNumerosSorteados.includes(numeroEscolhido)){
    return gerarUmNumeroAleatorio();
  } else{
    listaNumerosSorteados.push(numeroEscolhido);
    console.log(listaNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  mensagemInicial();  
  numeroSecreto = gerarUmNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
