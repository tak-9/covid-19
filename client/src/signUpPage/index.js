import React from 'react';
import Sidebar from '../common/Sidebar';
import SignUp from './SignUp';
import useScript from '../customhook/useScript';
import Topbar from '../common/Topbar';
import ContentWrapper from '../common/ContentWrapper';

function SignUpPage() {
  useScript("js/sb-admin-2.js");
  return (
    <div id="wrapper">
        <Sidebar currentPage="signup" />
        <ContentWrapper>
            <Topbar title="Sign Up" />
            <SignUp />
        </ContentWrapper>
    </div>
  );
}
export default SignUpPage;
