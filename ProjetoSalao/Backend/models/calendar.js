'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Calendar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Calendar.init({
    date: DataTypes.DATE,
    hour: DataTypes.TIME,
    status: DataTypes.INTEGER,
    id_service: DataTypes.INTEGER,
    id_client: DataTypes.INTEGER,
    id_professional: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Calendar',
  });
  return Calendar;
};