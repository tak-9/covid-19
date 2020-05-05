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

    User.findOneAndUpdate(
        filter,
        setNewValue, 
        { select: projection } 
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
router.get('/:username/:days', (req, res, next) => {
    console.log('GET /tracker/:username/:days is called.');
    res.json({});
})

module.exports = router