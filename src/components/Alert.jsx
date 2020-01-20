import React, { useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import {CSSTransition} from 'react-transition-group'

export const Alert = () => {
    const { alert, hide } = useContext(AlertContext);

  
    return (
        <CSSTransition
        in={alert.visible}
        timeout={1000}
        classNames={'alert'}
        mountOnEnter
        unmountOnExit
        >
        <div className={`alert alert-${alert.type || "warning"} alert-dismissible fade show`} >
            <strong>Attention</strong> {alert.text}
            <button type="button" onClick={hide} className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        </CSSTransition>

    )
}
