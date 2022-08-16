'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Routes extends Model {
    static associate(models) {
    }
  }
  Routes.init({
    start: DataTypes.STRING,
    firstStop: DataTypes.STRING,
    secondStop: DataTypes.STRING,
    end: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Routes',
  });
  return Routes;
};