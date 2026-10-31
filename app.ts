import {
    cadastrarEstudanteValidado,
    buscarEstudante,
    calcularMedia,
    listarEstudantes
} from "./services/estudanteService.js";

const estudante = cadastrarEstudanteValidado({
    nome: "Maria",
    matricula: "20261001",
    curso: "Desenvolvimento de Sistemas"
});

if (estudante !== null) {
    console.log("Estudante cadastrado:", estudante.nome);
    console.log("Média:", calcularMedia(estudante));
}

const encontrado = buscarEstudante("20261001");

if (encontrado !== null) {
    console.log("Busca realizada:", encontrado.nome);
}

console.log("Lista de estudantes:", listarEstudantes());
