//route to show favorite recipes
const express = require('express');
const db = require('../../models');
const isLoggedIn = require('../../middleware/isLoggedIn')
const methodOverride=require('method-override');
const flash = require('connect-flash');
const router = express.Router();

const favoritesController = require('../../controllers/userControllers/favoritesController');

router.use(methodOverride('_method'));

router.get('/', isLoggedIn, favoritesController.loadFavoritesPage);

router.post('/:id', isLoggedIn, favoritesController.addToFavorites);

router.delete('/:id', isLoggedIn, favoritesController.deleteFavorite);

module.exports = router;