const express = require("express");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('./passport');
const MongoStore = require('connect-mongo')(session);
const dbConnection = require('./database') 
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
// Route requires
const user = require('./routes/user');
const tracker = require('./routes/tracker');

// Define middleware here
//app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MIDDLEWARE
// app.use(
// 	bodyParser.urlencoded({
// 		extended: false
// 	})
// )
// app.use(bodyParser.json())

// var whitelist = ['http://localhost:3000', 'https://covid19-au.netlify.app/', 'https://covid19-au.herokuapp.com/']
// var corsOptions = {
//     origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
// app.use(cors(corsOptions));

app.use(
  cors({
    origin: ["http://localhost:3000", "https://covid19-au.netlify.app"],// allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

// Routes
app.use('/api/user', user);
app.use('/api/tracker', tracker);

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
//}

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
