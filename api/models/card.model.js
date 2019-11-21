const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Card = new Schema({
    task: String,
    owner: String,
    done: Boolean
});
module.exports = mongoose.model("Card", Card);