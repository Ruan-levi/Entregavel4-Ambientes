# Entregável #4 — Código limpo e testes unitários (UNIFOR)

Projeto de **Algoritmos Fundamentais** em JavaScript, refatorado a partir da [Atividade #1](https://github.com/Ruan-levi/Entregavel1-JavaScript). Os seis algoritmos estão separados em funções reutilizáveis e são testados com **Jest**.

## Requisitos

- Node.js 20 ou superior
- npm

## Como instalar e executar os testes

Abra um terminal na pasta do projeto e execute:

```bash
npm install
npm test
```

O comando `npm test` executa automaticamente todos os arquivos `tests/*.test.js`.

Para executar os exemplos dos algoritmos:

```bash
npm run exemplo
```

## Algoritmos fundamentais

| Algoritmo | Arquivo | O que faz |
| --- | --- | --- |
| Número primo | `src/algoritmos/numeroPrimo.js` | Verifica se um inteiro é primo |
| Somatório | `src/algoritmos/somatorio.js` | Soma os números de um vetor |
| Fibonacci | `src/algoritmos/fibonacci.js` | Gera a quantidade pedida de termos |
| MDC | `src/algoritmos/mdc.js` | Calcula o máximo divisor comum |
| QuickSort | `src/algoritmos/quickSort.js` | Ordena números sem alterar a lista recebida |
| Contagem | `src/algoritmos/contagemInteiros.js` | Conta quantos elementos são inteiros |

## Organização dos testes

Há um arquivo de teste Jest para cada um dos **6 algoritmos**, contendo **pelo menos dois cenários**, incluindo resultados esperados, casos-limite e entradas inválidas.

```text
src/
  validacoes.js
  algoritmos/
    numeroPrimo.js
    somatorio.js
    fibonacci.js
    mdc.js
    quickSort.js
    contagemInteiros.js
  index.js
tests/
  numeroPrimo.test.js
  somatorio.test.js
  fibonacci.test.js
  mdc.test.js
  quickSort.test.js
  contagemInteiros.test.js
examples/
  executar.js
.github/workflows/
  testes.yml
package.json
jest.config.cjs
```

## Programação defensiva e código limpo

- Variáveis e funções com nomes claros e responsabilidade definida.
- Validação de tipo, números finitos, inteiros seguros e parâmetros obrigatórios.
- Exceções com mensagens objetivas para entradas incorretas.
- Casos especiais tratados explicitamente (vetor vazio, número 0, negativos e duplicatas).
- Funções sem `console.log` ou interação com a interface (os exemplos ficam separados).
- QuickSort retorna um **novo vetor**, preservando os dados do chamador.
- Testes automatizados também rodam no **GitHub Actions** a cada push e pull request.

## Compatibilidade e exemplos da Atividade #1

- Número primo: `ehPrimo(11) === true`
- Somatório: `somatorio([2, 5, 8, 10, 15]) === 40`
- Fibonacci (10 termos): `gerarFibonacci(10)` → `[0,1,1,2,3,5,8,13,21,34]`
- MDC: `mdc(87, 36) === 3`
- QuickSort: `quickSort([8,3,6,1,10,2,5])` → `[1,2,3,5,6,8,10]`
- Contagem: `contarInteiros([3,5,1,8,4,6,3.3,2,7.5]) === 7`

**Observação:** para Fibonacci são aceitos de 0 a 79 termos, evitando resultados acima do limite de inteiros seguros do JavaScript. O MDC de `(0,0)` é indefinido e gera exceção.

## Entrega

- **Atividade:** Entregável #4 — Código limpo e sincronizado no GitHub
- **Origem:** [Entregável #1 — JavaScript](https://github.com/Ruan-levi/Entregavel1-JavaScript)
- **Repositório:** [Entregavel4-Ambientes](https://github.com/Ruan-levi/Entregavel4-Ambientes)
