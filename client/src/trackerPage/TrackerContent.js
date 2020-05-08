import React from 'react';
import Summary from './Summary';
import DataEntry from './DataEntry';
import Feed from './Feed';

function TrackerContent() {
    return ( 
        <div className="container-fluid">
            {console.log("TrackerContent()")}
            <div className="row">
                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
                    <Summary />
                    <Feed/>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-12 col-sm-12">
                    <DataEntry />
                </div>
            </div>
        </div>
    );
}
export default TrackerContent;
