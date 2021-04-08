import React from 'react';
import WashHand from './WashHand'
import Overview from './Overview';
import WorldCard from './WorldCard';

function Content() {
  return (
    <div className="container-fluid">
        <Overview />
        <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-7 col-md-12">
                <WorldCard />
                {/* <AllCountries/> */}
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12">
                <WashHand />
            </div>
        </div>
    </div>
  );
}
export default Content;
