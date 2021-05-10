'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Selects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.INTEGER
      },
      id_calendar: {
        type: Sequelize.INTEGER,
        references: {model: 'Calendars', key: 'id'},
        onDelete: 'CASCADE',
        allowNull: false,
      },
      id_client: {
        type: Sequelize.INTEGER,
        references: {model: 'Clients', key: 'id'},
        onDelete: 'CASCADE',
        allowNull: false,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Selects');
  }
};