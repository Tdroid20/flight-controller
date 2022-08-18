'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('passengers', { 
      id: Sequelize.INTEGER,
      name: Sequelize.STRING,
      age: Sequelize.INTEGER,
      visa: Sequelize.STRING,
      nationality: Sequelize.STRING,
      isMarried: Sequelize.BOOLEAN,
      goTo: {
        type: Sequelize.INTEGER,
        references: {
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

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('passengers');
    
  }
};
