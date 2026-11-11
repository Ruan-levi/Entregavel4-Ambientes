const { validarListaNumeros } = require("../validacoes");

/** Seleciona um pivô intermediário sem modificar os três valores. */
function medianaDeTres(primeiro, segundo, terceiro) {
  if ((primeiro <= segundo && segundo <= terceiro) ||
      (terceiro <= segundo && segundo <= primeiro)) {
    return segundo;
  }
  if ((segundo <= primeiro && primeiro <= terceiro) ||
      (terceiro <= primeiro && primeiro <= segundo)) {
    return primeiro;
  }
  return terceiro;
}

/**
 * QuickSort iterativo com partição em três grupos (<, =, >).
 * Não modifica o vetor recebido; lida bem com números repetidos
 * e evita estouro de pilha da versão recursiva para listas grandes.
 */
function quickSort(numeros) {
  validarListaNumeros(numeros);

  const ordenados = [...numeros];
  const intervalos = [[0, ordenados.length - 1]];

  while (intervalos.length > 0) {
    const [inicio, fim] = intervalos.pop();
    if (inicio >= fim) continue;

    const meio = Math.floor((inicio + fim) / 2);
    const pivo = medianaDeTres(ordenados[inicio], ordenados[meio], ordenados[fim]);

    let menores = inicio;
    let atual = inicio;
    let maiores = fim;

    while (atual <= maiores) {
      if (ordenados[atual] < pivo) {
        [ordenados[menores], ordenados[atual]] = [ordenados[atual], ordenados[menores]];
        menores += 1;
        atual += 1;
      } else if (ordenados[atual] > pivo) {
        [ordenados[atual], ordenados[maiores]] = [ordenados[maiores], ordenados[atual]];
        maiores -= 1;
      } else {
        atual += 1;
      }
    }

    if (inicio < menores - 1) intervalos.push([inicio, menores - 1]);
    if (maiores + 1 < fim) intervalos.push([maiores + 1, fim]);
  }

  return ordenados;
}

module.exports = { quickSort };
