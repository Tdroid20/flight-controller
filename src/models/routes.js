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
    price: {
    type: DataTypes.DECIMAL(10, 2),
    },
    routerLine: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Routes',
  });
  return Routes;
};