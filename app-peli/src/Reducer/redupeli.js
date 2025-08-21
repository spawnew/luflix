import { types } from './Type'  


export const initialState = [] 






export function Redupeli(state, action) {

    switch (action.type) {
        case types.añadirPeli:

            return [...state, action.payload]
        default:
            return state 
    }
}