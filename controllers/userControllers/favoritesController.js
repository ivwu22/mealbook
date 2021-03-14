const passport = require('../../config/ppConfig');
const db = require('../../models');

const helperController = require('../helperController');

const loadFavoritesPage = async (req, res) => {
    try {
    const user = await db.user.findOne({where: {id: req.user.id}, include: [db.recipe]})
    const favoriteRecipeId = await helperController.findFavorites(req);
    res.render('user/favorites.ejs', {favoritesList:user.recipes, isFavorite: favoriteRecipeId})    
    } catch (error){
    res.render('main/404.ejs', {error:error})
    }
}

const addToFavorites = async (req,res) => {
    try {
    const user = await db.user.findOne({where: {id: req.user.id}, include: [db.recipe]});
    await user.addRecipe(req.params.id);
    const recipe = await  db.recipe.findOne({where:{id:req.params.id}});
    req.flash('success', `You have added ${recipe.name} to your favorites!`);
    res.redirect('/user/favorites');
    } catch (error){
    res.render('main/404.ejs', {error:error})
    }
}

const deleteFavorite = async (req,res)=> {
    try {
    const user = await db.user.findOne({where:{id:req.user.id}, include:[db.recipe]})
    await user.removeRecipe(req.params.id)
    const recipe = await  db.recipe.findOne({where:{id:req.params.id}});
    req.flash('success', `You have removed ${recipe.name} from your favorites!`);
    res.redirect('/user/favorites')
    } catch (error){
    res.render('main/404.ejs', {error:error})
    }
}

module.exports = {
    loadFavoritesPage,
    addToFavorites,
    deleteFavorite
}