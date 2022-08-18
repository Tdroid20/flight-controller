'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class passengers extends Model {
    static associate(models) {
    }
  }
  passengers.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
    },
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    visa: DataTypes.STRING,
    nationality: DataTypes.STRING,
    isMarried: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'passengers',
  });
  return passengers;
};