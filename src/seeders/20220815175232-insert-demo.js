'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('passengers', [{
        name: 'Richard Pereira',
        age: 16,
        visa: 'Brasil',
        nationality: 'Brasileiro',
        isMarried: false,
        createdAt: new Date(),
        updatedAt: new Date()
     }, {
        name: 'Enzo Gabriel',
        age: 10,
        visa: 'Brasil',
        nationality: 'Brasileiro',
        isMarried: false,
        createdAt: new Date(),
        updatedAt: new Date()
     }, {
      name: 'Igor Santos',
      age: 28,
      visa: 'Brasil',
      nationality: 'Brasileiro',
      isMarried: true,
      createdAt: new Date(),
      updatedAt: new Date()
   }], {});
   
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('passengers', null, {});
  }
};
