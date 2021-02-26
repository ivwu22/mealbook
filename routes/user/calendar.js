//route for showing calendar and allows user to add and edit recipes 
const express = require('express');
const db = require('../../models');
const router = express.Router();
const isLoggedIn = require('../../middleware/isLoggedIn')

router.get('/', isLoggedIn, (req, res) => {
    // console.log('the user is:', req.user.id);
    db.user.findOne({
        where: {
            id:req.user.id,
        }, include: [db.recipe]
    }).then((foundUser)  => {
        db.user.findAll({
            where: {
                id: 1
            }, include: [db.recipe]
        }).then((foundRecipes) => {
            // console.log('-------------');
            // console.log(foundRecipes[0].recipes[0].dataValues.favorites.dataValues.day);      
            // console.log(foundRecipes[0].recipes);
            // console.log(foundRecipes[0].recipes[0].dataValues.favorites.dataValues);
            // console.log('test', foundRecipes[0].recipes[2].dataValues.favorites.dataValues);
            const dayArray = [];
            for (let item in foundRecipes[0].recipes) {
                if(foundRecipes[0].recipes[item].dataValues.favorites.dataValues.day) {
                    dayArray.push(foundRecipes[0].recipes[item].dataValues.favorites.dataValues.day);
                }
            }
            // console.log(dayArray);
            res.render('user/calendar.ejs', {
                recipesList:foundRecipes[0].recipes,
                day:dayArray
            })
        })
    }).catch((error) => {
        console.log(error);
        res.status(404).render('main/404')
    })
})
module.exports = router;