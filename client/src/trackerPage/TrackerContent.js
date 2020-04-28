import React, {useContext} from 'react';
import Topbar from '../common/Topbar';
import { LoginContext } from '../contexts/LoginContext';


function TrackerContent() {
  let login = useContext(LoginContext);
  console.log("****loggedIn**** : ", login)
  return (
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
          <Topbar />
          <div>
            <h1>This page is private. </h1>
            <h3>Login Status: {login.loggedIn.toString()} Username: {login.username}</h3> 
            Tracker content will be inserted here.<br/>
          </div>
      </div>
    </div>
  );
}
export default TrackerContent;
