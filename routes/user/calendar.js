//route for showing calendar and allows user to add and edit recipes 
const express = require('express');
const db = require('../../models');
const router = express.Router();
const isLoggedIn = require('../../middleware/isLoggedIn')

router.get('/', isLoggedIn, (req, res) => {
    console.log(req.user.id);
    res.render('user/calendar.ejs')
})
module.exports = router;