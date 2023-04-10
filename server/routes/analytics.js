//require express
const express = require('express');
// define a routerter variable to invoke the router
const router = express.Router();
//require path to solve path inconsistencies
const path = require('path');

// REQUIRE CONTROLLERS
// const /*placeholder*/ = require(/*placeholder*/);
// const /*placeholder*/ = require(/*placeholder*/);

//Parent component of Customer comp. makes a get request for all customer path="/dashboard
router.get('/', 
    /*inset middleware here! **and don't forget to add a comma*/
    (req, res) => {
    return res
        .status(200)
        /* .send(something) OR .json(something)*/
});



module.exports = router;