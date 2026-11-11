const { gerarFibonacci } = require("../src/algoritmos/fibonacci");

describe("Fibonacci", () => {
  test("gera 10 termos como na Atividade 1", () => {
    expect(gerarFibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });

  test("zero termos produz lista vazia", () => {
    expect(gerarFibonacci(0)).toEqual([]);
  });

  test("um e dois termos contêm os valores iniciais", () => {
    expect(gerarFibonacci(1)).toEqual([0]);
    expect(gerarFibonacci(2)).toEqual([0, 1]);
  });

  test("79 termos ainda cabem na faixa segura do JavaScript", () => {
    const termos = gerarFibonacci(79);
    expect(termos).toHaveLength(79);
    expect(termos[78]).toBe(8944394323791464);
  });

  test("rejeita valores negativos e acima de 79", () => {
    expect(() => gerarFibonacci(-1)).toThrow(RangeError);
    expect(() => gerarFibonacci(80)).toThrow(RangeError);
  });

  test("rejeita texto e quantidade decimal", () => {
    expect(() => gerarFibonacci("10")).toThrow(TypeError);
    expect(() => gerarFibonacci(2.5)).toThrow(TypeError);
  });
});
