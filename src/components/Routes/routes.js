import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import ContentHome from '../ContentHome'
import Posts from '../Posts'
import AdicionarLivro from '../AdicionarLivro'

const Routes = ()=> (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ContentHome} />
        <Route path='/posts' component={Posts} />
        <Route path='/adicionarLivro' component={AdicionarLivro} /> 
      </Switch>
    </BrowserRouter>
)

export default Routes;