const express = require('express');

const app = express();

app.use(express.static("./public"));

app.get('/api/v1/test', (req, res) => {
    res.json({ message: "it worked!"});
});

//Route to get a product by ID
app.get('/api/v1/products/:productID', (req, res) => {
    const { productID } = req.params;
    const idToFind =parseInt(req.params.productID, 10);
   
    const product = products.find((p) => p.id === idToFind);

    if (!product) {
        return res.status(404).json({ error: `Product with ID ${idToFind}`})
    }

    res.json(product);
});

app.get('/api/v1/query', (req, res) => {
    const { search, limit, priceLessThan } = req.query;
    let filteredProducts = [...products];

    if (search) {
        filteredProducts = filteredProducts.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())  
    );
    }

    if (pricelessThan) {
        const maxPrice = parseFloat(priceLessThan);
        filteredProducts = filteredProducts.filter((product) => product.price < maxPrice);
    }

    if
})
app.all('*', (req, res) => {
    res.status(404).send('Route not found');
    });

const PORT =3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

