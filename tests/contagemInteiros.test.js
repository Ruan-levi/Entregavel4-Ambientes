const { contarInteiros } = require("../src/algoritmos/contagemInteiros");

describe("Contagem de números inteiros", () => {
  test("conta 7 inteiros do exemplo da Atividade 1", () => {
    expect(contarInteiros([3, 5, 1, 8, 4, 6, 3.3, 2, 7.5])).toBe(7);
  });

  test("lista somente de decimais tem zero inteiros", () => {
    expect(contarInteiros([1.5, -3.1, 0.2])).toBe(0);
  });

  test("conta inteiros negativos e zero", () => {
    expect(contarInteiros([0, -1, -5, 2.5])).toBe(3);
  });

  test("lista vazia retorna zero", () => {
    expect(contarInteiros([])).toBe(0);
  });

  test("não altera o array de entrada", () => {
    const numeros = [2, 2.5, 3];
    expect(contarInteiros(numeros)).toBe(2);
    expect(numeros).toEqual([2, 2.5, 3]);
  });

  test("rejeita texto e valores numéricos inválidos", () => {
    expect(() => contarInteiros([1, "2"])).toThrow(TypeError);
    expect(() => contarInteiros([3, Infinity])).toThrow(TypeError);
  });

  test("rejeita entrada que não é uma lista", () => {
    expect(() => contarInteiros(undefined)).toThrow(TypeError);
  });
});
