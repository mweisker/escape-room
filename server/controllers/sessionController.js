const Session = require('../models/sessionModel');

const sessionController = {};

sessionController.startSession = (req, res, next) => {
    console.log('invoking start session')
    console.log('res.locals._id.id')
    console.log(res.locals.user._id.id)
    Session.create({ cookieId: res.locals.user._id.id}, (err, session) => {
        if (err) {
            console.log('session error')
            // console.log(req.cookie)
            // console.log(res.locals.user._id.id)
            return next(err);
        }
        else {
            console.log('created session')
            console.log(session)
            return next();
        }
    })
}

sessionController.isLoggedIn = (req, res, next) => {
    Session.findOne({ cookieId: req.cookie.ssid}, (err, session) => {
        if (err) {
            return next(err)
        } else if (!session) {
            return next({message: {err: 'Not logged in'}})
        } else {
            return next();
        }
    })
}

module.exports = sessionController