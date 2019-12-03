const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Express App</h1>');
})

app.listen(5000, () => {
    console.log('Express App listening on port 5000!');
})