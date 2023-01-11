const User = require('../models/userModel');

const commentController = {};

commentController.addComment = async (req, res, next) => {
    console.log('invoking addComment');
    const { username, body, time } = req.body;
    const newComment = { body, time }
    res.locals.comments.push(newComment);
    const comments = res.locals.comments;

    try {
        const updatedComments = await User.findOneAndUpdate({ username }, { comments });
        res.locals.updatedComment = updatedComments;
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

commentController.deleteComment = async (req, res, next) => {
    console.log('invoking deleteComment');
    const { username, _id } = req.body;

    // console.log(res.locals.comments)
    const currentComments = res.locals.comments
    // console.log(Object.keys(currentComments).length)
    // for (let i = 0; i < currentComments.length; i++) {
    //     console.log(currentComments[i])
    // }

    try {
        const comments = [];
        let deletedComment;
        currentComments.forEach(comment => {
            console.log('_id ', comment._id.toString());
            console.log('deleteId ', _id)
            if (!comment._id.equals(_id)) comments.push(comment);
            else deletedComment = comment;
        })

        console.log('update ', comments);
        console.log('deleted ', deletedComment);
        const newComments = await User.findOneAndUpdate({ username }, { comments })
        // console.log('new ', newComments)
        res.locals.deleted = deletedComment;
        return next();
    } catch (error) {
        return next({
            log: 'Error in deleteComment',
            message: {
                err: JSON.stringify(error)
            }
        });
    }
}



module.exports = commentController;