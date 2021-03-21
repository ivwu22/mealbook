//route that shows user profile
const express = require('express');
const db = require('../../models');
const methodOverride = require('method-override');
const isLoggedIn = require('../../middleware/isLoggedIn');
const router = express.Router();

const profileController = require('../../controllers/userControllers/profileController')

router.use(methodOverride('_method'));

// Routes
router.get('/', isLoggedIn, profileController.getProfilePage);

router.get('/edit', isLoggedIn, profileController.editProfilePage);

router.put('/edit/:id', isLoggedIn, profileController.updateProfilePage);


module.exports = router;