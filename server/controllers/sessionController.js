const Session = require('../models/sessionModel');

const sessionController = {};

sessionController.startSession = (req, res, next) => {
    Session.create({ cookieId: res.locals.user._id.id}, (err, session) => {
        if (err) return next(err);
        else return next();
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