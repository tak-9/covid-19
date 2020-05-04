import React, {useContext} from 'react';
import useScript from '../customhook/useScript';
import { LoginContext } from '../contexts/LoginContext';
import ContentWrapper from '../common/ContentWrapper';
import Sidebar from '../common/Sidebar';
import TrackerContent from './TrackerContent';
import TrackerLogin from './TrackerLogin';
import Topbar from '../common/Topbar';

function TrackerPage() {
  useScript("js/sb-admin-2.js");

    let loginCtx = useContext(LoginContext);
    let { loggedIn, username } = loginCtx;

    // TODO: This is for development. Remove this when completed. 
    let jsx;
    if (process.env.NODE_ENV === "production") {
        jsx = loggedIn ? <TrackerContent /> : <TrackerLogin /> 
    } else {
        jsx = <TrackerContent/>;
    }

    return (
    <div id="wrapper">
        <Sidebar />
        <ContentWrapper>
            <Topbar title="Stay Home Tracker"/>
            {jsx}
        </ContentWrapper>
    </div>
    );
}

export default TrackerPage;
