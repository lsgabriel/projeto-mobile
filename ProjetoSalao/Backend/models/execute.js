'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Execute extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Execute.init({
    status: DataTypes.INTEGER,
    id_service: DataTypes.INTEGER,
    id_professional: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Execute',
  });
  return Execute;
};