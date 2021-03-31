'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Favorites.init({
    id_professional: DataTypes.INTEGER,
    id_client: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favorites',
  });
  return Favorites;
};