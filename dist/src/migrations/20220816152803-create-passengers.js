'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('passengers', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      visa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nationality: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isMarried: {
        type: Sequelize.BOOLEAN,
        allowNull:  false
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      startIn: {
        type: Sequelize.STRING,
        allowNull: false
      },
      endsIn: {
        type: Sequelize.STRING,
        allowNull: false
      },
      haveDiscount: {
        type: Sequelize.BOOLEAN,
        default: false
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
