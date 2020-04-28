import React, {useContext} from 'react';
import Topbar from '../common/Topbar';
import { LoginContext } from '../contexts/LoginContext';

function TrackerContent() {
  let loginCtx = useContext(LoginContext);
  let { loggedIn, username } = loginCtx;
  return ( 
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
          <Topbar title="Stay Home Tracker"/>
          {loggedIn ? (
            <div>
              <h1>You are logged in as {username}. </h1>
              Tracker content will be inserted here.<br/>
            </div>
          ) : (
            <div>
              <h1>You are not authorized to view this page.</h1>
            </div>
          )}
      </div>
    </div>
  );
}
export default TrackerContent;
