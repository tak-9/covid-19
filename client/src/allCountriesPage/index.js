import React from 'react';
import ContentWrapper from '../common/ContentWrapper';
import Sidebar from '../common/Sidebar';
import Topbar from '../common/Topbar';
import useScript from '../customhook/useScript';
import Content from './Content';

function AllCountriesPage() {
    useScript("js/sb-admin-2.js");

    return (
        <div id="wrapper">
            <Sidebar currentPage="allcountries" />
            <ContentWrapper>
                <Topbar title="Worldwide Status"/>
                <Content />
            </ContentWrapper>
        </div>
    );
}

export default AllCountriesPage;
