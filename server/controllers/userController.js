const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const usercontroller = {};

usercontroller.findUsers = async (req, res, next) => {
    console.log('invoking findUsers');

    try {
        const users = await User.find({});
        res.locals.users = users;
        return next();
    } catch (error) {
        return next({
            log: 'Error in findUsers',
            message: {
                err: JSON.stringify(error)
            }
        });
    }
}

usercontroller.findOneUser = async (req, res, next) => {
    const { username } = req.body;
    try {
        const user = await User.find({ username });
        if (!user) return res.status(400).json({msg: 'user not found'});
        res.locals.comments = user[0].comments;
        res.locals.user = user;
        return next();
    } catch (error) {
        return next({
            log: 'Error in findOneUser',
            message: {
                err: JSON.stringify(error)
            }
        });
    }
}

usercontroller.createUser = async (req, res, next) => {
    console.log('invoking createUser');
    const { username, password } = req.body;
    console.log(username);
    console.log(password);
    // if (!userName || !password) return next('Missing username or password in createUser');

    try {
        const user = await User.create({ username, password });
        res.locals.user = user;
        return next();
    } catch (error) {
        return next({
            log: 'Error in createUser',
            message: {
                err: error.message
            }
        });
    }
}

usercontroller.verifyUser = async (req, res, next) => {
    console.log('invoking verifyUser');
    const { username, password } = req.body;
    console.log(username)
    console.log(password)

    try {
        const user = await User.findOne({ username })
        // if (!user) res.status(400).json({msg: 'user not found'});
        if (!user) return next({
            log: 'Error in verifyUser',
            message: { err: "User does not exist"}
        })
        else {
            bcrypt.compare(password, user.password)
                .then(result => {
                    if (!result) {
                        next({ log: 'Error in verifyUser', message: {err: 'incorrect password'}})
                    } else {
                        console.log(user);
                        res.locals.user = user;
                        return next();
                    }
                })
        }
    } catch (error) {
        return next({
            log: 'Error in verifyUser',
            message: {
                err: error.message
            }
        });
    }
}

usercontroller.deleteAll = async(req, res, next) => {
    try {
        console.log('invoking deleteAll');
        const deleted = await User.deleteMany({});
        res.locals.deleted = deleted;
        return next();
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