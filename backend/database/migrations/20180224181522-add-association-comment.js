'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Comments', 'TrainingId', {
      type: Sequelize.UUID,
      references: {
        model: 'Trainings',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }).then(() => {
      return queryInterface.addColumn('Comments', 'MemberId', {
        type: Sequelize.UUID,
        references: {
          model: 'Members',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('Comments', 'TrainingId');
  }
};
