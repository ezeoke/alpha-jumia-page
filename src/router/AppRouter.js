import React from 'react';
import { Switch, NavLink, Route, BrowserRouter } from 'react-router-dom';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='./' component={Home} exact={true}/>
          <Route path='./login' component={Login} />
          <Route path='./signup' component={SignUp} />
          {/* <Route path='./' component={Home}/> */}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter