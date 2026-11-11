const {
  ehPrimo, somatorio, gerarFibonacci, mdc, quickSort, contarInteiros
} = require("../src");

console.log("Número 11 é primo?", ehPrimo(11));
console.log("Somatório:", somatorio([2, 5, 8, 10, 15]));
console.log("10 termos de Fibonacci:", gerarFibonacci(10));
console.log("MDC de 87 e 36:", mdc(87, 36));
console.log("QuickSort:", quickSort([8, 3, 6, 1, 10, 2, 5]));
console.log("Contagem de inteiros:", contarInteiros([3, 5, 1, 8, 4, 6, 3.3, 2, 7.5]));
