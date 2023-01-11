const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const usercontroller = {};

usercontroller.createUser = async (req, res, next) => {
    const { username, password } = req.body;
    // if (!userName || !password) return next('Missing username or password in createUser');

    try {
        const users = await User.create({ username, password });
        res.locals.users = users;
        return next();
    } catch (error) {
        return next({
            log: 'Error in createUser',
            message: {
                err: JSON.stringify(error)
            }
        });
    }
}

usercontroller.verifyUser = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username })
        if (!user) res.status(400).json({msg: 'user not found'});
        else {
            bcrypt.compare(password, user.password)
                .then(result => {
                    if (!result) {
                        res.status(400).json({msg: 'incorrect password'})
                    } else {
                        res.locals.user = user;
                        return next();
                    }
                })
        }
    } catch (error) {
        return next({
            log: 'Error in verifyUser',
            message: {
                err: JSON.stringify(error)
            }
        });
    }
}



module.exports = usercontroller;