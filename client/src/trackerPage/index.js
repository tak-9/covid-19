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
    let { loggedIn } = loginCtx;

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
