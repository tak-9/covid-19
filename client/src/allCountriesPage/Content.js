import React from 'react';
import AllCountries from './allCountries';
import WashHand from './WashHand'
import Overview from './Overview';
import WorldCard from './WorldCard';

function Content() {
  return (
    <div className="container-fluid">
        <Overview />
        <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-7 col-md-9">
                <WorldCard />
                {/* <AllCountries/> */}
            </div>
            <div className="col-xl-5 col-lg-5 col-md-3">
                <WashHand />
            </div>
        </div>
    </div>
  );
}
export default Content;
