//route for recipes
const express = require('express');
const db = require('../models');
const router = express.Router();
router.get('/', (req, res) => {
    res.send('hello')
})

module.exports = router;