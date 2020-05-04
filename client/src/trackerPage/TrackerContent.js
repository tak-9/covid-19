import React, {useContext} from 'react';
import Topbar from '../common/Topbar';
import { LoginContext } from '../contexts/LoginContext';
import Login from '../loginPage/Login';

function TrackerContent() {
    let loginCtx = useContext(LoginContext);
    let { loggedIn, username } = loginCtx;

    var content;
    if (loggedIn) { 
        content = (
        <div>
            <h1>You are logged in as {username}. </h1>
            Tracker content will be inserted here.<br/>
        </div>
        )
    } else {
        content =(
        <div>
            <h3 className="ml-3"><i class="fas fa-exclamation-triangle text-warning"></i> Login required to view this page.</h3>
            <Login />
        </div>
        )
    }

  return ( 
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
          <Topbar title="Stay Home Tracker"/>
          {content}
      </div>
    </div>
  );
}
export default TrackerContent;
