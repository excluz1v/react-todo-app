import React, { Fragment, useContext, useEffect } from 'react'
import { Form } from '../components/Form'
import { Notes } from '../components/Notes'
import { FireBaseContext } from '../context/firebase/fireBase.context'
import { Loader } from '../components/Loader'

export const Home = () => {

    const { loading, notes, fetchNotes } = useContext(FireBaseContext)
    useEffect(() => {
        fetchNotes()

    }, []);

    return (
        <Fragment >
            <Form />
            <hr />
            {loading ? <Loader /> : <Notes notes={notes} />}
        </Fragment>
    )
}
