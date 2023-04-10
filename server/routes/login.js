//require express
const express = require('express');
// define a routerter variable to invoke the router
const router = express.Router();
//require path to solve path inconsistencies
const path = require('path');;

// require controllers
const userController = require('../controller/userController');
const cookieController = require('../controller/cookieController');
const sessionController = require('../controller/sessionController');

// ***POST*** request for login path="/"
router.post('/',
    userController.verifyUser,
    sessionController.startSession,
    cookieController.setSSIDCookie,
    (req, res) => {
        res
            .status(200)
            .json(res.locals.isVerified)
            // .json("helloo from login router")
    }
);



module.exports = router;