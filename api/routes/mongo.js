var express = require('express');
var router = express.Router();
var mongoFunctions =require("../mongo.js")

const fetch = require('node-fetch');
router.get('/', function(req, res, next) {

    const db = mongoFunctions.client.db("github").collection("byUsername")
    db.find({_id:username}).toArray(function(err, result) {
        if(result.length !== 0){
          res.send(result[0]);
        //   return result;
        }else{
            // console.log("nop")
            const obj = {
                _id: username,
                gitCount:0
            }
            db.insertOne(obj, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
               
              });
            res.send(obj);
        }
        if (err) throw err;
       
      });

});

module.exports = router;