const express = require('express');
const router = express.Router();

const user = require('./user');

router
    .post('/add_user', user.add_user)
    .post('/user_login', user.user_login)

module.exports = router;