const passport = require('../config/ppConfig');
const db = require('../models');

const helperController = require('./helperController');


const getDetailsPage = async (req,res) => {
    const recipe = await db.recipe.findOne({where:{id:req.params.id}, include:[db.user]})
    const ingredients = await db.ingredient.findAll({where:{recipeId:recipe.id}})
    const instructions = await db.instruction.findAll({where:{recipeId:recipe.id}})
    const favoriteRecipeId = await helperController.findFavorites(req);
    res.render('recipe/details.ejs', {recipe:recipe, isFavorite:favoriteRecipeId, instructions:instructions, ingredients:ingredients})
}


module.exports = {
    getDetailsPage
}