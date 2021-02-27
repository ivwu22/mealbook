//route to show favorite recipes
const express = require('express');
const db = require('../../models');
const isLoggedIn = require('../../middleware/isLoggedIn')
const methodOverride=require('method-override');
const flash = require('connect-flash');
const router = express.Router();

router.use(methodOverride('_method'));

router.get('/', isLoggedIn, (req, res) => {
   console.log("req.user.id is ", req.user.id);
   db.user.findOne({
      where: {
         id: req.user.id
      }, include: [db.recipe]
   }).then((foundUser)=> {
      const favoriteRecipeId = [];
      for(let item in foundUser.recipes) {
         favoriteRecipeId.push(foundUser.recipes[item].dataValues.id)
      }
      res.render('user/favorites.ejs', {favoritesList:foundUser.recipes, isFavorite: favoriteRecipeId})
      
   })
})

router.post('/:id', isLoggedIn, (req,res)=> {
   db.user.findOne({
      where: {
         id: req.user.id
      }, include:[db.recipe]
   }).then(foundUser => {
      foundUser.addRecipe(req.params.id).then(()=>{
         req.flash('success', `You have added this to your favorites!`);
         res.redirect('/user/favorites');
      })
   })
})

router.delete('/:id', isLoggedIn, (req,res)=> {
   db.user.findOne({
      where:{
         id:req.user.id
      }, include:[db.recipe]
   }).then(foundUser => {
      foundUser.removeRecipe(req.params.id).then(() => {
         req.flash('success', 'You have removed this from your favorites!');
         res.redirect('/user/favorites')
      })
   })
})

module.exports = router;
