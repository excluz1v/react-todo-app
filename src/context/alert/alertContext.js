import React, { createContext, useReducer } from 'react'
import { ALertReducer, ShowAlertAC, HideAlertAC } from '../../reducers/AlertReducer';


export const AlertContext = (createContext());

export const AlertState = ({ children }) => {

    const [state, dispatch] = useReducer(ALertReducer, { visible: false })

    const show = (text, type = 'warning') => {
        dispatch(ShowAlertAC({ text, type }))
    }
    const hide = () => {
        dispatch(HideAlertAC())
    }

    return <AlertContext.Provider value={{ show, hide, alert: state }}>
        {children}
    </AlertContext.Provider>
}