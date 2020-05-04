import React, {useContext} from 'react';
import { LoginContext } from '../contexts/LoginContext';
import Summary from './Summary';
import DataEntry from './DataEntry';

function TrackerContent() {
    let loginCtx = useContext(LoginContext);
    let { loggedIn, username } = loginCtx;

    return ( 
        <div class="container-fluid">
            <div className="row">
                <div class="col-lg-7">
                    <Summary/>
                </div>
                <div class="col-lg-4">
                    <DataEntry/>
                </div>
            </div>
        </div>
    );
}
export default TrackerContent;
