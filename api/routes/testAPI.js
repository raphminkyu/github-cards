var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
router.get('/', function(req, res, next) {

    const gitAPI = `https://api.github.com/users/${username}`
    const callFetch = fetch(gitAPI)
        .then(resp=>resp.text())
        .then(resp => res.send(resp))
        // .then(res=>console.log(res.text()))
            // .then(res => console.log(res))
            // .then(res => setApiResponse(res))
        .catch(err => err);
});

module.exports = router;