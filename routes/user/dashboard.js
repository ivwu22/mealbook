//route to show all the components of the dashboard when user signs in
const express = require('express');
const db = require('../../models');
const router = express.Router();
router.get('/dashboard', (req, res) => {
    res.send('hello')
})
module.exports = router;