'use strict';
const { v4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('airPlanes', [{
      id: v4(),
      passangers: 8,
      router_id: 'f1b577ca-d54a-4a5a-860d-9c3870d8fb62',
      routerLine: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      id: v4(),
      passangers: 8,
      router_id: '9e1c4e09-49c7-491c-96a0-d667b0dad4b0',
      routerLine: 3,
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      id: v4(),
      passangers: 8,
      router_id: '6527ed49-5de5-47f2-9cbe-3dfd0bd0b242',
      routerLine: 5,
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      id: v4(),
      passangers: 8,
      router_id: 'bfd29146-4b1c-4932-92c8-72a698bb15a8',
      routerLine: 4,
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      id: v4(),
      passangers: 8,
      router_id: 'c7ce3791-5d0f-41ad-b50c-772118e22f68',
      routerLine: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('airPlanes', null, {});
    
  }
};
