import React from 'react'

export const Notes = ({ notes }) => {
    return (
        <ul className="list-group">
            {notes.map(note => (
                < li className="note list-group-item " key={note.id}>
                    <div>
                        <strong>
                            
                        </strong>
                        {note.title}
                        <small>{new Date().toLocaleDateString()}
                        </small>
                    </div>
                    <button type="button" className="btn btn-outline-danger btn-sm">&times;</button>
                </li>
            ))

            }
        </ul >

    )
}
