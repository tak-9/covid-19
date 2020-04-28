import React, {useContext} from 'react';
import Sidebar from '../common/Sidebar';
import TrackerContent from './TrackerContent';
import { LoginContext } from '../contexts/LoginContext';

function TrackerPage() {
  let login = useContext(LoginContext);

  console.log("****loggedIn**** : ", login)

  return (
    <div id="wrapper">
        <Sidebar />
        <TrackerContent />
    </div>
  );
}

export default TrackerPage;
