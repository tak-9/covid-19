// Ensure NODE_ENV="production" is set on Heroku server before using it.
// If production is set, the app is running on, heroku. Else it's running on development environment.    
export const serverUrl = (process.env.NODE_ENV === "production") ? "https://covid19-au.herokuapp.com" : "http://localhost:3001";
