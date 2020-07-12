var express = require('express');
var router = express.Router();
var mongoFunctions =require("../mongo.js")


/* POST home page. */
router.post('/', function(req, res, next) {
  const db = mongoFunctions.client.db("github").collection("byUsername")
  console.log(req.body)
  console.log(req.body.content)
  if(req.body.type === "github"){
    db.updateOne(
      // filter
        {"_id":req.body.content._id},
        {$set: {"gitCount": req.body.content.gitCount}}
        // "gitCount":req.body.gitCount
  
      )
    .then(console.log("updated"))
    .catch(e=>console.log("error in updating gitCount"+ e))
  }else{
  //   db.insertOne(
  //     req.body.content
  // )
    db.updateOne(
      // filter
        {
          "_id":req.body.content._id
        },
        { 
          $set: {"repo": req.body.content.repo}},
        {
          upsert: true,
          // multi: true,
          // arrayFilters: [ { "element.repo":  req.body.content.repo.repoID} ]
        }
        // "gitCount":req.body.gitCount
  
      )
    .then(console.log("updated repo"))
    .catch(e=>console.log("error in updating gitCount"+ e))

  }
  
});

// app.post('/', (req, res) => {
//   res.json(req.body);
// });

module.exports = router;
