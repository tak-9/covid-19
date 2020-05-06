import React from 'react';
import Summary from './Summary';
import DataEntry from './DataEntry';
import Feed from './Feed';

function TrackerContent() {
    return ( 
        <div class="container-fluid">
            {console.log("TrackerContent()")}
            <div className="row">
                <div class="col-lg-7">
                    <Summary />
                    <Feed/>
                </div>
                <div class="col-lg-4">
                    <DataEntry />
                </div>
            </div>
        </div>
    );
}
export default TrackerContent;
