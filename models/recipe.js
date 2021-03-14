'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.recipe.hasMany(models.instruction)
      models.recipe.hasMany(models.ingredient)
      models.recipe.belongsToMany(models.user, {through: "favorites"})
    }
  };
  recipe.init({
    api: DataTypes.INTEGER,
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    servings: DataTypes.INTEGER,
    readyInMinutes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'recipe',
  });
  return recipe;
};