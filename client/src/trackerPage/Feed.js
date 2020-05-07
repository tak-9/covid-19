import React, {useState, useContext, useEffect} from 'react';
import { LoginContext } from '../contexts/LoginContext';
import { TrackerContext } from '../contexts/TrackerContext';
import { serverUrl } from '../util/env';
import axios from 'axios';

function Feed() {
    let loginCtx = useContext(LoginContext);    
    let { username } = loginCtx;
    let trackerCtx = useContext(TrackerContext);
    let { triggerUpdate } = trackerCtx;

    var [feedData, setFeedData] = useState(); // Data received from Axios

    useEffect(() => {
        const today = new Date();
        const todayStr = today.getDate() + "-" + (parseInt(today.getMonth())+1) + "-" + today.getFullYear();
        // /api/feed/:username/:today/:daysBefore
        const url = `${serverUrl}/api/tracker/feed/${username}/${todayStr}/7`;
        axios.get(url)
        .then((res)=>{
            console.log("### Feed.js useEffect() axios get ", url, res);
            setFeedData(res.data[0]);
        })
        .catch((err)=>{
            console.log("### Feed.js useEffect() axios get ", err);
        });
    },[triggerUpdate])

    var jsx ; 
    if (typeof feedData != 'undefined') {
        var jsx = feedData.tracker.map((item, i) => {
                let dayName = new Date(item.day).toLocaleDateString("en-AU", {weekday: 'long'});
                let monthName = new Date(item.day).toLocaleDateString("en-AU", {month: 'long'});
                let dateStr = dayName + ", " + new Date(item.day).getDate() + " " + monthName;
                return <Activity key={i} 
                            username={feedData.username}
                            date={dateStr}
                            outsidehours={item.outsidehours} />
            })
    } 

    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Feed for last 7 days</h6>
            </div>
            <div class="card-body">
                {jsx}  
            </div>
        </div>    
    )

}

function Activity(props) {
    return (
        <div>
            <b>{props.date}</b><br/> 
                <span className="ml-4">
                    {props.username} has spent <b>{24-props.outsidehours}</b> hours at home, <b>{props.outsidehours}</b> hour outside.
                </span> 
            <p/>
        </div>
    )
}

export default Feed;