const express = require('express');

const app = express();

app.use(express.static("./public"));

app.all('*', (req, res) => {
    console.log(`Request rec`)
})
console.log('Express Tutorial')
