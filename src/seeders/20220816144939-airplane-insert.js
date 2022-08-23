'use strict';
const { v4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('airPlanes', [{
      id: v4(),
      passangers: 8,
      router_id: '4eb1aaee-a783-45a7-8c10-2afd772b500b',
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      id: v4(),
      passangers: 8,
      router_id: '4eb1aaee-a783-45a7-8c10-2afd772b500b',
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      id: v4(),
      passangers: 8,
      router_id: '4eb1aaee-a783-45a7-8c10-2afd772b500b',
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      id: v4(),
      passangers: 8,
      router_id: '4eb1aaee-a783-45a7-8c10-2afd772b500b',
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      id: v4(),
      passangers: 8,
      router_id: '4eb1aaee-a783-45a7-8c10-2afd772b500b',
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('airPlanes', null, {});
    
  }
};
