const express = require('express');

const app = express();

app.use(express.static("./public"));

app.all('*', (req, res) => {
    console.log(`Re`)
})
console.log('Express Tutorial')
