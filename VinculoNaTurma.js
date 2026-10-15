export class VinculoNaTurma {
    constructor(estudante, dataEntrada = new Date(), frequencia = 100) {
        if (!estudante || typeof estudante.matricula !== "string") {
            throw new Error("É necessário informar um estudante válido.");
        }
        if (!(dataEntrada instanceof Date) || Number.isNaN(dataEntrada.getTime())) {
            throw new Error("A data de entrada deve ser uma data válida.");
        }
        if (typeof frequencia !== "number" || !Number.isFinite(frequencia) || frequencia < 0 || frequencia > 100) {
            throw new Error("A frequência deve estar entre 0 e 100.");
        }

        this.estudante = estudante;
        this.dataEntrada = new Date(dataEntrada.getTime());
        this.frequencia = frequencia;
    }

    atualizarFrequencia(frequencia) {
        if (typeof frequencia !== "number" || !Number.isFinite(frequencia) || frequencia < 0 || frequencia > 100) {
            throw new Error("A frequência deve estar entre 0 e 100.");
        }
        this.frequencia = frequencia;
    }

    gerarResumo() {
        return {
            matricula: this.estudante.matricula,
            nome: this.estudante.nome,
            dataEntrada: this.dataEntrada.toISOString().slice(0, 10),
            frequencia: this.frequencia
        };
    }
}
