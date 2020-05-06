const express = require('express')
const router = express.Router()
const User = require('../database/models/user')
const passport = require('../passport')

// Save number of hours staying at home. 
// date is dd-mm-yyyy
router.post('/:username/:date/:hours', (req, res) => {
    console.log('POST /tracker/:username/:date/:hours is called.', req.params.username, req.params.hours);
    var { username, date, hours } = req.params;
    // console.log(username, date, hours);

    // Get date 
    var dateArr = date.split('-');
    var day = parseInt(dateArr[0]);
    var month = parseInt(dateArr[1]);
    var year = parseInt(dateArr[2]);
    // console.log(`${year} ${month} ${day}`)
    // 'month' argument for new Date() is 0 - 11
    var dayStart = new Date(year, month-1, day, 0, 0, 0, 0);
    var dayEnd = new Date(year, month-1, day, 23, 59, 59, 999);

    console.log("*** dayStart dayEnd", dayStart, dayEnd)

    const filter = { username: username ,
                        'tracker.day': {$gt: dayStart, $lt: dayEnd} 
                    };
    const setNewValue = { $set: {'tracker.$.outsidehours': hours} }; 
    const projection = { username: username ,
                            tracker: { $elemMatch: {day: {$gt: dayStart, $lt: dayEnd}}}
                        };
    
    //TODO: Fix bug upsert is not working. 
    User.findOneAndUpdate(
        filter,
        setNewValue, 
        { upsert: true, select: projection } 
    )
    .then((dbResult) => {
        console.log("*** findOneAndUpdate:", dbResult);
        res.json(dbResult);
    })
    .catch(err => {
        console.log("*** error ***",err);
        res.status(500).json(err)
    });

})

// Get number of hours spent outside for past x days.
// :today  dd-mm-yyyy
router.get('/hours/:username/:today/:daysBefore', (req, res, next) => {
    console.log('GET /api/tracker/hours/:username/:today/:daysBefore is called.', req.params.username, req.params.days);
    // Today is passed from web browser as server is in USA and client is Aus.
    var { username, today, daysBefore } = req.params;

    // Get date 
    var xDaysBefore = strToDate(today);
    xDaysBefore.setDate(xDaysBefore.getDate() - daysBefore);

    console.log("*** xDaysBefore", xDaysBefore);

    User.find({username: username})
    .then((dbResult) => {
        console.log("*** findOneAndUpdate:", dbResult);
        // res.json(dbResult);
        var tracker = dbResult[0].tracker;
        var totalOutsidehours = 0;
        var count = 0;
        for (var i=0; i<tracker.length; i++){
            var trackerDay = new Date(tracker[i].day);
            if (trackerDay > xDaysBefore){
                //console.log("=== ", trackerDay, " ===");
                totalOutsidehours += tracker[i].outsidehours;
                count++;
            }
        }
        console.log("totalOutsidehours", totalOutsidehours);
        res.json({
                number_of_entries:count, 
                outside_hours:totalOutsidehours
            });        
        })
    .catch(err => {
        console.log("*** error ***",err);
        res.status(500).json(err)
    });
})

// Covert date string dd-mm-yyyy to Date object
function strToDate(date){
    var dateArr = date.split('-');
    var day = parseInt(dateArr[0]);
    var month = parseInt(dateArr[1]);
    var year = parseInt(dateArr[2]);
    // console.log(`${year} ${month} ${day}`)
    // 'month' argument for new Date() is 0 - 11
    var dateObj = new Date(year, month-1, day, 12, 0, 0, 0);
    return dateObj;
}

module.exports = router