import express, { static } from 'express';

const app = express();

app.use(static("./public"));

console.log('Express Tutorial')
