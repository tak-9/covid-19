import React, {useContext} from 'react';
import { LoginContext } from '../contexts/LoginContext';

function TrackerContent() {
    let loginCtx = useContext(LoginContext);
    let { loggedIn, username } = loginCtx;

    return ( 
    <div>
        <h1>You are logged in as {username}. </h1>
        Tracker content will be inserted here.<br/>
    </div>
    );
}
export default TrackerContent;
