//route for showing calendar and allows user to add and edit recipes 
const express = require('express');
const db = require('../../models');
const router = express.Router();
const isLoggedIn = require('../../middleware/isLoggedIn')

router.get('/', isLoggedIn, (req, res) => {
            db.sequelize.query(
                `SELECT * FROM favorites f,recipes r WHERE f."userId" = ${req.user.id} AND f."recipeId" = r.id ORDER BY day`
            ).then((recipes) => {
                let dayArray = []
                let recipesList = []
                for (let i = 0; i <recipes[0].length; i++) {
                    dayArray.push(recipes[0][i].day)
                    recipesList.push({
                        id: recipes[0][i].recipeId,
                        name: recipes[0][i].name,
                        picture: recipes[0][i].picture,
                        servings: recipes[0][i].servings,
                        preptime: recipes[0][i].preptime,
                    })
                }
                res.render('user/calendar', {
                    day:dayArray,
                    isFavorite:null,
                    recipesList: recipesList
                })
            })
})

router.get('/add/:id', isLoggedIn, async (req, res) => {
    const toRecipe = await db.recipe.findOne({
        where: {
            id: req.params.id
        }
    })
    res.render('user/addCalendar', {recipe:toRecipe})
})

router.post('/add/:id', isLoggedIn, async (req,res) => {
    const toFavorites = await db.favorites.findOrCreate({
        
        where: {
            userId:req.user.id,
            recipeId: req.params.id,
            day: parseInt(req.body.day)
        }
    })
    res.redirect('/user/calendar')
})
module.exports = router;