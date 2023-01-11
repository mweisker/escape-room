const express = require('express');

const userController = require('../controllers/userController');
const commentController = require('../controllers/commentController');

const router = express.Router();

// Find all users in database
router.get('/', userController.findUsers, (req, res) => {
    res.status(200).json(res.locals.users)
})

// Delete all users in database
router.delete('/', userController.deleteAll, (req, res) => {
    res.status(200).json(res.locals.deleted)
})

// Create new user
router.post('/', userController.createUser, (req, res) => {
    res.status(200).json(res.locals.users)
})

// Verify someone is a user
router.post('/login', userController.verifyUser, (req, res) => {
    res.status(200).json(res.locals.user)
})

// Add comment to user post
router.patch('/comment', userController.findOneUser, commentController.addComment, (req, res) => {
    res.status(200).json(res.locals.user)
    // res.status(200);
})

// Delete comment to user post
router.patch('/delete', userController.findOneUser, commentController.deleteComment, (req, res) => {
    res.status(200).json(res.locals.deleted)
})

module.exports = router;