//route to show all the components of the dashboard when user signs in
const express = require('express');
const db = require('../../models');
const isLoggedIn = require('../../middleware/isLoggedIn')
const router = express.Router();



// Routes
router.get('/', isLoggedIn, (req, res) => {
    const randomRecipes = loadRandomRecipes();
    // const recipesForDay = loadRecipesForDay(req); , recipesForEachDay:recipesForDay
    db.user.findOne({
        where: {
            id: req.user.id
        }, include:[db.recipe]
    }).then(function(foundUser){
        const favoriteRecipeId = [];
        for(let item in foundUser.recipes) {
            favoriteRecipeId.push(foundUser.recipes[item].dataValues.id)
        }
        res.render('user/dashboard', {userFavorites:foundUser.recipes, recipes:randomRecipes, isFavorite: favoriteRecipeId})
    })
})





// Helper functions for routes

function loadRecipesForDay(req){
    const favoritedByDays = [false, false, false, false, false, false, false];
    db.user.findOne({
        where:{
            id: req.user.id
        }, include:[db.recipe]
    }).then(function(foundUser){
        for (let item in foundUser.recipes) {
            // console.log(foundUser.recipes)
            // console.log(">>>>>>>",(foundUser.recipes[item].dataValues.favorites.dataValues.day)+1)
            favoritedByDays[(foundUser.recipes[item].dataValues.favorites.dataValues.day)+1]=foundUser.recipes[item]
        }
        return favoritedByDays
    })
    
}

function loadRandomRecipes(){
    const randomRecipes = [];
    db.recipe.findAll().then(function(foundRecipes){
        const randomNumbers= getTwoRandom(foundRecipes.length);
        for (let item in randomNumbers) {
            randomRecipes.push(foundRecipes[randomNumbers[item]]);
        }
    })
    return randomRecipes;
}

function getRandomInt(min, max){
    min = Math.ceil(min);
    max= Math.floor(max);
    return Math.floor(Math.random()*(max-min)+min);
}
function getTwoRandom(max){
    const randomNumbers= [];
    randomNumbers.push(getRandomInt(0,max))
    randomNumbers.push(getRandomInt(0,max))
    while(randomNumbers[0]===randomNumbers[1]){
        randomNumbers[1]=getRandomInt(0,max)
    }
    return randomNumbers;
}

//


module.exports = router;