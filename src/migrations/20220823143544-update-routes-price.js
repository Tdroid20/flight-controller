'use strict';
const { DataTypes } = require('sequelize')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Routes', 'price', {
      type: DataTypes.DECIMAL(10, 2),
    });
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.dropTable('Routes');
     
  }
};
