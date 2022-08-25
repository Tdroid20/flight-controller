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
        airPlane: '0ae0c191-7be5-4561-891a-5ff657962c12',
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
        airPlane: '1dd5ac3f-d594-48f7-ac5f-01bd1259fd75',
        haveDiscount: true,
        createdAt: new Date(),
        updatedAt: new Date()
   }], {});
   
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('passengers', null, {});
  }
};