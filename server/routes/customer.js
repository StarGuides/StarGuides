//require express
const express = require('express');
// define a routerter variable to invoke the router
const router = express.Router();
//require path to solve path inconsistencies
const path = require('path');

// REQUIRE CONTROLLERS
// const /*placeholder*/ = require(/*placeholder*/);
const clientController = require('../controller/clientController')

//Parent component of Customer comp. makes a get request for all customer path="/dashboard
router.get('/', 
    clientController.getClients,
    /*inset middleware here! **and don't forget to add a comma*/
    (req, res) => {
    return res
        .status(200)
        .json(res.locals.clients)
        /* .send(something) or .json(something)*/
});

router.post('/',
    clientController.addClient,
    (req,res) => {
        return res
        .status(200)
        .json(res.locals.client) // this sends and array of objects
        // do we want to send a message that says success
        /* .send(something) or .json(something)*/
    }
)




module.exports = router;