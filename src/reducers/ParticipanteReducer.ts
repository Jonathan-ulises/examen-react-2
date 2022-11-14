import { ACCION_PARTICIPANTE, InitParticipante } from "../model/Particiante";

export default (state: InitParticipante, action: ACCION_PARTICIPANTE) => {
    const {payload, type} = action;
    console.log('ACTION ', action)
    switch (type) {
        case 'getParticipantes':
            return {
                ...state,
                participantes: payload.participantes
            };
        case 'getParticipante':
            return {
                ...state,
                selectedParticipante: payload.selectedParticipante
            };
        case 'addParticipante':
            let listP = [...state.participantes, payload.selectedParticipante!];
            localStorage.setItem('participantes', JSON.stringify(listP))
            state.participantes = listP;
            console.log('STATE',state)
            return state;

        case 'editParticipante':
            return {
                ...state,
                participantes: payload.participantes
            }
        default:
            return {
                ...state,
                selectedParticipante: payload.selectedParticipante
            };
    }
}