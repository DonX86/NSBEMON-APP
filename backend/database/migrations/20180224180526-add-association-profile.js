'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Profiles', 'MemberId', {
      type: Sequelize.UUID,
      references: {
        model: 'Members',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('Profiles', 'MemberId');
  }
};
