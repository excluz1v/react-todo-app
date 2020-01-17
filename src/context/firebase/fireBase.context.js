import React, { createContext, useReducer } from 'react'
import axios from 'axios'
import { FireBaseReducer, ShowLoaderAC, AddNoterAC, DeleteNoteAC } from '../../reducers/fireBase.reducer'

const url = process.env.REACT_APP_DB_URL


export const FireBaseContext = createContext()
export const FireBaseState = ({ children }) => {
    const initialState = {
        notes: [],
        loading: false
    }
    let fetchNotes = async () => {
        dispatch(ShowLoaderAC())
        const res = await axios.get(`${url}/notes.json`)
        console.log('fetchNotes', res.data)
    }

    let addNote = async (title) => {
        const note = {
            title, date: new Date().toJSON()
        }
        const res = axios.post(`${url}/notes.json`, note).then(AddNoterAC(title))
        console.log('addNote', res.data)
    }
    let deleteNote = async (id) => {
        await axios.delete(`${url}/notes/${id}.json`).then(dispatch(DeleteNoteAC(id)))

    }

    const [state, dispatch] = useReducer(FireBaseReducer, initialState)
    return (
        <FireBaseContext.Provider value={{
            fetchNotes, addNote, deleteNote,
            loading: state.loading,
            notes: state.notes
        }}>
            {children}
        </FireBaseContext.Provider>
    )
}


