import React from 'react';
import Sidebar from '../common/Sidebar';
import Login from './Login';
import useScript from '../customhook/useScript';
import Topbar from '../common/Topbar'
import ContentWrapper from '../common/ContentWrapper';

function LoginPage() {
  useScript("js/sb-admin-2.js");
  return (
    <div id="wrapper">
        <Sidebar />
            <ContentWrapper>
                <Topbar title="Login" />
                <Login />
            </ContentWrapper>
    </div>
  );
}
export default LoginPage;
