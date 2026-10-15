import { configuracao } from "./config/configuracao.js";
import { Estudante } from "./models/Estudante.js";
import { Chamado } from "./models/Chamado.js";
import { Turma } from "./models/Turma.js";
import { FilaAtendimento } from "./models/FilaAtendimento.js";

console.log("=== SISTEMA DE SUPORTE ACADÊMICO ===\n");

// 1. Estudantes e notas
const estudante1 = new Estudante("2026001", "Ana Souza", "Análise e Desenvolvimento de Sistemas");
estudante1.adicionarNota(8.5);
estudante1.adicionarNota(9);
estudante1.adicionarNota(7.5);

const estudante2 = new Estudante("2026002", "Bruno Lima", "Análise e Desenvolvimento de Sistemas");
estudante2.adicionarNota(6);
estudante2.adicionarNota(7);
estudante2.adicionarNota(8);

for (const estudante of [estudante1, estudante2]) {
    const media = estudante.calcularMedia();
    console.log(`Estudante: ${estudante.nome}`);
    console.log(`Notas: ${estudante.listarNotas().join(", ")}`);
    console.log(`Média: ${media} — ${media >= configuracao.mediaMinima ? "Aprovado pela média" : "Abaixo da média mínima"}\n`);
}

// 2. Turma e vínculos
const turma = new Turma("ADS-101", "Programação Orientada a Objetos");
turma.matricular(estudante1, new Date("2026-08-10T12:00:00Z"), 96);
turma.matricular(estudante2, new Date("2026-08-12T12:00:00Z"), 88);

console.log("=== TURMA ===");
console.log(JSON.stringify(turma.gerarResumo(), null, 2));

// 3. Chamados associados a estudantes
const chamado1 = new Chamado("CH-001", "Dúvida sobre matrícula", estudante1);
const chamado2 = new Chamado("CH-002", "Acesso ao ambiente virtual", estudante2);

const fila = new FilaAtendimento();
fila.adicionar(chamado1);
fila.adicionar(chamado2);

console.log("\n=== FILA ANTES DO ATENDIMENTO ===");
console.log(`Tamanho: ${fila.consultarTamanho()}`);
console.log(JSON.stringify(fila.gerarRelatorio(), null, 2));

// 4. Retira o próximo chamado: FIFO
const proximo = fila.retirarProximo();
console.log("\n=== PRÓXIMO CHAMADO (FIFO) ===");
console.log(JSON.stringify(proximo.gerarResumo(), null, 2));

proximo.iniciarAtendimento("Técnica Camila");
console.log("\n=== CHAMADO EM ATENDIMENTO ===");
console.log(JSON.stringify(proximo.gerarResumo(), null, 2));

proximo.finalizar();
console.log("\n=== CHAMADO FINALIZADO ===");
console.log(JSON.stringify(proximo.gerarResumo(), null, 2));

console.log("\n=== FILA DEPOIS DE RETIRAR O PRIMEIRO ===");
console.log(`Tamanho: ${fila.consultarTamanho()}`);
console.log(JSON.stringify(fila.gerarRelatorio(), null, 2));

// Demonstra que fila vazia retorna null (depois de retirar os chamados restantes).
fila.retirarProximo();
console.log(`\nFila vazia retorna null: ${fila.retirarProximo() === null}`);

// Demonstração de encapsulamento: notas são cópia.
const notasCopia = estudante1.listarNotas();
notasCopia.push(100);
console.log(`\nNotas internas protegidas contra alteração externa: ${estudante1.listarNotas().join(", ")}`);
