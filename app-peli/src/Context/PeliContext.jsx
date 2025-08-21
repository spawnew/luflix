import { createContext } from "react";
import { useReducer } from "react";
import { types } from "../Reducer/Type";
import { Redupeli, initialState } from "../Reducer/redupeli";
export const PeliContext = createContext(null);

export const PeliProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Redupeli, initialState);
    const agregar = (titulo, imagen,id) => {
    
    
    
        dispatch({
            type: types.añadirPeli, payload: { titulo, imagen,id }
        })
    }
      const quitar = (id) => {
    
    
    
        dispatch({
            type: types.quitarPeli, payload: { id }
        })
    
    }
    
    
        const peli = {
            state, dispatch, agregar,quitar
        };

        return (
            <PeliContext.Provider value={peli}>
                {children}
            </PeliContext.Provider>
        );
    };
