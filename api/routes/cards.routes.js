const express = require("express");
const cardRoute = express.Router();
const Card = require('../models/card.model');
cardRoute
    .route('/')
    .get((req, res) => {
        Card
            .find()
            .then((cards, err) => {
                res.send(JSON.stringify(cards));
            });
    });
cardRoute
    .route('/add')
    .post((req, res) => {
        req.body.done = false;
        let card = new Card(req.body);
        card
            .save()
            .then((err, data) => {
                console.log(err, data)
                res.send(JSON.stringify({"message": "Card Added"}));
            })
    });
cardRoute
    .route('/toggle/:id')
    .get((req, res) => {
        Card.findById({_id:req.params.id}).then((data, err)=>{
            console.log(data, err);
            data.done = !data.done
            data.save().then((results, err)=>{
                console.log(`RESULTS: ${results}`)
                res.send(JSON.stringify({"message": results.done}))
            })
        });
    });
cardRoute
    .route('/addOwner/:owner').get((req, res)=>{
        let newOwner = {
            task: null, owner: req.params.owner, done: false
        }
        console.log(req.params)
        let card = new Card(newOwner);
        card.save().then((err, data)=>{
            console.log(err, data)
        })
        Card
            .find()
            .then((cards, err) => {
                res.send(JSON.stringify(cards));
            });
    })
module.exports = cardRoute;
