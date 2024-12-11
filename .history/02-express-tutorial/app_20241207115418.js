const express = require('express');

const app = express();

app.use(express.static("./public"));

app.get('/api/v1/test', (req, res) => {
    res.json({})
})

app.all('*', (req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    res.send('oops! This route is not found');
});

const PORT =3000;
app.listen(PORT, () => {
    console.log('Express Tutorial');
});

