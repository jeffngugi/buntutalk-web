import React from 'react'
import {Route, Switch} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <Switch>
                <Route name='/login' />
            </Switch>
        </>
    )
}

export default Navbar
