//route to show favorite recipes
const express = require('express');
const db = require('../../models');
const router = express.Router();

router.get('/favorite', (req, res) => {
   res.render('user/favorites.ejs');
})

module.exports = router;
