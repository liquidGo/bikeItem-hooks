import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Admin from './Admin'
import App from './App'
import Home from './page/Home/Home'
import Error from './page/Error/Error'

export default function Routers() {
    return (
        <div>
            <Router>
                <Admin>
                    <Switch>
                        <Route path='/' render={() => (
                            <App>
                                <Switch>
                                    <Route path='/' exact component={Home}></Route>
                                    <Route path='/admin/home' component={Home}></Route>
                                    <Route component={Error}></Route>
                                </Switch>
                            </App>
                        )}
                        />
                    </Switch>
                </Admin>
            </Router>
        </div>
    )
}
