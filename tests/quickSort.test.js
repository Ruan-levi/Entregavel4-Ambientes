const { quickSort } = require("../src/algoritmos/quickSort");

describe("Ordenação QuickSort", () => {
  test("ordena os valores do exemplo da Atividade 1", () => {
    expect(quickSort([8, 3, 6, 1, 10, 2, 5])).toEqual([1, 2, 3, 5, 6, 8, 10]);
  });

  test("não altera o array fornecido", () => {
    const numeros = [5, 1, 3];
    const ordenados = quickSort(numeros);
    expect(numeros).toEqual([5, 1, 3]);
    expect(ordenados).toEqual([1, 3, 5]);
    expect(ordenados).not.toBe(numeros);
  });

  test("funciona com lista vazia e com um único item", () => {
    expect(quickSort([])).toEqual([]);
    expect(quickSort([7])).toEqual([7]);
  });

  test("ordena valores repetidos, negativos e decimais", () => {
    expect(quickSort([3, -2, 3, 0.5, -2])).toEqual([-2, -2, 0.5, 3, 3]);
  });

  test("aceita entradas já ordenadas ou reversas", () => {
    expect(quickSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(quickSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
  });

  test("evita recursão excessiva ao ordenar lista grande", () => {
    const numeros = Array.from({ length: 5000 }, (_, i) => 4999 - i);
    const ordenados = quickSort(numeros);
    expect(ordenados).toHaveLength(5000);
    expect(ordenados[0]).toBe(0);
    expect(ordenados[4999]).toBe(4999);
  });

  test("rejeita valores inválidos", () => {
    expect(() => quickSort("8, 3, 6")).toThrow(TypeError);
    expect(() => quickSort([8, NaN, 3])).toThrow(TypeError);
    expect(() => quickSort([8, Infinity])).toThrow(TypeError);
  });
});
