const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/kanban', {useNewUrlParser : true, useUnifiedTopology : true}, (err, other) => {
    console.log("Connected to Kanban DB"); 
});
app.use(cors());
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/cards', require('./routes/cards.routes'));
app.listen(PORT, (err)=>{
    console.log(`${ err ? err : "No errors"} /|/ Listening on port: ${PORT}`);
});