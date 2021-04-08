const express = require('express');
const router = express.Router();
const User = require('../database/models/user');
const passport = require('../passport');
const env = require('../util/env');
const baseUrl = env.serverUrl;

router.post('/', (req, res) => {
    console.log('user signup');

    const { username, password } = req.body
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            console.log(`Sorry, already a user with the username: ${username}`);
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        } else {
            console.log(`Creating a new username: ${username}`);
            const newUser = new User({
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post(
    '/login',
    function (req, res, next) {
        console.log('GET /login in routes/user.js');
        // Logout if you are already logged in. 
        if (req.user) {
            req.logout();
        }
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.get('/logout', (req, res) => {
    console.log("get /logout", req.user)
    if (req.user) {
        req.logout();
        res.send({ msg: 'logging out' });
    } else {
        res.send({ msg: 'no user to log out' });
    }
})

router.get('/auth/google',
    passport.authenticate('google', { scope: ["profile", "email"] })
)

router.get('/auth/google/callback',
    (req, res, next) => {
        console.log('/auth/google/callback')
        next()
    },
    passport.authenticate('google', { 
        successRedirect: `${baseUrl}/tracker`,
        failureRedirect: `${baseUrl}/login` 
    })
);

router.get('/login/success', (req, res) => {
    console.log("GET /login/success", req.user);
    if (req.user) {
        console.log("User Authenticated", req.user._id);
        User.findById(req.user._id)
            .then((currentUser)=> {
                console.log("currentUser", currentUser)
                res.json(currentUser)
            })
            .catch((err)=> {
                res.json("err");
            })
    } else {
        console.log("User Not Authenticated")
        res.status(400).json({
            message: "User Not Authenticated",
            user: null
        })
    }
});

module.exports = router