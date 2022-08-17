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
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    visa: DataTypes.STRING,
    nationality: DataTypes.STRING,
    isMarried: DataTypes.BOOLEAN,
    goTo: {
      type: DataTypes.NUMBER,
      references: {         // User belongsTo Company 1:1
        model: 'Routes',
        key: 'id',
        field: 'airplane_id'
      }
    }
  }, {
    sequelize,
    modelName: 'passengers',
  });
  return passengers;
};