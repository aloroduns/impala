const express = require('express');

const app = express();

app.use(express.static("./public"));

app.all('*', (req, res) => {
    console
})
console.log('Express Tutorial')
