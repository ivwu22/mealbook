//route to show favorite recipes
const express = require('express');
const db = require('../../models');
const router = express.Router();

router.get('/favorite', (req, res) => {
    res.send('hello')
})

module.exports = router;
