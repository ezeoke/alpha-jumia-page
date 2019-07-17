import React from 'react';
import { Switch, NavLink, Route, BrowserRouter } from 'react-router-dom';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import NotFoundPage from '../components/NotFoundPage';
import Home from '../components/Home';

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact={true}/>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route component={NotFoundPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter