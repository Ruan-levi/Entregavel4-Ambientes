const { validarInteiroSeguro } = require("../validacoes");

/**
 * Retorna true quando numero tem exatamente dois divisores positivos.
 * Custo: O(sqrt(n)). Zero, um e negativos não são primos.
 */
function ehPrimo(numero) {
  validarInteiroSeguro(numero, "numero");

  if (numero <= 1) return false;
  if (numero === 2) return true;
  if (numero % 2 === 0) return false;

  const limite = Math.sqrt(numero);
  for (let divisor = 3; divisor <= limite; divisor += 2) {
    if (numero % divisor === 0) return false;
  }

  return true;
}

module.exports = { ehPrimo };
