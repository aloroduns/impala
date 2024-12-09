const express = require('express');

const app = express();

app.use(express.static("./public"));

app.all('*', (req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    res.send('oops! This ')
})
console.log('Express Tutorial')
