'use strict';
const { v4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Routes', [{
      id: v4(),
      start: 'SP',
      firstStop: 'PR',
      secondStop: 'SC',
      end: 'RS',
      price: 2000.90,
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      id: v4(),
      start: 'SP',
      firstStop: 'RJ',
      secondStop: 'ES',
      end: 'BA',
      price: 1500.90,
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      id: v4(),
      start: 'RR',
      firstStop: 'AM',
      secondStop: 'RO',
      end: 'MT',
      price: 1550.90,
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      id: v4(),
      start: 'AP',
      firstStop: 'MA',
      secondStop: 'AL',
      end: 'SE',
      price: 982.58,
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      id: v4(),
      start: 'PR',
      firstStop: 'GO',
      secondStop: 'TO',
      end: 'CE',
      price: 584.99,
      createdAt: new Date(),
      updatedAt: new Date()
     }  
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Routes', null, {});
    
  }
};
