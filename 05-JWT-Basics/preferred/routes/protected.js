const express = require('express');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

router.get('/fashion-products', authenticateToken, ( req, res) => {
    res.json({ products: ['T-shirt', 'Jeans', 'Sneakers']});
});

module.exports = router;