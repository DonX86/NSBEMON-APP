'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn('Members', 'teamId', {
        type: Sequelize.UUID,
        references: {
          model: 'Teams',
          key: 'id'
        },
        onUpdate: 'cascade'
      })
      .then(() => {
        return queryInterface.addColumn('Members', 'profileId', {
          allowNull: false,
          type: Sequelize.UUID,
          references: {
            model: 'Profiles',
            key: 'id'
          },
          onUpdate: 'cascade'
        });
      });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('Members', 'teamId').then(() => {
      return queryInterface.removeColumn('Members', 'profileId');
    });
  }
};
