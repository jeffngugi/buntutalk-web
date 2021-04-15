import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Home, Landing, Login, Registration} from '../pages'
const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/registration' component={Registration} />
            <Route exact path='/home' component={Home} />
        </Switch>
    )
}

export default Routes
