const passport = require('../../config/ppConfig');
const db = require('../../models');

const helperController = require('../helperController');

async function getCalendar(req, res){
    try{
        const recipes = await db.sequelize.query(
            `SELECT * FROM favorites f,recipes r WHERE f."userId" = ${req.user.id} AND f."recipeId" = r.id ORDER BY day`
        )
        const recipesList = [];
        for (let i = 0; i <recipes[0].length; i++) {
            if (recipes[0][i].day) {
                    recipesList.push({
                        day: recipes[0][i].day,
                        id: recipes[0][i].recipeId,
                        name: recipes[0][i].name,
                        picture: recipes[0][i].picture,
                        servings: recipes[0][i].servings,
                        preptime: recipes[0][i].preptime,
                    })
                }
            }
        const favoriteRecipeId = await helperController.findFavorites(req);
        res.render('user/calendar', {
            isFavorite: favoriteRecipeId,
            recipesList: recipesList
        })
    } catch (error){
        res.render('main/404.ejs', {error:error})
    }
}

async function getAddCalendarPage(req, res){
    try{
        const toRecipe = await db.recipe.findOne({where: {id: req.params.id}})
        res.render('user/addCalendar', {recipe:toRecipe})
    }catch (error){
        res.render('main/404.ejs', {error:error})
    }
}

async function addToCalendar(req,res) {
    try{
        const toFavorites = await db.favorites.findOrCreate({
            where: {
                userId:req.user.id,
                recipeId: req.params.id,
                day: parseInt(req.body.day)
            }
        })
        res.redirect('/user/calendar')
    }catch (error){
        res.render('main/404.ejs', {error:error})
    }
}


module.exports = {
    getCalendar,
    getAddCalendarPage,
    addToCalendar
}