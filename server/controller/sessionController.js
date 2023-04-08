const Session = require('../models/sessionModel')
const User = require('../models/userModel')
const sessionController = {}


sessionController.startSession = (req,res,next) =>{
    Session.create({cookieId:req.cookies.user._id}, (err,session) => {
        if(err){
            return next('Error in startSession Middleware' + JSON.stringify(err))
        } else {
            return next()
        }
    })
}

sessionController.isLoggedIn = (req,res,next) => {
    Session.findOne({cookieId: req.cookies.ssid}, (err,session)=>{
        if (err) {
            return next('Error in Session isLogdedin Middleware' + JSON.stringify(err));
        } else {
            return next()
        }
    })
}



module.exports = sessionController;