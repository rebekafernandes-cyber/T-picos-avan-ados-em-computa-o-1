export type DadosEstudanteEntrada = {
    nome?: unknown;
    matricula?: unknown;
    curso?: unknown;
};

export interface ResultadoValidacao {
    valido: boolean;
    erros: string[];
    dados?: {
        nome: string;
        matricula: string;
        curso: string;
    };
}

export function validarEstudante(
    entrada: DadosEstudanteEntrada
): ResultadoValidacao {
    const erros: string[] = [];

    let nome: string | undefined;
    let matricula: string | undefined;
    let curso: string | undefined;

    if (typeof entrada.nome === "string") {
        nome = entrada.nome.trim();
        if (nome.length === 0) {
            erros.push("Nome não pode estar vazio.");
        }
    } else {
        erros.push("Nome deve ser uma string.");
    }

    if (typeof entrada.matricula === "string") {
        matricula = entrada.matricula.trim();
        if (!/^[0-9]{8,14}$/.test(matricula)) {
            erros.push("Matrícula deve conter de 8 a 14 dígitos.");
        }
    } else {
        erros.push("Matrícula deve ser uma string.");
    }

    if (typeof entrada.curso === "string") {
        curso = entrada.curso.trim();
        if (curso.length === 0) {
            erros.push("Curso não pode estar vazio.");
        }
    } else {
        erros.push("Curso deve ser uma string.");
    }

    if (
        erros.length > 0 ||
        nome === undefined ||
        matricula === undefined ||
        curso === undefined
    ) {
        return { valido: false, erros };
    }

    return {
        valido: true,
        erros: [],
        dados: { nome, matricula, curso }
    };
}
