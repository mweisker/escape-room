const User = require('../models/userModel');

const commentController = {};

commentController.addComment = async (req, res, next) => {
    const { username, body, time } = req.body;
    const comment = { body, time }

    console.log(comment)

    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({msg: 'user not found'})
        // console.log('new comment ', newComment)
        user.comments.push(comment)
        res.locals.comment = user;
        return next();
    } catch (error) {
        return next({
            log: 'Error in addComment',
            message: {
                err: JSON.stringify(error)
            }
        });
    }
}


module.exports = commentController;