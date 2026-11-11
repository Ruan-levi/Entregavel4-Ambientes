const { validarInteiroSeguro } = require("../validacoes");

/**
 * Gera os primeiros quantidade termos: 0, 1, 1, 2, 3...
 * Limite de 79 termos: F(78) ainda cabe num inteiro seguro do JavaScript.
 */
function gerarFibonacci(quantidade) {
  validarInteiroSeguro(quantidade, "quantidade");

  if (quantidade < 0 || quantidade > 79) {
    throw new RangeError("quantidade deve estar entre 0 e 79.");
  }

  const sequencia = [];
  let anterior = 0;
  let atual = 1;

  for (let indice = 0; indice < quantidade; indice += 1) {
    sequencia.push(anterior);
    const proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }

  return sequencia;
}

module.exports = { gerarFibonacci };
