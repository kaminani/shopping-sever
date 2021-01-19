const express = require('express');
const router = express.Router();

const user = require('./user');

router
    .post('/add_user', user.add_user)
    .post('/user_login', user.user_login)
    .get('/get_my_user',user.get_my_user)

module.exports = router;