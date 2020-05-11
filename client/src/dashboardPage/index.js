import React from 'react';
import Sidebar from '../common/Sidebar';
import Content from './Content';
import useScript from '../customhook/useScript';
import ContentWrapper from '../common/ContentWrapper';
import Topbar from '../common/Topbar';

function DashboardPage() {
  useScript("js/sb-admin-2.js");
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
