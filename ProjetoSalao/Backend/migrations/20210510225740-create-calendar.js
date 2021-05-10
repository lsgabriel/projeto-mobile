'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Calendars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      hour: {
        type: Sequelize.TIME
      },
      status: {
        type: Sequelize.INTEGER
      },
      id_service: {
        type: Sequelize.INTEGER,
        references: {model: 'Services', key: 'id'},
        onDelete: 'CASCADE',
        allowNull: false,
      },
      id_client: {
        type: Sequelize.INTEGER,
        references: {model: 'Clients', key: 'id'},
        onDelete: 'CASCADE',
        allowNull: false,
      },
      id_professional: {
        type: Sequelize.INTEGER,
        references: {model: 'Professionals', key: 'id'},
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
    await queryInterface.dropTable('Calendars');
  }
};