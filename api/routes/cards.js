const express = require("express")
const cardRoute = express.Router()
    cardRoute.route('/add').post((req, res)=>{
        console.log(req.body);
        res.send(JSON.stringify({"message":"Hello"}));
    });

module.exports = cardRoute;
