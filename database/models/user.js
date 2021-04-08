const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

const trackerSchema = new Schema({
    day: Date,
    outsidehours: {
        type: Number,
        min: [0, 'Negative number is not allowed'], 
    }
})

// Define userSchema
const userSchema = new Schema({
	username: { type: String, unique: true, required: false },
	password: { type: String, unique: false, required: false },
    googleId: { type: String, unique: true, required: false },
    name: { type: String, unique: false, required: false },
    givenName: { type: String, unique: false, required: false },
    familyName: { type: String, unique: false, required: false },
    email: { type: String, unique: false, required: false },
    provider:  { type: String, unique: false, required: false },
    tracker: [trackerSchema]
})

// Define schema methods
userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');
		this.password = this.hashPassword(this.password)
		next()
	}
})

const User = mongoose.model('User', userSchema)
module.exports = User
