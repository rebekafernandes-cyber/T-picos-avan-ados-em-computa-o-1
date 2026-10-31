import type { Estudante } from "../models/Estudante.js";
import {
    validarEstudante,
    type DadosEstudanteEntrada
} from "../validators/estudanteValidator.js";

const estudantes: Estudante[] = [];

export function cadastrarEstudante(estudante: Estudante): void {
    const existente = buscarEstudante(estudante.matricula);

    if (existente !== null) {
        throw new Error("Matrícula já cadastrada.");
    }

    estudantes.push(estudante);
}

export function buscarEstudante(matricula: string): Estudante | null {
    const estudante = estudantes.find(
        (item: Estudante) => item.matricula === matricula
    );

    return estudante ?? null;
}

export function calcularMedia(estudante: Estudante): number | null {
    if (estudante.notas.length === 0) {
        return null;
    }

    const soma = estudante.notas.reduce(
        (total: number, nota: number) => total + nota,
        0
    );

    return soma / estudante.notas.length;
}

export function listarEstudantes(): Estudante[] {
    return [...estudantes];
}

export function cadastrarEstudanteValidado(
    entrada: DadosEstudanteEntrada
): Estudante | null {
    const resultado = validarEstudante(entrada);

    if (!resultado.valido || resultado.dados === undefined) {
        return null;
    }

    const estudante: Estudante = {
        ...resultado.dados,
        ativo: true,
        notas: []
    };

    cadastrarEstudante(estudante);
    return estudante;
}
