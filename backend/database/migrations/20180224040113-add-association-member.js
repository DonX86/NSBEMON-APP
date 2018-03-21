'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn('Members', 'TeamId', {
        type: Sequelize.UUID,
        references: {
          model: 'Teams',
          key: 'id'
        },
        onUpdate: 'cascade'
      })
      .then(() => {
        return queryInterface.addColumn('Members', 'ProfileId', {
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
    return queryInterface.removeColumn('Members', 'TeamId').then(() => {
      return queryInterface.removeColumn('Members', 'ProfileId');
    });
  }
};
