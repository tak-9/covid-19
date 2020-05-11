import React from 'react';
import DashboardPage from './dashboardPage';
import AllCountriesPage from './allCountriesPage';
import TrackerPage from './trackerPage';
import LoginPage from './loginPage';
import SignUpPage from './signUpPage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginContextProvider  from './contexts/LoginContext';
import TrackerContextProvider from './contexts/TrackerContext';
//import LogoutModal from './common/LogoutModal';

function App() {
  return (
    <div id="page-top">
      <LoginContextProvider>
      <TrackerContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={DashboardPage} />
            <Route exact path="/allcountries" component={AllCountriesPage} />
            <Route exact path="/tracker" component={TrackerPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignUpPage} />
          </Switch>
          {/* <LogoutModal/> */}
        </BrowserRouter>
        </TrackerContextProvider>
      </LoginContextProvider>
    </div>
  );
}
export default App;
