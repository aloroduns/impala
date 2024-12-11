const express = require('express');

const app = express();

app.use(express.static("./public"));

app.all('*', )
console.log('Express Tutorial')
