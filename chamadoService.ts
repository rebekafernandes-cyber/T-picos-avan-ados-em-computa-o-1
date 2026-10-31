import type {
    Chamado,
    StatusChamado
} from "../models/Chamado.js";

const chamados: Chamado[] = [];

export function cadastrarChamado(chamado: Chamado): void {
    if (buscarChamado(chamado.id) !== null) {
        throw new Error("ID de chamado já cadastrado.");
    }

    chamados.push(chamado);
}

export function buscarChamado(id: number): Chamado | null {
    const chamado = chamados.find(
        (item: Chamado) => item.id === id
    );

    return chamado ?? null;
}

export function atualizarStatus(
    chamado: Chamado,
    novoStatus: StatusChamado
): boolean {
    const transicoesValidas: Record<StatusChamado, StatusChamado[]> = {
        ABERTO: ["EM_ATENDIMENTO"],
        EM_ATENDIMENTO: ["FINALIZADO"],
        FINALIZADO: []
    };

    if (!transicoesValidas[chamado.status].includes(novoStatus)) {
        return false;
    }

    chamado.status = novoStatus;
    return true;
}

export function listarChamados(): Chamado[] {
    return [...chamados];
}
