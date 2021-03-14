//route to show all the components of the dashboard when user signs in
const express = require('express');
const db = require('../../models');
const isLoggedIn = require('../../middleware/isLoggedIn');
const router = express.Router();

const dashboardController=require('../../controllers/userControllers/dashboardController');

// Routes
router.get('/', isLoggedIn, dashboardController.loadDashboard);


module.exports = router;