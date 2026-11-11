const { somatorio } = require("../src/algoritmos/somatorio");

describe("Somatório", () => {
  test("soma os cinco valores do exemplo da Atividade 1", () => {
    expect(somatorio([2, 5, 8, 10, 15])).toBe(40);
  });

  test("lista vazia retorna zero", () => {
    expect(somatorio([])).toBe(0);
  });

  test("aceita números negativos e somas que se anulam", () => {
    expect(somatorio([-4, 10, -6])).toBe(0);
  });

  test("soma números decimais", () => {
    expect(somatorio([0.1, 0.2, 0.3])).toBeCloseTo(0.6, 10);
  });

  test("não altera o vetor original", () => {
    const numeros = [3, 1, 4];
    expect(somatorio(numeros)).toBe(8);
    expect(numeros).toEqual([3, 1, 4]);
  });

  test("rejeita entrada que não é array ou contém texto", () => {
    expect(() => somatorio(null)).toThrow(TypeError);
    expect(() => somatorio([1, "2"])).toThrow(TypeError);
  });

  test("rejeita NaN e operações que resultariam em infinito", () => {
    expect(() => somatorio([1, NaN])).toThrow(TypeError);
    expect(() => somatorio([1e308, 1e308])).toThrow(RangeError);
  });
});
