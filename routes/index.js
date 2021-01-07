const express = require('express');
const router = express.Router();

const user = require('./user');

router
    .post('/add_user', user.add_user)

module.exports = router;