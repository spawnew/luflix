import { types } from './Type'  


export const initialState = [] 






export function Redupeli(state, action) {

    switch (action.type) {
        case types.añadirPeli: {
            const peli = state.find((peli) => peli.titulo === action.payload.titulo)
            if (peli) {
                return state
            } else {
                return [...state, action.payload]
            }
        }
        case types.quitarPeli:
            return state.filter((peli) => peli.id !== action.payload.id)
        default:
            return state 
    }
}