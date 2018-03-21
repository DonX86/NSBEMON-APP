'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Members', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      isLeader: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING
      },
      encryptedPassword: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Members');
  }
};