const User = require('../database/models/user')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const gStrategy = new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3001/api/user/auth/google/callback"
    },
    function (accessToken, refreshToken, profile, done) {
        console.log("googleStrategy accessToken", accessToken);
        console.log("googleStrategy profile", profile);

        // passport callback function
        //check if user already exists in our db with the given profile ID
        User.findOne({ googleId: profile.id })
            .then((currentUser) => {
                if (currentUser) {
                    console.log("currentUser already exists", currentUser)
                    //if we already have a record with the given profile ID
                    done(null, currentUser);
                } else {
                    //if not, create a new user 
                    new User({
                        googleId: profile.id,
                        name: profile.displayName, 
                        familyName: profile.name.familyName, 
                        givenName: profile.name.givenName, 
                        email: profile.emails[0].value,
                        username: profile.emails[0].value, 
                        provider: profile.provider
                    })
                    .save()
                    .then((newUser) => {
                        console.log("newUser saved", newUser)
                        done(null, newUser);
                    });
                }
            }) // End .then
    }
)


module.exports = gStrategy
