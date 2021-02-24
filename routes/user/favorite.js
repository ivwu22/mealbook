//route to show favorite recipes
const express = require('express');
const db = require('../../models');
const isLoggedIn = require('../../middleware/isLoggedIn')
const router = express.Router();

router.get('/', isLoggedIn, (req, res) => {
   console.log("req.user.id is ", req.user.id);
   db.user.findOne({
      where: {
         id: req.user.id
      }, include: [db.recipe]
   }).then((foundUser)=> {
      console.log(foundUser.recipes);
      res.render('user/favorites.ejs', {favoritesList:foundUser.recipes, isFavorite: true})
      
   })
})

module.exports = router;
