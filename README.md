# Sistema de Suporte Acadêmico — POO com JavaScript

Projeto demonstrativo de orientação a objetos usando Node.js e módulos ECMAScript (ESM), sem dependências externas.

## Requisitos

- Node.js 18 ou superior
- Visual Studio Code (opcional)

## Como executar

1. Extraia a pasta do projeto.
2. Abra `suporte-academico-oo` no VS Code.
3. Abra um terminal na pasta do projeto.
4. Execute:

```bash
npm start
```

Ou diretamente:

```bash
node src/app.js
```

## Organização

```text
suporte-academico-oo/
├── package.json
├── README.md
└── src/
    ├── app.js
    ├── config/
    │   └── configuracao.js
    └── models/
        ├── Estudante.js
        ├── Chamado.js
        ├── Turma.js
        ├── FilaAtendimento.js
        └── VinculoNaTurma.js
```

## Conceitos aplicados

- **Encapsulamento:** campos privados `#notas`, `#status`, `#vinculos` e `#chamados`.
- **Associação:** cada `Chamado` mantém uma referência ao `Estudante` solicitante.
- **Composição:** `Turma` cria e controla os objetos `VinculoNaTurma`.
- **Validação:** notas de 0 a 10, frequência de 0 a 100, matrícula estável e transições válidas de estado.
- **FIFO:** a fila atende primeiro o chamado que entrou primeiro.
- **Cópias/projeções:** os métodos de listagem devolvem cópias ou objetos-resumo, não os arrays privados.
- **ESM:** importações e exportações nomeadas, com `"type": "module"` no `package.json`.

## Observações de projeto

A matrícula do estudante é definida no construtor e não possui um método público para alterá-la. A turma não fornece acesso aos vínculos internos: ela oferece métodos para matricular e listar os estudantes. A fila retorna `null` quando não há chamados.