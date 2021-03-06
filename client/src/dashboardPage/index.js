import React, { useEffect } from 'react';
import Sidebar from '../common/Sidebar';
import Content from './Content';
import useScript from '../customhook/useScript';
import ContentWrapper from '../common/ContentWrapper';
import Topbar from '../common/Topbar';
import axios from 'axios';


function DashboardPage() {
  useScript("js/sb-admin-2.js");

  useEffect(()=>{
        // Wakeup Heroku when accessed from Netlify
        if (window.location.hostname === "covid19-au.netlify.app") {
            console.log("Accessing https://covid19-au.herokuapp.com/img/login.jpg This is only for netlify");
            axios.get("https://covid19-au.herokuapp.com/img/login.jpg");
        }
    }
  );
    
  return (
    <div id="wrapper">
        <Sidebar currentPage="dashboard"/>
        <ContentWrapper>
            <Topbar title="Dashboard" />
            <Content />
        </ContentWrapper>
    </div>
  );
}
export default DashboardPage;
