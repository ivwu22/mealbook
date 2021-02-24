//route for showing calendar and allows user to add and edit recipes 
const express = require('express');
const db = require('../../models');
const router = express.Router();

router.get('/calendar', (req, res) => {
    res.send('hello')
})
module.exports = router;