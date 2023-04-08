//require express
const express = require('express');
// define a routerter variable to invoke the router
const router = express.Router();
//require path to solve path inconsistencies
const path = require('path');;

// require controllers
const cookieController = require('../controller/cookieController');
const userController = require('../controller/userController');
const sessionController = require('../controller/sessionController');

// POST request for login path="/"
router.get('/',
    userController.verifyUser,
    sessionController.startSession,
    cookieController.setSSIDCookie,
    (req, res) => {
        return res
            .status(200)
            .sendFile(path.resolve(__dirname, "../dist/index.html"))
    }
);


// // POST request for login path="/"
// router.post('/', 
//     // CONTROLLER HERE TO DO THE FOLLOWING
//     // if authenticated send dashboard DATA (if any) To front end
//     // if NOT logged in send a response letting the front end the customer needs to to sign up
//     userController.verifyUser, 
//     sessionController.startSession, 
//     cookieController.setSSIDCookie, 
//     (req, res) => {
//         return res
//             .status(200)
//             .sendFile(path.resolve(__dirname, "../dist/index.html"))
//     }
// );


    
module.exports = router;