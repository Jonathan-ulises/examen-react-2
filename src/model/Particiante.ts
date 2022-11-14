export interface InitParticipante {
    participantes: Particpante[],
    selectedParticipante: Particpante|null
}

export interface Particpante {
    id?: string,
    nombre?: string,
    apelliodoP?: string,
    apellidoM?: string,
    email?: string,
    twitter?: string
    avatar?: string,
    isTerm?: boolean
}

export type ACCION_PARTICIPANTE = {
    type: string,
    payload: InitParticipante;
}

export type ACCION_P = {
    type: string,
    payload: InitParticipante;
}