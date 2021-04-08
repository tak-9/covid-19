import React, {useContext, useEffect} from 'react';
import useScript from '../customhook/useScript';
import { LoginContext } from '../contexts/LoginContext';
import ContentWrapper from '../common/ContentWrapper';
import Sidebar from '../common/Sidebar';
import TrackerContent from './TrackerContent';
import TrackerLogin from './TrackerLogin';
import Topbar from '../common/Topbar';
import axios from 'axios';
import { serverUrl } from '../util/env';

function TrackerPage() {
  useScript("js/sb-admin-2.js");

    let loginCtx = useContext(LoginContext);
    let { loggedIn, setLogInState } = loginCtx;

    // Check if loggedIn is true or false. 
    // If false 
    //     access /api/user/login/success 
    //     If 200 Then Set loggedIn as true, Set user name and other user's information. 
    //     If 400 Then do nothing. 

    useEffect(()=> {
        if (loggedIn !== false) {
            const url = `${serverUrl}/api/user/login/success`;
            axios.get(url, { withCredentials: true })
                .then((result)=>{
                    // console.log(`useEffect in trackerPage ${url}`, result.data);
                    setLogInState(true, result.data.username, result.data.name);
                })
                .catch((error)=>{
                    // If 400, do nothing. 
                    if (error.response) {
                        console.log("useEffect axios error ", error.response);
                    }
                })
        }    
    }, []);

    return (
    <div id="wrapper">
        <Sidebar currentPage="tracker" />
        <ContentWrapper>
            <Topbar title="Stay Home Tracker"/>
            {loggedIn ? <TrackerContent /> : <TrackerLogin />}
        </ContentWrapper>
    </div>
    );
}

export default TrackerPage;
