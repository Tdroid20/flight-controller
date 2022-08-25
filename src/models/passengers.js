'use strict';

const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class passengers extends Model {
    static associate(models) {
    }
  }
  passengers.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    visa: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isMarried: {
      type: DataTypes.BOOLEAN,
      allowNull:  false
    },
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    airPlane: {
      type: DataTypes.UUID,
      reference: {
        model: 'airPlane',
        key: 'id'
      }
    },
    haveDiscount: {
      type: DataTypes.BOOLEAN,
      default: false
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
    modelName: 'passengers',
  });
  return passengers;
};