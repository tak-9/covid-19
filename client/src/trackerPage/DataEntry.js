import React, {useContext, useState} from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { LoginContext } from '../contexts/LoginContext';
import { serverUrl } from '../util/env';
import axios from 'axios';


function DataEntry(){
    let loginCtx = useContext(LoginContext);
    let { username } = loginCtx;

    const [selectedDay, setSelectedDay] = useState(null);
    const [outsideHours, setOutsideHours] = useState();


    var handleDayClick = function(day, modifiers = {}) {
        if (modifiers.disabled){
            return;
        }
        setSelectedDay((modifiers.selected) ? (modifiers.selected = undefined) : (modifiers.selected = day));
    }

    var buttonHandler = function() {
        console.log("buttonHandler()", outsideHours, selectedDay);
        const date = selectedDay.getDate();
        const month = parseInt(selectedDay.getMonth())+1;
        const year = selectedDay.getFullYear();
        let url = `${serverUrl}/api/tracker/${username}/${date}-${month}-${year}/${outsideHours}`;
        console.log(url);
        axios.post(url, {})
        .then(()=>{
            console.log("axios ok.");
        })
        .catch(()=>{
            console.log("axios error");
        })
    }

    var buttonDisabled = true;
    if ((selectedDay !== null) && (typeof outsideHours != 'undefined')){
        buttonDisabled = false;
    }

    return (
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">New Data Entry</h6>
            </div>
            <div class="card-body">
                <DayPicker
                    selectedDays={selectedDay}
                    onDayClick={handleDayClick}
                    disabledDays={[{after: new Date()}]}
                />
                <div className="container">
                    <p/>
                    {selectedDay?  "Selected Day: " + selectedDay.toLocaleDateString('en-AU'): 'Please select day 👻'}<p/>
                    Hours Spent Outside: 
                    <p/>
                    <input 
                        type="number" 
                        name="hours" 
                        min="1" 
                        max="24"
                        className="form-control"
                        onChange={(e)=>setOutsideHours(e.target.value)}
                    />
                    <p/>
                    <button className="btn btn-secondary btn-block" 
                            onClick={buttonHandler} 
                            disabled={buttonDisabled}> 
                        Register 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DataEntry;