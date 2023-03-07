import React from 'react';
import { Link, useRouteError } from "react-router-dom"

export default function Error() {

    const error = useRouteError()

    return (
        <section className='not-found-container'>
       
        <h1>Error: {error.message}</h1>
        <pre>{error.status} - {error.statusText}</pre>
      
            <Link to="/">Return to home</Link>
        </section>
    )
}

