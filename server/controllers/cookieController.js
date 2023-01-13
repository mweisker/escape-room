const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
    console.log('invoking setSSID cookie')
    res.cookie('ssid', res.locals.user._id.id, { httpOnly: true });
    console.log('cookies')
    console.log(req.cookies.ssid);
    return next();
}

cookieController.findCookie = (req, res, next) => {
    if (req.cookies.ssid) {
        res.locals.status = true;
    } else res.locals.status = false;
    console.log(res.locals.status);
    return next();
}

module.exports = cookieController;