
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Card = new Schema({
    _id: ObjectId,
    task: String,
    owner: String
})
export default mongoose.model("Card", Card)
