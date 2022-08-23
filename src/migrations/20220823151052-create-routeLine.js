'use strict';
const { DataTypes } = require('sequelize')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Routes', 'routerLine', {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false
    });
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.dropTable('Routes');
     
  }
};