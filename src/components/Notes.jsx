import React, { useContext } from 'react'
import { FireBaseContext } from '../context/firebase/fireBase.context'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
export const Notes = ({ notes }) => {

    let { deleteNote } = useContext(FireBaseContext)
    return (
        <TransitionGroup component={'ul'} className="list-group">
            {notes ? notes.map(note => (
                <CSSTransition
                 key={note.id}
                 classNames={'note'}
                 timeout={1000}
                 >
                    < li className="note list-group-item ">
                        <div>
                            <strong>
                                {note.title}
                            </strong>
                            <p></p>
                            <small>{note.date}
                            </small>
                        </div>
                        <button type="button" onClick={() => {
                            deleteNote(note.id)

                        }} className="btn btn-outline-danger btn-sm">&times;</button>
                    </li>
                </CSSTransition>
            ))
                : undefined
            }

        </TransitionGroup>

    )
}
