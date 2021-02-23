'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class calendar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.calendar.belongsTo(models.favorites)
    }
  };
  calendar.init({
    day: DataTypes.STRING,
    favoritesId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'calendar',
  });
  return calendar;
};