const express = require('express');

const app = express();

app.use(express.static("./public"));

app.get('/api/v1/test', (req, res) => {
    res.json({ message: "it worked!"});
});
// route for all products
app.get(' /api/v1/products', (req, res) => {
    res.json(products);
});

//Route to get a product by ID
app.get('/api/v1/products/:productID')
app.all('*', (req, res) => {
    res.status(404).send('Route not found');
    });

const PORT =3000;
app.listen(PORT, () => {
    console.log(`Server is running at hhtp://localhost:${PORT}`);
});

