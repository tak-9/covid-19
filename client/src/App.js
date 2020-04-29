import React from 'react';
import StatPage from './statPage';
import TrackerPage from './trackerPage';
import LoginPage from './loginPage';
import SignUpPage from './signUpPage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginContextProvider  from './contexts/LoginContext';
//import LogoutModal from './common/LogoutModal';

function App() {
  return (
    <div>
      <LoginContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={StatPage} />
            <Route exact path="/tracker" component={TrackerPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignUpPage} />
          </Switch>
          {/* <LogoutModal/> */}
        </BrowserRouter>
      </LoginContextProvider>
    </div>
  );
}
export default App;
