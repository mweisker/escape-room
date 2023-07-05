const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const commentRouter = require('./routes/comments');

const cookieController = require('./controllers/cookieController');
const userController = require('./controllers/userController');

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', express.static(path.join(__dirname, '../assets')));

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'

app.post('/register', userController.newUser, cookieController.setCookie, (req, res) => {
  return res.status(200).json(res.locals.result);
})

app.post('/login', userController.findUser, cookieController.setCookie, (req, res) => {
  return res.status(200).json(res.locals.result)
})

app.get('/main-page', cookieController.verifyCookie, (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
})

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.use((req, res) => {
  res.status(400).send('404 not found')
})

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
}); //listens on port 3000 -> http://localhost:3000/

module.exports = app;
