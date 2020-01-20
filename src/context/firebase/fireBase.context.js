import React, { createContext, useReducer } from 'react'
import axios from 'axios'
import { FireBaseReducer, ShowLoaderAC, AddNoterAC, DeleteNoteAC, RefreshNoteAC, hideLoader } from '../../reducers/fireBase.reducer'

const url = "https://react-todo-project-696c2.firebaseio.com"


export const FireBaseContext = createContext()
export const FireBaseState = ({ children }) => {

    const initialState = {
        notes: [],
        loading: false
    }
    const [state, dispatch] = useReducer(FireBaseReducer, initialState)
    let RefreshNote = () => {
        dispatch(RefreshNoteAC())
    }
    let fetchNotes = async () => {
     
        await axios.get(`${url}/notes.json`).then(resp => {
            if (resp.data) {
                let payload = Object.keys(resp.data).map(key => {
                    return {
                        ...resp.data[key],
                        id: key
                    }
                })
                dispatch(RefreshNoteAC(payload))
   
            }
           
        })
        // const res = await axios.get(`${url}/notes.json`)
        // const payload = Object.keys(res.data).map(key => {
        //     return {
        //         ...res.data[key],
        //         id: key
        //     }
        // })
        // dispatch(RefreshNoteAC(payload))
    }

    let addNote = async (title) => {
        const note = {
            title, date: new Date().toJSON()
        }
        try {
            dispatch(ShowLoaderAC())
            const res = await axios.post(`${url}/notes.json`, note)
            const payload = {
                ...note,
                id: res.data.name
            }
            dispatch(AddNoterAC(payload))
            dispatch(hideLoader())

        }
        catch (e) {
            throw new Error(e.message)
        }
    }
    let deleteNote = async (id) => {
        dispatch(ShowLoaderAC())
        await axios.delete(`${url}/notes/${id}.json`).then(dispatch(DeleteNoteAC(id)))
        .then(dispatch(hideLoader()))
    }


    return (
        <FireBaseContext.Provider value={{
            fetchNotes, addNote, deleteNote, RefreshNote,
            loading: state.loading,
            notes: state.notes
        }}>
            {children}
        </FireBaseContext.Provider>
    )
}


