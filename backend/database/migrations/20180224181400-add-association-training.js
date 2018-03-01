'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn('Trainings', 'memberId', {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'Members',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      .then(() => {
        return queryInterface.addColumn('Trainings', 'categoryId', {
          allowNull: false,
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
    return queryInterface.removeColumn('Trainings', 'memberId').then(() => {
      return queryInterface.removeColumn('Trainings', 'categoryId');
    });
  }
};
