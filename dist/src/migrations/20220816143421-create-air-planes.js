'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('airPlanes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID
      },
      passangers: {
        type: Sequelize.INTEGER
      },
      router_id: {
        type: Sequelize.INTEGER,
        references: {         // User belongsTo Company 1:1
          model: 'Routes',
          key: 'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('airPlanes');
  }
};