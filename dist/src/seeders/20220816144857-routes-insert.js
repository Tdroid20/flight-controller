'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Routes', [{
      id: 1,
      start: 'SP',
      firstStop: 'PR',
      secondStop: 'SC',
      end: 'RS',
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      id: 2,
      start: 'SP',
      firstStop: 'RJ',
      secondStop: 'ES',
      end: 'BA',
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      id: 3,
      start: 'RR',
      firstStop: 'AM',
      secondStop: 'RO',
      end: 'MT',
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      id: 4,
      start: 'AP',
      firstStop: 'MA',
      secondStop: 'AL',
      end: 'SE',
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      id: 5,
      start: 'PR',
      firstStop: 'GO',
      secondStop: 'TO',
      end: 'CE',
      createdAt: new Date(),
      updatedAt: new Date()
     }  
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Routes', null, {});
    
  }
};
