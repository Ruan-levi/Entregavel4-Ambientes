const { ehPrimo } = require("../src/algoritmos/numeroPrimo");

describe("Número primo", () => {
  test("11 é primo (exemplo da Atividade 1)", () => {
    expect(ehPrimo(11)).toBe(true);
  });

  test("9 e 12 não são primos", () => {
    expect(ehPrimo(9)).toBe(false);
    expect(ehPrimo(12)).toBe(false);
  });

  test("0, 1 e negativos não são primos", () => {
    expect(ehPrimo(0)).toBe(false);
    expect(ehPrimo(1)).toBe(false);
    expect(ehPrimo(-7)).toBe(false);
  });

  test("2 é o único primo par", () => {
    expect(ehPrimo(2)).toBe(true);
  });

  test("não aceita valores decimais nem texto", () => {
    expect(() => ehPrimo(7.2)).toThrow(TypeError);
    expect(() => ehPrimo("11")).toThrow(TypeError);
  });

  test("não aceita inteiros fora da faixa segura", () => {
    expect(() => ehPrimo(Number.MAX_SAFE_INTEGER + 1)).toThrow(RangeError);
  });
});
