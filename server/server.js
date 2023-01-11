const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

const apiRouter = require('./routes/api');

PORT=3000
MONGO_URI='mongodb+srv://mattweisker:U1iLftqR0oVKqzQz@escape-data.v5bkwgk.mongodb.net/?retryWrites=true&w=majority'

// handle parsing request body
app.use(express.json());

// create static
app.use(express.static(path.resolve(__dirname, '../build')))

// create router
app.use("/api", apiRouter)

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





module.exports = app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}...`);
});