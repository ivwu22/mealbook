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
    .then((recipes) => {
        db.instruction.findAll({
            where: {
                recipeId : req.params.id
            }
        }).then((instructions) => {
            const recipeDeets = {
                instructions:instructions,
                recipes: recipes
            }
            res.render('recipe/details', {recipeDeets})
        })

    }).catch((error) => {
        res.status(404).render('main/404')
    })
})

module.exports = router;
