'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('airPlanes', [{
      id: 1,
      passangers: 8,
      router_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      id: 2,
      passangers: 8,
      router_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      id: 3,
      passangers: 8,
      router_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      id: 4,
      passangers: 8,
      router_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      id: 5,
      passangers: 8,
      router_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('airPlanes', null, {});
    
  }
};
