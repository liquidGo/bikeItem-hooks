import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Admin from './Admin'
import App from './App'
import Home from './page/Home/Home'
import Buttons from './ui/Button'
import Error from './page/Error/Error'
import Modals from './ui/Modal'
import Loading from './ui/Loading'
import Messages from './ui/Messages'
import Notification from './ui/Notification'
import Tabs1 from './ui/Tabs'
import Gallerys from './ui/Gallerys'
import Carousel1 from './ui/Carousel'

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
                                    <Route path='/admin/ui/buttons' component={Buttons}></Route>
                                    <Route path='/admin/ui/modals' component={Modals}></Route>
                                    <Route path='/admin/ui/loadings' component={Loading}></Route>
                                    <Route path='/admin/ui/Notification' component={Notification}></Route>
                                    <Route path='/admin/ui/messages' component={Messages}></Route>
                                    <Route path='/admin/ui/tabs' component={Tabs1}></Route>
                                    <Route path='/admin/ui/gallery' component={Gallerys}></Route>
                                    <Route path='/admin/ui/carousel' component={Carousel1} ></Route>
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
