'use strict';
const { DataTypes } = require('sequelize')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Routes', 'price', {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    });
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.dropTable('Routes');
     
  }
};
