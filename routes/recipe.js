//route for recipes

const express = require('express')
const db = require('../models')
const router = express.Router()

//GET all recipes 

router.get('/', (req,res) => {
    db.recipe.findAll()
    .then((recipes) => {
        res.render('recipe/explore', {recipes:recipes})
    }).catch((error) => {
        res.status(404).render('main/404')
    })
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
            res.render('recipe/details', {recipeDeets})
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
            res.render('partials/searchResults', {recipe:foundRecipe})
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
        res.render('partials/searchResults', {results})
    }) 
  });

module.exports = router;
