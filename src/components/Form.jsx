import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { FireBaseContext } from '../context/firebase/fireBase.context'


export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const FireBase = useContext(FireBaseContext)
    const submitHandler = event => {
        event.preventDefault()
        if (value.trim()) {
            FireBase.addNote(value.trim())
            .then(()=>{alert.show('заметка была добавлена', 'success')})
                    .catch(()=>{alert.show('something Wrong', 'danger') })
            
            setValue('')
        } else {
            alert.show('Enter notice', 'warning')
        }
        FireBase.fetchNotes()

    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text" className='form-control' placeholder='enter your note' value={value} onChange={e => setValue(e.target.value)} />
            </div>
        </form>

    )
}
