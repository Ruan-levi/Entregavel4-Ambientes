const { mdc } = require("../src/algoritmos/mdc");

describe("Máximo divisor comum", () => {
  test("calcula MDC de 87 e 36, como na Atividade 1", () => {
    expect(mdc(87, 36)).toBe(3);
  });

  test("calcula o exemplo clássico de 48 e 18", () => {
    expect(mdc(48, 18)).toBe(6);
  });

  test("a ordem dos argumentos não muda o resultado", () => {
    expect(mdc(18, 48)).toBe(6);
  });

  test("funciona com negativos e com um dos argumentos zero", () => {
    expect(mdc(-48, 18)).toBe(6);
    expect(mdc(0, -7)).toBe(7);
  });

  test("MDC de zero com zero é indefinido", () => {
    expect(() => mdc(0, 0)).toThrow(RangeError);
  });

  test("rejeita entradas não inteiras e texto", () => {
    expect(() => mdc(3.1, 6)).toThrow(TypeError);
    expect(() => mdc("87", 36)).toThrow(TypeError);
  });

  test("rejeita inteiros sem representação exata", () => {
    expect(() => mdc(Number.MAX_SAFE_INTEGER + 1, 2)).toThrow(RangeError);
  });
});
