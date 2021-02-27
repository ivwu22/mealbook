//route for showing calendar and allows user to add and edit recipes 
const express = require('express');
const db = require('../../models');
const router = express.Router();
const isLoggedIn = require('../../middleware/isLoggedIn')

// router.get('/', isLoggedIn, (req, res) => {
//     // console.log('the user is:', req.user.id);
//     db.user.findOne({
//         where: {
//             id: req.user.id,
//         }, include: [db.recipe]
//     }).then((foundUser) => {
//         db.sequelize.query(
//             `SELECT * FROM favorites
//             WHERE userId = ${req.user.id}`
//         )
//         }).then((foundRecipes) => {
//             console.log('!!!!!',foundRecipes[0].recipes)
//             console.log('******',foundRecipes[0].recipes[2].dataValues)
//             const dayArray = [];
//             for (let item in foundRecipes[0].recipes) {
//                 if (foundRecipes[0].recipes[item].dataValues.favorites.dataValues.day) {
//                     dayArray.push(foundRecipes[0].recipes[item].dataValues.favorites.dataValues.day);
//                 }
//             }
//             // console.log(dayArray);
//             res.render('user/calendar.ejs', {
//                 recipesList: foundRecipes[0].recipes,
//                 day: dayArray,
//                 isFavorite: null
//             })
//         })
//     }).catch((error) => {
//         console.log(error);
//         res.status(404).render('main/404')
//     })

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
    // db.favorites.findOrCreate({
    //     where: {
    //         userId: req.user.id,
    //         recipeId: req.body.id
    //     }, include: [db.recipe, db.user]
    // }).then(foundUser => {
    //     foundUser.addFavorites(req.params.id).then(() => {
    //         req.flash('success', `You have added ${recipe.name} to your calendar!`);
    //         res.redirect('/user/favorites');
    //     })
    // })
})

router.post('/add/:id', isLoggedIn, async (req,res) => {
    console.log(req.user.id);
    console.log(req.params.id);
    console.log(req.body.day);
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