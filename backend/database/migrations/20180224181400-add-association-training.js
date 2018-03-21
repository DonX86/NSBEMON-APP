'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn('Trainings', 'MemberId', {
        type: Sequelize.UUID,
        references: {
          model: 'Members',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      .then(() => {
        return queryInterface.addColumn('Trainings', 'CategoryId', {
          type: Sequelize.UUID,
          references: {
            model: 'Categories',
            key: 'id'
          },
          onUpdate: 'cascade'
        });
      });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('Trainings', 'MemberId').then(() => {
      return queryInterface.removeColumn('Trainings', 'CategoryId');
    });
  }
};
