var mongoose = require('mongoose');

// Create the User Schema
var UserSchema = new mongoose.Schema({
    Name: {
        type: String,
    },
    Email: {
        type: String,
        //lowercase: true
    },
    Role: {
        type: String,
        //default: 'user'
    },
    password: {
        type: String,
    },
    //provider: String,
    //salt: String
});

//Export the model schema 
module.exports = UserSchema;
