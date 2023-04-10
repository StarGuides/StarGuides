const Session = require('../models/sessionModel')
const User = require('../models/userModel')
const sessionController = {}


sessionController.startSession = (req,res,next) => {
    Session.create({ cookieId: res.locals.userid})
    .then((session) => {
            console.log('session created: ', session);
            return next()
    })
    .catch(err => {
            return next(
                {
                log: 'Error in sessioncontroller.startsession',
                message: {err}
                }
            )
    })
}

sessionController.isLoggedIn = (req,res,next) => {
    Session.findOne({cookieId: req.cookies.ssid}).exec().then(session=>{
        console.log('USer is logged in')
        return next()
        })
        .catch (err => {
            return next(
                    {
                        log: 'Error in Session sessionController.isLoggedIn' + JSON.stringify(err),
                        message: {err}
                    }
                )
        })
}


module.exports = sessionController;