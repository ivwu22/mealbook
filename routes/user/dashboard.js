//route to show all the components of the dashboard when user signs in
const express = require('express');
const db = require('../../models');
const isLoggedIn = require('../../middleware/isLoggedIn')
const router = express.Router();

router.get('/', isLoggedIn, (req, res) => {
    const randomRecipes = loadRandomRecipes();
    
    db.user.findOne({
        where: {
            id: req.user.id
        }, include:[db.recipe]
    }).then(function(foundUser){
        res.render('user/dashboard', {userFavorites:foundUser.recipes, recipes:randomRecipes})
    })
})

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


module.exports = router;