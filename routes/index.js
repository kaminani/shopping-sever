const express = require('express');
const router = express.Router();

const user = require('./user');
const product = require('./product');

router
    .post('/add_user', user.add_user)
    .post('/user_login', user.user_login)
    .get('/get_my_user',user.get_my_user)
    .get('/get_products',product.get_products)
    .get('/get_home',product.get_home_product)

module.exports = router;