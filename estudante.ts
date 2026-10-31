export type Estudante = {
    readonly matricula: string;
    nome: string;
    curso: string;
    ativo: boolean;
    readonly notas: readonly number[];
};
