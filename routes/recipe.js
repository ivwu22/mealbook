//route for recipes
const express = require('express')
const db = require('../models')
const router = express.Router()
const axios = require('axios')

const helperController = require('../controllers/helperController');
const recipeController = require('../controllers/recipeController');


//GET all recipes 

router.get('/', async (req,res) => {
    try{
        // let allRecipes = await db.recipe.findAll()
        let allRecipes = []
        const favoriteRecipeId = await helperController.findFavorites(req)
        const recipeFilter=req.query.searchInput;
        if(recipeFilter){
            // allRecipes = allRecipes.filter(function(recipe){
            //     return recipe.name.toLowerCase() ===recipeFilter.toLowerCase();
            // })
            console.log('/////', req.query)
            const searchResults = {
                method: 'GET',
                url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
                params: {
                    query: req.query.searchInput,
                    number: '20',
                    ofset: '0',
                },
                headers: {
                    'x-rapidapi-key': process.env.API_KEY,
                    'x-rapidapi-host': process.env.API_HOST
                }
            }
            axios.request(searchResults).then((responseData) => {
                let results = responseData.data.results
                allRecipes = results
                for (let i = 0; i < results.length; i++){
                    console.log(results[i])
                    db.recipe.findOrCreate({
                        where: {
                            title : results[i].title,
                            api : results[i].id,
                            image : results[i].image,
                            readyInMinutes : results[i].readyInMinutes,
                            servings : results[i].servings
                        }
                    }).then(([recipe, created]) => {
                        allRecipes.push(db.recipe.findOne({
                            where: {
                                title:results[i].title
                            }
                        })) 
                    })
                } 
                res.render('recipe/explore', {recipes:allRecipes, isFavorite:favoriteRecipeId})

                // allRecipes=responseData.data.results
                // res.render('recipe/explore', {recipes:allRecipes, isFavorite:favoriteRecipeId})
            })
        } else {
        const options = ['food', 'main', 'pasta', 'delicious']
        const explore = {
            method: 'GET',
            url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
            params: {
                query: options[Math.floor(Math.random()*(options.length))],
                number: '20',
                ofset: '0',
            },
            headers: {
                'x-rapidapi-key': process.env.API_KEY,
                'x-rapidapi-host': process.env.API_HOST
            }
        }
            axios.request(explore).then((responseData) => {
            let results = responseData.data.results
            allRecipes = results
            for (let i = 0; i < results.length; i++){
                console.log(results[i])
                db.recipe.findOrCreate({
                    where: {
                        title : results[i].title,
                        api : results[i].id,
                        image : results[i].image,
                        readyInMinutes : results[i].readyInMinutes,
                        servings : results[i].servings
                    }
                }).then(([recipe, created]) => {
                    allRecipes.push(db.recipe.findOne({
                        where: {
                            title:results[i].title
                        }
                    })) 
                })
            } 
            res.render('recipe/explore', {recipes:allRecipes, isFavorite:favoriteRecipeId})
            }
            )
        }
    }
        catch(error){
        res.status(404).render('main/404', {error:error})
    }
})


router.get('/details/:id', recipeController.getDetailsPage)





module.exports = router;