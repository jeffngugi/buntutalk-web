import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Home, Landing, Login, Registration, Start} from '../pages'
const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/registration' component={Registration} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/start' component={Start} />
        </Switch>
    )
}

export default Routes
