//route for showing calendar and allows user to add and edit recipes 
const express = require('express');
const db = require('../../models');
const router = express.Router();
const isLoggedIn = require('../../middleware/isLoggedIn');

const calendarController = require('../../controllers/userControllers/calendarController');

router.get('/', isLoggedIn, calendarController.getCalendar);

router.get('/add/:id', isLoggedIn, calendarController.getAddCalendarPage);

router.post('/add/:id', isLoggedIn, calendarController.addToCalendar);


module.exports = router;