const db = require('../models/escapeModels');

const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  const { userid, username } = res.locals.result;
  res.cookie('user', { userid, username })
  return next();
}

cookieController.verifyCookie = (req, res, next) => {
  const { user } = req.cookies
  if (!user) {
    res.redirect('/')
  }
  return next();
}

module.exports = cookieController;