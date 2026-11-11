# Conferência do enunciado — Entregável #4

**Atividade:** "Código limpo e sincronizado no Github" (11/11/2026).

O código foi elaborado com base nos algoritmos em JavaScript do [Entregável 1](https://github.com/Ruan-levi/Entregavel1-JavaScript/tree/main/JavaScript).

## Objetivo 1 — Código legível e testável unitariamente

| Exigência literal do enunciado | Evidência neste repositório | Situação |
| --- | --- | --- |
| Usar código fonte da Atividade #1 | Seis funções em `src/algoritmos`, com os exemplos originais em `examples/executar.js` | Atendido |
| Pelo menos dois testes por algoritmo fundamental | Seis arquivos `tests/*.test.js`, total de 40 testes | Atendido |
| Utilizar Jest | `package.json` e `jest.config.cjs` | Atendido |
| Executar com `npm install` e `npm test` | Scripts `test` e `test:coverage` no `package.json` | Atendido |
| Nomes significativos e clean code | Um módulo por algoritmo; `src/index.js` exporta as funções | Atendido |
| Validar entrada de dados e tratar erros | `src/validacoes.js`, `TypeError`, `RangeError` e testes de exceção | Atendido |

## Quantidade de testes

| Algoritmo original | Arquivo revisado | Arquivo de testes | Casos |
| --- | --- | --- | ---: |
| ContagemJavaScript.js | src/algoritmos/contagemInteiros.js | tests/contagemInteiros.test.js | 7 |
| FibonacciJavaScript.js | src/algoritmos/fibonacci.js | tests/fibonacci.test.js | 6 |
| MDCJavaScript.js | src/algoritmos/mdc.js | tests/mdc.test.js | 7 |
| NumeroPrimoJavaScript.js | src/algoritmos/numeroPrimo.js | tests/numeroPrimo.test.js | 6 |
| OrdenaçãoJavaScript.js | src/algoritmos/quickSort.js | tests/quickSort.test.js | 7 |
| SomatorioJavaScript.js | src/algoritmos/somatorio.js | tests/somatorio.test.js | 7 |
| **Total** | **6 algoritmos** | **6 arquivos** | **40** |

**Observação:** os arquivos Java da primeira atividade permaneceram no repositório original. A versão entregue aqui utiliza JavaScript porque o requisito pede testes via **Jest** e **npm**.

## Objetivo 2 — Código sincronizado no GitHub

| Exigência | Evidência | Situação |
| --- | --- | --- |
| Publicar o código-fonte no GitHub | [Repositório Entregavel4-Ambientes](https://github.com/Ruan-levi/Entregavel4-Ambientes) | Atendido |
| Criar README explicando execução dos testes | [README principal](../README.md) com `npm install` e `npm test` | Atendido |
| Facilitar execução e conferência pelo professor | [Guia VS Code](APRESENTACAO_VSCODE.md) e links diretos para algoritmos/testes | Complemento |
| Automatizar a conferência após sincronização | [Workflow de testes](../.github/workflows/testes.yml) | Complemento |

## Evidência de execução

A versão principal anterior à revisão final foi validada com **6 suítes e 40 testes aprovados**, confirmados na [execução do GitHub Actions](https://github.com/Ruan-levi/Entregavel4-Ambientes/actions/runs/43064836191). Para conferir a versão final atualizada, veja a [lista de execuções](https://github.com/Ruan-levi/Entregavel4-Ambientes/actions) e abra a execução mais recente com status **Success**.

## Como comprovar sem slides

1. Abrir `src/algoritmos/mdc.js` (algoritmo limpo).
2. Abrir `tests/mdc.test.js` (um caso correto e outro com exceção).
3. Executar `npm test` no terminal VS Code (testes automatizados).
4. Abrir `README.md` (documentação exigida).
5. Abrir GitHub Actions (sincronização e verificação online).

*Esse roteiro cobre diretamente os itens do enunciado, sem exigir uma apresentação em PowerPoint.*
