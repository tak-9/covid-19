import React, {useState} from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

function DataEntry(){
    const [selectedDay, setSelectedDay] = useState(null);

    // var handleDayClick = function(day, { selected }) {
    //     setSelectedDay((selected) ? (selected = undefined) : (selected = day));
    // }

    var handleDayClick = function(day, modifiers = {}) {
        if (modifiers.disabled){
            return;
        }
        setSelectedDay((modifiers.selected) ? (modifiers.selected = undefined) : (modifiers.selected = day));
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
                    {selectedDay?  selectedDay.toLocaleDateString('en-AU'): 'Please select day 👻'}<p/>
                    Hours Spent Outside: 
                    <p/>
                    <input 
                        type="number" 
                        name="hours" 
                        min="1" 
                        max="24"
                        className="form-control"
                    />
                    <p/>
                    <button className="btn btn-secondary btn-block"> Register </button>
                </div>
            </div>
        </div>
    )
}

export default DataEntry;