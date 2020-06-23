var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
router.get('/', function(req, res, next) {

    // const gitAPI = "https://api.github.com/users/raphminkyu"
    // const callFetch = fetch(gitAPI)
    //     .then(res=>res.text())
    //     // .then(res=>console.log(res.text()))
    //         // .then(res => console.log(res))
    //         // .then(res => setApiResponse(res))
    //         .catch(err => err);



    // res.send(callFetch);
    res.send("ss");
});

module.exports = router;