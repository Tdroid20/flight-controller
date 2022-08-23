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
    passangers: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    router_id: {
      type: DataTypes.UUID,
      references: {
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