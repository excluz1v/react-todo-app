import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export const Notes = ({ notes, onRemove }) => {


    return (
        <TransitionGroup component={'ul'} className="list-group">
            {notes.map(note => (
                <CSSTransition key={note.id}
                classNames={'note'}
                timeout={1000}
                >
                    < li className="note list-group-item " >
                        <div>
                            <strong>
                            </strong>
                            {note.title}
                            <small>{new Date().toLocaleDateString()}
                            </small>
                        </div>
                        <button type="button" onClick={() => { onRemove(note.id) }} className="btn btn-outline-danger btn-sm">&times;</button>
                    </li>
                </CSSTransition>
            ))

            }
        </TransitionGroup >

    )
}
