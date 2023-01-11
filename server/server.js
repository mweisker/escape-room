const express = require('express');
const app = express();
require('dotenv').config()
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

const userController = require('./controllers/userController');
const commentController = require('./controllers/commentController')

PORT=3000
MONGO_URI='mongodb+srv://mattweisker:U1iLftqR0oVKqzQz@escape-data.v5bkwgk.mongodb.net/?retryWrites=true&w=majority'

app.use(express.json());

// routes
app.post('/', userController.createUser, (req, res) => {
    res.status(200).json(res.locals.users)
})

app.post('/login', userController.verifyUser, (req, res) => {
    res.status(200).json(res.locals.user)
})

app.post('/comment', commentController.addComment, (req, res) => {
    res.status(200).json(res.locals.comment)
})



app.get('/api/message', (req, res) => {
    res.json({msg: 'Welcome to the escape hell'})
})

// 404 handler
app.use('*', (req, res) => {
    res.status(404).send('Not Found');
});

// Global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err: 'An error occured' }
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

//listen for requests
// connect to db
mongoose.connect(MONGO_URI, () => {
    console.log("connected to mongoDB")
})
  .catch((error) => {
    console.log('mongo error ', error)
  })

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}...`);
});



module.exports = app;