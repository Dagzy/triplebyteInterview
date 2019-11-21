const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    _id: ObjectId,
    username: String,
    password: String
})
module.exports = mongoose.model("User", User)
