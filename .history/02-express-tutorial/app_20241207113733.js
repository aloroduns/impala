const express = require('express');

const app = express();

app.use(express.static("./public"));

app.all('*', (re))
console.log('Express Tutorial')
