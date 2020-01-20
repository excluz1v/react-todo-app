import React, { Fragment, useContext, useEffect } from 'react'
import { Form } from '../components/Form'
import { Notes } from '../components/Notes'
import { FireBaseContext } from '../context/firebase/fireBase.context'
import { Loader } from '../components/Loader'


export const Home = () => {
    let { loading, notes, fetchNotes } = useContext(FireBaseContext)
    useEffect(() => {
        fetchNotes()
    }, [])



    return (
        <Fragment >
            <Form />
            <hr />
            {loading ? <Loader> </Loader> : <Notes notes={notes} />}

        </Fragment>
    )
}
