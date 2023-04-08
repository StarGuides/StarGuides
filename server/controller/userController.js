const User = require('../models/userModel');
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
            // console.log(result)
            res.locals.user = result;
            return next();
        })
        .catch((err) => next('Error at Usercontroller.createuser An error occurred creating a username'))
};

userController.verifyUser = (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) return next('Missing username or password in userController.verifyUser');
    User.findOne({ username }, (err, user) => {
        if (err) {
        return next('Error in userController.verifyUser: ' + JSON.stringify(err));
        } else {
            bcrypt.compare(password, user.password)
                .then(result => {
                        res.locals.user = user;
                        return next();
                    }
                )
                .catch(err => {
                    return next('Error in userController.verifyUser: ' + JSON.stringify(err));
                })
        }
    })
}


module.exports = userController;