const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.json({msg: 'Welcome'})
})

app.get('/api/message', (req, res) => {
    res.json({msg: 'Welcome to the escape hell'})
})

//listen for requests
app.listen(3000, () => {
    console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;