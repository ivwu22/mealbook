//route for recipes

const express = require('express')
const db = require('../models')
const router = express.Router()

//GET all recipes 

router.get('/', (req,res) => {
    if(req.user) {
        db.recipe.findAll()
        .then((recipes)=> {
            db.favorites.findAll({
                where:{
                    userId: req.user.id
                }
            }).then(function (foundFavorites){
                const favoriteRecipeId=[];
                for (let item in foundFavorites){
                    favoriteRecipeId.push(foundFavorites[item].recipeId)
                }
                console.log("Recipe page favorite recipe IDs>>>>>",favoriteRecipeId);
                res.render('recipe/explore', {recipes:recipes, isFavorite:favoriteRecipeId})
            })
            
        }).catch((error) => {
            res.status(404).render('main/404')
        })
    }else{
        db.recipe.findAll()
        .then((recipes) => {
            res.render('recipe/explore', {recipes:recipes, isFavorite:[]})
        }).catch((error) => {
            res.status(404).render('main/404')
        })
    }
    
})

router.get('/details/:id', (req,res) => {
    db.recipe.findOne({
        where:{
            id: req.params.id
        }
    })
    .then(recipes => {
        db.instruction.findAll({
            where: {
                recipeId : req.params.id
            }
        }).then(instructions => {
            const recipeDeets = {
                instructions: instructions,
                recipes: recipes
            }
        }).then((ingredients) => {ingredients
            res.render('recipe/details', {recipeDeets:ingredients})
        })

    }).catch((error) => {
        res.status(404).render('main/404')
    })
})
// this is a working route for searching the database by ingredient that links to the search bar 
router.get('/searchByIngredient', (req, res) => {
    db.ingredient.findAll({
        where: {
            name: req.query.ingredientSearch
        }, include: [db.recipe]
    }).then(results => { 
        for (let i = 0; i < results.length; i++) {
        db.recipe.findOne({
            where: {
                id: results[0].dataValues.recipeId
            }
        }).then(foundRecipe => {
            res.render('recipe/searchResults', {recipe:foundRecipe})
        })
    }   
    }) 
});

router.get('/searchByName', (req, res) => {
    db.ingredient.findAll({
        where: {
            name: req.query.nameSearch
        }, include: [db.recipe]
    }).then(results => { 
        res.render('recipe/searchResults', {results})
    }) 
});

module.exports = router;
