// serverUrl for development environment 
var serverUrl =  "http://localhost:3001";
// serverUrl for heroku
if (process.env.NODE_ENV === "production") {
    serverUrl =  "https://covid19-au.herokuapp.com/";
} 

export {serverUrl};