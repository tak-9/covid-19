// process.env.MONGO_URI is set on Heroku server if you have setup mongoDB.
// 27017 is the default mongoDB port for local installation. 
const MONGODB_URI = (process.env.MONGODB_URI || 'mongodb://localhost:27017/covid-19');

module.exports={
    MONGODB_URI: MONGODB_URI,
};
