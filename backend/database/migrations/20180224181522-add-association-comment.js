'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Comments', 'trainingId', {
      allowNull: false,
      type: Sequelize.UUID,
      references: {
        model: 'Trainings',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }).then(() => {
      return queryInterface.addColumn('Comments', 'memberId', {
        allowNull: false,
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
    return queryInterface.removeColumn('Comments', 'trainingId');
  }
};
