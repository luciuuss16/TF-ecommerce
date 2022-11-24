const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const productsRouter = require('./server/products');
const cartRouter = require('./server/cart');
