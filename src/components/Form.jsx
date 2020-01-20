import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { FireBaseContext } from '../context/firebase/fireBase.context'


export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const fireBase = useContext(FireBaseContext)
    const submitHandler = event => {
        event.preventDefault()
        if (value.trim()) {
            fireBase.addNote(value)
            alert.show('заметка была добавлена', 'success')
            setValue('')
        } else {
            alert.show('Enter notice', 'warning')
        }

    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text" className='form-control' placeholder='enter your note' value={value} onChange={e => setValue(e.target.value)} />
            </div>
        </form>

    )
}
