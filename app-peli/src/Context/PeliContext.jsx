import { createContext } from "react";
import { useReducer } from "react";
import { types } from "../Reducer/Type";
import { Redupeli, initialState } from "../Reducer/redupeli";
export const PeliContext = createContext(null);

export const PeliProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Redupeli, initialState);
    const agregar = (titulo, imagen) => {
    
    
    
        dispatch({
            type: types.añadirPeli, payload: { titulo, imagen }
        })
    
    }
    
    
        const peli = {
            state, dispatch, agregar
        };

        return (
            <PeliContext.Provider value={peli}>
                {children}
            </PeliContext.Provider>
        );
    };
