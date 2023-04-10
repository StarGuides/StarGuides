const Session = require('../models/sessionModel')
const User = require('../models/userModel')
const sessionController = {}


sessionController.startSession = (req,res,next) => {
    console.log('  first line inside starsession');
    Session.create({ cookieId: res.locals.userid})
    .then((session) => {
            console.log('session created: ', session);
            return next()
    })
    .catch(err => {
            return next(`Error in session starter: `, err)
    })
}

sessionController.isLoggedIn = (req,res,next) => {
    Session.findOne({cookieId: req.cookies.ssid}).exec().then(session=>{
        console.log('USer is logged in')
        return next()
        })
        .catch (err => {
            return next('Error in Session isLogdedin Middleware' + JSON.stringify(err))
        })
}


module.exports = sessionController;