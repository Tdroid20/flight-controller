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
    start: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstStop: {
      type: DataTypes.STRING,
      allowNull: false
    },
    secondStop: {
      type: DataTypes.STRING,
      allowNull: false
    },
    end: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Routes',
  });
  return Routes;
};