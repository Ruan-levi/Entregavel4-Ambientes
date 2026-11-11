// Entrada unica para importar os seis algoritmos fundamentais.
const { ehPrimo } = require("./algoritmos/numeroPrimo");
const { somatorio } = require("./algoritmos/somatorio");
const { gerarFibonacci } = require("./algoritmos/fibonacci");
const { mdc } = require("./algoritmos/mdc");
const { quickSort } = require("./algoritmos/quickSort");
const { contarInteiros } = require("./algoritmos/contagemInteiros");

module.exports = { ehPrimo, somatorio, gerarFibonacci, mdc, quickSort, contarInteiros };
