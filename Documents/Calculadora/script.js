let expressão = "";
let display = document.getElementById("display");

// Adiciona número ao display
function adicionarNumero(numero) {
  expressao += numero;
  atualizarDisplay();
}

// Adiciona operação matemática ao display
function adicionarOperacao(operacao) {
  if (expressao.length > 0 && isNaN(expressao[expressao.length - 1])) {
    expressao += operacao;
    atualizarDisplay();
  }
}

// Adiciona ponto decimal
function adicionarPonto() {
  let numeros = expressao.split(/[\+\-\*\/]/);
  let ultimoNumero = numeros[numeros.length - 1];

  if (!ultimoNumero.includes(".")) {
    expressao += ".";
    atualizarDisplay();
  }
}

function adicionarNumero(numero) {
  expressao += numero; // Adiciona números corretamente
  atualizarDisplay();
}
function calcular() {
  try {
    expressao = eval(expressao); // Converte e calcula corretamente
    atualizarDisplay();
  } catch (e) {
    expressao = "Erro";
    atualizarDisplay();
  }
}

// Limpa o display
function limparDisplay() {
  expressao = "";
  atualizarDisplay();
}

// Atualiza o display com a expressão atual
function atualizarDisplay() {
  display.value = expressao;
}
