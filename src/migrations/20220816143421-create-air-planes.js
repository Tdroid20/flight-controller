'use strict';
const { DataTypes, UniqueConstraintError } = require('sequelize');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('airPlanes', {
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
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('airPlanes');
  }
};