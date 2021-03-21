const passport = require('../../config/ppConfig');
const db = require('../../models');


const helperController = require('../helperController');

async function loadDashboard(req, res){
    try{
        const user = await db.user.findOne({where: {id: req.user.id}, include:[db.recipe]});
        const twoFavorites = helperController.getTwoFavorites(user.recipes);
        const favoriteRecipeId = await helperController.findFavorites(req);
        const randomRecipes = await helperController.loadRandomRecipes(res,favoriteRecipeId);
        res.render('user/dashboard', {userFavorites:twoFavorites, recipes:randomRecipes, isFavorite: favoriteRecipeId})
    } catch (error){
        res.render('main/404.ejs', {error:error})
    }
}

module.exports = {
    loadDashboard
}
