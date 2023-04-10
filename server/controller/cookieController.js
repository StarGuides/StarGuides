const cookieController = {};


cookieController.setSSIDCookie = (req,res,next) => {
    // may have to change the user_id property later according to other login middleware
    console.log('setting cookie')
    res.cookie('ssid',res.locals.userid, {httpOnly: true})
    return next();
}

module.exports = cookieController;