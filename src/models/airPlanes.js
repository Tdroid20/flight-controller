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
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    router_id: {
      type: DataTypes.UUID,
      references: {
        model: 'Routes',
        key: 'id',
      },
    },
    planeId: {
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'airPlanes',
  });
  return airPlanes;
};