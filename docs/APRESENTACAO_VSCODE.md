# Como apresentar o Entregável 4 — roteiro prático pelo VS Code

**Tempo sugerido: de 4 a 6 minutos.** O professor pediu código limpo e testável, dois testes por algoritmo, comando `npm test`, sincronização no GitHub e README explicativo. A apresentação abaixo demonstra cada ponto sem slides obrigatórios.

## Antes de começar (no seu computador)

1. Instale o [Node.js](https://nodejs.org/) e o [VS Code](https://code.visualstudio.com/).
2. No VS Code, escolha **File > Open Folder** e abra a pasta `Entregavel4-Ambientes`.
3. Use **Terminal > New Terminal**. O terminal deve mostrar o caminho dessa pasta.
4. Se ainda não tiver clonado o projeto, execute:

```powershell
git clone https://github.com/Ruan-levi/Entregavel4-Ambientes.git
cd Entregavel4-Ambientes
```

5. Instale as dependências:

```powershell
npm install
```

**Se o PowerShell bloquear `npm.ps1`:** digite `npm.cmd install`. Para executar os testes, use `npm.cmd test`. Esse método não exige alterar a política de execução do Windows.

**Preparação para a demonstração:** abra previamente as abas `src/algoritmos/mdc.js`, `tests/mdc.test.js`, `src/validacoes.js` e `package.json`. Deixe o terminal integrado aberto.

---

## 1. Introdução e origem do código (30–45 segundos)

**Mostre:** `README.md` na raiz do projeto.

**O que falar:**

> "Esta é a quarta entrega da disciplina. Nós reaproveitamos os seis algoritmos fundamentais feitos na primeira atividade, como primo, Fibonacci, somatório, MDC, QuickSort e contagem. Agora, o objetivo é deixar o código mais organizado, corrigir o tratamento de entradas e provar o funcionamento por testes unitários com Jest."

Se o professor pedir a origem, abra o repositório [Entregável 1](https://github.com/Ruan-levi/Entregavel1-JavaScript/tree/main/JavaScript) em outra aba do navegador.

## 2. Explicar um algoritmo (45–60 segundos)

**Mostre:** `src/algoritmos/mdc.js`.

Use como exemplo `mdc(87, 36)`, cujo resultado é **3**.

**O que falar:**

> "Esta função calcula o máximo divisor comum usando o algoritmo de Euclides. Ela começa validando os dois números. Depois, enquanto o segundo valor for diferente de zero, calcula o resto e atualiza os valores. Quando o resto vira zero, o primeiro número contém o MDC. O resultado de 87 e 36 é 3."

**Aponte no código:**
- `validarInteiroSeguro`: rejeita tipo ou número inadequado;
- `Math.abs`: permite trabalhar com valores negativos;
- `while (b !== 0)`: repetição do algoritmo de Euclides;
- `throw new RangeError`: impede a operação indefinida `mdc(0, 0)`.

**Se perguntarem sobre clean code:** nomes claros, função com responsabilidade única e validação antes do processamento.

## 3. Mostrar como o Jest funciona (45–60 segundos)

**Mostre:** `tests/mdc.test.js` ao lado de `src/algoritmos/mdc.js`.

Trecho real presente no projeto:

```javascript
test("calcula MDC de 87 e 36, como na Atividade 1", () => {
  expect(mdc(87, 36)).toBe(3);
});
```

**O que falar:**

> "O Jest executa o algoritmo e compara o resultado real com o resultado esperado. Aqui, `test` descreve o cenário, `expect` chama a função e `toBe(3)` verifica que ela devolveu exatamente 3."

Mostre também:

```javascript
test("MDC de zero com zero é indefinido", () => {
  expect(() => mdc(0, 0)).toThrow(RangeError);
});
```

**O que falar:**

> "Este segundo teste comprova a programação defensiva, pois a função precisa rejeitar uma entrada sem resultado matemático válido. Testamos tanto o uso correto quanto erros esperados."

Há **40 testes no total**, em **6 arquivos**, bem acima do mínimo de dois por algoritmo.

## 4. Executar os testes diante do professor (30–60 segundos)

**Mostre:** terminal integrado do VS Code.

```powershell
npm test
```

No PowerShell bloqueado, a alternativa é:

```powershell
npm.cmd test
```

A saída esperada na versão atual tem o resumo:

```text
Test Suites: 6 passed, 6 total
Tests:       40 passed, 40 total
```

Os números acima foram confirmados no [GitHub Actions](https://github.com/Ruan-levi/Entregavel4-Ambientes/actions). A execução local também deve ser verificada antes da apresentação.

**O que falar:**

> "Configurei o `package.json` para executar o Jest com `npm test`. Todos os arquivos são localizados automaticamente pela configuração do Jest, então não é preciso testar função por função manualmente."

Se quiser demonstrar os resultados dos algoritmos fora dos testes, use `npm run exemplo`.

## 5. Mostrar o GitHub (30–60 segundos)

**Mostre:** [repositório](https://github.com/Ruan-levi/Entregavel4-Ambientes) e [aba Actions](https://github.com/Ruan-levi/Entregavel4-Ambientes/actions).

**O que falar:**

> "Todos os arquivos estão sincronizados no GitHub. O README explica como instalar e executar os testes. Além disso, configurei o GitHub Actions para repetir o processo automaticamente quando o código muda, validando se os testes continuam passando."

Demonstre no navegador a execução mais recente que exiba o status **Success**.

---

## Perguntas comuns e respostas simples

**1. Qual é a diferença entre Jest e npm?**  
O **npm** instala pacotes e executa scripts definidos em `package.json`. **Jest** é o framework que executa os testes e verifica resultados.

**2. O que significa `npm test`?**  
O npm procura o script `test` no `package.json`. Nesse projeto ele chama o Jest com `jest --runInBand`.

**3. Qual a diferença entre código limpo e programação defensiva?**  
Código limpo favorece leitura e manutenção (nomes claros, organização e responsabilidade única). Programação defensiva valida entradas e trata erros de forma previsível.

**4. Por que existem mais de dois testes em cada arquivo?**  
O requisito é um mínimo. Testar valores normais, limites e erros aumenta a confiança e reduz a chance de defeitos escaparem.

**5. O que acontece se um teste falhar?**  
O Jest mostra qual cenário falhou, o valor recebido e o valor esperado; no GitHub Actions o job fica com status de falha.

**6. O que faz o arquivo `src/validacoes.js`?**  
Centraliza validações utilizadas por várias funções, evitando repetir as mesmas verificações.

**7. O que é o GitHub Actions?**  
É a automação que instala dependências e executa os testes quando o código é enviado ou uma pull request é aberta.

**8. O projeto precisa de navegador ou servidor?**  
Não. Este entregável trata de algoritmos e testes unitários Node.js, executados no terminal.

## Checklist rápido antes de apresentar

- [ ] VS Code aberto na pasta certa (`Entregavel4-Ambientes`).
- [ ] Node.js instalado: `node --version`.
- [ ] Dependências instaladas: `npm install` ou `npm.cmd install`.
- [ ] `npm test` exibe 6 suítes e 40 testes aprovados.
- [ ] `src/algoritmos/mdc.js` e `tests/mdc.test.js` abertos.
- [ ] README e Actions disponíveis no navegador.
- [ ] Link para entregar no AVA: https://github.com/Ruan-levi/Entregavel4-Ambientes

**Dica:** não é necessário explicar cada linha de todos os algoritmos. Mostre um exemplo bem explicado, com teste de sucesso e teste de erro, e confirme que os demais arquivos seguem o mesmo padrão.
