'use strict';
const { v4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('airPlanes', [{
      id: v4(),
      router_id: '9f5224e2-d23d-4657-a541-021c3545cfd2',
      routerLine: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      id: v4(),
      router_id: '4665b04f-fe71-4875-8659-be375b5bf2c5',
      routerLine: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      id: v4(),
      router_id: 'f817cdb7-dcbe-4a14-aee0-a7726a89dd6c',
      routerLine: 3,
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      id: v4(),
      router_id: '575a6c3b-7b88-4d82-bbbe-2e6453b6931e',
      routerLine: 4,
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      id: v4(),
      router_id: 'c64cd315-d971-461c-9c78-82a8025a3d5a',
      routerLine: 5,
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('airPlanes', null, {});
    
  }
};
