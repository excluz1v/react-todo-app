import React, { useContext } from 'react'
import { FireBaseContext } from '../context/firebase/fireBase.context'

export const Notes = ({ notes }) => {

    let {deleteNote}= useContext(FireBaseContext)
    return (
        <ul className="list-group">
            {notes ? notes.map(note => (
                < li className="note list-group-item " key={note.id}>
                    <div>
                        <strong>
                        </strong>
                        {note.title}
                        <small>{new Date().toLocaleDateString()}
                        </small>
                    </div>
                    <button type="button" onClick={() => {deleteNote(note.id)

                    }} className="btn btn-outline-danger btn-sm">&times;</button>
                </li>
            ))
                : undefined
            }

        </ul >

    )
}
