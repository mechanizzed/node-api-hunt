const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/Product/ProductController');

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products/store', ProductController.store);
routes.put('/products/update/:id', ProductController.update);

module.exports = routes;
