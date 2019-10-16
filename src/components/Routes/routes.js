import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import ContentHome from '../ContentHome'
import Posts from '../Posts'
import AdicionarLivro from '../AdicionarLivro'
import NavBar from '../NavBar'

const Routes = ()=> (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact={true}  component={ContentHome} />
        <Route path='/posts' component={Posts} />
        <Route path='/adicionarLivro' component={AdicionarLivro} /> 
      </Switch>
    </BrowserRouter>
)

export default Routes;