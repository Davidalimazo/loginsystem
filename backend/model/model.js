const mongoose = require('mongoose');
const Schema = mongoose.Schema

//declare the DB schema
const UserSchema = new Schema({
    username: {type:String, required:true, minLength:4, MaxLength:15},
    password: {type:String, required:true, minLength:4, MaxLength:15},
    roles:['USER']
}, {timestamps:true})

//declare the collection variable
const User = mongoose.model('User', UserSchema);

//export the schema
module.exports = User

