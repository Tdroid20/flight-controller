'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class airPlanes extends Model {
    static associate(models) {
    }
  }
  airPlanes.init({
    passangers: DataTypes.NUMBER,
    router_id: {
      type: DataTypes.NUMBER,
      references: {         // User belongsTo Company 1:1
        model: 'Routes',
        key: 'id',
        field: 'router_id'
      }
    }
  }, {
    sequelize,
    modelName: 'airPlanes',
  });
  return airPlanes;
};