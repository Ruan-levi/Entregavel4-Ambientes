const { validarListaNumeros } = require("../validacoes");

/**
 * Conta somente números inteiros da lista, ignorando valores decimais.
 * Rejeita elementos inválidos em vez de classificar strings como números.
 */
function contarInteiros(numeros) {
  validarListaNumeros(numeros);

  let quantidadeDeInteiros = 0;

  for (const numero of numeros) {
    if (Number.isInteger(numero)) {
      quantidadeDeInteiros += 1;
    }
  }

  return quantidadeDeInteiros;
}

module.exports = { contarInteiros };
