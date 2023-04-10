const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const userController = {};

userController.createUser = (req, res, next) => {
    // check to make sure that the username and password were passed in
    if (!req.body.username || !req.body.password) {
        return next('No username or password given')
    }
    // deconstruct variables
    const { username, password } = req.body;
    //create an object with k/v pairs from the request
    // const tempUser = { username, password }
    //invoke the method at Mongo oseUser to create db entry with helperobj
    User.create({ username, password })
        .then((result) => {
            res.locals.user = result;
            return next();
        })
        .catch((err) => next(
            {
                log: 'Error at Usercontroller.createuser An error occurred creating a username',
                message: { err }
            }
        ));
};

userController.verifyUser = (req, res, next) => {
    const { username, password } = req.body;
    // if (!username || !password) return next('Missing username or password in userController.verifyUser');
    // return next();
    User.findOne({ username }).exec()
        .then((user) => {
            res.locals.userid = user.id;
            bcrypt.compare(password, user.password)
            .then(result => {
            // console.log('this is the resuly of bcrypt: ', result)
                if (result === true) {
                    res.locals.isVerified = {message:'verified'};
                } else {
                    res.locals.isVerified = result;
                };
                // here we can send a message to front end like res.locals.verify = true
                // we can consider a redirect 
                return next()
            })
        })
        .catch(err => {
            return next(
                {
                    log: 'Error in userController.verifyUser: ' + JSON.stringify(err),
                    message: { err }
                }
            )
        });
      
}


module.exports = userController;