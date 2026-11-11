/**
 * Confere se o valor pode ser usado em algoritmos que exigem inteiros exatos.
 * @throws {TypeError} para valor que não é número inteiro.
 * @throws {RangeError} para inteiro fora da faixa segura do JavaScript.
 */
function validarInteiroSeguro(valor, nome = "valor") {
  if (typeof valor !== "number" || !Number.isFinite(valor) || !Number.isInteger(valor)) {
    throw new TypeError(nome + " deve ser um número inteiro.");
  }

  if (!Number.isSafeInteger(valor)) {
    throw new RangeError(nome + " deve ser um inteiro seguro.");
  }
}

/**
 * Garante lista numérica sem NaN, Infinity, strings ou valores ausentes.
 * Um vetor vazio é permitido.
 */
function validarListaNumeros(numeros, nome = "numeros") {
  if (!Array.isArray(numeros)) {
    throw new TypeError(nome + " deve ser um array.");
  }

  for (let indice = 0; indice < numeros.length; indice += 1) {
    const numero = numeros[indice];
    if (typeof numero !== "number" || !Number.isFinite(numero)) {
      throw new TypeError(nome + "[" + indice + "] deve ser um número finito.");
    }
  }
}

module.exports = { validarInteiroSeguro, validarListaNumeros };
