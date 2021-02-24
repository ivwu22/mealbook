//route to show favorite recipes
const express = require('express');
const db = require('../../models');
const isLoggedIn = require('../../middleware/isLoggedIn')
const router = express.Router();

router.get('/', (req, res) => {
   res.render('user/favorites.ejs');
})

module.exports = router;
