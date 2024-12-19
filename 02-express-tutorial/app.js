const express = require('express');
const cookieParser = require('cookie-parser');
//import routes
const peopleRoutes = require('./routes/people');
const authRoutes = require('./routes/auth.js');

//import middleware
const logger = require('./middlewares/logger');

const {products } = require('./data.js');

const app = express();
//middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static("./methods-public"));
app.use(cookieParser());
app.use(logger);

//route
app.use('/api/v1/people', peopleRoutes);
app.use('/api/v1/auth', authRoutes);

//products route

app.get('/api/v1/products', (req, res) => {
    const { search, limit, priceLessThan } = req.query;
    let filteredProducts = [...products];

    if (search) {
        filteredProducts = filteredProducts.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())  
        );
    }

    if (priceLessThan) {
        const maxPrice = parseFloat(priceLessThan);
        filteredProducts = filteredProducts.filter((product) => product.price < maxPrice);
    }

    if (limit) {
        const limitValue = parseInt(limit, 10);
        filteredProducts = filteredProducts.slice(0, limitValue);
    }

    if (filteredProducts.length < 1) {
        return res.status(200).json({ message: 'No products matched your search criteria.'});
    }

    res.json(filteredProducts);
});


// 404 handler
app.use((req, res) => {
    res.status(404).send('Route not found');
    });

//start server
const PORT =3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});




