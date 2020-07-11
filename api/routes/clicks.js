var express = require('express');
var router = express.Router();
var mongoFunctions =require("../mongo.js")


/* POST home page. */
router.post('/', function(req, res, next) {
  const db = mongoFunctions.client.db("github").collection("byUsername")
  console.log(req.body)
  db.updateOne(
    // filter
      {"_id":req.body._id},
      {$set: {"gitCount": req.body.gitCount}}
      // "gitCount":req.body.gitCount

    )
  .then(console.log("updated"))
  .catch(e=>console.log(e))
});

// app.post('/', (req, res) => {
//   res.json(req.body);
// });

module.exports = router;
