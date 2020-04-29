const env = require('../util/env')
const MONGODB_URI = env.MONGODB_URI;

//Connect to Mongo database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//your local database url
//27017 is the default mongoDB port

mongoose.connect(MONGODB_URI).then(
    () => { 
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
        console.log('Connected to Mongo', MONGODB_URI);
        
    },
    err => {
         /** handle initial connection error */ 
         console.log('error connecting to Mongo: ', MONGODB_URI)
         console.log(err);
         
        }
  );


module.exports = mongoose.connection