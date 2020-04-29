import React from 'react';
import Sidebar from '../common/Sidebar';
import SignUp from './SignUp';
import useScript from '../customhook/useScript';

function SignUpPage() {
  useScript("js/sb-admin-2.js");
  return (
    <div id="wrapper">
        <Sidebar />
        <SignUp />
    </div>
  );
}
export default SignUpPage;
