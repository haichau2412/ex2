import React from "react";
import Auth from "./containers/auth/Auth";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import UserDashBoard from "./containers/userdashboard/UserDashBoard";

const getAuthenticated = (state) => state.auth.authenticated;

function App() {
  const authenticated = useSelector(getAuthenticated);
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Auth authenticated={authenticated} />
        </Route>
        {authenticated ? (
          <Route exact path='/users'>
            <UserDashBoard />
          </Route>
        ) : (
          <Redirect exact from='/users' to='/' />
        )}

        <Route path='*' render={() => <div> 404 </div>} />
      </Switch>
    </>
  );
}

export default App;
