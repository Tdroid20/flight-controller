'use strict';
const { v4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('passengers', [{
        id: v4(),
        name: 'Richard Pereira',
        age: 16,
        visa: 'Brasil',
        nationality: 'Brasileiro',
        isMarried: false,
        cpf: '15464598502',
        email: 'richard@email.com',
        startIn: 'SP',
        endsIn: 'RS',
        haveDiscount: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: v4(),
        name: 'Igor Santos',
        age: 28,
        visa: 'Brasil',
        nationality: 'Brasileiro',
        isMarried: true,
        cpf: '54325645925',
        email: 'igor@email.com',
        startIn: 'SP',
        endsIn: 'RS',
        haveDiscount: true,
        createdAt: new Date(),
        updatedAt: new Date()
   }], {});
   
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('passengers', null, {});
  }
};