const express = require("express");
const userRoute = express.Router();
const User = require("../models/user.model");
const Card = require("../models/card.model");
userRoute
    .route("/register/:username/:password")
    .get((req, res) => {
        const {username} = req.params;
        User.find({username: username}, (err, results)=>{
            console.log(`err:${err} RESULTS: ${results}`)
            if(results.length > 0){
                res.send(JSON.stringify({"text":"Username already taken", "color":"red"}))
            }else{
                const user = new User(req.params)
                user.save().then((err, data)=>{
                    console.log(err, data)
                    res.send(JSON.stringify({"text":"User successfully created.", "color":"green"}))
                })
            }
        })
    })
userRoute
    .route("/login/:username/:password")
    .get((req, res) => {
        const {username, password} = req.params
        console.log(req.params);
        
        User.findOne({username:username}, (err, results)=>{
            console.log(`RESULTS: ${results}`)
            if(results){
                if(results.password !== password){
                    res.send(JSON.stringify({"message":{"text":"Password Doesn't Match Saved Password", "color":"red"}}))
                }else{
                    Card.find({username:username}, (err, results)=>{
                        if(results.length > 0){
                            res.send(JSON.stringify(results))
                        }else{
                            res.send(JSON.stringify({"message":{"text":"Add A Card.", "color":"blue"}, "authorized":true}))
                        }
                    })
                }
            }else{
                res.send(JSON.stringify({"message":{"text":"User Not Found","color":"red"}}))
            }
        })
        // User.find({username:username}).then((err, results)=>{
        // })
    })
module.exports = userRoute;