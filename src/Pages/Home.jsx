import React, { Fragment } from 'react'
import { Form } from '../components/Form'
import { Notes } from '../components/Notes'


export const Home = () => {
    let notes = new Array(3)
        .fill('')
        .map((f, i) => ({ id: i, title: `Note ${i + 1}`}))


    return (
        <Fragment >
            <Form />
            <hr />
            <Notes notes={notes} />
        </Fragment>
    )
}
