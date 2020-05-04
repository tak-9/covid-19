import React, {useContext} from 'react';
import { LoginContext } from '../contexts/LoginContext';

function Summary() {
    let loginCtx = useContext(LoginContext);
    let { loggedIn, username } = loginCtx;

    return (
        <div class="card shadow mb-4">
            <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Summary for {username} last 7 days</h6>
            </div>
            <div class="card-body">
                Total hours spent outside home: 
                <h1 className="ml-5 mt-3"> 8 Hours</h1>
                Percentage of staying at home: 
                <h1 className="ml-5 mt-3"> 95%</h1>
                Status:
                <h1 className="ml-5 mt-3">Excellent <i class="fas fa-smile text-warning"></i></h1>
                {/* <h1>60-80% <i class="fas fa-frown text-warning"></i> 0-60% <i class="fas fa-dizzy text-warning"></i> </h1> */}
            </div>
        </div>
    )
}

export default Summary;
