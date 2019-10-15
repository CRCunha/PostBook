import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import ContentHome from '../ContentHome'
import Posts from '../Posts'

const Routes = ()=> (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ContentHome} />
        <Route path='/posts' component={Posts} />
      </Switch>
    </BrowserRouter>
)

export default Routes;