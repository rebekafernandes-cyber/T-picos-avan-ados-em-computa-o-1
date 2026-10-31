import type { Estudante } from "./estudante.js";

export type StatusChamado =
    | "ABERTO"
    | "EM_ATENDIMENTO"
    | "FINALIZADO";

export interface Chamado {
    readonly id: number;
    titulo: string;
    solicitante: Estudante;
    responsavel?: string;
    status: StatusChamado;