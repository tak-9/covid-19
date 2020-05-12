import React, {useState, useContext, useEffect} from 'react';
import { LoginContext } from '../contexts/LoginContext';
import { TrackerContext } from '../contexts/TrackerContext';
import { serverUrl } from '../util/env';
import axios from 'axios';

function Summary(props) {
    let loginCtx = useContext(LoginContext);    
    let { username } = loginCtx;

    let trackerCtx = useContext(TrackerContext);
    let { triggerUpdate } = trackerCtx;

    let [ outsideHours, setOutsideHours ] = useState(0);

    useEffect(() => {
        const today = new Date();
        const todayStr = today.getDate() + "-" + (parseInt(today.getMonth())+1) + "-" + today.getFullYear();
        // /api/track/hours/:username/:today/:daysBefore
        const url = `${serverUrl}/api/tracker/hours/${username}/${todayStr}/7`;
        //console.log("### Summary.js useEffect() axios get ",url);
        axios.get(url)
        .then((res)=>{
            //console.log("res", url, res);
            setOutsideHours(res.data.outside_hours);
        })
        .catch((err)=>{
            console.log(err);
            setOutsideHours(-1);
        });
    }, [triggerUpdate])

    var percentageAtHome = Math.round(100 - (( outsideHours / (24 * 7) ) * 100));
    var atHomeStatusJsx;
    if (outsideHours < 14) {
        atHomeStatusJsx = <h2 className="ml-5 mt-3">Good <i className="fas fa-smile text-warning"></i></h2> 
    } else if (outsideHours < 21) {
        atHomeStatusJsx = <h2 className="ml-5 mt-3">Bad <i className="fas fa-frown text-warning"></i></h2>        
    } else {
        atHomeStatusJsx = <h2 className="ml-5 mt-3">Poor <i className="fas fa-dizzy text-warning"></i></h2>
    }

    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Summary for {username} last 7 days</h6>
            </div>
            <div className="card-body">
                Total hours spent outside home: 
                <h2 className="ml-5 mt-3">{outsideHours} Hours</h2>
                Percentage of staying at home:
                <h2 className="ml-5 mt-3">{percentageAtHome}%</h2>
                Status:
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4">
                    {atHomeStatusJsx}
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-8">
                    <ul className="small">
                        <li>0-14hours: Good</li>
                        <li>14-21hours: Bad</li>
                        <li>21+ hours: Poor</li>
                    </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Summary;
