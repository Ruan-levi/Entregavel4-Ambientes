# Entregável 4 — Código Limpo e Testes Unitários

[![Testes Jest](https://github.com/Ruan-levi/Entregavel4-Ambientes/actions/workflows/testes.yml/badge.svg)](https://github.com/Ruan-levi/Entregavel4-Ambientes/actions/workflows/testes.yml)

**UNIFOR · Algoritmos Fundamentais · JavaScript · Node.js · Jest · GitHub Actions**

Este projeto dá continuidade ao [Entregável 1](https://github.com/Ruan-levi/Entregavel1-JavaScript). Foram reaproveitados os **seis algoritmos fundamentais em JavaScript**, reorganizados em funções independentes, com validação de dados e testes unitários automatizados.

> **Resultado conferido:** 6 arquivos de testes e **40 testes aprovados** no GitHub Actions. Consulte a [execução da versão sincronizada](https://github.com/Ruan-levi/Entregavel4-Ambientes/actions/runs/43064836191). As execuções posteriores podem ser acompanhadas na [aba Actions](https://github.com/Ruan-levi/Entregavel4-Ambientes/actions).

## Comece aqui

| Preciso... | Acesse |
| --- | --- |
| Executar e demonstrar a atividade no VS Code | [Guia de apresentação](docs/APRESENTACAO_VSCODE.md) |
| Conferir cada requisito da atividade | [Checklist do entregável](docs/REQUISITOS.md) |
| Ler ou modificar os algoritmos | [src/algoritmos](src/algoritmos) |
| Ler os testes unitários | [tests](tests) |
| Ver a verificação automática no GitHub | [Actions](https://github.com/Ruan-levi/Entregavel4-Ambientes/actions) |

## 1. Executar o projeto (passo a passo)

**Pré-requisitos:** [Node.js](https://nodejs.org/) versão 20 ou superior, npm e, para acompanhar o código, [Visual Studio Code](https://code.visualstudio.com/).

No terminal do VS Code, dentro da pasta clonada do repositório:

```bash
git clone https://github.com/Ruan-levi/Entregavel4-Ambientes.git
cd Entregavel4-Ambientes
npm install
npm test
```

Se você já abriu essa pasta no VS Code, execute **somente** `npm install` e `npm test` no terminal dessa pasta.

**Windows/PowerShell:** caso apareça a mensagem `npm.ps1 não pode ser carregado`, utilize `npm.cmd install` e `npm.cmd test` sem alterar as políticas de segurança.

Para mostrar os algoritmos funcionando com os exemplos da Atividade 1:

```bash
npm run exemplo
```

Para visualizar a cobertura dos testes:

```bash
npm run test:coverage
```

> Para cumprir o enunciado, **os dois comandos indispensáveis são `npm install` e `npm test`**. Não é preciso iniciar um servidor, abrir uma página ou configurar banco de dados.

## 2. Algoritmos revisados

| Algoritmo | O que ele faz | Exemplo real |
| --- | --- | --- |
| [Número primo](src/algoritmos/numeroPrimo.js) | Verifica se um número inteiro é primo | `ehPrimo(11)` → `true` |
| [Somatório](src/algoritmos/somatorio.js) | Soma os elementos de uma lista numérica | `somatorio([2,5,8,10,15])` → `40` |
| [Fibonacci](src/algoritmos/fibonacci.js) | Gera os primeiros termos da sequência | `gerarFibonacci(5)` → `[0,1,1,2,3]` |
| [MDC](src/algoritmos/mdc.js) | Calcula o máximo divisor comum | `mdc(87,36)` → `3` |
| [QuickSort](src/algoritmos/quickSort.js) | Ordena uma lista sem alterar a original | `quickSort([3,1,2])` → `[1,2,3]` |
| [Contagem de inteiros](src/algoritmos/contagemInteiros.js) | Conta valores inteiros em uma lista | `contarInteiros([1,2.5,3])` → `2` |

As versões iniciais desses algoritmos estão no [repositório da Atividade 1](https://github.com/Ruan-levi/Entregavel1-JavaScript/tree/main/JavaScript). Os programas Java dessa atividade não foram alterados, pois este entregável exige **npm e Jest**, ferramentas usadas para testar o código JavaScript.

## 3. Testes Jest

Cada algoritmo possui um arquivo de testes com **pelo menos dois cenários**, conforme solicitado. Além de validar os exemplos, os testes verificam situações especiais e entradas incorretas.

| Arquivo | Quantidade de testes | Exemplos de validação |
| --- | ---: | --- |
| [numeroPrimo.test.js](tests/numeroPrimo.test.js) | 6 | Número primo, composto, valores não inteiros |
| [somatorio.test.js](tests/somatorio.test.js) | 7 | Soma normal, lista vazia, valores inválidos |
| [fibonacci.test.js](tests/fibonacci.test.js) | 6 | Sequência normal, zero termos, limites |
| [mdc.test.js](tests/mdc.test.js) | 7 | MDC correto, negativos, operação indefinida |
| [quickSort.test.js](tests/quickSort.test.js) | 7 | Ordenação, repetidos, vetor original intacto |
| [contagemInteiros.test.js](tests/contagemInteiros.test.js) | 7 | Inteiros e decimais, negativos, entradas inválidas |
| **Total** | **40** | **6 suítes** |

Exemplo do arquivo de testes de MDC:

```javascript
test("calcula MDC de 87 e 36, como na Atividade 1", () => {
  expect(mdc(87, 36)).toBe(3);
});
```

O `test` define o comportamento esperado; `expect` executa a função; `toBe` compara o retorno com o valor correto. O Jest também testa exceções com `toThrow`.

## 4. Clean Code e programação defensiva

- **Nomes significativos:** `primeiroNumero`, `quantidadeDeInteiros`, `validarListaNumeros`.
- **Separação de responsabilidades:** um módulo por algoritmo; validações reutilizáveis em [src/validacoes.js](src/validacoes.js).
- **Tratamento de erros:** `TypeError` quando o tipo é inválido e `RangeError` quando o valor está fora das restrições.
- **Limites e casos especiais:** vetores vazios, zero, negativos, números repetidos e faixa de inteiros seguros.
- **Funções testáveis:** cálculos não dependem da interface, de entrada interativa ou do terminal.
- **Não alterar entradas:** o QuickSort retorna um **novo array**, preservando o vetor recebido.

Por exemplo, `mdc(0, 0)` gera uma exceção clara, em vez de apresentar um resultado sem significado matemático. No Fibonacci, o limite de 79 termos evita valores fora da faixa de inteiros seguros do JavaScript.

## 5. Organização dos arquivos

```text
Entregavel4-Ambientes/
├── src/
│   ├── algoritmos/             # As seis funções principais
│   ├── validacoes.js           # Validações compartilhadas
│   └── index.js                # Exportação das funções
├── tests/                      # Seis arquivos de testes Jest
├── examples/
│   └── executar.js             # Demonstração dos exemplos da Atividade 1
├── docs/
│   ├── APRESENTACAO_VSCODE.md  # Roteiro prático da apresentação
│   └── REQUISITOS.md           # Correspondência com o enunciado
├── .github/workflows/
│   └── testes.yml              # Execução automatizada no GitHub
├── jest.config.cjs             # Configuração do Jest
├── package.json                # Scripts e dependências npm
└── README.md                   # Este guia
```

## 6. Como os testes são executados no GitHub

O arquivo [testes.yml](.github/workflows/testes.yml) configura o **GitHub Actions**: ao enviar atualizações ao repositório, o GitHub instala as dependências, executa `npm test` e verifica os exemplos. Uma execução verde indica que **os testes automatizados daquele commit foram aprovados**.

Fluxo: **código JavaScript → testes Jest → npm test → GitHub Actions → resultado aprovado**.

## 7. Entrega acadêmica

- **Objetivo 1 — Código legível, defensivo e testável:** atendido pelos módulos de `src/` e pelos 40 testes em `tests/`.
- **Objetivo 2 — GitHub + README com instruções:** atendido pelo repositório versionado, este README e pelo workflow de testes.
- **Demonstração sugerida:** abrir um algoritmo e seu teste no VS Code, executar `npm test` e mostrar a aba Actions.

Leia também o [roteiro de apresentação](docs/APRESENTACAO_VSCODE.md), que contém falas curtas e os passos exatos para demonstrar ao professor.

**Repositório da entrega:** https://github.com/Ruan-levi/Entregavel4-Ambientes
